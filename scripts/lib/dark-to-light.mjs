/*
 * dark-to-light.mjs — transform a dark-theme MARP source into a light-theme variant.
 *
 * The pipeline is regex-based on purpose: deck sources are author-friendly
 * Markdown + inline HTML, not a clean DOM, and a parser-based rewrite would
 * touch much more than we want. Each rule below is documented with the bug
 * class it fixes so future contributors can extend confidently.
 */

/**
 * Transform a dark-theme MARP source to a light-theme variant.
 *
 * Substitutes `:root` palette tokens, then sweeps inline styles and SVG
 * attributes that don't flow through CSS variables. Brand-orange / blue /
 * green / red / gold accent colors are preserved.
 */
export function darkToLight(src) {
  let out = src

  // ── 1. Root palette tokens ──────────────────────────────────────────────
  out = out.replace(/--bg:\s*#[0-9a-fA-F]{3,8}/g, "--bg: #fafafa")
  out = out.replace(/--s:\s*#[0-9a-fA-F]{3,8}/g, "--s: #ffffff")
  out = out.replace(/--b:\s*#[0-9a-fA-F]{3,8}/g, "--b: #e5e5e5")
  out = out.replace(/--t:\s*#[0-9a-fA-F]{3,8}/g, "--t: #0c0c0c")
  out = out.replace(/--body:\s*#[0-9a-fA-F]{3,8}/g, "--body: #333333")
  out = out.replace(/--m:\s*#[0-9a-fA-F]{3,8}/g, "--m: #666666")
  out = out.replace(/--label:\s*#[0-9a-fA-F]{3,8}/g, "--label: #555555")

  // ── 2. Section base background ──────────────────────────────────────────
  out = out.replace(/background-color:\s*#0[0-9a-fA-F]{2,5}\b/g, "background-color: #fafafa")
  out = out.replace(/background:\s*var\(--bg\)/g, "background: var(--bg)") // no-op — token handles it

  // ── 3. Hardcoded dark greyscale backgrounds on inline-styled cards/panels.
  //    These don't flow through :root so we substitute by hex. Order matters
  //    only in that more specific (longer) hex values come before shorter
  //    ones; here each rule is on a distinct pattern.
  //    Bug class fixed: dark-on-dark text in light mode, e.g. an inline
  //    `background: #111` with `color: var(--t)` (now black) → black-on-black.
  out = out.replace(/background:\s*#0a0a0a\b/gi, "background: #ffffff")
  out = out.replace(/background:\s*#0c0c0c\b/gi, "background: #ffffff")
  out = out.replace(/background:\s*#0d0d0d\b/gi, "background: #ffffff")
  out = out.replace(/background:\s*#0e0e0e\b/gi, "background: #ffffff")
  out = out.replace(/background:\s*#111\b/gi, "background: #ffffff")
  out = out.replace(/background:\s*#161616\b/gi, "background: #f5f5f5")
  out = out.replace(/background:\s*#1a1a1a\b/gi, "background: #f0f0f0")
  out = out.replace(/background:\s*#1f1f1f\b/gi, "background: #ececec")
  out = out.replace(/background:\s*#222\b/gi, "background: #e8e8e8")
  out = out.replace(/background:\s*#000\b/gi, "background: #fafafa")
  out = out.replace(/background:\s*#000000\b/gi, "background: #fafafa")

  // ── 4. Hardcoded dark borders ───────────────────────────────────────────
  out = out.replace(/border:\s*1px solid #0c0c0c\b/gi, "border: 1px solid #d4d4d4")
  out = out.replace(/border:\s*1px solid #1a1a1a\b/gi, "border: 1px solid #e5e5e5")
  out = out.replace(/border:\s*1px solid #1f1f1f\b/gi, "border: 1px solid #e5e5e5")
  out = out.replace(/border:\s*1px solid #222\b/gi, "border: 1px solid #e5e5e5")
  out = out.replace(/border:\s*2px solid #0c0c0c\b/gi, "border: 2px solid #d4d4d4")
  out = out.replace(/border-bottom:\s*1px solid #0e0e0e\b/gi, "border-bottom: 1px solid #e5e5e5")
  out = out.replace(/border-bottom:\s*1px solid #111\b/gi, "border-bottom: 1px solid #e5e5e5")
  out = out.replace(/border-bottom:\s*1px solid #1a1a1a\b/gi, "border-bottom: 1px solid #e5e5e5")
  out = out.replace(/border-top:\s*1px solid #0e0e0e\b/gi, "border-top: 1px solid #e5e5e5")
  out = out.replace(/border-top:\s*1px solid #111\b/gi, "border-top: 1px solid #e5e5e5")

  // ── 5. SVG fill / stroke attributes pointing at near-black greys ────────
  //    Bug class fixed: idea 007 slide 12 had `<circle stroke="#111">` as a
  //    background ring — invisible on light bg. Substitute to a mid-grey
  //    that reads on both. Also handle `fill="#111"` for the same reason.
  out = out.replace(/stroke="#0[0-9a-fA-F]"\b/gi, 'stroke="#888"')
  out = out.replace(/stroke="#1[0-9a-fA-F]"\b/gi, 'stroke="#bbb"')
  out = out.replace(/stroke="#22"/gi, 'stroke="#bbb"')
  out = out.replace(/stroke="#222"/gi, 'stroke="#bbb"')
  out = out.replace(/stroke="#0c0c0c"/gi, 'stroke="#dddddd"')
  out = out.replace(/stroke="#111"/gi, 'stroke="#dddddd"')
  out = out.replace(/stroke="#1a1a1a"/gi, 'stroke="#e5e5e5"')
  out = out.replace(/fill="#0c0c0c"/gi, 'fill="#fafafa"')
  out = out.replace(/fill="#111"/gi, 'fill="#f5f5f5"')
  out = out.replace(/fill="#0a0a0a"/gi, 'fill="#fafafa"')

  // ── 6. SVG fill="#fff" / fill="#ffffff" — text/shapes assumed visible
  //    on dark bg. In light mode they vanish. Swap to brand-orange so they
  //    still read AND match the deck's accent palette.
  //    Bug class fixed: idea 007 slide 7 SVG numerals were white-on-white.
  out = out.replace(/fill="#fff"/gi, 'fill="#ff6b1a"')
  out = out.replace(/fill="#ffffff"/gi, 'fill="#ff6b1a"')
  out = out.replace(/stroke="#fff"/gi, 'stroke="#ff6b1a"')
  out = out.replace(/stroke="#ffffff"/gi, 'stroke="#ff6b1a"')

  // ── 7. Inline `color: #fff*` (text). On dark bg this is the body color;
  //    on light bg it disappears. Swap to dark text. Don't touch white text
  //    that lives inside an orange/coloured pill — those use `color: #fff`
  //    on a `background: #ff6b1a` and stay readable. We can't reliably
  //    distinguish those from regex, so we LINT them at author time and
  //    ASK the author to switch to `color: var(--bg)` for pill text. For
  //    now, leave `color: #fff*` ALONE in the transform (linter warns).
  //    No replacement here on purpose — see lint-deck.mjs.

  // ── 8. `![bg brightness:0.X]` photo backgrounds. The dark photo + white
  //    text combo doesn't survive the flip — light mode keeps the dark
  //    photo (because it's just an image URL) but body text becomes dark.
  //    Strategy: REMOVE the `brightness:` filter for light mode entirely.
  //    The original photo will read; if the slide had hardcoded white text
  //    on top, the linter has already flagged that for the author to fix.
  //    Bug class fixed: idea 007 slide 1 + closing slide had
  //    `![bg brightness:0.12](photo.jpg)` + `color: #fff` text → light
  //    variant kept the dark-photo bg, white text invisible on it.
  out = out.replace(/!\[bg([^\]]*?)\s+brightness:0\.\d+/gi, "![bg$1 brightness:0.95")
  out = out.replace(/!\[bg([^\]]*?)\s+brightness:\.\d+/gi, "![bg$1 brightness:0.95")

  // ── 9. Misc greyscale utility colors used inline ────────────────────────
  out = out.replace(/rgba\(255,\s*255,\s*255,/g, "rgba(0,0,0,")
  out = out.replace(/color:\s*#aaa\b/g, "color: #555")
  out = out.replace(/color:\s*#a8a8a8\b/gi, "color: #555")
  out = out.replace(/color:\s*#555\b/g, "color: #888")
  out = out.replace(/color:\s*#151515\b/g, "color: #dddddd")

  return out
}
