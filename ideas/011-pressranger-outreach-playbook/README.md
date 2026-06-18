# Idea 011: An Owned Promotion & PR Engine (PressRanger as One Input)

**Origin:** Juergen Berkessel (Polymash) — prompted by a June 2026 email thread with Scott Power about reactivating our PressRanger accounts, plus the Thursday Open Call meeting on exhibition promotion
**Status:** Research & Discussion — recommend a scoped team pilot
**Date:** 2026-06-12
**Related:** [Idea 009 — Arterial's Owned Platform](../009-arterial-owned-platform/) — same "own the layer, don't rent it" thesis. 009 owns the *collection*; this owns the *promotion* around it.

> **Note on framing (updated):** This started as "should we adopt PressRanger?" — but the stronger move is to **extend the promotion repository we already have** (the Artwork Archive Airtable: campaigns, upcoming open calls, submissions) into an owned **press-release + announcement-playbook engine**, and treat PressRanger as *one optional connected tool* (a journalist-database source), not the centerpiece. The PressRanger research below stands as a thorough **component evaluation**; the architecture section is the actual recommendation.

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/011-pressranger-outreach-playbook/exports/pressranger-outreach-engine-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/pressranger-outreach-playbook-slide-1.png" width="820" alt="An Owned Promotion & PR Engine — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/011-pressranger-outreach-playbook/exports/pressranger-outreach-engine-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/011-pressranger-outreach-playbook/exports/pressranger-outreach-engine.html)
**📄 Slide deck (PDF):** [exports/pressranger-outreach-engine.pdf](exports/pressranger-outreach-engine.pdf) — download for print or offline.

**📄 PressRanger feature deep-dive:** [research/pressranger-features.md](research/pressranger-features.md) — every feature from first-party sources + exactly how we'd use each one.
**📄 Pricing deep-dive:** [research/pricing-analysis.md](research/pricing-analysis.md) — is the wire actually cheaper? (Short answer: no — the *software* is the bargain.)
**📄 Tool comparison:** [research/tool-comparison.md](research/tool-comparison.md) — PressRanger vs. PR Newswire, eReleases, EIN Presswire, Cision, Prowly, Muck Rack, Meltwater.
**🔗 Live master directory (interactive):** **[arterial-art-exhibition-promotion-resources.pplx.app](https://arterial-art-exhibition-promotion-resources.pplx.app/)** — the Perplexity-built, team-refreshed, shareable version of the directory below: 61 verified US channels with action URLs, cost, self-service level, effort and a Quick-Start Shortlist.
**📄 Where to register open calls + find funding (US-wide):** [research/submission-platforms.md](research/submission-platforms.md) + the **61-row verified master [arts-master-resource.csv](research/arts-master-resource.csv)** (built by Perplexity Computer, team-refreshed 2026-06-18, Airtable-import-ready) — listing boards, partners/councils, amplifier media, **24 fundraising/grant/donor channels**, and paid-ads (incl. **Google Ad Grants — free $10k/mo**).
**📄 Channel mix & ad budget:** [research/channel-mix-and-budget.md](research/channel-mix-and-budget.md) — PR + free listings + **paid social via a PolyWiz "Open Calls" category** ([Idea 007](../007-polywiz-paid-ads-engine/)); conservative per-call budget + expected submissions.
**📄 Perplexity Computer prompt:** [docs/perplexity-computer-prompt.md](docs/perplexity-computer-prompt.md) — paste into Perplexity Pro → Computer to build the exhaustive, verified, shareable submission/outreach/fundraising table + CSV.
**📄 Exhibition & open-call promotion playbook:** [docs/playbook-exhibition-promotion.md](docs/playbook-exhibition-promotion.md) — the repeatable SOP this idea is really about.
**📄 Team proposal note:** [docs/proposal-to-team.md](docs/proposal-to-team.md) — short note to Scott & Elise proposing the pilot.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, retrieval dates, and quotes for every pricing and capability claim.

---

## The Situation

We schedule open calls and exhibitions across **Not Real Art**, **Artsville USA**, and partner shows — but we don't really *promote* them. We've built a strong production system (enrichment pipeline, submissions, judging, the collection), yet outreach still runs entirely on **our own email list and personal contacts**. From the Thursday Open Call meeting, three gaps are explicit:

1. **No central repository for press / outreach contacts** — venues, journalists, open-call sites live in people's heads and inboxes, not a shared system.
2. **No one is actively working on outreach** — promotion is whoever-has-time, which means it mostly doesn't happen.
3. **No press-release cadence** — we issue releases sporadically, not before / on / after each open call and exhibition. Scott's stated target is *at least one release a month*.

Meanwhile both Scott and Juergen are sitting on **PressRanger** — a media-database + outreach tool we already bought as an AppSumo lifetime deal and then forgot about. Scott's reaction when reminded: *"Happy to start leveraging it… Given the low cost of it, it would be interesting to see if we can turn it into some kind of service or capability for artists or galleries. We just need to learn it and optimize it."* He also flagged the honest open question: *"I'm not sure how effective it is. We'll have to see."*

This paper does two things: it **evaluates PressRanger thoroughly as a component** (what it is, how it compares, what it costs — sections below), and it lands on an **architecture** that doesn't make any single rented tool the spine.

## The Architecture — Own the Engine, Plug In the Tools

We don't need to *adopt a PR platform*. We need a **promotion engine** — and we already own one: **PolyWiz**. This section is grounded in an actual review of the `polywiz-app` and `artwork-archive` repos (2026-06-12), not assumption.

**PolyWiz is the engine (and already has the bones for this):**
- It already does **URL → AI content → approval queue → tapering schedule → Zernio publish (14 platforms)**, multi-brand, with per-brand voice/keys.
- **"Open Call" is already a scaffolded campaign type** — defined in the schema but disabled (`ENABLED_CAMPAIGN_TYPES` excludes it; UI says "Coming soon"). The Firecrawl scraper already extracts `submissionDeadline` / `submissionUrl` / `eligibility`, and the prompt composer already injects deadline context. **Enabling organic open-call promotion is ~1 hour** (flip the flag + add a few Airtable Generation Rules for submission CTAs).
- **Press-release generation** is just a new *output format* for PolyWiz's existing AI content gen — not a new app.
- **Paid ads** are the real build — already filed as the **[polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181) epic** (~4–6 weeks; Phase 0 prerequisites blocking). Organic posting works today; ads/conversion/budget code does not yet exist. Pinterest is already wired for organic.

**Artwork Archive is the submission system-of-record + conversion source (NOT the engine):**
- It's an **n8n + Airtable intake → enrich → export** pipeline (its only UI is an export utility). It holds the **open-call records** (Campaigns table: deadline, landing-page URL, exhibition details) and the **submission conversion data** (status flow Imported → Enriched → Accepted).
- It has **no** AI content gen, social/ads publishing, or promo UI — so building the promo engine here would mean a second app inside it, duplicating PolyWiz. **It feeds PolyWiz; it isn't the engine.** (An open-call record triggers a PolyWiz campaign; the submission status is the conversion signal ad optimization needs.)

**Per-brand capabilities (so PolyWiz doesn't become "art-centric"):** PolyWiz already gates features per-brand with boolean flags on the Brands table (e.g. `lnkBioEnabled`). "Open Calls" becomes the same kind of **per-brand capability** — Artsville / Not Real Art on; **The Intersect off** (or pointed at *subscriber growth*, the same engine with a different objective — which is exactly what the #181 paid-ads pilot already targets). One engine, per-brand capabilities + conversion objective.

**The plug-in tools (swappable inputs, not the spine):**
- **PressRanger** → a **journalist/media-database source + pitch radar** we already own (Tier 3). Its AI generator and wire are *optional extras*, not the reason it's in the stack.
- **Distribution wires** (EIN Presswire / eReleases / PressRanger Gold) → shopped per release ([pricing-analysis.md](research/pricing-analysis.md)).
- **Listing boards & partners** → where we *register* calls to lift submissions ([submission-platforms.md](research/submission-platforms.md)).

**Where it gets built:** the *concept and design* live here (idea 011); the *implementation* is a PolyWiz epic — extend [polywiz-app#181](https://github.com/JuergenB/polywiz-app/issues/181) (paid ads) and add the small "Open Calls" capability + per-brand flag. The Airtable *contact / listing-site / partner registry* tables can live in the Artwork Archive base (the art-data hub) and be read by PolyWiz.

**Why this way:** it's the [Idea 009](../009-arterial-owned-platform/) principle applied to promotion — own the engine and the logic; rent only commodity inputs you can swap. PressRanger becomes one (cheap, already-owned) feed among several; if its data disappoints, swap the feed without touching the engine.

## Component Evaluation: What PressRanger Actually Is — Two Products in One Box

*(Everything from here down evaluates PressRanger as a plug-in tool for the engine above — it's the due diligence, not a pitch to build the system around it.)*

It's easy to think of PressRanger as "a cheaper press-release wire." It's really **two distinct products bundled together**, and the value to us is lopsided toward the first one:

### 1. A media-contact database + outreach CRM + AI pitch engine — *we already own it*
- **~500,000 journalist profiles, ~150,000 media publishers, ~200,000 podcasts** (marketed as "2M+ contacts"), searchable by beat/topic/location.
- **Built-in CRM** to manage contacts, lists, and track outreach from one dashboard.
- **AI media campaigns** — it drafts press releases and personalized pitch emails, and builds curated journalist/podcast lists for a given announcement.
- **HARO-style pitch notifications** — alerts when journalists are requesting sources.
- **CSV export** and **multiple companies/brands** on one account (so Not Real Art, Artsville, and partners can each be their own workspace).

This is the part that maps directly onto our three gaps — a contact repository, an outreach workspace, and a drafting assistant. The comparable standalone tools (Prowly, Muck Rack, Cision, Meltwater) run **$3,000 to $40,000+ per year**. We have this for a **one-time lifetime cost** already paid.

### 2. An optional pay-per-release distribution wire — *useful, but not the bargain*
- Press-release distribution is **pay-per-release — $299 Premium / $399 Gold** (guaranteed syndication to Business Insider, Yahoo Finance, AP News, Benzinga, etc.; Gold adds "AIWire" indexing into ChatGPT / Perplexity / Gemini, podcasts, and newsroom terminals).
- It's **billed separately** and — importantly — **not discounted by our subscription**. PressRanger's own FAQ confirms anyone with a *free* account pays the same per-release price. So our lifetime deal buys **zero** wire discount.
- And it isn't even especially cheap: **EIN Presswire runs ~$149/release** (less in bundles) for comparable budget syndication, and **eReleases starts at $399** — same as PressRanger Gold — but over the *actual* PR Newswire network with a **nonprofit discount**. Full breakdown in [pricing-analysis.md](research/pricing-analysis.md). This is the part Juergen's email flagged: *"it doesn't make issuing press releases completely free."*

So the headline — and the answer to "is this actually cheaper?": **the wire is a price-shoppable commodity, not the reason to use PressRanger. The real bargain is the software half** — the media database + CRM + AI + pitch radar that costs $3K–$40K/year as a standalone product, and which we already own outright.

## How It Compares to the Expensive Incumbents

Full detail in [research/tool-comparison.md](research/tool-comparison.md). The short version:

**Software (the lane we need — this is where our savings are):**

| Tool | What it is | Real cost | Our cost |
|------|-----------|-----------|----------|
| **PressRanger PR software** | Media DB + CRM + AI pitching + pitch radar | $79–$149/mo retail (~$948–$1,788/yr) | **$0 — lifetime deal** |
| **Prowly** | SMB media DB + CRM + newsroom | ~$3,096/yr | — |
| **Muck Rack** | Modern media DB + CRM | Opaque, annual (four figures+) | — |
| **Cision** | Enterprise media DB + monitoring | ~$10,000–$15,000/yr | — |
| **Meltwater** | Enterprise media DB + monitoring | ~$15,000–$40,000+/yr | — |

**Distribution wire (a commodity — shop it per release; our subscription gives no discount):**

| Service | Price / release | Note |
|---------|----------------|------|
| **EIN Presswire** | ~$149 (less in bundles) | Best budget value; AP/Google News |
| **PressRanger Premium / Gold** | **$299 / $399** | Gold's edge = AIWire AI-chatbot indexing |
| **eReleases** | $399–$699 | Real PR Newswire reach + **nonprofit discount** |
| **PR Newswire** | $805+ → real invoices **$1,500–$3,000** | Tier-1 brand recognition |

**The takeaway isn't "PressRanger beats PR Newswire" on the wire** — it doesn't even beat EIN Presswire or eReleases there (see [pricing-analysis.md](research/pricing-analysis.md)). The takeaway is that **PressRanger owns the lane we actually need** — the media-database-and-outreach-CRM lane that costs $3K–$40K/yr standalone — and we already own it. We don't need a premium wire for "we opened a call for artists"; we need to *find and reach the right people repeatedly*, which is the expensive part everywhere else. **Our owned capacity (Juergen's account, AppSumo Tier 3): 4,000 contact exports/mo, up to 10 brands, pitch notifications, custom media rooms** — already enough to run Phase 1 without even resolving Scott's tier.

## The Honest Caveats (so we pilot with eyes open)

Reviews and hands-on reports converge on real limitations — these shape the recommendation rather than kill it:

- **Noisy categorization.** Beats are matched by keyword on journalist bios, so lists carry false positives ("Travel" includes anyone who mentions traveling). Raw lists need human curation.
- **Patchy direct contact data.** In one reported test, a 100-contact LA list exported with **only ~8 direct emails**; phone numbers were absent. The DB is good at *identifying* people, weaker at *handing you a working email*.
- **Occasionally stale data and slow product updates.**
- **Deliverability** depends on how you send — blasting from the tool can hurt.

These caveats point to the architecture below: **PressRanger for discovery, a curated Airtable as our system-of-record, and disciplined sending** — not "trust the raw list and hit send."

## How It Runs — The Engine In Practice

This is the architecture above, made concrete — our owned stack is the spine; PressRanger is one feed into it.

1. **PolyWiz = the engine.** An open-call record (with deadline + landing-page URL) becomes a PolyWiz campaign that generates the release, artist-email, and social copy, runs it through the approval queue, and publishes on a deadline-aware tapering schedule via Zernio. "Open Call" is a scaffolded campaign type already (~1hr to enable); press releases are a new output format of its existing AI gen. Paid ads = the [#181 epic](https://github.com/JuergenB/polywiz-app/issues/181).
2. **Artwork Archive (Airtable) = the system-of-record + conversion source.** The open-call Campaign records and submission status flow already live here; add the *outreach contacts* and *listing-site & partner registry* tables here too (the art-data hub). PolyWiz reads these; the submission status is the conversion signal for ad optimization.
3. **PressRanger = a journalist/media feed + pitch radar.** Pull arts-beat contacts into the registry (4,000 exports/mo on Tier 3); use its inbound pitch alerts. Swappable if its data disappoints.
4. **Distribution + cadence.** PolyWiz schedules the organic cadence; the paid flight runs through the #181 ad engine; the press-release wire is shopped per release (EIN / eReleases / PressRanger).

On top of that sits the **playbook** ([docs/playbook-exhibition-promotion.md](docs/playbook-exhibition-promotion.md)): a multi-channel, multi-stage SOP (generate the release → register the call on the listing boards artists use → email the artist list → paid Facebook/Instagram → release on launch → recap when live), with landing-page alignment baked in. The meeting's own evidence backs the paid-traffic leg: the grants over-performed because we ran **Facebook campaigns to the landing pages** — open calls likely need the same. Much of the reach is **free** — most listing boards (EntryThingy, ArtCallEntry, Artwork Archive, ArtConnect) and amplifiers (Hyperallergic tips, Colossal's opportunities roundup) cost nothing; we simply aren't using them today. The full US-wide registry of where to register calls (sites, orgs, partners, media) lives in [submission-platforms.md](research/submission-platforms.md).

On top of that sits the **playbook** ([docs/playbook-exhibition-promotion.md](docs/playbook-exhibition-promotion.md)): a multi-channel, multi-stage SOP (press release for the open call → list on the free aggregator boards artists use → email blast to artists → paid Facebook/Instagram → release on launch → release/recap when live), with landing-page alignment baked in. The meeting's own evidence backs the paid-traffic leg: the grants over-performed because we ran **Facebook campaigns to the landing pages** — exhibitions and open calls likely need the same. Much of the reach here is **free** — most open-call boards (EntryThingy, ArtCallEntry, Artwork Archive, ArtConnect) and amplifiers (Hyperallergic tips, Colossal's opportunities roundup) cost nothing; we're simply not using them today.

## The Channel Mix — PR + Free Listings + Paid Social (via PolyWiz)

Promotion isn't one channel; it's a **mix** where each piece covers a gap the others can't — and the meeting's own evidence is that **paid social is the lever that moves the numbers** (the grant campaigns over-performed because we ran Facebook ads to the landing pages). The move is to **do that for every open call, automated**, through the engine already scoped in [Idea 007 — PolyWiz Paid Ads Generation Engine](../007-polywiz-paid-ads-engine/).

- **PR + free listings + email** harvest *existing* intent (artists already searching, our warm list, journalists).
- **Paid social manufactures *new* intent** — a thin new **"Open Calls" content category in PolyWiz** points the existing ad engine (8–15 auto-generated variants → Meta + **Pinterest** via Zernio) at the open-call landing page, optimized for **submissions**, with organic reminder posts trickled across the call's run (*opened → midpoint → "1 week left" → "48h left"*).
- **Pinterest earns its place here specifically** — visual-discovery, art-aligned audience, native lead ads, CPC 30–50% cheaper than Meta (per 007's research). Open calls are the use case that justifies turning it on.
- **Conservative budget:** short per-call flights of **~$150–$300** (not always-on), timed to each deadline. A realistic first test is **one brand, one call, ~$250** — small enough to ignore, large enough to read a signal. We've **never measured cost-per-submission** because we've never run the spend deliberately; this gets us the number.
- **Compounding loop — subscriptions *and* submissions:** a paid open-call campaign captures entries now, newsletter signups from non-submitters, and a retargeting pool that makes the *next* call cheaper. Same engine repoints at donors for the fall (Phase 2).

Full budget math, CPA expectations, and how this slots into 007: [research/channel-mix-and-budget.md](research/channel-mix-and-budget.md). **Recommendation: 007 and 011 ship together — make "Open Calls" 007's pilot category, with Pinterest on from the start.**

## Phasing

- **Phase 1 — Open-call & exhibition promotion (now).** Extend the Artwork Archive Airtable into the promotion repository, stand up a first-pass press-release generator, codify the playbook, and run it live on the next open call (*Art of Resistance* is the natural candidate) — **including a conservative (~$250) paid-social flight via a new PolyWiz "Open Calls" category** to measure cost-per-submission for the first time. Owner: **Elise** for outreach/evaluation; **Juergen** for the repository extension + generator + n8n + the PolyWiz category. Goal: get to Scott's *one-release-a-month* cadence and measurably lift submissions.
- **Phase 2 — Fundraising (fall).** Same engine, pointed at donors/grant press once the financial-house-in-order / impact-story / DAF-readiness groundwork lands. The 501(c)(3) "broad support from 500+ individuals" requirement makes disciplined, repeatable outreach a compliance asset, not just a marketing one. (Per the meeting, the Atlanta grant-matching contact is a *later* conversation, not now.)
- **Phase 3 (optionality) — PR-as-a-service for our network.** PressRanger is **100% white-label / reseller-ready** (strip its branding, add ours, generate branded reports). That's the literal mechanism behind Scott's instinct — *"turn it into some kind of service or capability for artists or galleries."* Once we've run the playbook on ourselves and know it works, we could offer open-call/exhibition PR as a branded service to the artists and galleries in our network. Flagged now; not a Phase-1 commitment.

## The Ask

1. **Reactivate access.** Scott has confirmed his account and is sharing the password with Juergen and Elise. Juergen's account is **AppSumo Tier 3** (10 brands, 4,000 exports/mo) — enough to start now; Scott's tier (unknown code count) can be sorted later if we need more seats/brands.
2. **Have Elise evaluate it** against the playbook — not as an abstract "is this tool good," but "can it find and help us reach arts journalists, aggregators, and partners for a real open call." She's the right person; she owns artist outreach and the fundraising/PR surface.
3. **Review as a team** at a Thursday session: agree the playbook, the Airtable schema, and the first live test.

## Why It's Captured Here

This started as a "did you ever sign up for PressRanger?" email, but the underlying move — **extending the promotion repository we already own into a press-release + announcement engine, with PressRanger as one swappable feed** — is exactly the kind of system thinking this inbox exists to develop. It's a low-cost, high-leverage complement to [Idea 009](../009-arterial-owned-platform/) and the same principle: 009 owns the *collection*; this owns the *promotion* around it — and neither rents its spine from a tool that could change its pricing, quality, or terms tomorrow.
