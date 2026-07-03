# Platform Research — Simplest Podcast Launch (July 2026)

Full research write-up behind idea 012. This is the detailed/background layer; the deck is the
layperson summary and `sources.md` is the per-claim citation index. Research conducted July 2026
via primary sources (riverside.com, support.spotify.com, creators.spotify.com) cross-checked
against third-party reviews. Confidence flags at the end.

The guiding question: **what is the fewest-clicks, least-technical path for a non-technical
person to go from "record a remote interview" to "episode is live on Spotify & Apple," with no
file downloading and no separate host?** The answer as of mid-2026 is **Riverside.fm as an
all-in-one record→edit→host→publish tool, paired with free Spotify for Creators for
distribution.**

---

## 1. Riverside built-in hosting + RSS — VERIFIED

Riverside evolved from a recording tool into a production+hosting suite. It now hosts the podcast
and generates the RSS feed itself, removing the old "download the file, re-upload to a host"
step. Riverside's page: *"Get an RSS feed and publish your podcast straight to top directories
like Spotify, Apple Podcasts, YouTube,"* with ready-made show notes/transcriptions per episode
and built-in analytics.

- **Launch timing:** quiet rollout through 2025; the major public launch (including importing an
  existing podcast from another host) was reported the **week of Nov 21, 2025** on Podnews Weekly
  Review (guest: Kendall Brietman, Riverside).
- **Plan requirement:** hosting is **free with any paid plan** — not on the Free tier.

## 2. Direct publishing to Spotify / Apple / YouTube — VERIFIED

From within Riverside you can publish straight to Spotify (via Spotify for Creators/Anchor),
Apple Podcasts, and YouTube without exporting and re-uploading a file. Because Riverside hosts the
RSS, downstream platforms fetch new episodes automatically once connected. Riverside is Spotify's
first video-creation partner.

- **Nuance:** Spotify's own help article confirms the integration but points to Riverside's help
  center for the step-by-step. The "no download at all" claim is best sourced to Riverside
  University, not Spotify. A show can also skip Spotify-for-Creators entirely and rely on
  Riverside's own RSS.

## 3. AI Producer suite — VERIFIED (feature set); some specifics third-party

2026 toolset that outputs automatically or near-automatically:

- **AI transcription** — 100+ languages (third-party reviews claim ~99% accuracy — treat as
  "claimed").
- **AI Show Notes** — episode summaries, chapter markers, title suggestions, takeaways/hooks
  (drafts to refine).
- **Magic Clips** — auto-detects highlight moments, produces vertical social clips (a "Viral
  Score" is cited by third-party reviews).
- **Magic Audio** — AI noise/background removal and cleanup.
- **Magic Episode** — one-click full-episode production.
- Text-based editing, chat-based AI editing, animated captions, eye-contact correction.

## 4. Remote-guest flow — VERIFIED

Guests click a link and join in their **browser — no account, no download**. Riverside records
**separate, locally-captured HD tracks per participant** (on-device, not over the connection, so
quality survives weak networks), auto-uploaded to the host's account. Up to 10 participants.

## 5. Pricing (July 2026) — VERIFIED, but HIGH churn

| Plan | Monthly | Annual (per mo) | Recording | Hosting | AI |
|---|---|---|---|---|---|
| Free | $0 | — | 2 hrs one-off, watermark | ✗ | Magic Clips only |
| **Pro** | **~$29** | **~$24 (~$288/yr)** | 5 hrs/mo, up to 4K, no watermark | ✓ | Text editing, Magic Audio, transcriptions, Magic Clips, show notes |
| Grow | ~$39 | ~$34 | 20 hrs/mo, 2 studios | ✓ | Pro + social scheduling, AI thumbnails |
| Webinar | ~$99 | ~$79 | 25 hrs/mo, webinars | ✓ | Grow + engagement |
| Business | Custom | Custom | Unlimited | ✓ | All + SSO, API |

**Pro (~$29/mo, ~$24/mo annual) is the tier that unlocks hosting + full AI + longer recording** —
the key number for a solo, non-technical podcaster. Some listicles still show an older "$15/$19"
structure; trust riverside.com/pricing and re-check before quoting.

## 6. Spotify for Creators — VERIFIED, free

Free, unlimited hosting + distribution (formerly Spotify for Podcasters / Anchor). Generates an
RSS feed. Apple Podcasts reach is a **one-time** submission: submit the RSS via Apple Podcasts
Connect (needs an Apple ID), then paste the resulting Apple URL back into Spotify for Creators →
Settings → Availability. Apple listing is free. Provides an embeddable player for a website.

## 7. The "traditional" multi-tool stack — the contrast — VERIFIED

A non-technical person would otherwise assemble: (1) scheduling (Calendly/email), (2) recording
(Zoom/Zencastr), (3) editing/DAW (Audacity/Descript ~$16–24/mo), (4) a separate host with
per-episode manual upload (Buzzsprout $19/$39/$79; Captivate $19/$49/$99; Podbean ~$17+), (5)
one-time RSS submission to Apple + Spotify, (6) per-episode show notes by hand, (7) a podcast
website (~$16+/mo), (8) social clips (Opus/Descript/CapCut). Six to eight tools, several
subscriptions, manual handoffs at every step — versus Riverside Pro (~$29/mo) + free Spotify for
Creators collapsing it into one workflow.

## 8. Riverside website + embeddable player — VERIFIED

Riverside hosting includes a one-click podcast website (a `yourname.riverside.com` hub) with all
episodes playable, per-episode descriptions + transcripts, search, an About page, dark/light
mode, share links, and email subscribe. It also provides an **embeddable player** for
WordPress/other sites.

**For this client specifically**, the recommended website approach is simpler still: rather than
adopt Riverside's website, have her **web person embed the Spotify player** on `drlyndaklau.com`
(one small block of embed code), keeping her existing site as the home base. See
`../docs/setup-runbook.md`.

---

## What we deliberately left OUT

- **Podcastle / "Async":** Podcastle rebranded to Async in Jan 2026 and repositioned toward AI
  video / enterprise / developers — its site no longer reads as podcast-first and would overwhelm
  a non-technical first-timer. Considered as a contrast point and **cut from the deck** at the
  author's direction (keep the client-facing story purely positive and Riverside-focused).
- **Phone-first tools (Podbean Recorder, Anchor-style apps):** ruled out — the client is strictly
  a laptop user for work.

---

## CONFIDENCE FLAGS — verify before quoting

1. **Riverside pricing** — HIGH churn. Re-check riverside.com/pricing the day the deck is
   finalized/shared. The load-bearing claim ("Pro is the tier that unlocks hosting + AI + longer
   recording") is solid regardless of the exact dollar figure.
2. **Riverside hosting launch date** — cite as "late November 2025," not a hard day.
3. **AI accuracy / Magic Clips "Viral Score"** — third-party, not a Riverside spec. Phrase as
   "claimed." The deck avoids numeric accuracy claims entirely.
4. **Spotify "no-download" direct-publish mechanics** — source-split; attribute the "no download"
   framing to Riverside University, not Spotify.
5. **Podbean pricing** — from a third-party aggregator; verify on podbean.com if it becomes a hard
   number anywhere client-facing.
6. **Third-party tutorial URLs** — confirm each opens and is current before sharing the deck.
7. **Async rebrand** — primary-sourced (async.com, Jan 28 2026); safe, but intentionally unused.
