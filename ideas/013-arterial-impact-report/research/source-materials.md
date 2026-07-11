# Idea 013 — Source Materials Index

An annotated index of all research feeding this idea. Some materials are **copied into this folder** (self-contained, GitHub-visible); others are **linked** to their home in this repo.

---

## A. New research commissioned for this idea

- **[interview-systems-research.md](interview-systems-research.md)** — ✅ Best practices for adaptive AI interview systems: follow-up generation (rubric + coverage tracking + LLM completeness judgment), section-by-section structure + stop rules, text-question/voice-answer UX + latency, durable multi-turn state architecture (Airtable fits at this scale; schema + limits), and transcript→section conversion (report template *as* the extraction schema).
- **[wireframe-tooling-research.md](wireframe-tooling-research.md)** — ✅ The "MARP-for-wireframes" landscape: no official Claude wireframe skill (community `yhassy/wireframe-skill` is the closest analogue); the wireframe tools you likely *own* (Balsamiq/Whimsical/Moqups/Visily) have **no creation API**; API-capable set = Excalidraw, tldraw, Figma (Dev Mode MCP, beta), Miro, Penpot; **v0 Platform API** (Vercel, beta) emits Next.js+shadcn natively. Verdict: **build a small markdown/DSL→wireframe skill** (path a), v0 as optional backend.
- **[501c3-public-support-fundraising.md](501c3-public-support-fundraising.md)** — ✅ IRS public-support test (§170(b)(1)(A)(vi) & §509(a)(2)), the 2% donor cap, the 5-year rolling window, "tipping" consequences, and what it means for Arterial's fundraising mix. Confirms: many small donors beat a few big gifts, and founder self-funding *lowers* the public-support ratio. Not legal advice — confirm §-level calls with a nonprofit CPA.

## B. Prior interview / voice-capture research already in this repo (linked)

These three ideas established the AI-interview method this idea reuses. Links resolve on GitHub.

- **[Idea 005 — Voice Interviews vs. Email Forms](../../005-ai-voice-surveys-vs-email-forms/)** — the anchor thesis + evidence (≈95% completion, 2.5–8× richer answers). See its [sources.md](../../005-ai-voice-surveys-vs-email-forms/research/sources.md).
- **[Idea 002 — PolyWiz / Vista Growth](../../002-polywiz-demo-vista-growth/)** — the reusable **interview-protocol** template ([interview-protocol.md](../../002-polywiz-demo-vista-growth/presentations/interview-protocol.md)) and AI-interview-platform research ([research-ai-interview-platforms.md](../../002-polywiz-demo-vista-growth/research/research-ai-interview-platforms.md)) — Retell.ai, Vapi.ai, TheySaid, Ribbon AI comparison + pricing.
- **[Idea 001 — Artist Directory](../../001-artist-directory/)** — deeper AI-interview research ([research-ai-interviews-for-artist-directory.md](../../001-artist-directory/research/research-ai-interviews-for-artist-directory.md)) + the "conversational capture as un-scrapable data" argument.

## C. Arterial ecosystem + impact-report research (copied from the `arterial-impact-report` repo)

Copied from the sibling `arterial-impact-report` GitHub repo (frozen since 2026-03-16) so this idea is self-contained. Provenance: `JuergenB/arterial-impact-report` → `docs/knowledge/`, `docs/context/`, `docs/reference/`.

In [`arterial-source-research/`](arterial-source-research/):
- **research-summary.md** — master synthesis: priority-ordered ecosystem map, key people, quantifiable impact metrics (for the "Year at a Glance" section), partnerships, and the `[VERIFY]` list.
- **arterial-org-research.md** — Arterial.org, Scott Power, Joshua Wattles, Crewest, PBS, financials.
- **not-real-art-research.md** — NRA podcast, grants, school, First Friday, Q+ART, Remote, artist database.
- **arthouse-research.md** — Arthouse TV series, Fractured Atlas, production team, distribution.
- **artsville-usa-research.md** — Artsville USA, New Orleans galleries, "Tale of Two Cities."
- **artwork-archive-research.md** — the AI submission pipeline (n8n/Airtable) behind First Friday.
- **arterial-subprojects-research.md** — Classic Black, Underbelly, Good Art, Arterial Radio, Ready To Roll.
- **google-rag-tools-research.md** — *historical:* the RAG/Pinecone/Gemini analysis. Kept as the record of the approach this idea deliberately sets aside (RAG belongs to [Idea 009](../../009-arterial-owned-platform/), not the impact report).
- **rag-video-transcript.txt** — *historical:* the RAG walkthrough video transcript that inspired the original (now-parked) RAG direction.
- **arterial-project-background-chat.md** — the original design conversation that shaped the March impact-report concept (Art21 analysis, content inventory, Astro vs. Next.js, CMS vs. vibe-coding, RAG vs. simpler loading).

In [`reference/`](reference/):
- **Art21-Impact-Report-FY24.pdf** — the best-practice reference report. Its section anatomy is the template to reverse-engineer the interview protocol from.

## D. Related but distinct ideas (context, not source)

- **[Idea 009 — Arterial's Owned Platform](../../009-arterial-owned-platform/)** — the *operating platform* play (submissions/exhibitions/discovery), where a vector/RAG engine legitimately lives. Idea 013 is deliberately narrower and separate: a recurring fundraising/website artifact, interview-driven, no RAG.
