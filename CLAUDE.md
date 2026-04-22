# Ideas Inbox — Project Rules

## Idea Folder Structure

Each idea folder MUST keep its root clean so the README.md is immediately visible on GitHub. Only README.md should be a file at the root — everything else goes into organized subfolders.

### Standard folder layout:

```
ideas/NNN-idea-name/
├── README.md                # Only file at root — the discussion paper
├── presentations/           # Slide deck source files (.md), presentation images
├── research/                # Research documents and analysis
├── docs/                    # Communications, meeting invites, cover emails
└── exports/                 # Rendered outputs (PDF, HTML, PPTX)
```

- **Never** place loose files (images, PDFs, slide decks, research docs) at the idea folder root
- Folders are fine at root level — they're compact in GitHub's file listing
- Images used by presentations go in `presentations/images/` (keeps relative paths working)
- HTML/PDF exports always go in `exports/`

## When Adding a New Idea

1. Create the numbered folder with README.md and the standard subfolder structure
2. **Update the root README.md** — add the new idea to the "Current Ideas" table with a link to its folder
3. Update the folder structure tree in the root README if needed

## Linking Accompanying Artifacts from the README

Ideas are often shared with colleagues by dropping a GitHub link to the idea's README. Anyone arriving there should be able to reach the accompanying deck in a single click — and land in a fast, full-screen, keyboard-navigable presentation view, not a laggy PDF tab.

**Rule:** If an idea has a MARP deck, the README MUST surface it near the top — between the metadata block (Origin / Status / Date) and the first content section — as a clickable slide-1 thumbnail that opens the **hosted HTML deck** on Vercel Blob.

**Publishing the deck:** run `scripts/publish-deck.mjs <idea-folder> [<deck-basename>]` from the repo root with `BLOB_READ_WRITE_TOKEN` in the environment. The script:
1. Uploads any local image references to Blob at `presentations/<idea-slug>/<filename>`.
2. Rewrites the deck source to use absolute Blob URLs.
3. Regenerates the dark HTML, a transformed light HTML, the PDF, and a slide-1 PNG thumbnail (from the light variant).
4. Uploads both HTMLs + the thumbnail to Blob.

Re-run any time the deck source changes. The light variant is derived automatically from the dark source by substituting the `:root` palette tokens — orange / blue / green / red accent colors are preserved; only background, surface, text, and greyscale tokens flip.

**Format** — thumbnail of slide 1 (clickable, links to the hosted light HTML), followed by one text line per artifact leading with 📄 or 🎬:

```markdown
<p>
  <a href="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<slug>/deck-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<slug>-slide-1.png" width="480" alt="Deck title — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<slug>/deck-light.html) · [dark version →](https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<slug>/deck.html)
**📄 Slide deck (PDF):** [exports/deck.pdf](exports/deck.pdf) — download for print or offline.
**📄 Interview protocol:** [exports/interview-protocol.pdf](exports/interview-protocol.pdf)
```

Rules:
- **Thumbnail is mandatory**, not optional. A small link buried in prose is nearly invisible. The slide-1 image at ~480px wide anchors the README visually and pulls the eye to the deck.
- **Thumbnail and primary link default to the LIGHT variant** (`deck-light.html`). Dark is offered as a secondary link on the same line. Rationale: light renders better for embeds, snapshots, and default professional audiences; dark remains available for operators who prefer it.
- **Thumbnail image is rendered from the light variant** so the preview matches the default experience.
- **Hosting paths (from `publish-deck.mjs`):**
  - Light HTML (default): `presentations/<idea-slug>/deck-light.html`
  - Dark HTML (secondary): `presentations/<idea-slug>/deck.html`
  - Slide-1 thumbnail (from light): `presentations/<idea-slug>-slide-1.png`
  - Per-deck images (logos, generated illustrations): `presentations/<idea-slug>/<filename>`
- **The blob store** `itcls3wqp5koksgn.public.blob.vercel-storage.com` is Polymash's shared public Vercel Blob store. Credentials live in `the-intersect-curator/.env.local` as `BLOB_READ_WRITE_TOKEN`.
- **If only the source deck exists** and hasn't been published yet, skip the thumbnail block and link the source with `*(MARP source — run scripts/publish-deck.mjs to publish)*`.
- **If the idea has no presentation**, omit the block entirely — don't add placeholder lines.
- **Research PDFs and supporting documents** get their own `📄` lines under the deck link, labeled by what they are — no thumbnail needed for these.
- **TL;DR/Executive Summary sections** can additionally reference the deck, but the top-of-page thumbnail block is mandatory so the link is visible without scrolling past the fold.

This is a hard rule. Decks that exist but aren't surfaced as a clickable thumbnail opening the hosted light HTML are effectively invisible to anyone reading the idea on GitHub.
