# MARP-for-Wireframes: Tooling Landscape Research

Research date: 2026-07-03. Goal: a text/markdown/DSL-driven wireframe-layout-doc format that Claude Code can author, which renders for review AND feeds a Next.js + shadcn/premium-component build.

Method: Perplexity `sonar-reasoning-pro` (4 questions) + WebSearch/WebFetch verification against vendor docs. Model-memory claims were re-verified where flagged; corrections noted inline.

---

## VERDICT (up top)

**No official Anthropic wireframing skill exists**, but there IS a small, live cluster of **community Claude Code skills** that already do "natural language / markdown-ish -> wireframe HTML" — the closest existing analogues to a "MARP-for-wireframes." The nearest match is **`yhassy/wireframe-skill`** (NL description -> JSON wireframe definition + self-contained HTML preview). So the capability partly exists at the *review-artifact* layer, but **none of them close the loop to a Next.js + shadcn/premium build** — that half we'd build.

**Best-fit path:** a **custom markdown/DSL + HTML/SVG renderer** authored as a Claude skill (the true MARP analogue), where the SAME layout doc is the review artifact AND the structured input a second skill/step compiles into Next.js + shadcn/premium pages. Minimal external dependencies, Claude owns it end-to-end. Optional bolt-on: v0's **new Platform API** (beta, now public — corrects stale model memory) if we want AI-generated shadcn React from the same spec.

---

## Q1 — Claude Code wireframing skills / plugins / MCP servers

**Verified to exist (real GitHub repos / products):**

| Name | Type | Input -> Output | URL | Verified |
|---|---|---|---|---|
| `Magdoub/claude-wireframe-skill` | Claude Code skill | text brief + codebase context -> 5 UX options as interactive B&W HTML wireframes, then parallel agents add Clean/Polished color variants (3 sub-tabs each) | https://github.com/Magdoub/claude-wireframe-skill | Yes (WebSearch) |
| `yhassy/wireframe-skill` | Claude Code skill | natural-language description -> **JSON wireframe definition + self-contained HTML preview** | https://github.com/yhassy/wireframe-skill | Yes (WebSearch) — **closest MARP analogue: text -> structured spec + rendered doc** |
| `jiji262/claude-design-skill` | Claude skill | prompt -> HTML artifacts (decks, landing pages, prototypes), adapted from Claude.ai internal Design system prompt | https://github.com/jiji262/claude-design-skill | Yes |
| Wirekitty | MCP server | terminal prompt -> wireframes as clickable browser links, multi-screen, screenshot capture | announced r/ClaudeCode (Perplexity-sourced, not independently verified) | Partial |
| Pixelmatters "Wireframe to Stories" | Claude Code skill | Figma wireframe/flow URL -> Storybook stories per screen + full-flow story, reuses design system, CSS-variable colors | Pixelmatters article (Perplexity-sourced) | Partial |
| `product-design-wireframes` | skill registry entry | user flows -> wireframe specs organized by atomic-design levels | skills registry (Perplexity-sourced) | Partial |
| Coda One "Wireframe Builder" | skill (Claude Code/Cursor) | prompt -> low-fi wireframes via ASCII art, Mermaid, or HTML/CSS skeletons | https://www.codaone.ai/skills/wireframe-builder/ | Yes (WebSearch) |

**Patterns observed** across these skills:
- **A. HTML interactive wireframes** written as local files, opened in browser (claude-wireframe-skill, Wirekitty).
- **B. Structured spec docs** from text flows (product-design-wireframes, yhassy JSON).
- **C. Wireframe-in -> implementation-out** (Wireframe to Stories -> Storybook).
- **D. MCP server returning artifacts** (Wirekitty).
- **E. Code-centric UI generation** (claude-design-skill, frontend-design skills).

**Takeaway:** the "text -> wireframe HTML" half is a solved, actively-built community pattern. The "same spec -> Next.js + shadcn/premium build" half is NOT addressed by any of them (Wireframe-to-Stories is closest but targets Storybook from Figma, not a markdown DSL). That gap is exactly the MARP-analogue opportunity.

---

## Q2 — Commercial wireframe/design tools & their APIs

Compact table (write = can programmatically CREATE canvas content):

| Tool | Public API | Read/Write | Programmatic CREATE? | Notes |
|---|---|---|---|---|
| **Figma** | REST + Plugin + Dev Mode MCP | REST: mostly read (writes: comments, **variables** via POST); Plugin: read+write; **remote MCP: write-to-canvas (beta)** | **Yes** — via Plugin API (`createFrame/createText/createComponent`), and now via remote Dev Mode MCP ("create & modify native Figma content") | REST canvas nodes are GET-only; creation needs Plugin API or the remote MCP. Verified: Figma variables POST endpoint (`file_variables:write`), remote MCP write capability. |
| **FigJam** | same platform / Plugin API | REST read; Plugin read+write | **Yes** — via FigJam Plugin API (stickies, connectors, shapes) | |
| **Excalidraw** | `@excalidraw/excalidraw` npm + JSON scene schema + Excalidraw+ MCP | JS/React read+write; MCP read+write | **Yes** — construct scene JSON, `updateScene()`/`initialData`; MCP creates/updates/groups elements | Open JSON schema = easy to emit from a Claude skill. Fully self-hostable component. |
| **tldraw** | React/TS SDK ("Drive the canvas") + make-real | SDK read+write | **Yes** — "generate diagrams from code," programmatic canvas manipulation | Open-source, self-hostable. make-real = sketch->code demo. |
| **Miro** | REST API v1/v2 | read+write | **Yes** — `POST /boards`, create sticky notes/widgets (`boards:write`) | Cloud only; good for boards/flows. |
| **Penpot** | Plugins API + MCP server (+ undocumented internal RPC) | Plugins read+write; MCP read+write | **Yes** — MCP "create shapes, manage pages"; Plugins API + design-token programmatic access | Open-source, self-hostable. Internal REST exists but unstable/undocumented. |
| **Balsamiq** | BMPR file format; thin cloud integration API | integration only | **No** clear canvas API | Realistically import/export via BMPR file only. |
| **Whimsical** | Workspace API (beta) + status API + MCP | **read-only** | **No** — API explicitly read-only (users/teams/comments/files metadata) | |
| **Uizard/Autodesigner** | **None** | N/A | **No** — FAQ explicitly: "we are not able to provide API access" | Verified via support.uizard.io + apitracker. UI-only. |
| **Moqups** | integration connector (ApiX-Drive) only | data integration | **No** canvas API | Import/export/integration only. |
| **Mockflow** | thin integration API + MCP (per reviews) | unclear | **No** documented canvas API | AI UI + Figma import plugin, not a dev canvas API. |
| **Visily** | integration connector only | data integration | **No** canvas API | Built-in AI UI only, not exposed. |

**Realistic programmatic creation:** Figma (Plugin/remote-MCP), FigJam, **Excalidraw**, **tldraw**, Miro, Penpot.
**Import/export/read-only only:** Figma REST (canvas), Whimsical, Balsamiq, Moqups, Mockflow, Visily, **Uizard (no API at all)**.

**Note on tools the team owns:** the ones most likely owned (Balsamiq, Whimsical, Moqups, Mockflow, Visily) are precisely the ones with NO usable creation API. The API-capable ones (Excalidraw, tldraw, Figma, Miro, Penpot) are the ones worth targeting.

---

## Q3 — Open-source "wireframe-as-code" / text->wireframe

| Project | Input | Renders to | Status | URL |
|---|---|---|---|---|
| **PlantUML Salt** | text DSL (table-like `{}\|{}` / `{}{}` layout) | PNG/SVG screen blueprints | actively maintained (PlantUML subproject, 2026 docs) | https://plantuml.com/salt |
| **Wired Elements** | HTML/JS custom elements (`<wired-button>`, `<wired-card>`) | live hand-drawn/sketchy HTML UI | MIT, active thru 2025 | https://github.com/rough-stuff/wired-elements |
| wired-elements-react | JSX wrappers | React sketchy UI | MIT, active 2026 | https://github.com/rough-stuff/wired-elements-react |
| **wyreframe** | ASCII/monospace box-drawing | parses to scene graph -> HTML UI | new but active 2026 | https://github.com/wickedev/wyreframe |
| ascii-dashboard-skill | plain-English dashboard desc | ASCII wireframe + JSON layout spec | OSS "skill" | https://github.com/everyGal/ascii-dashboard-skill |
| PlantUML (core) | text diagram defs | PNG/SVG | mature | https://plantuml.com |

**Mermaid — honest assessment:** NOT a UI-layout tool. Flowcharts/sequence/class/ER only; no pixel/grid widget positioning, no native button/input/card row-column concepts. You can *fake* nav sketches with boxes+arrows but it's materially worse than Salt or an ASCII DSL for wireframes. Do not rely on it for layout.

**Closest MARP analogue among OSS:** **PlantUML Salt** — you author pure text, it compiles to SVG/PNG "screen blueprint" docs, embeddable in docs/CI like MARP slides. Mature. Downside: Salt output is a *diagram*, not HTML/React, so it doesn't feed a build. **wyreframe** (ASCII -> live HTML scene graph) is the closest "text -> running UI," but document-centric-ness is weaker. **Wired Elements** gives the sketchy *aesthetic* as real HTML components (could be the render target of our own DSL).

---

## Q4 — LLM->UI / text->UI generators & programmatic access

**KEY CORRECTION (stale model memory):** Perplexity's `sonar` answer said v0 has "no general public API" — that reflected a late-2024 cutoff and is **now wrong**. Verified via Vercel:

- **v0 Platform API — NOW IN PUBLIC BETA.** A "text-to-app API" giving programmatic access to v0's generation pipeline: create apps from prompts, structured parsing of generated code, automatic error fixing, rendered-preview integration, programmatic management of chats/projects. Ships a **TypeScript SDK**. v0's output stack is **React/Next.js + Tailwind + shadcn/ui** — i.e. it emits *exactly* the target stack. Sources: https://vercel.com/changelog/v0-platform-api-now-in-beta , https://vercel.com/blog/build-your-own-ai-app-builder-with-the-v0-platform-api . (Feb 2026 update added Git integration, in-browser editor, DB connectivity, Figma import, agentic workflows.) Hosted SaaS, not self-hostable; pricing not stated on changelog page (needs check).

| Tool | Emits React/Next+shadcn/Tailwind? | Public API? | Self-hostable? |
|---|---|---|---|
| **v0.dev (Vercel)** | **Yes — shadcn/ui + Tailwind + Next.js natively** | **YES — Platform API, public beta, TS SDK** (corrected) | No (hosted) |
| tldraw make-real | React + CSS/Tailwind; shadcn not default | build your own from OSS backend | **Yes** |
| Uizard | No (generic HTML/CSS, some React) | **No API** (verified) | No |
| screenshot-to-code repos | React + Tailwind common; shadcn uncommon | Yes — self-hosted HTTP endpoints, bring-your-own-LLM-key | **Yes** |
| Builder.io Visual Copilot | React/Next + Tailwind; library-agnostic, shadcn only if configured | No general API (Figma plugin/UI) | No |
| Builder.io Fusion | works over your existing stack (shadcn if repo uses it) | No general API | No |

**Takeaway:** v0 is the only tool that emits the exact target stack (shadcn + Tailwind + Next.js) AND now has a real programmatic API. That makes "spec -> v0 Platform API -> shadcn React" a viable *bolt-on* to a custom DSL, though it introduces a paid hosted dependency and cedes control of the generation.

---

## Q5 — Recommended approach (paths compared)

**(a) Custom markdown/DSL + HTML/SVG renderer — the true MARP analogue. RECOMMENDED.**
- Claude Code authors a `.wf.md` / YAML-ish layout doc (sections, grids, components: hero, nav, card-grid, form, CTA, footer — mapped to shadcn/premium primitives).
- A small renderer (HTML/CSS, optionally Wired Elements for sketchy fidelity, or plain grayscale boxes) produces a review artifact — mirrors the existing publish-deck.mjs pattern exactly.
- The SAME doc is the structured input a second skill/step compiles to Next.js + shadcn pages (component names in the DSL map 1:1 to `@/components/ui/*` + premium-kit imports).
- **Pros:** Claude owns it end-to-end, zero external API dependency, one artifact serves review + build, fits the team's MARP muscle memory and this repo's light/dark publish pipeline. **Cons:** we build & maintain the renderer + the DSL->JSX compiler; component coverage grows over time.

**(b) Emit to Excalidraw/tldraw JSON via their libs.**
- **Pros:** free rich canvas, open schema, self-hostable, MCP servers exist. **Cons:** it's a *drawing*, not structured semantics that map cleanly to shadcn components; the build-feed half still has to be invented on top. Good if the priority is *visual* wireframes over build-feeding.

**(c) Drive Figma via API.**
- **Pros:** most "professional" artifact; remote MCP now writes to canvas; Wireframe-to-Stories shows Figma->Storybook works. **Cons:** creation needs Plugin API or remote MCP (not plain REST), heavier dependency, Figma-account-bound, and Figma->Next.js is still an extra hop. Overkill for internal review.

**(d) Skip wireframes, go prompt -> v0/shadcn directly.**
- **Pros:** fastest to real shadcn/Tailwind/Next.js code; v0 Platform API is real now. **Cons:** no reviewable low-fi layout doc (loses the cheap iterate-before-build step the team wants), paid hosted dependency, less deterministic/controllable than a DSL. Best as a *bolt-on generation backend* to (a), not a replacement.

**Recommendation:** Build **(a)** — a Claude-authorable markdown/DSL wireframe skill with an HTML/SVG renderer, structured so the same doc compiles to Next.js + shadcn/premium. Steal the architecture of `yhassy/wireframe-skill` (text -> JSON spec + HTML preview) as the starting point and extend the JSON spec's component vocabulary to map onto shadcn + the premium kit. Keep **(d) v0 Platform API** as an optional pluggable generation backend for teams that want AI-authored React from the spec. Avoid (b)/(c) unless a visual-canvas or Figma-handoff requirement emerges.

---

## Unverified / flagged
- Wirekitty, Pixelmatters "Wireframe to Stories," `product-design-wireframes` — Perplexity-sourced, not independently opened. Existence plausible; capabilities as described unconfirmed.
- v0 Platform API **pricing** and exact output-file shape not confirmed from primary source (changelog page omits pricing; blog/docs would confirm). Treat "emits shadcn" as high-confidence (v0's core product does) but confirm the API returns the same before depending on it.
- Figma remote Dev Mode MCP "write-to-canvas" is beta and remote-server-only — verify current availability/limits before building on it.
- Excalidraw+ MCP requires an API key / paid Excalidraw+; the npm component + JSON schema are free/OSS.

## Source URLs (primary, verified)
- v0 Platform API beta: https://vercel.com/changelog/v0-platform-api-now-in-beta
- v0 Platform API blog: https://vercel.com/blog/build-your-own-ai-app-builder-with-the-v0-platform-api
- Uizard no-API (FAQ): https://support.uizard.io/en/articles/7925442-faq-for-all-things-uizard ; https://apitracker.io/a/uizard-io
- Figma REST API: https://developers.figma.com/docs/rest-api/ ; Variables write: https://developers.figma.com/docs/rest-api/variables-endpoints/
- Figma Dev Mode MCP: https://www.figma.com/blog/introducing-figma-mcp-server/ ; https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
- claude-wireframe-skill: https://github.com/Magdoub/claude-wireframe-skill
- wireframe-skill (closest analogue): https://github.com/yhassy/wireframe-skill
- claude-design-skill: https://github.com/jiji262/claude-design-skill
- Coda One Wireframe Builder: https://www.codaone.ai/skills/wireframe-builder/
- PlantUML Salt: https://plantuml.com/salt
- Wired Elements: https://github.com/rough-stuff/wired-elements
- wyreframe: https://github.com/wickedev/wyreframe
- Excalidraw npm/API: https://www.npmjs.com/package/@excalidraw/excalidraw
- tldraw SDK: https://tldraw.dev
- Miro REST: https://developers.miro.com/reference
- Penpot MCP/plugins: https://penpot.app
