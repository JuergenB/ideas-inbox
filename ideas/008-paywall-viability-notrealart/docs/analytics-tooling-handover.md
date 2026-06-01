# Handover — On-demand analytics tooling (GA4 + UserMaven)

**Spun off from:** [idea 008 — Paywall viability for NotRealArt.com](../README.md)
**Created:** 2026-06-01
**Purpose:** Investigate (in a fresh conversation) the lightest-weight way to answer
analytics questions on demand for proposals and decks. Surfaced by idea 008, where the
paywall case hinged on repeat-visit loyalty and UserMaven's dashboard repeat-visit
reporting felt weak (it gave only a ~1.1% Period-1 retention average).

Paste the prompt below into a new conversation.

---

## Investigate: on-demand analytics tooling (GA4 + UserMaven) for proposals & decks

### Why we're doing this
In the ideas-inbox repo I regularly need to answer analytics questions to back
proposals and decks — Google Analytics and UserMaven data for Not Real Art,
Arterial, Artsville, Polymash. Most recently, idea 008 (paywall viability for
NotRealArt.com, in `ideas/008-paywall-viability-notrealart/`) hinged on repeat-visit
loyalty, and UserMaven's dashboard repeat-visit reporting felt weak. I want a
low-friction way to ask analytics questions and get answers — ideally with simple
charts/graphics — without standing up a full app if a skill or CLI will do.

### The recurring job-to-be-done
"Ask a question in plain English → get a correct, sourced number, and optionally a
quick chart." Example live question (don't over-build for just this one, but use it
as the acceptance test):
- "How many Not Real Art users visit the site multiple times each month?"
  That multi-visit cohort is the actual target audience a paywall would monetize, so
  getting it precisely matters. UserMaven's cohort screen only gave a ~1.1% Period-1
  retention average — I suspect the API can do better.

### Check what already exists FIRST (don't rebuild)
1. There is already a `usermaven` skill ("UserMaven — Privacy-First Analytics").
   Read `~/.claude/skills/usermaven/` in full and report exactly what it can already
   do — endpoints, auth, whether it can answer the multi-visit-cohort question today.
   I have UserMaven API keys (store in `.env.local`, gitignored — never inline).
2. Confirm current state for Google Analytics: as of the last session there was NO
   GA skill and NO GA MCP connector wired in (only Google Calendar/Gmail/Drive).
   Verify, then scope what it takes to query GA4 directly.

### Decisions I want a recommendation on (this is the main deliverable)
Weigh these and recommend, with tradeoffs (effort, reliability, reusability,
maintenance), NOT a silent pick:

- **A. UserMaven access** — extend the existing usermaven skill vs a small
  parameterized CLI (`scripts/usermaven-query.mjs`) vs an MCP server. Which best
  supports one-off, plain-English questions?
- **B. Google Analytics access** — GA4 Data API via a **service account** (no
  per-session OAuth; works headless) wrapped as a CLI/skill, vs a community GA4 MCP
  server. I can create the service account + grant Viewer on the GA4 property.
- **C. Form factor** — is this a lightweight skill/CLI, or is there a real case for a
  "mini analytics bot" with on-demand chart generation (e.g., render a quick SVG/PNG
  chart for a deck)? I lean toward NOT building a full app unless the reuse clearly
  justifies it. Tell me where the line is.

### Constraints (carry over from global + repo rules)
- API keys / service-account JSON live in `.env.local` (gitignored). Never hardcode
  secrets in committed files.
- Parameterized only — no instance-specific scripts (no `usermaven-nra.mjs`; take
  propertyId/workspace/site as args).
- Before coding against either API, check for / create local docs at
  `docs/reference/<service>-api.md` and announce any deviation from the
  vendor-recommended path before implementing.

### Deliverables for that session
1. A report on what the existing usermaven skill already covers.
2. A recommendation (A/B/C above) with tradeoffs.
3. As a proof, actually answer the acceptance-test question: how many NRA users visit
   multiple times per month — using whichever path you recommend — and show the
   request/response so I can trust the number.
4. If we build something, start with the smallest thing that works.
