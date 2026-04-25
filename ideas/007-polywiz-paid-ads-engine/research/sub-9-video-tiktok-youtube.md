## Phase 3 — Video pipeline + TikTok + YouTube Shorts

Parent epic: #181

**Pre-requisite for both:** A short-form vertical-video generator (image catalog → 9:16 slideshow with Ken Burns + voiceover/music). Without this, neither TikTok nor YouTube Shorts is feasible.

### Why video is gated

- **TikTok:** Photo Mode (carousel) ads work without video — sidesteps full video need. But true Spark Ads + In-Feed video ads require 9:16 vertical video.
- **YouTube:** Static images don't run on YouTube placements. Video is mandatory for In-Feed and Shorts.
- **Meta Reels / IG Reels:** Currently we use static + carousel; adding video unlocks more inventory.

### Tasks — slideshow video generator

- [ ] Use Invideo MCP (already wired into PolyWiz tooling) for AI-driven 9:16 generation from image catalog + brief
- [ ] Alternative path: Replicate Runway Gen-4 or Veo 2 for cinematic art-brand pans (no humans, slow zooms on artwork)
- [ ] Music: licensed library or TikTok Commercial Music Library (manual selection — no automated CML attachment API in 2026)
- [ ] Voiceover: Eleven Labs API for brand-voice narration (optional)
- [ ] Output specs: 9:16 1080×1920, 15s and 30s variants, MP4 H.264

### Cost envelope

- Invideo API: existing integration, marginal cost
- Runway Gen-4: $0.60–$5 per 15s clip
- Veo 2: similar pricing
- Per ad campaign: 3–5 video variants → ~$5–$25 in generation cost

### Tasks — TikTok ads (after video pipeline)

- [ ] TikTok for Business account + verification per brand (legal entity, tax forms, payment method)
- [ ] TikTok Pixel + Events API on landing pages (already covered in pixel sub-issue)
- [ ] Photo Mode (carousel) ad path first — uses existing image catalog, no video required
- [ ] Spark Ads boost path for brands with organic TikTok traction (creator authorization codes)
- [ ] Zernio TikTok ads integration (`platform=tiktokads`, verified covered)
- [ ] **Budget reality check:** $20/day ad-group floor + 50-conversion learning phase = ~$1500+/mo to escape learning. Only enable for brands committed to that spend OR if a brand has organic TikTok traction worth amplifying via Spark Ads (which works around creative generation entirely).

### Tasks — YouTube Shorts ads (after video pipeline)

- [ ] Google Ads account + billing per brand
- [ ] YouTube channel linked to Google Ads per brand (mandatory)
- [ ] Enhanced Conversions implemented on landing pages (mandatory since Nov 2025)
- [ ] Zernio Google Ads integration verification (currently unconfirmed for YouTube specifically — must live-probe)
- [ ] Demand Gen / In-Feed format (43% lower CPA than In-Stream per 2026 benchmarks)
- [ ] Audience: Affinity (Art & Entertainment, Culture & Trends, Book Lovers) + In-Market (Media Subscriptions, Cultural Events) + retargeting

### Tasks — The Intersect off Curated (separate but related)

Curated was sunset by Mailchimp in 2024. Long-term, The Intersect should migrate to Ghost or Beehiiv for proper CAPI support and stronger pixel install flexibility.

- [ ] Choose target platform (Ghost matches Artsville stack; Beehiiv is purpose-built for paid newsletters)
- [ ] Plan content migration (existing issues, subscribers, sender reputation)
- [ ] Coordinate with brand owner on timing
- [ ] Update theintersect.art domain configuration

### Done when

At least one brand has a video-driven ad campaign live on TikTok OR YouTube Shorts with measurable conversion tracking.
