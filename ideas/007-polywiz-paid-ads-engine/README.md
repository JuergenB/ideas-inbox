# Idea 007: PolyWiz Paid Ads Generation Engine

**Origin:** Juergen Berkessel, 2026-04-25
**Status:** Research Complete — Awaiting Go/No-Go
**Linked implementation epic:** [JuergenB/polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181) (sub-issues #182–#191)
**Pilot brand:** The Intersect → Not Real Art → Artsville USA
**Budget envelope:** $250–$500 per brand per month + $50/mo Zernio Ads add-on

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/polywiz-paid-ads-engine-slide-1.png?v=2" width="820" alt="PolyWiz Paid Ads Generation Engine — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation.html)
**📄 Slide deck (PDF):** [exports/presentation.pdf](exports/presentation.pdf) — download for print or offline.
**📄 Implementation sub-issues (research/):** Phase 0 prerequisites, Phase 1 Meta MVP build-out, Phase 2 LinkedIn Lead Gen + Pinterest, Phase 3 video pipeline. See [`research/`](research/).

---

## TL;DR

Three things just lined up that make a paid-ads engine inside PolyWiz a strong move right now:

1. **Zernio shipped a paid-ads API** in April 2026 covering Meta, Google, TikTok, LinkedIn, Pinterest, and X — the same key we already use for organic posts now reaches all those ad platforms.
2. **PolyWiz already has the moat.** Meta's 2026 algorithm rewards creative *volume + diversity* over targeting tweaks. PolyWiz's existing organic engine already produces dozens of platform-specific variants per campaign — exactly the input Meta now wants.
3. **Juergen has the playbook.** Previously managed $70K/year Meta budgets that hit $0.80–$0.90 CPA on newsletter signups manually. The thesis: rebuild that result on autopilot for art-editorial brands at $250–$500/mo.

The pilot is The Intersect at $250/mo. If CPA lands under $3 in 30 days, the same engine extends to Not Real Art and Artsville USA with no additional build cost — just per-brand ad budget. **Math at $250/mo × 3 brands × $2 CPA = ~375 net-new newsletter subscribers per month for $750.**

---

## What this actually is

In plain language, the engine does this:

1. **Brand picks a piece of content** — a blog post, exhibition page, or newsletter issue. Same input PolyWiz already takes for organic.
2. **PolyWiz generates 8–15 ad variations** — different images, different headlines, different angles, built from the brand's existing visuals and voice.
3. **You approve. Meta runs them.** A single click pushes the variants to Facebook + Instagram. Meta's algorithm picks the winners and spends the budget.
4. **PolyWiz tracks CPA, kills losers, scales winners** — daily polling pulls spend + signup data; bottom 20% of variants get killed weekly; new variants generated to refill.

The build is mostly extension, not invention. Roughly **80% of the pipeline already exists** in PolyWiz today (brand voice, multi-platform copy generation, image catalog from scraped URLs, auto-crop to platform aspect ratios, carousel + cover-slide rendering, Vercel Blob hosting, per-brand API key resolution, Zernio scheduling). The new ~20% is: ad-specific copy prompt with 10-intent angle slots, image variant generator (FLUX + Ideogram), Zernio Ads API client, polling cron, performance dashboard, variant rotation logic, Instant Form lead handling, conversion event mapping.

---

## Platform-by-platform fit

Honest verdict for art-editorial brands at $250–$500/mo, newsletter-signup objective:

| Platform | Verdict | Why |
|---|---|---|
| **Meta (Facebook + Instagram)** | **Phase 1 / MVP** | Best fit. Lowest learning floor, mature `OUTCOME_LEADS` + Instant Forms, our existing creative pipeline maps cleanly. |
| **LinkedIn Lead Gen Forms** | **Phase 2** | Killer for arts-professional audience component (curators, gallery directors, editors). Zernio doesn't ship Lead Gen Forms yet — needs direct LinkedIn Marketing API client. |
| **Pinterest** | **Phase 2** | Visual-discovery fit for art brands. 619M MAU, art-aligned demographic, native Lead Ads, CPC 30–50% cheaper than Meta. Zernio coverage shipped (no developer approval). Two real gaps: 2:3 (1000×1500) creative format + 24h pixel population lag. |
| **Google Search** | Phase 1.5 / optional | Cheap to add, no video required. Verify Zernio coverage with live probe. |
| **TikTok** | Phase 3 | $20/day ad-group floor + 50-conversion learning phase = ~$1500+/mo to escape learning. Only worth it for brands with organic TikTok traction → Spark Ads. |
| **YouTube Shorts** | Phase 3 | Static images don't run on YouTube placements. Build slideshow-video generator first. |
| **Google PMax / YouTube In-Stream** | Skip | Sub-$3K/mo causes prolonged learning. Wrong tool for our spend. |
| **X (Twitter)** | Skip | Brand-safety + degraded targeting + audience fragmentation post-2023. Most art/editorial audiences moved to Bluesky / Threads. |

---

## What CPA we should expect

| Reference point | CPA |
|---|---|
| Juergen's 2024 benchmark (manual, hot industries) | $0.80 |
| Retargeting (site visitors + IG engagers) | $0.80–$1.50 |
| Cold prospecting (90-day, while algorithm learns) | $1.50–$3.00 |
| 2026 Meta industry median (for context) | $27.66 |

The 2024 $0.80 number is reachable on retargeting only at this budget. Cold prospecting at $250–$500/mo will land higher while we build the algorithm's signal. **Honest 90-day target for the pilot: $1.50–$3 CPA cold, $0.80–$1.50 retargeting** — beating the 2026 industry median by ~10–30×.

---

## What's blocking us today

Three prerequisites must be in place before Phase 1 can launch. All are solvable in days, not weeks.

### 1. Zernio Ads add-on purchase ($50/mo)

Live probing on 2026-04-24 confirmed every `/v1/ads/*` endpoint returns `403 Ads add-on required` on the current Dominate (AppSumo lifetime) plan. The add-on is a separate paid line item available only on Build/Accelerate/Unlimited plans. **Step 0 is a billing change, not a code change.** No integration code can be tested at runtime until this is purchased.

### 2. Pixel + Conversions API install on 2 of 3 brand sites

Verified status (2026-04-24):

| Brand | Site | Platform | Meta Pixel | Meta CAPI |
|---|---|---|---|---|
| Not Real Art | notrealart.com | WordPress | ✓ (`672012889860920`) | ✓ (Openbridge plugin) |
| Artsville USA | artsvilleusa.com | Ghost 6.33 | **MISSING** | **MISSING** |
| The Intersect | theintersect.art | Curated (sunset 2024) | ✓ (`1877709392441022`) | **MISSING** (platform-constrained) |

Without server-side **Conversions API** (CAPI), browser-only Pixel captures only 70–80% of conversions; with CAPI it's 90–95%. iOS 14.5+ ATT, Safari ITP, and ad blockers continue to break browser-only tracking. Practitioner data shows **17.8% lower cost-per-result** with CAPI on. Cleanest 2026 install path: Stape.io GTM server-side (~$20/mo) — one container handles Meta + Pinterest + TikTok + LinkedIn CAPI tags.

### 3. The Intersect platform constraint

Curated was sunset by Mailchimp in 2024. It still operates but constrains pixel install (only via the Code Injection panel). Long-term, The Intersect should migrate to Ghost or Beehiiv for proper CAPI support and stronger pixel install flexibility. Migration target decision needed.

---

## Phase plan

> Time estimates are in **AI-paired-dev hours/days**, not engineering weeks.

| Phase | Duration | What |
|---|---|---|
| **Phase 0 — Prerequisites** | ~1 day | Buy Zernio Ads add-on. Connect Meta ad accounts via OAuth. Install Meta Pixel + CAPI on Artsville. Add CAPI on Intersect via Stape.io. |
| **Phase 1 — Meta MVP, Intersect pilot** | ~1–2 weeks | Airtable schema, Zernio Ads client, ad creative pipeline, polling cron, dashboard. Pilot at $250/mo for 30 days. Honest CPA target: $1.50–$3.00. |
| **Phase 2 — LinkedIn Lead Gen + Pinterest** | ~1.5 weeks | Direct LinkedIn Marketing API (Zernio gap on Lead Gen Forms). Pinterest creative pipeline extension to 2:3 + Stape Pinterest CAPI. Both share the polling/dashboard infra. |
| **Phase 3 — Video pipeline + TikTok + YouTube** | ~1.5 weeks | Slideshow video generator (Invideo + Runway). TikTok Photo Mode carousel ads. YouTube Shorts. Migrate Intersect off Curated. |
| **Phase 4 — Optimization & scale** | ongoing | Per-variant landing pages. Lookalikes from engaged subscribers. Cross-brand reporting. Auto-pacing budgets based on CPA performance. |

---

## Critical 2026 gotchas (vs. 2024-era playbook)

- **Detailed interest targeting is dying.** Meta has been removing interest categories quarterly through 2025–2026. Anything built on "Art collectors" or "Museum visitors" interests will degrade. Use Advantage+ broad + lookalikes.
- **The 50-conversions/7-days learning rule loosened to ~25/week** (Q1 2026). Small budgets still hit "starved learning" cutoffs at 48–72h if zero events fire — feed CAPI pre-conversion events (form views, scrolls).
- **Andromeda penalizes near-duplicate variants.** Five photos of the same artwork with different captions hurts; format diversity (static + carousel + video) wins.
- **Advantage+ enhancements default ON** in Feb 2026 — Meta will auto-rewrite headlines, swap music, change aspect ratios. Brand-voice control requires per-brand toggles to disable specific enhancements.
- **`OUTCOME_LEADS` + Instant Forms** beats landing-page traffic for cold audiences (no off-platform redirect bleed). Tradeoff: leads are 30–40% lower-intent — add a single qualifying question to filter.
- **Lookalikes from raw email lists underperform** lookalikes seeded from "engaged subscribers" (opened ≥3 emails in 30 days).

---

## Risks

| Risk | Likelihood | Mitigation |
|---|---|---|
| AI-slop voice dilution across 10 headlines × 3 brands × dozens of campaigns | High | 10-intent angle slot architecture; forbidden-phrase list; brand-voice few-shots; per-brand QA review queue for first 30 days |
| Cold prospecting at $250/mo never escapes Meta's learning phase | Medium | Pre-conversion events (form view, scroll) feed algorithm; honest 90-day expectation reset to $1.50–$3 CPA, not $0.80 |
| Meta Advantage+ auto-rewrites copy in ways art brands reject | Medium | Per-brand toggle for each Advantage+ enhancement; brand-review queue before activation |
| Zernio Ads API response shapes differ from docs at runtime | High | Live-probe each endpoint immediately after add-on purchase; treat docs as nominal |
| iOS users unmeasurable without CAPI on Artsville + Intersect | High (until Phase 0 complete) | Phase 0 is hard-blocking before Phase 1 launch |

---

## Open questions

These need a product decision before Phase 1 begins.

1. **Zernio plan upgrade timing** — confirm exact tier required for Ads add-on (Build $10/mo? Accelerate ~$50/mo? Unlimited?) before purchase.
2. **Pixel install — who and when** — does the user's web person handle Artsville Meta Pixel install + Intersect Stape.io CAPI setup, or should PolyWiz dev do it directly via Ghost / Curated Code Injection?
3. **The Intersect off Curated** — when, and to which target platform (Ghost or Beehiiv)?
4. **Newsletter provider per brand** — confirm what's wired up. Required for LinkedIn Lead Gen Form webhook destinations.
5. **Brand voice override controls** — will the art brands tolerate Meta auto-rewriting their copy, or should we default to disabling specific Advantage+ enhancements per brand?
6. **Lookalike seeds** — exportable engagement data ("opened ≥3 emails in 30 days") or start with raw subscriber lists?
7. **Qualifying question on Instant Form** — adds friction but filters bot/freebie-hunter signups. Yes/no for MVP?
8. **Budget escalation rule** — if CPA < $3 after 30 days, auto-double to $500/mo, or wait for human review?
9. **Pinterest Phase 1 vs Phase 2 timing** — research recommends Phase 2, but Pinterest Tag has 24h audience-population lag (vs. Meta near-instant), so Pinterest has its own ~3-week ramp regardless. Parallel-launch or sequential?

---

## What we're asking for

A green light to start Phase 0:

- **This week:** $50 — Zernio Ads add-on (unlocks the API for live probing)
- **This month:** $300 ($250 Intersect pilot + $50 Zernio) — 30-day burn-in, then evaluate
- **Success criterion:** CPA < $3 → ~85+ new Intersect subscribers in month 1 → scale to NRA + Artsville

If the pilot hits its CPA target, the same engine extends to Not Real Art and Artsville USA with no additional build cost — just the per-brand ad budget. The math at $250/mo × 3 brands × $2 CPA = **~375 new newsletter subscribers per month for $750.**
