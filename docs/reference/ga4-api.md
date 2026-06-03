# Google Analytics 4 (GA4) Data API — Reference (this repo)

**Last verified:** 2026-06-01
**Why this exists:** UserMaven has no read API (see [`usermaven-api.md`](./usermaven-api.md)),
so GA4 is the queryable source of truth for analytics questions backing proposals/decks
(Not Real Art, Arterial, Artsville, Polymash).

## Base facts

- **API:** Google Analytics Data API v1 (`betaAnalyticsData` / `analyticsdata.googleapis.com`).
- **Node SDK:** `@google-analytics/data` (`BetaAnalyticsDataClient`).
- **Scope:** `https://www.googleapis.com/auth/analytics.readonly`.
- **Property ID:** the **numeric** GA4 property ID (e.g. `properties/123456789`), NOT the
  `G-XXXXXXX` measurement ID. Find it in GA4 Admin → Property Settings.

## Auth — service account (headless, no per-session OAuth) — RECOMMENDED

1. In Google Cloud, create a service account; create a JSON key.
2. In GA4 Admin → Property → **Property Access Management**, add the service account's
   email (`...@...iam.gserviceaccount.com`) with **Viewer**. *Creating the key does not
   grant Analytics access — this grant step is required and easy to forget.*
3. Store the JSON **outside the repo** and point to it via env (gitignored `.env.local`):
   ```bash
   GOOGLE_APPLICATION_CREDENTIALS=/abs/path/to/ga4-service-account.json
   # plus, per property, a numeric ID:
   GA4_PROPERTY_NRA=properties/XXXXXXXXX
   ```
   The SDK auto-loads `GOOGLE_APPLICATION_CREDENTIALS` via Application Default Credentials.
   The **same** JSON works for the official MCP server below.

This is the vendor-recommended headless path. (Interactive `gcloud auth
application-default login` / OAuth also works but needs a browser and per-machine login —
not suitable for cron/headless. Service account is preferred here.)

## Two consumption form factors (both use the SAME service-account JSON)

### A. Parameterized CLI — `scripts/ga4-query.mjs` (proposed)
Deterministic, scriptable, cron-able, no server process, emits JSON for chart pipelines.
Takes `--property`, `--metrics`, `--dimensions`, `--start`, `--end` as args (parameterized,
not per-site scripts). Best for reproducible numbers in decks and for chaining into a
charting step.

### B. Official Google GA4 MCP server (`analytics-mcp`)
- Repo: https://github.com/googleanalytics/google-analytics-mcp (Google-maintained,
  Apache-2.0, **read-only**, v0.4.0 May 2026, ~2k★).
- Run via `pipx run analytics-mcp`; configure with
  `GOOGLE_APPLICATION_CREDENTIALS=<sa.json>` + `GOOGLE_PROJECT_ID=<id>`.
- Tools: `get_account_summaries`, `get_property_details`, `list_google_ads_links`,
  `run_report`, `run_funnel_report`, `get_custom_dimensions_and_metrics`,
  `run_realtime_report`.
- Best for free-form natural-language querying inline in chat across many sessions.
  Read-only = safe (cannot mutate GA config).

## The acceptance-test query: "how many NRA users visit multiple times per month?"

GA4 answers this far better than UserMaven's cohort screen. The defensible standard-API
answer uses the `newVsReturning` dimension over a monthly date range:

```jsonc
// runReport request body (REST shape; SDK mirrors this)
{
  "dateRanges": [{ "startDate": "2026-05-01", "endDate": "2026-05-31" }],
  "dimensions": [{ "name": "newVsReturning" }],
  "metrics": [
    { "name": "activeUsers" },
    { "name": "sessions" },
    { "name": "sessionsPerUser" }
  ]
}
```

Interpretation:
- `newVsReturning = "returning"` → **users who had a prior session** = the multi-visit
  cohort (the paywall-monetizable audience). Returning % = returning / (new + returning).
- `sessionsPerUser` triangulates visit frequency.
- A *stricter* "≥2 sessions within this single month" needs a per-user session-count
  distribution, which standard Data API dimensions don't expose directly — approximate via
  `sessions` vs `totalUsers`, or build it in a GA4 Exploration. The `newVsReturning`
  returning-user count is the load-bearing, citable number; note the definitional caveat
  when used in a deck.

Pair this with idea 008's UserMaven figure (~1.1% Period-1 retention) to corroborate/refine
the loyalty argument. See `ideas/008-paywall-viability-notrealart/research/sources.md`.

## Gotchas seen / to watch

- **Forgetting the Viewer grant** on the property → 403 `PERMISSION_DENIED` even with a
  valid key. Grant the SA email on the *property* (not just the GCP project).
- **Using the `G-` measurement ID** instead of the numeric property ID → 400 / "invalid
  property".
- **(quota)** Data API has per-property request quotas; fine for ad-hoc use, batch if
  scripting many queries.

## Cross-references
- No-read-API rationale for using GA4 over UserMaven: [`usermaven-api.md`](./usermaven-api.md).
