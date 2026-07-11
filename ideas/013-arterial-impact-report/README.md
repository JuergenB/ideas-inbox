# Idea 013: Arterial Impact Report — Interview-Driven, Recurring

**Origin:** Juergen Berkessel (Polymash), for Arterial — 2026-07-03
**Status:** 🚧 Scaffolding — design in active discussion (this README is a working stub, **not** the discussion paper)
**Distinct from:** [Idea 009 — Arterial's Owned Platform](../009-arterial-owned-platform/) (the operating-platform play; this is a narrower, separate deliverable)
**Draws on:** the frozen [`arterial-impact-report`](https://github.com/JuergenB/arterial-impact-report) repo (March 2026 research) + interview method from [Ideas 001](../001-artist-directory/) / [002](../002-polywiz-demo-vista-growth/) / [005](../005-ai-voice-surveys-vs-email-forms/)

---

> **This folder is a scaffold.** It exists to preserve research and the settled framing while the design is still being talked through. The full discussion paper (and any deck) come after the open questions below are resolved. No project plan yet, by direction.

## What this idea is (settled framing)

A **web-based annual impact report for Arterial** (a 501(c)(3)) — the kind of visually rich, scroll-driven report an organization like Art21 produces, built as a fast interactive website rather than a static PDF. Its purpose is **fundraising and public credibility**, listed on Arterial's site.

Two things make this idea distinct from how it was originally conceived in the March `arterial-impact-report` repo:

1. **It's a recurring deliverable** — produced **at least once a year, possibly twice.** So the goal is a durable *system* that yields a fresh report each cycle, not a one-off build. Content and structure persist across editions; each cycle refreshes the narrative.
2. **The content engine is interviews, not RAG.** The original repo bolted a persistent Pinecone/FireCrawl/n8n **RAG knowledge base** onto what is really a bounded, ~15-section narrative document — overkill. That RAG belongs to [Idea 009](../009-arterial-owned-platform/). Here, the report's narrative (founder's letter, program stories, testimonials, "why this mattered") is captured by **interviewing Scott** — content that only exists in his head and that no scraper can produce.

## The content engine (working concept — under discussion)

A **durable, section-by-section, conversational report builder:**

- **Hybrid interface:** the agent asks in **text** (questions + adaptive follow-ups, kept snappy — no TTS latency); **Scott answers by voice**, transcribed via **AssemblyAI**.
- **Section by section:** the report is broken into sections (mission/tenets, founder's letter, year-at-a-glance metrics, program highlights, testimonials, financials, looking ahead…). Each is its own focused pass — better for attention span and cognitive load.
- **Per-section completion status** that fills in as *enough* detail is collected (coverage against that section's target questions).
- **Slick navigation** of the report-in-progress — jump between sections, review, revise (Scott is UI-finicky).
- **Per-section asset selection** — Scott places images in a folder and assigns them to sections/spots.
- **Durable archive, not session memory** — full conversations, transcripts, completion state, and asset links persisted in a solid store (Airtable-leaning for v1; Supabase/Postgres a later option).
- **Protocol reverse-engineered from best-practice reports** — analyze Art21 (+ peer 501(c)(3) arts reports) to distill section anatomy into Scott's question set.
- **Existing research as factual scaffolding** — the six ecosystem research files (copied into `research/`) supply the facts/metrics; interviews supply the voice; the asset folder supplies visuals; Art21 supplies the structure.

**Provisional data shape:** `Report (1) → Section (many; status + coverage) → Turn (many; text Q + audio/transcript A) → Asset (many; images per section)`.

## Decisions locked (2026-07-03)

- **Reach:** **Arterial-first, architected for reuse** — the paper centers Arterial's recurring report as the concrete case, but the interview-driven builder is designed so it could serve other orgs later (the 002 white-label pattern).
- **March `arterial-impact-report` repo:** stays **frozen as a research quarry** (we've copied what we need into `research/`); a fresh build happens here on a green light — no revive/rename.

## Open questions (pending — some await the interview-systems research)

- **Engine:** custom build (Next.js/Supabase boilerplate + AssemblyAI) vs. evaluate/adopt an existing voice-interview platform vs. hybrid.
- **Interview richness:** fixed structured protocol vs. **live adaptive follow-ups** (HR-interview-style probing) — and the latency/UX implications.
- **Audience of the discussion paper:** Scott-facing alignment doc, or internal Polymash thinking-through first.

## Research

All background is gathered in [`research/`](research/) — see **[source-materials.md](research/source-materials.md)** for the annotated index (new Perplexity research on interview-system design, the prior interview ideas 001/002/005, the copied Arterial ecosystem research, and the Art21 reference report).
