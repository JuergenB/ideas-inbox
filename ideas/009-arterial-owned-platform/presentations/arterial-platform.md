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

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/arterial-owned-platform/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px;" />

# From Initiatives to Infrastructure

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.95em; color: var(--body); margin-top: 14px; max-width: 760px;">What Arterial could build — and offer the art world — the day it owns the platform beneath everything it already does.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">A Polymash proposal</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">For discussion with Scott</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">June 2026</span>
</div>

---

<!-- _class: bg-glow -->

### What This Unlocks

# Imagine What Arterial Could Offer

<div style="display: flex; gap: 16px; margin-top: 18px; flex-wrap: wrap;">
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">White-label galleries</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Spin up a branded online gallery for a partner in an afternoon — their look, their artists, our infrastructure underneath.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">Customized online exhibitions</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Every show its own design, parameters, and story — sliders, dimensions on or off, animated storytelling. Not one rigid template.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--blue); margin-bottom: 6px;">Partnerships as living collaborations</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Turn relationships into running, visible exhibitions and shared programs — not one-off favors that disappear after the event.</div>
  </div>
  <div style="flex: 1 1 45%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--blue); margin-bottom: 6px;">Infrastructure for the smaller players</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Give small galleries and artists who have no online infrastructure a way to submit, exhibit, and be discovered — through us.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.74em; color: var(--m); line-height: 1.55;">A suite of <strong>services</strong> Arterial could offer — not another one-off project. Today, we can build none of them.</div>

---

<!-- _class: bg-glow-orange -->

### One Thing Stands In The Way

# We Rent And Stitch — We Don't Own

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">Everything Arterial runs on today is <strong>rented and stitched together</strong> — a sprawl of tools that don't talk to each other. Some of it can stay (WordPress and the content tools aren't going anywhere). But none of it is an owned home for the thing that matters most:</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 18px 22px; display: flex; gap: 8px; flex-wrap: wrap; align-items: center; justify-content: center;">
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Artwork Archive</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">WordPress + plugins</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Ghost + Elfsight</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Airtable</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">ActiveCampaign</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Paperform submissions</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">InstaPage</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Thinkific</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">StoryChief</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">Convertbox</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">n8n scripts</span>
  <span style="background: var(--bg); border: 1px solid var(--b); border-radius: 20px; padding: 6px 14px; font-family: 'Outfit'; font-size: 0.64em; color: var(--m);">one-off websites</span>
</div>

<div style="margin-top: 16px; font-size: 0.82em; color: var(--a); line-height: 1.55;">Arterial's <strong>artists, artworks, and exhibitions</strong> have no platform of their own. Build that one layer — and everything on the last slide is on the table.</div>

---

<!-- _class: bg-dots -->

### What Everything Already Runs On

# Arterial's Real Asset: Its Artists & Artworks

<div style="display: flex; gap: 22px; margin-top: 10px; align-items: center;">

  <div style="flex: 1.1;">
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.7; margin-bottom: 14px;">Almost everything Arterial makes draws on the same thing: our <strong>collection of artists and artworks</strong>. Built over years of open calls, grants, and exhibitions.</div>
    <div style="display: flex; gap: 10px;">
      <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--a);">10,000+</div>
        <div style="font-size: 0.62em; color: var(--m); margin-top: 2px;">artworks</div>
      </div>
      <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--blue);">1,000s</div>
        <div style="font-size: 0.62em; color: var(--m); margin-top: 2px;">of artists</div>
      </div>
    </div>
  </div>

  <div style="color: var(--m); font-size: 1.6em;">&rarr;</div>

  <div style="flex: 1.1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">The Shared Core</div>
    <div style="display: flex; flex-wrap: wrap; gap: 8px;">
      <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 6px; padding: 6px 12px; font-family: 'Outfit'; font-size: 0.7em; color: var(--a);">Artists</span>
      <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 6px; padding: 6px 12px; font-family: 'Outfit'; font-size: 0.7em; color: var(--a);">Artwork</span>
      <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 6px; padding: 6px 12px; font-family: 'Outfit'; font-size: 0.7em; color: var(--a);">Submissions</span>
      <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 6px; padding: 6px 12px; font-family: 'Outfit'; font-size: 0.7em; color: var(--a);">Exhibitions</span>
      <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 6px; padding: 6px 12px; font-family: 'Outfit'; font-size: 0.7em; color: var(--a);">Partnerships</span>
    </div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.6; margin-top: 14px;">Not Real Art, Artsville, the NRA Grant, the exhibition series, Sugar Press — all pull from this. <strong>Own it, and everything downstream is ours to shape.</strong></div>
  </div>

</div>

---

<!-- _class: bg-glow -->

### The Move

# Own The Core, And Two Things Happen

<div style="display: flex; gap: 20px; margin-top: 18px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px;">One Operating System</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.25em; color: var(--t); margin-bottom: 10px;">Every initiative plugs into one owned substrate</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">Art House pulls artists from it. Artsville shows exhibitions from it. The Grant feeds it. The <em>next</em> initiative launches <strong>on</strong> it — instead of being rebuilt from scratch in yet another tool.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 8px;">One Mature Institution</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.25em; color: var(--t); margin-bottom: 10px;">The portfolio finally reads as a real organization</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">An owned platform is what turns a constellation of projects into a capable institution with its own infrastructure — one place the whole portfolio finally connects.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.66em; color: var(--m); line-height: 1.5;">The art world's own value is consolidating around exactly this — owned platforms plus proprietary data. In 2025, Beowolff Capital bought Artnet and merged it with Artsy into a single data-and-AI ecosystem. Platform + data <em>is</em> the asset.</div>

---

<!-- _class: bg-grid -->

### Only Possible When We Own It

# A Platform, Not A Feature

<div style="display: flex; gap: 12px; flex-wrap: wrap; margin-top: 14px;">
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--a); margin-bottom: 4px;">Configurable exhibitions</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Dimensions on or off, sliders, highlight widgets, animated storytelling — per show.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--a); margin-bottom: 4px;">Visual, vector-driven discovery</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">The platform understands how works relate — by color, style, region, artist — to surface what's adjacent.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--blue); margin-bottom: 4px;">QR: wall to phone</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Scan a physical label, get the full artist record, more works, and an inquiry path.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--blue); margin-bottom: 4px;">Partner analytics</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Engagement, dwell, geography — insight a small gallery has never had.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--g); margin-bottom: 4px;">Per-exhibition radio</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">AI-produced audio &amp; podcasts about a show — on our own engine.</div>
  </div>
  <div style="flex: 1 1 30%; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--g); margin-bottom: 4px;">AI curator</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">"A show in greens, under 36 inches" — propose themed exhibitions from the archive.</div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.72em; color: var(--m); line-height: 1.5;">One owned substrate — many expressions. None of these are possible while the art lives in someone else's rented software.</div>

---

<!-- _class: bg-glow -->

### Made Concrete

# A Partner Gallery, Powered By Us

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">A small gallery with no online infrastructure runs an entire exhibition on our platform — white-labeled as theirs:</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 18px 22px;">
  <div style="display: flex; align-items: stretch; gap: 8px;">
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.92em; color: var(--a);">Open call</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px; line-height: 1.4;">Their branded submission form — no paper, no Airtable</div>
    </div>
    <div style="color: var(--m); display: flex; align-items: center;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.92em; color: var(--blue);">Their database</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px; line-height: 1.4;">Auto-enriched — classified, dimensioned, profiled</div>
    </div>
    <div style="color: var(--m); display: flex; align-items: center;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.92em; color: var(--t);">Curate a subset</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px; line-height: 1.4;">Pick the few that hang on the physical wall</div>
    </div>
    <div style="color: var(--m); display: flex; align-items: center;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.92em; color: var(--g);">Wall + big screen</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px; line-height: 1.4;">QR labels, plus a TV loop showing everyone who submitted</div>
    </div>
    <div style="color: var(--m); display: flex; align-items: center;">&rarr;</div>
    <div style="flex: 1; text-align: center;">
      <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.92em; color: var(--a);">Their analytics</div>
      <div style="font-size: 0.62em; color: var(--m); margin-top: 4px; line-height: 1.4;">What drew attention — data they've never had</div>
    </div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.74em; color: var(--m); line-height: 1.55;">A 12-piece room <strong>feels like</strong> a 200-artist exhibition. The white-label service, the QR bridge, the analytics — the same platform, configured for them.</div>

---

<!-- _class: bg-glow-green -->

### From Discovery To Income

# The Loop Only We Can Close

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">Owning the substrate lets discovery flow all the way to <strong>sustainable revenue</strong> — and it amplifies artists rather than walling anyone out.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 24px;">
  <div style="display: flex; align-items: center; justify-content: space-between; gap: 6px; flex-wrap: nowrap;">
    <div style="text-align: center; flex: 1;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.86em; color: var(--blue);">Discovered</div></div>
    <div style="color: var(--m);">&rarr;</div>
    <div style="text-align: center; flex: 1;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.86em; color: var(--blue);">Exhibited</div></div>
    <div style="color: var(--m);">&rarr;</div>
    <div style="text-align: center; flex: 1;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.86em; color: var(--a);">Exposed via partners</div></div>
    <div style="color: var(--m);">&rarr;</div>
    <div style="text-align: center; flex: 1;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.86em; color: var(--g);">Sells as prints</div><div style="font-size: 0.58em; color: var(--m); margin-top: 2px;">Sugar Press</div></div>
    <div style="color: var(--m);">&rarr;</div>
    <div style="text-align: center; flex: 1;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.86em; color: var(--g);">Sustainable revenue</div></div>
  </div>
  <div style="margin-top: 14px; padding-top: 12px; border-top: 1px dashed var(--b); text-align: center; font-size: 0.68em; color: var(--m);">&#8635; Revenue funds artists <em>and</em> Arterial — which draws in more artists. A flywheel, not a toll booth.</div>
</div>

<div style="margin-top: 14px; font-size: 0.7em; color: var(--m); line-height: 1.5;">You can't route discovery into print commerce through a gallery plugin and a paper form. The owned platform is what connects the two ends.</div>

---

<!-- _class: bg-glow -->

### The Asset Is Already In The Building

# Thousands Of Artists, Waiting To Be Reached

<div style="display: flex; gap: 22px; margin-top: 12px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">What We Already Have</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">An audience of artists built over years of open calls and grants. They opted in. They submitted. They care about what Arterial does. <strong>They're not gone — they're un-reached.</strong></div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">What The Platform Does</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">Makes staying in touch <strong>systematic</strong>: self-service artist profiles that keep themselves current, automated re-engagement, and discovery that pulls artists back into Arterial's orbit on their own.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.74em; color: var(--a); line-height: 1.55;">The cheapest growth Arterial has isn't new reach — it's re-activating the relationships already sitting in our own collection.</div>

---

<!-- _class: bg-dots -->

### When We Choose, Not Before

# Partnerships Become A Switch We Control

<div style="display: flex; gap: 22px; margin-top: 14px; align-items: stretch;">
  <div style="flex: 1.3;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">Because the platform is <strong>multi-tenant by design</strong>, a partner instance is a <em>configuration</em> — not a rebuild. The infrastructure flexes to whoever Arterial chooses to work with, whenever it makes sense.</div>
    <div style="font-size: 0.74em; color: var(--m); line-height: 1.6; margin-top: 14px;">No commitment to "become a software vendor." Just the option to extend what we run — to a CodaWorks collaboration, a public-art project, a regional gallery — at the press of a switch.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 12px;">One Engine, Many Tenants</div>
    <div style="display: flex; flex-direction: column; gap: 8px;">
      <div style="background: var(--bg); border: 1px solid var(--b); border-radius: 8px; padding: 8px 14px; font-family: 'Outfit'; font-size: 0.72em; color: var(--t);">Arterial &amp; Not Real Art</div>
      <div style="background: var(--bg); border: 1px solid var(--b); border-radius: 8px; padding: 8px 14px; font-family: 'Outfit'; font-size: 0.72em; color: var(--t);">Artsville USA</div>
      <div style="background: var(--bg); border: 1px solid var(--b); border-radius: 8px; padding: 8px 14px; font-family: 'Outfit'; font-size: 0.72em; color: var(--t);">CodaWorks · public art</div>
      <div style="background: var(--bg); border: 1px dashed var(--b); border-radius: 8px; padding: 8px 14px; font-family: 'Outfit'; font-size: 0.72em; color: var(--m);">+ any partner, when we choose</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### Why This Is Real

# Proven Pieces, Built To Be Owned

<div style="display: flex; gap: 20px; margin-top: 18px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px; border-top: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">Not Starting From Zero</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.7;">The enrichment pipeline, the 10,000-artwork dataset, and the vector engine that understands how artworks relate <strong>already run in production</strong>. This is assembling proven pieces — not a moonshot.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px; border-top: 3px solid var(--blue);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">Built To Be Owned, Not Babysat</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.7;">Industry best practices, fully documented, handoff-able. <strong>No key-person dependency</strong> — Arterial owns and operates it. The platform is an asset on the books, not a person on call.</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### What We're Asking

# Agree On The Principle. Fund The First Step.

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 14px 22px; margin-bottom: 16px; border-left: 3px solid var(--a);">
  <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 4px;">The Principle</div>
  <div style="font-size: 0.8em; color: var(--body); line-height: 1.6;">An owned platform, built on the artists and artworks Arterial already has, is worth pursuing — and the first move is to replace rented Artwork Archive with our own production-ready system.</div>
</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--blue); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">The First Phase &mdash; A Funded Polymash Scoping &amp; Foundation Engagement</div>

<div style="display: flex; gap: 14px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; border-top: 3px solid var(--a);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.95em; color: var(--t); margin-bottom: 8px;">Migration plan &amp; roadmap</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Design docs and a roadmap to replace Artwork Archive with an owned system — porting our submissions work into one consolidated database.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; border-top: 3px solid var(--blue);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.95em; color: var(--t); margin-bottom: 8px;">A working proof of concept</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">An embeddable gallery running on our own infrastructure (Next.js + Supabase) — the first real replacement piece, live on our data.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; border-top: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.95em; color: var(--t); margin-bottom: 8px;">A promotable site</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">A website explaining what the platform is, what it does, and who benefits — inviting inquiries, so Scott has something real to promote now.</div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.7em; color: var(--m); line-height: 1.5;">Concrete, promotable deliverables — not a demo gimmick — before any larger build commitment.</div>

---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

# The question isn't whether to build it.

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.05em; color: var(--body); margin-top: 12px; max-width: 780px;">It's whether Arterial keeps renting its future — or finally owns the thing every one of its initiatives already depends on.</div>

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/arterial-owned-platform/polymash-logo.png" style="width: 56px; border-radius: 12px; margin-top: 28px;" />

---

<!-- _class: bg-glow-orange -->

# Sources & References
## A vision deck — these back the few external claims

<div style="font-size: 0.74em; line-height: 1.6; columns: 2; column-gap: 36px;">

<div style="break-inside: avoid; margin-bottom: 12px;"><strong style="color: var(--a);">Art-market value is consolidating around owned platforms + proprietary data.</strong> In 2025 Beowolff Capital acquired Artnet (~$73.7M) and merged it with Artsy into one data-and-AI ecosystem. — <a href="https://news.artnet.com/market/beowolff-capital-artnet-takeover-2649474">Artnet News</a>; <a href="https://www.artnews.com/art-news/news/artsy-artnet-merger-beowolff-art-market-1234781320/">ARTnews</a>.</div>

<div style="break-inside: avoid; margin-bottom: 12px;"><strong style="color: var(--a);">The rented gallery layer offers one rigid exhibition format</strong> — the limitation this platform removes. — Artwork Archive public exhibition/feature documentation; Arterial team production use.</div>

<div style="break-inside: avoid; margin-bottom: 12px;"><strong style="color: var(--a);">Vector-embedding visual similarity</strong> is the established technique behind the platform's "how artworks relate" discovery — the same approach Polymash already runs in production in the Intersect curator.</div>

</div>

<p style="font-size: 0.66em; color: var(--m); margin-top: 16px;">Full URLs, quotes, and retrieval dates: <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/009-arterial-owned-platform/research/sources.md"><code>research/sources.md</code></a> in the idea folder.</p>
