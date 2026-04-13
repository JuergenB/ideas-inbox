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
