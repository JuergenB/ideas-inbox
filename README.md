# Ideas Inbox

Cross-project ideas inbox for **Arterial**, **Not Real Art**, **Artsville USA**, and **Polymash** initiatives. This repo captures, researches, and evaluates new ideas before they become their own projects.

## New here? What this actually is

If this looks like a "presentation archive" with a clunky interface, this 5-minute deck reframes it — GitHub is the world's software-development platform, and our ideas live here so they're preserved, versioned, and ready to hand off to any developer the moment one graduates into real software.

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/about/github-explained/exports/github-explained-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/github-explained-slide-1.png" width="820" alt="What GitHub Really Is — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/about/github-explained/exports/github-explained-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/about/github-explained/exports/github-explained.html)
**📄 Slide deck (PDF):** [about/github-explained/exports/github-explained.pdf](about/github-explained/exports/github-explained.pdf) — download for print or offline.

## How It Works

1. **Capture** — New ideas arrive (from Scott, from team discussions, from market observations) and get an epic issue + a numbered folder
2. **Research** — Background research, market analysis, and feasibility assessment are documented in the idea's folder
3. **Evaluate** — Discussion happens in GitHub issues; go/no-go decisions are tracked
4. **Graduate** — Ideas that pass evaluation get their own repository and project plan

## Structure

Each idea folder keeps only `README.md` at the root so it's immediately visible on GitHub. Everything else is organized into subfolders:

```
ideas/
├── 001-artist-directory/
│   ├── README.md              # Discussion paper
│   ├── presentations/         # Slide deck sources
│   ├── research/              # Market research documents
│   └── exports/               # PDF, HTML, PPTX exports
├── 002-polywiz-demo-vista-growth/
│   ├── README.md              # Discussion paper
│   ├── presentations/         # Decks + slide images
│   ├── research/              # Interview platform research
│   ├── docs/                  # Meeting invite, communications
│   └── exports/               # PDF + HTML exports
├── 003-podcast-website-automation/
│   ├── README.md              # Market research & product discussion
│   ├── presentations/         # Advisory deck + slides
│   ├── research/              # (future research docs)
│   ├── docs/                  # Cover email, communications
│   └── exports/               # PDF exports
└── ...
```

Meta content about the archive itself (not an idea) lives under [`about/`](about/) — e.g. the "What GitHub Really Is" orientation deck linked above.

## Current Ideas

| # | Idea | Status | Origin | Date |
|---|------|--------|--------|------|
| 001 | [Artist Directory / Gallery Platform](ideas/001-artist-directory/) | Research & Discussion | Scott Power | 2026-04-10 |
| 002 | [PolyWiz Demo & Vista Growth Pitch](ideas/002-polywiz-demo-vista-growth/) | Presentation Ready | Juergen Berkessel | 2026-04-11 |
| 003 | [Podcast Website Automation](ideas/003-podcast-website-automation/) | Research & Discussion | Lindo.ai / Emma | 2026-04-13 |
| 004 | [Multi-Tenant Curator Platform](ideas/004-multi-tenant-curator-platform/) | Research & Discussion | Juergen Berkessel | 2026-04-21 |
| 005 | [Voice Interviews vs. Email Forms](ideas/005-ai-voice-surveys-vs-email-forms/) | Presentation Ready | Juergen Berkessel | 2026-04-22 |
| 006 | [Presentation Viewer Site for Ideas Inbox](ideas/006-presentation-viewer-site/) | In Progress | Juergen Berkessel | 2026-04-22 |
| 007 | [PolyWiz Paid Ads Generation Engine](ideas/007-polywiz-paid-ads-engine/) | Research Complete — Awaiting Go/No-Go | Juergen Berkessel | 2026-04-25 |
| 008 | [Paywall Viability for NotRealArt.com](ideas/008-paywall-viability-notrealart/) | Research & Discussion — Recommend No | Scott Power / Juergen Berkessel | 2026-06-01 |
| 009 | [Arterial's Owned Platform](ideas/009-arterial-owned-platform/) | Research & Discussion | Juergen Berkessel (Polymash) | 2026-06-08 |
| 010 | [Guideless Pricing & Tier Strategy](ideas/010-guideless-pricing-strategy/) | Ready to Send | Juergen Berkessel (Polymash) / Rokas @ Guideless | 2026-06-12 |
| 011 | [Owned Promotion & PR Engine (PressRanger as one input)](ideas/011-pressranger-outreach-playbook/) | Research & Discussion — Recommend Pilot | Juergen Berkessel (Polymash) / Scott Power | 2026-06-12 |
| 012 | [Simplest Podcast Launch (Riverside + Spotify)](ideas/012-simplest-podcast-launch/) | Research & Discussion | Juergen Berkessel / Dr. Lynda Klau | 2026-07-02 |

## Current Issues

Technical issue write-ups for active client and project work — separate from ideas. Each brief is self-contained with root-cause analysis, implementation plan, and acceptance criteria for the team or vendor resolving it. See [`problems/`](problems/) for the index.

| # | Issue | Subject | Status | Date |
|---|-------|---------|--------|------|
| 001 | [Curated.co deliverability + cross-domain SPF/DKIM audit](problems/001-curated-deliverability-nra/) | Not Real Art / Crewest Studio domains | Open — awaiting vendor | 2026-04-19 |
| 002 | [Claude Code coding quality regression — global rules audit, Karpathy integration, per-repo reconciliation](problems/002-claude-code-coding-quality/) | All active repos | Open — research complete, awaiting user decisions | 2026-04-27 |
| 003 | [ArtsvilleUSA press email via ActiveCampaign (+ notrealart.com DNS fix)](problems/003-activecampaign-newsletter-artsvilleusa/) | artsvilleusa.com setup + cross-domain deliverability | Ready to implement | 2026-07-08 |

## Idea Lifecycle

| Stage | Description |
|-------|-------------|
| **Captured** | Idea documented, initial research started |
| **Research & Discussion** | Market research complete, discussion paper written, awaiting team review |
| **Validation** | Active market testing (surveys, smoke tests, MVPs) |
| **Go / No-Go** | Decision made based on evidence |
| **Graduated** | Own repo created, implementation planned |
| **Parked** | Not now, but worth revisiting later |
| **Declined** | Evidence says no — documented why |
