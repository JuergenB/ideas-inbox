## Phase 1 — Zernio Ads API client (`src/lib/zernio-ads/`)

Parent epic: #181

**Why this exists:** `@getlatedev/node@0.1.7` SDK has zero ads coverage (verified by grep — 0 matches for `ads`/`Ads`/`/v1/ads`). Must be built as raw `fetch` against `/v1/ads/*` with our existing per-brand key resolution.

### Architecture

`src/lib/zernio-ads/` mirrors `src/lib/late-api/` but for ads:
- `client.ts` — `createBrandAdsClient(brand)` resolves per-brand key, returns typed wrapper
- `types.ts` — request/response types per endpoint (live-probe before finalizing — see #182)
- `endpoints/` — one file per endpoint group (`campaigns.ts`, `ads.ts`, `analytics.ts`, `audiences.ts`, `boost.ts`)

### Endpoints to wrap

(All require the Ads add-on — see prerequisite sub-issue.)

- `POST /v1/ads/campaigns` — create campaign (goal, budget, schedule)
- `POST /v1/ads/create` — create individual ad with creative
- `POST /v1/ads/boost` — boost existing organic post (Spark Ads pattern, useful for TikTok phase 3)
- `GET /v1/ads/tree` — list campaign → ad set → ad hierarchy
- `GET /v1/ads/{id}` — fetch single ad status
- `GET /v1/ads/{id}/analytics` — spend, impressions, CPC, CPM, CTR, conversions, ROAS
- `POST /v1/ads/audiences` — create custom audience (lookalike seed, retargeting list)
- `PATCH /v1/ads/{id}` — pause / activate / update budget
- `DELETE /v1/ads/{id}` — kill an ad

### Critical implementation notes

- **Goal enum verbatim:** `engagement`, `traffic`, `awareness`, `videoviews`, `lead generation`, `conversions`, `app_promotion`. Note inconsistent separators — pass exactly as documented.
- **No webhooks** — must implement polling cron (see separate sub-issue).
- **Rate limits unknown** (no `RateLimit-*` headers returned during probe). Default to conservative: 30s between polls per brand, 1 req/s burst, exponential backoff on 429.
- **OAuth platform identifiers** unconfirmed (`meta-ads` vs `facebook-ads` vs other) — capture during prerequisite live-probe.
- **adAccountId formats** are platform-native: Meta `act_…`, LinkedIn `urn:li:sponsoredAccount:…`. Validate before sending.

### Tasks

- [ ] Scaffold `src/lib/zernio-ads/` matching `src/lib/late-api/` structure
- [ ] Implement client + types after live-probe sub-issue completes
- [ ] Add request/response logging (DEBUG-gated) for the first 30 days — every Zernio ad call should be inspectable
- [ ] Add to `docs/reference/zernio-api.md` once all endpoints are wrapped

### Done when

`createBrandAdsClient(brand).campaigns.create({...})` works end-to-end against The Intersect's connected Meta ad account in Zernio's `paused` state (no actual spend committed during testing).
