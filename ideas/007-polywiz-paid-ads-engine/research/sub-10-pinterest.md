## Phase 2 — Pinterest ads (visual-discovery angle for art brands)

Parent epic: #181

**Why this exists separately from #189 (LinkedIn):** Pinterest and LinkedIn are both Phase 2, but they target different angles. LinkedIn = professional/B2B audience component via Lead Gen Forms. Pinterest = visual-discovery / inspiration-mode audience that maps directly to art-editorial brands. Different APIs (Zernio for Pinterest, direct LinkedIn API), different creative formats (2:3 vertical for Pinterest), different conversion infrastructure.

## Why Pinterest fits art brands

- **619M MAU, +12% YoY (Q4 2025)**. 70%+ female; **Gen Z is 42% of users and the fastest-growing cohort**, average new-user age dropped from 32 to 24. 76% earn above median income; 45% US users hold a bachelor's+
- **Visual-discovery intent profile** — users actively search/save inspiration, fundamentally different from social-feed scrolling. "Planning mindset" still validated by 2026 conversion data, though benchmarks are e-commerce-heavy
- **CPC 30–50% cheaper than Meta** ($0.50–$1.50 platform-wide; home décor / lifestyle reference verticals run $0.30–$0.80 CPC, $5–$15 CPL)
- **Pinterest Lead Ads** native in-app form (parallel to Meta Lead Forms) — 30-day storage, Zapier/Salesforce export, no off-platform redirect bleed
- **Zernio coverage already shipped** for Pinterest at `/v1/ads/boost` and (likely) `/v1/ads/create`. Required fields: `accountId, adAccountId, name, goal, budgetAmount, budgetType, headline, body, imageUrl, linkUrl`. Optional `boardId` (auto-creates "Zernio Ads" board). **No Pinterest developer approval required** per Zernio docs

## Two real gaps to close

### Gap 1: Creative format (2:3 vertical, 1000×1500)

Our existing image catalog is split:
- ~**50% reusable as-is**: existing 9:16 Reels carryover to Pinterest Video Pins / Idea Pins cleanly
- **~50% needs re-rendering**: static 4:5 catalog must be re-cropped to 2:3 1000×1500. Sharp can do this automatically; no AI regeneration needed for stock images
- **Cover slide bands need a 2:3 layout template** added to Cover Slide Templates table `tblk0l8nE9SDP0lca` (additive — existing 1:1 / 9:16 templates stay)

### Gap 2: Pinterest Tag's 24-hour audience-population lag

Unlike Meta's near-instant pixel, Pinterest Tag populates retargeting audiences in **~24 hours**. Implication: **the "Standard Pin → retarget with Lead Ad" funnel cannot run in the same week** the way it does on Meta. First 2 weeks are cold-traffic-only spend; retargeting layer comes online in week 3.

## Tasks

### Account + tracking setup
- [ ] Pinterest Business account per brand (claim website domain — required)
- [ ] Pinterest Tag base + Lead/Signup event installed via existing GTM container (after Phase 0 GTM is in place)
- [ ] **Stape.io Pinterest CAPI** (server-side) — simpler than Meta CAPI: only requires Pinterest Advertiser ID (no access token). Reuses the same Stape sGTM container we'll already have running for Meta CAPI (Artsville + Intersect)
- [ ] Connect each Pinterest account to Zernio profile via `/v1/connect/pinterest` + select-board flow
- [ ] Connect each brand's Pinterest **Ads** account to Zernio (separate `adAccountId` required for `/v1/ads/boost`)
- [ ] Upload existing newsletter subscribers as Custom Audience → seed Actalike (Pinterest's lookalike)

### Creative pipeline extension
- [ ] Add 2:3 (1000×1500) aspect-ratio variant to `src/lib/image-crop.ts` — Sharp center-crop + letterbox where needed
- [ ] Add 2:3 layout to Cover Slide Templates table for Pinterest cover slides
- [ ] Pinterest copy prompt profile (different from Meta — concise, descriptive, keyword-aware since Pinterest is search-discovery; pin titles act like SEO)
- [ ] Reuse 9:16 Reels assets directly for Video Pins (no new generation needed)

### Zernio Ads client extension (#185)
- [ ] Pinterest endpoints in `src/lib/zernio-ads/endpoints/` — extend the Meta-first client
- [ ] Verify `boardId` handling — auto-create "Zernio Ads" board per brand, or surface in UI for manual selection?
- [ ] **Open probe:** does Zernio's `/v1/ads/*` expose Pinterest Lead Ad form creation, or only website-conversion campaigns? Sandbox call to confirm before committing to architecture. If only website-conversion, we either accept lower-intent landing-page traffic OR build direct Pinterest Marketing API for Lead Ads (parallel pattern to LinkedIn #189)

### Targeting + campaign config
- [ ] Keyword targeting: `contemporary art`, `gallery`, `art collector`, regional terms ("Asheville art", "Brooklyn art scene") per brand
- [ ] Interest hierarchy: `Art & Collectibles`, `Home Decor & Design`, `Photography`, `Museums`
- [ ] Custom Audience uploads per brand from email list
- [ ] Performance+ Auto-targeting setting decision — manual narrow targeting first (small audiences benefit from Performance+ less than large brands)

### Launch + monitoring
- [ ] Pilot: The Intersect at $150–$200/mo (smaller than Meta pilot — Pinterest is supplementary, not primary)
- [ ] First 2 weeks cold-traffic-only spend (account for 24h tag lag)
- [ ] Week 3+: retargeting layer + Actalike from email list
- [ ] Polling cron extended to Pinterest analytics endpoints (already covered by #187 architecture, just adds platform)

## Done when

The Intersect Pinterest pilot runs for 30 days at $150–$200/mo, achieves CPL ≤$10 (target — Pinterest's purchase-biased algorithm makes free-signup CPL slower than Meta), and Pinterest Lead Ad submissions flow into the brand's email provider via the same webhook plumbing built in #188 / #189.

## Open question

Should we run Pinterest in **Phase 1 alongside Meta** or **Phase 2 after Meta dials in**? Research recommends Phase 2:
- Splitting $250–$500/mo between Meta + Pinterest day-one drops both below their respective learning-phase thresholds
- Better to prove the Meta pipeline works (CPL ≤$3) first, then port the winning creative concepts to Pinterest with $150–$200 incremental
- Risk: Pinterest's 24h tag lag means Phase 2 work has its own ~3-week ramp regardless of when we start, so an earlier start is "free" calendar-wise
- User decision: parallel-launch Pinterest (faster overall ramp) vs. sequential (cleaner data per platform)?
