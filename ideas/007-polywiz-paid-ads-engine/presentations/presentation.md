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

  /* Edge-glow background classes — dark-mode tuned. The publish pipeline's
     darkToLight() transforms background colors and rgba(255,255,255,...)
     overlays for the light variant; orange/blue/green/gold accent colors
     are preserved. Apply via `<!-- _class: bg-glow-orange -->` etc. */
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
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/polywiz-paid-ads-engine/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 0.85;" />
</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 28px;">Stakeholder briefing · April 2026</div>

# PolyWiz Paid Ads

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.1em; color: var(--body); margin-top: 12px; max-width: 760px;">A proposal to turn newsletter signups into an autopilot system</div>

<div style="display: flex; gap: 10px; margin-top: 36px;">
  <span style="background: #ff6b1a; color: #ffffff; border-radius: 20px; padding: 6px 16px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">$250–$500 / brand / month</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">Meta MVP</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">The Intersect Pilot</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The opportunity

## Three things just lined up

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 10px;">1. ZERNIO SHIPPED ADS</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--t); line-height: 1.1;">One API for 6 platforms</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">Meta, LinkedIn, Google, TikTok, Pinterest, X — all reachable through the same key we already use for organic posts.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 10px;">2. WE OWN THE MOAT</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--g); line-height: 1.1;">Creative volume</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">Meta's 2026 algorithm rewards creative variety over targeting tweaks. PolyWiz already produces dozens of variants per campaign — exactly what Meta wants.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 10px;">3. PROVEN AT SCALE</div>
    <div style="font-family: 'Outfit'; font-size: 1.5em; font-weight: 800; color: var(--blue); line-height: 1.1;">$0.80 CPA history</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">Juergen ran $70K/year Meta budgets that hit $0.80–0.90 per signup manually. Goal: rebuild that result on autopilot.</div>
  </div>
</div>

<div style="margin-top: 24px; font-weight: 300; font-size: 0.85em; color: var(--label);">Translation for the brands: <strong>more newsletter subscribers, more Instagram followers, lower cost per acquisition, less hand-holding.</strong></div>

---

<!-- _class: bg-glow -->

### What this actually is

## In plain English

<div style="margin-top: 20px;">
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 22px;">
    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--s); border: 1px solid var(--b); display: flex; align-items: center; justify-content: center; font-family: 'Outfit'; font-weight: 800; color: var(--a);">1</div>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1.05em; font-weight: 700; color: var(--t);">Brand picks a piece of content</div>
      <div style="font-size: 0.78em; color: var(--body);">A blog post, exhibition page, or newsletter issue. Same input PolyWiz already takes for organic.</div>
    </div>
  </div>
  <div style="margin-left: 18px; height: 12px; border-left: 1px solid #222;"></div>
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 22px;">
    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--s); border: 1px solid var(--b); display: flex; align-items: center; justify-content: center; font-family: 'Outfit'; font-weight: 800; color: var(--a);">2</div>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1.05em; font-weight: 700; color: var(--t);">PolyWiz generates 8–15 ad variations</div>
      <div style="font-size: 0.78em; color: var(--body);">Different images, different headlines, different angles — built from the brand's existing visuals and voice.</div>
    </div>
  </div>
  <div style="margin-left: 18px; height: 12px; border-left: 1px solid #222;"></div>
  <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 22px;">
    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--s); border: 1px solid var(--b); display: flex; align-items: center; justify-content: center; font-family: 'Outfit'; font-weight: 800; color: var(--a);">3</div>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1.05em; font-weight: 700; color: var(--t);">You approve. Meta runs them.</div>
      <div style="font-size: 0.78em; color: var(--body);">A single click pushes the variants to Facebook + Instagram. Meta's algorithm picks the winners and spends the budget.</div>
    </div>
  </div>
  <div style="margin-left: 18px; height: 12px; border-left: 1px solid #222;"></div>
  <div style="display: flex; align-items: center; gap: 16px;">
    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--s); border: 1px solid var(--g); display: flex; align-items: center; justify-content: center; font-family: 'Outfit'; font-weight: 800; color: var(--g);">4</div>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1.05em; font-weight: 700; color: var(--g);">PolyWiz tracks CPA, kills losers, scales winners</div>
      <div style="font-size: 0.78em; color: var(--body);">Daily polling pulls spend + signup data. Bottom 20% of variants get killed weekly. New variants generated to refill.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### What we already have vs. what's new

## The build is mostly extension, not invention

<div style="display: flex; gap: 24px; margin-top: 16px;">
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">Already in PolyWiz · ~80%</div>
    <div style="font-weight: 300; font-size: 0.78em; color: var(--body); line-height: 2.1;">
      ✓ Brand voice + tone slider<br>
      ✓ Multi-platform copy generation (Claude)<br>
      ✓ Image catalog from scraped URLs<br>
      ✓ Auto-crop to platform aspect ratios<br>
      ✓ Carousel + cover-slide rendering<br>
      ✓ Vercel Blob image hosting<br>
      ✓ Per-brand API key resolution<br>
      ✓ Zernio scheduling integration
    </div>
  </div>
  <div style="display: flex; align-items: center;">
    <svg width="40" height="16" viewBox="0 0 40 16"><line x1="0" y1="8" x2="30" y2="8" stroke="#222" stroke-width="1"/><polygon points="30,4 40,8 30,12" fill="var(--a)"/></svg>
  </div>
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">New capabilities · ~20%</div>
    <div style="font-weight: 300; font-size: 0.78em; color: var(--body); line-height: 2.1;">
      <span style="color: var(--a);">+ Ad-specific copy prompt</span> (10-intent angle slots)<br>
      <span style="color: var(--a);">+ Image variant generator</span> (FLUX, Ideogram)<br>
      <span style="color: var(--a);">+ Zernio Ads API client</span><br>
      <span style="color: var(--a);">+ Polling cron</span> (no webhooks available)<br>
      <span style="color: var(--a);">+ Performance dashboard</span><br>
      <span style="color: var(--a);">+ Variant rotation logic</span><br>
      <span style="color: var(--a);">+ Instant Form submissions handling</span><br>
      <span style="color: var(--a);">+ Conversion event mapping</span>
    </div>
  </div>
</div>

<div style="margin-top: 24px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">The creative engine is the moat. The new pieces wire it into Meta's ad system.</div>

---

<!-- _class: bg-dots -->

### Platform-by-platform fit

## What we should actually run, and what we shouldn't

<div style="margin-top: 8px; font-size: 0.65em;">
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#22c55e"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">Meta (FB + IG)</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--g); width: 100%; height: 100%;"></div></div>
    <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">Phase 1 / MVP</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Best fit. Lowest learning floor, mature lead gen.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#0199fe"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">LinkedIn Lead Gen</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--blue); width: 80%; height: 100%;"></div></div>
    <span class="tag" style="background:#0199fe12; color:var(--blue); border:1px solid #0199fe22;">Phase 2</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Killer for arts professionals. Zernio gap → direct API.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#0199fe"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">Pinterest</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--blue); width: 75%; height: 100%;"></div></div>
    <span class="tag" style="background:#0199fe12; color:var(--blue); border:1px solid #0199fe22;">Phase 2</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Visual-discovery fit. Zernio shipped. CPC 30–50% cheaper than Meta.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#f5a623"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">Google Search</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--y); width: 60%; height: 100%;"></div></div>
    <span class="tag" style="background:#f5a62312; color:var(--y); border:1px solid #f5a62322;">Phase 1.5</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Optional. Cheap to add, no video required.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#f5a623"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">TikTok</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--y); width: 35%; height: 100%;"></div></div>
    <span class="tag" style="background:#f5a62312; color:var(--y); border:1px solid #f5a62322;">Phase 3</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">$20/day floor — needs $1.5K+/mo to scale.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#f5a623"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">YouTube Shorts</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--y); width: 30%; height: 100%;"></div></div>
    <span class="tag" style="background:#f5a62312; color:var(--y); border:1px solid #f5a62322;">Phase 3</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Needs video pipeline first.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 6px 8px; border-bottom: 1px solid #0e0e0e;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#ef4444"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">Google PMax</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--r); width: 12%; height: 100%; opacity: 0.6;"></div></div>
    <span class="tag" style="background:#ef444412; color:var(--r); border:1px solid #ef444422;">Skip</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Sub-$3K/mo learning floor.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 8px 8px;">
    <svg width="6" height="6" viewBox="0 0 6 6"><circle cx="3" cy="3" r="3" fill="#ef4444"/></svg>
    <div style="width: 130px; font-weight: 300; color: var(--body);">X (Twitter)</div>
    <div style="flex: 1; height: 3px; background: var(--b); border-radius: 2px; overflow: hidden;"><div style="background: var(--r); width: 8%; height: 100%; opacity: 0.6;"></div></div>
    <span class="tag" style="background:#ef444412; color:var(--r); border:1px solid #ef444422;">Skip</span>
    <div style="color: var(--body); width: 200px; font-size: 0.85em; text-align: right;">Brand safety + targeting degraded.</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### What CPA we should expect

## Realistic targets — not the hype

<div style="display: flex; gap: 14px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">JUERGEN'S 2024 BENCHMARK</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--blue); line-height: 1;">$0.80</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px;">Achieved manually, hot industries, mature pixel signal.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">RETARGETING</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--g); line-height: 1;">$0.80–1.50</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px;">Site visitors + IG engagers. Achievable in 30–60 days.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">COLD PROSPECTING (90-DAY)</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--a); line-height: 1;">$1.50–3.00</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px;">Honest target while algorithm learns at this budget.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--r), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">2026 META INDUSTRY MEDIAN</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--r); line-height: 1;">$27.66</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px;">What's typical. We aim to beat this by 10–30×.</div>
  </div>
</div>

<div style="margin-top: 24px; font-weight: 300; font-size: 0.78em; color: var(--label);">At $250/mo and a $2 CPA, expect <strong>~125 new newsletter subscribers per brand per month.</strong> The Intersect, NRA, and Artsville together: <strong>~375 net-new subscribers/month for $750 + $50 Zernio.</strong></div>

---

<!-- _class: bg-glow-orange -->

### What's blocking us today

## Three things must be in place before we can launch

<div style="display: flex; gap: 30px; justify-content: center; margin-top: 16px;">
  <div style="text-align: center;">
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="90" cy="90" r="74" fill="none" stroke="#111" stroke-width="8"/>
      <circle cx="90" cy="90" r="74" fill="none" stroke="var(--r)" stroke-width="8" stroke-dasharray="465" stroke-dashoffset="465" stroke-linecap="round" transform="rotate(-90 90 90)"/>
      <text x="90" y="84" text-anchor="middle" fill="#ff6b1a" font-family="Outfit" font-size="36" font-weight="800">1</text>
      <text x="90" y="106" text-anchor="middle" fill="#888" font-family="Outfit" font-size="11" font-weight="600" letter-spacing="1.5">ZERNIO ADD-ON</text>
    </svg>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; max-width: 180px;">$50/mo upgrade. Without it, every API call returns "Ads add-on required."</div>
  </div>
  <div style="text-align: center;">
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="90" cy="90" r="74" fill="none" stroke="#111" stroke-width="8"/>
      <circle cx="90" cy="90" r="74" fill="none" stroke="var(--y)" stroke-width="8" stroke-dasharray="465" stroke-dashoffset="310" stroke-linecap="round" transform="rotate(-90 90 90)"/>
      <text x="90" y="84" text-anchor="middle" fill="#ff6b1a" font-family="Outfit" font-size="36" font-weight="800">2</text>
      <text x="90" y="106" text-anchor="middle" fill="#888" font-family="Outfit" font-size="11" font-weight="600" letter-spacing="1.5">PIXELS ON SITES</text>
    </svg>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; max-width: 180px;">Artsville is missing Meta Pixel. Intersect is missing CAPI. Without them iOS users are invisible.</div>
  </div>
  <div style="text-align: center;">
    <svg width="180" height="180" viewBox="0 0 180 180">
      <circle cx="90" cy="90" r="74" fill="none" stroke="#111" stroke-width="8"/>
      <circle cx="90" cy="90" r="74" fill="none" stroke="var(--y)" stroke-width="8" stroke-dasharray="465" stroke-dashoffset="370" stroke-linecap="round" transform="rotate(-90 90 90)"/>
      <text x="90" y="84" text-anchor="middle" fill="#ff6b1a" font-family="Outfit" font-size="36" font-weight="800">3</text>
      <text x="90" y="106" text-anchor="middle" fill="#888" font-family="Outfit" font-size="11" font-weight="600" letter-spacing="1.5">CURATED PLATFORM</text>
    </svg>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; max-width: 180px;">The Intersect runs on Curated (sunset 2024). Constrains tracking. Migration plan needed.</div>
  </div>
</div>

<div style="margin-top: 28px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">All three are <strong>solvable in days, not weeks</strong> — but they must precede ad launch.</div>

---

<!-- _class: bg-grid -->

### Pixel status — verified 2026-04-24

## Where each brand stands today

<div style="margin-top: 8px; font-size: 0.65em;">
  <div class="row" style="display: flex; align-items: center; gap: 12px; padding: 10px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 130px; font-weight: 300; color: var(--body);">Not Real Art</div>
    <div style="width: 80px; font-size: 0.85em; color: var(--label);">WordPress</div>
    <span style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">Pixel ✓</span>
    <span style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">CAPI ✓</span>
    <span style="background:#ef444412; color:var(--r); border:1px solid #ef444422; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">GTM ✗</span>
    <div style="flex: 1; color: var(--body); text-align: right; font-size: 0.85em;">Strong. Drop dead UA tag, add GA4.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 12px; padding: 10px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 130px; font-weight: 300; color: var(--body);">Artsville USA</div>
    <div style="width: 80px; font-size: 0.85em; color: var(--label);">Ghost 6.33</div>
    <span style="background:#ef444412; color:var(--r); border:1px solid #ef444422; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">Pixel ✗</span>
    <span style="background:#ef444412; color:var(--r); border:1px solid #ef444422; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">CAPI ✗</span>
    <span style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">GA4 ✓</span>
    <div style="flex: 1; color: var(--r); text-align: right; font-size: 0.85em;">Cannot run paid Meta ads today.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 12px; padding: 10px 8px;">
    <div style="width: 130px; font-weight: 300; color: var(--body);">The Intersect</div>
    <div style="width: 80px; font-size: 0.85em; color: var(--label);">Curated</div>
    <span style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">Pixel ✓</span>
    <span style="background:#ef444412; color:var(--r); border:1px solid #ef444422; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">CAPI ✗</span>
    <span style="background:#ef444412; color:var(--r); border:1px solid #ef444422; padding: 2px 8px; border-radius: 3px; font-family: 'Outfit'; font-size: 0.85em;">GTM ✗</span>
    <div style="flex: 1; color: var(--y); text-align: right; font-size: 0.85em;">Add CAPI via Stape.io GTM.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label);">Without server-side <abbr title="Conversions API — server-to-server tracking that bypasses iOS / Safari / ad blockers">CAPI</abbr>, browser tracking captures only 70–80% of conversions. With CAPI: 90–95%. Cost-per-result drops <strong>17.8%</strong> when CAPI is on.</div>

---

<!-- _class: bg-glow-green -->

### Phase plan

## Aggressive timeline — AI-paired-dev hours, not engineering weeks

<div style="margin-top: 14px; padding-left: 8px; border-left: 2px solid #1a1a1a;">
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 4px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#ff6b1a" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1em; font-weight: 700; color: var(--a);">Phase 0 — Prerequisites <span style="color: var(--m); font-weight: 400; font-size: 0.7em;">~1 day</span></div>
      <div style="font-size: 0.78em; color: var(--body);">Buy Zernio Ads add-on. Connect Meta ad accounts via OAuth. Install Meta Pixel + CAPI on Artsville. Add CAPI on Intersect via Stape.io.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 4px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#ff6b1a" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1em; font-weight: 700; color: var(--a);">Phase 1 — Meta MVP, Intersect pilot <span style="color: var(--m); font-weight: 400; font-size: 0.7em;">~1–2 weeks</span></div>
      <div style="font-size: 0.78em; color: var(--body);">Airtable schema, Zernio Ads client, ad creative pipeline, polling cron, dashboard. Pilot at $250/mo for 30 days. Honest CPA target: $1.50–3.00.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 4px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#0199fe" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1em; font-weight: 700; color: var(--blue);">Phase 2 — LinkedIn Lead Gen Forms <span style="color: var(--m); font-weight: 400; font-size: 0.7em;">~1 week</span></div>
      <div style="font-size: 0.78em; color: var(--body);">Direct LinkedIn Marketing API (Zernio doesn't ship Lead Gen Forms yet). Job-title targeting: Curator, Gallery Director, Editor. Lead delivery to brand's email provider.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 18px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 4px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#f5a623" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1em; font-weight: 700; color: var(--y);">Phase 3 — Video pipeline + TikTok + YouTube <span style="color: var(--m); font-weight: 400; font-size: 0.7em;">~1.5 weeks</span></div>
      <div style="font-size: 0.78em; color: var(--body);">Slideshow video generator (Invideo + Runway). TikTok Photo Mode carousel ads. YouTube Shorts. Migrate Intersect off Curated to Ghost or Beehiiv.</div>
    </div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px;">
    <svg width="14" height="14" viewBox="0 0 14 14" style="margin-top: 4px; flex-shrink: 0;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#22c55e" stroke-width="2"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-size: 1em; font-weight: 700; color: var(--g);">Phase 4 — Optimization & scale <span style="color: var(--m); font-weight: 400; font-size: 0.7em;">ongoing</span></div>
      <div style="font-size: 0.78em; color: var(--body);">Per-variant landing pages. Lookalikes from engaged subscribers. Cross-brand reporting. Auto-pacing budgets based on CPA performance.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### Risks

## What could go wrong, and how we'll catch it

<details>
<summary>AI-generated copy starts to sound like AI</summary>
<p>If we generate 10 headlines per campaign × 3 brands × dozens of campaigns without discipline, voice collapses into Claude's recognizable cadence. <strong>Mitigation:</strong> 10-intent angle slot architecture forces variant diversity, forbidden-phrase list ("game-changer," "unleash," "next-gen"…) pre-filters, brand-voice few-shots from past organic winners anchor tone. First 30 days run through user-approval queue.</p>
</details>

<details>
<summary>Cold prospecting at $250/mo never escapes Meta's learning phase</summary>
<p>Meta's 2026 system needs ~25 conversions/week to stabilize. At $250/mo and a $2 CPA, that's right at the threshold. <strong>Mitigation:</strong> feed pre-conversion events (form views, scrolls) to keep algorithm fed. Honest 90-day expectation is $1.50–3 CPA, not $0.80. Retargeting layer added at day 14.</p>
</details>

<details>
<summary>Meta auto-rewrites our brand copy via Advantage+ Creative</summary>
<p>As of February 2026, Advantage+ enhancements default ON for new lead campaigns — Meta will auto-rewrite headlines, swap music, change aspect ratios. Art brands historically reject AI background outpainting; they may reject Meta auto-rewrites too. <strong>Mitigation:</strong> per-brand toggle for each enhancement. Art brands default to disabled.</p>
</details>

<details>
<summary>Zernio Ads API response shapes differ from documentation at runtime</summary>
<p>Live probing on 2026-04-24 hit "Ads add-on required" before we could verify response shapes for the key endpoints. Real responses may diverge from docs. <strong>Mitigation:</strong> immediately after add-on purchase, live-probe each endpoint and update our local Zernio docs. Treat published docs as nominal.</p>
</details>

<details>
<summary>iOS users are unmeasurable until pixels are fully installed</summary>
<p>Until Artsville has Meta Pixel + CAPI, and Intersect has CAPI, iOS users (post-ATT, with ITP, with ad blockers) are effectively invisible. <strong>Mitigation:</strong> Phase 0 is hard-blocking. We do not launch ads until pixels are verified firing via Meta's Test Events tab.</p>
</details>

---

<!-- _class: bg-grid -->

### Decisions we need from you

## Eight open questions before we start

<div style="margin-top: 14px; font-size: 0.7em; line-height: 1.9;">
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">1.</div>
    <div style="color: var(--body);">Are you ready to commit to the <strong>$50/mo Zernio Ads add-on upgrade?</strong> (Confirmed yes — pending exact tier verification with Zernio support.)</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">2.</div>
    <div style="color: var(--body);">Who installs the missing pixels — your web person, or PolyWiz dev directly?</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">3.</div>
    <div style="color: var(--body);">When does The Intersect migrate off Curated? Target platform — <strong>Ghost or Beehiiv?</strong></div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">4.</div>
    <div style="color: var(--body);">Newsletter provider per brand — confirm what's wired up (Mailchimp, Beehiiv, Ghost native, ConvertKit, Curated)?</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">5.</div>
    <div style="color: var(--body);">Brand voice control: do art brands tolerate Meta auto-rewriting copy, or default to disabled?</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">6.</div>
    <div style="color: var(--body);">Lookalike seeds — exportable engagement data ("opened ≥3 emails in 30 days") or start with raw lists?</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">7.</div>
    <div style="color: var(--body);">Add a qualifying question on Instant Form? (Filters bots/freebie-hunters, adds friction.)</div>
  </div>
  <div style="display: flex; gap: 12px; padding: 6px 0;">
    <div style="width: 22px; color: var(--a); font-family: 'Outfit'; font-weight: 700;">8.</div>
    <div style="color: var(--body);">Budget escalation rule: if CPA &lt; $3 after 30 days, auto-double to $500/mo? Or wait for human review?</div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### What we're asking for

## A green light to start Phase 0

<div style="display: flex; gap: 14px; margin-top: 24px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 12px;">SPEND THIS WEEK</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--a); line-height: 1;">$50</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">Zernio Ads add-on — unlocks the API for live probing.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 12px;">SPEND THIS MONTH</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--g); line-height: 1;">$300</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">$250 Intersect pilot + $50 Zernio. 30-day burn-in, then evaluate.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 12px;">SUCCESS LOOKS LIKE</div>
    <div style="font-family: 'Outfit'; font-size: 2.4em; font-weight: 800; color: var(--blue); line-height: 1;">CPA &lt; $3</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 8px;">~85+ new Intersect subscribers in month 1. Then scale to NRA + Artsville.</div>
  </div>
</div>

<div style="margin-top: 32px; font-weight: 300; font-size: 0.95em; color: var(--body); text-align: center; line-height: 1.6;">If the pilot hits its CPA target, the same engine extends to <strong>Not Real Art and Artsville USA</strong> with no additional build cost — just the per-brand ad budget. <br>The math at $250/mo × 3 brands × $2 CPA = <strong>~375 new subscribers per month for $750.</strong></div>

---

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" stroke-width="1.4" style="margin-bottom: 18px;"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>

# Let's start Phase 0

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: var(--body); margin-top: 12px;">Questions? Open the GitHub epic — <a href="https://github.com/JuergenB/polywiz-app/issues/181" style="color: var(--a); text-decoration: underline; font-weight: 500;">issue #181</a></div>

---

<!-- _class: bg-dots -->

### Sources & references

# Sources & References

<div style="font-family: 'Raleway'; font-weight: 400; font-size: 0.95em; color: var(--body); margin: 8px 0 28px;">
All research lives in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/007-polywiz-paid-ads-engine/research" style="color: var(--a); text-decoration: underline; font-weight: 600;">ideas/007-polywiz-paid-ads-engine/research/</a> — Phase 0–3 sub-issues, plus <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/007-polywiz-paid-ads-engine/research/sources.md" style="color: var(--a); text-decoration: underline; font-weight: 600;">sources.md</a> with every URL, verbatim quote, retrieval date, and defensibility note.
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 36px; row-gap: 10px; font-size: 0.7em; line-height: 1.5; color: var(--body);">

  <div><strong style="color: var(--t); font-weight: 600;">Andromeda rewards creative volume + diversity</strong> — <a href="https://engineering.fb.com/2024/12/02/production-engineering/meta-andromeda-advantage-automation-next-gen-personalized-ads-retrieval-engine/" style="color: inherit; text-decoration: underline;">Meta Engineering, Dec 2024</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">$27.66 Meta lead-gen median CPL (2026)</strong> — <a href="https://www.adamigo.ai/blog/meta-ads-cost-per-lead-benchmarks-industry-2026" style="color: inherit; text-decoration: underline;">AdAmigo Q1 2026 benchmarks</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">17.8% lower cost-per-result with CAPI</strong> — <a href="https://ppc.land/meta-upgrades-pixel-and-conversions-api-to-close-the-gap-for-small-advertisers/" style="color: inherit; text-decoration: underline;">Meta announcement, Apr 2026</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Pinterest CPC $0.50–$1.50 vs Meta $1.06–$1.72</strong> — <a href="https://www.webfx.com/blog/social-media/pinterest-marketing-benchmarks/" style="color: inherit; text-decoration: underline;">WebFX 2026</a> · <a href="https://www.tailwindapp.com/blog/how-much-does-pinterest-advertising-cost" style="color: inherit; text-decoration: underline;">Tailwind 2025</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Detailed interest targeting deprecated Jan 2026</strong> — <a href="https://social-media-management-help.brandwatch.com/en/articles/13215856-meta-changes-to-detailed-targeting-interests-in-advertise" style="color: inherit; text-decoration: underline;">Meta Help Center via Brandwatch</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">TikTok $20/day floor + 50 conv/week to exit learning</strong> — <a href="https://ads.tiktok.com/help/article/learning-phase" style="color: inherit; text-decoration: underline;">TikTok Ads Manager docs</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Zernio Ads API for 6 platforms (Apr 17 2026)</strong> — <a href="https://zernio.com/blog/social-media-ads-api" style="color: inherit; text-decoration: underline;">zernio.com launch post</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Pinterest 619M MAU, +12% YoY (Q4 2025)</strong> — <a href="https://www.businesswire.com/news/home/20260212059914/en/Pinterest-Announces-Fourth-Quarter-and-Full-Year-2025-Results-Delivers-14-Revenue-Growth-and-Record-Users" style="color: inherit; text-decoration: underline;">Pinterest Q4 2025 earnings</a></div>

</div>

<div style="font-size: 0.62em; color: var(--m); margin-top: 22px;">Plus internal/first-party data (Zernio 403 probe, brand pixel status, $0.80–$0.90 historical CPA on $70K/yr Meta budgets) — all logged in <code>research/sources.md</code>.</div>
