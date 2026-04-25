## Phase 1 — Meta-only MVP launch (pilot: The Intersect, $250/mo)

Parent epic: #181

**This is the integration sub-issue that ties together: Zernio client + Airtable schema + creative pipeline + polling.**

### MVP campaign setup

- **Brand:** The Intersect
- **Source content:** existing organic campaign URL (curator picks one)
- **Goal:** `lead generation` (Zernio enum verbatim — note the space)
- **Format:** Meta `OUTCOME_LEADS` with **Instant Form** (no off-platform redirect bleed)
- **Budget:** $250/mo, ABO (Campaign Budget Optimization is wrong below ~$160/day)
- **Audience:**
  - Ad Set 1: Broad + Advantage+ Audience (no detailed interests — they're being deprecated)
  - Ad Set 2 (after 14 days when retargeting pool warms): Custom audience of 30-day site visitors + IG/FB engagers (90d) + email-list upload
- **Creative:** 5 base images × 10 headlines × 3 bodies, fed as raw assets to Advantage+ Creative
- **Conversion event:** `newsletter_signup` mapped to Meta `Lead` event
- **CAPI:** must be live on `theintersect.art` before launch (see pixel sub-issue)

### Instant Form spec

- Title: "Subscribe to The Intersect"
- Subtitle: brand-voice editorial hook
- Fields: name (prefilled), email (prefilled)
- Optional qualifying question (decision pending in epic open-questions): "What kind of art moves you?" with 3-4 options — filters bots/freebie-hunters but adds friction
- Privacy policy URL: brand's privacy page
- Thank-you page: redirect to brand newsletter archive on theintersect.art
- Lead delivery: webhook → existing email provider (Curated → Mailchimp; long-term Beehiiv migration in Phase 3)

### Targets

- **Day 1–7 (learning phase):** any signups, focus on signal — pre-conversion events (form view, scroll) feed algorithm
- **Day 7–30 (post-learning):** target $1.50–$3 CPA on cold prospecting
- **Day 30+ (with retargeting layer):** target $0.80–$1.50 CPA on warm
- **Frequency cap:** 3.0 (kill anything above)

### UI tasks

- [ ] `/dashboard/campaigns/[id]` "Promote" button (only if brand `Ads Enabled` toggle is on)
- [ ] Promote modal:
  - Pick goal (default: `lead generation`)
  - Pick budget + duration
  - Pick audience strategy (broad / lookalike / retargeting / mix)
  - Pick CTA + Instant Form template
  - Preview: shows the 8–15 day-1 variants ready to ship
  - Brand-review queue (first 30 days): variants ship to user approval before Zernio
- [ ] After approval: pushes to Zernio in `paused` state, user clicks "Activate" to commit spend

### Server tasks

- [ ] `POST /api/campaigns/[id]/promote` — creates Ad Campaign + Ad Variants in Airtable, generates creative, pushes to Zernio in paused state
- [ ] `POST /api/ad-campaigns/[id]/activate` — flips paused → active in Zernio
- [ ] `POST /api/ad-campaigns/[id]/pause` — manual pause
- [ ] `POST /api/ad-campaigns/[id]/duplicate-winner/[variantId]` — duplicate winning variant to new ad set with +30% budget (scale-up pattern)

### Done when

The Intersect's pilot campaign runs for 30 days, has at least 25 conversion events to exit Meta's learning phase, achieves CPA at or below $5, and the user has end-to-end visibility into spend / CPA / variant winners via the PolyWiz dashboard.
