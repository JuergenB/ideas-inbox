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
    padding: 52px 68px;
    line-height: 1.5;
  }

  h1 { font-family: 'Outfit'; font-weight: 600; font-size: 2.1em; color: var(--t); letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 4px; }
  h2 { font-family: 'Raleway'; font-weight: 300; font-size: 1.15em; color: #aaa; margin: 0 0 18px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 400; }
  em { color: var(--t); font-style: italic; }

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

  table { width: 100%; border-collapse: collapse; font-size: 0.6em; margin-top: 6px; }
  th { font-family: 'Outfit'; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.82em; color: var(--m); text-align: left; padding: 7px 12px; border-bottom: 1px solid var(--b); }
  td { padding: 8px 12px; border-bottom: 1px solid var(--b); color: var(--body); vertical-align: top; }
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

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/pressranger-outreach-playbook/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px;" />

# The Outreach We're Not Doing

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.98em; color: var(--body); margin-top: 14px; max-width: 800px;">We've built a great system for <em>making</em> open calls and exhibitions — and almost no system for <strong>promoting</strong> them. There's a tool we already own that fills the gap.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">For Scott &amp; Elise</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">Not Real Art · Artsville · Arterial</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">June 2026</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The Problem

# Three Gaps We Keep Hitting

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">No central repository</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Press &amp; outreach contacts live in inboxes and people's heads — not a shared, structured system.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">No active owner</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Promotion is whoever-has-time — which means it mostly doesn't happen.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">No PR cadence</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Releases go out sporadically — not before, on, and after each open call and show.</div>
  </div>
</div>

<div style="margin-top: 20px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--a); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6; font-style: italic;">"We notify the right sources every time we launch a call — because our own email can't be it. It's too weak or small." <span style="color: var(--m); font-style: normal;">— Thursday Open Call meeting</span></div>

---

<!-- _class: bg-hero -->

### The Approach

# Own The Engine, Plug In The Tools

<div style="font-size: 0.82em; color: var(--body); margin-top: 8px; max-width: 880px; line-height: 1.55;">We don't need to <em>adopt a PR platform</em>. We need a promotion engine — and we already own most of one. Extend what we have; rent only commodity inputs.</div>

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1.1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--blue); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.9em; color:var(--blue); margin-bottom:8px;">The engine we own (the spine)</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.7;">
    • <strong>Promotion repository</strong> — extend the Artwork Archive Airtable (campaigns + open calls + submissions) with releases, playbook, contacts, partner registry, assets<br>
    • <strong>Our own press-release generator</strong> — reuse the AI content gen in the-intersect-curator / PolyWiz<br>
    • <strong>n8n</strong> — fires the playbook on every call</div>
  </div>
  <div style="flex: 0.9; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--m); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.9em; color:var(--m); margin-bottom:8px;">Plug-in tools (swappable)</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.7;">
    • <strong>PressRanger</strong> — a journalist-DB feed + pitch radar we already own<br>
    • <strong>Wires</strong> — EIN / eReleases / PressRanger, per release<br>
    • <strong>Listing boards & partners</strong> — where we register calls</div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.72em; color: var(--m); line-height: 1.5; text-align: center;">Same principle as Idea 009 — own the layer; don't rent your spine. If a tool's data or pricing changes, swap the feed, not the engine.</div>

---

<!-- _class: bg-glow-gold -->

### One Tool We Already Own

# PressRanger — A Cheap, Already-Owned Feed

<div style="font-size: 0.86em; color: var(--body); margin-top: 10px; max-width: 880px; line-height: 1.6;">Scott and Juergen both bought <strong>PressRanger</strong> on an AppSumo lifetime deal — and forgot about it. Reminded, Scott's reaction: <em>"Happy to start leveraging it… given the low cost, it'd be interesting to turn it into a capability for artists or galleries."</em></div>

<div style="display: flex; gap: 16px; margin-top: 22px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--t);">500K+</div>
    <div style="font-size: 0.66em; color: var(--m);">journalists</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--t);">160K+</div>
    <div style="font-size: 0.66em; color: var(--m);">publishers / outlets</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--t);">200K+</div>
    <div style="font-size: 0.66em; color: var(--m);">podcasts</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:1.5em; color:var(--g);">$0</div>
    <div style="font-size: 0.66em; color: var(--m);">our monthly cost</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.72em; color: var(--m); line-height: 1.55;">Juergen's account is <strong style="color:var(--body); font-weight:600;">AppSumo Tier 3</strong> — 10 brands, 4,000 contact exports/mo, pitch notifications, custom media rooms. Already enough to start.</div>

---

<!-- _class: bg-glow -->

### The Key Insight

# It's Really Two Products In One Box

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--g); border-radius: 10px; padding: 18px 22px;">
    <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">The asset — we own it</span>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.05em; color: var(--t); margin-top: 12px;">Media database + CRM + AI</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6; margin-top: 8px;">Find journalists &amp; podcasts, draft releases and pitches with AI, track relationships, catch inbound press requests. <strong>This lane costs $3K–$40K/yr elsewhere.</strong></div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--m); border-radius: 10px; padding: 18px 22px;">
    <span class="tag" style="background:#77777718; color:var(--m); border:1px solid #77777733;">A commodity — pay per use</span>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.05em; color: var(--t); margin-top: 12px;">Pay-per-release wire</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6; margin-top: 8px;">$299–$399 to syndicate a release to 400–500 outlets. Useful, optional — and <strong>not the bargain</strong> (see next slide).</div>
  </div>
</div>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--g); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6;">Mine the <strong>software</strong>. Shop the <strong>wire</strong> like any other line item.</div>

---

<!-- _class: bg-dots -->

### What The Software Does

# The Half That's Worth Our Time

<div style="display: flex; gap: 13px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--a); margin-bottom:5px;">Media databases</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Search journalists, outlets &amp; podcasts by beat, location, activity.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--a); margin-bottom:5px;">AI campaigns</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Auto-builds a target list with fit scores; drafts releases &amp; pitches.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--a); margin-bottom:5px;">Built-in CRM</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Track Pitched → Replied → Published per campaign.</div>
  </div>
</div>
<div style="display: flex; gap: 13px; margin-top: 13px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--blue); margin-bottom:5px;">Pitch radar</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Inbound press requests (HARO &amp; more), scored for relevance.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--blue); margin-bottom:5px;">Media room</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">A custom-domain newsroom per brand for our releases.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--blue); margin-bottom:5px;">White-label</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Brandable reports — the path to PR-as-a-service for our artists.</div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### "Is It Actually Cheaper?"

# The Software Is The Bargain — Not The Wire

<div style="display: flex; gap: 18px; margin-top: 14px;">

<div style="flex: 1;">
<div style="font-family:'Outfit'; font-weight:600; font-size:0.62em; color:var(--g); text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;">Software (we pay $0)</div>

| Tool | Real cost / yr |
|---|---|
| **PressRanger** | **$0 — owned** |
| Prowly | ~$3,100 |
| Cision | ~$10K–15K |
| Meltwater | ~$15K–40K+ |

</div>

<div style="flex: 1;">
<div style="font-family:'Outfit'; font-weight:600; font-size:0.62em; color:var(--m); text-transform:uppercase; letter-spacing:0.12em; margin-bottom:4px;">Wire (per release)</div>

| Service | Price |
|---|---|
| EIN Presswire | ~$149 |
| **PressRanger** | **$299 / $399** |
| eReleases | $399+ (nonprofit) |
| PR Newswire | $1,500–3,000 |

</div>

</div>

<div style="margin-top: 14px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--y); border-radius: 8px; padding: 13px 18px; font-size: 0.74em; color: var(--body); line-height: 1.6;">PressRanger's wire is <strong>not discounted by our subscription</strong> — anyone with a free account pays the same. It's mid-market, not cheap. Our savings are entirely in the <strong>software</strong> we already own.</div>

---

<!-- _class: bg-grid -->

### Distribution Strategy

# Shop The Wire By The Story

<div style="display: flex; gap: 14px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--g); margin-bottom:6px;">Routine open call</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6;">Free listing boards + targeted pitches + paid social. <strong>No paid wire</strong>, or EIN Presswire (~$149) for cheap SEO pickup.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:6px;">Notable story</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6;"><strong>PressRanger Gold ($399)</strong> when AI-chatbot indexing (AIWire) + podcast reach earns it.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--blue); margin-bottom:6px;">Marquee moment</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6;"><strong>eReleases / CauseWire</strong> — real PR Newswire reach at nonprofit rates, for a flagship grant or partnership.</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.78em; color: var(--m); line-height: 1.6; text-align: center;">The database, CRM and pitching are the workhorse. The paid wire is the exception.</div>

---

<!-- _class: bg-glow-orange -->

### Eyes Open

# What PressRanger Isn't

<div style="display: flex; gap: 16px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--r); margin-bottom: 6px;">Noisy data</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Beats are matched by keyword on bios — arts lists carry false positives. One test: a 100-contact list exported with only <strong>~8 direct emails</strong>.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--r); margin-bottom: 6px;">Send with care</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Blasting cold email from the tool can hurt deliverability. Pitch small + personal from it; blast the artist list from our own ESP.</div>
  </div>
</div>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--g); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6;">So: PressRanger for <strong>discovery</strong>, a curated Airtable as our <strong>source-of-truth</strong>, and disciplined sending — never "trust the raw list and hit send."</div>

---

<!-- _class: bg-glow -->

### The System In Practice

# Our Stack Is The Spine — PressRanger Feeds It

<div style="display: flex; gap: 10px; margin-top: 18px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 15px 16px; text-align: center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.88em; color:var(--a);">PressRanger</div>
    <div style="font-size: 0.62em; color: var(--m); margin-top:6px;">feed</div>
    <div style="font-size: 0.64em; color: var(--body); line-height: 1.5; margin-top: 6px;">Arts-beat contacts + pitch radar</div>
  </div>
  <div style="display:flex; align-items:center; color:var(--m); font-size:1.3em;">→</div>
  <div style="flex: 1.4; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--blue); border-radius: 10px; padding: 15px 16px; text-align: center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.88em; color:var(--blue);">Airtable repository</div>
    <div style="font-size: 0.62em; color: var(--m); margin-top:6px;">we own it — extended from Artwork Archive</div>
    <div style="font-size: 0.64em; color: var(--body); line-height: 1.5; margin-top: 6px;">Releases · playbook · contacts · partner registry · assets</div>
  </div>
  <div style="display:flex; align-items:center; color:var(--m); font-size:1.3em;">→</div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 15px 16px; text-align: center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:0.88em; color:var(--g);">Generator + n8n</div>
    <div style="font-size: 0.62em; color: var(--m); margin-top:6px;">our AI + automation</div>
    <div style="font-size: 0.64em; color: var(--body); line-height: 1.5; margin-top: 6px;">Drafts the release, fires the playbook every time</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.76em; color: var(--m); line-height: 1.6; text-align: center;">The "institutionalize the outreach" ask — but the spine is <strong style="color:var(--body); font-weight:600;">ours</strong>, not rented. Swap any feed without touching the engine.</div>

---

<!-- _class: bg-dots -->

### Where To Register — US-Wide

# Most Of This Reach Is Free, And Unused

<div style="display: flex; gap: 14px; margin-top: 12px;">

<div style="flex: 1;">
<div style="font-family:'Outfit'; font-weight:600; font-size:0.58em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:6px;">Free listing boards</div>
<div style="font-size: 0.68em; color: var(--body); line-height: 1.85;">
EntryThingy<br>
ArtCallEntry<br>
Artwork Archive<br>
ArtConnect<br>
Fractured Atlas<br>
<span style="color:var(--m);">+ CaFÉ for juried intake</span>
</div>
</div>

<div style="flex: 1;">
<div style="font-family:'Outfit'; font-weight:600; font-size:0.58em; color:var(--y); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:6px;">Orgs &amp; partners</div>
<div style="font-size: 0.68em; color: var(--body); line-height: 1.85;">
NYFA Opportunities<br>
Americans for the Arts<br>
Artist Communities Alliance<br>
Creative Capital list<br>
State / regional councils<br>
<span style="color:var(--m);">NEA — fund our program</span>
</div>
</div>

<div style="flex: 1;">
<div style="font-family:'Outfit'; font-weight:600; font-size:0.58em; color:var(--blue); text-transform:uppercase; letter-spacing:0.1em; margin-bottom:6px;">Amplifiers to pitch</div>
<div style="font-size: 0.68em; color: var(--body); line-height: 1.85;">
Hyperallergic <span style="color:var(--m);">(tips@)</span><br>
This Is Colossal<br>
Create! Magazine<br>
Art Opportunities Monthly<br>
Booooooom<br>
Arts to Hearts
</div>
</div>

</div>

<div style="margin-top: 14px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--a); border-radius: 8px; padding: 12px 18px; font-size: 0.72em; color: var(--body); line-height: 1.55;">Full directory with URLs, fees and contacts in <strong style="color:var(--body); font-weight:600;">research/submission-platforms.md</strong>. We're not posting to most of these today.</div>

---

<!-- _class: bg-grid -->

### The Playbook

# Same Steps, Every Call, Every Show

<table>
<thead><tr><th>Moment</th><th>Press release</th><th>Free listings</th><th>Artist email</th><th>Paid social</th></tr></thead>
<tbody>
<tr><td><strong>Open call opens</strong></td><td>✓</td><td>✓</td><td>✓</td><td>✓</td></tr>
<tr><td><strong>Show announced</strong></td><td>✓</td><td>—</td><td>✓</td><td>optional</td></tr>
<tr><td><strong>Exhibition live</strong></td><td>✓</td><td>—</td><td>✓</td><td>optional</td></tr>
</tbody>
</table>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--g); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6;">The grant campaigns over-performed because we ran <strong>Facebook ads to the landing pages</strong> — not organic luck. Open calls deserve the same multi-channel treatment, pointed at one aligned registration URL with UTMs so we can measure it.</div>

---

<!-- _class: bg-glow-green -->

### The Lever That Moves Numbers

# Paid Social, Automated Through PolyWiz

<div style="font-size: 0.8em; color: var(--body); margin-top: 6px; max-width: 880px; line-height: 1.55;">PR + listings + email harvest <em>existing</em> intent. Paid social <strong>manufactures new intent</strong> — and we already scoped the engine in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/007-polywiz-paid-ads-engine">Idea 007</a>. Add one thin <strong>"Open Calls" category</strong> to it.</div>

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 15px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--a); margin-bottom:6px;">What it does</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">A new open-call record auto-generates 8–15 ad variants → <strong>Meta + Pinterest</strong> via Zernio, optimized for <strong>submissions</strong>, plus organic reminders trickled across the run (opened → 1 week left → 48h).</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 15px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--blue); margin-bottom:6px;">Why Pinterest</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;">Visual-discovery, art-aligned audience, native lead ads, <strong>CPC 30–50% under Meta</strong>. Open calls are the use case that justifies turning it on.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 15px 18px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--g); margin-bottom:6px;">Conservative budget</div>
    <div style="font-size: 0.66em; color: var(--body); line-height: 1.55;"><strong>~$150–$300 per call</strong> (short flights, not always-on). First test: one brand, one call, ~$250 — to measure cost-per-submission for the <em>first time</em>.</div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.72em; color: var(--m); line-height: 1.5; text-align: center;">Compounds: submissions now + newsletter signups + a retargeting pool that makes the next call cheaper. Same engine repoints at donors in the fall.</div>

---

<!-- _class: bg-glow-gold -->

### Phasing

# Start Small, Earn The Next Phase

<div style="display: flex; gap: 14px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--a); border-radius: 10px; padding: 16px 18px;">
    <span class="tag" style="background:#ff6b1a15; color:var(--a); border:1px solid #ff6b1a33;">Phase 1 — now</span>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-top:10px;">Open-call promotion</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55; margin-top: 6px;">Stand up Airtable, codify the playbook, run it live on <strong>Art of Resistance</strong>. Owner: Elise.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--blue); border-radius: 10px; padding: 16px 18px;">
    <span class="tag" style="background:#0199fe15; color:var(--blue); border:1px solid #0199fe44;">Phase 2 — fall</span>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-top:10px;">Fundraising</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55; margin-top: 6px;">Same engine, pointed at donors &amp; impact press once the books / DAF groundwork lands.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-top: 2px solid var(--g); border-radius: 10px; padding: 16px 18px;">
    <span class="tag" style="background:#22c55e12; color:var(--g); border:1px solid #22c55e22;">Phase 3 — optional</span>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-top:10px;">PR-as-a-service</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55; margin-top: 6px;">White-label the playbook for the artists &amp; galleries in our network — Scott's instinct.</div>
  </div>
</div>

---

<!-- _class: bg-glow -->

### The Ask

# What We Need To Decide

<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 18px;">
  <div class="row" style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 20px; display:flex; gap:16px; align-items:flex-start;">
    <div style="font-family:'Outfit'; font-weight:700; color:var(--a); font-size:1.1em;">1</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.55;"><strong>Reactivate access.</strong> Scott is sharing the password with Elise &amp; Juergen. Juergen's Tier 3 account is enough to start now.</div>
  </div>
  <div class="row" style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 20px; display:flex; gap:16px; align-items:flex-start;">
    <div style="font-family:'Outfit'; font-weight:700; color:var(--a); font-size:1.1em;">2</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.55;"><strong>Elise evaluates it</strong> against a real call — "can it find &amp; help us reach arts journalists, podcasts and partners?" — not as an abstract tool review.</div>
  </div>
  <div class="row" style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 20px; display:flex; gap:16px; align-items:flex-start;">
    <div style="font-family:'Outfit'; font-weight:700; color:var(--a); font-size:1.1em;">3</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.55;"><strong>Review as a team</strong> on a Thursday — agree the playbook, the Airtable schema, and the first live test.</div>
  </div>
</div>

---

<!-- _class: lead bg-hero -->

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/pressranger-outreach-playbook/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px;" />

# Short Version

<div style="font-size: 0.85em; color: var(--body); margin-top: 12px; max-width: 880px; line-height: 1.6;">We already own most of a promotion engine. <strong>Extend the Artwork Archive Airtable</strong> into a press-release + playbook system, build a small <strong>generator</strong>, plug <strong>PressRanger in as one cheap feed</strong>, and register every call across the free US-wide boards. Give Elise the wheel for one real open call — and we finally promote our calls instead of just running them.</div>

<div style="margin-top: 22px; font-size: 0.72em; color: var(--m);">Let's pick a call and try it. — Juergen Berkessel, Polymash</div>

---

<!-- _paginate: true -->

# Sources & References
## Evidence behind the claims in this deck

<div style="font-size: 0.6em; line-height: 1.55;">

**PressRanger features &amp; databases (500K journalists / 160K publishers / 200K podcasts), CRM, AI, pitch radar, white-label** — <a href="https://pressranger.com/pages/pr-software">pressranger.com/pages/pr-software</a> + journalist / publisher / podcast / pitch-request pages. First-party, retrieved 2026-06-12.

**Distribution $299 Premium / $399 Gold, not subscription-gated, AIWire** — <a href="https://pressranger.com/pages/wholesale-press-release-distribution">PressRanger wholesale distribution</a> &amp; <a href="https://pressranger.com/pages/pricing">pricing</a>.

**EIN Presswire ~$149/release; budget wires** — <a href="https://www.einpresswire.com/pricing">einpresswire.com/pricing</a>. **eReleases $399+ &amp; nonprofit CauseWire** — <a href="https://www.ereleases.com/causewire/">ereleases.com/causewire</a>. **PR Newswire real $1,500–3,000** — <a href="https://www.prezly.com/academy/pr-newswire-pricing">Prezly PR Newswire pricing</a>.

**Cision ~$10–15K/yr · Meltwater ~$15–40K/yr · Prowly ~$3,100/yr** — <a href="https://prowly.com/magazine/cision-vs-meltwater/">Prowly</a>; <a href="https://www.prezly.com/academy/muck-rack-pricing-guide">Prezly</a> (estimates; custom-quote vendors).

**Data-quality caveat (~8 emails on a 100-contact export; keyword categorization)** — <a href="https://appsumo.com/products/press-ranger/reviews/">AppSumo reviews</a>; <a href="https://research.com/software/reviews/press-ranger-review">Research.com</a>.

**US-wide listing boards, partners &amp; amplifiers (EntryThingy, ArtCallEntry, Artwork Archive, ArtConnect, Fractured Atlas, NYFA, Americans for the Arts, Artist Communities Alliance, Creative Capital, Hyperallergic, This Is Colossal, Booooooom)** — grounded Perplexity + WebSearch, 2026-06; URLs in the research file.

</div>

<p style="font-size: 0.6em; color: var(--m); margin-top: 14px;">Full URLs, quotes, retrieval dates, account-confirmed Tier 3 capacity, and the meeting transcript: <strong style="color: var(--body); font-weight: 600;">research/sources.md</strong> in the idea folder. Pricing was current June 2026 — verify before quoting.</p>
