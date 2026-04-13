# Building a Podcast Website Product That Actually Competes

**An Advisory Brief for Lindo.ai**
**Prepared by Juergen Berkessel, Polymash**
**April 2026**

---

## The Opportunity in One Sentence

The podcast website builder market has a single serious player (Podpage), a graveyard of "good enough" hosting add-ons, and zero products that treat podcast content the way modern search engines — including AI search — actually consume it.

---

## 1. The Market Reality

### Scale

The global podcast market is approaching $40 billion (2025), with 584 million listeners worldwide and 175 million in the U.S. alone. But the number that matters for a website builder is smaller and more specific: roughly **603,000 podcasts are actively publishing** (released an episode in the last 90 days), out of 4.58 million registered. That active base is the addressable market.

### What Podcasters Spend

A survey of 558 independent podcasters reveals a clear spending pattern:

- **29%** spend nothing (free tools only)
- **38%** spend $10-49/month
- **33%** spend $100+/month

The $100/month threshold is the inflection point. Podcasters above that line get 44% more downloads per episode — not because spending causes growth, but because committed creators invest in better tools. The website builder market sits squarely in the $15-40/month zone, which is accessible to both the budget-conscious and the committed.

### The Pain That Matters

When you ask podcasters what they struggle with, the answers are consistent:

1. **Audience growth and discoverability — 72%** of creators cite this as their top challenge
2. **Monetization — 39%** (85% of independent podcasters earn zero revenue)
3. **Time commitment — 30%** (a weekly podcast demands 12-18 hours of non-recording work per episode)

Promotion alone accounts for 47% of where creators feel stuck. Not recording, not editing — promoting. A podcast website is the foundation of promotion, and almost nobody has a good one.

---

## 2. The Competitive Landscape Is Thin

### Dedicated Podcast Website Builders

| Platform | Price | What It Does | What It Lacks |
|----------|-------|-------------|---------------|
| **Podpage** | $12-39/mo | RSS sync, episode pages, SEO basics, AI show notes (Elite only) | Design flexibility, AI features gated at $39, no social integration |
| **Beamly** | ~$12/mo | RSS sync, multi-show, memberships | Small, less proven |
| **OnPodium** | $7/mo | Episode pages, basic SEO | Budget, limited |
| **ZipiStream** | $7.44/mo | Sponsor-focused | Niche |

**Podpage is essentially alone.** The others are marginal. And Podpage's AI-powered features — the ones that actually differentiate — are locked behind their $39/month Elite tier. There is a clear opening at the $15-30/month range for a product with better content intelligence.

### Hosting Platforms with Website Features

Every major podcast host (Buzzsprout, Transistor, Captivate, Podbean, Libsyn, Castos) includes some form of website. They all do the same thing: pull the RSS feed description onto a template page and call it a website. The design ranges from "acceptable" (Transistor) to "dated" (Podbean, Libsyn).

None of them differentiate between the RSS episode description — which is micro-copy designed for podcast apps — and what a website episode page should actually contain. This is the fundamental product insight that a new entrant should exploit.

### AI Content Tools (No Website)

A parallel market has emerged for AI-powered podcast content generation:

| Tool | Price | What It Generates |
|------|-------|-------------------|
| **CastMagic** | $19-179/mo | Transcripts, show notes, blog posts, social media, newsletters |
| **Capsho** | ~$99/mo | 20+ marketing assets, social graphics, clips, brand voice learning |
| **Deciphr AI** | $5-169/mo | Transcripts, show notes, SEO articles, FAQs, newsletters |
| **Swell AI** | $8.99/60min | Transcripts, show notes, blog posts, social media |

These tools generate excellent content. But they have no website to put it on. Podcasters use CastMagic to generate show notes, then manually paste them into Podpage or WordPress. The workflow is fragmented.

**The gap is clear:** content generation tools exist on one side, website builders exist on the other, and nobody has connected them. Whether Lindo.ai builds the content generation layer itself or simply structures the website to receive content from these existing tools, the structural architecture of the website is the differentiator.

---

## 3. The Content Philosophy a Builder Must Get Right

### The RSS Description Is Not Show Notes

This is the single most important product insight in the podcast website space, and almost every existing builder gets it wrong.

When a podcaster uploads an episode to their hosting platform (Buzzsprout, Captivate, etc.), they write a short description. This description flows into the RSS feed and appears in Apple Podcasts, Spotify, and every other listening app. It has a **4,000-character hard limit** imposed by Apple Podcasts, and most listeners see only the first **150-200 characters** before a "show more" prompt.

This is **micro-copy**. It is a teaser. It exists to make someone press play.

Every podcast website builder on the market today takes this micro-copy, puts it on a template page, and calls it "show notes." This is like taking a movie trailer and calling it the movie.

**What should actually live on the website:**

| Content | RSS Feed (Micro-Copy) | Website (Show Notes) |
|---------|----------------------|---------------------|
| Description | 200-400 char teaser | 500-2,000+ word article |
| Links | 2-4 essential links | Full categorized resource library |
| Timestamps | MM:SS for in-app navigation | Clickable deep-links that jump the embedded player |
| Guest info | Name and one-line title | Full bio, social links, related appearances |
| Transcript | Never (character limit) | Full searchable text |
| SEO markup | None (RSS is not indexed) | JSON-LD structured data, FAQ schema |
| Calls to action | None | Newsletter signup, lead magnets, affiliate links |
| Blog content | Never | Articles derived from the episode |

The websites that top podcasters build — Tim Ferriss (tim.blog), Lex Fridman, Huberman Lab, 99% Invisible — all follow this pattern. Tim Ferriss's show notes function as standalone essays. Lex Fridman's transcripts have clickable timestamps that control the player. Huberman Lab charges for transcripts as premium content. These are content platforms, not episode listings.

**A podcast website builder that understands this distinction has an immediate structural advantage over everything on the market.** Even without AI-generated content, simply providing the right page structure — dedicated sections for long-form show notes, transcripts, resources, guest bios, and FAQs — gives podcasters a framework that no current builder offers. Whether the content is manually entered, pasted from tools like CastMagic, or AI-generated natively is a product decision. The structure itself is the differentiator.

---

## 4. The SEO Case for Podcast Websites

### Google Ranks Web Pages, Not Podcasts

A podcast distributed only through RSS is invisible to Google. The audio exists behind a play button inside Apple Podcasts or Spotify — Google cannot index it. The only way a podcast appears in search results is through web pages with text content.

This means every podcast episode without a dedicated, content-rich web page is leaving organic traffic on the table. The data supports this:

- **This American Life** saw a **6.68% increase in organic search traffic** after adding transcript pages, with 7.23% of visitors engaging with transcripts
- **80% of podcast listeners** report visiting a website in response to podcast mentions
- Among the top 100 business podcasts, **59% post transcripts** on their websites

### What Actually Works for Podcast SEO

**Structured data (JSON-LD) is non-negotiable.** Every episode page should include:

- **PodcastEpisode schema** — title, date published, duration, audio URL, series reference, episode number
- **PodcastSeries schema** — on the main podcast page, linking to RSS feed and platform profiles
- **FAQPage schema** — 3-5 questions per episode, derived from episode content. Google requires FAQ content to be visible on the page. This captures featured snippets and is cited by AI Overviews

**Transcripts are the largest single SEO multiplier.** They turn a 45-minute audio file into thousands of words of indexable, keyword-rich text content. AI transcription (AssemblyAI, Riverside, Whisper) achieves 95-99% accuracy and costs $0.10-0.25 per minute.

**FAQ sections at the bottom of every episode page** serve double duty: they answer questions searchers actually ask (captured by featured snippets) and they provide structured data for AI search engines (ChatGPT, Perplexity, Google AI Overviews) to cite.

**XML sitemaps with episode-level granularity** ensure every episode page is crawled. Episodes should be marked `changefreq: never` (they do not change after publication), with priority 0.8 for individual episodes and 1.0 for the main podcast page.

### AI Search Is the New Frontier

Traditional SEO is only half the picture. AI-powered search engines (ChatGPT, Perplexity, Google AI Overviews) are rapidly becoming how people discover information. These systems prioritize:

- Structured data they can parse and cite
- Content that directly answers questions (FAQ format)
- Multi-format presence (website + YouTube + social)
- Brand mentions across authoritative sources

A podcast website builder that generates AI-readable structured data by default — not as an afterthought, not as a premium feature — would be positioned for where search is going, not where it has been.

---

## 5. What a Podcast Episode Page Should Actually Contain

Before discussing tiers or pricing, here is the structural anatomy of a podcast episode page that would outperform everything currently on the market. The key insight: most of these are **structural decisions** — providing the right sections and containers — not necessarily AI features. A builder can differentiate simply by having the right page architecture.

### The Ideal Episode Page (Top to Bottom)

1. **Episode header** — Title, episode number, publish date, duration, guest name
2. **Embedded player** — With chapter markers, speed controls, and timestamp deep-linking
3. **Table of contents** — Topic sections with timestamps, each clickable to jump the player
4. **Key takeaways** — 3-7 bullet points summarizing the episode's core insights
5. **Show notes** — 500-2,000 words of narrative content (NOT the RSS micro-copy). This is the editorial write-up: context, analysis, quotes, discussion
6. **Guest bio** — 75-100 words, credentials relevant to the topic, social links, related appearances
7. **Resources and links** — Categorized (Books, Tools, People, Studies, Related Episodes), with descriptions
8. **Full transcript** — Searchable, with speaker identification and timestamps. Optionally collapsible
9. **FAQ section** — 3-5 questions with visible answers and FAQPage JSON-LD schema markup
10. **Subscribe / newsletter CTA** — Email capture with clear value proposition
11. **Related episodes** — Internal linking to similar content (pillar-and-cluster SEO architecture)

Whether the show notes, FAQ, and transcript content is **manually entered by the podcaster, pasted from tools like CastMagic or Capsho, or AI-generated natively by the builder** is a product and business model decision. But the page structure should accommodate all of these sections regardless.

### Structured Data (Non-Negotiable, Every Tier)

Every episode page should automatically generate and embed:
- **PodcastEpisode** JSON-LD (title, date, duration, audio URL, series reference)
- **PodcastSeries** JSON-LD on the main podcast page
- **FAQPage** JSON-LD on any episode with FAQ content
- **BreadcrumbList** for navigation
- Auto-generated XML sitemap with episode-level entries

This structured data is what makes podcast content visible to Google and AI search engines. It should not be a premium feature — it should be baked into the architecture.

### Suggested Tier Structure

| Feature | Free | Starter ($15) | Pro ($29) | Agency ($59) | Network ($149) |
|---------|------|---------------|-----------|-------------|----------------|
| RSS sync frequency | Daily | 2 hours | 30 min | 30 min | 30 min |
| Custom domain | No | Yes | Yes | Yes | Yes |
| Episode pages with full structure | Basic (RSS only) | All sections available | All sections | All sections | All sections |
| Show notes section (manual or paste) | RSS description | Editable rich text | Editable + optional AI | Editable + optional AI | Bulk |
| Transcript section | No | Upload/paste | Upload/paste + optional AI | Auto-generate option | Bulk |
| FAQ section with JSON-LD | No | Manual entry | Manual + optional AI | Automated option | Bulk |
| Timestamp deep-linking | No | If entered manually | Auto-extracted option | Auto-extracted | Auto-extracted |
| Resource/links section | No | Manual | Manual + optional extraction | Automated option | Bulk |
| JSON-LD structured data | Basic | Full | Full | Full | Full |
| Blog section | No | Manual | Manual + optional AI | Automated option | Multi-show |
| Social content generation | No | No | No | Per-episode | Bulk |
| Social scheduling | No | No | No | Integrated | Integrated |
| Newsletter content | No | Signup form | Signup + export | Generation option | Bulk |
| Podcast count | 1 | 1 | 3 | Unlimited | Unlimited + network hub |
| Templates | 1 | 5-8 | 5-8 | 5-8 + custom | Custom development |
| Analytics | Page views | + play counts | + search rankings | + social metrics | Cross-show dashboard |
| White-label | No | No | No | Yes | Yes |

**The structural play:** Even the Starter tier at $15/month should offer the full page structure — sections for show notes, guest bio, resources, transcripts, FAQ. The podcaster fills them manually or pastes from other tools. This alone would outperform every hosting platform's built-in website. AI-powered content generation is a higher-tier value-add, not the foundation.

**The AI decision:** Lindo.ai can choose to build native AI content generation (transcription, show notes expansion, FAQ generation) or position the builder as the "best home for content you create elsewhere." Both are viable. The former has higher ARPU but higher build cost. The latter is faster to market and can partner with existing tools (CastMagic, Capsho, Swell AI) via integrations or paste-friendly workflows.

---

## 6. The Player Widget Matters More Than People Think

No standard embeddable podcast player on the market today offers the combination of features that top podcasts achieve through custom development. This is an opportunity.

### What the Best Podcast Websites Have (Custom-Built)

- **Synchronized transcript display** — Lex Fridman's site shows the transcript alongside the player; clicking a line jumps the audio to that moment
- **Timestamp deep-linking** — append `?t=120` to an episode URL and the player starts at 2:00
- **Chapter navigation** — visual chapter markers with titles, clickable
- **Clip sharing** — visitors select a segment and share a clip link
- **Speed controls, skip silence, boost voice** — listener-friendly playback options

### What Off-the-Shelf Players Offer

| Feature | Transistor | Buzzsprout | Spotify Embed | Beamly |
|---------|-----------|-----------|--------------|--------|
| Timestamp deep-link | Via URL param | No | Start time in config | Yes |
| Chapter markers | Yes | Limited | Auto-generated | Via timestamps |
| Synced transcript | No | No | No | No |
| Clip sharing | No | No | No | No |
| Custom styling | Limited | Color only | Size/color | N/A |

**A podcast website builder that includes a player with synchronized transcripts and timestamp deep-linking would immediately stand out.** None of the current embedded players offer this. It is universally custom-built by the podcasters who have it — and they are the top-tier shows that everyone else wants to emulate.

---

## 7. Social Media Integration: The Missing Piece

### The Current State

Podcasters currently cobble together separate tools for social promotion:

- **Opus Clip** ($15-29/mo) for AI video clips
- **Headliner** ($0-26/mo) for audiograms
- **Repurpose.io** ($35-179/mo) for cross-platform distribution
- **Capsho** (~$99/mo) for written social copy

A single podcast episode should generate 15-25 distinct content assets for social media. In practice, most creators produce 1-3 because the workflow is too fragmented and time-consuming (2-3 hours per episode for social promotion).

### What a Website Builder Should Automate

The content lifecycle should flow from episode to website to social — not require the podcaster to manually bridge each gap:

1. **Episode publishes** → RSS trigger fires
2. **Website auto-generates** → AI-enhanced show notes, transcript, FAQ, resources
3. **Social content auto-generates** → Platform-specific posts, quote cards, audiogram clips
4. **Social posts scheduled** → Staggered over 2-4 weeks, not dumped on day one
5. **Traffic flows back to website** → Social posts link to the episode page, not just the podcast app

**This is the critical architectural decision:** social posts should drive traffic to the website, not to Apple Podcasts or Spotify. The website is owned territory. The podcast apps are rented land. Every listener who visits the website can be captured via newsletter signup, presented with more content, and monetized through sponsorships, affiliates, or premium offerings.

No current podcast website builder connects the social promotion workflow to the website. They exist in isolation. Solving this — even partially — would be a significant differentiator.

---

## 8. What Podcasters Will Actually Pay For

Based on industry data and a decade of working with podcasters, the features that drive conversion from free to paid are:

### High Willingness to Pay

1. **Time savings on content creation** — AI show notes save 1-2 hours per episode. AI social posts save 2-3 hours. This is the most tangible value proposition.
2. **SEO and discoverability** — 72% of podcasters cite audience growth as their top challenge. Anything that credibly improves discoverability has strong pull.
3. **Monetization infrastructure** — Membership pages, donation widgets, sponsor showcases. 39% of creators want to make money and have no tools to do so.
4. **Custom domain** — The single strongest free-to-paid conversion driver for website products. Vanity and professionalism in one feature.

### Moderate Willingness to Pay

5. **Analytics** — Retention curves, search rankings, traffic sources. Important but not the primary purchase driver.
6. **Email/newsletter integration** — High value for serious creators, less relevant for hobbyists.
7. **Transcript publication** — SEO value is clear, but many creators don't realize it yet. Needs education.

### Low Willingness to Pay (Do Not Gate These)

8. **Design templates** — Nice to have, but aesthetics alone do not drive conversion
9. **Social community features** — Forums, comments. Low demand.
10. **Niche integrations** — Zapier, IFTTT, HubSpot. Only matters to specific subsets.

### Pricing Psychology

- **Freemium conversion rate** for podcast tools: 2-8% (without credit card), 25-35% (with credit card required for trial)
- **The $19-29/month range** is the sweet spot. Podpage at $19 is the price anchor. Beating Podpage's feature set at $29 (vs. their $39 Elite) is the positioning play.
- **Annual billing discount of 30-35%** is standard and expected
- **14-day free trial, no credit card** is the market norm (Podpage offers this)

---

## 9. Implementation Priorities

The phasing should follow where the value is highest and the competition is weakest:

### Phase 1: Structure First (Months 1-3)

Build the page architecture that no current builder offers:
- Podcast-specific website templates with the full episode page structure (all sections from Section 5)
- RSS feed integration with automatic episode page creation
- Embedded podcast player with basic controls
- Custom domain support
- Auto-generated JSON-LD structured data on every page
- Auto-generated sitemap with episode-level granularity
- Free + Starter tiers live

### Phase 2: Content Depth (Months 3-6)

Add the content features that differentiate from Podpage:
- Transcript upload/paste with formatted display
- FAQ section with JSON-LD schema (manual entry or AI-generated)
- Timestamp deep-linking in the player
- Resource/links section with categorization
- Blog section for episode-derived articles
- Pro tier live

### Phase 3: Promotion Layer (Months 6-9)

Connect the website to the promotional workflow:
- Social media content generation or integration
- Social post scheduling with platform-specific formatting
- Newsletter content export or generation
- Audiogram / video clip support
- Agency tier live

### Phase 4: Scale (Months 9-12)

- Network websites (multi-show hubs)
- Advanced analytics dashboard
- Monetization integrations (memberships, affiliates, sponsors)
- White-label for agencies
- API for custom integrations
- Network tier live

---

## 10. The Bottom Line

The podcast website builder market is ripe for disruption because every existing player treats the website as a container for RSS content. The opportunity is to treat the website as a **content platform** — a place where AI transforms a 45-minute audio file into a rich, searchable, SEO-optimized, socially shareable content hub.

The technology to do this exists today. AI transcription is cheap and accurate. Large language models can expand micro-copy into articles, generate FAQs, extract resources, and write social posts. Structured data schemas for podcasts are defined and supported by Google. The player technology for timestamp deep-linking and transcript synchronization is well-understood.

What is missing is a product that puts it all together in a way that a podcaster can set up in 30 seconds and never think about again.

That product does not exist yet.

---

*Prepared by Juergen Berkessel, Polymash. Ten years in podcast production, technology, and discoverability. Contact: juergen@polymash.com*
