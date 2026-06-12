# PressRanger — In-Depth Feature Breakdown & How We'd Use It

Sourced primarily from PressRanger's own product pages (scraped 2026-06-12 via Firecrawl), cross-checked against independent reviews for the gap between **what's claimed** and **what users report**. Vendor claims are labelled as such; the independent caveats are what shape how we should actually use it. URLs in [sources.md](sources.md).

> **The one-sentence model:** PressRanger is a **media-relations workspace** — a searchable database of journalists/publishers/podcasts, an AI that drafts releases + pitches + target lists, a CRM to track outreach, an inbound pitch-request radar, and an optional pay-per-release wire — sold as a lifetime deal we already own. The software is the asset; the wire is a commodity add-on (see [pricing-analysis.md](pricing-analysis.md)).

---

## The two billing halves (don't conflate them)

PressRanger bills two completely separate things, and you can use either or both:

1. **PR Software** — monthly subscription (Free / Pro $79 / Pro+ $149) for ongoing access to the databases, CRM, and AI tools. **This is what our AppSumo lifetime deal replaces** — we pay $0/mo.
2. **Press release distribution** — billed **per release** ($299 Premium / $399 Gold), **no subscription required** (works on the free plan). Anyone with any account pays the same per-release price. See [pricing-analysis.md](pricing-analysis.md).

Everything below is the *software* half unless noted.

---

## 1. The media databases (the core asset)

Three databases plus an article index, all searchable from one workspace:

| Database | Size (vendor claim) | What's on each profile |
|----------|--------------------|------------------------|
| **Journalists** | 500,000+ | email, social profiles, phone, writing topics/categories, recent articles |
| **Publishers / outlets** | 160,000+ | contact info, social, categories, recent articles, publication type |
| **Podcasts** | 200,000+ | contact info, social, categories, recent episodes, format |
| **Articles** | (index) | recent coverage, used to match journalists to a beat |

Vendor also claims **190+ countries**, a **95% accuracy rate**, and data "updated and validated by humans and AI."

**How filtering works:** by **category/beat, location, publication type, and recent activity** — plus keyword. So for us: filter category → *art / arts & culture / visual arts / entertainment / lifestyle*, location → US (or specific metros like LA for Not Real Art), and recent-activity to weed out dormant contacts.

**How we'd use it:** build the seed for our arts-media contact list — journalists and editors covering visual art, emerging artists, grants, and regional arts scenes; arts/culture podcasts for artist interviews; regional outlets near our shows. Export the usable rows into our Airtable system-of-record.

> ⚠️ **Reality check (independent reviews):** the 95%-accuracy and "phone + email on every profile" claims are optimistic. A widely-cited hands-on test built a 100-contact LA list and found **only ~8 with a direct email** on export; categorization is keyword-on-bio, so "arts" lists carry false positives. **Plan to hand-verify.** The database is excellent for *discovery and names*, unreliable as a *ready-to-send mailing list*.

## 2. AI media campaigns (the "do the work for you" part)

You enter a company/brand's details (we'd set up *Not Real Art*, *Artsville*, etc. as separate companies) and PressRanger's AI **auto-assembles a target list** of journalists/publishers/podcasts "actively covering companies like yours," each with a **Fit score** (e.g. 10/10) and the reasons ("based in US / writes about X / open to cold pitches"). It will also **draft the press release and personalized pitch emails** for that campaign.

**How we'd use it:** seed a campaign with "open call for artists — [theme], deadline, prize/exhibition," let the AI propose a target list and a first-draft release, then **human-edit hard** (voice, the landing-page link, the actual arts angle) before anything sends. Treat AI output as a first draft, never a send-ready artifact.

## 3. AI outreach + connected inboxes

Send **AI-written personalized emails** to a list "with one click," from a **connected inbox**, with the CRM tracking who was pitched/replied/published.

> ⚠️ **Deliverability caveat:** blasting cold email from a connected inbox can hurt sender reputation and land in spam. For volume, we should lean on our existing email infrastructure (warmed domains, our ESP) rather than firing hundreds of cold pitches from inside PressRanger. Use PressRanger sending for **small, genuinely personalized** journalist pitches, not list blasts.

## 4. Built-in CRM

Tracks media relationships and mention status across stages — **Pitched → Replied → Published** — and manages contacts and media mentions in one place.

**How we'd use it:** the lightweight tracker for *active* journalist relationships per campaign. But our **durable** system-of-record stays in Airtable (portable, integrates with the system we've built, survives if we ever leave PressRanger). PressRanger CRM = working memory; Airtable = long-term memory.

## 5. Pitch Request Aggregator (inbound — "HARO without the hassle")

Aggregates journalist **pitch requests** from **HARO, HERO, Featured, Twitter/X, journalist newsletters, and more**, scores each by **AI relevance** to your profile and by **domain authority**, and sends **real-time alerts** so you only see relevant inbound opportunities; tracks response success over time.

**How we'd use it:** a standing radar for "journalist seeking sources on [the arts / nonprofits / public art / emerging artists]." When a relevant request lands, we respond fast — earned coverage we didn't have to chase. Note: **pitch-notification volume is tier-gated** (Free limited, Pro = 5, Pro+ = 15 real-time notifications) — confirm what our pooled lifetime codes unlock.

## 6. CSV export & integration

Export contact lists to **CSV** to drop into our own CRM / Airtable / outreach tooling.

> ⚠️ Export volume is **capped and tier-dependent** — the public Pro+ plan lists "Export 750 records/month," and the AppSumo tiers gate exports by code count (Tier 1 limited; higher tiers unlock 2,000–6,000/mo). This is the limit that matters most for our "seed Airtable from PressRanger" plan — confirm our ceiling.

## 7. Multiple companies / brands / workspaces

Manage several companies on one account (public Pro+ = up to 5; AppSumo tiers scale 1 → 20+ with stacked codes).

**How we'd use it:** one workspace each for **Not Real Art, Artsville USA, Arterial**, and any partner — separate target lists, releases, and CRMs that don't bleed into each other. This is why pooling our + Scott's codes matters (raises the company/seat/export ceiling).

## 8. Custom media room / online newsroom

A **custom-domain media room** — a hosted newsroom page for your releases.

**How we'd use it:** a public "press / newsroom" page per brand where every open-call and exhibition release lives — a credible URL to point journalists and partners to.

## 9. Press release distribution (the optional wire)

Pay-per-release syndication to **400–500+ outlets** with **guaranteed placements** (Business Insider, Yahoo Finance, AP News, Apple News, StreetInsider, Benzinga, Google News, Fox40), built on a GlobeNewswire-style network.

- **Premium $299** — 400+ placements, max domain authority 94, 2 images + 1 video, AI-chatbot indexing "sometimes."
- **Gold $399** — 500+ placements, max DA 97, **AIWire** (guaranteed indexing into ChatGPT/Perplexity/Gemini/Grok/Copilot + an AI Visibility Report), **podcast distribution** (Spotify, Apple, YouTube, iHeart, etc.), and **newsroom-terminal** submissions (Bloomberg, Dow Jones Factiva, Thomson Reuters).
- Reports at publish + 24h + 48h with placement links; downloadable PDF.

Full pricing analysis and how this stacks up against EIN Presswire / eReleases / PR Newswire is in **[pricing-analysis.md](pricing-analysis.md)** — short version: it's mid-market, not a steal, and it's *not* discounted by our subscription.

## 10. White-label / reseller mode

All releases and reports are **100% white-label** — remove PressRanger branding, add a custom logo, generate branded client reports — explicitly pitched "for agencies and resellers" to "offer fully branded PR and press-release distribution services to your clients."

**Why this matters for us:** this is the literal mechanism behind **Scott's idea** — *"turn it into some kind of service or capability for artists or galleries."* We could run PR/outreach as a **branded service for the artists and galleries in our network** (do their open-call/exhibition PR under a Not Real Art / Arterial banner), with white-label reports. Phase 3 optionality, but worth flagging now — it's a real revenue/positioning angle the tool is built for.

---

## End-to-end workflow: promoting one open call

Mapping features to the steps of a real campaign:

1. **Set up the brand** as a company in PressRanger (once) → unlocks AI targeting + media room. *(Feature 7, 8)*
2. **Build the target list** — AI media campaign seeded with the call details proposes journalists/podcasts with Fit scores; refine with manual category/location filters. *(Feature 1, 2)*
3. **Export + curate** the usable contacts into Airtable, hand-verifying emails. *(Feature 6 → our system-of-record)*
4. **Draft the release + pitches** with AI, then human-edit for voice and the registration link. *(Feature 2)*
5. **Pitch** a small, personalized set of arts journalists/podcasts; blast the broader artist list from our own ESP, not PressRanger. *(Feature 3, with the deliverability caveat)*
6. **Optionally distribute** via the wire — Gold ($399) only if AI-indexing/SEO for that announcement is worth it; otherwise skip or use a cheaper wire. *(Feature 9 + pricing-analysis.md)*
7. **Watch the pitch-request radar** for inbound arts/nonprofit queries during the campaign window. *(Feature 5)*
8. **Track** Pitched → Replied → Published in the CRM; record who covered us back into Airtable for next time. *(Feature 4)*
9. **Publish** everything to the branded media room as the canonical press URL. *(Feature 8)*

---

## What to confirm once we're inside the account

The public site advertises limits for the *subscription* tiers; our value comes from the *AppSumo lifetime* tiers, which gate things differently. Before standardizing, log in and confirm:

- **CSV export cap/month** (the binding constraint for seeding Airtable)
- **Number of companies/brands** our pooled codes allow
- **Pitch-request notification count**
- **Additional user seats** (so Elise + others can share one workspace)
- **Whether "full contact details" (direct emails) are actually populated** for arts-beat contacts — test with a real LA / arts query before trusting it
