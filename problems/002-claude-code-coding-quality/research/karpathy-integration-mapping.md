# Karpathy 4 Principles → `~/.claude/CLAUDE.md` Integration Mapping

**Filed:** 2026-04-27
**Source repo:** [forrestchang/andrej-karpathy-skills](https://github.com/forrestchang/andrej-karpathy-skills)
**Karpathy original observations:** [@karpathy on X, status 2015883857489522876](https://x.com/karpathy/status/2015883857489522876)
**Mapping by:** Claude Code subagent (`general-purpose`), invoked from main session

The four principles are:
1. **Think Before Coding** — Don't assume. Don't hide confusion. Surface tradeoffs.
2. **Simplicity First** — Minimum code that solves the problem. Nothing speculative.
3. **Surgical Changes** — Touch only what you must. Clean up only your own mess.
4. **Goal-Driven Execution** — Define success criteria. Loop until verified.

The user wants these named anchors in their global rules so they can invoke a principle by name mid-conversation ("apply Surgical Changes here") rather than re-explain a failure mode each time.

---

## Per-principle coverage analysis

### 1. Think Before Coding

**Existing coverage in `~/.claude/CLAUDE.md`:**
- L5: `"should work" banned`; replace with `"I verified"` or `"I haven't tested this yet"`
- L70-76: "Announce deviations from best practice BEFORE implementing" — covers tradeoff surfacing
- L107: "'We should be able to…' — banned"
- L108: "'Let me just try…' without curl confirmation — banned"

**Net-new content not covered anywhere:** "Multiple interpretations → present them, don't pick silently." "If something is unclear, stop. Name what's confusing."

**Conflicts:** None.

**Proposal:** **(b) Named anchor only** — add one labeled line in the Red flag phrases area pointing at existing rules.

---

### 2. Simplicity First

**Existing coverage:** Nothing direct. The closest is `L155-163` "AI Prompt Architecture" — but that's about prompt design for downstream AI systems, not code.

**Net-new content:** Nearly all of it. No existing rule says "minimum code, no speculative abstractions, no flexibility not requested, no error handling for impossible scenarios."

**Conflicts:** None.

**Proposal:** **(c) Net-new mini-section** — this is the only principle that genuinely adds new behavior. Compress to 3 lines.

---

### 3. Surgical Changes

**Existing coverage:**
- L128: "Update README, project CLAUDE.md… if they exist" (scoped, not contradictory)
- Implied by L129: "Never commit/push unless explicitly asked"

**Net-new content:** "Don't improve adjacent code." "Match existing style." "Mention unrelated dead code, don't delete it." "Every changed line traces to user's request."

**Conflicts:** Soft tension with the **Post-Commit Checklist** (which intentionally expands scope: update related issues, parent epics, README). This is resolvable — Surgical Changes governs *code edits*, Post-Commit Checklist governs *post-commit housekeeping*. The new wording must make that distinction explicit so the principle does not cause skipping of post-commit work.

**Proposal:** **(b) Named anchor with 2-line summary**. No existing rule covers scope discipline within a code change.

---

### 4. Goal-Driven Execution

**Existing coverage:**
- L3-10: Evidence Before Claims (verify loop)
- L10: "make the change → verify it worked → then report"
- L137: "Never conflate 'designed' with 'done'"
- L194: "Verify before claiming done"

**Net-new content:** "Write a test that reproduces the bug, then make it pass" reframing; "state a brief plan with verification per step" for multi-step work.

**Conflicts:** None — strong overlap with Evidence Before Claims.

**Proposal:** **(a) Fold** — append one bullet to Evidence Before Claims.

---

## Minimal integration plan (additive only — no existing rule cut)

**Edit 1** — append to Evidence Before Claims (after the existing "After every fix" bullet):
```
- **Goal-Driven Execution:** "Fix the bug" → write a failing test first, then make it pass. For multi-step work, state a brief plan with per-step verification before starting.
```

**Edit 2** — append at the end of API Documentation §5 "Red flag phrases":
```
- **Think Before Coding:** if multiple interpretations of the request exist, present them — don't pick silently. If something is unclear, stop. Name what's confusing. Ask.
```

**Edit 3** — new 5-line subsection under `## Working Rules` (after AI Prompt Architecture):
```
### Simplicity First & Surgical Changes

- **Simplicity First:** minimum code that solves the problem. No speculative abstractions, no unrequested flexibility, no error handling for impossible cases. If a senior engineer would call it overcomplicated, simplify.
- **Surgical Changes:** touch only what the request requires. Don't refactor adjacent code, don't reformat, match existing style. Mention unrelated dead code — don't delete it. Every changed line should trace to the request. (Note: governs *code edits*, not *post-commit housekeeping* — the Post-Commit Checklist still applies.)
```

**Edit 4** — append to "REPEATED: Critical Rules" footer as bullet 5:
```
5. **Think → Simplify → Edit surgically → Verify against criteria.** If you're guessing, stop and ask.
```

---

## Placement summary

| Principle | Location | Type |
|---|---|---|
| Goal-Driven Execution | Fold into Evidence Before Claims (top of file) | (a) |
| Think Before Coding | Anchor under API Doc §5 Red flag phrases | (b) |
| Simplicity First | New subsection under Working Rules | (c) |
| Surgical Changes | Same new subsection (paired with Simplicity First) | (c) |

All four principle names survive as bolded anchors, invocable mid-conversation.

## Net byte estimate

- Edit 1: ~180 bytes
- Edit 2: ~190 bytes
- Edit 3: ~520 bytes
- Edit 4: ~115 bytes
- **Total: ~1,005 bytes added** (~17 lines)

File grows from 11,854 → 12,860 bytes (~8.5%). All four named failure-mode anchors preserved; no duplicated prose with existing Evidence / Self-Service / Deviation rules. No existing rule cut — additive only.
