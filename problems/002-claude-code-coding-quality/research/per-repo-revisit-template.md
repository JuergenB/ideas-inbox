# Per-Repo Revisit Template — Claude Code Coding Quality Reconciliation

**Purpose:** Once `~/.claude/CLAUDE.md` has been updated with the Karpathy named anchors and any consolidations approved in [`problems/002-claude-code-coding-quality`](https://github.com/JuergenB/ideas-inbox/tree/main/problems/002-claude-code-coding-quality), each active project's *project-level* `CLAUDE.md` may be stale, contradictory with the new global, or missing rules it should adopt. This template is the paste-ready prompt to drop into a Claude Code session in each repo.

**How to use:**
1. Open a Claude Code session in the project repo.
2. Paste the prompt below verbatim.
3. Review the agent's report. **Do not let it edit yet** — the prompt is "audit only."
4. Approve specific changes per-file before any write happens.

---

## The prompt to paste

```
Read the global rule changes proposed in this GitHub issue and folder:

- Issue: https://github.com/JuergenB/ideas-inbox/issues/<ISSUE_NUMBER>
- Folder: https://github.com/JuergenB/ideas-inbox/tree/main/problems/002-claude-code-coding-quality
- Specifically read:
  - problems/002-claude-code-coding-quality/README.md (the brief)
  - problems/002-claude-code-coding-quality/research/perplexity-2026-04-27-deep-research.md (the evidence)
  - problems/002-claude-code-coding-quality/research/karpathy-integration-mapping.md (the named principles)

Then audit THIS repo's CLAUDE.md (and any .claude/ subfolder rules, skills, settings.json) against:

1. The four Karpathy named principles (Think Before Coding, Simplicity First,
   Surgical Changes, Goal-Driven Execution) — note any rules that already
   embody them, any that conflict, and where in the file they should be
   referenced as named anchors.

2. The Perplexity research findings on community-deployed mitigations —
   especially: CLAUDE.md length under 60 lines (this is a project rule,
   not the user's global), on-demand memory under .claude/rules/ or
   .claude/memory/, plan-mode usage for non-trivial work, manual /compact
   at 50% context, and verification skills/hooks.

3. The current model context (Opus 4.7 vs 4.6) and whether this repo's
   work pattern would benefit from defaulting to Opus 4.6 with selective
   4.7 invocation per the research's cost analysis.

4. Anything in this repo's CLAUDE.md that:
   - Duplicates a rule now in the user's global ~/.claude/CLAUDE.md
     (would be removed at the project level since the global covers it)
   - Contradicts the new global (must be reconciled or explicitly overridden
     with a rationale comment)
   - Is stale (refers to an incident, model, or tool no longer in use)
   - Is missing but should be present (a project-specific deviation from
     the global that the project relies on)

DO NOT EDIT yet. Produce a report with these sections:

  A. Project CLAUDE.md current state (size, line count, top-level structure)
  B. Karpathy principle alignment (per-principle: covered? conflicting? missing?)
  C. Recommendations against research findings (specific lines + proposed change)
  D. Stale or contradictory content (specific lines + why)
  E. Missing content the project actually needs (with one-line justification each)
  F. Net effect estimate (lines added, lines removed, lines moved)
  G. Risk-ranked change list — lowest-risk cuts first, additions next,
     riskier consolidations last.

Report under 800 words. Use file_path:line_number refs. Don't recommend
deleting any rule that names a real past incident in THIS project.
```

---

## When to run this

- **Phase 1 — recently active repos** (last 30 days of commits): polywiz-app, the-intersect-curator, artwork-archive, ideas-inbox itself, presentation-viewer-site, and any repo where the user has felt frustration with code quality.
- **Phase 2 — secondary active repos:** anything in `~/Projects/` with a CLAUDE.md but less frequent recent work.
- **Phase 3 — dormant repos:** skip unless the user resumes work there. The reconciliation is more useful when run *just before* resuming work, with the global context fresh.

## What this template explicitly does NOT do

- It does not edit any project's CLAUDE.md. Audit only.
- It does not assume the global rules are perfect. If a project's existing rule is *more specific or better-worded* than the global, the report should flag that and propose lifting the project rule into the global rather than removing the project rule.
- It does not re-run the Perplexity research. The research is a fixed reference; only the project-side reconciliation runs per repo.

## Logging the results

For each repo where the prompt is run, save the agent's report at:

```
<repo-root>/.claude/audits/2026-04-27-rule-reconciliation.md
```

This creates a per-project audit trail showing what was found and what was decided. Future audits can diff against this baseline to detect rule drift.

## Update cadence

Re-run this template (or its successor) after any major change to the user's global `~/.claude/CLAUDE.md` or after any new Anthropic postmortem / Claude Code release that materially affects the model behavior assumptions.
