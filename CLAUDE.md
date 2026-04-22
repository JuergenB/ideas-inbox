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

**Hosting split — HTML on Vercel, images on Blob.** Vercel Blob always serves HTML with `Content-Disposition: attachment` — clicking a `.html` on the Blob domain downloads it instead of rendering it. So HTML decks live in the repo under `ideas/<folder>/exports/*.html` and are served by the Vercel static deployment of this repo (`ideas-inbox-mocha.vercel.app`). Images and the slide-1 thumbnail PNG live on Vercel Blob (they serve `inline` fine and stay out of the repo as binary bloat).

**Publishing the deck:** run `scripts/publish-deck.mjs <idea-folder> [<deck-basename>]` from the repo root with `BLOB_READ_WRITE_TOKEN` in the environment. The script:
1. Uploads any local image references to Blob at `presentations/<idea-slug>/<filename>`.
2. Rewrites the deck source to use absolute Blob URLs for images.
3. Regenerates the dark HTML, a transformed light HTML, and the PDF into `ideas/<folder>/exports/`.
4. Renders a slide-1 PNG from the light variant and uploads that thumbnail to Blob.

Commit and push — the Vercel deployment picks up the new HTML files from the repo on the next deploy. The light variant is derived automatically from the dark source by substituting the `:root` palette tokens — orange / blue / green / red accent colors are preserved; only background, surface, text, and greyscale tokens flip.

**Format** — thumbnail of slide 1 (clickable, links to the Vercel-hosted light HTML), followed by one text line per artifact leading with 📄 or 🎬:

```markdown
<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/<idea-slug>-slide-1.png" width="480" alt="Deck title — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/<idea-folder>/exports/<deck-basename>.html)
**📄 Slide deck (PDF):** [exports/<deck-basename>.pdf](exports/<deck-basename>.pdf) — download for print or offline.
**📄 Interview protocol:** [exports/interview-protocol.pdf](exports/interview-protocol.pdf)
```

Rules:
- **Thumbnail is mandatory**, not optional. A small link buried in prose is nearly invisible. The slide-1 image at ~480px wide anchors the README visually and pulls the eye to the deck.
- **Thumbnail and primary link default to the LIGHT variant** (`<deck-basename>-light.html`). Dark is offered as a secondary link on the same line. Rationale: light renders better for embeds, snapshots, and default professional audiences; dark remains available for operators who prefer it.
- **Thumbnail image is rendered from the light variant** so the preview matches the default experience.
- **URL bases:**
  - Vercel static site: `https://ideas-inbox-mocha.vercel.app` — serves HTML inline. All deck HTML paths follow `/ideas/<idea-folder>/exports/<deck-basename>[-light].html`.
  - Vercel Blob public store: `https://itcls3wqp5koksgn.public.blob.vercel-storage.com` — serves images inline. Thumbnails at `/presentations/<idea-slug>-slide-1.png`; per-deck images at `/presentations/<idea-slug>/<filename>`.
- **Blob credentials** live in `the-intersect-curator/.env.local` as `BLOB_READ_WRITE_TOKEN`. Export before running `publish-deck.mjs`.
- **If only the source deck exists** and hasn't been published yet, skip the thumbnail block and link the source with `*(MARP source — run scripts/publish-deck.mjs to publish)*`.
- **If the idea has no presentation**, omit the block entirely — don't add placeholder lines.
- **Research PDFs and supporting documents** get their own `📄` lines under the deck link, labeled by what they are — no thumbnail needed for these.
- **TL;DR/Executive Summary sections** can additionally reference the deck, but the top-of-page thumbnail block is mandatory so the link is visible without scrolling past the fold.

This is a hard rule. Decks that exist but aren't surfaced as a clickable thumbnail opening the hosted light HTML are effectively invisible to anyone reading the idea on GitHub.
