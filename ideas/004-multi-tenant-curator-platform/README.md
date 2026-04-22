# Multi-Tenant Curator Platform — Productizing The Intersect Engine

**Date:** April 21, 2026
**Origin:** Juergen Berkessel
**Status:** Research & Discussion

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/004-multi-tenant-curator-platform/exports/deck-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/multi-tenant-curator-platform-slide-1.png" width="480" alt="Multi-Tenant Curator Platform — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/004-multi-tenant-curator-platform/exports/deck-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/004-multi-tenant-curator-platform/exports/deck.html)
**📄 Slide deck (PDF):** [exports/deck.pdf](exports/deck.pdf) — download for print or offline.

---

## What We Already Built

Polymash runs a full-stack newsletter and podcast publishing platform in production today, called the **Intersect Curator**. It powers our own weekly newsletter *The Intersect: Art in Tech — Tech in Art* and its companion podcast.

End-to-end, the system:

- **Ingests hundreds of RSS feeds** on a 3-hour cron, deduplicates, and stores everything (not just high-relevance items) so articles don't get re-scored.
- **Scores each article with AI** against a two-topic rubric (for us: "art × technology"). A blend of a deterministic term-score, a Claude Haiku contextual judgment, and a vector-similarity check against what the editor has previously picked.
- **Learns the editor's taste over time.** Every thumbs-up and thumbs-down updates a Pinecone vector profile that shifts future rankings toward what the curator actually publishes.
- **Helps the editor assemble each issue** from a mobile-first UI — browse, rate, comment (by voice), pick, drag to reorder, and generate the entry copy in the newsletter's brand voice.
- **Generates cover art** via Replicate from a prompt template.
- **Produces a companion podcast episode** for each issue — AI-hosted conversation via WonderCraft, mastered in Auphonic, published to Captivate.
- **Publishes the newsletter** through Curated.co as the delivery rail.

This paper is about whether the *engine underneath that product* is worth repurposing as a multi-tenant platform that runs other two-topic verticals for other clients — without rewriting the hard parts.

---

## TL;DR

The Intersect Curator is a working production system that takes a two-topic idea ("art × technology") and ships a weekly newsletter plus a companion podcast from it — with the curator doing their job from a phone and AI doing everything between article ingestion and final publishing.

Almost none of what that engine does is actually *about* art or technology. Art and technology are just the two topics we currently feed it. Swap five thin, per-client layers — feed list, intersection rubric, taste profile, brand voice, visual identity — and the same engine runs a "residential real estate × interest-rate policy" newsletter + podcast, or "EV batteries × mining supply chain," or "biotech × FDA policy."

**The engine is ~90% generic. The remaining ~10% is per-client configuration plus a tenant-isolation layer we haven't built yet.** That gap is real but tractable — measured in weeks, not a rewrite. The harder question is non-technical: what business model does Polymash want to be in, and who writes the rubric for each client?

---

## 1. Why This Is Worth Discussing Now

The Intersect was built to replace a brittle Feedly + n8n pipeline with a real application. Along the way it became something more interesting than originally scoped:

- **It has a taste profile.** A Pinecone-backed vector store that learns from thumbs-up/down and shifts future rankings toward what the curator actually picks. That's the hard, interesting piece.
- **It has an opinionated scoring loop.** A two-layer system: deterministic term scoring (art/tech lexicons) plus Claude Haiku contextual scoring, blended with taste similarity. See [scoring.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/ai/scoring.ts).
- **It ships end-to-end.** Not just curation — it assembles issues, writes entries, generates cover art, produces a podcast (WonderCraft hosts → Auphonic mastering → Captivate publishing), and pushes to Curated.co for newsletter delivery.
- **It's mobile-first for the human-in-the-loop.** Browse, rate, comment, assemble, publish — all from a phone.

None of that is specific to the art/tech beat. The *beat* is configuration; the *engine* is infrastructure. Once you see that, the question is whether Polymash wants to be in the business of running the infrastructure for other people's beats.

---

## 2. Thesis

> **The Intersect Curator is a domain-agnostic two-topic intersection engine with five thin domain-specific seams. Those seams are small enough to re-configure per client, but they are the entire point of the product — which means productizing the engine is mostly a tenant-isolation, config-UI, and onboarding problem, not a core-engineering problem.**

The rest of this paper works through what "generic" actually means here, where the seams are, how to make it multi-tenant, what the effort really looks like, and what business model Polymash should run it under.

---

## 3. What's Already Generic (the 90%)

Everything below is in production today and has nothing to do with art or technology as subject matter:

| Layer | Lives in | What it does |
|---|---|---|
| **RSS ingestion** | [lib/feeds/pipeline.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/feeds/pipeline.ts) | Fetch N feeds on a cron, hash-dedup, title-similarity dedup, OG-image hydration, store everything (including low-relevance items — prevents re-scoring) |
| **Vector taste profile** | [lib/pinecone/](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/pinecone) | OpenAI embeddings → Pinecone → `getTasteSimilarity()` queries against "picked" vectors to influence future scoring |
| **Airtable data layer** | [lib/airtable/](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/airtable) | Articles, feeds, issues, entries, categories, episodes, host personas — all behind a thin CRUD layer with a `toFoo()` transform pattern |
| **AI scoring loop** | [lib/ai/scoring.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/ai/scoring.ts) | Two-layer scoring: deterministic term-score + Haiku contextual score + taste similarity, blended into a final relevance score |
| **Issue assembly** | `app/issues/` + `lib/ai/themes.ts` | Theme extraction, candidate pool, drag-reorder lineup, metadata panel, entry generation on pick |
| **Entry writing** | [lib/ai/entry-writer.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/ai/entry-writer.ts) | Firecrawl scrape → Claude Sonnet → newsletter entry in brand voice |
| **Podcast pipeline** | `lib/services/{wondercraft,auphonic,captivate}.ts` | Prompt → AI hosts → audio master → podcast host publish, all cron-polled |
| **Cover art** | `lib/services/replicate.ts` | Replicate image generation from a prompt template |
| **Newsletter delivery** | `lib/services/curated.ts` | Push to Curated.co as the publishing rail |
| **Mobile-first curator UI** | `app/` | Next.js 16 App Router, React 19, Tailwind 4, shadcn/ui |

The important thing about this list is that the *code* doesn't know what domain it's in. The scoring prompt gets the rubric injected from `editorial_preferences`. The feed list is a row in an Airtable table. The podcast hosts are personas in another table. It's already configured out more than most single-purpose apps are.

---

## 4. What's Domain-Specific (the 10%) — The Five Seams

Every beat the engine can run comes down to these five layers:

### Seam 1 — RSS feed list
A table of 30–50 RSS URLs. Today that's art magazines, gallery feeds, tech research blogs. For a real-estate-investing × macro-rates beat, it'd be *Calculated Risk*, *HousingWire*, *Federal Reserve working papers*, *Bloomberg real estate*, etc. This is pure curation work by a domain expert — not engineering. The schema ([feeds.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/airtable/feeds.ts)) already supports priority, category tagging, and per-feed fetch overrides.

### Seam 2 — The intersection rubric
The scoring prompt is where the beat is encoded. The current prompt hard-wires the art × technology intersection with calibrated examples ("HIGH: FKA Twigs + Brian Eno at the Vatican…", "LOW: AI company press release calling a product 'creative'…"). For a different beat you need:

- A crisp definition of each axis (art / tech → residential RE / interest-rate policy)
- Scoring guidance per axis with worked examples
- An "intersection must be explicit, not cosmetic" clause, tuned to what that domain's fake-intersections look like
- A "topics causing fatigue / topics of current interest" section that the editor can edit over time

This is the single hardest non-engineering artifact to produce per client. It's consulting work — typically a half-day workshop with the client plus iterations against real articles.

### Seam 3 — Taste profile (Pinecone namespace + backfill)
Each client gets its own Pinecone namespace seeded by their own thumbs-up/thumbs-down. The backfill script already exists ([scripts/backfill-pinecone.ts](https://github.com/JuergenB/the-intersect-curator/blob/main/scripts/backfill-pinecone.ts)). What's missing is the tenant-aware wrapper around it (right now Pinecone queries don't filter by tenant because there's only one tenant).

Cold-start problem: a brand new client has no rating history. Options:
- Seed with 50–100 editor-picked historical articles at onboarding
- Fall back to a neutral 0.5 similarity until N ratings accumulate (already how the code handles empty state)
- Optionally import from a competing newsletter's archive as training signal

### Seam 4 — Brand voice
Two places:
- **Newsletter copy** — entry-writer prompt and brand-voice markdown at [lib/prompts/brand-voice.md](https://github.com/JuergenB/the-intersect-curator/blob/main/lib/prompts/brand-voice.md). Today: "curious, candid, conversational, dry wit." Per-client: whatever the client's tone-of-voice guide says.
- **Podcast host personalities** — `HOST_PERSONAS` table already holds name, description, and WonderCraft voice ID per host. Genuinely multi-tenant-ready as a schema; the current system just happens to have one pair of hosts.

### Seam 5 — Visual identity
- Cover-art prompt template (lives in the Replicate service call)
- Color palette / typography for the newsletter template and the podcast cover
- Logo + favicon

This is the lightest-weight seam; it's essentially a CSS + prompt-template swap.

---

## 5. Architecture — Multi-Tenant Options

There are two realistic paths. Neither is wrong; they have different tradeoffs.

### Option A — Base-per-tenant (recommended)

```
┌─────────────────────────────────────────────────────────┐
│                  Next.js Platform App                    │
│  (one deployment, per-request tenant resolution)         │
└─────────────────────────────────────────────────────────┘
                         │
         ┌───────────────┼───────────────┐
         ▼               ▼               ▼
   ┌──────────┐   ┌──────────┐   ┌──────────┐
   │ Tenant A │   │ Tenant B │   │ Tenant C │
   │ Airtable │   │ Airtable │   │ Airtable │
   │   base   │   │   base   │   │   base   │
   └──────────┘   └──────────┘   └──────────┘
         │               │               │
   ┌──────────────────────────────────────────┐
   │     Pinecone (one index, one namespace   │
   │                per tenant)               │
   └──────────────────────────────────────────┘
         │               │               │
   ┌──────────────────────────────────────────┐
   │  Shared external services                │
   │  Claude · OpenAI · Firecrawl · Replicate │
   │  WonderCraft · Auphonic · Captivate      │
   │  Curated.co (one account per tenant)     │
   └──────────────────────────────────────────┘
```

**Pros:** Hard tenant isolation. Per-client Airtable customization stays possible (editors love to add columns). Simple backups. Easy to hand a base off if a client leaves. Matches the existing `lib/airtable/client.ts` pattern — one env var per base, nothing changes except the resolver.

**Cons:** Onboarding a client involves copying an Airtable template. Cross-tenant analytics are harder (you'd need a reporting warehouse). Slightly more Airtable cost per client (but Airtable pricing is per-seat, not per-base, so this is marginal).

### Option B — Shared base, `client_id` column

**Pros:** One base to maintain. Cross-tenant reporting trivial. Easier to add platform-level features that aggregate across clients.

**Cons:** Every query must filter by `client_id` — one missed filter leaks data between clients. Airtable has no row-level security. Client-specific columns force schema bloat or a sidecar table. Backup/restore at per-tenant granularity is painful. Feels wrong for anything resembling a client deliverable.

### Recommendation
**Go with A.** The current codebase already resolves Airtable by base ID via env var; adding a tenant resolver (subdomain or path → tenant row in a central "tenants" table → per-tenant base ID + Pinecone namespace + API keys) is cleaner than retrofitting `client_id` into every query. It also respects that Airtable is a *collaboration tool* — the client's editor should be able to open their base directly and not see anyone else's data.

### What a tenant config row looks like

```
Tenants table (lives in a "platform" Airtable base)
─────────────────────────────────────────────────
  tenant_id           rei-intersect
  slug                rei
  display_name        The Rate / Rent Intersection
  airtable_base_id    appXXX
  pinecone_namespace  tenant_rei
  curated_account_id  ...
  captivate_show_id   ...
  wondercraft_host_1  voice_id
  wondercraft_host_2  voice_id
  brand_voice_md      (rich text)
  rubric_prompt_md    (rich text)
  cover_art_template  (rich text)
  status              active | paused | onboarding
```

Most per-client behavior becomes editable fields on this row.

---

## 6. Effort Estimate

Not a rewrite. A series of focused changes layered over the existing app. Rough shape:

| Work | Rough effort | Notes |
|---|---|---|
| Tenant resolver middleware (subdomain/path → tenant row → request context) | 3–5 days | Straightforward Next.js middleware + a `getTenantContext()` helper threaded through server actions |
| Refactor `lib/airtable/client.ts` to be tenant-aware (base ID from context, not env) | 2–3 days | Existing lazy-init pattern survives; just reads base ID from tenant context |
| Refactor `lib/pinecone/` for per-tenant namespaces | 1–2 days | Pinecone natively supports namespaces; current code uses the default namespace |
| External service clients: key scoping (Curated, Captivate, WonderCraft, Replicate) | 2–4 days | Some services are one-account-per-client (Curated, Captivate); others are shared with per-request attribution |
| Platform-admin UI — onboarding a new tenant, editing rubric/voice/feeds | 5–10 days | The single biggest piece. Per-tenant config editor. Cold-start seeding tool. Rubric preview ("score 20 sample articles and show how they'd rank") |
| Per-tenant cron scheduling | 2–3 days | Vercel crons are deployment-level, not tenant-level. Either one cron iterating tenants, or a scheduler table. Former is simpler, latter scales further |
| Auth + access control (who can edit which tenant) | 3–5 days | Depends on whether clients get direct login or go through Polymash |
| Billing / usage metering | 3–7 days | Only if SaaS model. If agency, skip entirely |
| Template Airtable base + automated provisioning | 3–5 days | Airtable Meta API can duplicate a base; automating onboarding cuts a lot of human time |

**Rough total: 4–8 weeks of focused engineering for a 2-tenant MVP.** That's what it takes to get to *two real clients running live*, not to a polished SaaS.

The remaining effort after that depends entirely on which business model gets picked (§8) — polished self-serve onboarding is much more work than white-glove onboarding.

**Explicitly *not* included above:**
- Per-client rubric writing (consulting work, billed separately)
- Per-client feed curation (consulting work, billed separately)
- Per-client brand voice capture (design work)
- Cover art style development per client

Those are the recurring non-engineering costs, and they don't go away even in a mature SaaS — see §9.

---

## 7. Example Verticals — Concrete Rubrics

Picking verticals matters because it forces honesty about whether the thesis actually holds. Three worked examples:

### 7a. Residential Real Estate × Interest-Rate / Housing-Policy Macro
**Intersection rubric:** The article must connect residential housing dynamics (affordability, inventory, transactions, construction) to monetary policy, fiscal policy, or credit market mechanics. Not "the economy is bad for housing" — *specifically* how a named Fed action, a specific mortgage spread, a specific zoning or tax policy creates a second-order effect on residential market behavior.

**Feed shape:** Calculated Risk, HousingWire, Federal Reserve FEDS Notes, Tax Policy Center, Urban Institute, Bloomberg Real Estate, Freddie Mac primary mortgage survey, *The Big Picture* macro blog.

**What scores HIGH:** "Why the 2–10 Treasury spread is dragging on housing transaction volume." "How the expiring OZ credit is changing multifamily deal flow." "California's SB-423 reshaping ADU financing."

**What scores LOW:** Generic "housing market crash" content, agent-bait listings, Fed macro that never touches housing, housing pieces that never touch policy.

### 7b. EV / Battery Technology × Mining & Supply-Chain Policy
**Intersection rubric:** The battery-chemistry / cell-engineering / vehicle-side of the industry must be linked to where the minerals come from, how they're refined, and what geopolitics or trade policy is shaping the flow. Pure "Tesla quarterly results" doesn't qualify. Pure "lithium mine in Argentina" doesn't qualify either. The *chain* is the point.

**Feed shape:** *Inside EVs*, Benchmark Mineral Intelligence, *The Driven*, U.S. Geological Survey critical-minerals updates, IEA mineral supply chain reports, Chinese industrial policy coverage, DOE LPO announcements.

**What scores HIGH:** "Indonesia's nickel export ban and Ford's F-150 Lightning cell sourcing." "LFP chemistry is letting US automakers route around China — but the cathode coating isn't." "Thacker Pass permitting and the Nevada lithium pipeline."

**What scores LOW:** Pure consumer EV reviews. Pure commodity price moves without supply-chain narrative. Climate-policy op-eds that don't touch the physical flow.

### 7c. Biotech × FDA / Regulatory Policy
**Intersection rubric:** A specific therapeutic, platform, or clinical program *and* the specific FDA, CMS, or international regulator behavior that shapes its path to patients. Drug development stories without regulatory grounding don't make it. Regulatory stories without a named program behind them don't make it.

**Feed shape:** Endpoints News, STAT, FDA Drug Approvals, *Drug Channels*, *In the Pipeline* (Derek Lowe), Nature Biotechnology, FDA advisory committee calendars.

**What scores HIGH:** "Accelerated approval for [drug X] hinged on the FDA's new biomarker guidance — here's why." "CMS price negotiation list and what it means for [therapy area] pipelines." "Advisory committee signals a shift on confirmatory-trial standards."

**What scores LOW:** Pure clinical-trial result roundups without regulatory angle. Pure policy debate without a specific program in the crosshairs.

### What these examples teach us
- Every beat has a *failure mode* — the kind of article that *looks* like the intersection but isn't. The rubric's job is to explicitly name those failure modes. This is where Juergen's art/tech calibration examples are doing most of the work, and it'll be the same for any vertical.
- A sharp rubric isn't "art + technology." It's "the intersection must be explicit, not cosmetic, and here's what cosmetic looks like in this domain." That pattern transfers. The examples don't.

---

## 8. Business-Model Options

Three coherent paths. They have different implications for product depth, pricing, and which parts of Polymash the work actually sits in.

### Model 1 — Pure SaaS
Client logs in, configures their own rubric, adds their own feeds, rates their own articles, publishes their own newsletter.

- **Pricing:** $200–800/mo tiered on usage (articles scored, podcast minutes generated, newsletter size)
- **Who it's for:** Independent newsletter operators who already have a voice and a list, want better tooling
- **What's needed:** Real self-serve onboarding, rubric-preview tooling, robust admin UI, good docs, a rubric-writing template the user can fill in themselves
- **Polymash overhead per client:** Low once onboarded; high support burden at the rubric-writing step because most buyers *cannot* write a good rubric unaided
- **Risk:** We end up running a lot of support anyway, at SaaS prices

### Model 2 — Done-for-You Agency
Polymash delivers the newsletter + podcast as a managed service. Client gets content, never touches the engine.

- **Pricing:** $3,000–8,000/mo per client (aligns with the B2B/branded tier from the podcast market research — *ideas/003*)
- **Who it's for:** Financial firms, trade associations, B2B companies who want a thought-leadership newsletter but don't want to staff one
- **What's needed:** Less platform UI, more consulting process — intake questionnaire, rubric workshop, editorial review cadence, escalation path
- **Polymash overhead per client:** High; this is a services business with software as an asset
- **Risk:** Scales linearly with headcount. But margins are good because the engine is shared cost

### Model 3 — Hybrid (platform + white-glove onboarding)
Client buys a subscription but the first 60 days are a structured onboarding engagement that produces the rubric, seeds the feed list, trains the taste profile, and tunes the voice. After that, they self-serve.

- **Pricing:** $10k–25k onboarding + $400–1,200/mo platform fee
- **Who it's for:** Mid-market operators who are serious but don't have editorial tooling chops in-house
- **What's needed:** Both: a good platform AND a repeatable onboarding playbook. This is the most expensive path up front but likely the best long-run business
- **Polymash overhead per client:** Front-loaded in onboarding, then low
- **Risk:** If onboarding isn't repeatable, you end up in Model 2 at Model 1 prices

### Recommendation (for discussion, not decision)
**Model 2 for the first 2–3 clients.** Learn what the rubric workshop actually needs. Learn what breaks when someone else is the editor. Learn whether the admin UI is the 20% that matters or the 80% that doesn't. Then decide between stopping there (services business, good margins, known ceiling) or graduating to Model 3 (bigger ceiling, real product work).

Model 1 (pure SaaS) is the hardest — not because the engineering is harder, but because the *sale* is hard. You'd be competing with Substack + any number of AI newsletter tools on price, and losing the thing that makes The Intersect good (a curator with opinions).

---

## 9. Risks & Open Questions

### 9a. Curated.co is still a manual publish step
This is the single most fragile part of the current pipeline. Curated.co has no publish API — the newsletter gets assembled programmatically and then a human clicks *Send* in Curated's UI. For one newsletter that's fine. For five it's a part-time job. **Options:**

- **Live with it** at 3–5 tenants. Cheap. Assumes Polymash does the sending.
- **Swap publishing rails** to something with an API (Beehiiv, Substack Pro API, a custom Buttondown-based flow). Each has its own tradeoffs around editorial control, list portability, and ad-inventory models. The Curated.co editorial format is genuinely good — hard to replicate from scratch.
- **Automate with a headless browser.** Technically possible, fragile, feels like cheating. Would probably break quietly and cost more than fixing the real problem.

No clean answer. Worth a real conversation before committing to more than ~3 concurrent clients on the current stack.

### 9b. Podcast voice licensing per client
WonderCraft's hosted voices are licensed for commercial use, but:
- Different clients probably want different host personas (a biotech show shouldn't sound like an art show)
- Some clients will want *their own* voice or a known talent — which means voice-cloning licensing, which WonderCraft supports but at additional cost
- Voice-clone rights are a legal surface we don't currently have a process for

This isn't a blocker, it's a workstream. Needs a voice-onboarding SOP per client.

### 9c. Rubric-writing doesn't currently scale
Today Juergen writes the rubric. He's very good at it. But "the thing that makes the product work" being bottlenecked on one person's availability is a classic agency trap.

Possible moves:
- **Rubric template + workshop format.** A structured intake (30 questions + 20 sample articles to rate) that produces a first-draft rubric, which Juergen then refines. Turns 5 days of ad-hoc work into 1 day of structured work.
- **Rubric authoring assistant.** A meta-AI tool that interviews the client, asks them to rate a batch of articles, and proposes rubric language + failure-mode examples from their feedback. Feasible (the ingredients exist in the codebase) but non-trivial to build.
- **Accept that it doesn't scale past ~10 clients without hiring an editorial lead at Polymash.**

This is the most important strategic question for this idea. If rubric-writing can be productized, this is a platform business. If it can't, it's a high-margin services business with a software moat. Both are good; they're just different.

### 9d. Other open questions worth flagging
- **Who owns the editorial?** If the client edits articles and the AI picks, whose name goes on the byline? (Important for thought-leadership positioning.)
- **Data rights over the taste profile.** If a client leaves, do they get to take their Pinecone vectors? Almost certainly yes — write it into the contract now.
- **Feed licensing.** Most RSS is implicitly redistribution-safe at the curation level (we link, we excerpt). But some feeds have explicit ToS that prohibit commercial aggregation. Needs a per-client legal pass.
- **Podcast publishing overhead.** Captivate works per-show. Five tenants = five Captivate accounts. Not expensive but a real operational overhead.

---

## 10. Next Steps

This paper is a conversation opener, not a commitment. In rough order, if the conversation goes forward:

1. **Pick a real candidate vertical.** Not hypothetical. One that Polymash has a plausible buyer for, where Scott or someone in the network can make an intro in 30 days. Likely candidates: a RIA or wealth firm for the rate/housing beat, a B2B EV supply-chain player, a biotech PR firm.
2. **Do a rubric workshop with that buyer.** Write the rubric and a 20-article calibration set. Validate that a domain expert can *read* the rubric and agree with it.
3. **Run the rubric through the existing Intersect engine locally** (swap the scoring prompt, seed 50 articles, see what the rankings look like). This is a cheap test that surfaces 90% of the "does this actually work" risk before any tenant-isolation code is written.
4. **If §3 passes**, scope the tenant-isolation MVP (§6). Target a 2-tenant deployment — Intersect itself plus one new client — within 6 weeks.
5. **Decide business model** (§8) before pricing the engagement with that first client. The onboarding fee structure depends entirely on this choice.

---

## 11. Appendix — What's Already Proven

For the skeptical reader. None of this is speculative:

- [The Intersect newsletter](https://www.theintersect.art/) is running weekly in production
- The curator app at [app.theintersect.art](https://app.theintersect.art) (internal) runs ingestion every 3h against a feed library of ~246 sources (per the 2026-04-15 validation pass: ~180 are actively returning usable content, the rest are redirects/dead and queued for cleanup)
- The podcast episodes are produced by the pipeline end-to-end (WonderCraft → Auphonic → Captivate)
- The taste profile has ~500+ rated articles seeding the Pinecone index
- The scoring blend (55% Haiku + 45% taste similarity + up to 25% term bonus) has been tuned against ~3 months of editorial feedback

The engine works. The question is whether it's worth the effort to let more than one beat run on it.

---

*Prepared by Juergen Berkessel · Polymash · April 2026*
