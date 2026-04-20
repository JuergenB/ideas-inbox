# Problems & Fixes

Technical issue write-ups for active client and project work. Each folder is a self-contained brief with problem statement, root-cause analysis, best-practice references, scoped outcomes, and an acceptance checklist for the team or vendor resolving it. Briefs lead with a plain-English summary for the decision-maker (client / stakeholder) and separate that cleanly from the technical section intended for the implementing team or vendor.

Mirrors the structure of [`ideas/`](../ideas/) — `README.md` at root, subfolders for research, docs, and exports. `notes/` and `private/` subfolders and `*.pdf` files under `problems/` are gitignored so source material and internal commentary stay out of the public repo.

## Current Issues

| # | Issue | Subject | Status | Date |
|---|-------|---------|--------|------|
| 001 | [Curated.co deliverability + cross-domain SPF/DKIM audit](001-curated-deliverability-nra/) | Not Real Art / Crewest Studio domains | Open — awaiting vendor | 2026-04-19 |

## Folder Structure

```
problems/
├── README.md                         # This index
└── NNN-short-name/
    ├── README.md                     # The brief
    ├── research/                     # Technical references, analysis
    ├── docs/                         # Cover emails, communications
    ├── exports/                      # Rendered outputs (PDF, HTML)
    └── notes/                        # (gitignored) raw source material, local commentary
```
