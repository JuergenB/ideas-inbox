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
  a { color: inherit; }

  section table { border-collapse: collapse; margin: 0 auto; width: 100%; }
  section th, section td { border: 1px solid var(--b); padding: 7px 15px; text-align: left; background-color: var(--s); color: var(--body); font-weight: 400; }
  section th { background-color: var(--bg); color: var(--t); font-family: 'Outfit'; font-weight: 600; font-size: 0.95em; }
  section td strong, section th strong { color: var(--a); }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.6em; color: var(--t); }

  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #151515; }

  section.bg-glow { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.20) 100%), radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.14) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.22) 100%); }
  section.bg-glow-green { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(34,197,94,0.18) 100%), radial-gradient(ellipse at 100% 0%, rgba(34,197,94,0.12) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.18) 100%); }
  section.bg-dots { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,153,254,0.14) 100%), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.14) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(255,107,26,0.25) 100%); }

  .pill { background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400; display: inline-block; }
  .card { background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px 22px; }
  .kicker { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px; }
  .lbl { position: absolute; top: 32px; left: 40px; font-family: 'Outfit'; font-weight: 700; font-size: 14px; letter-spacing: 0.18em; color: var(--a); }
  a.ref { color: inherit; text-decoration: underline; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div class="lbl">ARTERIAL · DOLLAR FOR THE ARTS</div>

# Dollar for the Arts

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: #aaa; margin-top: 14px; max-width: 760px;">A fundraising front-end for Arterial's fall campaign — turning the content and tools we already own into <strong>many small, defensible donations</strong>.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span class="pill">Arterial.org · 501(c)(3)</span>
  <span class="pill">Fall fundraising campaign</span>
  <span class="pill">For discussion with Scott</span>
</div>

---

<!-- _class: bg-dots -->

### Where this comes from

# The context

<div style="display: flex; gap: 20px; margin-top: 12px;">
  <div class="card" style="flex: 1.2;">
    <div class="kicker">The moment</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">Arterial wants a <strong>fall fundraising campaign</strong> with a purpose-built, conversion-ready anchor — and to run <strong>Facebook / Instagram ads</strong> that are defensible for a non-profit: they drive <em>voluntary donations</em>, not payment for access.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div class="kicker">The org</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;"><strong>Arterial.org</strong> — the registered 501(c)(3) — with <strong>Not Real Art</strong> and <strong>Artsville USA</strong> as programs, plus a library of podcasts and lead magnets already in hand.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.7em; color: var(--m); line-height: 1.6;">Neighbours in the inbox: <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/008-paywall-viability-notrealart">#008 Paywall</a> (why <em>not</em> to wall readers out) · <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/009-arterial-owned-platform">#009 Owned Platform</a> (where content could live) · <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/013-arterial-impact-report">#013 Impact Report</a> (retains the donors this acquires).</div>

---

<!-- _class: bg-glow-orange -->

### The reframe

# We're not starting from zero

<div style="display: flex; gap: 20px; margin-top: 14px; align-items: stretch;">
  <div class="card" style="flex: 1;">
    <div class="kicker" style="color: var(--r);">Not the problem</div>
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">"We have <em>no</em> lead magnet." <br>We have <strong>several</strong> — proven ebooks, podcasts, an email audience, donation rails, ad accounts.</div>
  </div>
  <div class="card" style="flex: 1.3;">
    <div class="kicker" style="color: var(--g);">The real question</div>
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">What do we <strong>already own</strong> that makes fundraising this way possible <strong>without reinventing the wheel</strong> — and what's the one missing piece that turns it into donations?</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.78em; color: var(--t); line-height: 1.6;">The missing piece isn't content. It's a <strong>campaign-ready front-end</strong> that converts <em>bought</em> traffic into <em>broad small-dollar giving</em>.</div>

---

<!-- _class: bg-grid -->

### Resource-first

# What we already own

<div style="display: flex; gap: 14px; margin-top: 12px; flex-wrap: wrap;">
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--a); margin-bottom:4px;">Proven lead magnets</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;"><strong>100 Top Street Artists</strong> — for <em>art lovers</em>, the broader audience — and <strong>Bomb The Art World</strong>, Scott's book for artists. Both already do email capture.</div>
  </div>
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--a); margin-bottom:4px;">Content &amp; audio</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Not Real Art podcast library · Artsville content · Not Real Art content · Arterial Radio · the <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/013-arterial-impact-report">#013 impact report</a>.</div>
  </div>
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--a); margin-bottom:4px;">Donately</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Donation rails — embeddable one-time + recurring widgets, and <strong>a separate campaign per lead magnet</strong>.</div>
  </div>
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--blue); margin-bottom:4px;">Instapage (Optimize)</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Ads-first page builder — A/B, dynamic text, ad→page mapping, custom subdomain. <strong>Free to us at our tier.</strong></div>
  </div>
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--blue); margin-bottom:4px;">Facebook audience</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Scott's live ads should be building lookalike + retargeting audiences on the NRA pixel. <em>Warm traffic. (verify)</em></div>
  </div>
  <div class="card" style="flex: 1 1 30%;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color: var(--blue); margin-bottom:4px;">ActiveCampaign</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55;">Automated <strong>follow-up + nudge sequences</strong> — remind sign-ups who didn't give to donate, per magnet.</div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### An honest take

# Arterial Radio

<div style="display: flex; gap: 20px; margin-top: 12px;">
  <div class="card" style="flex: 1;">
    <div class="kicker" style="color: var(--r);">What it is today</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.7;">A <strong>collection of sequenced podcast episodes</strong> — no dedicated listening app. You subscribe, or play it on a website. <strong>Not truly mobile:</strong> no easy gym, car, or on-the-go listening. Online radio gets little listening now; consumption has moved to on-demand podcasts, which we already have, free.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div class="kicker" style="color: var(--g);">Where it gets interesting</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.7;">The gap isn't the <em>content</em> — it's <strong>delivery</strong>. An installable app gives the audio a portable, anywhere listening experience it doesn't have. <em>"Donate a dollar, install the Arterial app, take it with you"</em> makes the <strong>app itself the magnet</strong>.</div>
    <div style="margin-top: 10px; font-size: 0.72em; color: var(--y);">⚑ Open question for us: do we launch <strong>Arterial Radio as its own iOS app?</strong></div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.62em; color: var(--m);">The SiriusXM ambition for Arterial Radio is a separate, bigger conversation — <strong>out of scope here.</strong></div>

---

<!-- _class: bg-glow-orange -->

### The concept

# An ads-first landing system

<div style="display: flex; gap: 8px; margin-top: 14px; align-items: stretch;">
  <div class="card" style="flex: 1; text-align: center;"><div style="font-family:'Outfit'; font-weight:600; font-size:0.6em; color: var(--blue);">FB / IG AD</div><div style="font-size:0.6em; color: var(--body); margin-top:6px;">Retarget the warm audience</div></div>
  <div style="display:flex; align-items:center; color: var(--a); font-weight:700;">→</div>
  <div class="card" style="flex: 1.1; text-align: center;"><div style="font-family:'Outfit'; font-weight:600; font-size:0.6em; color: var(--a);">SIGN UP</div><div style="font-size:0.6em; color: var(--body); margin-top:6px;">Email for the <strong>swappable magnet</strong></div></div>
  <div style="display:flex; align-items:center; color: var(--g); font-weight:700;">→</div>
  <div class="card" style="flex: 1.2; text-align: center; border-color: var(--g);"><div style="font-family:'Outfit'; font-weight:600; font-size:0.6em; color: var(--g);">$1 GATE</div><div style="font-size:0.6em; color: var(--body); margin-top:6px;">Skippable — but you <strong>actively dismiss</strong> it to reach the button</div></div>
  <div style="display:flex; align-items:center; color: var(--a); font-weight:700;">→</div>
  <div class="card" style="flex: 1; text-align: center;"><div style="font-family:'Outfit'; font-weight:600; font-size:0.6em; color: var(--a);">FREE DOWNLOAD</div><div style="font-size:0.6em; color: var(--body); margin-top:6px;">Value delivered either way</div></div>
</div>

<div style="display:flex; gap:20px; margin-top:18px;">
  <div style="flex:1; font-size: 0.74em; color: var(--body); line-height: 1.6;"><strong>One funnel, many magnets.</strong> The "$1 for the arts" gate stays constant; the magnet behind it swaps per campaign — so we A/B which offer converts and reuse the same donation flow everywhere.</div>
  <div style="flex:1; font-size: 0.74em; color: var(--body); line-height: 1.6;"><strong>Non-donors become a campaign.</strong> Sign up but dismiss the gift? An <strong>ActiveCampaign</strong> nudge series follows up — <em>"if you enjoyed 100 Top Street Artists, chip in a dollar"</em> — for every magnet, until they give.</div>
</div>

---

<!-- _class: bg-glow-gold -->

### The load-bearing design fork

# How strong is the gate?

<div style="display: flex; gap: 20px; margin-top: 14px;">
  <div class="card" style="flex: 1; border-color: #22c55e55;">
    <div class="kicker" style="color: var(--g);">Skippable-but-strong · recommended</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">The ask is prominent and persuasive, but the download is still free if they decline. The donation stays a <strong>clean voluntary gift</strong> — which the defensibility argument depends on.</div>
  </div>
  <div class="card" style="flex: 1; border-color: #ef444455;">
    <div class="kicker" style="color: var(--r);">Hard gate · caution</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">"Donate to download" turns the magnet into a <strong>purchase</strong> — quid-pro-quo territory. It looks like paid access, weakens the "contribution," and invites the objection <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/008-paywall-viability-notrealart">#008</a> raised against walls.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.68em; color: var(--y);">⚑ How hard the gate can be <em>while keeping the dollar a deductible gift</em> is a question for <strong>nonprofit counsel / CPA</strong> — not a design preference. Default: skippable-but-strong.</div>

---

<!-- _class: bg-glow-green -->

### Why this is defensible

# Many $1 gifts beat a few big ones

<div style="display: flex; gap: 22px; margin-top: 34px; align-items: stretch;">
  <div style="flex: 1.1;">
    <div style="display:flex; align-items:flex-end; gap: 20px; height: 150px; padding: 0 8px;">
      <div style="flex:1; text-align:center;">
        <div style="background: linear-gradient(180deg, var(--g), #16803f); height: 130px; border-radius: 8px 8px 0 0; display:flex; align-items:flex-start; justify-content:center; padding-top:8px; font-family:'Outfit'; font-weight:700; font-size:0.7em; color: var(--bg);">50%</div>
        <div style="font-size:0.6em; color: var(--body); margin-top:8px;"><strong>500 donors × $1</strong><br>passes ✓</div>
      </div>
      <div style="flex:1; text-align:center;">
        <div style="background: linear-gradient(180deg, var(--r), #7f1d1d); height: 17px; border-radius: 6px 6px 0 0; display:flex; align-items:flex-start; justify-content:center; padding-top:2px; font-family:'Outfit'; font-weight:700; font-size:0.5em; color: var(--t);">6%</div>
        <div style="font-size:0.6em; color: var(--body); margin-top:8px;"><strong>3 large donors</strong><br>fails ✗</div>
      </div>
    </div>
    <div style="font-size:0.55em; color: var(--m); text-align:center; margin-top:10px;">Public-support ratio on the same $1M raised — vs the 33⅓% pass threshold.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.65;">The IRS caps any single private donor at <strong>2% of total support</strong> — so <strong>breadth, not dollars, protects public-charity status</strong>. Founder self-funding actually <em>hurts</em> the ratio. A low-friction $1 ask is the most efficient breadth engine there is — and a <strong>voluntary gift</strong> avoids the quid-pro-quo of paid access.</div>
    <div style="font-size: 0.66em; color: var(--body); margin-top: 12px;">Donately defaults the ask to <strong>$1</strong> — with one-tap options to give more, or give <strong>monthly</strong>.</div>
    <div style="font-size: 0.54em; color: var(--m); margin-top: 10px;">Source: Arterial 501(c)(3) public-support research — <a class="ref" href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/013-arterial-impact-report/research/501c3-public-support-fundraising.md">research file →</a></div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### Near-zero net-new build

# The stack we already own

<div style="display: flex; gap: 12px; margin-top: 14px;">
  <div class="card" style="flex: 1; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.72em; color: var(--a); margin-bottom:6px;">Instapage (Optimize)</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.55;">Refactor magnet pages to be <strong>fundraising-first + campaign-matched</strong>. A/B + dynamic text + ad→page mapping. Publish to <strong>give.arterial.org</strong>. <em>Don't upgrade to Convert.</em></div>
  </div>
  <div class="card" style="flex: 1; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.72em; color: var(--a); margin-bottom:6px;">Donately</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.55;">A <strong>campaign per magnet</strong>; embed the one-time / <strong>recurring</strong> $1 widget at the gate. Track gifts via the <strong>Meta pixel + redirect</strong>.</div>
  </div>
  <div class="card" style="flex: 1; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.72em; color: var(--blue); margin-bottom:6px;">ActiveCampaign</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.55;">Automated <strong>follow-up sequences</strong> nudge sign-ups who didn't give to donate — one series per lead magnet.</div>
  </div>
  <div class="card" style="flex: 1; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.72em; color: var(--blue); margin-bottom:6px;">Ads + hosting</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.55;"><strong>Retarget the warm FB audience</strong> for better cost-per-donation. Everything lives on <strong>arterial.org</strong> — the registered 501(c)(3).</div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.6em; color: var(--m);">Full platform analysis + sources: <a class="ref" href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/014-dollar-for-the-arts/research/instapage-fundraising-research.md">research/instapage-fundraising-research.md →</a></div>

---

<!-- _class: bg-dots -->

### Delivery model — an open decision

# Web app now, native later?

<div style="margin-top: 10px; font-size: 0.72em;">

| Factor | Web PWA | Native iOS |
|---|---|---|
| **Payment cut** | 0% via Apple Pay | 0% via Apple Pay (not IAP) — **a wash** |
| **Ad-funnel friction** | Ad → one tap into onboarding ✓ | Ad → App Store → install → open ✗ |
| **Build & maintenance** | One codebase, ships in weeks ✓ | Swift/RN, review cycles, iOS-only ✗ |
| **Time-to-launch (fall)** | Weeks ✓ | + review + platform time ✗ |
| **Best at** | **Acquisition** — cheap $1 gifts, fast | **Retention** — background audio, push, habit |

</div>

<div style="margin-top: 12px; font-size: 0.68em; color: var(--body);"><strong>Lean:</strong> web-first for the fall campaign; native iOS as a phase-2 option if the goal becomes a retained listening product. <span style="color: var(--y);">⚑ Apple Pay / no-IAP claims to confirm vs App Review Guidelines §3.2.1.</span></div>

---

<!-- _class: bg-glow-orange -->

### A way to sequence it

# A phased approach

<div style="display:flex; gap: 14px; margin-top: 14px;">
  <div class="card" style="flex: 1; border-color: #22c55e55;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.62em; color: var(--g); letter-spacing:0.1em;">PHASE 0 · THIS FALL</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6; margin-top:8px;">Web only. Refactored Instapage magnet pages on <strong>give.arterial.org</strong> + Donately $1 gate + follow-up drip, driven by <strong>retargeted FB/IG ads</strong>. Reuses what's live.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.62em; color: var(--a); letter-spacing:0.1em;">PHASE 1 · IF IT CONVERTS</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6; margin-top:8px;">An installable <strong>PWA</strong> bundling podcasts + ebooks + Arterial Radio — the <strong>app itself becomes the magnet</strong>: portable, anywhere listening.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.62em; color: var(--blue); letter-spacing:0.1em;">PHASE 2 · LATER</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6; margin-top:8px;">A <strong>native iOS app</strong> if the listening product proves out — decided against real Phase-1 numbers, not up front.</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### A thought to discuss — new content, mostly automated

# Turn exhibitions into lead magnets

<div style="display:flex; gap:20px; margin-top:16px;">
  <div class="card" style="flex:1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">We likely don't <em>need</em> new content — but we could make it cheaply. What if every <strong>First Friday exhibition</strong> (and campaigns like the <strong>250 Public Art Campaign</strong>) became a <strong>downloadable book</strong> — an auto-generated PDF?</div>
  </div>
  <div class="card" style="flex:1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">Each exhibition becomes a fresh magnet — a growing <strong>lead-magnet library</strong> that keeps the ads-first funnel stocked with new offers, with little manual effort. More magnets → more $1 asks → more donor breadth.</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.66em; color: var(--m);">Exploratory — not required for Phase 0, but a reason the system <strong>compounds</strong> over time.</div>

---

<!-- _class: bg-glow -->

### The ask

# What we need to decide

<div style="display:flex; gap: 20px; margin-top: 12px;">
  <div class="card" style="flex: 1;">
    <div class="kicker">Open questions</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.75;">
    • <strong>Gate hardness</strong> — skippable vs hard → <em>counsel's call</em><br>
    • <strong>Which magnet leads</strong> the fall campaign<br>
    • <strong>Verify the FB pixel</strong> / warm audience is building<br>
    • <strong>App as magnet</strong>, or web content first?<br>
    • <strong>Reuse vs rebuild</strong> existing content
    </div>
  </div>
  <div class="card" style="flex: 1; border-color: #22c55e55;">
    <div class="kicker" style="color: var(--g);">If we green-light Phase 0</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.75;">
    • Confirm the lead-magnet + which leads<br>
    • <strong>Legal review</strong> of gate + receipt language<br>
    • Stand up <strong>give.arterial.org</strong> + pixel<br>
    • Refactor pages, embed Donately, wire the drip<br>
    • Build a click-through prototype
    </div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.8em; color: var(--t); text-align:center;">Use what we own. Ask for a dollar. Build the <strong>breadth</strong> that keeps Arterial a public charity.</div>

---

<!-- _class: bg-dots -->

# Sources &amp; References
## Evidence behind the claims in this deck

<div style="font-size: 0.66em; line-height: 1.6;">

**500 donors × $1 → ~50% public-support ratio (passes); 3 large donors → ~6% (fails); founder-funding hurts** — IRS §170(b)(1)(A)(vi) 2% cap; IRS Schedule A instructions, Foundation Group, Public Counsel. Compiled in Arterial's <a class="ref" href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/013-arterial-impact-report/research/501c3-public-support-fundraising.md">501(c)(3) public-support research</a>.

**Instapage Optimize includes A/B + dynamic text; AdMap ad→page mapping; custom subdomain via CNAME; native Meta pixel** — Instapage docs + independent pricing reviews, as of 2026-07-11. <a class="ref" href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/014-dollar-for-the-arts/research/instapage-fundraising-research.md">Instapage research</a>.

**Donately embed works but completions don't register in Instapage's native conversion tracking** — Instapage + Donately embedding docs, 2026-07-11.

**Donation-page best practices** (single CTA, message match, $1→$5→$25 ladder, mobile-first, 501(c)(3) trust signals) — Fundraise Up, iDonate, DonorPerfect, RallyUp, 2026-07-11.

**Existing NRA magnets** — <a class="ref" href="https://notrealart.com/bomb-the-art-world/">Bomb The Art World</a>, 100 Top Street Artists (live, 2026-07-11).

**Apple Pay 0% for nonprofits / no IAP for donations** — <span style="color: var(--y);">UNVERIFIED</span>; confirm vs Apple App Review Guidelines §3.2.1.

</div>

<p style="font-size: 0.6em; color: var(--m); margin-top: 18px;">Full URLs, quotes, and retrieval dates: <a class="ref" href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/014-dollar-for-the-arts/research">ideas/014-dollar-for-the-arts/research/</a> — <a class="ref" href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/014-dollar-for-the-arts/research/sources.md">sources.md</a> indexes every claim.</p>
