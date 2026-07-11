# Research Brief: Structured, Adaptive, Section-by-Section AI Interview System

For gathering the content of a non-profit annual impact report. AI asks text questions + adaptive follow-ups; human answers by voice; progress tracked per report-section with durable storage.

Sources: Perplexity `sonar-reasoning-pro` / `sonar` sessions, 2026-07-03, plus canonical vendor/research URLs captured below.

---

## Q1. Adaptive follow-up generation in AI interview systems

**Vendor implementations are proprietary; the documented pattern is competency/rubric-driven scoring + LLM completeness judgment + coverage tracking.** HireVue's On-Demand interviews show a text prompt, give prep time, record one spoken answer per question, then transcribe and analyze against employer-prioritized traits — but probes are *pre-authored into the question set*, not chosen dynamically. HireVue leans on behavioral questions and the STAR framework (Situation-Task-Action-Result) as its rubric.
- HireVue on-demand + STAR: https://www.hirevue.com/blog/candidates/how-to-answer-star-interview-questions ; overview https://www.hirevue.com/platform/on-demand-video-interviewing

**Four techniques that produce adaptive probes (industry practice, LLM-based interviewers):**
1. **Rubric/competency-driven probing.** Each question maps to competencies with behavioral indicators. After transcription, the LLM scores evidence per competency (e.g. 0-5). If evidence for a target competency is missing/ambiguous, fire a probe scoped to that competency ("What actions did *you* personally take, and what was the outcome?").
2. **Depth / specificity checks.** Detect short, generic, or filler answers (length/density thresholds) and vague pronouns ("we did…"). LLM checks for STAR completeness — situation, task, actions, results present? — and probes for the missing element.
3. **Coverage tracking.** Maintain a coverage map of which topics/competencies are addressed / partial / untouched; after each answer, update it and either advance or insert a gap-filling probe. This is the direct extension needed for a *report-section* interview.
4. **LLM-judged completeness.** Feed {transcript, original question, rubric} to an LLM; return a summary, a completeness rating (partial / full / off-topic), and evidence snippets. Below-threshold → scoped follow-up.

**Rich vs. robotic (concrete design levers):**
- Contextualized follow-ups that quote the interviewee's own words, NOT canned "Please elaborate" after every answer.
- Reflective listening — briefly paraphrase before probing.
- Balance encouraging probes with occasional (sparing) challenging probes; keep tone curious not confrontational.
- Natural pacing, backchannels ("I see"), stable persona, and transparency that it's an AI. Qualitative-interviewing research (UvA) notes the *specific* probe tactic matters less than rapport and giving space for a complete answer.
- Robotic tells: follow-ups that ignore prior content, identical probes on every answer, no adaptation to confusion/emotion.

**Adaptive loop:** ask question → transcribe + analyze (STAR elements, competency evidence, completeness) → decide probe type (competency / depth / coverage) → generate human-like scoped probe → repeat until completeness + coverage thresholds met → advance.

**Source-quality flag:** Perplexity had NO vendor-specific detail on Ribbon AI, Micro1, Metaview, TheySaid, Retell.ai, or Vapi.ai — those were not in its index. Homepages: https://www.ribbon.ai/ (conversational AI interviewer), https://www.metaview.ai/ (interview notetaker). The techniques above are generalized best practice, explicitly flagged as inference by the model where it went beyond HireVue docs. Treat vendor claims as needing primary verification.

---

## Q2. Structuring the interview by sections with completion criteria

**Design as short, goal-based modules, each with an explicit stop rule.** Every section should declare: (a) what decision/report-section it feeds, (b) minimum evidence required, (c) maximum effort allowed (e.g. 2-3 follow-ups or ~10 min cap).

**Three-part completion criteria (combine them):**
1. **Structural** — all required questions answered, mandatory fields populated. Simple per-section checklist.
2. **Content-quality (AI-assisted)** — score each response against a section rubric on completeness, specificity, relevance. Example rule: "Mark complete when ≥1 response scores ≥3/5 on completeness, specificity, and relevance, all required prompts answered, and no rubric element flagged missing."
3. **Redundancy / diminishing-returns** — track semantic similarity between answers in a section; if a new answer is near-duplicate, suggest moving on. Practical caps: max 2-3 follow-ups per question; cap total time per section; stop early when new questions only yield duplicate content.

**Non-linear navigation + resume:** treat the interview as a wizard. Show a section list (current highlighted, completed check-marked, optional labeled); allow skip-and-return, forward/back without data loss, and a "needs more thought" flag. Don't hard-block progression except where legally/critically required. Autosave every response + section status; on return show a progress bar and resume at last incomplete section. Offer explicit break points between major sections; on resume after a long pause, give a brief recap.

**Segment length / fatigue (this is the citable evidence):**
- **SurveyMonkey:** drop-off increases with each added question; completion rate declines as length grows (relationship non-linear, sharpest effects building toward ~15 questions). https://www.surveymonkey.com/curiosity/survey_questions_and_completion_rates/
- **Qualtrics:** surveys beyond ~12 minutes (desktop) / ~9 minutes (mobile) trigger drastic drop-off — *time* matters more than raw question count. https://www.qualtrics.com/articles/strategy-research/4-tips-for-preventing-drop-offs-in-surveys/
- **AI-interview platform practice:** typically 3-7 questions, ~30-60s prep + 1-2 min speaking each → ~15-20 min sessions.
- **Synthesis recommendation:** keep intensive open-ended sections to ~5-15 min built from multiple short 1-3 min prompts (not one huge prompt); factual sections <5 min; overall self-paced session estimated at ~20-25 min and splittable across 2-3 sittings. Use a small number of larger sections (3-5), each composed of short prompts. Fatigue effects: higher breakoff, satisficing (rushed/shallow answers), more "don't know."

**Flag:** the sharp numeric thresholds (12 min / 9 min) come from vendor blogs (Qualtrics, SurveyMonkey), not peer-reviewed studies; directionally consistent but treat as practitioner benchmarks.

---

## Q3. Text-question / voice-answer hybrid UX + latency + STT

**Voice works best as one modality in a multimodal UI, not standalone.** NN/g argues voice has "greatest promise as an additional component to a multi-modal dialogue, rather than as the only interface channel." On-screen text carries orientation/progress; voice carries input efficiency and comfort (natural for long-form answers). This lowers the need for sub-second *response* latency but not for UI responsiveness.
- NN/g voice/multimodal: https://www.nngroup.com/articles/voice-first/ (and related https://www.nngroup.com/articles/response-times-3-important-limits/)

**Latency expectations:**
- Human conversational turn-taking gaps are ~200-500 ms; users unconsciously benchmark against that. AssemblyAI cites ~200 ms as the target for voice-agent latency: https://www.assemblyai.com/blog/choosing-a-stt-api-for-voice-agents
- Practitioner thresholds: <300 ms feels instant; 300-1000 ms still snappy; >1 s feels sluggish for assistant-style turns.
- **For a capture app (no live turn-taking):** UI-state reactions (start/stop recording, "answer recorded", stop-detection feedback) should aim <300-500 ms so it feels like a normal app tap. Transcript/summary delivery can take seconds-to-minutes IF you set expectations ("Transcript ready in ~1-2 min") and show progress states.

**Async/batch STT vs streaming — batch is the right default here:**
| | Async/Batch | Streaming |
|--|--|--|
| Latency | seconds-to-minutes after upload | sub-second partials |
| Accuracy/formatting | usually higher (full context → better punctuation, segmentation) | comparable words, noisier interim, weaker formatting |
| Features | richer: diarization, summarization, topics, sentiment | fewer advanced features |
| Integration | simple upload→transcript, easy retries | WebSockets, reconnection, buffering, backpressure |
| Use when | post-hoc transcript/analysis (this app) | live captions, real-time adaptive prompts, compliance |

Recommendation: **async/batch STT as the default**; add streaming only for live captions (accessibility), real-time follow-up suggestions, or live compliance. Hybrid option: stream low-bitrate for live UX while keeping a high-quality recording for batch re-transcription.

**AssemblyAI capabilities (from AssemblyAI docs — verify at source):**
- Async (pre-recorded) STT: high accuracy, auto punctuation/casing, word/sentence timestamps. https://www.assemblyai.com/products/speech-to-text , docs https://www.assemblyai.com/docs
- Speaker diarization / speaker labels (Speaker A/B/C) — reconstruct interviewer-vs-participant Q&A structure.
- Audio Intelligence: summarization, topic detection / auto-chapters, sentiment, entities, PII redaction.
- Streaming STT via WebSocket with partial/final transcripts, word timestamps, confidence.
- **LeMUR** — AssemblyAI's LLM layer over transcripts: Q&A, custom summary styles, classification, structured (JSON) extraction. Directly usable to map answers → report fields.

**Flag:** AssemblyAI feature/LeMUR details came from the model's training knowledge of AssemblyAI docs, not live doc snippets — confirm current API surface at docs.assemblyai.com before relying on specifics.

---

## Q4. Durable state architecture for multi-turn interview capture

**Core principle: treat the LLM as stateless; persist ALL interview state in your own schema.** Do not rely on ephemeral chat-session memory. Azure agent-orchestration guidance: for long-running/multi-interaction workflows, store task progress, intermediate results, and conversation history in a durable store. Fastio state-persistence guidance: use database checkpointing + event sourcing (append-only log of state changes).
- Azure orchestration patterns: https://learn.microsoft.com/en-us/azure/architecture/ai-ml/guide/ai-agent-design-patterns
- Fastio long-running agent state: https://fast.io/blog/ (state-persistence pattern; general reference)

**Recommended schema (works in Airtable OR Postgres):**
- **Interviews** (instance): `interview_id`, `report_year`, `template_id`, status (`not_started|in_progress|completed`), timestamps, overall summary, completion %.
- **Sections** (per report-section): `section_id`, `interview_id`, name, `sequence_number`, status (`not_started|in_progress|completed|skipped`), `total_questions`, `answered_count`, `completion_pct`, `section_summary`, `last_turn_id`.
- **Questions**: `question_id`, `section_id`, prompt text, type, rubric, order.
- **TranscriptEvents / Turns** (append-only log — the resumability backbone): `turn_id`, `interview_id`, `section_id`, `question_id`, `role` (system/assistant/user), `content`, `created_at`, model metadata, `asset_ids`.
- **Assets / Media**: `asset_id`, links to interview/section/turn, type (photo, chart, quote, audio), storage reference + metadata (for the impact-report's photo/figure selections).
- Derived/extracted facts table for long-term "org facts" populated by LLM extraction.

**Checkpoint at boundaries** (end of question / section / interview), not every micro-step. Log state-change events ("SECTION_STARTED", "ANSWER_RECEIVED", "SECTION_COMPLETED") so current state can be replayed — event sourcing.

**Is Airtable reasonable? Yes, at this scale — with caveats.** Airtable models this well via linked records, single-select statuses, formula fields for completion %, rollups, attachments for small assets, and filtered views the agent queries per turn.
- **Airtable limits (official + documented):**
  - Records per base by plan: Free = 1,000; Team = 50,000; Business = 125,000; Enterprise = 500,000. https://support.airtable.com/docs/airtable-plans
  - API rate limit: **5 requests/second per base** (429 + 30s lockout on breach). https://support.airtable.com/docs/managing-api-call-limits-in-airtable
  - Attachments: per-file and per-base storage caps; keep large media in external object storage and store URLs only.
  - No ACID transactions, no arbitrary SQL/joins beyond linked records, limited analytics.
- **Mitigations for Airtable:** log only key events (not every micro-step); batch reads/writes; cache section/template definitions in the app; archive completed interviews; offload raw audio/large files to object storage.
- **Postgres/Supabase preferable if:** high concurrency, robust event-sourcing with transactions, complex cross-section analytics, or native vector search (pgvector) over answers. Fastio/Azure guidance favors Postgres for production agent state.
- **Common hybrid:** Postgres/Supabase as canonical store + Airtable as human review/management UI. **For a single non-profit's annual report (one interview, tens of sections, hundreds of turns/year), Airtable alone is comfortably within limits** and gives non-technical staff a friendly review surface.

---

## Q5. Turning interview transcripts into structured report sections

**The documented pattern is a multi-step pipeline: segment → schema-driven extraction (JSON) → coverage/gap pass → follow-up generation → narrative synthesis.**

1. **Transcribe + clean** (ASR with diarization; LLM cleanup pass to strip timestamps, normalize).
2. **Segment by topic/question** so chunks align to report sections and fit context (keyword/topic-shift detection or recursive splitters).
3. **Define a schema mapped to report sections.** Encode the report template as a machine-readable schema (JSON / Pydantic dataclasses) — each field = a report section/subsection. Research systems define each information type as a dataclass with descriptions and use constrained decoding for valid JSON.
4. **LLM extraction into the schema.** Prompt with {role/context, instructions ("if not mentioned, return null; do not hallucinate"), strict JSON output}. Because the schema IS the report structure, extracted data is already section-mapped.
5. **Coverage / gap flagging.** Compare required fields to what got filled; flag nulls/empty arrays/low-confidence. Explicit QA prompt: "Mark each field present / partially present / missing; for missing, explain what evidence is lacking." Redundancy prompt to catch missed items: "List any additional [items] that may have been missed, including subtle/implied ones."
6. **Generate "what's still missing" follow-ups.** Feed the gap report back: "For each missing field, write 1-2 follow-up interview questions to elicit the needed information." — closes the loop back to Q1's adaptive probing.
7. **Narrative synthesis.** Second prompt turns filled JSON into prose per section ("Write the 'Program Impact' section from these extracted points and quotes"). Multi-pass for multiple interviews: per-interview extraction → cross-interview synthesis → final sections.
8. **Human review:** ground-truth benchmark on a sample, spot-check 10-15%, review edge cases, version prompts.

**Tools/platforms doing parts of this:**
- AssemblyAI LLM gateway / LeMUR: audio → transcription → diarization → structured LLM extraction (summaries, action items, custom schemas). https://www.assemblyai.com/docs/lemur
- Refuel.ai: upload transcript dataset, define per-field extraction instructions, set JSON output, correct outputs, deploy for real-time analysis. https://www.refuel.ai/
- LangChain splitters (RecursiveCharacterTextSplitter) for chunking. https://python.langchain.com/docs/
- Vector DBs (Pinecone/Weaviate/pgvector) for cross-interview theme retrieval.
- Research: neuro-symbolic vs LLM variable-value extraction from interview transcripts (Pydantic schema + constrained decoding = qualitative coding into a codebook).

**Key design tips:** start from the schema (report sections + what counts as evidence per field); segment prompts; enforce structure via JSON not free-form summarization; build explicit completeness checks; turn gaps into follow-ups; keep human oversight.

**Flag:** Q5 sources were mostly practitioner blogs, tutorials, and one research project — the model could not surface exact URLs for several ([1]-[7] unresolved). The *pattern* is well-corroborated across sources; specific tool URLs above are canonical homepages/docs, some reconstructed from model knowledge — verify Refuel/LeMUR paths before citing in a deck.

---

## Cross-cutting source-reliability notes
- Strongest citable facts: Airtable limits (official support docs), survey drop-off thresholds (Qualtrics/SurveyMonkey vendor data), AssemblyAI 200ms/latency framing (AssemblyAI blog), NN/g multimodal-voice stance.
- Weakest / needs primary verification: all named-vendor adaptive-probe *mechanisms* (Ribbon, Micro1, Metaview, TheySaid, Retell, Vapi — absent from index); AssemblyAI LeMUR exact API surface; several Q5 tool URLs.
- `sonar-reasoning-pro` refused to inline URLs in prose (policy quirk) — URLs above were recovered via a follow-up `sonar` citations pass; a few citation numbers in the raw responses remain unmapped.
