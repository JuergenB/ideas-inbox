# Arterial 2026 — the data engine

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/problems/004-arterial-campaign-data-engine/exports/campaign-systems-briefing-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/arterial-campaign-data-engine-slide-1.png" width="820" alt="Arterial 2026: the data engine — click to open the full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/problems/004-arterial-campaign-data-engine/exports/campaign-systems-briefing-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/problems/004-arterial-campaign-data-engine/exports/campaign-systems-briefing.html)
**📄 PDF:** lives in the working repo at `docs/presentations/campaign-systems-briefing.pdf`. PDFs under `problems/` are gitignored here by convention.

---

## What this is

A team briefing on what we found inside Arterial's own ActiveCampaign account,
and what it changes for the 2026 fundraising campaign. 25 slides.

**Everything in it was measured against the live account. Nothing was written
back.** No field created, no value written, no tag applied.

## The findings that matter

**We only email two thirds of our own list.** 3,800 of 5,646 people. The other
1,846 are excluded by one setting: an email-checking service would not call them
a guaranteed delivery.

**That caution is not justified by the evidence.** Five contacts on the list have
*ever* hard bounced. Five. And 84% of the flagged addresses we examined were
confirmed *valid* by the very service that flagged them.

**One artist opened 543 of the 584 emails we sent him and clicked 22 times.** We
sent him 102 emails in 2025 and seven in 2026. He is flagged, so he drops out of
every send that filters on the flag.

**Four in ten recorded "opens" are Apple Mail, not a person**, which makes our
open rates look about 70% better than they are. Separating the two is what makes
a genuine engagement score possible.

**The top 25 artists by audience and the top 25 by engagement share zero people.**
Our biggest Instagram account, 263,372 followers, has never clicked anything we
sent. Our most engaged artist has 845 followers and has clicked sixteen times.
That means two different jobs, not one.

## Where the working repo lives

`JuergenB/arterial-fund-raising-helpers` (private) — the tooling, the API
research, the design documents and every measurement behind these slides.

## Source

[presentations/campaign-systems-briefing.md](presentations/campaign-systems-briefing.md).
Re-publish with `node scripts/publish-deck.mjs problems/004-arterial-campaign-data-engine campaign-systems-briefing`.
