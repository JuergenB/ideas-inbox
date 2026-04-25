## Phase 1 — Ad polling cron + performance dashboard

Parent epic: #181

**Why polling, not webhooks:** Zernio does not emit webhooks for ad lifecycle events (verified during live-probe 2026-04-24). All status + analytics must be polled.

### Tasks — polling cron

- [ ] Vercel cron job (or Inngest if we already use it) — every 30 min for active campaigns
- [ ] For each active Ad Campaign in Airtable:
  - Fetch `GET /v1/ads/{id}` → update status, daily spend, end date
  - Fetch `GET /v1/ads/{id}/analytics` → update impressions, clicks, CTR, CPM, CPC, conversions, CPA, ROAS
  - For each Ad Variant under it: fetch per-variant analytics, update Airtable row
  - Last Polled At timestamp on each
- [ ] Conservative rate limit handling: 1 req/s burst per brand, 30s sleep between brand passes, exponential backoff on 429
- [ ] Dead-campaign detection: if campaign has been `Completed` or `Failed` for 7+ days, drop from polling cycle
- [ ] Error budget: alert if >20% of poll calls fail in a single cycle

### Tasks — dashboard

Add to `/dashboard/campaigns/[id]` a new "Ads" tab visible when `Ads Enabled` is on for the brand:

- [ ] Per-ad-campaign performance card: spend / cap, CPA, CPM, CTR, frequency, status badge
- [ ] Per-variant table: image thumbnail, headline, intent slot, impressions, CTR, CPA, status (active / paused / killed / winning)
- [ ] Alert flags:
  - Frequency >3 → "audience fatigue" warning
  - CPA >$5 (configurable per brand) → "underperforming" warning
  - No conversion events in 48h → "starved learning" warning
  - Variant in bottom 20% by CPA after 7 days of stable spend → suggest kill
- [ ] Quick actions: pause campaign, resume, kill variant, duplicate winning variant to new ad set with +30% budget

### Tasks — variant rotation cron

- [ ] Weekly cron: for each active Ad Campaign:
  - Identify bottom 20% by CPA (with statistical significance check — minimum 1000 impressions)
  - Mark them `Killed` in Airtable
  - Trigger new variant generation to refill (calls creative pipeline sub-issue)
  - Push new variants to Zernio
- [ ] Don't refresh in first 7 days (let learning phase complete first)
- [ ] Don't touch settings within 48h of last change (resets Meta learning phase)

### Done when

Polling cron runs reliably for 7 days against The Intersect's pilot campaign, dashboard accurately reflects Meta Ads Manager numbers (within 5%, accounting for view-through inflation), and one variant rotation cycle completes successfully.
