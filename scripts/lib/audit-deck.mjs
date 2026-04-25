/*
 * audit-deck.mjs (lib) — Playwright visual audit of a rendered MARP HTML.
 *
 * For each slide:
 *   1. Take a screenshot at 1280×720, deviceScaleFactor=1 (per global rule —
 *      stay well under 2000px to avoid Claude API image-dimension breaks).
 *   2. Sample every visible text element's computed color vs its background
 *      color (walking ancestors when the element bg is transparent). Flag
 *      WCAG-contrast-fail combinations (< 3:1 contrast ratio).
 *   3. Detect SVG <text> elements with fill values that match the page bg.
 *
 * Returns a structured report. Caller summarises and decides whether to
 * block publish.
 */

import { chromium } from "playwright"
import fs from "node:fs"
import path from "node:path"

/**
 * @param {string} htmlPath — absolute path to rendered HTML
 * @param {string} outDir — absolute path to write screenshots
 * @returns {Promise<{slides: number, screenshots: string[], findings: object[]}>}
 */
export async function auditDeck(htmlPath, outDir) {
  fs.mkdirSync(outDir, { recursive: true })
  const fileUrl = "file://" + path.resolve(htmlPath)

  const browser = await chromium.launch()
  const ctx = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  })
  const page = await ctx.newPage()
  // Suppress noisy console errors from MARP HTML (they don't affect render).
  page.on("pageerror", () => {})
  await page.goto(fileUrl, { waitUntil: "networkidle" })
  await page.waitForTimeout(500)

  const total = await page.evaluate(() => document.querySelectorAll("section").length)

  const screenshots = []
  const findings = []

  for (let i = 1; i <= total; i++) {
    await page.evaluate((n) => {
      if (location.hash !== `#${n}`) location.hash = `#${n}`
    }, i)
    await page.waitForTimeout(250)

    const screenshotPath = path.join(outDir, `slide-${String(i).padStart(2, "0")}.png`)
    await page.screenshot({
      path: screenshotPath,
      clip: { x: 0, y: 0, width: 1280, height: 720 },
    })
    screenshots.push(screenshotPath)

    // Run readability heuristic IN the page context.
    const slideFindings = await page.evaluate((slideNum) => {
      const issues = []

      // Resolve the active section (the one matching :target or first visible).
      const sections = Array.from(document.querySelectorAll("section"))
      const active =
        sections.find((s) => s.matches(":target")) ||
        sections.find((s) => {
          const r = s.getBoundingClientRect()
          return r.top < window.innerHeight && r.bottom > 0
        }) ||
        sections[slideNum - 1]
      if (!active) return issues

      // Resolve the active section's effective background by walking up until
      // a non-transparent bg is found. MARP wraps each section in containers.
      function effectiveBg(el) {
        let cur = el
        while (cur) {
          const cs = window.getComputedStyle(cur)
          const bg = cs.backgroundColor
          if (bg && bg !== "rgba(0, 0, 0, 0)" && bg !== "transparent") return bg
          cur = cur.parentElement
        }
        return "rgb(255, 255, 255)"
      }

      function parseRgb(str) {
        const m = str.match(/rgba?\(([^)]+)\)/)
        if (!m) return null
        const parts = m[1].split(",").map((s) => parseFloat(s.trim()))
        return { r: parts[0], g: parts[1], b: parts[2], a: parts[3] ?? 1 }
      }

      function relLum({ r, g, b }) {
        const c = [r, g, b].map((v) => {
          const s = v / 255
          return s <= 0.03928 ? s / 12.92 : Math.pow((s + 0.055) / 1.055, 2.4)
        })
        return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2]
      }

      function contrast(fg, bg) {
        const a = relLum(fg)
        const b = relLum(bg)
        return (Math.max(a, b) + 0.05) / (Math.min(a, b) + 0.05)
      }

      const sectionBg = parseRgb(effectiveBg(active))

      // Sample HTML text elements
      const textEls = active.querySelectorAll(
        "h1, h2, h3, h4, h5, h6, p, span, div, li, td, th, strong, em, a, code",
      )
      for (const el of textEls) {
        const text = el.innerText?.trim()
        if (!text || text.length < 2) continue
        // Skip elements that have child elements with text — we want leaf text.
        const hasTextChild = Array.from(el.children).some(
          (c) => c.innerText && c.innerText.trim(),
        )
        if (hasTextChild) continue
        const cs = window.getComputedStyle(el)
        const fg = parseRgb(cs.color)
        const bg = parseRgb(effectiveBg(el)) || sectionBg
        if (!fg || !bg) continue
        const ratio = contrast(fg, bg)
        if (ratio < 3.0) {
          // Try to find tag info for reporting
          issues.push({
            type: "low-contrast-text",
            tag: el.tagName.toLowerCase(),
            text: text.slice(0, 60),
            fg: cs.color,
            bg: `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
            ratio: Math.round(ratio * 100) / 100,
          })
        }
      }

      // Sample SVG <text> elements (regex transform misses these)
      const svgTexts = active.querySelectorAll("svg text")
      for (const el of svgTexts) {
        const text = el.textContent?.trim()
        if (!text) continue
        const fillAttr = el.getAttribute("fill")
        const cs = window.getComputedStyle(el)
        const fillStr = fillAttr || cs.fill
        if (!fillStr) continue
        // Resolve fill to rgb. Browser computed style already does this.
        const fg = parseRgb(cs.fill) || parseRgb(cs.color)
        const bg = parseRgb(effectiveBg(el.closest("svg")?.parentElement || active)) || sectionBg
        if (!fg || !bg) continue
        const ratio = contrast(fg, bg)
        if (ratio < 3.0) {
          issues.push({
            type: "low-contrast-svg-text",
            text: text.slice(0, 40),
            fg: cs.fill,
            bg: `rgb(${bg.r}, ${bg.g}, ${bg.b})`,
            ratio: Math.round(ratio * 100) / 100,
          })
        }
      }

      return issues
    }, i)

    if (slideFindings.length > 0) {
      findings.push({ slide: i, issues: slideFindings })
    }
  }

  await browser.close()
  return { slides: total, screenshots, findings }
}

/**
 * Print a concise audit report. Returns the count of blocking issues.
 */
export function printAuditReport(report, label) {
  console.log(`  audit (${label}): ${report.slides} slide(s) screenshot to .audit/${label}/`)
  if (report.findings.length === 0) {
    console.log(`    ✓ readability clean — no contrast issues detected`)
    return 0
  }
  let totalIssues = 0
  for (const { slide, issues } of report.findings) {
    console.log(`    ⚠ slide ${slide}: ${issues.length} issue(s)`)
    for (const issue of issues.slice(0, 4)) {
      const detail =
        issue.type === "low-contrast-svg-text"
          ? `SVG text "${issue.text}" fill=${issue.fg} on bg=${issue.bg} ratio=${issue.ratio}`
          : `<${issue.tag}> "${issue.text}" fg=${issue.fg} on bg=${issue.bg} ratio=${issue.ratio}`
      console.log(`        ${detail}`)
      totalIssues += 1
    }
    if (issues.length > 4) console.log(`        ... and ${issues.length - 4} more`)
  }
  return totalIssues
}
