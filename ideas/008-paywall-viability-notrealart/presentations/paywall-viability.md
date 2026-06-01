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

  .row:hover { background: #161616; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }

  a { color: inherit; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px; font-family: 'Outfit'; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: var(--a);">NOT REAL ART</div>

# Should We Put Up a Paywall?

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.9em; color: #aaa; margin-top: 14px; max-width: 720px;">A traffic-and-loyalty reality check before we tax our readers. What it takes for a paywall to pay — and how NotRealArt.com actually compares.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">NotRealArt.com</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">For discussion with Scott</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">June 2026</span>
</div>

---

<!-- _class: bg-dots -->

### The Question On The Table

# The Proposal

<div style="display: flex; gap: 24px; margin-top: 16px; align-items: stretch;">
  <div style="flex: 1.3; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">What's Being Considered</div>
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">
      Install a <strong>metered subscription paywall</strong> on NotRealArt.com — let visitors read four or five articles free, then require a paid sign-up to read more. The goal: turn our audience into recurring subscription revenue.
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">The Honest Test</div>
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">
      A paywall is the right tool for some publishers. The question isn't whether paywalls <em>work</em> — it's whether <strong>our traffic and our reader loyalty</strong> are anywhere near the level a paywall needs to earn more than it costs.
    </div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.74em; color: var(--m); line-height: 1.6;">This deck answers that test with industry benchmarks and our own UserMaven data — before we commit engineering time and risk the reader relationship.</div>

---

<!-- _class: bg-glow-orange -->

### Before We Build It — Four Worries

# What A Paywall Could Cost Us

<div style="display: flex; gap: 16px; margin-top: 18px; flex-wrap: wrap;">
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--r); margin-bottom: 6px;">Alienate the audience</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">An art-lover community arrives to be inspired, not gated. A wall says "pay to look" — the opposite of the welcome we want.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--r); margin-bottom: 6px;">No meaningful revenue</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">At our volume and repeat rate, the math (slides ahead) lands at roughly zero dollars — after fees and platform costs, likely negative.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--y); margin-bottom: 6px;">Complicate the infrastructure</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Accounts, billing, metering logic, churn handling, support — a whole subscription stack to maintain for a handful of dollars.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--y); margin-bottom: 6px;">Slow the experience & dim the brand</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Meter scripts and login walls add friction and load time — and signal to artists and art lovers that we monetize attention over community.</div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### How The Model Actually Works

# A Metered Paywall Taxes Loyalty, Not Traffic

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">Revenue from a meter doesn't come from how many people visit. It comes from the small core who come back <strong>often enough to hit the limit</strong> — and a fraction of those who then pay. Casual one-time visitors never see the wall.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 26px;">
  <div style="display: flex; align-items: center; gap: 10px; justify-content: space-between;">
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--t);">All visitors</div>
      <div style="font-size: 0.66em; color: var(--m); margin-top: 4px;">Arrive from search & social</div>
    </div>
    <div style="color: var(--m); font-size: 1.4em;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--blue);">Returning readers</div>
      <div style="font-size: 0.66em; color: var(--m); margin-top: 4px;">Come back again & again</div>
    </div>
    <div style="color: var(--m); font-size: 1.4em;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--y);">Hit the meter</div>
      <div style="font-size: 0.66em; color: var(--m); margin-top: 4px;">Read past the free limit</div>
    </div>
    <div style="color: var(--m); font-size: 1.4em;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--g);">Subscribe</div>
      <div style="font-size: 0.66em; color: var(--m); margin-top: 4px;">1–3% of those who hit it</div>
    </div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.72em; color: var(--m); line-height: 1.6;">The entire engine runs on the second box — <strong>returning readers</strong>. If almost nobody comes back, the funnel is empty before it starts.</div>

---

<!-- _class: bg-glow-gold -->

### What It Takes — Two Prerequisites

# Paywalls Need Volume AND Loyalty

<div style="display: flex; gap: 20px; margin-top: 18px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px;">Prerequisite 1 — Volume</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--t); margin-bottom: 10px;">Hundreds of thousands of pageviews a month</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">Only ~0.5% of monthly unique visitors ever pay. A top performer converts ~1,000 subscribers per <strong>1,000,000</strong> monthly pageviews; the average is ~250. The funnel only produces real money at scale.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px;">Prerequisite 2 — Loyalty</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--t); margin-bottom: 10px;">A large base of habitual return readers</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">Healthy news sites see <strong>30–40%+</strong> of traffic returning, and ~10% of readers drive 74% of revenue. The meter only earns from people loyal enough to come back and read past the limit.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.72em; color: var(--m); line-height: 1.55;">Both are required. High volume with no loyalty, or high loyalty at tiny volume, still fails the math.</div>

---

<!-- _class: bg-glow-orange -->

### The Industry Funnel

# What The Benchmarks Say A Paywall Returns

<div style="font-size: 0.74em; color: var(--body); margin-bottom: 14px; line-height: 1.6;">Across 85+ digital publishers, the metered funnel is brutally thin at every step. These are the numbers a healthy, loyal, high-traffic publisher hits.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 12px 22px;">

<div class="row" style="display: flex; align-items: center; padding: 11px 8px; border-bottom: 1px solid var(--b);">
  <div style="flex: 2.4; font-size: 0.78em; color: var(--t);">Monthly unique visitors who <strong>hit the paywall</strong></div>
  <div style="flex: 1; text-align: right; font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--blue);">3–4%</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 8px; border-bottom: 1px solid var(--b);">
  <div style="flex: 2.4; font-size: 0.78em; color: var(--t);">"Hit rate" — high performers vs. struggling publishers</div>
  <div style="flex: 1; text-align: right; font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t);">&gt;6% <span style="color: var(--m); font-size: 0.7em;">vs 1.8%</span></div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 8px; border-bottom: 1px solid var(--b);">
  <div style="flex: 2.4; font-size: 0.78em; color: var(--t);">Anonymous visitor &rarr; paid subscriber (top performers)</div>
  <div style="flex: 1; text-align: right; font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--g);">~2.2%</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 8px; border-bottom: 1px solid var(--b);">
  <div style="flex: 2.4; font-size: 0.78em; color: var(--t);">Monthly unique visitors who <strong>actually pay</strong></div>
  <div style="flex: 1; text-align: right; font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--a);">~0.5%</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 8px;">
  <div style="flex: 2.4; font-size: 0.78em; color: var(--t);">Of the <em>most engaged</em> visitors, share willing to subscribe</div>
  <div style="flex: 1; text-align: right; font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t);">5–10%</div>
</div>

</div>

<div style="margin-top: 12px; font-size: 0.68em; color: var(--m);">Every one of these assumes a loyal, returning audience. Hold these numbers — we'll apply them to NotRealArt.com next.</div>

---

<!-- _class: bg-glow-orange -->

### NotRealArt.com — Reality Check #1

# Volume: We're Two Orders Of Magnitude Short

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 18px; line-height: 1.6;">A metered paywall starts producing meaningful revenue in the <strong>hundreds of thousands to millions</strong> of monthly pageviews. We're at roughly <strong>5,000 visits a month</strong>.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 26px 28px;">
  <div style="display: flex; align-items: flex-end; gap: 36px; height: 220px;">
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--a); margin-bottom: 6px;">~5K</div>
      <div style="width: 70%; background: linear-gradient(180deg, var(--a), #cc5515); border-radius: 4px 4px 0 0; height: 2px; min-height: 3px;"></div>
      <div style="font-size: 0.64em; color: var(--m); margin-top: 10px; text-align: center;">NotRealArt.com<br/>~5,000 / mo</div>
    </div>
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--blue); margin-bottom: 6px;">~250K</div>
      <div style="width: 70%; background: linear-gradient(180deg, var(--blue), #016fb5); border-radius: 4px 4px 0 0; height: 55px;"></div>
      <div style="font-size: 0.64em; color: var(--m); margin-top: 10px; text-align: center;">Entry threshold<br/>where a meter starts to pay</div>
    </div>
    <div style="flex: 1; display: flex; flex-direction: column; align-items: center; justify-content: flex-end; height: 100%;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--g); margin-bottom: 6px;">~1M</div>
      <div style="width: 70%; background: linear-gradient(180deg, var(--g), #15803d); border-radius: 4px 4px 0 0; height: 200px;"></div>
      <div style="font-size: 0.64em; color: var(--m); margin-top: 10px; text-align: center;">Where ~250–1,000<br/>subscribers/mo appear</div>
    </div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.7em; color: var(--m); line-height: 1.55;">At ~5,000 visits, our bar is barely a sliver. Even the <em>entry</em> threshold is ~50&times; our current traffic.</div>

---

<!-- _class: bg-glow-orange -->

### NotRealArt.com — Reality Check #2 (The Decisive One)

# Loyalty: Almost No One Comes Back

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 14px; line-height: 1.6;">Our UserMaven cohort retention. A meter earns only from <strong>Period 1+</strong> — the readers who return. Period 1 retention averages <strong>1.1%</strong>. Roughly <strong>1 in 90 visitors ever comes back at all</strong> — let alone often enough to read past a 5-article limit.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 26px;">
  <div style="display: flex; align-items: center; gap: 10px;">
    <div style="flex: 1; text-align: center; background: #22c55e14; border: 1px solid #22c55e33; border-radius: 8px; padding: 16px 8px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.6em; color: var(--g);">100%</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">Period 0<br/>First visit</div>
    </div>
    <div style="color: var(--r); font-size: 1.3em; font-family: 'Outfit'; font-weight: 700;">&minus;99%</div>
    <div style="flex: 1; text-align: center; background: #ef444412; border: 1px solid #ef444430; border-radius: 8px; padding: 16px 8px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.6em; color: var(--r);">1.1%</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">Period 1<br/>Return once</div>
    </div>
    <div style="color: var(--m); font-size: 1.3em; font-family: 'Outfit';">&rarr;</div>
    <div style="flex: 1; text-align: center; background: var(--bg); border: 1px solid var(--b); border-radius: 8px; padding: 16px 8px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.6em; color: var(--m);">0.4%</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">Period 2</div>
    </div>
    <div style="flex: 1; text-align: center; background: var(--bg); border: 1px solid var(--b); border-radius: 8px; padding: 16px 8px;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.6em; color: var(--m);">0.1%</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px;">Period 5</div>
    </div>
  </div>
  <div style="margin-top: 14px; font-size: 0.66em; color: var(--m); text-align: center;">Cohort average across Nov 2025 – May 2026 (49,538 users). Source: UserMaven retention report.</div>
</div>

<div style="margin-top: 14px; font-size: 0.72em; color: var(--a); line-height: 1.55;">Benchmark loyalty is 30–40% returning. Ours is ~1%. The audience a paywall taxes effectively does not exist here.</div>

---

<!-- _class: bg-glow-orange -->

### Do The Math — Generous Assumptions

# Best Case, The Meter Earns ~$0

<div style="font-size: 0.74em; color: var(--body); margin-bottom: 14px; line-height: 1.6;">Applying the funnel to our numbers — and being generous at every step.</div>

<div style="display: flex; gap: 14px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--t);">5,000</div>
    <div style="font-size: 0.64em; color: var(--m); margin-top: 4px;">Monthly visits</div>
  </div>
  <div style="display: flex; align-items: center; color: var(--m); font-size: 1.2em;">&rarr;</div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--blue);">~55</div>
    <div style="font-size: 0.64em; color: var(--m); margin-top: 4px;">Return at all (1.1%)</div>
  </div>
  <div style="display: flex; align-items: center; color: var(--m); font-size: 1.2em;">&rarr;</div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--y);">~0–1</div>
    <div style="font-size: 0.64em; color: var(--m); margin-top: 4px;">Read past the meter</div>
  </div>
  <div style="display: flex; align-items: center; color: var(--m); font-size: 1.2em;">&rarr;</div>
  <div style="flex: 1; background: #ef444412; border: 1px solid #ef444430; border-radius: 10px; padding: 16px 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--r);">~$0</div>
    <div style="font-size: 0.64em; color: var(--m); margin-top: 4px;">Subscribers / mo</div>
  </div>
</div>

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Even Wildly Generous</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Apply the benchmark 0.5%-of-uniques-pay (which assumes loyalty we don't have): ~25 subs/mo &times; $6 = <strong>~$150/mo</strong> ceiling. Reality, given ~1% loyalty: closer to <strong>$0–$10/mo</strong>.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--r); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Minus The Costs</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Stripe fees, a paywall platform, and ongoing dev/support time turn that ceiling <strong>net negative</strong>. We'd pay to run it.</div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Who Paywalls Actually Work For

# We're Not That Kind Of Site

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 10px 22px; margin-top: 8px;">

<div style="display: flex; padding: 10px 6px; border-bottom: 1px solid var(--b); font-family: 'Outfit'; font-weight: 600; font-size: 0.52em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase;">
  <div style="flex: 1.6;">Publisher</div>
  <div style="flex: 1.2; text-align: center;">Monthly Volume</div>
  <div style="flex: 1.2; text-align: center;">Return Loyalty</div>
  <div style="flex: 2;">Why The Meter Works</div>
</div>

<div class="row" style="display: flex; align-items: center; padding: 11px 6px; border-bottom: 1px solid var(--b);">
  <div style="flex: 1.6; font-size: 0.74em; color: var(--t); font-weight: 600;">The New York Times</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--blue);">50–100M+ visits</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--g);">Daily habit</div>
  <div style="flex: 2; font-size: 0.7em; color: var(--body);">National news people check every day; 11M+ subscribers.</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 6px; border-bottom: 1px solid var(--b);">
  <div style="flex: 1.6; font-size: 0.74em; color: var(--t); font-weight: 600;">The Atlantic</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--blue);">Tens of M visits</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--g);">High, repeat</div>
  <div style="flex: 2; font-size: 0.7em; color: var(--body);">Deep longform readers return for must-read essays.</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 6px; border-bottom: 1px solid var(--b);">
  <div style="flex: 1.6; font-size: 0.74em; color: var(--t); font-weight: 600;">Regional daily <span style="color: var(--m); font-weight: 400; font-size: 0.85em;">(archetype)</span></div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--blue);">0.5–2M views</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--g);">Local daily</div>
  <div style="flex: 2; font-size: 0.7em; color: var(--body);">Local news you can't get elsewhere — obituaries, schools, sports.</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 11px 6px; border-bottom: 1px solid var(--b);">
  <div style="flex: 1.6; font-size: 0.74em; color: var(--t); font-weight: 600;">Niche trade pub <span style="color: var(--m); font-weight: 400; font-size: 0.85em;">(archetype)</span></div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--y);">Smaller</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--g);">Must-read</div>
  <div style="flex: 2; font-size: 0.7em; color: var(--body);">Professionals expense it; the content is job-critical.</div>
</div>
<div class="row" style="display: flex; align-items: center; padding: 13px 6px; background: #ef444410; border-radius: 8px;">
  <div style="flex: 1.6; font-size: 0.74em; color: var(--r); font-weight: 700;">NotRealArt.com</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--r);">~5K visits</div>
  <div style="flex: 1.2; text-align: center; font-size: 0.72em; color: var(--r);">~1.1% return</div>
  <div style="flex: 2; font-size: 0.7em; color: var(--body);">Episodic arts discovery — people arrive inspired, then move on.</div>
</div>

</div>

---

<!-- _class: bg-grid -->

### The Real Differentiator

# It's Not Size — It's Habit

<div style="display: flex; gap: 22px; margin-top: 20px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; border-top: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">Where Meters Win</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.15em; color: var(--t); margin-bottom: 10px;">Recurring need</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.7;">Content people <strong>need on a schedule</strong> — daily news, job-critical trade info. The habit creates the return visits the meter feeds on. Missing an issue has a cost.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; border-top: 3px solid var(--a);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">Where We Live</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.15em; color: var(--t); margin-bottom: 10px;">Serendipitous discovery</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.7;">Art lovers find us through search and social, enjoy a piece, and <strong>leave inspired</strong>. That's a healthy outcome for an arts community — but it's structurally incompatible with a meter.</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.74em; color: var(--m); line-height: 1.6;">You can't fix a habit problem with more traffic. Even 10&times; the visitors, at 1% loyalty, still leaves the meter empty.</div>

---

<!-- _class: bg-glow-green -->

### If The Goal Is Revenue — Better Fits

# Monetize Goodwill, Not The Fifth Click

<div style="font-size: 0.74em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">For a low-volume, high-affinity arts community, these earn without walling readers out — and several monetize the <strong>artist side</strong>, where the willingness to pay actually lives.</div>

<div style="display: flex; gap: 14px; flex-wrap: wrap;">
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--g); margin-bottom: 5px;">Membership / patronage</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">"Support us" — public-radio model. Optional, no wall, perks not gates.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--g); margin-bottom: 5px;">Donations / pay-what-you-want</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">Lower friction than subscriptions; builds trust instead of spending it.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 5px;">Sponsorship & partnerships</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">Galleries, art brands, supply companies reach our exact audience.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 5px;">Paid artist spotlights</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">Artists pay for promotion — aligned incentives, readers stay free.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--blue); margin-bottom: 5px;">Affiliate & marketplace</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">Prints, books, supplies — revenue from what readers already want.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--blue); margin-bottom: 5px;">Events & workshops</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">Paid community, classes, ticketed gatherings — depth over toll-gates.</div>
  </div>
</div>

---

<!-- _class: lead bg-hero -->

# The Recommendation

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: #bbb; margin-top: 8px; max-width: 760px;">Don't build a paywall now. At ~5,000 visits and ~1% return loyalty, a meter earns ~$0 while adding cost, friction, and a "pay to look" signal to a community that comes to be inspired.</div>

<div style="display: flex; gap: 16px; margin-top: 28px; max-width: 880px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; text-align: left;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Now</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Pursue no-wall revenue: membership, sponsorship, and paid artist spotlights. Keep the reading experience open and fast.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; text-align: left;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Revisit Only When</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Traffic clears <strong>~100K/mo</strong> AND returning-visitor share clears <strong>~20–30%</strong> with a measurable super-user core.</div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

# Sources & References
## Evidence behind the claims in this deck

<div style="font-size: 0.7em; line-height: 1.55; columns: 2; column-gap: 36px;">

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">~0.5% of monthly uniques pay; ~3–4% hit the wall; ~250–1,000 subs per 1M pageviews</strong> — Nieman Lab metered-paywall data (2014), via <a href="https://webpublisherpro.com/how-does-your-conversion-rate-compare-to-other-publishers/">WebPublisherPro</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">Anon&rarr;subscriber ~2.2% (top); 1–3% typical; registered&rarr;sub ~19%</strong> — <a href="https://theaudiencers.com/the-conversion-funnel-benchmark-report-q3-2023/">Piano / Audiencers</a> Subscription &amp; Conversion Funnel Benchmarks.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">Meter-stop-rate target 5–7%; hit rate &gt;6% vs 1.8% struggling</strong> — <a href="https://theaudiencers.com/paywall-visibility-rate-the-essential-kpi-you-should-be-tracking-in-your-subscription-strategy/">Poool / The Audiencers</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">5–10% of most-engaged willing to subscribe</strong> — <a href="https://blog.getadmiral.com/what-is-a-metered-paywall-and-how-does-it-work">Admiral</a>; <a href="https://blog.quintype.com/business/metered-paywalls-for-subscription-business">Quintype</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">~10% of readers drive ~74% of revenue (super-users)</strong> — <a href="https://www.bounteous.com/insights/2019/11/12/measurement-informs-publisher-revenue-models/">Bounteous</a>, 2019.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">Pure metering fell 35% (2017) &rarr; 9% (2023) of publishers</strong> — <a href="https://wan-ifra.org/2023/03/poool-conversion-funnel-benchmark-report/">WAN-IFRA / Poool</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">Only 20% of Americans pay for any online news; growth plateaued</strong> — <a href="https://reutersinstitute.politics.ox.ac.uk/digital-news-report/2025/dnr-executive-summary">Reuters Institute Digital News Report 2025</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--a);">Donation/membership fits small niche audiences better than a wall</strong> — <a href="https://www.elegantthemes.com/blog/wordpress/what-is-a-paywall-and-when-should-you-use-one">Elegant Themes</a>; <a href="https://donorbox.org/nonprofit-blog/journalism-fundraising">Donorbox</a>.</div>

<div style="break-inside: avoid; margin-bottom: 10px;"><strong style="color: var(--blue);">NotRealArt.com: ~5,000 visits/mo; Period-1 retention ~1.1% (49,538 users, Nov 2025–May 2026)</strong> — UserMaven retention report, retrieved 2026-06-01.</div>

</div>

<p style="font-size: 0.68em; color: var(--m); margin-top: 16px;">Full URLs, quotes, and retrieval dates for every claim: <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/008-paywall-viability-notrealart/research/sources.md"><code>research/sources.md</code></a> in the idea folder.</p>
