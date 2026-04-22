# Idea 005: Voice Interviews vs. Email Forms

**Origin:** Juergen Berkessel, 2026-04-22
**Status:** Presentation ready — for office hours discussion
**Context:** Generalized from the interview-research threads in [Idea 001 — Artist Directory](../001-artist-directory/) and [Idea 002 — PolyWiz / Vista Growth](../002-polywiz-demo-vista-growth/). Written up as a standalone piece so it can be reused whenever a team or collaborator is about to send a traditional email-driven survey.

**📄 Slide deck (PDF):** [exports/deck.pdf](exports/deck.pdf) — open directly from GitHub to read or share.

---

## TL;DR

- When we say *"let's send a survey,"* we reach for a form in ActiveCampaign, Mailchimp, or HubSpot. Open rates are modest, click-through is smaller, completion is smaller still, and the answers are shallow.
- Replacing the form link with a link to a **short voice interview** changes the outcome dramatically: ~95% completion vs. 10–30% for email forms, and answers that are 2.5×–8× longer because the conversation probes and clarifies.
- Participants consistently report the voice experience as *better than the alternative* — including, counterintuitively, participants who are skeptical of the underlying technology (these interviews are AI-assisted; more on that below).
- **Near term:** rent a platform (TheySaid, Retell.ai, Ribbon AI) and swap the link in the invitation email. Same CRM orchestration, different destination.
- **Medium term:** build our own interview module (~30 engineering days) so we own the engine, the data, and the experience across every property and every client engagement.

---

## The Thesis

When someone says *"let's send a survey,"* the reflex is to build a form and route it through whatever email platform is already in place — ActiveCampaign, Mailchimp, HubSpot. The invitation goes out. A small fraction of recipients open it. A smaller fraction click through. A smaller fraction still actually complete it. And the answers that come back are short, shallow, and flat.

There is a meaningfully better approach that requires changing only one thing: the destination of the link. Instead of a form, the link opens a short **voice conversation**. The CRM orchestration stays identical. The completion rate, the response depth, and the participant experience change dramatically.

Three numbers do most of the work here:

- **95%** completion rate for voice interviews vs. **10–30%** for email-delivered forms
- **2.5×–8×** longer answers, because the conversation probes, clarifies, and branches
- **97.6%** satisfaction and **99%** would-recommend across a 1,250-interview study — disproportionately positive among participants who came in skeptical of the format

The last number is the one that matters most for our context. The framing is not *"the technology is cool."* It is: *"The people who are most skeptical going in are the ones who come out saying the experience was better than the alternative."*

---

## The Quiet Part

These voice interviews are AI-assisted. A language model conducts the conversation, probes for clarification, and produces a clean transcript plus a structured summary on the other side. That detail is worth naming directly — not leading with it.

Why: the strongest argument for this approach isn't novelty. It's that it *works better for the participant* — faster to complete, easier to speak freely into than to type into a form field, and (per the published data) preferred by participants who do not identify as enthusiasts of the underlying technology. The AI engine is the enabler, not the headline.

---

## Field Evidence

Beyond the academic and platform-published numbers, a colleague who runs a creative agency and employs a team of designers and graphic artists — a demographic not known for AI enthusiasm — reports that his staff, while job-hunting and going through AI-powered interviews elsewhere, consistently came back saying the experience was markedly better than either filling out a long-form application or sitting through a video interview. Despite an explicit stance against AI in their own work, they preferred AI in this role.

This aligns with the published data on candor: removing the "face" of a human interviewer removes the micro-reactions that cause people to filter their own answers. Participants speak more fully, feel less judged, and report back that they felt heard.

---

## Two Paths

### Rent It

Use a commercial platform and swap the link in the email.

| Platform | Pricing | Notes |
|----------|---------|-------|
| TheySaid | Free tier / $49/mo | Fastest on-ramp. Built for customer research. |
| Ribbon AI | $499/mo | REST API, explicit non-hiring use-case support. |
| Retell.ai | ~$0.07/min (~$1–1.50 per 15-min interview) | Pay-per-use engine, better economics at scale. |

**Time to first real interview:** 30 minutes (TheySaid) to 2 weeks (Retell integration).

### Build It

Stand up our own interview module — branded, embeddable, hostable on any of our properties. The voice engine is Retell.ai or Vapi.ai; the surrounding experience, data pipeline, and reporting are ours. Roughly 30 days of build time using the Polymash boilerplate approach that produced PolyWiz.

**Why this matters beyond any single survey:**

- **Per-interview cost drops** to the Retell.ai API rate (~$1.50 per 15 minutes) with no platform subscription.
- **Data ownership is complete.** Every transcript, every extracted field, every sentiment score lives in our Supabase/Airtable — not on someone else's platform.
- **The module is reusable across every property we run.** The same engine powers every intake conversation we will need for the next two years.

### Cross-Platform Applications

A single, well-built interview module unlocks:

- **Artist directory submissions** — automatic follow-up conversation after an artist submits work, enriching the directory profile with material no form could capture
- **B2B qualification** — interior designers, art consultants, corporate art programs
- **Pricing studies** — Van Westendorp and willingness-to-pay work done conversationally instead of as surveys
- **Collector onboarding** — preference capture that is qualitatively different from a checkbox form
- **Grant-application impact interviews** — scalable qualitative evidence for NEA, Knight, Bloomberg submissions
- **Podcast guest pre-interviews** — structured prep content
- **Post-event feedback** — wrap-ups for office hours, workshops, launch events
- **Advisory audit intake** — Vista Growth–style readiness assessments delivered as a self-service qualification tool

The build is one thing. The return is everything that rides on top of it.

---

## Recommendation for the Near Term

The "build it ourselves" path is not feasible for a survey that needs to go out in the next few days. For that, renting a platform (TheySaid free tier, or a short Retell.ai flow) is the right call — same ActiveCampaign invitation, different destination, substantially better data.

The larger recommendation is that **we should build the module.** One engineering effort, on the order of thirty days, produces infrastructure that will be used across every property and every client engagement we have. The commercial platform work we do before then becomes the research and the requirements document for what we build.

---

## Research Sources

- [Idea 002 Research — AI Interview Platforms for Lead Qualification & Self-Assessment](../002-polywiz-demo-vista-growth/research/research-ai-interview-platforms.md) — platform landscape, build-vs-buy, video-vs-audio, case studies
- [Idea 001 Research — AI Interviews for the Artist Directory](../001-artist-directory/research/research-ai-interviews-for-artist-directory.md) — applied use cases and phased implementation plan
- Anthropic Interviewer — 1,250-interview study across workforce, scientific, and creative populations
- User Intuition — 30,000+ interview findings on candor and removing the face of the interviewer
- NTRVSTA, RivalTech, Specific.app — completion-rate benchmarks across modalities

---

## Presentation

- Source: [presentations/deck.md](presentations/deck.md)
- PDF export: [exports/deck.pdf](exports/deck.pdf)
