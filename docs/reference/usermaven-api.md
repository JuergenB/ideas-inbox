# UserMaven API — Reference (this repo's integration constraints)

**Last verified:** 2026-06-01 (against https://usermaven.com/docs/API/introduction and https://usermaven.apidocumentation.com/)

## The one thing that matters here: there is NO read/stats API

UserMaven's public API is **event ingestion + workspace management only**. There is
**no documented endpoint that reads or queries analytics data** — no pageviews,
visitors, sessions, retention, cohorts, or returning-visitor counts.

This was re-verified on 2026-06-01. The API introduction explicitly scopes the API to:
> "Currently, we offer exclusive API access for Workspaces. This allows you to establish workspaces directly through the API."

…and points event submission to the Client SDKs / server-side integrations. The only
read-shaped call in the docs is `GET /v2/workspaces`, which returns **workspace config**,
not analytics.

**Consequence:** plain-English analytics questions ("how many users visit multiple times
per month?") **cannot be answered through UserMaven's API.** Use GA4 instead (see
[`ga4-api.md`](./ga4-api.md)). For UserMaven-only properties, the number must be read off
the dashboard by hand, or via one of the unsupported/expensive fallbacks below.

## Endpoints that DO exist

| Method | Path | Purpose |
|--------|------|---------|
| `POST` | `https://events.usermaven.com/api/v1/s2s/event?token=API_KEY.SERVER_TOKEN` | Server-to-server **event ingestion** (write only) |
| `GET`  | `https://api.usermaven.com/v2/workspaces` | List workspaces (B2B management). Header: `X-API-KEY: <key>` |
| `POST` | `https://api.usermaven.com/v2/workspaces` | Create a workspace (B2B management) |

Auth for the management API: `X-API-KEY` header, key from **Account Settings → API
Credentials**. Auth for the event API: `?token=API_KEY.SERVER_TOKEN` (or `Authorization:
Bearer`, or `"api_key"` body field).

## Reading analytics data anyway — the three (bad) options

1. **Dashboard, by hand.** What we do today. The cohort/retention screen gave the
   ~1.1% Period-1 figure used in idea 008. Reliable but manual, not scriptable.
2. **Dashboard internal API (undocumented, unsupported).** The web dashboard fetches
   cohort/retention/returning-visitor data from an internal endpoint using a
   browser-session bearer token (not the public API key). It is reverse-engineerable
   but **undocumented, unsupported, and may change without notice** — using it is a
   deviation from the vendor-recommended path and must be explicitly authorized before
   building against it. Fragile; treat as a last resort.
3. **Enterprise → BigQuery export.** The only *officially supported* way to query raw
   UserMaven data. Requires the Enterprise plan (custom pricing). Once exported, query
   with the BigQuery SQL/API. Overkill for ad-hoc questions; justified only if a project
   needs continuous raw-event access.

## Pricing / API access by tier (for context)

| Plan | Price | What the API gives you |
|------|-------|------------------------|
| Growth | ~$84/mo | Event submission API, SDKs, workspace management. **No read API.** |
| Scale | ~$199/mo | + CRM / ad-platform sync. **Still no read API.** |
| Enterprise | Custom | + BigQuery raw-event export — the only query path. |

## Cross-references

- Skill: `~/.claude/skills/usermaven/SKILL.md` (integration patterns, event tracking).
- For answering read/analytics questions in this repo, prefer GA4 — see
  [`ga4-api.md`](./ga4-api.md).
