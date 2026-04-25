## Phase 0 prerequisite — Pixel + Conversions API install on 3 brand sites

Parent epic: #181

**Why this is blocking:** Without server-side CAPI, browser-only Pixel captures 70–80% of conversions; with Pixel + CAPI deduped you get 90–95%. iOS 14.5+ ATT, ITP, and ad blockers continue to break browser-only tracking. Practitioner data shows **17.8% lower cost-per-result with CAPI on**. Two of three pilot brands are missing CAPI today; one is missing the Pixel entirely.

### Verified status (2026-04-24)

| Brand | Site | Platform | Meta Pixel | Meta CAPI | GA4 | GTM |
|---|---|---|---|---|---|---|
| Not Real Art | notrealart.com | WordPress | OK (`672012889860920`) | OK (Openbridge plugin) | Missing (placeholder ID only) | Missing |
| Artsville USA | artsvilleusa.com | Ghost 6.33 | **MISSING** | **MISSING** | OK (`G-EDQXXC4P56`) | Missing |
| The Intersect | theintersect.art | Curated (deprecated 2024) | OK (`1877709392441022`) | **MISSING** (platform-constrained) | Missing | Missing |

> Domain note: `artswithusa.com` does not resolve. Canonical domain is `artsvilleusa.com`.

### Tasks — Artsville USA (highest priority — zero Meta tracking today)

- [ ] In Meta Events Manager → create Pixel for `artsvilleusa.com`
- [ ] Ghost Admin → Settings → Code injection → Site Header → paste Meta base code
- [ ] Stand up Stape.io GTM server-side container (~$20/mo) → install Meta Conversions API tag
- [ ] Install GTM web container in Ghost Code Injection
- [ ] Configure Stape's CAPI tag to fire `PageView` and `Lead` (form submit) with `event_id` dedup
- [ ] Verify via Meta Pixel Helper + Test Events tab — trigger Ghost Portal signup → confirm `Lead` event arrives via both browser and CAPI

### Tasks — The Intersect (Curated, platform-constrained)

- [ ] Stand up Stape.io GTM server-side container for theintersect.art
- [ ] Install GTM web container ID in Curated's Code Injection (Publication settings → Customize → Code Injection)
- [ ] Configure Stape CAPI tag for existing pixel `1877709392441022`
- [ ] Trigger `/email_subscribers` form submit → confirm `Lead` event in Events Manager via both browser + CAPI

### Tasks — Not Real Art (already strong on Meta, fill foundation gaps)

- [ ] Drop dead Universal Analytics tag (`UA-48994998-2`) — UA was sunset July 2023
- [ ] Install GTM via "GTM4WP" plugin OR Site Kit by Google
- [ ] Configure GA4 + Google Ads conversion tracking + LinkedIn Insight Tag in GTM
- [ ] Verify all tags via Tag Assistant + Pixel Helper

### Tasks — All three (foundation for Phase 2+)

- [ ] LinkedIn Insight Tag installed via GTM container on each site
- [ ] TikTok Pixel installed via GTM container on each site (deferred firing — wire it now, activate when needed)
- [ ] Document each brand's pixel ID, GTM container ID, conversion event names in Airtable Brands table (new fields: `Meta Pixel ID`, `GTM Container ID`, `LinkedIn Insight Tag ID`, `TikTok Pixel ID`, `GA4 Property ID`)

### Strategic note (separate sub-issue territory)

The Intersect should migrate off Curated within 6 months — it was sunset by Mailchimp in 2024 and constrains pixel install. Migration targets: Ghost (matches Artsville) or Beehiiv (purpose-built for paid newsletters). Tracked in Phase 3 of the parent epic.

### Done when

All 3 brands have Meta Pixel + CAPI verified firing on signup forms via Test Events tab, with `event_id` dedup confirmed working. GTM containers exist on all 3 sites.
