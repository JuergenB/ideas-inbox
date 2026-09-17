# Idea 017: Campaign Sequence Tool - From a Campaign Plan to the Emails That Go Out

**Origin:** Juergen Berkessel (Polymash), for Arterial - 2026-09-16
**Status:** Discussion - three approaches laid out, one recommended as an opening position
**Related:** [Idea 016 - Arterial's Fall Fundraising Campaign](../016-arterial-fall-fundraising-campaign/) (the campaign this would first run) · [Problem 004 - The Data Engine](../../problems/004-arterial-campaign-data-engine/) (the list work underneath it) · [Idea 007 - PolyWiz Paid Ads Engine](../007-polywiz-paid-ads-engine/) (the same "extend Polywiz or not" question, asked of ads)

---

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/017-campaign-sequence-tool/exports/campaign-sequence-tool-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/campaign-sequence-tool-slide-1.png" width="820" alt="From a campaign plan to the emails that go out - click to open the full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/017-campaign-sequence-tool/exports/campaign-sequence-tool-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/017-campaign-sequence-tool/exports/campaign-sequence-tool.html)
**📄 Slide deck (PDF):** [exports/campaign-sequence-tool.pdf](exports/campaign-sequence-tool.pdf) - download for print or offline.

## TL;DR

Arterial's fundraising, and everything after it, runs on email sequences: a
welcome run, nurture emails when a programme has news, a three-act appeal in the
autumn, a thank-you when someone gives, a "we miss you" when someone goes quiet.
The consultants write the plan, Scott records the video, the list is clean and
scored, Polywiz can write in our voice, ActiveCampaign can send. What connects
them today is one person, by hand.

The question is whether a tool can take a campaign concept, understand the brand
and the uploaded material, and produce the sequences, timings, audience
variations and emails on a timeline people can edit, then get them into
ActiveCampaign as drafts. And whether that belongs inside Polywiz, on its own,
or as a kit of parts we already own.

## What the research settled

**There are two problems, not one.** The arc (brief in, sequence out) is where
the value is and is the same work whatever sends the email. The delivery
(sequence into ActiveCampaign) is bounded and partly a hard wall. Every approach
keeps them apart.

**The sequence shapes are published.** Welcome runs, appeals, new-donor and
lapsed sequences all have documented email counts, spacing and purposes
(NextAfter, Bloomerang, GivingTuesday). A generator proposes the shape; the
operator edits it; the model never invents structure.

**The evidence on what raises money points away from "make it beautiful".** A
named sender, plain text, one link and a weekly cultivation email each carry a
measured lift. The consultants' plan already says the same.

**ActiveCampaign will let a machine build broadcasts, not automations.** A
one-off email can be created in draft by API with its content, list, segment
and send date. No API in either version creates, edits, copies or imports an
automation. Since October 2025 the vendor's own in-app agent drafts a whole
automation from a pasted paragraph, with no API of its own. So: our tool writes
the brief and the emails; a person pastes the brief into their agent for the
flow; our tool replaces the copy.

**"Stop asking once they give" does not need a new automation.** For scheduled
sends, the segment decides at send time on a donor tag. For triggered flows, one
goal step built once. Both depend on the tag being applied on every donation
path, which Donately's Zapier mapping does not yet do.

**Nobody sells this shape.** Everything that builds sequences builds them inside
its own sender. Nothing takes a brief plus documents, writes per-segment
sequences on a timeline, and drafts them into ActiveCampaign.

**Most of the arc side already exists somewhere**: brand voice, document intake,
a campaign arc, Auctor, preview-and-edit screens, an ActiveCampaign client, an
email-drafting workflow with three hard-won guardrails. What exists nowhere is a
stored sequence, email rendering, an ActiveCampaign link outside one repo, video
intake, a per-brand gate, and a timeline with segments as rows.

## The three approaches

| | A · Polywiz tab | B · Own tool | C · Kit |
|---|---|---|---|
| Teammates preview and edit without Juergen | In an app they use | In a new app | In an offline page |
| Reuses brand voice and document intake | Directly | Copied | Fetched |
| Clutters Polywiz | Gated, some risk | None | None |
| Time to first real sequence in ActiveCampaign | Months | Months | Weeks |
| Feeds the "chatbot that understands the project" end state | Indirectly | Indirectly | Directly |
| Delivery into ActiveCampaign | Identical across all three | | |

**The opening position: build C now, and let it earn A.** A sequence file, a
generator, an offline review page with a timeline, a script that drafts calendar
sends into ActiveCampaign, and a build sheet for the four always-on flows. Used
once on the real autumn campaign. Then, if it holds, wrapped in Polywiz as a
gated tab. A tool of its own only if the Polywiz fit fails on evidence.

## The questions

Eight that one person can answer now (the brief, the first four segments, the
donor tag, which brand record, Auctor for the asks, where the key lives,
plain text by default, and whether the real campaign is the right first test).
Seven for the team that may not get an answer in one sitting (who approves, how
much the tool proposes versus executes, who may enable a send, whether podcast
guests are asked to give or only to share, whether Artsville is in scope, what
the major-gift track is owed, and whether a Polywiz tab is worth its clutter).

## Where the working repo lives

`JuergenB/arterial-fund-raising-helpers` (private): the deck source, the full
discussion paper with sources, the ActiveCampaign research, and the scripts.

## Source

[presentations/campaign-sequence-tool.md](presentations/campaign-sequence-tool.md).
Re-publish with `node scripts/publish-deck.mjs 017-campaign-sequence-tool`.
