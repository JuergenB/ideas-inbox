# Ideas Inbox — Project Rules

## Auto-Push for This Repo (per-repo override)

The global rule ("never commit/push without explicit ask") is overridden here. **For this repo specifically:** when a logical chunk of work is verified and mature enough for review, commit and push to `origin/main` without asking.

**Why:** the user's primary view of in-progress work is the GitHub repo + the Vercel-hosted decks. Holding changes locally hides progress and means the deployed deck stays stale. Decks 404 on Vercel until pushed; thumbnails on Blob update immediately but HTML files only deploy via repo push.

**How to apply:**
- "Mature enough" means: deck/audit/URL/thumbnail all verified, OR a doc/script change has been read-back-checked, OR a multi-step task hits a natural stopping point.
- NOT after every edit — batch related changes into one commit so the history reads cleanly.
- Always run the visual audit before committing republished decks (see "Visual Self-Verification" below). Never commit a deck with a flagged blocking finding on slide 1.
- If the change is risky (history rewrite, force-push, branch deletion, dropping `origin/main` work), DO NOT auto-push. Ask first. Reversibility check still applies.
- Trigger a fresh Vercel deploy after pushing deck HTML changes — `vercel --prod --yes` from the repo root. The GitHub→Vercel auto-deploy is unreliable here (last-known: doesn't fire on push).

## Idea Folder Structure

Each idea folder MUST keep its root clean so the README.md is immediately visible on GitHub. Only README.md should be a file at the root — everything else goes into organized subfolders.

### Standard folder layout:

```
ideas/NNN-idea-name/
├── README.md                # Only file at root — the discussion paper
├── presentations/           # Slide deck source files (.md), presentation images
├── research/                # Research documents and analysis
├── docs/                    # Communications, meeting invites, cover emails
└── exports/                 # Rendered outputs (PDF, HTML, PPTX)
```

- **Never** place loose files (images, PDFs, slide decks, research docs) at the idea folder root
- Folders are fine at root level — they're compact in GitHub's file listing
- Images used by presentations go in `presentations/images/` (keeps relative paths working)
- HTML/PDF exports always go in `exports/`

## When Adding a New Idea

1. Create the numbered folder with README.md and the standard subfolder structure
2. **Update the root README.md** — add the new idea to the "Current Ideas" table with a link to its folder
3. Update the folder structure tree in the root README if needed

## Linking Accompanying Artifacts from the README

Ideas are often shared with colleagues by dropping a GitHub link to the idea's README. Anyone arriving there should be able to reach the accompanying deck in a single click — and land in a fast, full-screen, keyboard-navigable presentation view, not a laggy PDF tab.

**Rule:** If an idea has a MARP deck, the README MUST surface it near the top — between the metadata block (Origin / Status / Date) and the first content section — as a clickable slide-1 thumbnail that opens the **hosted HTML deck** on Vercel Blob.

**Hosting split — HTML on Vercel, images on Blob.** Vercel Blob always serves HTML with `Content-Disposition: attachment` — clicking a `.html` on the Blob domain downloads it instead of rendering it. So HTML decks live in the repo under `ideas/<folder>/exports/*.html` and are served by the Vercel static deployment of this repo (`ideas-inbox-mocha.vercel.app`). Images and the slide-1 thumbnail PNG live on Vercel Blob (they serve `inline` fine and stay out of the repo as binary bloat).

**Publishing the deck:** run `scripts/publish-deck.mjs <idea-folder> [<deck-basename>]` from the repo root with `BLOB_READ_WRITE_TOKEN` in the environment. The script:
1. Uploads any local image references to Blob at `presentations/<idea-slug>/<filename>`.
2. Rewrites the deck source to use absolute Blob URLs for images.
3. Lints the dark source for readability anti-patterns (hardcoded `#fff` text, SVG `fill="#fff"`, dark photo backgrounds with `brightness:0.0–0.4`) — prints warnings, doesn't block.
4. Generates a VISIBLE `presentations/<deck>.light.md` (gitignored, has a DO-NOT-EDIT header) so the Cursor MARP plugin can preview the light variant directly.
5. Regenerates the dark HTML, transformed light HTML, and the PDF into `ideas/<folder>/exports/`.
6. Renders a slide-1 PNG from the light variant and uploads that thumbnail to Blob.
7. Runs a Playwright visual audit on BOTH HTML variants — screenshots every slide to `exports/.audit/<dark|light>/slide-NN.png` (gitignored), runs a contrast heuristic, and reports any text where computed-color-vs-background WCAG ratio is below 3:1.

Commit and push — the Vercel deployment picks up the new HTML files from the repo on the next deploy. The light variant is derived from the dark source by `scripts/lib/dark-to-light.mjs` — token-level substitution of `:root` palette plus targeted regex sweeps for inline backgrounds, borders, SVG `fill`/`stroke`, and `![bg brightness:...]` directives. Orange / blue / green / red / gold accent colors are preserved.

**Format** — thumbnail of slide 1 (clickable, links to the Vercel-hosted light HTML), followed by one text line per artifact leading with 📄 or 🎬:

```markdown
<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<idea-slug>-slide-1.png" width="820" alt="Deck title — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>.html)
**📄 Slide deck (PDF):** [exports/<deck-basename>.pdf](exports/<deck-basename>.pdf) — download for print or offline.
**📄 Interview protocol:** [exports/interview-protocol.pdf](exports/interview-protocol.pdf)
```

Rules:
- **Thumbnail is mandatory**, not optional. A small link buried in prose is nearly invisible. The slide-1 image at **`width="820"`** anchors the README visually and pulls the eye to the deck. (Older decks used 480 — bump on next touch.)
- **Thumbnail and primary link default to the LIGHT variant** (`<deck-basename>-light.html`). Dark is offered as a secondary link on the same line. Rationale: light renders better for embeds, snapshots, and default professional audiences; dark remains available for operators who prefer it.
- **Thumbnail image is rendered from the light variant** so the preview matches the default experience.
- **URL bases:**
  - Vercel static site: `https://ideas-inbox-mocha.vercel.app` — serves HTML inline. All deck HTML paths follow `/ideas/<idea-folder>/exports/<deck-basename>[-light].html`.
  - Vercel Blob public store: `https://itcls3wqp5koksgn.public.blob.vercel-storage.com` — serves images inline. Thumbnails at `/presentations/<idea-slug>-slide-1.png`; per-deck images at `/presentations/<idea-slug>/<filename>`.
- **Blob credentials** live in `the-intersect-curator/.env.local` as `BLOB_READ_WRITE_TOKEN`. Export before running `publish-deck.mjs`.
- **If only the source deck exists** and hasn't been published yet, skip the thumbnail block and link the source with `*(MARP source — run scripts/publish-deck.mjs to publish)*`.
- **If the idea has no presentation**, omit the block entirely — don't add placeholder lines.
- **Research PDFs and supporting documents** get their own `📄` lines under the deck link, labeled by what they are — no thumbnail needed for these.
- **TL;DR/Executive Summary sections** can additionally reference the deck, but the top-of-page thumbnail block is mandatory so the link is visible without scrolling past the fold.

This is a hard rule. Decks that exist but aren't surfaced as a clickable thumbnail opening the hosted light HTML are effectively invisible to anyone reading the idea on GitHub.

## Citing Sources in Evidence-Based Decks

When an idea's deck quotes statistics, cites studies, references survey results, names vendors with claimed properties, or uses Perplexity/web research output, the deck MUST end with a "Sources & References" slide AND the idea folder MUST contain a companion `research/sources.md` file linked from the README.

**Why:** Skeptical readers push back on uncited statistics. Surfacing every claim's provenance — with clickable source links one click away — signals thoroughness. The deeper substantiation (URLs, full quotes, methodology) lives in the companion research file so anyone can click through and validate. Pure opinion, design, or narrative decks are exempt. **When in doubt, include it.**

### Linkable references in decks (issues, PRs, commits, repos)

Every mention of a GitHub issue, PR, repository, commit, or external resource in a deck MUST be a real `<a href>` link, not bare text. Same rule we follow in prose globally — "GitHub epic #181" is a mistake; `<a href="https://github.com/JuergenB/polywiz-app/issues/181">#181</a>` is correct. Marp renders these clickable in the HTML deck and PDF.

This applies to closing slides ("Open the GitHub epic — issue #181"), inline references mid-deck, and any link to research files in the same repo. Bare `#NNN` in prose on a slide reads to a colleague as "I didn't bother to wire it up."

### Ask the user first — every deck, every time

Before generating a new deck OR substantially revising an existing one (anything beyond typo / readability / styling fixes), the agent MUST ask the user one question:

> *"Is this deck backed by research that should be cited (Perplexity sessions, studies, vendor docs, primary sources), or is this an exploratory / one-off idea where a Sources slide isn't needed?"*

- If **research-backed:** follow the full rule below — dedicated Sources slide before the rhetorical close, companion `research/sources.md`, README link to that file.
- If **exploratory:** skip the Sources slide and the companion file. Add a single comment at the top of the deck source MD — `<!-- exploratory deck — no Sources slide per author direction -->` — so future revisions know not to silently re-add it.

Don't infer from context. Don't pick a default. The question is cheap; the wrong default is expensive (citation theater on a thrown-together idea, or no proof on a research-heavy strategy deck shared with skeptics).

### How to apply

**1. Final slide in the deck — "Sources & References".**

- **The Sources slide is the LAST slide of the deck.** Always. Even when the deck has a rhetorical close (e.g. "Let's start Phase 0"), Sources comes after it — like an appendix or bibliography in a book. The rhetorical close still earns its space (no citations on it; that dilutes both jobs), but it's the second-to-last slide; Sources is the actual final slide.
- Titled `# Sources & References` with optional h2 like `## Evidence behind the claims in this deck`
- Lists every external statistic, study, quote, named claim, or third-party fact used anywhere in the deck
- For each entry: **what was claimed** → **source/author** → **date or year** → **where it came from** (Perplexity session, vendor doc title, study/report name, publication)
- **Use real `<a href>` links wherever each cited source maps to a single canonical URL.** The whole point of the references is *proof against pushback* — proof works better when it's one click away. Marp renders these clickable in the HTML deck and preserves them in PDF export. Style restrained: small (0.55–0.7em), `color: inherit; text-decoration: underline` so they read as references rather than CTAs. Reserve the companion `research/sources.md` (link to it from this slide) for the long-form provenance — verbatim quotes, methodology, retrieval dates, multi-source claims — that doesn't fit on a slide.
- **Each entry MUST lead with the claim it backs**, not just the source name (`**95% audio completion** — NTRVSTA`, not `NTRVSTA — audio benchmarks`). Citation theater fails when a reader can't tell which source proves which number.
- **Exactly one Sources slide. Never split into "(1/2)" / "(2/2)".** If you can't fit, prune to the 6–10 most load-bearing claims and let the rest live in `research/sources.md` (the slide is a doorway to the research, not the research itself). Use small font (0.65–0.75em). Skip decorative cards, gradient strips, and category boxes — utility-first; the slide is a reference, not a designed component.
- **Link to the research folder prominently**, not just `research/sources.md`. Format: `All research lives in [ideas/<folder>/research/](github URL) — sub-issues and detailed notes, plus [sources.md](github URL) for every URL, quote, retrieval date.` The folder is where the long tail goes; sources.md is the quick-reference index.
- **The link to the companion `research/sources.md` MUST be ≥0.65em and visible without squinting** at full-screen deck zoom — not buried as a 0.55em footnote. The audit trail is load-bearing when the deck is shared async; it must be findable.
- **Generate slide options.** When adding or revising a Sources slide, produce 2–3 alternate layouts (per the "Generating slide options" convention) — at minimum a categorized-cards variant and a claims-as-tiles variant — and let the user pick before committing. The Sources slide is high-stakes for the deck's credibility; don't pick one quietly.

Example slide:

```markdown
---

# Sources & References
## Evidence behind the claims in this deck

<div style="font-size: 0.7em; line-height: 1.6;">

**Voice survey response rates 4-6× higher than email forms** — Forsta "State of Voice Research" report, 2024. Perplexity research session, 2026-04.

**73% of B2B buyers prefer voice over written feedback** — Gartner Buyer Behavior Survey, 2023. Cited in Phonic.ai whitepaper "Voice-First Feedback" Q3 2024.

**Email survey median completion rate: 8.2%** — SurveyMonkey Industry Benchmarks, 2024.

**Average voice interview length 4 min 12 sec** — Internal pilot data, idea 005, March 2026.

</div>

<p style="font-size: 0.55em; color: var(--m); margin-top: 24px;">Full URLs, methodology, and verbatim quotes: see <code>research/sources.md</code> in the idea folder.</p>
```

**2. Companion file — `ideas/<folder>/research/sources.md`.**

- One entry per claim, in the same order as the deck's reference slide
- Each entry includes: the claim verbatim, source name, author/publication, date, **full URL**, retrieval date, and any verbatim quote pulled from the source
- Perplexity research sessions: paste the relevant Q&A excerpt and note the date the session ran
- Internal data: link the airtable view, n8n run, or pilot README that contains the underlying numbers
- Keep it long-form and clickable — this is the audit trail, not a slide

Minimal entry shape:

```markdown
## Voice survey response rates 4-6× higher than email forms

- **Source:** Forsta — "State of Voice Research" report
- **Date:** 2024
- **URL:** https://www.forsta.com/resources/state-of-voice-research-2024
- **Retrieved:** 2026-04-22 via Perplexity session
- **Quote:** "Across 14,000 surveys analyzed, voice-based collection produced response rates of 31–42% versus 6–9% for email-form equivalents."
- **Used in deck:** slide 4 (the "Why voice wins" panel)
```

**3. Surface `research/sources.md` from the README.**

Add a `📄` line under the deck artifact block (chains into the existing "Linking Accompanying Artifacts" pattern above), labeled clearly so readers know this is the proof-of-thoroughness file:

```markdown
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, quotes, and retrieval dates for every statistic cited in the deck.
```

Place it alongside the other `📄` lines for PDFs and supporting docs. If the deck has a Sources slide but no companion `research/sources.md`, the rule is not satisfied — both halves are required.

## Slide Authoring Conventions (light/dark dual-mode safety)

Every deck in this repo is published as BOTH a dark variant (`<deck>.html`) and a light variant (`<deck>-light.html`). The light variant is the default — it's what the README thumbnail links to and what most colleagues will see first. The dark→light transform (`scripts/lib/dark-to-light.mjs`) does its best to flip colors automatically, but **author-side discipline** is the only way to prevent silent readability bugs (white-on-white text, dark-photo bgs becoming unreadable, SVG numerals disappearing).

These conventions BELONG in the global `marp-slides` skill (the harness denies edits to it from this project — see "Skill location" note below). Until that's resolved they are mirrored here as the operative rule for this repo.

### Hard rules — every deck MUST follow

1. **Never write `color: #fff` / `color: #ffffff` for body text.** Use `color: var(--t)` for primary, `color: var(--body)` for secondary, `color: var(--m)` for muted. White text on a coloured pill is fine — but use `color: var(--bg)` so it inverts cleanly when the page bg flips.
2. **Never write `fill="#fff"` / `fill="#ffffff"` in inline SVG** for text or shapes that must remain visible. Use a brand color (`fill="#ff6b1a"` — orange reads on both bgs), `fill="#0199fe"` (Polymash Blue, also dual-mode), or `fill="currentColor"` paired with `color: var(--t)` on the parent. The dark→light transform now substitutes white SVG fills to brand orange as a safety net, but authoring with brand colors from the start is cleaner.
3. **Avoid `![bg brightness:0.X]` photo backgrounds with `0.0–0.4` brightness on slide 1 and the closing slide.** These slides become README thumbnails — when the brightness filter darkens the photo so white text reads on dark mode, light mode keeps the dark photo (the URL is unchanged) and any dark text on it becomes invisible. The transform now auto-rewrites `brightness:0.X` → `brightness:0.95` for light mode, but slide 1 / closing should not rely on that — use a class with theme-aware overlays in CSS instead.
4. **Cards, panels, and dividers** must use CSS variables (`background: var(--s)`, `border: 1px solid var(--b)`) rather than hardcoded `#111` / `#1a1a1a` / `#0e0e0e`. The transform substitutes the common dark hexes but `var(--s)` is one swap and works for everyone.
5. **SVG strokes that mimic gridlines or subtle ring backgrounds** — replace `stroke="#111"` with `stroke="#888"` (mid-grey reads on both) or `stroke="var(--b)"`.

**Brand-orange `#ff6b1a` and Polymash Blue `#0199fe` are the safe defaults** for inline SVG text/strokes that need to render on either bg.

### Self-check before declaring a deck "done"

Run from the repo root:

```bash
grep -nE 'color:\s*#fff|fill="#fff|brightness:0\.[0-4]' ideas/<folder>/presentations/<deck>.md
```

Should return ZERO matches in slide content. Frontmatter style block matches are OK if scoped to a class that's only applied to slides where the white-on-coloured-pill pattern is intentional.

### Skill location (canonical)

The MARP authoring skill lives at `~/.claude/skills/marp-slides/SKILL.md`. The conventions above SHOULD be folded into the skill's "Design Rules" section so they apply across all projects, not just this repo. As of 2026-04-25 the harness denies subagent edits to the skill from this project — a human edit is required. Until then, treat this repo's CLAUDE.md as the source of truth and propagate any updates back to the skill manually.

### Generating slide options (don't commit early)

When a slide has multiple plausible visual treatments (a comparison, a metric grid, a timeline, a hero, a process diagram), produce **2–3 alternate layouts** of the same slide and ask the user to pick before integrating into the deck. Don't pick one quietly. Render each as a standalone slide block (own `---`) with a comment header `<!-- OPTION A: card grid -->` etc., briefly describe the tradeoff under each, and wait for the user to choose before doing further polish.

## Visual Self-Verification (mandatory after every publish)

`scripts/publish-deck.mjs` automatically runs a Playwright audit at the end. It screenshots every slide of both light + dark variants and runs a contrast heuristic. The screenshots are written to `ideas/<folder>/exports/.audit/<light|dark>/slide-NN.png` (gitignored).

**Rule:** Before committing the regenerated HTML/PDF artifacts:

1. Read the audit report at the end of `publish-deck.mjs` output. Any "low-contrast-text" or "low-contrast-svg-text" finding must be triaged.
2. Open the affected `slide-NN.png` and confirm visually whether it's a real readability bug (rule of thumb: a 2.0–3.0 ratio false-positive on a decorative element is acceptable; a body-text or SVG numeral finding is NOT).
3. If a real bug is found, fix the source deck, re-run `publish-deck.mjs`, and re-audit before commit.
4. NEVER commit a republish if the audit surfaced a blocking finding on slide 1 (it becomes the README thumbnail).

The phrase "the deck looks fine" without checking the `.audit/` screenshots is banned. The audit is the evidence — use it.
