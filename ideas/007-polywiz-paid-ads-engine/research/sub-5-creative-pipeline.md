## Phase 1 — Ad creative generation pipeline

Parent epic: #181

**Goal:** From a campaign brief (URL, brand, scraped images, CTA), generate **5 base images × 10 headlines × 3 bodies = 150 combinations** that Meta Advantage+ Creative permutes during delivery.

### Creative volume math (Meta 2026 Andromeda system)

- **Day 1 launch:** 8–15 distinct creative combinations per ad set (Andromeda starts allocating budget after only ~5% of impressions)
- **Refresh cadence:** every 7–14 days, swap 20–30% of variants
- **Diminishing returns** past ~15 hand-built variants — Advantage+ Creative auto-generates further permutations from your base assets
- **Format diversity beats matrix multiplication** — 5 photos of the same artwork with different captions hurts; mix static + carousel + video instead

### Pipeline architecture

```
Campaign URL → Firecrawl scrape (existing)
            → Image catalog (existing)
            → For each base image:
                ├─ image-crop.ts (1:1, 4:5, 9:16, 16:9 variants — existing)
                ├─ FLUX.1 Kontext via Replicate (background swap / texture variant — NEW)
                └─ Ideogram v3 via Replicate (1–2 variants with headline burned in — NEW)
            → paid-ads-prompt.ts (NEW):
                ├─ 10-intent angle slots (curiosity / urgency / social-proof / benefit /
                │  contrarian / pain / status / risk-reversal / authority / contrast)
                ├─ Forbidden-phrase list ("game-changer", "revolutionary", "next-gen",
                │  "unleash", "hope you're well", "level up", "ultimate", …)
                ├─ Brand voice few-shots from organic past winners
                └─ 10 headlines + 3 bodies per ad set
            → Ad Variants table (Airtable)
            → Zernio /v1/ads/create per variant
```

### Tasks — copy generation

- [ ] Create `src/lib/prompts/paid-ads-prompt.ts` mirroring structure of `compose-prompt.ts`
- [ ] Implement 10-intent angle slot architecture (one variant per slot per launch batch)
- [ ] Build forbidden-phrase list and enforcement at prompt level
- [ ] Few-shot loading: pull top 3 past organic winners (highest engagement) for each brand from Airtable as reference examples
- [ ] Output: structured `{headlines: [{intent, text}], bodies: [{tone, text}]}` JSON
- [ ] Per-brand voice doc continues to load from Brands table (existing pattern)

### Tasks — image variants

- [ ] Add Replicate model wrapper for FLUX.1 Kontext (image-to-image, ~$0.04/image)
- [ ] Add Replicate model wrapper for Ideogram v3 (text-on-image, ~$0.08/image)
- [ ] **Brand sensitivity gate:** art brands (per memory `project_brand_image_sensitivity`) restrict image-AI to background extension, padding, and headline overlays only — do NOT generative-fill artwork. Editorial brands have fewer constraints. Read `Image AI Mode` field on Brands table (new field: `Conservative` / `Moderate` / `Liberal`)
- [ ] Reuse existing `image-crop.ts` for aspect-ratio variants (already done)
- [ ] Reuse existing Bria outpainting via Replicate (already wired)
- [ ] Output: 5 base images × 4 aspect ratios = 20 image assets per ad campaign, uploaded to Vercel Blob

### Tasks — variant assembly

- [ ] Cross-product: 10 headlines × 3 bodies × 5 base images = 150 variant rows in Ad Variants table (we feed assets to Meta as raw — Advantage+ Creative does the actual cross-product, but we record intended pairings for reporting)
- [ ] Per-variant Vercel Blob upload + Airtable record creation
- [ ] Brand-review queue UI: first 30 days, every variant ships through user-approval before being sent to Zernio (toggle: `Auto-approve ads after first 30 days`)

### Risk mitigation

| Risk | Mitigation |
|---|---|
| AI-slop voice dilution | 10-intent angle slots force diversity; forbidden-phrase list pre-filters; brand-voice few-shots anchor tone |
| Compliance rejection | Add Meta sensitive-category forbidden-phrase list (no "Do you…" personal-attribute framing, no before/after, no wellness/political adjacency) |
| Visual sameness | FLUX background variants + aspect-crop combinatorics + format diversity (single image / carousel / cover-slide) |
| Cost overrun on image gen | Cap at 5 base × ~3 variants each = 15 generations per ad campaign × $0.04–$0.08 = ~$0.60–$1.20/campaign — well within budget |

### Done when

Given a campaign ID, the pipeline produces 5 base images × 10 headlines × 3 bodies in Airtable, all assets uploaded to Vercel Blob, ready to push to Zernio. End-to-end test for The Intersect with one real campaign URL.
