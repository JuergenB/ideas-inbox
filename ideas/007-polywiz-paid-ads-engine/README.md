# Idea 007: PolyWiz Paid Ads Engine — a New Campaign *Class*, Multi-Objective, Per-Brand

**Origin:** Juergen Berkessel, 2026-04-25 · **Revised 2026-06-18** — reframed from a newsletter-signup pilot into a multi-objective **ad-campaign class** that sits *beside* PolyWiz's organic engine, not inside it.
**Status:** Research Complete — Awaiting Go/No-Go (v2 reframe)
**Linked implementation epic:** [JuergenB/polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181) (sub-issues #182–#191)
**Companion idea:** [011 — Owned Promotion & PR Engine](../011-pressranger-outreach-playbook/) — supplies the *first pilot objective* (open-call submissions). 007 and 011 ship together.
**Pilot:** open-call submissions on Not Real Art / Artsville → expand per-brand
**Budget envelope:** $250–$500 per brand per month in ad spend **+ a flat $100/mo Zernio Ads add-on** (confirmed 2026-06-18 via the in-product paywall — our AppSumo plan requires it; it is *not* bundled). The $100/mo is a shared-engine cost across all brands/objectives, not per-brand.

> **What changed in v2 (2026-06-18):** Two things. (1) A live re-verification of the Zernio Ads API ([polywiz-app#250](https://github.com/JuergenB/polywiz-app/pull/250)) corrected the build premises — ad webhooks and SDK ads-coverage both **exist** now, so the engine is event-driven, not poll-driven. (2) The bigger shift: ads are **not** "a new campaign type bolted onto the organic trickle generator." An ad campaign is a *different kind of object* with a different lifecycle and conversion goals. v2 models it as a separate **campaign class** that shares PolyWiz's intake/creative substrate and then diverges completely. The original newsletter-pilot framing is preserved at git tag `idea-007-v1-awaiting-gono`.

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/polywiz-paid-ads-engine-slide-1.png?v=4" width="820" alt="PolyWiz Paid Ads Engine — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/007-polywiz-paid-ads-engine/exports/presentation.html)
**📄 Slide deck (PDF):** [exports/presentation.pdf](exports/presentation.pdf) — download for print or offline.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, verbatim quotes, retrieval dates, including the 2026-06-18 Zernio Ads API re-verification.
**📄 Implementation sub-issues (research/):** Phase 0 prerequisites, Phase 1 build-out, Phase 2 platform + objective expansion, Phase 3 video + fundraising. See [`research/`](research/).

---

## TL;DR

PolyWiz today is an **organic trickling engine** — it turns a URL into a six-month tapering *series of posts*. This idea adds a **second engine beside it: paid ads** — a different animal entirely. An ad campaign isn't a long content series; it's **one ad (or a few) with many variations**, run on a budget over a defined flight, optimized by the platform's algorithm toward a **conversion** — submit, register, subscribe, follow, donate, or express interest (in an exhibition, a partnership, or a cause).

Three things make now the moment: (1) **Zernio shipped — and we've now re-verified (2026-06-18) — a paid-ads API** across 6 networks reachable with the key we already use, with ad webhooks and SDK coverage that make the build event-driven. (2) **PolyWiz already owns ~80% of the substrate** an ad engine needs — URL scrape, brand voice, image catalog, auto-crop, per-brand keys. (3) **Juergen has the playbook** — previously ran $70K/yr Meta budgets to $0.80–$0.90 CPA.

The pilot is **open-call submissions** (the [011](../011-pressranger-outreach-playbook/) use case) — a deadline-driven objective with clean cost-per-submission math, a far cleaner first signal than diffuse newsletter CPL. Same engine then repoints, per brand, at event registration, exhibition interest, newsletter growth, and — last to build, but visible in the plan from day one — **fundraising**.

---

## The core reframe: ads are a different campaign *class*, not a new *type*

PolyWiz's unit of work is a tapering post series. An ad campaign is a fundamentally different object. Modeling it as just another value in the existing campaign-type enum would force a conversion-oriented, budget-driven, algorithm-optimized thing into a generator built for cadence and reach. Instead, **two sibling classes**:

| | **Organic campaign** (exists today) | **Paid ad campaign** (this idea) |
|---|---|---|
| **Unit of work** | ~6-month series of dozens of posts | 1–few ads × many *variations*, tested concurrently |
| **Lifecycle** | tapering schedule → publish → done | flight (budget + dates) → learning → kill losers / scale winners |
| **Primary goal** | reach, cadence, presence | **conversion** — submit, register, subscribe, follow, donate, express interest |
| **Optimizer** | our distribution-bias schedule | the ad platform's algorithm |
| **Net-new config** | platforms, cadence, distribution bias | **investment level, ad account, flight length, objective, audience, landing page** |
| **Success metric** | posts shipped, reach | **cost per action** (submission / RSVP / signup / donation) |

This is **Layer 1**: every campaign in PolyWiz is either *Organic* or *Paid*. They are different data models with different lifecycles — but they **share the front-end substrate**.

### What's shared vs what diverges

```
            ┌─────────── SHARED INTAKE SUBSTRATE ───────────┐
  URL  ──▶  Firecrawl scrape ──▶ brand voice ──▶ image catalog ──▶ auto-crop ──▶ creative gen
            └───────────────────────┬───────────────────────┘
                                    │  (diverges here)
            ┌───────────────────────┴───────────────────────┐
            ▼                                                ▼
   ORGANIC: tapering post-series           PAID: ads × variations on a budgeted flight,
   on a cadence schedule                   conversion objective, ad account, audience,
                                           optimization loop (kill/scale variants)
```

Both classes start **identically** — paste a URL (blog post, exhibition page, open call), scrape it, pull brand voice and visuals. That overlap is real and worth reusing. After intake they **diverge completely**: the paid class captures things the organic class never needs — **investment level, platform selection, flight length, conversion objective, ad account, target audience** — and runs an optimization loop instead of a publishing schedule.

---

## Layer 2 — the objectives (conversion-oriented, per-brand)

Within a Paid campaign, the **objective** is the conversion-oriented dimension. Each objective sets the Zernio `goal`, the conversion event, the creative angle profile, the platform mix, the pacing, and the KPI:

| Objective | PolyWiz subject type | Zernio `goal` | Conversion event | Distinct creative angles | Best platform mix | Pacing | KPI |
|---|---|---|---|---|---|---|---|
| **Open-call submissions** *(pilot)* | Open Call | `lead_generation` / `lead_conversion` | Submit / Lead | deadline, prize, eligibility | Meta + **Pinterest** + **Google Ad Grants** | **deadline flight** | cost / submission |
| **Exhibition interest** | Exhibition | `traffic` / `awareness` **+ secondary** `lead_generation` | ViewContent **→ Subscribe / Follow** | visual hero, artist spotlight | **Pinterest** + IG + Meta | run-of-show | cost / visitor **+ cost / captured lead** |
| **Newsletter growth** | Newsletter | `lead_generation` | Subscribe | value-of-issue, FOMO | Meta + **newsletter ad networks** | always-on | cost / subscriber |
| **Event / workshop registration** *(occasional)* | Event | `traffic` / `conversions` | RSVP / Register | date, lineup, local | Meta + **Nextdoor** (local) | **date flight** | cost / RSVP |
| **Fundraising / donations** | *(new subject type)* | `conversions` (value) | Donate / Purchase | impact, matching-gift, urgency, partnership | Meta + **Google Ad Grants** + email | seasonal | ROAS / cost-per-donor |

Note the **platform mix changes per objective** — platform choice isn't a global decision. Pinterest earns its place on *visual* objectives (exhibitions, image-led open calls), not as a newsletter-CPL channel. Nextdoor only matters for local events. Newsletter ad networks (beehiiv Boosts / SparkLoop) only for the subscribe objective. **Google Ad Grants ($10k/mo free for 501(c)(3)s** — already in [011's master resource](../011-pressranger-outreach-playbook/research/arts-master-resource.csv)) maps across open calls, fundraising, and exhibitions via search intent.

### Exhibition interest is a *dual* objective — and a newsletter feeder

A bare `ViewContent` is a weak success signal — "they looked" isn't "they're interested." So an exhibition campaign optimizes for the **view** as the platform-side conversion *and* layers a **secondary capture** on the landing experience: prompt the engaged visitor to **subscribe to the newsletter, follow the exhibition, or follow the brand** via scroll-depth / time-on-page / exit-intent CTAs. That converts a top-of-funnel awareness play into a *measurable* lead and feeds it straight into the newsletter-growth objective — the **compounding loop** ([011](../011-pressranger-outreach-playbook/) names it): a paid exhibition flight produces views now, captured subscribers/followers from the interested minority, and a retargeting pool that makes the *next* campaign cheaper. The same secondary-capture pattern applies to open calls (non-submitters → newsletter) and, later, fundraising (interested non-donors → cultivation list).

### A note on events

Event registration is the **occasional** objective, not a core one — we don't run many. It skews to **Artsville USA** (events + workshops happen there more than on Not Real Art), and is essentially **N/A for The Intersect** (a newsletter, not a venue). It's in the architecture for completeness and per-brand enablement, but it isn't a Phase 1 or Phase 2 priority the way submissions, exhibition interest, and newsletter growth are.

### Fundraising: design-first-class, build-last

Fundraising is **named in the architecture and shown in the deck from day one** — it's the highest-interest objective for the team (Scott/Elise) and a 501(c)(3) governance asset (the "broad support from 500+ donors" public-support test makes repeatable donor outreach a compliance lever, not just marketing). But its *implementation* is sequenced **last**: donation conversion is the hardest objective (value-based ROAS, donor-trust creative, compliance). We get our feet wet first on the easy, measurable objectives — submissions, registrations, interest, signups — then add fundraising once the engine is proven.

---

## Layer 3 — per-brand configuration (which objectives, which accounts)

Not every objective applies to every brand. Fundraising is irrelevant to a for-profit brand; The Intersect may only ever run newsletter growth. So **which ad objectives are available is a per-brand setting** — the same gating pattern PolyWiz already uses for per-brand feature flags (`lnkBioEnabled`, the `ENABLED_CAMPAIGN_TYPES` allow-list). Each brand carries:

1. **Enabled ad objectives** — the allow-list of Layer 2 objectives this brand can run.
2. **Connected ad accounts** — per platform, per brand (`adAccountId`: Meta `act_…`, LinkedIn `urn:li:sponsoredAccount:…`), via Zernio's per-brand OAuth (`GET /v1/connect/{platform}/ads`).
3. **Budget envelope + defaults** — per-brand monthly cap and per-objective default investment level.

Illustrative matrix (final values are a brand-config decision):

| Brand | Open-call submissions | Exhibition interest | Newsletter growth | Event / workshop | Fundraising |
|---|---|---|---|---|---|
| **Not Real Art** | ✓ | ✓ | ✓ | occasional | ✓ *(last phase)* |
| **Artsville USA** | ✓ | ✓ | ✓ | ✓ *(events + workshops)* | ✓ *(last phase)* |
| **The Intersect** | — | — | ✓ | — | — |

This is the mechanism that keeps PolyWiz from becoming "art-centric" or "nonprofit-centric": every brand sees only the objectives it's configured for. One engine, per-brand capability surface.

---

## The ad-campaign object (what the new config captures)

Where an organic campaign captures *cadence + distribution bias*, a paid campaign captures:

- **Objective** (Layer 2) → sets Zernio `goal`, conversion event, creative profile
- **Investment level** → total/daily budget; drives the flight and learning-phase viability
- **Platform mix** → which of the 6 Zernio ad networks (objective-defaulted, brand-constrained)
- **Flight length** → start/end dates (deadline-aware for open calls and events)
- **Ad account** → the per-brand connected `adAccountId` for each platform
- **Audience** → broad + lookalike (from engaged subscribers) + retargeting pool
- **Landing page** → the conversion destination (open-call submission URL, RSVP page, donate page)
- **Variations** → N creative variants per ad, generated from the shared substrate, rotated by the optimization loop (kill bottom performers weekly, refill)

---

## Zernio reality (re-verified 2026-06-18, OpenAPI v1.0.4)

Full reference: [polywiz-app/docs/reference/zernio-api.md](https://github.com/JuergenB/polywiz-app/blob/main/docs/reference/zernio-api.md) ([PR #250](https://github.com/JuergenB/polywiz-app/pull/250)).

- **6 ad networks** — Meta (FB+IG), Google, TikTok, LinkedIn, Pinterest, X. (The "7 platforms" marketing line double-counted Facebook + Instagram; there is no 7th.)
- **`goal` enum (underscores):** `engagement`, `traffic`, `awareness`, `video_views`, `lead_generation`, `conversions`, `app_promotion`, plus `lead_conversion`, `catalog_sales` on create.
- **Ad webhooks exist** — `ad.status_changed`, `lead.received`, `account.ads.initial_sync_completed`. The engine is **event-driven** (subscribe for lead capture + lifecycle), not a polling cron as v1 assumed.
- **SDK covers ads** — `@getlatedev/node@0.2.101` ships `client.ads.*` / `client.adcampaigns.*` / `client.adaudiences.*`. Raw `fetch` only for the few uncovered endpoints (lead-forms, catalogs, `targeting/search`, `reach-estimate`, tracking-tags, conversion-destinations).
- **Gating** — the Ads add-on is **a flat $100/mo subscription on our AppSumo account** (confirmed 2026-06-18 via the in-product paywall: "Add Ads ($100/mo)"). The OpenAPI spec describes ads as bundled on *usage-based* plans, but our *legacy/AppSumo lifetime* plan is **not** bundled — it requires the paid add-on. (Supersedes both the v1 "$50/mo" and the interim "likely bundled / billing check" assumptions.) The fee is a shared-engine cost across all brands and objectives, separate from per-flight ad spend.
- **Per-brand ad-account OAuth** — `GET /v1/connect/{platform}/ads`, `platform ∈ [facebook, instagram, linkedin, tiktok, twitter, pinterest, googleads]`.

---

## Phase plan

> Time estimates are AI-paired-dev days, not engineering weeks. Build order ≠ vision order: fundraising is in the vision from slide one but built last.

| Phase | What | Objectives in scope |
|---|---|---|
| **Phase 0 — Prerequisites** | Confirm Zernio plan covers ads; connect per-brand ad accounts via OAuth; install Pixel + Conversions API on the brand sites that lack them. | — |
| **Phase 1 — Paid class + open-call pilot** | Build the Paid campaign class (object model, config surface, variation generator, ad account wiring, `lead.received` webhook capture). Run the open-call submission pilot at ~$250 on the next live call. | Open-call submissions |
| **Phase 2 — Objective + platform expansion** | Add event registration and exhibition interest; turn on Pinterest (visual) and Nextdoor (local); newsletter growth + newsletter ad networks. Per-brand objective config UI. | + Event, Exhibition, Newsletter |
| **Phase 3 — Video + fundraising** | Slideshow-video creative for TikTok/YouTube; **fundraising/donation objective** with value-based optimization + donor compliance; Google Ad Grants for nonprofit search. | + Fundraising |
| **Phase 4 — Optimization & scale** | Per-variant landing pages, engaged-subscriber lookalikes, cross-brand reporting, auto-pacing on CPA. | all |

---

## Relationship to idea 011

[011](../011-pressranger-outreach-playbook/) is the promotion/PR engine; it supplies **007's first objective**. An open-call record (deadline + landing page, already in the Artwork Archive Airtable) triggers a Paid campaign optimized for *submissions*, while 011's organic + PR + free-listing channels harvest existing intent. 011's own evidence — the grant campaigns over-performed because we ran Facebook ads to the landing pages — is the thesis 007 operationalizes. **They ship together: open-call submissions is the joint pilot.**

---

## Open questions

1. **Zernio Ads add-on ($100/mo)** — confirmed required on our AppSumo plan (in-product paywall, 2026-06-18). Decision: who owns this recurring line item (Scott, monthly) and is it approved? It's only worth it as the shared multi-brand/multi-objective engine — explicitly *not* for The Intersect alone.
2. **Per-brand objective config** — UI surface in PolyWiz Settings (brand → enabled objectives), or Airtable-driven flags read at runtime?
3. **Ad-account ownership** — who connects each brand's Meta/Pinterest ad account via Zernio OAuth, and who owns budget authority per brand?
4. **Pixel/CAPI install** — which brand sites still need server-side Conversions API (Artsville, Intersect-on-Curated)?
5. **Pilot call** — which open call is the first live test (011 suggests *Art of Resistance*), and at what budget?
6. **Newsletter ad networks** — in scope for Phase 2, or hold until the social objectives are proven?

---

## The ask

A green light for **Phase 0 + the open-call pilot**:

- **Approve** the flat **$100/mo Zernio Ads add-on** — the shared-engine fee (confirmed required on our AppSumo plan), separate from ad spend.
- **Connect** Not Real Art / Artsville ad accounts via Zernio OAuth.
- **Run** one open-call submission flight at ~$250 to capture our first-ever cost-per-submission.

If the pilot reads a clean cost-per-submission, the same engine extends — per brand, per objective — across events, exhibitions, newsletter growth, and ultimately fundraising, with no additional build cost beyond per-brand ad budget.
