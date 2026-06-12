---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300;400&display=swap');

  :root {
    --a: #ff6b1a;
    --a2: #ff8c4a;
    --bg: #0c0c0c;
    --s: #111;
    --b: #1a1a1a;
    --m: #777;
    --t: #e0e0e0;
    --g: #22c55e;
    --r: #ef4444;
    --y: #f5a623;
    --blue: #0199fe;
    --body: #b0b0b0;
    --label: #888;
  }

  section {
    background-color: #0c0c0c;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(255,107,26,0.12) 100%);
    color: var(--t);
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    padding: 56px 72px;
    line-height: 1.5;
  }

  h1 { font-family: 'Outfit'; font-weight: 600; font-size: 2.2em; color: var(--t); letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 4px; }
  h2 { font-family: 'Raleway'; font-weight: 300; font-size: 1.2em; color: #aaa; margin: 0 0 20px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 400; }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.6em; color: var(--t); }

  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #151515; }

  section.bg-glow { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.20) 100%), radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.14) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.22) 100%); }
  section.bg-glow-green { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(34,197,94,0.18) 100%), radial-gradient(ellipse at 100% 0%, rgba(34,197,94,0.12) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.18) 100%); }
  section.bg-dots { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,153,254,0.14) 100%), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.14) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(1,153,254,0.25) 100%); }

  header { text-align: right; padding: 0; margin: 0; }
  header img { margin: 0; }

  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; display: inline-block; }

  table { width: 100%; border-collapse: collapse; font-size: 0.62em; margin-top: 6px; }
  th { font-family: 'Outfit'; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.82em; color: var(--m); text-align: left; padding: 8px 12px; border-bottom: 1px solid var(--b); }
  td { padding: 9px 12px; border-bottom: 1px solid var(--b); color: var(--body); vertical-align: top; }
  tr:last-child td { border-bottom: none; }
  table, thead, tbody, tr, th, td { background: transparent !important; }

  .row:hover { background: #161616; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }

  a { color: inherit; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/guideless-pricing-strategy/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px;" />

# Where Guideless Fits

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.98em; color: var(--body); margin-top: 14px; max-width: 780px;">A short positioning &amp; pricing-tier suggestion — how a single <strong>Solo / Creator</strong> tier could open a much larger segment without touching the team plan.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">A Polymash perspective</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">For the Guideless team</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">June 2026</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The Question Behind This Note

# "What Price Point Would You Be Comfortable With?"

<div style="font-size: 0.82em; color: var(--body); margin-bottom: 18px; line-height: 1.6; max-width: 880px;">Rokas asked the natural question. Rather than just hand over <strong>my number</strong>, it's more useful to look at where Guideless actually sits in the category — and answer from <strong>product positioning</strong>, not personal discount.</div>

<div style="display: flex; gap: 16px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--a); margin-bottom: 6px;">What I love</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">The zero-editing, AI-narrated workflow. Click through a process, get a clean guide — without thinking like a video editor.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--blue); margin-bottom: 6px;">Where it snags</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">One paid step — <strong>$29/mo</strong> — sitting beside tools that offer far more editing. For a quick-hit add-on, that's a hard jump from free.</div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Where Guideless Sits

# Same Category, Different Job

| Tool | Main job-to-be-done | Editing / flexibility |
|------|---------------------|------------------------|
| **Guideless** | Turn browser workflows into clear, AI-narrated guides — zero editing | <span style="color:var(--y);">Low</span> — auto narration & zooms; built for speed |
| **Guidde** | Deep, customizable AI documentation (video + rich guides) | <span style="color:var(--g);">High</span> — full editor, formats, enterprise control |
| **Loom** | General async video messaging & screen recording | <span style="color:var(--body);">Medium</span> — record, trim, manual VO; broad use |
| **Tella** | Creator-grade screen / camera recording & branding | <span style="color:var(--g);">High</span> — own VO, takes, layouts, timeline |
| **Screen Studio** | Polished, animated macOS product demos | <span style="color:var(--g);">Med–High</span> — auto zooms with tuneable pacing |

<div style="margin-top: 14px; font-size: 0.72em; color: var(--m); line-height: 1.55;">Guideless intentionally <strong>trades editability for speed</strong>. That's a real strength — but it places it in a <strong>complementary</strong> slot, not as a replacement for a primary editor.</div>

---

<!-- _class: bg-glow-orange -->

### Pricing Landscape Today

# Priced With The Heavy Tools — Built To Be Light

| Tool | Entry paid price (approx.) | Role in the stack |
|------|----------------------------|-------------------|
| **Guideless** | **$29 / user / mo** annual ($39 mo) | Quick, AI-narrated guides at scale |
| Guidde | ~$50 / user / mo (AI tier) | Enterprise-oriented documentation |
| Loom | Mid-teens / user / mo + free starter | Broad, company-wide async video |
| Tella | ~$6.50–$9.50 / mo (Pro / Premium, annual) | Solo creators & small teams |
| Screen Studio | One-time ~$89 license | Founders & product marketers |

<div style="margin-top: 14px; font-size: 0.74em; color: var(--body); line-height: 1.6;">The tension in one line: <strong>Guideless is priced at or above tools that give more creative control</strong>, even though it deliberately offers less. For a solo user, that makes the only paid tier hard to justify as a second tool.</div>

---

<!-- _class: bg-glow-gold -->

### The Underlying Principle

# People Pay For Control — Or For Speed

<div style="display: flex; gap: 18px; margin-top: 14px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 22px; border-top: 2px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.84em; color: var(--g); margin-bottom: 8px;">Pay a premium for control</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.6;">Tella & Screen Studio: own voiceover, multiple takes, rearrange, overlays, fine-tuned motion. I'll pay more because I can <strong>craft</strong> the result.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 22px; border-top: 2px solid var(--blue);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.84em; color: var(--blue); margin-bottom: 8px;">Pay a utility price for speed</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.6;">Guideless: instant, consistent, "good-enough" guides with no fiddling. Worth real money — at an <strong>add-on, utility-level</strong> price, not an editor's price.</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.78em; color: var(--m); line-height: 1.55;">Paying for simplicity works <em>up to the point</em> where lost flexibility starts to matter. Past that, the price has to be commensurate with the role.</div>

---

<!-- _class: bg-glow-orange -->

### The Gap In The Ladder

# Today There's Nothing Between $0 And $29

<div style="display: flex; gap: 14px; margin-top: 22px; align-items: flex-end; justify-content: center;">
  <div style="text-align: center;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 26px; width: 150px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.4em; color: var(--t);">Free</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">3 guides</div>
    </div>
  </div>
  <div style="font-family: 'Outfit'; font-size: 1.6em; color: var(--r); padding-bottom: 16px;">⟶</div>
  <div style="text-align: center; opacity: 0.45;">
    <div style="border: 1px dashed #555; border-radius: 10px; padding: 16px 26px; width: 150px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.0em; color: var(--m);">— missing —</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">the solo buyer</div>
    </div>
  </div>
  <div style="font-family: 'Outfit'; font-size: 1.6em; color: var(--r); padding-bottom: 16px;">⟶</div>
  <div style="text-align: center;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 26px; width: 150px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.4em; color: var(--t);">$29</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">team / pro</div>
    </div>
  </div>
</div>

<div style="margin-top: 22px; font-size: 0.78em; color: var(--body); line-height: 1.6; text-align: center; max-width: 820px; margin-left: auto; margin-right: auto;">The solo creator, consultant, or founder who already pays for Loom, Tella, or Screen Studio has <strong>no tier that fits</strong>. They love the workflow at free — then hit a wall priced for a whole team.</div>

---

<!-- _class: bg-glow-green -->

### The Suggestion

# Three Tiers, Not Two — Add A Solo Lane

<div style="display: flex; gap: 14px; margin-top: 14px; align-items: stretch;">

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 18px 20px;">
    <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">Keep as-is</span>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t); margin-top: 10px;">Free</div>
    <div style="font-size: 0.6em; color: var(--m); margin-bottom: 8px;">Onboarding</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Up to 3 guides, AI narration, sharing, watermark. The "it just works" moment.</div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid #ff6b1a55; border-radius: 12px; padding: 18px 20px; box-shadow: 0 0 28px rgba(255,107,26,0.12);">
    <span class="tag" style="background:#ff6b1a18; color:var(--a); border:1px solid #ff6b1a44;">New</span>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--a); margin-top: 10px;">Solo / Creator</div>
    <div style="font-size: 0.6em; color: var(--m); margin-bottom: 8px;">~$9 / user / mo · annual</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Core magic, no watermark, MP4 export, basic analytics. A monthly guide cap, single workspace. <strong>Limited by volume, not by features.</strong></div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 18px 20px;">
    <span class="tag" style="background:#0199fe18; color:var(--blue); border:1px solid #0199fe44;">Reframe</span>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t); margin-top: 10px;">Team / Pro</div>
    <div style="font-size: 0.6em; color: var(--m); margin-bottom: 8px;">~$29 / user / mo · annual</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Today's plan — now clearly the <strong>team</strong> tier: unlimited guides, workspaces, roles, advanced analytics, brand kits, priority support.</div>
  </div>

</div>

<div style="margin-top: 16px; font-size: 0.74em; color: var(--m); line-height: 1.55; text-align: center;">No discount to the existing plan. One lane added <em>beneath</em> it — Solo is priced like a nice utility; Team stays priced like a department solution.</div>

---

<!-- _class: bg-glow -->

### Why This Opens A Segment

# The Solo Tier Captures Buyers You Can't Reach Today

<div style="display: flex; gap: 16px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--a); margin-bottom: 6px;">Adoption, not ARPU</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Solo creators and consultants who already pay for Loom / Tella / Screen Studio add Guideless as an <strong>always-on quick-hit utility</strong> — if the price matches that role.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--blue); margin-bottom: 6px;">A pipeline into Team</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">These are the people who later bring Guideless to their teams and clients. The Solo tier is a <strong>top of funnel</strong>, not a leak — it feeds the $29 plan.</div>
  </div>
</div>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--a); border-radius: 8px; padding: 16px 20px; font-size: 0.78em; color: var(--body); line-height: 1.6;">A <strong>$9 Solo tier</strong> sits just above Tella's rock-bottom annual and well below Loom Business and the current $29 plan — the natural home for "I love it, but it's my second tool."</div>

---

<!-- _class: lead bg-hero -->

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/guideless-pricing-strategy/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px;" />

# Short Version

<div style="font-size: 0.86em; color: var(--body); margin-top: 12px; max-width: 840px; line-height: 1.65;">Guideless is brilliant as a fast, low-friction documentation tool — but its one paid tier is priced beside far more flexible tools. A dedicated <strong>Solo / Creator tier around $9/mo</strong>, between today's Free and Team plans, could open a much larger solo segment <strong>without diluting the team value at $29</strong>.</div>

<div style="margin-top: 22px; font-size: 0.72em; color: var(--m);">Happy to talk it through with your product team. — Juergen Berkessel, Polymash</div>

---

<!-- _paginate: true -->

# Sources & References
## Evidence behind the pricing claims in this deck

<div style="font-size: 0.62em; line-height: 1.6;">

**Guideless — Free (3 guides) & Pro ~$29/user/mo annual ($39 mo)** — <a href="https://guideless.ai/pricing/">guideless.ai/pricing</a>; <a href="https://www.g2.com/products/guideless-guideless/pricing">G2 — Guideless pricing</a>. Retrieved 2026-06.

**Guideless positions itself as "10× simpler" vs Guidde; compares to Loom** — <a href="https://guideless.ai/compare/guidde-alternative/">Guidde alternative</a> · <a href="https://guideless.ai/compare/loom-alternative/">Loom alternative</a> pages.

**Guidde — AI-narration business tier ~$50/user/mo** — <a href="https://guideless.ai/compare/guidde-alternative/">Guideless compare page</a>; <a href="https://slashdot.org/software/comparison/Guidde-vs-Guideless/">Slashdot comparison</a>.

**Loom — Business/AI plans mid-teens per user/mo + free Starter** — <a href="https://www.atlassian.com/software/loom/pricing">Atlassian / Loom pricing</a>.

**Tella — Pro ~$6.50/mo & Premium ~$9.50/mo (annual)** — <a href="https://www.tella.com/pricing">tella.com/pricing</a> · <a href="https://www.tella.com/premium">tella.com/premium</a>.

**Screen Studio — one-time license ~$89** — <a href="https://screen.studio">screen.studio</a> · <a href="https://www.trustradius.com/products/screen-studio/pricing">TrustRadius pricing</a>.

</div>

<p style="font-size: 0.55em; color: var(--m); margin-top: 18px;">Full URLs, retrieval dates, and the email thread that prompted this: see <strong style="color: var(--body); font-weight: 600;">research/sources.md</strong> in the idea folder. Pricing is approximate and was current as of June 2026 — verify on each vendor's page before quoting.</p>
