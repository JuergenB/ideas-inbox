# Claude Code Coding Quality Regression — Global Rules Audit, Karpathy Integration, Per-Repo Reconciliation

**GitHub issue:** [#14](https://github.com/JuergenB/ideas-inbox/issues/14)
**Status:** Open — research complete, implementation pending user approval
**Filed:** 2026-04-27
**Affected work:** All active repositories using Claude Code (polywiz-app, the-intersect-curator, artwork-archive, ideas-inbox, presentation-viewer-site, others)
**Owner:** Juergen Berkessel
**Backup of global rules:** `~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md` (verified 11,854 bytes, identical to source)

---

## TL;DR

Between **March 4 and April 20, 2026**, Claude Code shipped three separate engineering changes that degraded coding output across all model versions: a reasoning-effort downgrade, a caching bug that pruned conversation history every turn, and a verbosity-reduction prompt change that interacted badly with other harness modifications. **Anthropic acknowledged all three in an [April 23 engineering postmortem](https://www.anthropic.com/engineering/april-23-postmortem).** None of these affected the Claude API directly — they were all confined to the Claude Code product layer. Cursor, Aider, GitHub Copilot, and Devin showed no comparable degradation in the same window, confirming the issue was integration-specific.

The user's lived experience — *"jumping to conclusions, making assumptions, lost information, bugs being introduced, instructions ignored"* — is **directly explained by these documented bugs**, not by a general decline in model capability. By April 25, with the bugs fixed in v2.1.116, properly configured Claude Code installations are reported to have recovered to and exceeded baseline.

This brief proposes a **two-track response**: (1) an immediate, additive update to `~/.claude/CLAUDE.md` introducing four named behavioral principles (Karpathy's "Think Before Coding / Simplicity First / Surgical Changes / Goal-Driven Execution") that the user can invoke by name mid-conversation; (2) a per-repo reconciliation template that brings each project's `CLAUDE.md` into alignment with the new global without silently editing project rules. Aggressive consolidation of the existing global rules is **deferred** by design, to avoid coupling two experiments.

---

## What changed in Claude Code, March–April 2026 (validated)

Source: [Anthropic engineering postmortem](https://www.anthropic.com/engineering/april-23-postmortem), April 23, 2026. Cross-referenced against community reports on [Hacker News](https://news.ycombinator.com/item?id=47793411), [GitHub Issues](https://github.com/anthropics/claude-code/issues/28868), [Fortune coverage of the user backlash](https://fortune.com/2026/04/24/anthropic-engineering-missteps-claude-code-performance-decline-user-backlash/), and the [Perplexity deep research report in this folder](research/perplexity-2026-04-27-deep-research.md).

### Bug 1 — Reasoning-effort downgrade (March 4 → fixed April 16)

Claude Code's default `effort` parameter was changed from `high` to `medium` to reduce UI freezing during extended thinking. Output quality dropped immediately. Anthropic's postmortem calls this **"the wrong tradeoff."** Affected Sonnet 4.6 and Opus 4.6 in Claude Code; *did not affect the API*. Restored to `high` (and `xhigh` for Opus 4.7) on April 16 with the Opus 4.7 release.

### Bug 2 — Caching pruning bug (March 26 → fixed April 10 in v2.1.101)

A cache-optimization change intended to prune reasoning history *once* after a session had been idle for an hour instead executed the pruning **on every turn** for the rest of the session. Effect: Claude appeared to forget architectural decisions made just turns earlier, made odd tool choices, became repetitive, and consumed more tokens (because each turn was a cache miss). **This is the direct technical explanation for the user's "lost information" complaints and the felt sense that recent sessions degrade rapidly after a few turns.** Affected Sonnet 4.6 and Opus 4.6 in Claude Code.

### Bug 3 — Verbosity-reduction prompt change (April 16 → reverted April 20 in v2.1.116)

A system-prompt instruction shipped with Opus 4.7 to reduce verbosity. In isolation it passed testing. In combination with other prompt modifications already in the harness it produced a measurable 3% quality drop on Anthropic's internal benchmark across both Opus 4.6 and 4.7. Reverted four days later. Affected Sonnet 4.6, Opus 4.6, and Opus 4.7.

### Opus 4.7 tokenizer (released April 16, ongoing)

Not a bug, but a **disclosed-but-buried** change: Opus 4.7's tokenizer encodes the same English text into **1.0–1.35× as many tokens** as Opus 4.6. [Independent analysis by Simon Willison](https://dev.to/devtorres_/opus-47-uses-35-more-tokens-than-46-heres-what-im-doing-about-it-2del) found the Opus 4.7 system prompt itself uses 1.46× the tokens of the 4.6 system prompt, and high-resolution images use 3× the tokens at the new max resolution. Per-token pricing was unchanged, so this is an **effective 35–40% cost increase** for equivalent work on prose-heavy prompts. Veracode's testing found Opus 4.7 introduces vulnerabilities in 52% of coding tasks (vs. 30% for OpenAI models) — a finding that warrants caution on security-sensitive work even now that the harness bugs are fixed.

### Why competitors were unaffected

[MorphLLM's March benchmarking](https://www.morphllm.com/ai-coding-agent), [Builder.io's Cursor vs Claude Code comparison](https://www.builder.io/blog/cursor-vs-claude-code), and the [Aider ecosystem](https://www.developersdigest.tech/blog/aider-vs-claude-code) reported no comparable degradation in the same March-April window. Aider in particular is model-agnostic and uses the same Claude API — yet Aider users reported normal performance. This is the strongest evidence that the bugs were Claude-Code-harness-specific, not Claude-model-level.

---

## How this maps to the user's specific frustrations

| User-reported symptom | Technical root cause (validated) |
|---|---|
| "Lost information mid-session" | Bug 2 — caching pruning, every turn instead of once |
| "Bugs introduced that weren't there before, instructions ignored" | Bug 1 — reduced reasoning budget; Bug 3 — verbosity-prompt interaction |
| "Coding taking place without common-sense check marks" | Bug 1 — model not thinking long enough to verify; Bug 2 — context dropped |
| "Made-up solutions, drive-by changes" | Cumulative effect of all three; degraded models default to fluent confabulation |
| "Performance hasn't improved on Opus 4.7 even though it's marketed as better" | True Opus 4.7 capability *is* better — but harness bugs masked it through April 20, and the tokenizer change inflated costs without the user seeing the underlying quality lift |

The user is **not imagining the regression**, and the YouTube/Reddit corroboration the user mentioned is consistent with what Anthropic admitted on April 23.

---

## What we are NOT changing (deferred by design)

Two changes that the research suggests are valuable but that we are explicitly *not* doing in this round, with reasons:

### Not consolidating the existing global `~/.claude/CLAUDE.md`

The audit at [`research/internal-audit-claude-md.md`](research/internal-audit-claude-md.md) identified ~65–70 lines of compressible content. The Perplexity research adds context: the file's current ~196 lines is at the upper edge of the 150–200-instruction budget that frontier LLMs reliably follow ([HuggingFace community guidance on Claude Code best practices](https://discuss.huggingface.co/t/10-essential-claude-code-best-practices-you-need-to-know/174731)).

**Why deferred:** the user's stated frustration is about "decisions made after the fact that make no sense." Coupling a consolidation experiment with a Karpathy-addition experiment makes it impossible to tell which change moved quality if quality changes. We do additive only now, observe over a week or two of real work, then revisit consolidation with evidence.

The lowest-risk verbatim-duplicate cuts (e.g., the L121 / L181-183 MEMORY.md duplicate) can be done independently if the user wants — they recover ~5 lines with near-zero risk.

### Not migrating to multi-tool portability now

The Karpathy repo demonstrates a three-format pattern (CLAUDE.md, `.cursor/rules/*.mdc`, portable SKILL.md). A clean cross-tool setup would unify these via a `~/dev/dotfiles/coding-principles.md` source-of-truth and an `init-principles` bootstrap script. This is worth doing but is a separate experiment from "fix Claude Code now," and warrants its own issue once the local-Claude-Code experiment yields evidence.

---

## What we ARE doing (additive, low-risk)

### A. Add four Karpathy named anchors to `~/.claude/CLAUDE.md`

Detailed mapping in [`research/karpathy-integration-mapping.md`](research/karpathy-integration-mapping.md). Summary:

| Principle | Where it goes | Type |
|---|---|---|
| **Goal-Driven Execution** | Fold one bullet into Evidence Before Claims | Mostly already covered |
| **Think Before Coding** | Anchor under API Doc §5 Red flag phrases | Anchor only |
| **Simplicity First** | New 2-line subsection under Working Rules | Net-new |
| **Surgical Changes** | Same new subsection (paired) | Net-new |
| (footer) | Append `Think → Simplify → Edit surgically → Verify against criteria. If you're guessing, stop and ask.` to REPEATED: Critical Rules | Recency reinforcement |

**Net byte change:** +~1,005 bytes / +~17 lines. No existing rule is cut. All four principle names survive as bolded anchors that the user can invoke mid-conversation by name, replacing per-failure re-explanation with a one-word correction.

### B. Adopt the research's evidence-backed mitigations the user is not yet using

The [Perplexity report's Top 10 mitigations table](research/perplexity-2026-04-27-deep-research.md) maps against the user's current setup as follows:

| Mitigation | User's current state | Action |
|---|---|---|
| Set `effort=xhigh` (Opus 4.7) / `high` (others) in `~/.claude/settings.json` | Unknown — needs check | **Verify and add if missing.** Single biggest restoration. |
| CLAUDE.md under 60 lines per project | Global is 196 lines; project files vary | Per-repo reconciliation will surface this; global stays at ~196 by choice (it's global, not project) |
| Manual `/compact` at 50% context | User pattern unknown | **Add to global as a habit rule.** |
| Plan mode (Shift+Tab twice) for non-trivial work | Not in current global | **Document in global as the default for multi-file work.** |
| TDD skill (`/tdd`, Superpowers) | Not installed | Optional — install if test-coverage gaps appear |
| `/ultrareview` sub-agent for code review | Already aware of (called out in user's harness instructions) | Continue using |
| PreToolUse hook for file deletion confirmation | Not installed | Optional — high impact if user has lost work to deletions |
| On-demand memory under `.claude/rules/` per project | Already partial — `~/.claude/references/` follows this pattern | Already aligned at user level; per-project to be reviewed in reconciliation |
| Default Opus 4.6, selective Opus 4.7 | Currently on Opus 4.7 (1M ctx) | **Decision required from user** — see Decision asks below |
| Run `/context` before large tasks | Not in current global | **Add to global as a session-start step for complex work.** |

### C. Per-repo reconciliation template

Paste-ready prompt at [`research/per-repo-revisit-template.md`](research/per-repo-revisit-template.md). The user runs it in each active repo. The agent in that repo audits the project's `CLAUDE.md` against the new global, reports what's stale / conflicting / missing, but does not edit. Each project's reconciliation gets logged at `<repo>/.claude/audits/2026-04-27-rule-reconciliation.md`.

Recommended order: polywiz-app → the-intersect-curator → artwork-archive → ideas-inbox → presentation-viewer-site → others as activity warrants.

---

## Decision asks (need user sign-off before any global edits)

1. **Apply the Karpathy additive integration to `~/.claude/CLAUDE.md` as specified in [`research/karpathy-integration-mapping.md`](research/karpathy-integration-mapping.md)?** (additive only, no existing rule cut, +~17 lines)

2. **Add the three research-backed habits to the global** — manual `/compact` at 50%, plan-mode for non-trivial work, `/context` diagnostic before large tasks? (~6-8 lines)

3. **Verify and set `effort=xhigh` in `~/.claude/settings.json` for Opus 4.7?** This is the single highest-impact change per the research and recovers the March 4 downgrade. Reversible.

4. **Default model: Opus 4.7 (status quo, 1M ctx, ~35% more expensive per task) or Opus 4.6 with selective 4.7?** Per the research, hybrid saves 20-30% on cost while preserving quality on hard problems. The 1M context window of 4.7 may justify keeping it as default if the user's work routinely benefits from it.

5. **Apply the lowest-risk verbatim-duplicate cuts** (L10 vs L5; L121 vs L181-183 MEMORY.md mention)? ~5 lines, near-zero risk, can be done now without coupling to a larger consolidation.

6. **Begin per-repo reconciliation** in priority order, starting with polywiz-app? Each run is audit-only; no project file is edited without the user's per-repo approval.

---

## Acceptance criteria

- [ ] User decisions captured on each of the six asks above
- [ ] `~/.claude/CLAUDE.md` updated per approved decisions; before/after byte count and line count recorded; backup intact at `~/.claude/backups/CLAUDE-2026-04-27-pre-karpathy.md`
- [ ] `~/.claude/settings.json` `effort` setting verified or set per decision 3
- [ ] Per-repo reconciliation run for at least the top three active repos within two weeks; reports logged at each repo's `.claude/audits/`
- [ ] Two-week observation window: user notes whether the four named principles ("Think Before Coding," etc.) are actually invoked mid-conversation, and whether the felt regression abates
- [ ] Follow-up issue filed at week 2 if the data supports the larger consolidation experiment proposed in the audit

---

## References

- **Anthropic engineering postmortem (April 23, 2026):** https://www.anthropic.com/engineering/april-23-postmortem
- **Anthropic Opus 4.7 release notes:** https://www.anthropic.com/news/claude-opus-4-7
- **Karpathy original observations:** https://x.com/karpathy/status/2015883857489522876
- **Karpathy guidelines repo:** https://github.com/forrestchang/andrej-karpathy-skills
- **Perplexity deep research (this folder):** [research/perplexity-2026-04-27-deep-research.md](research/perplexity-2026-04-27-deep-research.md) — 50 citations, Anthropic + Hacker News + GitHub Issues + Fortune + Marmelab + HuggingFace + Simon Willison's tokenizer analysis
- **Internal CLAUDE.md audit:** [research/internal-audit-claude-md.md](research/internal-audit-claude-md.md)
- **Karpathy integration mapping:** [research/karpathy-integration-mapping.md](research/karpathy-integration-mapping.md)
- **Per-repo reconciliation template:** [research/per-repo-revisit-template.md](research/per-repo-revisit-template.md)
