# Idea 006: Presentation Viewer Site for Ideas Inbox

**Origin:** Juergen Berkessel, 2026-04-22
**Status:** In Progress — lightweight path shipping tonight
**Context:** Several ideas in this repo have accompanying MARP slide decks. Today those decks live as PDF exports linked from each idea's README. PDF viewing in browsers is laggy, navigation is paging up/down, rendering is staggered and fuzzy, and the clickable-thumbnail-in-the-README pattern doesn't really come alive because the thing you land in feels slow and heavy. We want a single-click experience that opens the deck as a proper HTML presentation — full-screen, arrow-key navigation, crisp typography, all images present and correctly hosted.

---

## TL;DR

MARP already exports a self-contained interactive HTML version of every deck, with full-screen and arrow-key navigation built in. The lightweight version of this idea is: host those HTML exports publicly, rewrite any image references so the HTML is fully self-sufficient once served, and link each idea's README thumbnail to the hosted HTML (not the PDF). The heavier version is a Next.js presentation engine that adds per-slide deep-linking, narration tracks, voiceover sync, and video. Start light, reach for the heavier one only if narration or video becomes a real requirement.

**Decision:** shipping Path A tonight. Path B stays a future idea.

---

## The Problem

- PDF decks open slowly in the browser. Page scrolling is not the navigation model users expect for slide decks.
- PDF rendering is staggered — slides load fuzzy and re-paint sharp. For a reader clicking in from a GitHub README, that first impression matters.
- Static images referenced in the deck source (logos, charts, illustrations generated with napkin.ai, thumbnails from Replicate) need a hosting story that survives the deck being served from any URL. Relative paths in MARP source break the moment the HTML is served from a location that doesn't co-locate the image.
- The clickable-thumbnail pattern in each idea's README (codified in project CLAUDE.md) works much better when it opens a native web experience instead of a PDF reader tab.

## The Proposal

Two paths, one chosen.

### Path A — Lightweight (shipping tonight)

- Each deck's `presentations/deck.md` MARP source is exported to HTML via `npx @marp-team/marp-cli <deck>.md --html`. This HTML is interactive, has keyboard navigation, supports full-screen, and is entirely self-contained except for image references.
- Every image referenced in every deck source gets uploaded to Vercel Blob under `presentations/<idea-slug>/<filename>`.
- Deck sources are rewritten so image references point to the Blob URLs. The HTML export then carries absolute URLs for every image and renders identically no matter where it's served from.
- The HTML export itself is uploaded to Vercel Blob at a public URL.
- Each idea's README surfaces the deck via a clickable thumbnail (slide-1 PNG, also on Blob) that links to the hosted HTML. PDF remains available as a secondary link for download/print/share.

**Time to build:** hours, not days. No database. No server code. No Next.js app. Everything is static assets on infrastructure Polymash already uses.

**What it gets us:**
- Fast open, crisp rendering, arrow-key navigation, full-screen, every image present.
- One Vercel Blob URL per deck that can be shared anywhere — a colleague on Slack, an email cover note, a GitHub issue comment.
- The README thumbnail pattern finally has a snappy destination.
- Zero recurring infrastructure cost beyond Blob storage.

**What it doesn't get us:**
- Per-slide deep linking (`/idea-005/slide-3`)
- Narration or voiceover sync
- Video on slide
- Analytics per slide
- Presenter mode with speaker notes
- A single index page listing every deck across every idea

If any of those become real requirements, Path B is the right next move.

### Path B — Next.js Presentation Engine (future idea)

- A small Next.js app deployed to Vercel that serves an index page (`/`) listing every deck across every idea, plus a viewer route (`/decks/idea-004-multi-tenant`) that renders the HTML in a branded shell.
- Slide-level deep linking via URL fragment or path segment (`/decks/idea-004/slide-7`).
- Per-slide narration track (MP3 or streaming) with automatic advance on narration end.
- Video-on-slide support (MP4 backgrounds or foreground media).
- Per-slide view analytics.
- Presenter mode with speaker notes.

This is a multi-week build. It's worth doing if and when narration, video, or analytics become real requirements. Not tonight.

## Why Path A First

- MARP's built-in HTML already does 90% of what the user experience needs. Arrow keys, full-screen, crisp rendering — all there.
- The image-hosting concern is solvable with Blob, which we already use for thumbnails (per CLAUDE.md rule).
- Shipping Path A unblocks the real behavior change we want in this repo: decks that actually get *read* because they open fast and look good.
- Building Path B before there's evidence of demand for its features (narration, deep links, analytics) would be a classic case of over-engineering ahead of need.

## Implementation Checklist (Tonight)

1. Audit every `presentations/deck.md` in the repo for local image references.
2. Upload every referenced image to Vercel Blob under `presentations/<idea-slug>/<filename>`.
3. Rewrite each deck source so image references point to the Blob URLs.
4. Regenerate every HTML export (`npx @marp-team/marp-cli <deck>.md --html --allow-local-files`).
5. Upload every HTML export to Vercel Blob at a public URL.
6. Generate slide-1 PNG thumbnails for every deck (`--images png --image-scale 2`), upload to Blob.
7. Update the project CLAUDE.md rule so the thumbnail links to the hosted HTML (primary) with PDF as a secondary link.
8. Update every idea README to carry the thumbnail block per the updated rule.
9. Commit and push. Verify from GitHub that every thumbnail opens to a working HTML deck.

## Open Questions

- **Custom domain / URL shape.** Vercel Blob URLs are functional but not pretty. A later enhancement (Path B territory) is a custom domain like `decks.polymash.com/idea-004`. Worth thinking about but not tonight.
- **Version control for deck edits.** Once an HTML is on Blob, editing the deck source and re-uploading overwrites. That's fine for internal use. If decks ever start carrying external links (embedded in emails, social posts), we'd want versioned URLs. Not tonight.
- **napkin.ai and other generative images.** Per the existing napkin-ai skill, generated illustrations should upload to Vercel Blob directly on generation. That flow is already consistent with Path A — no change needed.

## Future Work

Everything in Path B is future work, triggered by demand. Specifically:

- Narration tracks (likely via WonderCraft or ElevenLabs), stored as MP3 on Blob, synced to slide advance events
- Video-on-slide (MP4 backgrounds or foreground media)
- Presenter mode with speaker notes (MARP supports notes in source already)
- Per-slide analytics (simple pageview-per-slide via a lightweight event endpoint)
- A shared index page that aggregates every deck across every idea in one place

## Related

- Project CLAUDE.md rule: "Linking Accompanying Artifacts from the README" — currently requires thumbnail linked to PDF; being updated to prefer HTML link
- [Vercel Blob skill](https://github.com/JuergenB/ideas-inbox/blob/main/CLAUDE.md) — already used for README thumbnails
- [marp-export skill](../../CLAUDE.md) — handles the HTML regeneration step
