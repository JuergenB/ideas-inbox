/*
 * lint-deck.mjs — pre-publish lint pass on a dark-theme deck source.
 *
 * Surfaces author-time patterns that produce readability bugs after the
 * dark→light transform. Returns an array of warnings; caller decides whether
 * to print, fail, or both. Today: we PRINT and proceed (warn-only). Future:
 * gate on a --strict flag.
 */

const RULES = [
  {
    id: "hardcoded-white-text",
    pattern: /color:\s*#fff{1,5}\b/gi,
    description:
      'Inline `color: #fff` / `#ffffff`. Disappears on light bg. Use `color: var(--t)` for primary text or `color: var(--bg)` for text-on-coloured-pill (so it inverts cleanly).',
  },
  {
    id: "svg-white-fill",
    pattern: /fill="#fff{1,5}"/gi,
    description:
      'SVG `fill="#fff"` / `#ffffff`. Invisible on light bg. Use `fill="#ff6b1a"` (brand orange — works on both) or `fill="currentColor"` with parent `color: var(--t)`.',
  },
  {
    id: "svg-white-stroke",
    pattern: /stroke="#fff{1,5}"/gi,
    description:
      'SVG `stroke="#fff"` / `#ffffff`. Invisible on light bg. Use a brand color or `stroke="currentColor"`.',
  },
  {
    id: "dark-photo-bg",
    pattern: /!\[bg[^\]]*brightness:0\.[0-4]\d*[^\]]*\]/gi,
    description:
      'Photo bg with `brightness:0.0–0.4` darkens the image so white text reads on it. In light mode the photo stays dark but body text becomes dark → invisible. The publish pipeline auto-rewrites brightness to 0.95 for light, but the AUTHORED SLIDE should not assume white text reads — use `color: var(--t)` and a slide-class with theme-aware overlays instead.',
  },
  {
    id: "near-white-text-light",
    pattern: /color:\s*#(f[0-9a-f]{2}|f[0-9a-f]{5})\b/gi,
    description:
      "Near-white inline text color. Will read poorly on the light bg. Use `color: var(--t)` or a darker explicit hex.",
  },
  {
    id: "hardcoded-near-black-bg",
    pattern: /background(-color)?:\s*#0[0-9a-fA-F]{2,5}\b/gi,
    description:
      "Hardcoded near-black background. The publish pipeline rewrites these to white for light mode, but prefer `var(--s)` (surface) or `var(--bg)` (page) so the substitution is automatic.",
    severity: "info",
  },
]

/**
 * Scan a deck source for warnings.
 * @param {string} src — full deck markdown source
 * @returns {{rule: string, line: number, snippet: string, description: string, severity: string}[]}
 */
export function lintDeck(src) {
  const lines = src.split("\n")
  const warnings = []

  for (const rule of RULES) {
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i]
      // Skip the YAML frontmatter style block — those rules ARE the theme.
      // We only flag things in slide BODY content (after the first `---`
      // closing fence). Heuristic: skip lines 0..frontmatter-end.
      if (i < frontmatterEnd(lines)) continue
      const matches = line.match(rule.pattern)
      if (matches) {
        warnings.push({
          rule: rule.id,
          line: i + 1,
          snippet: line.trim().slice(0, 140),
          description: rule.description,
          severity: rule.severity || "warn",
        })
      }
    }
  }

  // Whole-source checks (not per-line). These catch deck-level conventions
  // codified in the marp-slides skill — bg-pattern classes for visual depth
  // in light mode, and a logo on the lead slide for brand consistency.
  // Idea 007 was authored without these and looked visually thin compared to
  // its siblings until the regression was caught manually. Lint catches it now.
  const wholeSourceWarnings = lintWholeSource(src)
  warnings.push(...wholeSourceWarnings)

  return warnings
}

function lintWholeSource(src) {
  const out = []

  // bg-pattern classes — the deck should have at least one section.bg-*
  // rule defined in its style block. Without these, light mode renders
  // as flat grey/white, losing the depth that makes the deck feel finished.
  if (!/section\.bg-[a-z-]+\s*\{/i.test(src)) {
    out.push({
      rule: "no-bg-pattern-classes",
      line: 1,
      snippet: "<deck has no `section.bg-*` rules in its style block>",
      description:
        'Deck source defines no `section.bg-*` classes (bg-glow / bg-hero / bg-dots / bg-grid). Light mode will render as flat #fafafa with no depth. See the marp-slides skill for the canonical light-mode bg-pattern set; sibling decks (001, 005) follow it.',
      severity: "warn",
    })
  }

  // Logo on the lead slide — either as a `header:` frontmatter declaration
  // with an image, or as an inline `<img>` near the top of the first slide.
  // Decks that ship without either look bare on the README thumbnail.
  const hasHeaderImage = /^header:\s*['"]?\s*!\[/m.test(src)
  const firstLeadIndex = src.indexOf("<!-- _class: lead")
  let firstLeadHasLogo = false
  if (firstLeadIndex !== -1) {
    const leadBlock = src.slice(firstLeadIndex, firstLeadIndex + 1500)
    firstLeadHasLogo =
      /<img[^>]+(logo|polymash|brand|polywiz)/i.test(leadBlock) ||
      /<img[^>]+style="[^"]*position:\s*absolute/i.test(leadBlock)
  }
  if (!hasHeaderImage && !firstLeadHasLogo) {
    out.push({
      rule: "no-lead-logo",
      line: 1,
      snippet: "<no `header:` image declaration and no logo on the first lead slide>",
      description:
        "Deck has no logo on the cover/lead slide and no `header:` image declaration in frontmatter. Sibling decks place the brand logo top-left or top-right on the opening slide for consistency. If the bare aesthetic is intentional, ignore.",
      severity: "info",
    })
  }

  return out
}

function frontmatterEnd(lines) {
  if (lines[0]?.trim() !== "---") return 0
  for (let i = 1; i < lines.length; i++) {
    if (lines[i].trim() === "---") return i + 1
  }
  return 0
}

/**
 * Print warnings in a stable, scannable format. Returns the count by severity.
 */
export function printLintReport(warnings) {
  if (warnings.length === 0) {
    console.log("  ✓ lint clean — no readability anti-patterns detected")
    return { warn: 0, info: 0 }
  }
  const byRule = new Map()
  for (const w of warnings) {
    if (!byRule.has(w.rule)) byRule.set(w.rule, [])
    byRule.get(w.rule).push(w)
  }
  let warn = 0
  let info = 0
  console.log(`  ⚠ lint found ${warnings.length} potential issue(s):`)
  for (const [ruleId, items] of byRule) {
    const sev = items[0].severity
    const icon = sev === "info" ? "·" : "⚠"
    console.log(`    ${icon} ${ruleId} (${items.length}× ): ${items[0].description}`)
    for (const item of items.slice(0, 5)) {
      console.log(`        line ${item.line}: ${item.snippet}`)
    }
    if (items.length > 5) console.log(`        ... and ${items.length - 5} more`)
    if (sev === "info") info += items.length
    else warn += items.length
  }
  return { warn, info }
}
