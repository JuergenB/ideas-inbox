# Idea 009: Arterial's Owned Platform

**Origin:** Juergen Berkessel (Polymash) — a Polymash proposal for Arterial, 2026-06-08
**Status:** Research & Discussion
**Predecessor:** Successor to [Idea 001 — Artist Directory / Gallery Platform](../001-artist-directory/); shares architecture thinking with [Idea 004 — Multi-Tenant Curator Platform](../004-multi-tenant-curator-platform/)

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/009-arterial-owned-platform/exports/arterial-platform-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/arterial-owned-platform-slide-1.png" width="820" alt="Arterial's Owned Platform — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/009-arterial-owned-platform/exports/arterial-platform-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/009-arterial-owned-platform/exports/arterial-platform.html)
**📄 Slide deck (PDF):** [exports/arterial-platform.pdf](exports/arterial-platform.pdf) — download for print or offline.
**📄 Sources & references:** [research/sources.md](research/sources.md) — URLs and retrieval dates for the few external claims cited in the deck.

---

## The Proposal

Arterial has quietly built a real asset: a collection of **10,000+ artworks and thousands of artists**, accumulated through years of open calls, grants, and exhibitions across Not Real Art, the NRA Grant, the First Friday / exhibition series, Artsville USA, and partner shows. Almost everything Arterial makes draws on that collection.

But the collection doesn't live on anything Arterial owns. It's assembled by our own enrichment pipeline and then displayed and managed through a stack of **rented, disconnected tools** — Artwork Archive for display, Airtable for staging, ActiveCampaign for the list, Paperform for submissions, Zealous for grant judging, n8n for automation, plus WordPress, Ghost, Thinkific, and more — and one-off websites for partners. We control the art; we don't control the layer it lives on.

**Idea 009 is to own that layer** — to build one platform, anchored on Arterial's artists and artworks, that powers exhibitions, submissions, discovery, and partnerships. This is explicitly *not* a consumer-subscription play (that was the weaker thesis of idea 001). It's infrastructure: the substrate every Arterial initiative already depends on, finally owned.

This is a **Polymash proposal** for Arterial's underlying platform. A public-facing marketing site (under whatever brand Scott eventually chooses) is a separate, later concern — not presumed here.

This deck is a **vision / discussion paper** for Scott — the goal is alignment on the principle ("Arterial should own its platform, not rent its future") and agreement to fund a scoped first phase that begins replacing rented Artwork Archive with our own system.

## Why It Matters

**1. A suite of new services Arterial can't build today.** Own the substrate and a whole class of capabilities becomes possible: white-label galleries for partners, fully customized online exhibitions (sliders, dimensions on/off, animated storytelling — not one rigid template), partnerships run as living collaborations, and infrastructure offered to smaller galleries and artists who have none of their own.

**2. One operating system → one mature institution.** Today Arterial is a portfolio of strong but siloed initiatives. An owned platform is the connective tissue that makes the constellation cohere — Art House pulls artists from it, Artsville shows exhibitions from it, the Grant feeds it, the next initiative launches *on* it. The art market's own value is consolidating around exactly this combination of owned platform + proprietary data (in 2025 Beowolff Capital bought Artnet and merged it with Artsy into a single data-and-AI ecosystem). Platform + data *is* the asset.

**3. Capabilities the rented stack structurally can't touch.** Because the platform owns the corpus, the enriched metadata, and a vector engine (the same approach already running in Polymash's Intersect curator), it can do things a rented gallery plugin can't: configurable exhibitions, visual/vector-driven discovery (surface works by color, style, region, or artist), a QR bridge from physical wall to phone, partner analytics, and AI-assisted curation. One owned substrate, many expressions.

## What Owning It Unlocks (only possible with our own infrastructure)

**The exhibition lifecycle, owned end-to-end** (replacing rented tools with one seamless flow):

- **Baked-in submissions & open calls** — partners run their own branded calls; submissions land enriched. Replaces Paperform + Airtable.
- **Multi-curator judging** — score submissions, shortlist, select artworks, and issue grants together. Replaces Zealous (the costly judging tool used for the last grant).
- **Configurable exhibitions** — per-show design and parameters, not one rigid format.
- **Labels & catalogs as a service** — auto-generate wall labels, didactics, and print/digital catalogs from each record.
- **QR: wall to phone** — scan a physical label, get the full artist record and an inquiry path.
- **Partner analytics** — engagement, dwell, and geography insight a small gallery has never had.

**Capabilities the rented stack could never touch** (the things we're not even doing yet):

- **Visual, vector-driven discovery** — surface works by color, style, region, or artist.
- **AI curator** — "a show in greens, under 36 inches" — propose themed exhibitions from the archive.
- **A relationship graph** — artist ↔ artwork ↔ exhibition ↔ partner — powering "more like this" everywhere.
- **Per-exhibition radio & podcasts** — AI-produced audio about a show, on our own engine.
- **Artist self-service profiles** — portable portfolios that keep themselves current, with automated re-engagement.
- **Conversational, attribute search** — designer-grade: "works for a blue hotel corridor, under 36 inches," answered from our own data.

## A Partner Gallery, Powered By Us

The white-label service, made concrete. A small gallery, a partner program, or our own grant runs end-to-end on one platform, branded as theirs: open call → auto-enriched database → **multiple curators judge and shortlist** → select the wall (or, run as a grant, award the grantees) → QR-labeled wall plus a big-screen loop showing everyone who submitted → their own analytics. **The same flow runs our grants and competitions — the judging step replaces Zealous.** A 12-piece room *feels like* a 200-artist exhibition. Because the platform is multi-tenant by design, a partner instance is a configuration — not a rebuild — so partnerships (a CodaWorks collaboration, a public-art project, a regional gallery) become a switch Arterial controls, when it chooses.

## From Discovery to Income — The Flywheel

Owning the substrate lets discovery flow all the way to **sustainable, mission-aligned revenue**: an artist is discovered → exhibited → exposed through partnerships → their work sells as prints through **Sugar Press Art** → revenue funds the artist *and* Arterial → which draws in more artists. It amplifies artists rather than walling anyone out — a flywheel, not a toll booth. You can't route discovery into print commerce through a gallery plugin and a paper form; the owned platform is what connects the two ends.

## The Asset Is Already In the Building

Arterial's cheapest growth isn't new reach — it's re-activating the artists already in the collection. They opted in, they submitted, they care. The platform makes staying in touch systematic: self-service profiles that keep themselves current, automated re-engagement, and discovery that pulls artists back into Arterial's orbit on their own.

## Why This Is Real

- **Not starting from zero.** The enrichment pipeline, the 10,000-artwork dataset, and the vector engine behind the art wall already run in production. This is assembling proven pieces, not a moonshot.
- **Built to be owned, not babysat.** Industry best practices, fully documented, handoff-able — no key-person dependency. Arterial owns and operates it; the platform is an asset on the books, not a person on call.

## The Ask

This is a **Polymash proposal** asking for two things — strategic buy-in plus a funded first phase:

1. **Agree on the principle** — that an owned platform, built on the artists and artworks Arterial already has, is worth pursuing as core infrastructure, starting with replacing rented Artwork Archive with our own production-ready system.
2. **Fund a first phase** — a scoping & foundation engagement with Polymash that delivers:
   - **A migration plan & roadmap** — design docs to replace Artwork Archive, porting our submissions work into one consolidated database.
   - **A working proof of concept** — an embeddable gallery on our own infrastructure (Next.js + Supabase), live on our data.
   - **A promotable explainer site** — a website describing what the platform is, what it does, and who benefits — inviting inquiries, so Scott has something real to promote now.

Concrete, promotable deliverables — not a demo — before any larger build commitment. (Engagement terms are handled separately.)

## Relationship to Other Ideas

- **Idea 001 (Artist Directory)** — 009 is its successor. 001 framed the same data as a B2C subscription directory; research showed that model fights gravity. 009 reframes it as owned infrastructure and partner enablement, with monetization (e.g. the Sugar Press flywheel) as optional upside rather than the point.
- **Idea 004 (Multi-Tenant Curator Platform)** — shares the multi-tenant architecture pattern (base/tenant isolation, per-tenant config) and reuses the production vector/embedding stack from the Intersect curator.
- **`artwork-archive` repo** — the existing Rolling Submissions System (n8n + Airtable + AI enrichment → Artwork Archive CSV export) is the pipeline that already assembles the dataset 009 would own and build on.
