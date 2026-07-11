---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300&display=swap');

  :root {
    --a: #ff6b1a;
    --a2: #ff8c4a;
    --bg: #000;
    --s: #0d0d0d;
    --b: #1f1f1f;
    --m: #8a8a8a;
    --t: #f5f5f5;
    --g: #22c55e;
    --r: #ef4444;
    --y: #f5a623;
    --blue: #0199fe;
    --body: #c8c8c8;
    --label: #b0b0b0;
  }

  section {
    background: var(--bg);
    color: var(--t);
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
    padding: 56px 72px;
    line-height: 1.5;
  }

  h1 { font-family: 'Outfit'; font-weight: 800; font-size: 3em; color: var(--t); letter-spacing: -0.03em; line-height: 1; margin: 0 0 4px; }
  h2 { font-family: 'Raleway'; font-weight: 300; font-size: 1.3em; color: var(--body); margin: 0 0 20px; }
  h3 { font-family: 'Outfit'; font-weight: 700; font-size: 0.6em; color: #a8a8a8; text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 400; }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 3.8em; color: var(--t); }

  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #151515; }

  /* Edge-glow background classes — dark-mode tuned; publish pipeline transforms
     bg colors + rgba(255,255,255,...) overlays for light. Accents preserved. */
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

  details { background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; margin-top: 8px; }
  details summary { color: var(--a); font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; cursor: pointer; letter-spacing: 0.03em; }
  details p { color: var(--body); font-size: 0.78em; margin-top: 8px; line-height: 1.6; }

  .row:hover { background: #0c0c0c; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }

  abbr { text-decoration: none; border-bottom: 1px dotted #333; cursor: help; }

  /* Inline code — dual-mode safe: dark chip on dark, light chip on light;
     text uses var(--t) so it stays high-contrast on either bg. Overrides
     the marp theme default (a blue-grey bg that clashes + reads low-contrast). */
  code { background: var(--s); border: 1px solid var(--b); border-radius: 4px; padding: 1px 5px; color: var(--t); font-size: 0.9em; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/polywiz-paid-ads-engine/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 0.85;" />
</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 28px;">Stakeholder briefing · revised July 2026 (v3 split)</div>

# PolyWiz Paid Ads Engine

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.1em; color: var(--body); margin-top: 12px; max-width: 820px;">A new campaign <em>class</em> beside the organic engine — conversion-oriented ads, multi-objective, configured per brand</div>

<div style="display: flex; gap: 10px; margin-top: 36px; flex-wrap: wrap; justify-content: center;">
  <span style="background: #ff6b1a; color: var(--bg); border-radius: 20px; padding: 6px 16px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">Pilot: open-call submissions</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">Multi-objective</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">Per-brand config</span>
</div>

---

<!-- _class: bg-glow-orange -->

<h3 style="color: var(--a);">Update · July 2026</h3>

## We're building the creative half first

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: var(--body); margin: 8px 0 24px; max-width: 900px;">This plan now splits in two. The half that needs nothing from anyone — the creative engine — we build now. The half that needs new subscriptions and website changes, we hold.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--g); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.1em; margin-bottom: 10px;">BUILDING NOW · UNBLOCKED</div>
    <div style="font-family: 'Outfit'; font-size: 1.35em; font-weight: 800; color: var(--t); line-height: 1.1;">Ad Creative Generator</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 10px;">Turns our own artworks, stories &amp; photos into ad-ready <strong>images, carousels, and short caption videos</strong>. We download them and place the ads in Facebook/Instagram ourselves — the way we already do. <strong>No new subscription, no website changes, no ad spend to build it.</strong></div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--m), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 10px;">HELD FOR LATER · BLOCKED</div>
    <div style="font-family: 'Outfit'; font-size: 1.35em; font-weight: 800; color: var(--m); line-height: 1.1;">Automated Ad Launch</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 10px;">One-click launch, automatic optimization &amp; reporting. Needs the <strong>$100/mo ad add-on</strong>, ad-account connections, and tracking pixels on 2 of 3 websites. Fully researched, parked until those are in place and it's worth it.</div>
  </div>
</div>

<div style="margin-top: 14px; font-weight: 300; font-size: 0.76em; color: var(--label);">The rest of the deck is the <em>full</em> engine; the green card ships first. <strong>Two caveats:</strong> we stage ads by hand (no one-click launch yet), and it means <em>more, better creatives</em> — not automatic winner-picking.</div>

---

<!-- _class: bg-glow -->

<h3 style="color: var(--a);">How it works · the storyboard</h3>

## You see the story before we build a single asset

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.9em; color: var(--body); margin: 6px 0 22px; max-width: 900px;">From a campaign that already holds the artwork, photos and story, the generator writes a short <strong>storyboard</strong> — a handful of scenes you can edit. The <em>same</em> storyboard becomes a still ad, a carousel, or a short caption video.</div>

<div style="display: flex; gap: 10px; margin-bottom: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 3px solid var(--a); border-radius: 8px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--a); letter-spacing: 0.08em; text-transform: uppercase;">Spark</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">the image that stops the scroll</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 3px solid var(--a); border-radius: 8px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--a); letter-spacing: 0.08em; text-transform: uppercase;">Story</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">the work, the artist, the idea</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 3px solid var(--a); border-radius: 8px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--a); letter-spacing: 0.08em; text-transform: uppercase;">Resonance</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">why it matters, who it's for</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--g); border-top: 3px solid var(--g); border-radius: 8px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--g); letter-spacing: 0.08em; text-transform: uppercase;">Invitation</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">a warm ask to join</div>
  </div>
</div>

<div style="font-size: 0.76em; color: var(--label); line-height: 1.5;">Each scene is just <strong>one image + one line + a motion</strong> (a slow zoom or pan). Swap the image, reword the line, re-time it — and <strong>preview it playing right in the browser</strong> before we render the final file. Short by design: about <strong>4–6 scenes, ~30 seconds</strong>, and it still works when a post only has one or two photos.</div>

---

<!-- _class: bg-glow-green -->

<h3 style="color: var(--g);">The guardrail · brand values</h3>

## Inspirational — never "buy now"

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.9em; color: var(--body); margin: 6px 0 22px; max-width: 900px;">Every line the engine writes celebrates the art and invites people in. The pushy, scarcity-driven tricks of typical ad copy are switched off at the engine level — layered on top of each brand's own voice.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--g); border-radius: 10px; padding: 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.1em; margin-bottom: 10px;">WE LEAN INTO</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.7;">Wonder · discovery · the story behind the work · belonging &amp; community · celebration · craft · a warm invitation to join</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 10px;">WE NEVER USE</div>
    <div style="font-size: 0.78em; color: var(--m); line-height: 1.7;">Scarcity · urgency · "last chance" · "don't miss out" · FOMO · manufactured pressure of any kind</div>
  </div>
</div>

<div style="margin-top: 14px; font-weight: 300; font-size: 0.76em; color: var(--label);">It's a setting we can tune — not hard-wired — and it sits <em>above</em> each brand's voice, so The Intersect still sounds like The Intersect.</div>

---

<!-- _class: bg-glow -->

### Where this comes from

## This year's exhibition initiative — and the one gap in it

<div style="font-size: 0.86em; color: var(--label); margin: 4px 0 22px; max-width: 880px; line-height: 1.6;">It keeps coming up in our weekly staff calls: we put <strong>hundreds of hours</strong> into curating open calls and exhibitions — but we don't really <em>promote</em> them. The work is strong; it just doesn't reach far enough.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1.4; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">The focus this year</div>
    <div style="font-size: 0.84em; color: var(--body); line-height: 1.6;">Get our exhibitions <strong>seen</strong> — especially the <strong>partner shows</strong> — and <strong>lift open-call submission rates</strong>. Promotion is what makes the curation pay off.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--blue); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">Two ideas behind it</div>
    <div style="font-size: 0.84em; color: var(--body); line-height: 1.6;"><strong style="color:var(--t);font-weight:600;">011</strong> — an owned promotion &amp; PR engine.<br><strong style="color:var(--t);font-weight:600;">007</strong> — a paid-ads engine that drives submissions and exhibition reach.<br><span style="color:var(--m);">Developed together, meant to ship together.</span></div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### Where this goes

## One engine, the whole content universe

<div style="font-size: 0.86em; color: var(--label); margin: 4px 0 20px; max-width: 880px;">We're building an <strong>engine</strong>, not a one-off campaign.</div>

<div style="margin-bottom: 16px;">
  <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 13px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--a); font-size: 0.8em; min-width: 96px; letter-spacing: 0.06em;">START HERE</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.5;"><strong style="color:var(--t);font-weight:600;">This year's exhibitions &amp; open calls</strong> — the team's hard work, arguably the best content we have right now, finally getting the promotion it deserves.</div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 16px; margin-bottom: 13px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--blue); font-size: 0.8em; min-width: 96px; letter-spacing: 0.06em;">THEN</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.5;"><strong style="color:var(--t);font-weight:600;">The same engine reaches everything Arterial makes</strong> — the Not Real Art and Artsville podcasts, Q+Art (Morgan's interview series), "Remote" (the public-art video series), and more across our brands.</div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 16px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--g); font-size: 0.8em; min-width: 96px; letter-spacing: 0.06em;">IN THE FALL</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.5;"><strong style="color:var(--t);font-weight:600;">On the road to fundraising</strong> — once it's proven across the content universe, the same engine powers the fall fundraising push too.</div>
  </div>
</div>

<div style="background: rgba(255,107,26,0.06); border: 1px solid #3a2410; border-radius: 10px; padding: 13px 20px; font-size: 0.8em; color: var(--body); line-height: 1.55;"><strong style="color:var(--a);">We don't launch all of this at once.</strong> We build the engine once, then point it — one focused step at a time. First: this year's exhibitions.</div>

---

<!-- _class: bg-glow-orange -->

### The core idea

## Ads are a different animal — a new campaign *class*

<div style="font-size: 0.82em; color: var(--label); margin: -6px 0 16px; max-width: 880px;">PolyWiz today is an <strong>organic trickling engine</strong> — a URL becomes a six-month tapering series of posts. A paid ad campaign is a fundamentally different object. We add it <strong>beside</strong> the organic engine, not inside it.</div>

<div style="display: flex; gap: 0; margin-top: 6px; border: 1px solid var(--b); border-radius: 12px; overflow: hidden; font-size: 0.7em;">
  <div style="flex: 1; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--blue); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">Organic campaign · exists today</div>
    <div style="line-height: 2.0; color: var(--body);">
      <strong style="color:var(--t);font-weight:600;">Unit</strong> — 6-month series of dozens of posts<br>
      <strong style="color:var(--t);font-weight:600;">Lifecycle</strong> — tapering schedule → publish → done<br>
      <strong style="color:var(--t);font-weight:600;">Goal</strong> — reach, cadence, presence<br>
      <strong style="color:var(--t);font-weight:600;">Optimizer</strong> — our distribution-bias schedule<br>
      <strong style="color:var(--t);font-weight:600;">Metric</strong> — posts shipped, reach
    </div>
  </div>
  <div style="width: 1px; background: var(--b);"></div>
  <div style="flex: 1; padding: 18px 20px; background: rgba(255,107,26,0.04);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--a); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">Paid ad campaign · this idea</div>
    <div style="line-height: 2.0; color: var(--body);">
      <strong style="color:var(--t);font-weight:600;">Unit</strong> — 1–few ads × many <span style="color:var(--a);">variations</span>, tested at once<br>
      <strong style="color:var(--t);font-weight:600;">Lifecycle</strong> — budgeted flight → learning → kill / scale<br>
      <strong style="color:var(--t);font-weight:600;">Goal</strong> — <span style="color:var(--a);">conversion</span> — submit, register, subscribe, donate<br>
      <strong style="color:var(--t);font-weight:600;">Optimizer</strong> — the ad platform's algorithm<br>
      <strong style="color:var(--t);font-weight:600;">Metric</strong> — <span style="color:var(--a);">cost per action</span>
    </div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.76em; color: var(--label); text-align: center;">Forcing this into "just another organic campaign type" would bury a budget-driven, conversion-optimized object inside a generator built for cadence. <strong>Two sibling classes instead.</strong></div>

---

<!-- _class: bg-glow -->

### What's shared, what diverges

## One intake. Two engines.

<div style="font-size: 0.8em; color: var(--label); margin: -6px 0 18px; max-width: 880px;">Both classes start <strong>identically</strong> — paste a URL, scrape it, pull brand voice and visuals. That overlap is real and worth reusing. After intake they diverge completely.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 22px; margin-bottom: 18px;">
  <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">Shared intake substrate · already built</div>
  <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap; font-family: 'Outfit'; font-size: 0.62em; color: var(--body);">
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">URL</span>
    <span style="color:var(--a);">→</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">Firecrawl scrape</span>
    <span style="color:var(--a);">→</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">brand voice</span>
    <span style="color:var(--a);">→</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">image catalog</span>
    <span style="color:var(--a);">→</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">auto-crop</span>
    <span style="color:var(--a);">→</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:6px;padding:5px 10px;">creative gen</span>
  </div>
</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--blue); text-transform: uppercase; letter-spacing: 0.1em;">↓ Organic diverges to</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">A tapering post-series on a cadence schedule.</div>
  </div>
  <div style="flex: 1; background: rgba(255,107,26,0.05); border: 1px solid #3a2410; border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--a); text-transform: uppercase; letter-spacing: 0.1em;">↓ Paid diverges to</div>
    <div style="font-size: 0.72em; color: var(--body); margin-top: 6px;">Ads × variations on a budgeted flight — with an <strong>objective, investment level, platform mix, flight length, ad account, audience, and landing page</strong> — and an optimization loop that kills losers and scales winners.</div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Layer 2 — the objectives

## One engine, many conversion objectives

<div style="font-size: 0.8em; color: var(--label); margin: -2px 0 14px; max-width: 900px;">Within a paid campaign, the <strong>objective</strong> is the conversion dimension. Each sets the platform goal, the conversion event, the creative angles, the platform mix, the pacing, and the KPI.</div>

<div style="font-size: 0.6em; line-height: 1.3;">
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 5px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 165px; font-family:'Outfit'; font-weight:600; color: var(--a);">Open-call submissions <span style="color:var(--m);font-weight:400;font-size:0.85em;">· pilot</span></div>
    <div style="width: 130px; color: var(--label);">Submit / Lead</div>
    <div style="flex:1; color: var(--body);">deadline · prize · eligibility</div>
    <div style="width: 230px; color: var(--body); text-align:right;">Meta + Pinterest + Google Ad Grants · <span style="color:var(--m);">deadline flight</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 5px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 165px; font-family:'Outfit'; font-weight:600; color: var(--t);">Exhibition interest</div>
    <div style="width: 130px; color: var(--label);">View → Subscribe</div>
    <div style="flex:1; color: var(--body);">visual hero · artist spotlight</div>
    <div style="width: 230px; color: var(--body); text-align:right;">Pinterest + IG + Meta · <span style="color:var(--m);">run-of-show</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 5px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 165px; font-family:'Outfit'; font-weight:600; color: var(--t);">Newsletter growth</div>
    <div style="width: 130px; color: var(--label);">Subscribe</div>
    <div style="flex:1; color: var(--body);">value-of-issue · FOMO</div>
    <div style="width: 230px; color: var(--body); text-align:right;">Meta + newsletter ad networks · <span style="color:var(--m);">always-on</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 5px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 165px; font-family:'Outfit'; font-weight:600; color: var(--t);">Event / workshop <span style="color:var(--m);font-weight:400;font-size:0.85em;">· occasional</span></div>
    <div style="width: 130px; color: var(--label);">RSVP / Register</div>
    <div style="flex:1; color: var(--body);">date · lineup · local</div>
    <div style="width: 230px; color: var(--body); text-align:right;">Meta + Nextdoor (local) · <span style="color:var(--m);">date flight</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 5px 8px;">
    <div style="width: 165px; font-family:'Outfit'; font-weight:600; color: var(--g);">Fundraising / donations</div>
    <div style="width: 130px; color: var(--label);">Donate / Pledge</div>
    <div style="flex:1; color: var(--body);">impact · matching-gift · partnership</div>
    <div style="width: 230px; color: var(--body); text-align:right;">Meta + Google Ad Grants + email · <span style="color:var(--m);">seasonal</span></div>
  </div>
</div>

<div style="margin-top: 18px; background: rgba(34,197,94,0.06); border: 1px solid #14361f; border-radius: 10px; padding: 14px 18px; font-size: 0.72em; color: var(--body); line-height: 1.6;">
  <strong style="color:var(--g);">Fundraising is in the vision from day one — built last.</strong> It's the highest-interest objective and a 501(c)(3) governance asset (the "broad support from 500+ donors" public-support test). But donation conversion is the hardest to build, so we prove the engine on the easy, measurable objectives first.
</div>

---

<!-- _class: bg-grid -->

### Layer 3 — per-brand configuration

## Which objectives a brand can run is a brand setting

<div style="font-size: 0.8em; color: var(--label); margin: -6px 0 16px; max-width: 900px;">Not every objective applies to every brand — fundraising is irrelevant to a for-profit; The Intersect may only ever grow its list. Same gating PolyWiz already uses for per-brand feature flags, extended to <strong>enabled objectives + connected ad accounts + budget envelope</strong> per brand.</div>

<div style="font-size: 0.66em;">
  <div style="display: flex; align-items: center; gap: 8px; padding: 8px; border-bottom: 1px solid var(--b); font-family:'Outfit'; font-size:0.82em; font-weight:600; color: var(--m); text-transform: uppercase; letter-spacing: 0.08em;">
    <div style="width: 130px;"></div>
    <div style="flex:1; text-align:center;">Open calls</div>
    <div style="flex:1; text-align:center;">Exhibitions</div>
    <div style="flex:1; text-align:center;">Newsletter</div>
    <div style="flex:1; text-align:center;">Events</div>
    <div style="flex:1; text-align:center;">Fundraising</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 8px; padding: 11px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 130px; font-family:'Outfit'; font-weight:600; color: var(--t);">Not Real Art</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--m);">occasional</div>
    <div style="flex:1; text-align:center; color: var(--y);">✓ <span style="font-size:0.8em;">last</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 8px; padding: 11px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 130px; font-family:'Outfit'; font-weight:600; color: var(--t);">Artsville USA</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--y);">✓ <span style="font-size:0.8em;">last</span></div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 8px; padding: 11px 8px;">
    <div style="width: 130px; font-family:'Outfit'; font-weight:600; color: var(--t);">The Intersect</div>
    <div style="flex:1; text-align:center; color: var(--m);">—</div>
    <div style="flex:1; text-align:center; color: var(--m);">—</div>
    <div style="flex:1; text-align:center; color: var(--g);">✓</div>
    <div style="flex:1; text-align:center; color: var(--m);">—</div>
    <div style="flex:1; text-align:center; color: var(--m);">—</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.76em; color: var(--label); text-align: center;">Every brand sees only the objectives it's configured for. <strong>One engine, per-brand capability surface</strong> — illustrative; final values are a config decision.</div>

---

<!-- _class: bg-glow-green -->

### A design question worth calling out

## Exhibition interest is a *dual* objective — a newsletter feeder

<div style="display: flex; gap: 16px; margin-top: 14px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.12em; margin-bottom: 8px;">THE PROBLEM</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.6;">A bare <strong>"they viewed the exhibition"</strong> is a weak success signal. Looking isn't interest. Optimizing only for views buys traffic we can't follow up with.</div>
  </div>
  <div style="display: flex; align-items: center;"><svg width="34" height="16" viewBox="0 0 34 16"><line x1="0" y1="8" x2="24" y2="8" stroke="#333" stroke-width="1"/><polygon points="24,4 34,8 24,12" fill="var(--g)"/></svg></div>
  <div style="flex: 1.3; background: rgba(34,197,94,0.05); border: 1px solid #14361f; border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.12em; margin-bottom: 8px;">THE DESIGN</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.6;">Optimize for the <strong>view</strong> as the platform conversion <em>and</em> layer a <strong>secondary capture</strong> on the landing page — prompt the engaged visitor to <strong>subscribe, follow the exhibition, or follow the brand</strong> via scroll-depth / time-on-page / exit-intent CTAs.</div>
  </div>
</div>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 20px; font-size: 0.76em; color: var(--body); line-height: 1.6;">
  <strong style="color:var(--g);">The compounding loop.</strong> A paid exhibition flight produces views now, captured subscribers/followers from the interested minority, and a retargeting pool that makes the <em>next</em> campaign cheaper. The same secondary-capture pattern applies to open calls (non-submitters → newsletter) and, later, fundraising (interested non-donors → cultivation list). <span style="color:var(--m);">Idea 011 names this loop.</span>
</div>

---

<!-- _class: bg-grid -->

### What we already have vs. what's new

## The build is mostly extension, not invention

<div style="display: flex; gap: 24px; margin-top: 16px;">
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">Shared substrate · already built</div>
    <div style="font-weight: 300; font-size: 0.78em; color: var(--body); line-height: 2.1;">
      ✓ Start-from-URL → Firecrawl scrape<br>
      ✓ Brand voice + tone<br>
      ✓ Multi-platform copy generation (Claude)<br>
      ✓ Image catalog from scraped URLs<br>
      ✓ Auto-crop to platform aspect ratios<br>
      ✓ Vercel Blob image hosting<br>
      ✓ Per-brand keys + feature flags<br>
      ✓ Zernio integration (organic + now ads)
    </div>
  </div>
  <div style="display: flex; align-items: center;">
    <svg width="40" height="16" viewBox="0 0 40 16"><line x1="0" y1="8" x2="30" y2="8" stroke="#222" stroke-width="1"/><polygon points="30,4 40,8 30,12" fill="var(--a)"/></svg>
  </div>
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">New — creative now, launch later</div>
    <div style="font-weight: 300; font-size: 0.78em; color: var(--body); line-height: 2.0;">
      <span style="color: var(--g);">+ Ad Creative Generator</span> — copy + layout variants <span style="color:var(--m);">· now</span><br>
      <span style="color: var(--g);">+ Static + carousel ad layouts</span> <span style="color:var(--m);">· now</span><br>
      <span style="color: var(--g);">+ “Ken Burns” caption video</span> (Remotion) <span style="color:var(--m);">· now</span><br>
      <span style="color: var(--g);">+ Export package</span> for manual FB/IG staging <span style="color:var(--m);">· now</span><br>
      <span style="color: var(--m);">+ Zernio Ads launch via SDK · later</span><br>
      <span style="color: var(--m);">+ Ad-account OAuth + pixels / CAPI · later</span><br>
      <span style="color: var(--m);">+ Event-driven lead capture · later</span><br>
      <span style="color: var(--m);">+ Variant rotation (kill / scale) · later</span>
    </div>
  </div>
</div>

<div style="margin-top: 22px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">The creative engine is the moat — and the unblocked half we build first (real assets first; AI imagery optional). The launch object, its config, and the optimization loop come later.</div>

---

<!-- _class: bg-glow -->

### The later half · automated launch

## When we automate launch, it runs through the same tool

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 20px; max-width: 900px;"><strong style="color:var(--m);">This slide describes the deferred half.</strong> <em>Today we stage the generated creatives in Facebook/Instagram by hand.</em> When we later automate that, paid ads go out through <strong>Zernio</strong> — the exact same service the brands already use for organic posts: nothing new to learn, no second vendor. Turning it on is a single flat <strong>$100/mo</strong> add-on to that existing subscription — one shared cost across every brand and objective.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 26px; margin-bottom: 18px;">
  <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px;">One tool · six paid networks</div>
  <div style="display: flex; gap: 12px; flex-wrap: wrap; font-family: 'Outfit'; font-size: 0.72em; font-weight: 600;">
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">Meta <span style="color:var(--m);font-weight:400;">— Facebook + Instagram</span></span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">Pinterest</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">Google</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">LinkedIn</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">TikTok</span>
    <span style="background:#0c0c0c;border:1px solid var(--b);border-radius:8px;padding:10px 16px;color:var(--t);">X</span>
  </div>
</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: rgba(34,197,94,0.05); border: 1px solid #14361f; border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.6em; color: var(--g); text-transform: uppercase; letter-spacing: 0.1em;">Same tool</div>
    <div style="font-size: 0.74em; color: var(--body); margin-top: 6px; line-height: 1.6;">Already in use for organic posting. Paid ads are turned on inside it — no migration, no new system.</div>
  </div>
  <div style="flex: 1; background: rgba(34,197,94,0.05); border: 1px solid #14361f; border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.6em; color: var(--g); text-transform: uppercase; letter-spacing: 0.1em;">Each brand stays separate</div>
    <div style="font-size: 0.74em; color: var(--body); margin-top: 6px; line-height: 1.6;">Every brand connects its own ad account, so budgets and reporting never cross between brands.</div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### Phase plan

## Build order — creative generator first, launch later, fundraising last

<div style="margin-top: 16px; padding: 4px 0 4px 18px; border-left: 2px solid var(--b);">
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 3px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#ff6b1a" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 0.92em; font-weight: 700; color: var(--g); line-height: 1.2;">Now — Ad Creative Generator <span style="color: var(--m); font-weight: 400; font-size: 0.72em;">in retainer · unblocked</span></div>
      <div style="font-size: 0.74em; color: var(--body); line-height: 1.45; margin-top: 2px;">Studio on the campaign page: pick real assets, generate copy + static / carousel / “Ken Burns” video variants, export a package. Staged in FB/IG by hand — no add-on, no pixels, no spend.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 3px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#ff6b1a" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 0.92em; font-weight: 700; color: var(--g); line-height: 1.2;">Then — More objectives + video polish <span style="color: var(--m); font-weight: 400; font-size: 0.72em;">still export-for-manual</span></div>
      <div style="font-size: 0.74em; color: var(--body); line-height: 1.45; margin-top: 2px;">Extend the generator across objectives (open call, exhibition, newsletter) and refine the Ken Burns builder. Output is still a downloadable pack we place ourselves.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 3px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#0199fe" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 0.92em; font-weight: 700; color: var(--blue); line-height: 1.2;">Later (deferred) — Launch prerequisites <span style="color: var(--m); font-weight: 400; font-size: 0.72em;">blocked until funded</span></div>
      <div style="font-size: 0.74em; color: var(--body); line-height: 1.45; margin-top: 2px;">$100/mo Zernio ads add-on, per-brand ad-account OAuth, and Pixel + Conversions API on the brand sites that lack them. None of this is needed for the creative generator above.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 3px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#f5a623" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 0.92em; font-weight: 700; color: var(--y); line-height: 1.2;">Later — Automated launch + optimization <span style="color: var(--m); font-weight: 400; font-size: 0.72em;">once prerequisites land</span></div>
      <div style="font-size: 0.74em; color: var(--body); line-height: 1.45; margin-top: 2px;">One-click launch through Zernio, event-driven lead capture, variant rotation (kill / scale), and a cost-per-action dashboard. The open-call pilot flight runs here.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 3px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#22c55e" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 0.92em; font-weight: 700; color: var(--g); line-height: 1.2;">Vision — Fundraising, last <span style="color: var(--m); font-weight: 400; font-size: 0.72em;">built last, in view from day one</span></div>
      <div style="font-size: 0.74em; color: var(--body); line-height: 1.45; margin-top: 2px;">Donation objective with value-based optimization + donor compliance; Google Ad Grants for nonprofit search. Plus lookalikes, cross-brand reporting, auto-pacing.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### What the launch half needs

## Three prerequisites — deferred, not on the critical path

<div style="font-size: 0.78em; color: var(--label); margin: -4px 0 4px; max-width: 900px;"><strong style="color:var(--g);">The Ad Creative Generator needs none of these</strong> — it ships now. These clear only when we choose to automate launch.</div>

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 1.6em; color: var(--a);">1</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin: 4px 0 6px;">$100/mo ads add-on</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">A flat monthly subscription on the existing Zernio account. <strong>One shared cost</strong> across every brand and objective — not per brand, and separate from per-flight ad spend.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 1.6em; color: var(--a);">2</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin: 4px 0 6px;">Connect per-brand ad accounts</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Each brand's Meta / Pinterest ad account via Zernio OAuth (<code>/v1/connect/{platform}/ads</code>). Budget authority decided per brand.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 1.6em; color: var(--a);">3</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin: 4px 0 6px;">Pixel + Conversions API</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Server-side <abbr title="Conversions API — server-to-server tracking that bypasses iOS / Safari / ad blockers">CAPI</abbr> lifts conversion capture from 70–80% to 90–95%. Artsville needs the Pixel; Intersect-on-Curated needs CAPI.</div>
  </div>
</div>

<div style="margin-top: 24px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">All three are <strong>solvable in days</strong> — but they precede <strong>automated launch</strong>, which is deferred. The pilot flight can also be staged by hand once the creatives exist.</div>

---

<!-- _class: bg-glow-green -->

### The decision, split in two

## Now: build the creatives. Later: green-light the paid flight.

<div style="display: flex; gap: 14px; margin-top: 22px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.1em; margin-bottom: 12px;">BUILDING NOW · $0 NEW</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--g); line-height: 1.05;">Ad Creative Generator</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">In the existing Polymash retainer — no new line item. Produces ad-ready creatives we stage in FB/IG by hand.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 12px;">LATER · TO GO PAID</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--a); line-height: 1.05;">$100/mo + ~$250</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">The Zernio ads add-on plus a deadline-timed open-call flight — when we choose to spend. Can be staged by hand before any launch automation.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 12px;">SUCCESS LOOKS LIKE</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--blue); line-height: 1.05;">Cost / submission</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">Our <strong>first-ever clean reading</strong> — measured when we run the paid flight. That number unlocks every other brand and objective.</div>
  </div>
</div>

<div style="margin-top: 24px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center; line-height: 1.6; max-width: 940px; margin-left: auto; margin-right: auto;"><strong style="color:var(--g);">What's already covered:</strong> the build is baked into the existing Polymash retainer — <strong style="color:var(--g);">no new line item</strong>. The creative generator needs no new money at all; the only new spend is the add-on + ad flight, and only when we go paid.</div>

<div style="margin-top: 14px; font-weight: 300; font-size: 0.9em; color: var(--body); text-align: center; line-height: 1.55;">The <strong>creatives come first</strong> — unblocked, in retainer. The <strong>paid flight is the next green-light</strong>, on the road to promoting the whole content universe and, in time, fundraising.</div>

---

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" stroke-width="1.4" style="margin-bottom: 18px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>

# First: build the ad creatives

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: var(--body); margin-top: 12px;">The creative generator ships now — <a href="https://github.com/JuergenB/polywiz-app/issues/372" style="color: var(--a); text-decoration: underline; font-weight: 500;">epic #372</a>. Launch automation is fully scoped and deferred — <a href="https://github.com/JuergenB/polywiz-app/issues/181" style="color: var(--a); text-decoration: underline; font-weight: 500;">#181</a>. 007 + 011 still ship together.</div>

---

<!-- _class: bg-dots -->

### Sources & references

# Sources & References

<div style="font-family: 'Raleway'; font-weight: 400; font-size: 0.95em; color: var(--body); margin: 8px 0 24px;">
All research lives in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/007-polywiz-paid-ads-engine/research" style="color: var(--a); text-decoration: underline; font-weight: 600;">ideas/007-polywiz-paid-ads-engine/research/</a> — phase sub-issues, plus <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/007-polywiz-paid-ads-engine/research/sources.md" style="color: var(--a); text-decoration: underline; font-weight: 600;">sources.md</a> with every URL, quote, retrieval date, and defensibility note.
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 36px; row-gap: 10px; font-size: 0.7em; line-height: 1.5; color: var(--body);">

  <div><strong style="color: var(--t); font-weight: 600;">Zernio Ads add-on = $100/mo on our AppSumo account</strong> — Zernio in-product paywall, confirmed 2026-06-18 (not bundled for legacy/AppSumo plans; flat monthly fee, separate from ad spend)</div>

  <div><strong style="color: var(--t); font-weight: 600;">Zernio Ads API re-verified — 6 networks, ad webhooks, SDK 0.2.101 ads namespaces</strong> — <a href="https://docs.zernio.com/api/openapi" style="color: inherit; text-decoration: underline;">Zernio OpenAPI v1.0.4, retrieved 2026-06-18</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Andromeda rewards creative volume + diversity</strong> — <a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" style="color: inherit; text-decoration: underline;">Meta Engineering, Dec 2024</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">17.8% lower cost-per-result with CAPI</strong> — <a href="https://ppc.land/meta-upgrades-pixel-and-conversions-api-to-close-the-gap-for-small-advertisers/" style="color: inherit; text-decoration: underline;">Meta announcement, Apr 2026</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Pinterest CPC 30–50% cheaper than Meta; 619M MAU</strong> — <a href="https://www.webfx.com/blog/social-media/pinterest-marketing-benchmarks/" style="color: inherit; text-decoration: underline;">WebFX 2026</a> · <a href="https://www.businesswire.com/news/home/20260212059914/en/Pinterest-Announces-Fourth-Quarter-and-Full-Year-2025-Results-Delivers-14-Revenue-Growth-and-Record-Users" style="color: inherit; text-decoration: underline;">Pinterest Q4 2025</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Detailed interest targeting deprecated Jan 2026</strong> — <a href="https://social-media-management-help.brandwatch.com/en/articles/13215856-meta-changes-to-detailed-targeting-interests-in-advertise" style="color: inherit; text-decoration: underline;">Meta Help Center via Brandwatch</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Google Ad Grants — $10k/mo free for 501(c)(3)s</strong> — <a href="https://www.google.com/grants/" style="color: inherit; text-decoration: underline;">Google for Nonprofits</a> · captured in idea 011's master resource</div>

</div>

<div style="font-size: 0.62em; color: var(--m); margin-top: 22px;">Plus first-party data ($0.80–$0.90 historical CPA on $70K/yr Meta budgets; brand pixel status; 011's open-call landing-page campaign evidence) — logged in <code>research/sources.md</code>.</div>
