## Phase 2 — LinkedIn Lead Gen Forms (direct API, bypassing Zernio)

Parent epic: #181

**Why bypass Zernio:** Zernio's LinkedIn ads coverage is shallow — Sponsored Content + post boost only. **Lead Gen Forms and B2B targeting (job title, seniority, company size) are roadmapped, not shipped** (verified via Zernio docs.zernio.com/ads/linkedin 2026-04-24). Lead Gen Forms are the killer app for our brands' professional-audience component, so we build a direct LinkedIn Marketing API client.

### Why this is high-value for our brands

The Intersect, Not Real Art, and Artsville USA have a notable B2B/professional audience component — arts professionals, curators, gallery owners, editors, cultural-sector employees. LinkedIn's job-title targeting + Lead Gen Forms with prefilled name/email/job-title eliminates the off-platform redirect bleed entirely and structurally produces higher-quality subscribers (verified job titles).

### Cost reality

- LinkedIn CPMs: $6–$20 ($30–$80 in some sources, varies wildly with targeting tightness)
- Lead Gen Form CPA for editorial newsletters: $50–$150 (vs Meta $20–$60)
- At $300/mo per brand, expect ~4 qualified pro signups/mo per brand
- Low absolute volume, materially higher quality

### Tasks — direct LinkedIn Marketing API client

- [ ] LinkedIn Developer App registration per brand (or one shared app + per-brand OAuth)
- [ ] OAuth 2.0 flow: scopes `rw_ad_campaign`, `r_ads_reporting`
- [ ] `src/lib/linkedin-ads/` — client + types + endpoints
- [ ] Endpoints to wrap:
  - `POST /rest/adAccounts/{id}/adCampaignGroups` — campaign group
  - `POST /rest/adAccounts/{id}/adCampaigns` — Sponsored Content campaign with Lead Gen objective
  - `POST /rest/adAccounts/{id}/adCreatives` — creative + Lead Gen Form binding
  - `POST /rest/leadGenForms` — Lead Gen Form template (privacy URL, fields, qualifying questions)
  - `GET /rest/adAccounts/{id}/leadGenFormResponses` — pull lead submissions
  - `POST /rest/adAccounts/{id}/audiences` — custom audience for retargeting
- [ ] Rate limit: 10K calls/day, 100/s burst — well within our needs

### Tasks — targeting

- [ ] Audience builder UI for B2B targeting:
  - Job titles: `Curator`, `Gallery Director`, `Editor`, `Museum Director`, `Art Director`, `Producer` (configurable per brand)
  - Industries: `Fine Art`, `Museums and Institutions`, `Media Production`, `Performing Arts`, `Publishing`
  - Seniority: Manager+, Director+
- [ ] Audience size pre-flight check (LinkedIn warns under 50K, broaden by seniority/adjacent industries)
- [ ] Estimated US arts-professional audience: 10K–150K depending on combinations

### Tasks — lead delivery

- [ ] Webhook from LinkedIn → PolyWiz endpoint → Airtable Lead Submissions table
- [ ] Per-brand newsletter provider integration:
  - The Intersect: Curated → Mailchimp via webhook (until migration)
  - Not Real Art: TBD (newsletter provider not yet identified — research)
  - Artsville USA: Ghost native subscribers API
- [ ] Confirm-opt-in flow per brand (GDPR / CAN-SPAM compliance)

### Tasks — creative

- [ ] LinkedIn ad copy prompt profile (different from Meta — longer-form, value-driven, professional tone, value-prop hook in first 150 chars)
- [ ] Existing PolyWiz LinkedIn organic copy is already tuned for professional tone — reuse as starting point, layer in CTA-specific variations

### Done when

The Intersect's LinkedIn pilot runs for 30 days at $300/mo, generates ≥4 qualified arts-professional newsletter signups, and Lead Gen Form submissions flow automatically into the brand's email provider.
