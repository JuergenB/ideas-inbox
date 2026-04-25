## Phase 1 — Airtable schema for paid ads

Parent epic: #181

### New tables

**Ad Campaigns** (one per brand-campaign-platform combination)
- `Name` (text)
- `Brand` (linked → Brands)
- `Source Campaign` (linked → Campaigns — the organic campaign this ad campaign is derived from, optional)
- `Platform` (single select: Meta, LinkedIn, Google, TikTok, YouTube)
- `Goal` (single select: lead generation, conversions, traffic, engagement, awareness, videoviews, app_promotion — matches Zernio enum verbatim)
- `Status` (single select: Draft, Pending, Active, Paused, Completed, Failed)
- `Budget Total` (currency)
- `Daily Budget` (currency)
- `Start Date` (date)
- `End Date` (date)
- `Zernio Ad ID` (text — `platformAdId` reference)
- `Meta Ad Account ID` (rollup or text from Brand)
- `Instant Form Spec` (JSON — Lead Gen Form structure when applicable)
- `Audience Spec` (JSON — Advantage+ broad / lookalike / retargeting config)
- `Variants` (linked → Ad Variants, multiple)
- `Conversion Events` (linked → Conversion Events, multiple)
- `Spend To Date` (currency, polled)
- `CPA` (formula, polled)
- `Created At` / `Updated At` (datetime)

**Ad Variants** (one per image × headline × body combination — typically 8–15 per ad campaign at launch)
- `Ad Campaign` (linked → Ad Campaigns)
- `Variant Index` (number)
- `Image URL` (URL — Vercel Blob)
- `Image Source` (single select: Scraped, FLUX Variant, Ideogram Generated, User Upload)
- `Aspect Ratio` (single select: 1:1, 4:5, 9:16, 16:9)
- `Headline` (text)
- `Headline Intent Slot` (single select: curiosity, urgency, social-proof, benefit, contrarian, pain, status, risk-reversal, authority, contrast)
- `Body Copy` (long text)
- `CTA` (single select: Sign Up, Subscribe, Learn More, Get Quote, Apply Now, …)
- `Status` (single select: Active, Paused, Killed, Winning)
- `Impressions` / `Clicks` / `CTR` / `Conversions` / `CPA` (polled metrics)
- `Last Polled At` (datetime)

**Conversion Events** (mapping our Airtable conversion events to platform native events)
- `Brand` (linked → Brands)
- `Event Name` (text — e.g., `newsletter_signup`)
- `Meta Event Type` (single select: Lead, CompleteRegistration, Subscribe, Custom)
- `LinkedIn Event Type` (single select: Lead, Sign Up, Subscribe, Custom)
- `TikTok Event Type` (single select: SubmitForm, CompleteRegistration, Subscribe, Custom)
- `Landing Page URL` (URL)
- `Optimization Event` (checkbox — true if this is the primary optimization signal)

### New fields on existing Brands table

- `Ads Enabled` (checkbox — gates ads UI per brand)
- `Meta Ad Account ID` (text — `act_…`)
- `Meta Pixel ID` (text)
- `LinkedIn Insight Tag ID` (text)
- `TikTok Pixel ID` (text)
- `GTM Container ID` (text)
- `GA4 Property ID` (text)
- `Default Daily Ad Budget` (currency)
- `Newsletter Signup URL` (URL)
- `Newsletter Provider` (single select: Mailchimp, Beehiiv, ConvertKit, Ghost Members, Other)

### Tasks

- [ ] Use Airtable Meta API (`PATCH https://api.airtable.com/v0/meta/bases/app5FPCG06huzh7hX/tables`) to create the 3 new tables and add fields to Brands
- [ ] Update `src/lib/airtable/types.ts` with TypeScript types
- [ ] Update `src/lib/airtable/index.ts` with helper fetchers
- [ ] Document new tables in `CLAUDE.md` (Tables section)

### Done when

All schema is created via Meta API (NOT via the Airtable UI), TypeScript types exist, and `CLAUDE.md` documents the tables.
