# Implementation Plan — Step-by-Step Next Actions

**Companion to:** [README.md](../README.md) (the brief) and [#14](https://github.com/JuergenB/ideas-inbox/issues/14) (the GitHub issue with the six decision asks).

This document answers the question *"do I go into every repo, or is there a global change that handles most of it?"* — and gives the exact sequence to run, with the right human-in-the-loop checkpoints.

---

## Executive summary

The right order is **global first, then per-repo**, in five phases:

| Phase | Scope | Time | Who |
|---|---|---|---|
| 1. Global edits | `~/.claude/CLAUDE.md`, `~/.claude/settings.json` — applies to every repo, every session | ~15 min total | One-time, agent edits, user approves diff |
| 2. Burn-in | No edits — just use Claude Code normally for 1-3 days | 24-72 hr | User observation |
| 3. Per-repo audit | Each project's own `CLAUDE.md` audited against the new global | ~5 min per repo, batched via script | Script auto-runs; no edits applied |
| 4. Per-repo apply | Approved audit recommendations actually applied | ~10-15 min per repo | User reviews each report, agent applies approved subset |
| 5. Observe + revisit | Decide whether to do the larger consolidation experiment | 2 weeks | User judgment, file follow-up issue |

**Key principle:** there is no "apply the same change to every repo at once" because each repo's `CLAUDE.md` is different and serves different needs. The global covers what's shared; the per-repo work resolves what's specific. The audit step is batchable; the apply step is not.

---

## Scope — global vs per-repo, decision by decision

| Decision (from issue #14) | Scope | What changes |
|---|---|---|
| 1. Karpathy additive integration | **Global** | `~/.claude/CLAUDE.md` (+~17 lines) |
| 2. Add three habit rules (`/compact` at 50%, plan-mode, `/context`) | **Global** | `~/.claude/CLAUDE.md` (+~6-8 lines) |
| 3. Set `effort=xhigh` for Opus 4.7 | **Global** | `~/.claude/settings.json` (1 line) |
| 4. Default model (4.7 vs hybrid) | **Global** | `~/.claude/settings.json` (1 line) |
| 5. Verbatim-duplicate cuts | **Global** | `~/.claude/CLAUDE.md` (-~5 lines) |
| 6. Per-repo reconciliation | **Per-repo (audit batched)** | Each project's `CLAUDE.md`, driven by audit reports |

**Five of six decisions are global.** Only decision 6 is per-repo, and the audit half is scriptable.

---

## Phase 1 — Global edits (one-time, ~15 minutes)

### Step 1.1 — Approve decisions 1-5 in issue [#14](https://github.com/JuergenB/ideas-inbox/issues/14)

Use the checkbox list in the issue body. Comment with any modifications.

### Step 1.2 — Agent applies approved changes

In a fresh Claude Code session at `~/`, paste:

```
Read ~/Projects/ideas-inbox/problems/002-claude-code-coding-quality/research/karpathy-integration-mapping.md
and apply the four edits exactly as specified to ~/.claude/CLAUDE.md.
Show me the diff before writing. Do not touch any rule that wasn't named in the
mapping document.
```

Then for habits and `effort`:

```
Apply decisions 2, 3, 5 from
https://github.com/JuergenB/ideas-inbox/issues/14 — show the diff before writing.
Touch only ~/.claude/CLAUDE.md and ~/.claude/settings.json.
```

**Backup is already in place:** `~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md`. Rollback in one line if needed: `cp ~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md ~/.claude/CLAUDE.md`.

### Step 1.3 — Verify

```bash
diff ~/.claude/CLAUDE.md ~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md | head -100
grep '"effort"' ~/.claude/settings.json
```

Confirm the diff shows only the approved additions/cuts.

---

## Phase 2 — Burn-in (24-72 hours, no action)

Use Claude Code as you normally would across 1-3 sessions in any repo. Specifically watch for:

- Are the four named principles invocable mid-conversation? (Try saying *"apply Surgical Changes here"* and see if the agent narrows scope appropriately.)
- Did `effort=xhigh` kick in? (Sessions should feel deliberate, not rushed; `/context` should show effort level.)
- Does the felt regression abate? (Less hallucination, fewer drive-by changes, less mid-session forgetting.)
- Are any rules **conflicting** in practice? (Note them — they're inputs to phase 5.)

**No edits during burn-in.** Resist the urge to tweak. The point is to observe whether the global change alone is enough.

---

## Phase 3 — Per-repo audit (batched via script, ~30 min total)

### Step 3.1 — Review the script before running

Read [`scripts/reconcile-rules.sh`](../scripts/reconcile-rules.sh) (located in this problem folder). The repo list at the top is editable — defaults are the 5 most-recently-active repos. The script:

- Iterates each repo
- Spawns a one-shot `claude -p "..."` non-interactive session in each
- The agent reads the local brief + Karpathy mapping + perplexity research
- The agent audits that repo's `CLAUDE.md` and writes a report to `<repo>/.claude/audits/2026-04-27-rule-reconciliation.md`
- **Does not edit** any project's `CLAUDE.md`

### Step 3.2 — Run the script

```bash
bash ~/Projects/ideas-inbox/problems/002-claude-code-coding-quality/scripts/reconcile-rules.sh
```

Each repo audit takes 1-3 minutes. The script reports `[done]` or `[fail]` per repo. Failures (typically a missing CLAUDE.md or a transient API error) can be re-run individually.

### Step 3.3 — Read the reports

For each active repo:

```bash
$EDITOR ~/Projects/<repo>/.claude/audits/2026-04-27-rule-reconciliation.md
```

The reports follow a fixed structure (sections A-G). Section G is the **risk-ranked change list** — that's what you act on in phase 4.

---

## Phase 4 — Per-repo apply (judgment-based, ~10-15 min per repo)

For each repo where you want to apply some or all of the audit recommendations:

### Step 4.1 — Open Claude Code in the repo

```bash
cd ~/Projects/<repo> && claude
```

### Step 4.2 — Paste the apply prompt

```
Read .claude/audits/2026-04-27-rule-reconciliation.md.

Apply the changes from sections [X, Y, Z] of the report's risk-ranked change list (section G).
Skip sections [A, B] — I'm not approving those.

Show the diff before writing. Use the per-repo override pattern: if I have a project rule
that contradicts the global, keep it but add a one-line comment explaining why.
```

Adjust the section list per your judgment after reading the report.

### Step 4.3 — Repeat per repo

Each repo is independent. Stop at any point. Skipping a repo is fine — its audit report stays at `.claude/audits/` for later.

---

## Phase 5 — Observe + revisit (2 weeks)

After 2 weeks of work with the new global + reconciled per-repo files, file a follow-up issue covering:

- Did instruction-following improve, regress, or stay the same?
- Were the four named principles actually invoked mid-conversation, and did naming help?
- Are there contradictions between rules that emerged in practice?
- Should the larger consolidation (the ~65-70 lines the audit identified as compressible) now be attempted?

The follow-up issue is the trigger for the **larger consolidation experiment** that we deliberately deferred in this round to avoid coupling experiments.

---

## What to do if you only have 30 minutes

If you don't want to do the full phased plan today, this is the **minimum-viable subset** that captures most of the value:

1. **5 min** — Phase 1.1 + 1.2: approve decisions 1, 3 only (Karpathy additive + `effort=xhigh`). Skip the others.
2. **20 min** — Phase 3.2: run the audit script. Don't read the reports yet.
3. **5 min** — Skim the report headers for any red flags.

That gets you the highest-impact restore (`effort=xhigh`), the named principles, and a record of what each project's CLAUDE.md needs — without committing time to the per-repo apply step until you're ready.

---

## What this plan deliberately does NOT do

- **Does not auto-apply changes across repos.** Each repo's apply step is human-in-the-loop because each `CLAUDE.md` is different.
- **Does not run the audit on dormant repos.** Default repo list is the 5 most-active. Older repos can be added to the script when you resume work in them.
- **Does not re-run Perplexity research.** The research is a fixed reference; only the per-repo reconciliation runs per repo.
- **Does not couple Karpathy addition with consolidation.** That's the phase 5 experiment.
