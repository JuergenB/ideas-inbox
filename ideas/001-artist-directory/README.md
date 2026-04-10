# Idea 001: Artist Directory / Gallery Platform

**Origin:** Scott Power, 2026-04-10
**Status:** Research & Discussion
**Epic Issue:** [#1](https://github.com/JuergenB/ideas-inbox/issues/1)

---

## The Proposal

Scott's original pitch:

> Create a private, exclusive, curated online artist gallery/directory powered by our database featuring 1000+ artists anyone can view, discover and connect with artists for a nominal fee, say $25 per month or $250 annually. And, artists can be included in the directory/database for $10 a month or $100 annually.
>
> Projections: If we got 1000 subscribers paying $250 annually that's $250,000. And, if we got 1000 artists paying $100 annually that's $100,000. TOTAL: $350,000 in new revenue.

## The Data Asset

The foundation is the **Artwork Archive** database — not the Airtable staging area used by the Rolling Submissions pipeline, but the master archive itself: **1,000+ artists and 8,000+ artworks** accumulated through years of exhibition open calls and submissions.

The Rolling Submissions system enriches every artist and artwork with AI-generated profiles (Perplexity deep-research), artwork classifications (GPT-4o vision), social media profiles, exhibition metadata, and relevance assessments. This enriched data would seed a new, independent application — its own database (Supabase), its own frontend (Next.js + shadcn/ui), fully decoupled from both Artwork Archive and Airtable.

## Executive Summary

Five parallel deep-research investigations (Perplexity `sonar-deep-research`, ~$3.70 in API costs, 200+ citations) examined this idea from every angle. The findings are clear:

1. **Scott's specific revenue model ($25/mo subscribers + $10/mo artists = $350K) faces strong headwinds.** No successful art platform charges consumers to browse or discover artists. The market expectation is free access. At 1,000 artists, the database is too small to justify a subscription relative to free platforms with 50,000+ artists.

2. **But the underlying idea has real merit — with a different structure.** A freemium model with free public browsing, gated connection features, and premium tools for artists and professionals aligns with every successful art platform's approach.

3. **The strongest revenue opportunity isn't consumer subscriptions — it's B2B.** Interior designers, art consultants, and corporate art programs have genuine pain points that our dimension/classification/tag data directly addresses. They'd pay $300-500/month.

4. **The strongest artist-side feature is something we already have: PolyWiz.** Automated social media campaigns across 14 platforms for $10/month replaces $250-500/month of freelancer work. No competitor offers anything comparable at any price.

5. **Even if revenue never materializes, the platform has substantial value as a lead generation engine** — driving exhibition submissions, building segmented contact lists, strengthening grant applications, and growing the Arterial/NRA/Artsville ecosystem.

6. **Before building anything, a $300-600 smoke test can validate willingness to pay in 2-3 weeks.**

---

## Part 1: Market Viability — Do Paid Artist Directories Work?

### The Browsing Expectation Is Free

Every major art discovery platform — Artsy (3.5M registered users), Saatchi Art (1.4M+ artworks), Singulart, Artfinder — offers free browsing. The consumer expectation, shaped by Instagram and Google Images, is that discovering art online costs nothing.

**What IS successfully paywalled:** Market data and analytics. The platforms that charge subscribers are selling *intelligence about art* (auction prices, market trends, artist rankings), not access to view art.

| Platform | Who Pays | Pricing | Model |
|----------|----------|---------|-------|
| Artsy | Galleries: $200-3,000+/mo | Free to browse | Gallery subscriptions + commissions |
| Saatchi Art | Artists: 40% commission | Free to browse, free to list | Pure commission |
| Singulart | Artists: 45-50% commission | Free to browse, curated listing | Commission + visibility tiers |
| Artnet | Data subscribers: ~$29+/mo | Free basic browsing | Data subscriptions + advertising |
| ArtFacts | Subscribers: €240-960/yr | Limited free access | Analytics subscriptions |
| Artwork Archive | Artists: $6-139/mo | No public browsing | SaaS for artists |

### Industry Signal

Beowolff Capital acquired Artnet for ~$73.7M and took a controlling stake in Artsy in 2025, merging them into a unified AI-powered art market platform. Industry consolidation is happening around **data + marketplace**, not directories.

### Implication for Scott's Model

The $25/month subscriber model competes against free. At 1,000 artists — two orders of magnitude below Artsy's 50,000+ — the database doesn't yet have the scale to justify a subscription for browsing alone.

---

## Part 2: Freemium Structure — What to Show, What to Gate

### The Principle: Gate Connection, Not Content

The research is unambiguous: **show the art freely, gate the contact mechanism.** This mirrors LinkedIn (profiles free, messaging gated), Zillow (listings free, agent contact gated), and NYT (headlines free, articles metered).

**The single strongest conversion driver: direct messaging/artist contact.** 50-65% of paying users on art platforms cite this as the primary reason they subscribe.

**Correction to original concept:** Artist *names* should stay public (all major platforms show names). Gate the *contact info and messaging* — email, inquiry forms, phone.

### Recommended Tier Structure

| Tier | Price | What's Included |
|------|-------|----------------|
| **Public Browse** | Free | All artworks, basic search, artist names, truncated bios |
| **Free Account** | Free (email required) | 5 wishlists, follow 20 artists, full bios, obfuscated contact |
| **Collector Premium** | $9.99/mo or $99/yr | Direct messaging, unlimited saves, price alerts, AR visualization, advanced filters |
| **Artist Free** | Free | Profile + uploads, basic analytics, receive inquiries |
| **Artist Pro** | $19.99/mo or $199/yr | PolyWiz social campaigns, exhibition matching, lead CRM, SEO, analytics |
| **Institutional** | $299/mo or $2,990/yr | Database access, bulk search, API, multi-user |

### Conversion Benchmarks

- Freemium art platform conversion: 3-8% (industry average)
- Free account signup from browsers: 30-40%
- Free-to-paid collector: 4-8%
- Artist free-to-pro: 15-25% (when value is tangible)

---

## Part 3: The Artist Value Proposition

### What Working Artists Actually Spend

| Category | Monthly Spend | Tools |
|----------|--------------|-------|
| Portfolio hosting | $8-26 | Format, Cargo, Squarespace |
| Exhibition submissions | $17-42 (annualized) | CaFE, Submittable ($15-50/submission) |
| Social media management | $5-43 (tools) or $250-500 (done-for-you) | Buffer, Later, freelancers |
| Inventory management | $9-42 | Artwork Archive |
| **Total** | **$30-100/month** across fragmented tools |

### PolyWiz Is the Killer Feature

No competitor offers automated AI social media campaign generation across 14 platforms at any price. At $10/month, this replaces $250-500/month of freelancer social media management. The value proposition: **"Upload your artwork, we handle the marketing."**

This addresses the two biggest barriers artists face with self-promotion: time (40% feel they lack it) and skill/confidence (40% feel unconfident in professional communication).

### Exhibition Auto-Matching Is a Greenfield Opportunity

No platform currently does AI-powered matching of artist profiles to open calls based on medium, style, tags, location, career stage. CaFE and Submittable host calls but don't match. The enriched data already in the system (tags, medium, classifications) is exactly what matching requires.

Supporting data:
- Early submitters (first 25% of window) get 75% acceptance vs. 60% for late
- Repeat submitters see dramatically higher acceptance: 58% → 79% over 4-10 submissions
- Average artist spends $200-500+/year on submission fees with zero matching intelligence

### Other High-Value Artist Features

- **Portfolio analytics** — who viewed, from where, search terms, referral sources (65-75% cite as primary reason to pay)
- **AI-powered grant/residency matching** — no platform currently does this
- **Certificate of authenticity generation** — trivial to build, feels professional
- **Collector CRM** — track inquiries, interested buyers, follow-up reminders
- **SEO-optimized profiles** — 1,000+ Google-indexable pages with AI descriptions = compounding organic traffic
- **Cross-promotion network** — "Artists Similar to This" among 1,000+ members

### Revenue Reality Check (Artist Side Only)

With 1,000 artists:
- 10% convert to Pro ($10/mo): 100 artists x $10 = $1,000/month
- 2% convert to Premium ($24/mo): 20 artists x $24 = $480/month
- **~$17,760/year** — real but modest; grows with the artist base

---

## Part 4: The B2B Opportunity

### Galleries Are Not the Primary Market

The project team's skepticism is well-founded. Galleries don't have a discovery problem — they have an **oversupply problem**. The contemporary art auction market dropped 36% in 2024. Free channels (Instagram, referrals, MFA shows) are deeply entrenched.

Small gallery economics: median revenue ~$519K/year, median owner earnings ~$149K, tech spending $200-500/year. A $25-50/month subscription is a very hard sell.

### Interior Designers and Art Consultants — The Real Opportunity

This segment has a genuine, expensive pain point:

- When a designer needs 12 paintings at 36"x48" with specific color palettes for a hotel corridor, they spend **20-30 hours manually browsing** with no multi-dimensional filtering
- **Our data has exactly what they need:** dimensions (AI-extracted), medium, subject, tags — searchable attributes no other emerging-artist platform offers
- Interior design services market: $128B globally; wall art market: $67B (2025)
- Willingness to pay: **$300-500/month** — real budgets exist
- 10,000-15,000 commercial design firms in the US with sufficient scale

What we'd need to add: price/budget ranges, color palette filtering (AI-extractable from images), availability status, shipping info.

### Ranked B2B Fit Analysis

| Rank | Segment | Pain Point | Asset Fit | Realistic Annual Rev |
|------|---------|-----------|----------|---------------------|
| 1 | Interior designers + art consultants | High — manual sourcing is painful | Strong — dimensions, tags, medium | $150-350K |
| 2 | Small-to-mid galleries | Medium — oversupply, not undersupply | Strong — enriched profiles | $80-200K |
| 3 | Independent curators | High for themed shows | Strong — tag/subject search | $40-100K |
| 4 | Corporate art programs (via consultants) | Medium — buy through intermediaries | Medium | $45-100K |
| 5 | Art publishers/editorial | Low — tiny market | Medium | $50-150K (speculative) |
| 6 | Arts education | Low near-term — rigid budgets | Strong | $100-300K (3+ years) |

### The Competitive Gap

No dominant platform combines:
1. AI-enriched discovery (not just portfolio dumps)
2. Searchable by visual attributes, dimensions, medium, subject, tags
3. Emerging/mid-career focus (existing platforms skew established)
4. Nonprofit institutional credibility
5. Price transparency

---

## Part 5: Market Validation — How to Test Before Building

### The Core Question

Is this worth building at all? And how do we know before committing engineering resources?

### The $600 Smoke Test (2-3 Weeks)

The leanest validation: create 3 landing pages with different pricing tiers, spend $300-600 on targeted ads, and measure "Subscribe" click-through rates.

- **8-12% CTR = strong product-market fit** — build the paid version
- **2-8% CTR = proceed with caution** — may work with iteration
- **<2% CTR = rethink the model** — keep as lead magnet

### The 90-Day Experiment

| Week | Activity | Go/No-Go Threshold |
|------|----------|-------------------|
| 1-2 | Launch simple public gallery from existing data | Baseline traffic |
| 2-3 | Gate contact info behind signup with qualifying questions | **15%+ signup = promising** |
| 3-4 | Monitor engagement: time on site, searches, saves | **5+ min = strong engagement** |
| 4-5 | Van Westendorp pricing survey to 1,000+ artists | **200+ responses needed** |
| 5-6 | Smoke test: pricing pages + $300-600 ad spend | **8%+ CTR = strong signal** |
| 6-8 | Segment analysis by role | Any segment showing $5+/mo WTP |
| 8-9 | 15-20 qualitative interviews | Explicit "I would pay" statements |
| 9-12 | Synthesize and decide | See framework below |

### Qualifying Onboarding — Gold Regardless of Payment

The onboarding sequence should ask:

1. **"What best describes you?"** — Artist, Gallery Owner, Curator, Collector, Interior Designer, Art Educator, Art Lover, Other
2. **"What brings you here?"** — Discover new artists, Find art for a project, Get my art seen, Research artists, Build a collection
3. **"How did you hear about us?"** — Exhibition partner, Social media, Search, Friend, Art publication, University

This segmentation data feeds directly into ActiveCampaign and tells you who your audience is before you commit to a monetization model. The routing:
- **Galleries/curators/collectors** → white-glove sequence, personal outreach within 48 hours
- **Artists** → portfolio-building sequence, invite to submit to exhibitions
- **Designers** → sourcing tools emphasis, premium tier nudge
- **Art lovers** → engagement sequence, newsletter signup

### Decision Framework at Day 90

**Build paid version if:** signup >15%, any segment shows WTP of $5+/mo in both survey AND smoke test, qualitative interviews confirm

**Keep as lead magnet if:** strong engagement but weak WTP — the platform still drives exhibition submissions, grows the database, and strengthens grant applications

**Rethink if:** signup <10%, time on site <2 minutes, survey response rate <10% from existing artists

---

## Part 6: The Lead Generation Floor Case

Even if zero people ever pay for subscriptions, this platform has substantial value:

### Direct Value to Arterial's Ecosystem

- **Exhibition submissions** — Every visitor who browses artwork and sees "Submit to our next exhibition" is a warm lead for Not Real Art, Artsville, and partner exhibitions
- **Segmented contact list** — Knowing who's an artist vs. curator vs. collector transforms an undifferentiated email list into a multi-purpose asset in ActiveCampaign
- **Grant leverage** — Demonstrating community size and engagement (5,000+ registered users across segments) strengthens every NEA, Knight Foundation, and Bloomberg application
- **Partner/sponsor value** — "We have 500 active curators and 200 collectors on our platform" is a compelling partnership pitch
- **Content marketing** — Featured artists and themed collections become shareable content driving organic traffic
- **Cross-platform promotion** — Exposure on Not Real Art website, Artsville USA, podcast interviews, and exhibition features

### Dollar Value of Leads

- B2B arts/culture CPL: $300-500 per lead
- Arts-segmented email list: $500-800 CPM
- Conservative value of 1,000+ segmented artist contacts: $400-800/year
- With collector/institutional segments developed: $2,000-5,000/year
- Grant application lift: potentially $10K-100K from NEA alone

### The "Founding Member" Model

"Lock in $X/month forever as a founding supporter of Arterial's artist directory" combines:
- Nonprofit trust advantage (supporting a mission, not a VC-funded startup)
- Pricing psychology (permanent discount creates stickiness)
- Early feedback loop (founding members are more tolerant of early bugs and more willing to give feedback)

---

## Part 7: Managing Expectations

### Scott's $350K Projection vs. Reality

| Scenario | Year 1 Revenue | Year 2 Revenue | Assumptions |
|----------|---------------|---------------|-------------|
| **Scott's projection** | $350K | $350K+ | 1,000 subscribers at $250/yr + 1,000 artists at $100/yr |
| **Optimistic (freemium)** | $50-80K | $200-300K | B2B + artist pro tiers, aggressive growth |
| **Realistic (freemium)** | $18-40K | $80-150K | Modest conversion, organic growth |
| **Lead gen only** | $0 direct | $0 direct | Value captured through submissions, grants, partnerships |

The $350K figure requires 1,000 paying subscribers — a number that even Artsy (with 3.5M registered users and $200M+ in funding) took years to build toward. For context, Artsy's $14.99/mo Artsy+ tier launched only recently after a decade of free access.

**The honest framing:** This is unlikely to be a significant revenue generator in Year 1. It could become meaningful ($100-300K/year) by Year 2-3 if the B2B angle works and the artist base grows to 5,000+. But the immediate value is ecosystem growth: more artists submitting, more curators discovering, more partners engaging, stronger grant applications.

### What Success Looks Like at Each Stage

**Month 3:** 500+ registered users, clear segment breakdown, engagement data that tells us which features to prioritize

**Month 6:** 50+ paying users across tiers, 2-3 institutional/B2B customers, measurable lift in exhibition submissions

**Month 12:** 200+ paying users, $3-5K MRR, 2,000+ registered users, at least one grant application citing platform community data

**Month 18+:** $8-15K MRR, 5,000+ registered users, B2B pipeline generating $50K+ ARR

---

## Part 8: Arterial's Competitive Advantages

Regardless of the revenue model chosen, Arterial has genuine differentiators:

1. **PolyWiz** — Automated social media campaigns across 14 platforms. No competitor offers this at any price.
2. **AI enrichment pipeline** — Can scale artist profile generation, artwork classification, and data enrichment faster than any manual process. This is the real moat.
3. **Exhibition infrastructure** — Already runs open calls, has the intake pipeline, and can extend to outbound exhibition matching.
4. **1,000+ artists with deep data** — Not just names and images, but AI-researched profiles, validated citations, classified artworks with dimensions and tags.
5. **501(c)(3) status** — Trust factor, grant eligibility, tax advantages on mission-aligned revenue. "Built by a nonprofit to serve artists, not extract from them."
6. **Existing audience** — Not Real Art podcast (200 episodes, 4.9 stars), 30+ First Friday exhibitions, Artsville USA, ArtCall.org — existing distribution channels to seed the platform.
7. **ActiveCampaign CRM** — Already in place for segmented email marketing and follow-up sequences.
8. **Google Arts & Culture eligibility** — As a 501(c)(3), Arterial qualifies for institutional partnership, which would be a significant traffic and credibility boost.

---

## Recommended Next Steps

1. **Discuss this paper** — Align on whether the adjusted model (freemium + B2B + lead gen) is worth pursuing, or whether the lead-gen-only path is sufficient
2. **Run the smoke test** ($300-600, 2-3 weeks) — Landing pages with pricing tiers + targeted ads to measure real click-through behavior
3. **Survey existing artists** — Van Westendorp pricing study to the 1,000+ artists already in the database
4. **Prototype the public gallery** — Simple, fast build from existing AA data to test engagement before investing in premium features
5. **Explore NEA / Knight Foundation grants** — The platform development itself may qualify for arts technology funding ($10K-100K)

---

## Research Sources

All research conducted 2026-04-10 via Perplexity `sonar-deep-research` (5 parallel investigations, 200+ web citations). Key sources include Art Basel & UBS Art Market Report 2025, Artsy Gallery Report 2025, Artsy Collector Insights 2024, Grand View Research Online Art Market Report, and pricing data from Artsy, Artnet, Saatchi Art, Singulart, ArtFacts, MutualArt, Artwork Archive, FASO, Art Storefronts, Format, Dribbble, DeviantArt, Behance, Society6, Redbubble, Fine Art America, and others.

Full research documents available in the [research/](research/) subfolder.
