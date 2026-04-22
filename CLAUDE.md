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

Ideas are often shared with colleagues by dropping a GitHub link to the idea's README. Anyone arriving there should be able to reach the accompanying deck, PDF, or supporting document in a single click — without scrolling.

**Rule:** If an idea has any presentation or exported artifact in `exports/` or `presentations/` (PDF, PPTX, HTML, secondary research PDFs), the README MUST surface it near the top — between the metadata block (Origin / Status / Date) and the first content section.

**Format** — one line per artifact, leading with 📄, using plain-English labels:

```markdown
**📄 Slide deck (PDF):** [exports/deck.pdf](exports/deck.pdf) — open directly from GitHub to read or share.
**📄 Interview protocol:** [exports/interview-protocol.pdf](exports/interview-protocol.pdf)
```

Rules:
- **PDF first.** It's the universal open-in-browser format. If PPTX or HTML versions exist too, mention them inline on the same line, not as separate bullets.
- **If only the source deck exists** (e.g. `presentations/deck.md` with no PDF yet), link it anyway and tag `*(MARP source — PDF export pending)*` so the reader knows what they're getting.
- **If the idea has no presentation**, omit the block entirely — don't add placeholder lines.
- **Research PDFs and supporting documents** get their own `📄` lines under the deck link, labeled by what they are.
- **TL;DR/Executive Summary sections** can additionally reference the deck, but the top-of-page block is mandatory so the link is visible without scrolling past the fold.

This is a hard rule. Decks, protocols, and research artifacts that exist but aren't linked from the README are effectively invisible to anyone reading the idea on GitHub.
