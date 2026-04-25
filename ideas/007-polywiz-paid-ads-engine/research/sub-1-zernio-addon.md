## Phase 0 prerequisite — Zernio Ads add-on purchase + ad account connection

Parent epic: #181

**Why this is blocking:** Live-probing on 2026-04-24 confirmed every `/v1/ads/*` endpoint returns `403 {"error":"Ads add-on required"}` on the current Dominate (AppSumo lifetime) plan. No integration code can be tested until the add-on is purchased.

### Tasks

- [ ] Open ticket with Zernio support to confirm exact tier required for Ads add-on (Build $10/mo? Accelerate ~$50/mo? Unlimited?). User has agreed to upgrade up to ~$50/mo.
- [ ] Purchase the add-on for the user's Zernio account
- [ ] Verify `GET /v1/ads/accounts` (or equivalent) now returns 200
- [ ] Connect Meta ad accounts via Zernio's OAuth flow (`/v1/connect/{platform}`) for The Intersect, Not Real Art, Artsville USA
- [ ] Capture each brand's `adAccountId` (Meta format: `act_…`) and store in Airtable Brands table — new field `Meta Ad Account ID`
- [ ] Live-probe response shapes for `POST /v1/ads/create`, `POST /v1/ads/boost`, `GET /v1/ads/tree`, `GET /v1/ads/{id}`, `GET /v1/ads/{id}/analytics` and update `docs/reference/zernio-api.md`
- [ ] Confirm `/v1/ads/*` rate limits (no headers were returned during probe; assume plan-tier defaults until proven otherwise)
- [ ] Document the OAuth platform identifiers for ads variants (`meta-ads` vs `facebook-ads` vs other)

### Done when

`docs/reference/zernio-api.md` Ads API section has all open probes resolved with verified data, and at least one ad account is connected for the pilot brand (The Intersect).
