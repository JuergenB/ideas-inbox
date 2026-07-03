# One-Time Setup Runbook — reference

**Audience:** whoever does the one-time setup — Lynda herself, a VA, or her web person. This is
the "done once, at the start" account setup + directory listing the deck refers to. Budget:
~30–45 minutes total, most of it waiting on Apple's review. Note that steps involving an email
address and two-factor codes are often easiest done by the account owner (Lynda) directly.

The goal: after this is done, Lynda **only ever records and presses "Publish" in Riverside**, and
every new episode of *The Best is Yet to Come* appears on Spotify, Apple Podcasts, and (optionally)
on her own website — with no further technical work.

There are two clean ways to host/distribute. **Pick ONE** before starting.

---

## Decision: who hosts the RSS feed?

| Option | Host / RSS owner | Best when |
|---|---|---|
| **A — Riverside hosts** *(recommended)* | Riverside | Simplest for Lynda: record → publish, all in one tool. Requires the Riverside paid plan (~$29/mo), which she's using anyway for recording + AI. |
| **B — Spotify for Creators hosts** | Spotify (free) | If cost is the priority and you're willing to move the finished audio into Spotify for Creators. Adds a step; less "one-tool." |

The deck and the client story assume **Option A**. Option B is documented only as a fallback.

---

## Option A — Riverside hosts (recommended)

1. **Confirm the paid plan.** Lynda's Riverside account is on a paid plan (Pro or higher) —
   hosting is not available on Free. See https://riverside.com/pricing.
2. **Create the show in Riverside.** In Riverside → Hosting, create the podcast: title
   *The Best is Yet to Come*, description, cover art, category, language. This generates the
   show's **RSS feed URL** — copy it.
   - Ref: https://support.riverside.com/hc/en-us/articles/28900303780637-Hosting-Set-up-your-podcast-on-Riverside
3. **Publish (or draft) one episode** so the feed is non-empty — directories reject empty feeds.
4. **Submit to Spotify.** Easiest path: use Riverside's built-in "publish to Spotify" connection
   (Riverside is a Spotify partner). If doing it manually instead, go to Spotify for Creators →
   Add your podcast → paste the RSS URL. Spotify usually lists within hours.
   - Ref: https://support.spotify.com/us/creators/article/creating-with-riverside-fm/
5. **Submit to Apple Podcasts (one-time).** Go to **Apple Podcasts Connect**
   (https://podcastsconnect.apple.com), sign in with an Apple ID, → add a show → paste the same
   RSS URL → submit for review. Apple review typically takes a few hours to a couple of days.
   - Ref: https://support.spotify.com/us/creators/article/submitting-your-show-to-apple-podcasts/
6. **(Optional) YouTube.** Connect the RSS in YouTube Studio → Settings → the podcasts section,
   or publish video episodes directly from Riverside.
7. **Hand back to Lynda.** From here she records and presses Publish. Nothing else recurs.

## Website embed (Lynda's own site)

Once the show is live on Spotify:

1. Open the show (or a specific episode) on **open.spotify.com**.
2. Click **⋯ (More) → Share → Embed show / Embed episode**. Copy the `<iframe>` snippet.
   - Ref (embed docs): https://developer.spotify.com/documentation/embeds
3. Paste the snippet into a page on **drlyndaklau.com** (in her CMS, an "HTML"/"embed"/"code"
   block). It renders a play-in-place player — no plugin, no account for visitors.
4. For a whole-show player, use the **show** embed (auto-lists new episodes); for a featured one,
   use an **episode** embed. A simple pattern: one show-embed on a "Podcast" page.

> Alternative: Riverside also generates a one-click podcast website + its own embeddable player.
> Prefer the Spotify embed here so Lynda keeps her existing site as the home base.

---

## Option B — Spotify for Creators hosts (fallback, free)

1. In **Spotify for Creators** (creators.spotify.com), create the show; it generates an RSS feed.
2. For each episode, bring the finished audio from Riverside into Spotify for Creators (this is
   the extra step Option A avoids), add title + notes, publish.
3. Submit that RSS feed to Apple Podcasts Connect (step 5 above) — one time.
4. Website embed: identical to the Option-A embed steps.

---

## After setup — the recurring loop (Lynda only)

1. Open Riverside studio in the browser.
2. Send the guest the studio link.
3. Record.
4. Review the AI cleanup + drafted show notes.
5. Press **Publish**.

Everything else — distribution to Spotify/Apple/YouTube and the website player staying current —
happens automatically.

*Retrieved / valid as of July 2026. Re-verify Apple Podcasts Connect and Spotify for Creators
flows if setting up much later — these UIs change.*
