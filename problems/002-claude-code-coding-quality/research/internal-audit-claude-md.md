# Internal Audit — `~/.claude/CLAUDE.md` Consolidation Opportunities

**Filed:** 2026-04-27
**Auditor:** Claude Code subagent (`general-purpose`), invoked from main session
**Subject of audit:** `~/.claude/CLAUDE.md` (11,854 bytes / ~196 lines as of 2026-04-27)
**Backup:** `~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md`

This audit was commissioned in response to the user's frustration with discovering "decisions made after the fact that make no sense" — i.e., wanting to see and approve any consolidation rather than have it happen quietly. The agent was instructed to find duplicates, near-duplicates, and abstract restatements that could be compressed without losing forcing-function detail; to preserve every rule that names a real past incident (PolyWiz / GitGuardian / Auphonic / the-intersect-curator); and to honestly report whether ~60-80 lines of headroom is achievable.

---

## 1. Duplicates / near-duplicates identified

| Location A | Location B | Overlap |
|---|---|---|
| L5 "Never claim something is 'fixed', 'done', or 'working' without verifying" | L10 "make the change → verify it worked → then report. Never skip step 2" | Same rule, restated within 5 lines |
| L7 "UI changes: Take a Playwright screenshot…" | L28-35 "CRITICAL: Playwright Verification" section | Playwright install/screenshot guidance appears 3× total (also L119 in Session Start) |
| L31 "Ensure Playwright is installed in the project" | L119 "Verify Playwright is installed — if not, install it" | Verbatim duplication of the install check |
| L107 "'We should be able to…' — banned" | L5 "The phrase 'should work' is banned" | Same banned-phrase rule, two sections |
| L108 "'Let me just try…' without curl confirmation" | L9 "API changes: Call the endpoint with curl" | Overlapping curl-first rule |
| L121 "Read `~/.claude/memory/MEMORY.md` and load relevant memory files" | L183 "MANDATORY: At session start, read `~/.claude/memory/MEMORY.md`…" | Verbatim duplicate, two sections apart |
| L80-89 integration-failure reporting protocol | L109 "Reporting 'it failed' without the doc context, request/response shapes, and options above" | L109 just restates the L80-89 contract |

## 2. Contradictions

- **L67** "tell the user… Should we add it first, or proceed without" softly conflicts with **L24-26 Self-Service Rule** "Never ask the user to perform an action you can perform yourself." Not a hard contradiction (user *decision* vs user *action*) but the asymmetry warrants tightening so future sessions don't pick the wrong side.
- **L129** "Never commit/push unless explicitly asked" lives inside a *Post-Commit Checklist* — the checklist's existence implies a commit just happened, then tells you not to commit. Misplaced.

## 3. Cut candidates (with justification)

| Lines | Why safe to cut |
|---|---|
| L10 | Restates L5 |
| L28-35 (Playwright Verification section) | Fully covered by L7 + Screenshot Limits; fold the broken-images check into L7 |
| L41-44 ("The math" block) | Explanatory; the rule at L37 + L48 stands alone — but see Section 5 caveat |
| L46 "Rules — no exceptions:" header line + L51-52 | L51 restates "compute before screenshot," L52 is generic ("don't retry blindly") |
| L101-103 Context7 MCP | Abstract, doesn't earn bytes; one-liner suffices or cut |
| L105-109 Red flag phrases (entire subsection) | L107/L108/L109 all duplicate earlier rules |
| L131-137 Issue Tracking restatements | Keep L134 (the concrete user-feedback forcing function); cut L133/L135-137 |
| L155-163 AI Prompt Architecture | Abstract meta-advice, no forcing function, no incident — move to `~/.claude/references/prompt-architecture.md` |
| L165-168 Bash Commands | Pre-approved list belongs in `settings.json`, not prose |
| L181-183 Global Memory | Verbatim duplicate of L121 |
| L185-188 Reference Files | Pointer block, could compress to one line |

## 4. Merge proposals

- **Playwright Verification (L28-35) folds into Evidence Before Claims (L7).** Preview merged line: `UI changes: Playwright screenshot of the affected page; check broken images (img.complete && img.naturalWidth === 0); verify elements/counts/filters; install Playwright if missing.`
- **Red flag phrases (L105-109) folds into Evidence Before Claims.** Already covered; delete section, append: `'should work', 'we should be able to', 'let me just try' all banned`.
- **Global Memory (L181-183) folds into Session Start (L115-121).** L121 already says it; delete the duplicate section, keep only the n8n/Airtable/Vercel pre-proposal check as a one-liner under Working Rules.
- **Issue Tracking (L131-137) folds into Issue Priority Labels (L139-149)** under one "Issues" heading.
- **AI Prompt Architecture (L155-163)** moves out of CLAUDE.md into `~/.claude/references/prompt-architecture.md` (referenced on demand like `n8n-platform.md`).

## 5. Estimated byte savings

- Cuts: ~49 lines
- Merge tightening: ~8-10 lines
- Move-to-reference: +9 lines reclaimed
- **Total: ~65-70 lines compressible** out of 196

## 6. Preserved untouched (load-bearing — do not cut)

- L12-22 (PolyWiz / GitGuardian credential-leak incident)
- L37-39 (PolyWiz screenshot-dimension session-loss incident)
- L60-99 (Auphonic-named integration-failure reporting contract)
- L150+ (the-intersect-curator instance-specific scripts incident — L84 of recently-updated file)
- L170-179 (concrete clickable-refs forcing function)
- "REPEATED: Critical Rules" footer — intentional recency reinforcement, NOT duplication

## ⚠️ Important caveat from main-session reviewer

The audit assumes "duplication = bloat." The Perplexity research returned alongside this audit (see `perplexity-2026-04-27-deep-research.md`) makes a different point that partially counters the audit's recommendation:

> Repetition isn't always bloat — it's recency reinforcement. Frontier LLMs reliably follow ~150-200 distinct instructions; Claude Code's harness already consumes ~50, so the remaining headroom is small. When a rule appears 2-3 times in different sections, it's earning attention budget at the cost of byte budget — and the user's existing failure modes ("instructions ignored mid-session") suggest the file may be dropping rules at the high end of the budget.

**Implication:** the cuts above are theoretically sound but may have been load-bearing in practice. The user's running ~196 lines on a model with limited instruction budget — close to or above the upper limit per HumanLayer's published guidance. Reducing to ~130 lines is *probably* a net win for instruction adherence, but the cleaner experiment is:

1. **First:** apply only the lowest-risk cuts (verbatim duplicates: L10 vs L5, L121 vs L181-183) — these recover ~5 lines with near-zero risk.
2. **Then:** add Karpathy named anchors (~17 lines, additive).
3. **Run for a week or two** with that change and measure whether instruction-following improves or regresses.
4. **Only then:** revisit the larger consolidation candidates (L28-35 Playwright section, L155-163 AI Prompt Architecture move, etc.) with evidence.

This is the cautious-but-progressing path the user explicitly asked for ("don't lose what we are already working on").
