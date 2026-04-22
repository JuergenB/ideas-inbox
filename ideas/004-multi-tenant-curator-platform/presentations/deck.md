---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300;400&display=swap');

  :root {
    --a: #ff6b1a; --a2: #ff8c4a;
    --bg: #0c0c0c; --s: #111; --b: #1a1a1a;
    --m: #777; --t: #e0e0e0;
    --g: #22c55e; --r: #ef4444; --y: #f5a623;
    --body: #b0b0b0; --label: #888;
    --blue: #0199fe;
  }

  section {
    background-color: #0c0c0c;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(255,107,26,0.12) 100%);
    color: var(--t); font-family: 'Raleway', sans-serif; font-weight: 400;
    padding: 56px 72px; line-height: 1.5;
  }
  h1 { font-family: 'Outfit'; font-weight: 600; font-size: 2.2em; color: var(--t); letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 4px; }
  h2 { font-family: 'Raleway'; font-weight: 300; font-size: 1.2em; color: #aaa; margin: 0 0 20px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 400; }
  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.6em; color: var(--t); }
  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #151515; }
  header { text-align: left; } header img { margin: 0; }
  section.bg-glow { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.20) 100%), radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.14) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.22) 100%); }
  section.bg-glow-green { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(34,197,94,0.18) 100%), radial-gradient(ellipse at 100% 0%, rgba(34,197,94,0.12) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.18) 100%); }
  section.bg-dots { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,153,254,0.14) 100%), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.14) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(1,153,254,0.25) 100%); }
  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; }
header: ''
footer: ''
---

<!-- _class: bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<img src="./polymash-logo.png" style="width:56px; border-radius:12px; position:absolute; top:48px; right:64px;" />

# From One Newsletter to a Curation Platform

## Productizing the engine behind *The Intersect*

<div style="margin-top:48px; font-size:0.7em; color:#555;">
A discussion paper · Juergen Berkessel · Polymash · April 2026
</div>

---

<!-- _class: bg-dots -->

### The Question

# Is The Intersect Curator a product, or a one-off?

<div style="display:flex; gap:20px; margin-top:24px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:22px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:10px;">WHAT EXISTS</div>
    <div style="font-size:0.78em; color:var(--body); line-height:1.7;">
      A single-tenant Next.js app that ingests 200+ RSS feeds, scores with a Pinecone taste profile + Claude, assembles a newsletter, and produces a podcast end-to-end. In production weekly.
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:22px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--blue); margin-bottom:10px;">WHAT'S POSSIBLE</div>
    <div style="font-size:0.78em; color:var(--body); line-height:1.7;">
      The same engine, configured for <strong>any two-topic intersection</strong> — real estate × rates, EV × supply chain, biotech × FDA policy. Five thin seams per client, one shared core.
    </div>
  </div>
</div>

<div style="margin-top:28px; font-size:0.75em; color:var(--label); text-align:center;">
The engine works. The question is whether it's worth running more than one beat on it.
</div>

---

### The Thesis, in One Slide

# 90% Generic · 10% Per-Client

<div style="display:flex; gap:16px; margin-top:20px;">
  <div style="flex:1; background:var(--s); border:1px solid #1a3a1a; border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--g); text-transform:uppercase; letter-spacing:0.15em; margin-bottom:10px;">Shared Core · 90%</div>
    <div style="font-size:0.72em; color:var(--body); line-height:1.85;">
      RSS ingestion with dedup<br>
      Pinecone taste-profile vectors<br>
      Airtable data layer<br>
      Two-layer AI scoring loop<br>
      Issue assembly + entry writing<br>
      WonderCraft → Auphonic → Captivate<br>
      Cover art, publishing, analytics
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid #3a2a1a; border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--a); text-transform:uppercase; letter-spacing:0.15em; margin-bottom:10px;">Per-Client Seams · 10%</div>
    <div style="font-size:0.72em; color:var(--body); line-height:1.85;">
      RSS feed list (config)<br>
      The intersection rubric (prompt)<br>
      Taste profile (Pinecone namespace)<br>
      Brand voice (newsletter + podcast)<br>
      Visual identity (palette, covers)
    </div>
  </div>
</div>

<div style="margin-top:24px; font-size:0.74em; color:var(--label); text-align:center;">
The code doesn't know what domain it's in. That's the unlock.
</div>

---

<!-- _class: bg-grid -->

### The Engine Today

# End-to-End Pipeline

<div style="margin-top:16px; display:flex; align-items:center; gap:8px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--a);">INGEST</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">200+ RSS feeds<br>every 3 hours</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--a);">DEDUP</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">Hash + title<br>similarity</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--a);">EMBED</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">OpenAI →<br>Pinecone</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--a);">SCORE</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">Haiku + terms<br>+ taste sim</div>
  </div>
</div>

<div style="margin-top:10px; display:flex; align-items:center; gap:8px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--g);">CURATE</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">Human rates<br>on mobile</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--g);">ASSEMBLE</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">Theme + order<br>+ entries</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--g);">NEWSLETTER</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">Curated.co<br>delivery</div>
  </div>
  <div style="color:var(--m); font-size:1em;">→</div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 14px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.65em; color:var(--g);">PODCAST</div>
    <div style="font-size:0.62em; color:var(--body); margin-top:4px; line-height:1.4;">WonderCraft →<br>Auphonic → Captivate</div>
  </div>
</div>

<div style="margin-top:22px; font-size:0.72em; color:var(--label); text-align:center;">
Every box above is <strong>domain-agnostic</strong>. The rubric is the only thing that knows it's art × tech.
</div>

---

<!-- _class: bg-glow-orange -->

### The Five Seams

# What Changes Per Client

<div style="margin-top:10px;">
  <div style="display:flex; gap:12px; padding:12px 14px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:8px;">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1em; color:var(--a); text-align:center;">1</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">RSS feed list</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:2px;">30–50 URLs in an Airtable table. Pure curation work by a domain expert.</div>
    </div>
  </div>
  <div style="display:flex; gap:12px; padding:12px 14px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:8px;">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1em; color:var(--a); text-align:center;">2</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Intersection rubric</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:2px;">Scoring prompt: axis definitions, calibration examples, named failure modes. The hardest artifact to produce.</div>
    </div>
  </div>
  <div style="display:flex; gap:12px; padding:12px 14px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:8px;">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1em; color:var(--a); text-align:center;">3</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Taste profile</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:2px;">Per-client Pinecone namespace. Seeded from editor ratings. Improves with use.</div>
    </div>
  </div>
  <div style="display:flex; gap:12px; padding:12px 14px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:8px;">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1em; color:var(--a); text-align:center;">4</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Brand voice</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:2px;">Newsletter-writer prompt + podcast host personas (WonderCraft voice IDs).</div>
    </div>
  </div>
  <div style="display:flex; gap:12px; padding:12px 14px; background:var(--s); border:1px solid var(--b); border-radius:8px;">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1em; color:var(--a); text-align:center;">5</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Visual identity</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:2px;">Cover-art prompt template, palette, logo. Lightest-weight seam.</div>
    </div>
  </div>
</div>

---

### Architecture Options

# Tenant Isolation — Two Paths

<div style="display:flex; gap:14px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; border-top:3px solid var(--g);">
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
      <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">Recommended</span>
      <span style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t);">Option A · Base per tenant</span>
    </div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.75;">
      One Airtable base + one Pinecone namespace per client. Central "tenants" config table resolves request → tenant context.<br><br>
      <strong>+</strong> Hard isolation, simple backups, per-client customization<br>
      <strong>+</strong> Matches existing <code style="font-size:0.9em; color:var(--a);">lib/airtable/client.ts</code> pattern<br>
      <span style="color:var(--y);">&minus;</span> Onboarding copies a template base
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; border-top:3px solid var(--y);">
    <div style="display:flex; align-items:center; gap:8px; margin-bottom:12px;">
      <span class="tag" style="background:#f5a62312; color:var(--y); border:1px solid #f5a62322;">Alternative</span>
      <span style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t);">Option B · Shared base + client_id</span>
    </div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.75;">
      One base, every row carries a <code style="font-size:0.9em; color:var(--a);">client_id</code>. Every query filters by it.<br><br>
      <strong>+</strong> Easier cross-tenant reporting<br>
      <span style="color:var(--r);">&minus;</span> One missed filter = data leak<br>
      <span style="color:var(--r);">&minus;</span> Airtable has no row-level security<br>
      <span style="color:var(--r);">&minus;</span> Per-tenant backup/restore is painful
    </div>
  </div>
</div>

<div style="margin-top:18px; font-size:0.72em; color:var(--label); text-align:center;">
Go with A. Airtable is a <em>collaboration tool</em> — clients should see their base, nothing else.
</div>

---

<!-- _class: bg-dots -->

### Three Example Verticals

# The Rubric Transfers. The Examples Don't.

<div style="display:flex; gap:12px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.75em; color:var(--a); margin-bottom:6px;">Residential RE × Rates</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.6;">
      <strong>Feeds:</strong> Calculated Risk, Fed FEDS Notes, Urban Institute, Bloomberg RE<br><br>
      <strong>HIGH:</strong> "2–10 spread and housing volume"<br>
      <strong>LOW:</strong> Generic crash content, agent-bait listings
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.75em; color:var(--a); margin-bottom:6px;">EV × Supply Chain</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.6;">
      <strong>Feeds:</strong> Benchmark Mineral, IEA, USGS, DOE LPO, <em>Inside EVs</em><br><br>
      <strong>HIGH:</strong> "Indonesia nickel ban → Ford F-150 Lightning sourcing"<br>
      <strong>LOW:</strong> Pure Tesla results, pure lithium price moves
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.75em; color:var(--a); margin-bottom:6px;">Biotech × FDA Policy</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.6;">
      <strong>Feeds:</strong> Endpoints, STAT, <em>In the Pipeline</em>, FDA AdCom calendar<br><br>
      <strong>HIGH:</strong> "Accelerated approval hinged on new biomarker guidance"<br>
      <strong>LOW:</strong> Pure trial roundups, pure policy debate
    </div>
  </div>
</div>

<div style="margin-top:22px; font-size:0.74em; color:var(--label); text-align:center;">
Every beat has its own "fake intersection" failure mode. Naming them is what makes the rubric sharp.
</div>

---

<!-- _class: bg-glow-gold -->

### A Second Axis Family

# Topic × Geography — One Rubric, Many Editions

<div style="display:flex; gap:14px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; border-top:3px solid var(--a);">
    <div style="margin-bottom:8px;"><span class="tag" style="background:#ff6b1a15; color:var(--a); border:1px solid #ff6b1a33;">National + Metro Fan-Out</span></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.82em; color:var(--t); margin-bottom:10px;">Public Art × Urban Policy</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.75;">
      <strong>National core:</strong> percent-for-art programs, public commissioning, public-art law.<br><br>
      <strong>Fan out:</strong> LA, NYC, Chicago editions — same rubric; feeds and scoring filter to each metro's commissioning agencies, mural permitting, and local panels.<br><br>
      One editorial investment → N monetizable editions, each with its own local sponsor market.
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; border-top:3px solid var(--blue);">
    <div style="margin-bottom:8px;"><span class="tag" style="background:#0199fe15; color:var(--blue); border:1px solid #0199fe33;">Place Is the Axis</span></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.82em; color:var(--t); margin-bottom:10px;">Regional Craft Economy × Western NC</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.75;">
      <strong>The two axes:</strong> a sector (craft, makers, studios) and a named region. Feeds scope to state craft councils, local press, regional maker publications.<br><br>
      <strong>Rubric:</strong> scores topical fit <em>and</em> geographic relevance. A national ceramics-week recap doesn't qualify without a regional tie-in.<br><br>
      Deep local authority. Defensible against national aggregators.
    </div>
  </div>
</div>

<div style="margin-top:20px; font-size:0.72em; color:var(--label); text-align:center;">
Geography rides on the existing seams — a feed-list choice plus one scoring criterion. No new infrastructure.
</div>

---

### Engineering Effort

# 4–8 Weeks to a 2-Tenant MVP

<div style="margin-top:12px;">
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">3–5 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Tenant resolver middleware + request context
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">2–3 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Airtable client → tenant-aware (base ID from context)
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">1–2 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Pinecone → per-tenant namespaces
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">2–4 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Service client key scoping (Curated, Captivate, WonderCraft)
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--y); text-align:right;">5–10 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Platform admin UI — onboarding, rubric editor, cold-start seeding
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">2–3 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Per-tenant cron scheduling
    </div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:10px;">
    <div style="width:100px; font-family:'Outfit'; font-weight:700; font-size:0.85em; color:var(--a); text-align:right;">3–5 days</div>
    <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:6px; padding:10px 14px; font-size:0.72em; color:var(--body);">
      Template base + automated tenant provisioning
    </div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.72em; color:var(--label); text-align:center;">
Not included: rubric writing, feed curation, brand-voice capture. Those recur per client.
</div>

---

<!-- _class: bg-glow-gold -->

### Business Model

# Three Coherent Paths

<div style="display:flex; gap:12px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px; border-top:3px solid var(--y);">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t); margin-bottom:6px;">Pure SaaS</div>
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.3em; color:var(--y); margin-bottom:10px;">$200–800<span style="font-size:0.55em; color:var(--label);">/mo</span></div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.7;">
      Client configures & runs<br><br>
      <strong>Hard part:</strong> most buyers can't write a good rubric unaided
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px; border-top:3px solid var(--g);">
    <div style="display:flex; align-items:center; gap:6px; margin-bottom:6px;">
      <span style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Done-for-You</span>
      <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">Start here</span>
    </div>
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.3em; color:var(--g); margin-bottom:10px;">$3k–8k<span style="font-size:0.55em; color:var(--label);">/mo</span></div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.7;">
      Polymash delivers end-to-end<br><br>
      <strong>Hard part:</strong> scales linearly with headcount
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px; border-top:3px solid var(--a);">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t); margin-bottom:6px;">Hybrid</div>
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.3em; color:var(--a); margin-bottom:10px;">$10k–25k<span style="font-size:0.55em; color:var(--label);"> setup</span></div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.7;">
      White-glove onboarding + platform fee<br><br>
      <strong>Hard part:</strong> needs both product <em>and</em> playbook
    </div>
  </div>
</div>

<div style="margin-top:22px; font-size:0.72em; color:var(--label); text-align:center;">
Start with done-for-you. Learn what the rubric workshop needs. Graduate when you know the playbook.
</div>

---

<!-- _class: bg-glow-orange -->

### Risks

# What Could Kill This

<div style="margin-top:14px;">
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px;">
    <div style="width:24px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Curated.co has no publish API</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Manual click-to-send today. Fine at 3 clients. A part-time job at 5. Swap rail or live with it — decide early.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px;">
    <div style="width:24px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f5a623" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Voice licensing per client</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Different clients want different hosts. Clone rights are a legal surface Polymash doesn't have a process for yet.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px;">
    <div style="width:24px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ef4444" stroke-width="1.5"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Rubric-writing is bottlenecked on Juergen</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">The thing that makes the product good doesn't scale past ~10 clients without a structured workshop format or a rubric-authoring assistant. Most important strategic question on this page.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### Next Steps

# Cheap Validation Before Any Code

<div style="margin-top:16px;">
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px; border-left:3px solid var(--g);">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1.1em; color:var(--g);">1</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Pick a real candidate vertical</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Not hypothetical. One where there's a plausible buyer intro in 30 days.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px; border-left:3px solid var(--g);">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1.1em; color:var(--g);">2</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Run a rubric workshop with the buyer</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Rubric + 20-article calibration set. Expert reads it, agrees with it.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px; border-left:3px solid var(--g);">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1.1em; color:var(--g);">3</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Swap the rubric into the existing engine locally</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Seed 50 articles. See how they rank. This kills 90% of the "does it work" risk before any tenant-isolation code.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; margin-bottom:10px; border-left:3px solid var(--a);">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1.1em; color:var(--a);">4</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">If step 3 passes → 2-tenant MVP in 6 weeks</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">The Intersect itself + one new client. Scope as in the effort estimate.</div>
    </div>
  </div>
  <div style="display:flex; gap:14px; padding:14px 16px; background:var(--s); border:1px solid var(--b); border-radius:8px; border-left:3px solid var(--a);">
    <div style="width:28px; font-family:'Outfit'; font-weight:700; font-size:1.1em; color:var(--a);">5</div>
    <div style="flex:1;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Pick a business model before pricing the engagement</div>
      <div style="font-size:0.7em; color:var(--body); margin-top:3px;">Onboarding fee structure depends entirely on which of the three paths we're on.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-hero -->
<!-- _paginate: false -->

<img src="./polymash-logo.png" style="width:56px; border-radius:12px; position:absolute; top:48px; right:64px;" />

# The Engine Works.

## The question is whether Polymash wants to run it for more than one beat.

<div style="margin-top:36px; display:flex; justify-content:center; gap:24px;">
  <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px 22px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--blue);">90%</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:4px;">engine is generic</div>
  </div>
  <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px 22px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--blue);">5</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:4px;">per-client seams</div>
  </div>
  <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px 22px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--blue);">6 wks</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:4px;">to 2-tenant MVP</div>
  </div>
</div>

<div style="margin-top:48px; font-size:0.65em; color:#555;">
Discussion paper · Juergen Berkessel · Polymash · April 2026
</div>
