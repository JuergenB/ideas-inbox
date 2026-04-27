#!/usr/bin/env bash
# reconcile-rules.sh
# Batch-runs the per-repo CLAUDE.md audit against the new global rules.
# Reads-only — does NOT edit any project file. Produces audit reports in
# each repo's .claude/audits/<date>-rule-reconciliation.md.
#
# Companion to: problems/002-claude-code-coding-quality/research/implementation-plan.md
# Issue: https://github.com/JuergenB/ideas-inbox/issues/14

set -euo pipefail

# ── CONFIG ────────────────────────────────────────────────────────────────
# Edit this list to match the repos you want audited. Defaults are the
# most-recently-active repos as of 2026-04-27.

REPOS=(
  "$HOME/Projects/polywiz-app"
  "$HOME/Projects/the-intersect-curator"
  "$HOME/Projects/artwork-archive"
  "$HOME/Projects/polywiz-marketing"
  "$HOME/Projects/ideas-inbox"
)

# Reference materials live here. The audit prompt tells the agent to Read
# these from disk so we don't blow the prompt budget by inlining them.
PROBLEM_DIR="$HOME/Projects/ideas-inbox/problems/002-claude-code-coding-quality"
BRIEF="$PROBLEM_DIR/README.md"
KARPATHY_MAP="$PROBLEM_DIR/research/karpathy-integration-mapping.md"
RESEARCH="$PROBLEM_DIR/research/perplexity-2026-04-27-deep-research.md"

DATE=$(date +%Y-%m-%d)
REPORT_NAME="$DATE-rule-reconciliation.md"

# ── PRECHECKS ─────────────────────────────────────────────────────────────
if ! command -v claude >/dev/null 2>&1; then
  echo "Error: claude CLI not on PATH. Install Claude Code first." >&2
  exit 1
fi

for ref in "$BRIEF" "$KARPATHY_MAP" "$RESEARCH"; do
  if [ ! -f "$ref" ]; then
    echo "Error: missing reference file: $ref" >&2
    echo "Make sure the ideas-inbox repo is checked out and up to date." >&2
    exit 1
  fi
done

# ── PROMPT ────────────────────────────────────────────────────────────────
read -r -d '' PROMPT <<EOF || true
You are auditing this repository's CLAUDE.md against newly proposed global
rules. Do NOT edit any file. Produce a report only.

Reference materials — Read these first using the Read tool:

  $BRIEF
  $KARPATHY_MAP
  $RESEARCH

Then audit THIS repo's CLAUDE.md (and any .claude/ subfolder rules, skills,
settings.json) against:

1. The four Karpathy named principles (Think Before Coding, Simplicity First,
   Surgical Changes, Goal-Driven Execution) — note rules already embodying
   each, conflicts, and where each principle should be referenced as a named
   anchor.

2. The Perplexity research findings on community-deployed mitigations —
   especially: project CLAUDE.md length under 60 lines (this is the project
   target, not the user's global), on-demand memory under .claude/rules/ or
   .claude/memory/, plan-mode usage for non-trivial work, manual /compact at
   50% context, and verification skills/hooks.

3. The current model context (Opus 4.7 vs 4.6) and whether this repo's work
   pattern would benefit from defaulting to Opus 4.6 with selective 4.7
   invocation.

4. Anything in this repo's CLAUDE.md that:
   - Duplicates a rule now in ~/.claude/CLAUDE.md (would be removed at the
     project level since the global covers it)
   - Contradicts the new global (must be reconciled or explicitly overridden
     with a rationale comment)
   - Is stale (refers to an incident, model, or tool no longer in use)
   - Is missing but should be present (a project-specific deviation from the
     global that the project relies on)

DO NOT EDIT yet. Produce a report with these sections:

  A. Project CLAUDE.md current state (size, line count, top-level structure)
  B. Karpathy principle alignment (per-principle: covered? conflicting? missing?)
  C. Recommendations against research findings (specific lines + proposed change)
  D. Stale or contradictory content (specific lines + why)
  E. Missing content the project actually needs (with one-line justification each)
  F. Net effect estimate (lines added, lines removed, lines moved)
  G. Risk-ranked change list — lowest-risk cuts first, additions next, riskier
     consolidations last.

Report under 800 words. Use file_path:line_number refs. Don't recommend
deleting any rule that names a real past incident in THIS project.
EOF

# ── RUN ───────────────────────────────────────────────────────────────────
echo "Reconcile rules — batch audit"
echo "Date: $DATE"
echo "Repos: ${#REPOS[@]}"
echo

successes=0
failures=0
skipped=0

for repo in "${REPOS[@]}"; do
  name=$(basename "$repo")

  if [ ! -d "$repo" ]; then
    echo "[skip] $name — directory not found"
    skipped=$((skipped + 1))
    continue
  fi

  if [ ! -f "$repo/CLAUDE.md" ]; then
    echo "[skip] $name — no CLAUDE.md"
    skipped=$((skipped + 1))
    continue
  fi

  audit_dir="$repo/.claude/audits"
  report="$audit_dir/$REPORT_NAME"

  echo "── $name ──"
  mkdir -p "$audit_dir"

  if (cd "$repo" && claude -p "$PROMPT" > "$report" 2>&1); then
    lines=$(wc -l < "$report")
    echo "[done] $name → $report ($lines lines)"
    successes=$((successes + 1))
  else
    echo "[fail] $name — see $report for partial output"
    failures=$((failures + 1))
  fi
  echo
done

# ── SUMMARY ───────────────────────────────────────────────────────────────
echo "──────────────────────────────────────────────"
echo "Audit complete: $successes succeeded, $failures failed, $skipped skipped"
echo
echo "Reports written to <repo>/.claude/audits/$REPORT_NAME"
echo "No project files were edited."
echo
echo "Next: review each report's 'G. Risk-ranked change list' section,"
echo "then apply approved changes per the implementation plan:"
echo "  $PROBLEM_DIR/research/implementation-plan.md"
