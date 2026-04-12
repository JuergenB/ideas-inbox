# Research: AI-Powered Conversational Interviews for the Artist Directory

**Date:** 2026-04-11
**Source:** Five parallel deep-research investigations (Perplexity `sonar-deep-research` + `sonar-reasoning-pro`), applied from Idea 002 (PolyWiz Demo & Vista Growth) due to strong relevance
**Status:** Actionable across multiple phases — some applicable immediately (smoke test, pricing study), others at scale

---

## Origin

This research originated from [Idea 002: PolyWiz Demo & Vista Growth](../002-polywiz-demo-vista-growth/), which investigated AI interview platforms for B2B qualification and customer research. The findings have direct, practical applications to the artist directory platform described in the [main README](../001-artist-directory/README.md). Rather than duplicate the research, this document maps the AI interview landscape onto the specific needs and phases of the Arterial artist directory.

---

## Why This Matters for the Artist Directory

The main README identifies several activities that are, at their core, structured conversations with people: artist onboarding, B2B qualification for the Institutional tier, pricing validation (Van Westendorp study), and qualitative interviews during the 90-day experiment. All of these are currently assumed to be traditional forms or manual 1:1 calls.

AI conversational interviews change the economics and quality of every one of these activities:

- **70-90% completion rates** vs. 10-30% for traditional forms
- **Response lengths 2.5-8x longer** than form-based inputs
- **78% of participants prefer AI interviews** over human when given the choice
- **97.6% satisfaction rate** demonstrated by Anthropic's own Interviewer platform across 1,250+ research interviews
- The most valued feature: the AI's ability to condense and summarize what participants shared — exactly what's needed to populate structured database fields from freeform conversation

---

## Platform Landscape

Two viable paths exist. Neither requires building from scratch.

### Path 1: Use an Existing Interview Platform

| Platform | Price | Strengths | Best Use Case |
|----------|-------|-----------|---------------|
| **TheySaid** | $49-149/mo (free tier available) | Adaptive questioning, originally built for customer research | Van Westendorp pricing study, initial artist interviews |
| **User Intuition** | $200/study | MCP support, deep laddering technique, qualitative depth | Pricing validation, qualitative research during 90-day experiment |
| **Ribbon AI** | $499/mo | REST API, supports non-hiring use cases | B2B qualification interviews at scale |

**Not suitable:** HR-focused platforms (HireVue, Paradox, etc.) have hiring-specific ToS and limited APIs. Do not pursue.

### Path 2: Build Custom with Voice AI APIs

| API | Cost | Strengths |
|-----|------|-----------|
| **Retell.ai** | ~$0.07/min (~$1-1.50 per 15-min interview) | Best balance of cost and capability |
| **Vapi.ai** | Comparable to Retell | Good developer experience, webhook-first architecture |
| **Bland.ai** | Competitive | Enterprise-focused, phone-native |
| **Hume AI** | ~$0.30 per 15-min interview (analysis layer) | Emotional analysis — detects enthusiasm, hesitation, frustration |
| **ElevenLabs** | ~$1.35-1.50 per 15-min interview | Premium voice quality |

**Build-vs-buy tradeoff:** Custom development costs $20-50K and 8-16 weeks but provides full control over the conversation flow, data schema, and per-interview cost structure. At scale (1,000+ interviews/year), custom is significantly cheaper than platform subscriptions.

### Video vs. Audio

- Video avatars achieve 40-60% completion rates; audio-only achieves 95%
- Moderate stylization outperforms hyperrealism (uncanny valley is less of an issue than expected, but transparency about the AI nature is critical)
- **Recommendation for the artist directory: audio-only.** Artists and art professionals are a sophisticated audience who will appreciate authenticity over spectacle. Audio removes friction and maximizes completion.

---

## Application 1: Artist Onboarding Interviews

**Replaces:** Traditional profile forms
**Referenced in README:** Part 2 (Freemium Structure), Part 3 (Artist Value Proposition)
**Impact:** Dramatically richer artist profiles from day one

Instead of asking artists to fill out form fields (medium, style, bio, exhibition history), an AI conducts a 10-15 minute conversational interview covering:

- Artistic philosophy and creative process
- Influences and artistic lineage
- Career trajectory and key milestones
- Exhibition history and aspirations
- Medium preferences and working methods
- Pricing approach and sales experience
- What they're looking for from a directory platform

The AI then summarizes and structures responses into profile fields stored in Supabase. A 15-minute conversation generates 2.5-8x more content than any form could capture, and the conversational format surfaces nuance (an artist's complicated relationship with pricing, their specific exhibition preferences) that checkboxes miss entirely.

**Cost:** ~$1-1.50 per artist onboarded using Retell.ai or Vapi.ai
**At 1,000 artists:** $1,000-1,500 total — negligible relative to the value of rich, differentiated profiles

The resulting profiles become a genuine competitive advantage. The README identifies "AI-enriched discovery (not just portfolio dumps)" as a key differentiator (Part 4, Competitive Gap). Conversational onboarding is the mechanism that makes those profiles qualitatively different from every other directory.

---

## Application 2: Exhibition Matching Interviews

**Referenced in README:** Part 3 (Exhibition Auto-Matching — The Headline Feature)
**Impact:** More nuanced matching inputs than checkbox preferences

The README identifies exhibition auto-matching as the headline artist feature and notes that "no platform currently does AI-powered matching of artist profiles to open calls based on medium, style, tags, location, career stage." The matching engine needs input data about what artists want. A conversational interview captures:

- Preferred exhibition types (solo, group, juried, invitational, pop-up)
- Geographic constraints and willingness to travel
- Shipping logistics and budget for shipping work
- Price points and commission tolerance
- Venue preferences (gallery, museum, alternative space, public art)
- Career stage ambitions (emerging artists want different shows than mid-career)
- Timeline and availability for upcoming seasons

This produces a matching profile far more useful than a set of dropdown selections. The interview can be offered as part of the Artist Pro tier ($19.99/mo) as a premium onboarding experience.

---

## Application 3: B2B Qualification for the Institutional Tier

**Referenced in README:** Part 4 (Interior Designers and Art Consultants — The Real Opportunity)
**Impact:** Pre-qualifies high-value prospects before human follow-up

The Institutional tier ($299/mo or $2,990/yr) targets interior designers, art consultants, and corporate art programs. The README identifies this as the strongest revenue opportunity and notes willingness to pay of $300-500/month.

An AI qualification interview assesses:

- What kind of art they typically source (medium, style, scale, budget range)
- Volume: how many pieces per year, typical project size
- Current sourcing process and pain points (the "20-30 hours manually browsing" problem)
- Decision-making process (who approves, what criteria)
- Specific needs our data addresses (dimension search, color palette filtering, tag-based discovery)
- Timeline for upcoming projects

The AI generates a structured summary and qualification score. Scott Power and the Arterial team review summaries before engaging personally — dramatically more efficient than cold outreach or unqualified demo requests.

**Cost with Ribbon AI:** $499/mo covers unlimited interviews; cost-effective once the Institutional pipeline is active
**Cost with custom (Retell.ai):** ~$1-1.50 per interview; better economics at lower volume

---

## Application 4: Collector Engagement

**Referenced in README:** Part 2 (Collector Premium tier at $9.99/mo or $99/yr)
**Impact:** Better recommendation engine inputs from the start

For Collector Premium prospects, a brief 5-7 minute AI conversation about their collecting interests replaces the typical "select your preferences" checklist:

- What draws them to a piece (subject, emotion, color, technique)
- Budget range and purchasing frequency
- Preferred mediums and styles, with the nuance that forms cannot capture ("I like abstract but not geometric, more organic, like Helen Frankenthaler's stain paintings")
- How they display work (home, office, rotating collection)
- Past purchases they're most proud of

This feeds directly into the recommendation engine and creates a personalized experience from the first interaction. The README notes that 50-65% of paying users on art platforms cite direct messaging/artist contact as the primary reason to subscribe. A collector who has been "heard" by the platform through a rich onboarding conversation is far more likely to convert.

---

## Application 5: Van Westendorp Pricing Validation

**Referenced in README:** Part 5 (Recommended Next Steps, item 3)
**Impact:** Higher quality pricing data from a conversational format

The README specifically calls for a "Van Westendorp pricing study to the 1,000+ artists already in the database" during weeks 4-5 of the 90-day experiment. This is an ideal use case for AI interviews because:

1. Van Westendorp requires four sequential questions about price perception (too cheap, cheap, expensive, too expensive). In a survey, respondents rush through. In a conversation, the AI can probe: "You said $30/month feels expensive — what would make that feel worth it?"
2. Conversational pricing research gets more honest, nuanced responses than surveys. People are more candid in dialogue than in form fields, especially about money.
3. The AI can branch into follow-up questions based on responses — if an artist says they'd pay $20/month but only for exhibition matching, the AI explores what other features would tip the scale.
4. Completion rates of 70-90% (vs. 10-30% for surveys) mean reaching the 200+ response threshold the README requires is far more achievable.

**Recommended platform:** TheySaid (free tier for initial study, $49-149/mo for full analysis) or User Intuition ($200/study, deep laddering capability that's especially well-suited to pricing psychology).

---

## Application 6: Smoke Test Enhancement

**Referenced in README:** Part 5 (The $600 Smoke Test)
**Impact:** Validates demand AND collects onboarding data simultaneously

The README describes a $300-600 smoke test with landing pages and CTR measurement. An AI interview layer can enhance this:

Instead of (or in addition to) a "Subscribe" button, offer a **"Schedule Your AI Portfolio Review"** CTA. The AI interviews artists about:

- What they'd want from a directory platform
- What they currently spend on portfolio hosting, submissions, marketing
- What frustrates them about existing tools
- Whether they'd pay, and what price feels right

This serves dual purposes:
1. **Demand validation** — willingness to complete a 10-minute interview is itself a strong intent signal (stronger than a button click)
2. **Data collection** — responses feed directly into the artist database, so validated prospects arrive pre-onboarded

The smoke test budget ($300-600) easily covers interview costs at $1-1.50 each. Even 200 completed interviews would cost only $200-300, leaving budget for ad spend.

---

## Application 7: Grant Application Support

**Referenced in README:** Part 6 (Lead Generation Floor Case — Grant leverage)
**Impact:** Scalable qualitative data collection for NEA/Knight Foundation applications

The README notes that "demonstrating community size and engagement strengthens every NEA, Knight Foundation, and Bloomberg application." AI interviews can generate qualitative data at a scale impossible with manual methods:

- Interview artists about the impact of the directory on their practice
- Collect structured testimonials about feature value
- Document artist stories and career outcomes

Anthropic's own Interviewer platform demonstrated that AI can conduct 1,250+ research interviews and produce coherent synthesis. For grant applications, having 500+ artist interviews with structured summaries about how the platform affected their exhibition opportunities, collector connections, and revenue is compelling evidence that no competitor could match.

---

## Data Architecture

All interview data integrates with the planned Supabase database described in the README:

```
interviews table
├── id (uuid)
├── interview_type (enum: onboarding, exhibition_matching, b2b_qualification, collector, pricing, research)
├── participant_id (references artists, prospects, or collectors table)
├── transcript (text — full conversation)
├── summary (text — AI-generated summary)
├── extracted_fields (jsonb — structured data extracted by the AI)
├── scores (jsonb — qualification scores, sentiment, engagement metrics)
├── platform (enum: theyasid, user_intuition, retell, vapi, custom)
├── duration_seconds (integer)
├── completed (boolean)
├── created_at (timestamp)
└── metadata (jsonb — platform-specific data, webhook payload)
```

**Integration paths:**
- **Webhook from interview platform to Supabase** — most platforms support webhook callbacks on interview completion
- **API polling** — for platforms without webhooks, a scheduled n8n workflow polls for new completions
- **ActiveCampaign sync** — interview completion triggers CRM tag updates and sequence enrollment (the README notes ActiveCampaign is already in place at Arterial)
- **Extracted fields populate profile tables** — the AI summary is parsed into structured artist profile fields, exhibition preferences, or B2B qualification scores

---

## Recommended Phased Approach

### Phase 1: Immediate (During Smoke Test, Weeks 1-6)

**Use TheySaid (free tier) or User Intuition ($200/study)**

- Conduct the Van Westendorp pricing study conversationally instead of as a traditional survey
- Add "Schedule Your AI Portfolio Review" CTA to smoke test landing pages
- Collect 100-200 artist onboarding interviews during the smoke test period
- Total cost: $200-500

**Why now:** These are activities already planned in the README's 90-day experiment. AI interviews make them better, not different. No additional infrastructure required.

### Phase 2: At Launch (Months 3-6)

**Build custom interview flow with Retell.ai or Vapi.ai**

- Artist onboarding interviews replace forms for all new signups
- Exhibition matching interviews for Artist Pro tier members
- Integration with Supabase via webhooks
- Estimated development: 2-4 weeks, $5-10K (smaller scope than a general-purpose interview platform)
- Per-interview cost: ~$1-1.50

**Why then:** By this point, the smoke test has validated demand and the platform is accepting signups. Rich conversational onboarding becomes a differentiator.

### Phase 3: B2B Pipeline (Months 6-12)

**Add B2B qualification interviews for Institutional tier prospects**

- Qualification interview linked from Institutional tier landing page
- AI generates prospect summary and qualification score
- Scott and team review summaries before engaging
- Platform: Ribbon AI ($499/mo) if volume justifies it, or custom Retell.ai flow

**Why then:** The Institutional tier needs a sales pipeline. AI qualification interviews filter prospects before human engagement, making the small Arterial team's time dramatically more efficient.

### Phase 4: Advanced (Year 2+)

**Consider Hume AI emotional analysis layer**

- Add sentiment and emotional analysis to collector engagement interviews
- Detect enthusiasm levels for specific artists, mediums, or price points
- Feed emotional signals into the recommendation engine
- Cost: ~$0.30 per interview (additive to voice API costs)

**Why later:** This is optimization, not foundation. It only makes sense once the collector base is large enough for the data to be meaningful.

---

## Cost Summary

| Activity | Platform | Cost | Timing |
|----------|----------|------|--------|
| Van Westendorp pricing study (200 interviews) | TheySaid free tier or User Intuition | $0-200 | Phase 1 |
| Smoke test artist interviews (200 interviews) | Retell.ai / Vapi.ai | $200-300 | Phase 1 |
| Artist onboarding at scale (1,000 artists) | Custom (Retell.ai) | $1,000-1,500 | Phase 2 |
| Custom interview platform development | Internal / contractor | $5,000-10,000 | Phase 2 |
| B2B qualification (100 prospects/year) | Ribbon AI or custom | $499/mo or ~$150/yr | Phase 3 |
| Collector engagement (500 interviews/year) | Custom (Retell.ai) | $500-750/yr | Phase 2-3 |
| Hume AI emotional analysis layer | Hume AI add-on | ~$0.30/interview | Phase 4 |

**Total Phase 1 cost: $200-500** — well within the smoke test budget
**Total Phase 2 cost: $6,000-11,500** — one-time dev plus marginal per-interview costs
**Ongoing annual cost at scale: $2,000-5,000** — negligible relative to projected platform revenue

---

## Key Insight

The README's 90-day experiment (Part 5) already plans for qualifying onboarding questions, a Van Westendorp pricing survey, and 15-20 qualitative interviews. AI conversational interviews do not add new activities — they make the planned activities dramatically more effective. Higher completion rates, richer data, structured outputs that flow directly into Supabase, and a fraction of the manual effort.

The question is not whether to use AI interviews for the artist directory. It is whether to start with them from day one (recommended) or bolt them on later (more expensive, worse data in the interim).

---

## Research Sources

Platform landscape, performance data, and cost estimates derived from five parallel deep-research investigations conducted 2026-04-11 via Perplexity `sonar-deep-research` and `sonar-reasoning-pro`. Platforms investigated: Ribbon AI, TheySaid, User Intuition, HireVue, Paradox, Retell.ai, Vapi.ai, Bland.ai, Hume AI, ElevenLabs, Tavus. Performance benchmarks sourced from Anthropic's Interviewer platform research, academic studies on AI-mediated interviews, and platform-published case studies. Applied to the Arterial artist directory context based on the main README research (5 investigations, 200+ citations, 2026-04-10).
