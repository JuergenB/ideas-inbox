# The Channel Mix & Budget — PR + Free Listings + Paid Social via PolyWiz

How the pieces combine to lift **submissions** (and **subscriptions** as a compounding by-product), and where a conservative ad budget fits. This is the part the Thursday meeting kept circling: *"doing a press release for each, maybe doing a Facebook ad for each, ought to be baked into that playbook."*

The load-bearing evidence is our own: **the grant campaigns over-performed because we ran Facebook ads to the landing pages** — not organic luck. The thesis here is simply: **do that for every open call, automated**, through the engine we've already scoped in [Idea 007 — PolyWiz Paid Ads Generation Engine](../../007-polywiz-paid-ads-engine/).

---

## Why a *mix*, not one channel

Each channel covers a gap the others can't:

| Channel | Reaches | Covers the gap of… |
|---------|---------|--------------------|
| **Press releases** (PressRanger / EIN / eReleases) | Journalists, SEO, AI-chatbot indexing | Credibility + earned reach + "show up when someone asks an AI" |
| **Free listing boards** (EntryThingy, ArtConnect, Artwork Archive…) | Artists *already searching* for calls | High-intent demand we currently ignore |
| **Email blast** | Our existing artist list | Warm audience — but "too weak or small" alone |
| **Paid social** (Meta + Pinterest, via PolyWiz) | Artists *not* searching; lookalikes; retargeting | **Net-new demand** — the lever that drove the grant numbers |

PR + listings + email harvest existing intent; **paid social manufactures new intent**. That's why the grant — with paid traffic — outperformed everything we run organically.

---

## The PolyWiz "Open Calls" category (the automation)

Idea 007's engine already generates 8–15 platform-specific ad variants from a piece of content and pushes them to Meta (and Pinterest) via the Zernio Ads API, then kills losers and scales winners. **~80% of that pipeline already exists.** What this idea adds is a thin new **content category — "Open Calls"** — that points the same machine at submissions instead of generic newsletter signups:

1. **Trigger:** a new open-call record in the Artwork Archive Airtable (the promotion repository) kicks off the campaign — no manual setup.
2. **Organic trickle:** PolyWiz schedules reminder posts across the call's run — *opened → midpoint → "1 week left" → "48 hours left"* — as platform-specific variants via Zernio. This is the "trickle out reminders" you described; the organic engine already does it.
3. **Paid boost:** 8–15 ad variants to **Meta (Facebook + Instagram)** and **Pinterest**, pointed at the open-call landing page with UTMs.
4. **Conversion event = a submission** (and newsletter signup as a secondary event), so the algorithm optimizes toward entries, not just clicks — and every click becomes a **retargetable** future audience.

**Why Pinterest belongs here specifically:** per idea 007's research, Pinterest is a visual-discovery platform with an art-aligned audience (619M MAU), native lead ads, and **CPC 30–50% cheaper than Meta** — arguably a *better* fit for "call for artists" than for generic editorial signups. Open calls are the use case that justifies turning Pinterest on. (Two known gaps from 007: needs 2:3 / 1000×1500 creative and has a ~24h pixel-population lag — minor.)

---

## Conservative budget

Idea 007's standing envelope is **$250–$500 / brand / month + $50/mo Zernio Ads add-on**. For open calls we don't need always-on spend — we need **short, concentrated flights** timed to each call. A deliberately conservative starting posture:

| Approach | Spend | Notes |
|----------|-------|-------|
| **Per-call flight (recommended start)** | **$150–$300 per open call**, over a 3–4 week window | Concentrated on the call with the deadline approaching; pause between calls |
| **Always-on per brand** (later) | $250/mo/brand, reallocated to whichever call is live | Matches 007's pilot envelope |
| **Add-on** | $50/mo Zernio Ads | One-time per-stack cost, shared across brands |

So a realistic Phase-1 test is **one brand, one call, ~$250** — small enough to be a rounding error, large enough to read a signal.

### Free first: Google Ad Grants ($10,000/mo in-kind)

The Perplexity Computer research surfaced a standout we should pursue before spending a dollar on social: **[Google Ad Grants](https://www.google.com/nonprofits/account/signup)** gives eligible 501(c)(3)s **$10,000/month of free Google Search ads**. For Arterial that's a free, always-on channel to bid on "call for artists", "art open call", "[theme] exhibition submission" searches — pure high-intent demand capture at zero cash cost. It has constraints (text-only search ads, a 2% CTR rule, $2 keyword bid cap, must maintain quality), but it's free money for the exact intent we want. **Action: apply for Arterial; run open-call landing pages through it as the first paid-ish channel.** Paid social (below) then manufactures *new* intent on top.

### What to expect (honest, unproven for submissions)

Idea 007 benchmarks **newsletter-signup CPA at $1.50–$3.00 cold** ($0.80 warm/retargeting). **Submissions are higher-friction than signups, so cost-per-submission will be higher** — call it an unknown we're spending $250 to learn. Two framings:

- **If a submission costs ~$5–$10** in paid: $250 → **~25–50 incremental submissions** per call, *plus* the newsletter signups and the retargetable audience as a bonus.
- **Even if cost-per-submission is higher than hoped**, every dollar still produces (a) newsletter subscribers we keep and (b) a warm audience for the *next* call — so spend compounds across the calendar rather than evaporating.

The pilot's job is to **measure cost-per-submission for the first time** — we've never had the number because we've never run the spend deliberately. UTMs + the landing-page conversion event make it measurable.

---

## Subscriptions *and* submissions — the compounding loop

This is the "yes-and" from the meeting. A paid open-call campaign pointed at the landing page:
- **captures submissions now** (the immediate goal), and
- **captures newsletter signups** from artists who land but don't submit this time, and
- **builds a retargeting pool** that makes the *next* call cheaper.

Run it every call and the audience compounds — which is exactly the "disciplined, repeatable" cadence we admired in Create! Magazine. The same loop repoints at **donors** for the fall fundraising campaign (Phase 2): same engine, "Fundraising" category, conversion event = donation.

---

## Grounded in the code (polywiz-app review, 2026-06-12)

A review of the actual `polywiz-app` and `artwork-archive` repos sharpens this:

- **"Open Call" is already a scaffolded campaign type** in PolyWiz (defined in the schema, currently disabled / "Coming soon"); the scraper already pulls `submissionDeadline` / `submissionUrl` / `eligibility` and the prompt composer already injects deadline context. **Organic open-call promotion ≈ 1 hour** to enable. Press releases are a new *output format* of existing AI gen.
- **Paid ads are the real epic** — [polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181), ~4–6 weeks, not started; Phase 0 (Zernio Ads add-on, pixels/CAPI) is blocking. Organic posting + Pinterest already work; ads/conversion/budget code does not exist yet.
- **Per-brand capability model already exists** — Brands are gated by boolean flags (e.g. `lnkBioEnabled`). "Open Calls" becomes a per-brand flag (Artsville / NRA on; The Intersect off), so PolyWiz stays a general engine rather than an art-only tool.
- **Artwork Archive is the submission source, not the engine** — its Campaigns table = open-call records, and its submission status flow = the conversion signal. It feeds PolyWiz; the promo engine does not get built inside its intake/export pipeline.

## How this changes Idea 007

Idea 007 is *"Research Complete — Awaiting Go/No-Go"* with a Meta MVP pilot at $250/mo. This idea gives it a **concrete, high-value first use case**: every open call is already a PolyWiz campaign with a clear conversion goal and a landing page. Recommendation — when 007 gets its go, make **"Open Calls" the pilot content category** (not generic blog content), **add Pinterest in the same phase** (the art audience is where it pays off), and serve **The Intersect off the same engine with a subscriber-growth objective**. The two ideas should ship together as one PolyWiz epic.

> Cross-reference: ad-engine architecture, CPA benchmarks, platform-by-platform verdicts, and the Zernio Ads client all live in [Idea 007's research](../../007-polywiz-paid-ads-engine/research/) (epic [polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181)). This file only covers the open-call-specific application.
