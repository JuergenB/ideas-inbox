#!/usr/bin/env node
/*
 * publish-deck.mjs — publish one MARP deck and verify it visually.
 *
 * Pipeline:
 *   1. Upload referenced local images to Vercel Blob (presentations/<slug>/...).
 *   2. Rewrite the dark source so image refs are absolute Blob URLs.
 *   3. Lint the dark source — warn on hardcoded `#fff`, dark-photo bgs,
 *      SVG `fill="#fff"`, etc. Print, do not block (yet).
 *   4. Generate a VISIBLE light variant at presentations/<deck>.light.md
 *      (gitignored — see .gitignore). Includes a DO-NOT-EDIT header so
 *      the Cursor MARP plugin can preview it directly.
 *   5. Render dark HTML, light HTML, and PDF into ideas/<idea>/exports/.
 *   6. Render slide-1 PNG from light variant; upload to Blob as the README
 *      thumbnail.
 *   7. Run a Playwright visual audit of BOTH HTML variants — screenshot
 *      every slide, run a contrast heuristic, write a readability report.
 *      Audit screenshots land in exports/.audit/<dark|light>/ (gitignored).
 *
 * Requires BLOB_READ_WRITE_TOKEN in the environment.
 *
 * Usage:
 *   node scripts/publish-deck.mjs <idea-folder-name> [<deck-basename>]
 */

import { put } from "@vercel/blob"
import { execSync } from "node:child_process"
import fs from "node:fs"
import path from "node:path"
import { darkToLight } from "./lib/dark-to-light.mjs"
import { lintDeck, printLintReport } from "./lib/lint-deck.mjs"
import { auditDeck, printAuditReport } from "./lib/audit-deck.mjs"

const token = process.env.BLOB_READ_WRITE_TOKEN
if (!token) {
  console.error("BLOB_READ_WRITE_TOKEN is not set. export it from an .env.local first.")
  process.exit(1)
}

const [, , ideaFolder, deckBasenameArg] = process.argv
if (!ideaFolder) {
  console.error("usage: node scripts/publish-deck.mjs <idea-folder-name> [<deck-basename>]")
  process.exit(1)
}

const repoRoot = path.resolve(import.meta.dirname, "..")
const ideaSlug = ideaFolder.replace(/^\d+-/, "")
const ideaDir = path.join(repoRoot, "ideas", ideaFolder)
const presentationsDir = path.join(ideaDir, "presentations")
const exportsDir = path.join(ideaDir, "exports")

if (!fs.existsSync(presentationsDir)) {
  console.error(`no presentations/ folder at ${presentationsDir}`)
  process.exit(1)
}

const deckBasename =
  deckBasenameArg ||
  fs
    .readdirSync(presentationsDir)
    .find((f) => f.endsWith(".md") && !f.startsWith(".") && !f.endsWith(".light.md"))
    ?.replace(/\.md$/, "")

if (!deckBasename) {
  console.error(`no .md deck found in ${presentationsDir}`)
  process.exit(1)
}

const deckSourcePath = path.join(presentationsDir, `${deckBasename}.md`)
if (!fs.existsSync(deckSourcePath)) {
  console.error(`no deck source at ${deckSourcePath}`)
  process.exit(1)
}

console.log(`\n[publish-deck] idea=${ideaFolder} deck=${deckBasename}.md`)

async function uploadFile(localPath, blobPathname, contentType) {
  const buffer = fs.readFileSync(localPath)
  const blob = await put(blobPathname, buffer, {
    access: "public",
    contentType,
    addRandomSuffix: false,
    allowOverwrite: true,
    token,
  })
  console.log(`  ✓ uploaded ${blobPathname} → ${blob.url}`)
  return blob.url
}

const source = fs.readFileSync(deckSourcePath, "utf8")

// ── 1. Upload referenced local images ───────────────────────────────────
const imageRefs = [
  ...source.matchAll(/src="(\.\/[^"]+\.(png|jpg|jpeg|gif|svg))"/g),
].map((m) => m[1])
const uniqueImageRefs = [...new Set(imageRefs)]

console.log(
  `  found ${uniqueImageRefs.length} local image reference${uniqueImageRefs.length === 1 ? "" : "s"}`,
)

const localToBlobUrl = new Map()
for (const ref of uniqueImageRefs) {
  const localAbs = path.resolve(presentationsDir, ref)
  if (!fs.existsSync(localAbs)) {
    console.warn(`  ⚠ referenced image missing on disk: ${ref} (resolved ${localAbs})`)
    continue
  }
  const filename = path.basename(ref)
  const ext = path.extname(filename).toLowerCase().replace(".", "")
  const contentType =
    ext === "png"
      ? "image/png"
      : ext === "svg"
        ? "image/svg+xml"
        : ext === "gif"
          ? "image/gif"
          : "image/jpeg"
  const blobPathname = `presentations/${ideaSlug}/${filename}`
  const url = await uploadFile(localAbs, blobPathname, contentType)
  localToBlobUrl.set(ref, url)
}

let rewritten = source
for (const [ref, url] of localToBlobUrl) {
  const escaped = ref.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
  rewritten = rewritten.replace(new RegExp(`src="${escaped}"`, "g"), `src="${url}"`)
}

const rewrittenSourceChanged = rewritten !== source
if (rewrittenSourceChanged) {
  fs.writeFileSync(deckSourcePath, rewritten, "utf8")
  console.log(`  ✎ rewrote ${uniqueImageRefs.length} image ref(s) in ${deckBasename}.md → Blob URLs`)
}

fs.mkdirSync(exportsDir, { recursive: true })

// ── 2. Lint the dark source ──────────────────────────────────────────────
console.log(`  running pre-publish lint...`)
const warnings = lintDeck(rewritten)
const { warn, info } = printLintReport(warnings)
if (warn > 0) {
  console.log(`  ↳ ${warn} warn-level finding(s) — proceeding (lint is warn-only for now).`)
}

// ── 3. Emit visible light variant ────────────────────────────────────────
//    MARP frontmatter must start at line 1 (no preceding comment), so the
//    DO-NOT-EDIT marker is injected as a comment on the marp: line of the
//    YAML block via a YAML inline comment, plus a Markdown comment AFTER
//    the closing frontmatter `---`.
const lightSourcePath = path.join(presentationsDir, `${deckBasename}.light.md`)
const lightSrc = darkToLight(rewritten)
// Insert a `<!-- GENERATED ... -->` comment right after the frontmatter close
// (the second `---` line). This keeps MARP frontmatter intact.
const fmCloseIdx = (() => {
  const lines = lightSrc.split("\n")
  if (lines[0]?.trim() !== "---") return -1
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") return i
  }
  return -1
})()
const lightHeader =
  "<!-- GENERATED — do not edit; regenerated by scripts/publish-deck.mjs " +
  `from ${deckBasename}.md. This file is gitignored. -->\n`
let lightOut
if (fmCloseIdx > 0) {
  const lines = lightSrc.split("\n")
  lines.splice(fmCloseIdx + 1, 0, "", lightHeader.trim())
  lightOut = lines.join("\n")
} else {
  lightOut = lightHeader + lightSrc
}
fs.writeFileSync(lightSourcePath, lightOut, "utf8")
console.log(`  ✎ wrote ${path.relative(repoRoot, lightSourcePath)} (visible, gitignored)`)

// ── 4. Render HTML + PDF ─────────────────────────────────────────────────
const darkHtmlOut = path.join(exportsDir, `${deckBasename}.html`)
const lightHtmlOut = path.join(exportsDir, `${deckBasename}-light.html`)
console.log(`  → regenerating ${deckBasename}.html (dark) and ${deckBasename}-light.html`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${deckSourcePath}" -o "${darkHtmlOut}" --html --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${lightSourcePath}" -o "${lightHtmlOut}" --html --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)

const pdfOutPath = path.join(exportsDir, `${deckBasename}.pdf`)
console.log(`  → regenerating ${deckBasename}.pdf (dark)`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${deckSourcePath}" -o "${pdfOutPath}" --html --pdf --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)

// ── 5. Slide-1 PNG thumbnail (from light) ────────────────────────────────
const thumbnailTmpDir = fs.mkdtempSync(path.join(exportsDir, ".thumb-"))
const thumbnailStem = path.join(thumbnailTmpDir, `${deckBasename}-light`)
console.log(`  → rendering slide PNGs from light variant to extract slide-1`)
execSync(
  `npx --yes @marp-team/marp-cli@latest "${lightSourcePath}" -o "${thumbnailStem}.png" --html --images png --image-scale 2 --allow-local-files`,
  { cwd: repoRoot, stdio: ["ignore", "ignore", "inherit"] },
)
const slideOnePath = fs
  .readdirSync(thumbnailTmpDir)
  .filter((f) => f.endsWith(".png"))
  .sort()[0]
const slideOneAbs = path.join(thumbnailTmpDir, slideOnePath)

const thumbnailBlobPath = `presentations/${ideaSlug}-slide-1.png`
const thumbUrl = await uploadFile(slideOneAbs, thumbnailBlobPath, "image/png")

fs.rmSync(thumbnailTmpDir, { recursive: true, force: true })

// ── 6. Visual audit (Playwright) ─────────────────────────────────────────
const auditRoot = path.join(exportsDir, ".audit")
fs.rmSync(auditRoot, { recursive: true, force: true })
console.log(`\n  running Playwright visual audit (light + dark)...`)
let blockingTotal = 0
try {
  const lightReport = await auditDeck(lightHtmlOut, path.join(auditRoot, "light"))
  blockingTotal += printAuditReport(lightReport, "light")
  const darkReport = await auditDeck(darkHtmlOut, path.join(auditRoot, "dark"))
  blockingTotal += printAuditReport(darkReport, "dark")
} catch (err) {
  console.warn(`  ⚠ audit failed to run: ${err.message}`)
  console.warn(`    (publish continues — install Playwright with 'npx playwright install chromium' if missing)`)
}

// ── 7. Done ──────────────────────────────────────────────────────────────
const vercelBase = "https://ideas-inbox-mocha.vercel.app"
const vercelLightUrl = `${vercelBase}/ideas/${ideaFolder}/exports/${deckBasename}-light.html`
const vercelDarkUrl = `${vercelBase}/ideas/${ideaFolder}/exports/${deckBasename}.html`

console.log(`\n[publish-deck] done for ${ideaFolder}`)
console.log(`  HTML (light, default): ${vercelLightUrl}`)
console.log(`  HTML (dark):           ${vercelDarkUrl}`)
console.log(`  Thumbnail:             ${thumbUrl}`)
console.log(`  PDF:                   ${pdfOutPath} (local)`)
console.log(`  Audit screenshots:     ${path.relative(repoRoot, auditRoot)}/{light,dark}/slide-NN.png`)
if (blockingTotal > 0) {
  console.log(`\n  ⚠ ${blockingTotal} readability finding(s) — review .audit screenshots before committing.`)
} else {
  console.log(`\n  ✓ visual audit clean.`)
}
console.log(`\n  HTML files written to ${exportsDir} — commit + push for Vercel to serve them.`)
