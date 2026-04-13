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

# Building a Podcast Website That Actually Competes

## Market research, content architecture, and feature advisory

<div style="margin-top:48px; font-size:0.7em; color:#555;">
Prepared by Juergen Berkessel, Polymash &middot; April 2026
</div>

---

<!-- _class: bg-dots -->

### Agenda

# What We'll Cover

<div style="display:flex; gap:20px; margin-top:20px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px 20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--a); margin-bottom:6px;">01</div>
    <div style="font-size:0.78em; color:var(--body);">Market reality &mdash; who's out there, what they charge, and where they fall short</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px 20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--a); margin-bottom:6px;">02</div>
    <div style="font-size:0.78em; color:var(--body);">The content problem &mdash; why every current builder gets podcast content wrong</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px 20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--a); margin-bottom:6px;">03</div>
    <div style="font-size:0.78em; color:var(--body);">SEO & AI search &mdash; what actually drives podcast discoverability on the web</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px 20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--a); margin-bottom:6px;">04</div>
    <div style="font-size:0.78em; color:var(--body);">The feature set &mdash; what a competitive podcast website builder needs</div>
  </div>
</div>

---

### Market Scale

# The Podcast Market in 2026

<div style="display:flex; gap:18px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:2em; color:var(--a);">$40B</div>
    <div style="font-size:0.7em; color:var(--label); margin-top:4px;">Global podcast market</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:2em; color:var(--a);">584M</div>
    <div style="font-size:0.7em; color:var(--label); margin-top:4px;">Global listeners</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:2em; color:var(--a);">603K</div>
    <div style="font-size:0.7em; color:var(--label); margin-top:4px;">Active podcasts</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px; text-align:center;">
    <div style="font-family:'Outfit'; font-weight:700; font-size:2em; color:var(--a);">175M</div>
    <div style="font-size:0.7em; color:var(--label); margin-top:4px;">U.S. monthly listeners</div>
  </div>
</div>

<div style="margin-top:24px; font-size:0.75em; color:var(--body);">
4.58M podcasts registered, but only <strong>603,000 actively publishing</strong> (episode in last 90 days). That active base is the addressable market for a website builder.
</div>

---

<!-- _class: bg-glow-orange -->

### What Podcasters Struggle With

# Pain Points (558-Creator Survey)

<div style="margin-top:16px;">
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
    <div style="width:60px; font-family:'Outfit'; font-weight:700; font-size:1.4em; color:var(--a); text-align:right;">72%</div>
    <div style="flex:1;">
      <div style="background:var(--b); border-radius:6px; height:28px; overflow:hidden;">
        <div style="background:linear-gradient(90deg, var(--a), var(--a2)); width:72%; height:100%; border-radius:6px;"></div>
      </div>
    </div>
    <div style="width:200px; font-size:0.75em; color:var(--body);">Audience growth & discoverability</div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
    <div style="width:60px; font-family:'Outfit'; font-weight:700; font-size:1.4em; color:var(--y); text-align:right;">47%</div>
    <div style="flex:1;">
      <div style="background:var(--b); border-radius:6px; height:28px; overflow:hidden;">
        <div style="background:linear-gradient(90deg, var(--y), #f5c563); width:47%; height:100%; border-radius:6px;"></div>
      </div>
    </div>
    <div style="width:200px; font-size:0.75em; color:var(--body);">Promotion (where they get stuck)</div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
    <div style="width:60px; font-family:'Outfit'; font-weight:700; font-size:1.4em; color:var(--y); text-align:right;">39%</div>
    <div style="flex:1;">
      <div style="background:var(--b); border-radius:6px; height:28px; overflow:hidden;">
        <div style="background:linear-gradient(90deg, var(--y), #f5c563); width:39%; height:100%; border-radius:6px;"></div>
      </div>
    </div>
    <div style="width:200px; font-size:0.75em; color:var(--body);">Monetization (85% earn $0)</div>
  </div>
  <div style="display:flex; align-items:center; gap:14px; margin-bottom:14px;">
    <div style="width:60px; font-family:'Outfit'; font-weight:700; font-size:1.4em; color:var(--m); text-align:right;">30%</div>
    <div style="flex:1;">
      <div style="background:var(--b); border-radius:6px; height:28px; overflow:hidden;">
        <div style="background:linear-gradient(90deg, #555, #777); width:30%; height:100%; border-radius:6px;"></div>
      </div>
    </div>
    <div style="width:200px; font-size:0.75em; color:var(--body);">Time commitment & burnout</div>
  </div>
</div>

<div style="font-size:0.72em; color:var(--label); margin-top:8px;">A weekly podcast demands <strong>12-18 hours of non-recording work</strong> per episode.</div>

---

### What Podcasters Spend

# The $100/Month Inflection Point

<div style="display:flex; gap:20px; margin-top:16px;">
  <div style="flex:1;">
    <div style="display:flex; align-items:flex-end; gap:12px; height:200px; padding:0 20px;">
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">
        <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--body);">29%</div>
        <div style="width:100%; background:linear-gradient(180deg, #333, #222); border-radius:4px 4px 0 0; height:87px;"></div>
        <div style="font-size:0.6em; color:var(--label);">$0/mo</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">
        <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--body);">38%</div>
        <div style="width:100%; background:linear-gradient(180deg, var(--y), #b87d10); border-radius:4px 4px 0 0; height:114px;"></div>
        <div style="font-size:0.6em; color:var(--label);">$10-49</div>
      </div>
      <div style="flex:1; display:flex; flex-direction:column; align-items:center; gap:6px;">
        <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a);">33%</div>
        <div style="width:100%; background:linear-gradient(180deg, var(--a), #cc5515); border-radius:4px 4px 0 0; height:99px;"></div>
        <div style="font-size:0.6em; color:var(--label);">$100+</div>
      </div>
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-bottom:12px;">The spending threshold</div>
    <div style="font-size:0.75em; color:var(--body); line-height:1.7;">
      Podcasters spending <strong>$100+/month</strong> get <strong>44% more downloads</strong> per episode than those spending $0.<br><br>
      The website builder market sits in the <strong>$15-40/month</strong> zone &mdash; accessible to both groups.<br><br>
      The <strong>$19-29/month</strong> range is the sweet spot. Podpage anchors at $19. Beating their feature set at $29 is the play.
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### Competitive Landscape

# Dedicated Podcast Website Builders

<div style="margin-top:12px;">
  <div style="display:flex; padding:10px 16px; border-bottom:1px solid #222; font-size:0.68em;">
    <div style="flex:2; color:var(--m); font-family:'Outfit'; font-weight:600;">Platform</div>
    <div style="flex:1; color:var(--m); font-family:'Outfit'; font-weight:600;">Price</div>
    <div style="flex:2; color:var(--m); font-family:'Outfit'; font-weight:600;">What It Does</div>
    <div style="flex:2; color:var(--m); font-family:'Outfit'; font-weight:600;">What It Lacks</div>
  </div>
  <div style="display:flex; padding:12px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--a); font-weight:400;">Podpage</div>
    <div style="flex:1; color:var(--body);">$12-39/mo</div>
    <div style="flex:2; color:var(--body);">RSS sync, episode pages, AI show notes (Elite only)</div>
    <div style="flex:2; color:var(--body);">Design flexibility, AI gated at $39, no social</div>
  </div>
  <div style="display:flex; padding:12px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--t);">Beamly</div>
    <div style="flex:1; color:var(--body);">~$12/mo</div>
    <div style="flex:2; color:var(--body);">RSS sync, multi-show, memberships</div>
    <div style="flex:2; color:var(--body);">Small, less proven</div>
  </div>
  <div style="display:flex; padding:12px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--t);">OnPodium</div>
    <div style="flex:1; color:var(--body);">$7/mo</div>
    <div style="flex:2; color:var(--body);">Episode pages, basic SEO</div>
    <div style="flex:2; color:var(--body);">Budget, limited features</div>
  </div>
  <div style="display:flex; padding:12px 16px; font-size:0.72em;">
    <div style="flex:2; color:var(--t);">ZipiStream</div>
    <div style="flex:1; color:var(--body);">$7.44/mo</div>
    <div style="flex:2; color:var(--body);">Sponsor-focused</div>
    <div style="flex:2; color:var(--body);">Niche</div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.75em; color:var(--body);">
<strong>Podpage is essentially alone.</strong> The others are marginal. AI features locked behind $39/mo Elite tier. Clear opening at $15-30.
</div>

---

### Hosting Platforms

# Built-In Websites: "Good Enough" Isn't

<div style="display:flex; gap:12px; margin-top:14px; flex-wrap:wrap;">
  <div style="flex:1; min-width:180px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Transistor</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:2px;">$19-199/mo</div>
    <div style="font-size:0.7em; color:var(--body); margin-top:8px;">Best aesthetics of the hosting platforms. Dynamic show notes on Pro+.</div>
  </div>
  <div style="flex:1; min-width:180px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Captivate</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:2px;">$19-99/mo</div>
    <div style="font-size:0.7em; color:var(--body); margin-top:8px;">Good templates, strong monetization tools. No content enrichment.</div>
  </div>
  <div style="flex:1; min-width:180px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Buzzsprout</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:2px;">$0-79/mo</div>
    <div style="font-size:0.7em; color:var(--body); margin-top:8px;">Largest community. Functional but basic website. Cohost AI as add-on.</div>
  </div>
  <div style="flex:1; min-width:180px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Podbean</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:2px;">$0-99/mo</div>
    <div style="font-size:0.7em; color:var(--body); margin-top:8px;">Best built-in marketplace. Dated design.</div>
  </div>
  <div style="flex:1; min-width:180px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t);">Libsyn / Castos</div>
    <div style="font-size:0.65em; color:var(--label); margin-top:2px;">$12-150/mo</div>
    <div style="font-size:0.7em; color:var(--body); margin-top:8px;">Legacy players. Website is an afterthought.</div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.75em; color:var(--body);">
<strong>They all do the same thing:</strong> pull the RSS description onto a template page and call it a website. None differentiate between app micro-copy and what a website should actually contain.
</div>

---

<!-- _class: bg-glow-orange -->

### The Core Problem

# The RSS Description Is Not Show Notes

<div style="display:flex; gap:20px; margin-top:16px;">
  <div style="flex:1; background:var(--s); border:1px solid #331a11; border-radius:10px; padding:20px; position:relative; overflow:hidden;">
    <div style="position:absolute; top:0; left:0; right:0; height:2px; background:var(--r);"></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--r); margin-bottom:10px;">RSS Feed (Micro-Copy)</div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.8;">
      &bull; 200-400 character teaser<br>
      &bull; 2-4 essential links max<br>
      &bull; MM:SS timestamps for in-app nav<br>
      &bull; Guest name + one-line title<br>
      &bull; No transcript (4,000 char limit)<br>
      &bull; No SEO markup (RSS not indexed)<br>
      &bull; No calls to action
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid #112211; border-radius:10px; padding:20px; position:relative; overflow:hidden;">
    <div style="position:absolute; top:0; left:0; right:0; height:2px; background:var(--g);"></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--g); margin-bottom:10px;">Website (Full Show Notes)</div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.8;">
      &bull; 500-2,000+ word article<br>
      &bull; Full categorized resource library<br>
      &bull; Clickable timestamps &rarr; player<br>
      &bull; Full guest bio, social links, related episodes<br>
      &bull; Full searchable transcript<br>
      &bull; JSON-LD structured data, FAQ schema<br>
      &bull; Newsletter signup, lead magnets, affiliate links
    </div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.75em; color:var(--body);">
Every current builder puts the RSS micro-copy on a template page and calls it "show notes." <strong>This is like using a movie trailer as the movie.</strong>
</div>

---

### Who Gets It Right

# How Top Podcasts Handle Their Websites

<div style="margin-top:12px;">
  <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #1a1a1a; font-size:0.75em;">
    <div style="width:180px; font-family:'Outfit'; font-weight:600; color:var(--a);">Tim Ferriss</div>
    <div style="flex:1; color:var(--body);">Show notes function as <strong>standalone essays</strong> &mdash; extensive resource lists, timestamps, guest quotes, written analysis beyond the audio</div>
  </div>
  <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #1a1a1a; font-size:0.75em;">
    <div style="width:180px; font-family:'Outfit'; font-weight:600; color:var(--a);">Lex Fridman</div>
    <div style="flex:1; color:var(--body);">Searchable transcripts with <strong>clickable timestamps</strong> that control the player &mdash; click a line, audio jumps to that moment</div>
  </div>
  <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #1a1a1a; font-size:0.75em;">
    <div style="width:180px; font-family:'Outfit'; font-weight:600; color:var(--a);">Huberman Lab</div>
    <div style="flex:1; color:var(--body);">Transcripts are <strong>premium content</strong> &mdash; paid Supercast subscribers only. Monetizing what others give away</div>
  </div>
  <div style="display:flex; align-items:center; padding:14px 16px; border-bottom:1px solid #1a1a1a; font-size:0.75em;">
    <div style="width:180px; font-family:'Outfit'; font-weight:600; color:var(--a);">99% Invisible</div>
    <div style="flex:1; color:var(--body);">Free transcript pages, <strong>fully indexed by Google</strong>, creating organic search discovery pathways</div>
  </div>
  <div style="display:flex; align-items:center; padding:14px 16px; font-size:0.75em;">
    <div style="width:180px; font-family:'Outfit'; font-weight:600; color:var(--a);">Stuff You Should Know</div>
    <div style="flex:1; color:var(--body);">Consistent notes across <strong>2,700+ episodes</strong> &mdash; long-term SEO compounding at scale</div>
  </div>
</div>

<div style="margin-top:12px; font-size:0.72em; color:var(--label);">These are content platforms, not episode listings. That is the structural insight a builder should encode.</div>

---

<!-- _class: bg-glow-green -->

### SEO Opportunity

# Google Ranks Web Pages, Not Podcasts

<div style="display:flex; gap:18px; margin-top:16px;">
  <div style="flex:1;">
    <div style="font-size:0.78em; color:var(--body); line-height:1.8; margin-bottom:16px;">
      A podcast distributed only through RSS is <strong>invisible to Google</strong>. The audio lives behind a play button in Apple Podcasts or Spotify &mdash; Google cannot index it.
    </div>
    <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--g); margin-bottom:8px;">Evidence</div>
      <div style="font-size:0.72em; color:var(--body); line-height:1.8;">
        <strong>This American Life</strong> &mdash; 6.68% increase in organic search traffic after adding transcripts<br>
        <strong>80% of listeners</strong> visit a website in response to podcast mentions<br>
        <strong>59% of top 100</strong> business podcasts post transcripts on their websites
      </div>
    </div>
  </div>
  <div style="flex:1;">
    <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--t); margin-bottom:10px;">What works for podcast SEO</div>
      <div style="font-size:0.72em; color:var(--body); line-height:2;">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Full transcripts (largest single multiplier)<br>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> PodcastEpisode JSON-LD on every page<br>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> FAQ schema (captures featured snippets)<br>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> XML sitemap with episode-level entries<br>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Pillar-and-cluster internal linking<br>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> YouTube publishing (most cited in AI Overviews)
      </div>
    </div>
  </div>
</div>

---

### AI Search

# The New Discovery Frontier

<div style="display:flex; gap:20px; margin-top:16px;">
  <div style="flex:1; font-size:0.78em; color:var(--body); line-height:1.8;">
    AI-powered search engines &mdash; ChatGPT, Perplexity, Google AI Overviews &mdash; are rapidly becoming how people discover information. These systems prioritize different signals than traditional search.
  </div>
  <div style="flex:1;">
    <div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:18px;">
      <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:10px;">What AI search engines consume</div>
      <div style="font-size:0.72em; color:var(--body); line-height:2;">
        &bull; Structured data they can parse and cite<br>
        &bull; Content that directly answers questions (FAQ format)<br>
        &bull; Multi-format presence (website + YouTube + social)<br>
        &bull; Brand mentions across authoritative sources
      </div>
    </div>
  </div>
</div>

<div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px; margin-top:16px;">
  <div style="font-size:0.78em; color:var(--body);">
    A podcast website builder that generates <strong>AI-readable structured data by default</strong> &mdash; not as a premium feature &mdash; would be positioned for where search is going, not where it has been. JSON-LD, FAQ schema, and semantic HTML should be <strong>baked into the architecture, not upsold</strong>.
  </div>
</div>

---

<!-- _class: bg-grid -->

### Episode Page Architecture

# What an Episode Page Should Contain

<div style="display:flex; gap:14px; margin-top:12px;">
  <div style="flex:1;">
    <div style="font-size:0.68em; color:var(--body); line-height:2.2;">
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">01</span> Episode header (title, number, date, duration, guest)<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">02</span> Embedded player with chapters & deep-linking<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">03</span> Table of contents with clickable timestamps<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">04</span> Key takeaways (3-7 bullet points)<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">05</span> Full show notes (500-2,000 words)<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">06</span> Guest bio with social links
    </div>
  </div>
  <div style="flex:1;">
    <div style="font-size:0.68em; color:var(--body); line-height:2.2;">
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">07</span> Categorized resources & links<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">08</span> Full transcript (searchable, with speakers)<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">09</span> FAQ section with JSON-LD schema<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">10</span> Newsletter / email signup CTA<br>
      <span style="font-family:'Outfit'; font-weight:600; color:var(--a); margin-right:6px;">11</span> Related episodes (internal linking)
    </div>
  </div>
</div>

<div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px; margin-top:14px;">
  <div style="font-size:0.75em; color:var(--body);">
    <strong>The structural play:</strong> Even without AI-generated content, simply providing the right sections and containers gives podcasters a framework that no current builder offers. Whether content is manually entered, pasted from tools like CastMagic, or AI-generated natively is a product decision. The page architecture is the differentiator.
  </div>
</div>

---

### Structured Data

# JSON-LD That Should Be Automatic

<div style="display:flex; gap:16px; margin-top:14px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">PodcastEpisode</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.8; font-family:monospace;">
      title, datePublished,<br>
      duration, audioUrl,<br>
      episodeNumber,<br>
      partOfSeries reference
    </div>
    <div style="font-size:0.6em; color:var(--label); margin-top:8px;">Every episode page</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">PodcastSeries</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.8; font-family:monospace;">
      name, description,<br>
      webFeed (RSS URL),<br>
      image, author,<br>
      sameAs (platform links)
    </div>
    <div style="font-size:0.6em; color:var(--label); margin-top:8px;">Main podcast page</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">FAQPage</div>
    <div style="font-size:0.65em; color:var(--body); line-height:1.8; font-family:monospace;">
      3-5 questions per episode,<br>
      visible on page (Google req),<br>
      captures featured snippets,<br>
      cited by AI Overviews
    </div>
    <div style="font-size:0.6em; color:var(--label); margin-top:8px;">Any episode with FAQ content</div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.75em; color:var(--body);">
Plus auto-generated <strong>XML sitemap</strong> with episode-level entries, <strong>BreadcrumbList</strong> for navigation, and <strong>Person</strong> schema for host/guest. All of this should be generated from the page structure &mdash; zero manual effort.
</div>

---

<!-- _class: bg-glow -->

### Player Widget

# The Player Gap Nobody Talks About

<div style="display:flex; gap:16px; margin-top:14px;">
  <div style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-bottom:12px;">What top podcasts have (custom-built)</div>
    <div style="font-size:0.72em; color:var(--body); line-height:2.2;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Synchronized transcript display<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Timestamp deep-linking (?t=120)<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Chapter navigation with titles<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Clip sharing for visitors<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg> Speed controls, skip silence, boost voice
    </div>
  </div>
  <div style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.85em; color:var(--t); margin-bottom:12px;">What off-the-shelf players offer</div>
    <div style="font-size:0.72em; color:var(--body); line-height:2.2;">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> No synced transcript (any player)<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg> No clip sharing (any player)<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg> Timestamp: only Beamly + Transistor<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg> Chapters: fragmented, inconsistent<br>
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/></svg> Styling: basic color/size options
    </div>
  </div>
</div>

<div style="margin-top:14px; font-size:0.75em; color:var(--body);">
A builder with a player that has synced transcripts and timestamp deep-linking would <strong>immediately stand out</strong>. This is universally custom-built today &mdash; only the top-tier shows have it.
</div>

---

### Social Media

# The Missing Promotional Workflow

<div style="font-size:0.78em; color:var(--body); margin-top:12px;">
A single episode should produce <strong>15-25 content assets</strong>. Most creators produce 1-3 because the workflow is fragmented.
</div>

<div style="display:flex; align-items:center; gap:8px; margin-top:20px; justify-content:center;">
  <div style="background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 16px; text-align:center; width:140px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--a);">Episode<br>Publishes</div>
  </div>
  <svg width="24" height="16" viewBox="0 0 24 16"><polyline points="0,8 20,8" fill="none" stroke="var(--m)" stroke-width="1.5"/><polyline points="16,4 20,8 16,12" fill="none" stroke="var(--m)" stroke-width="1.5"/></svg>
  <div style="background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 16px; text-align:center; width:140px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--a);">Website<br>Auto-Generates</div>
  </div>
  <svg width="24" height="16" viewBox="0 0 24 16"><polyline points="0,8 20,8" fill="none" stroke="var(--m)" stroke-width="1.5"/><polyline points="16,4 20,8 16,12" fill="none" stroke="var(--m)" stroke-width="1.5"/></svg>
  <div style="background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 16px; text-align:center; width:140px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--a);">Social Content<br>Generated</div>
  </div>
  <svg width="24" height="16" viewBox="0 0 24 16"><polyline points="0,8 20,8" fill="none" stroke="var(--m)" stroke-width="1.5"/><polyline points="16,4 20,8 16,12" fill="none" stroke="var(--m)" stroke-width="1.5"/></svg>
  <div style="background:var(--s); border:1px solid var(--b); border-radius:8px; padding:12px 16px; text-align:center; width:140px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.7em; color:var(--g);">Traffic &rarr;<br>Website</div>
  </div>
</div>

<div style="background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px 18px; margin-top:20px;">
  <div style="font-size:0.75em; color:var(--body);">
    <strong>The critical decision:</strong> social posts should drive traffic to the website, not to Apple Podcasts or Spotify. The website is owned territory. Podcast apps are rented land. Every listener on the website can be captured via newsletter, presented with more content, and monetized.
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### What Converts

# Features Podcasters Will Actually Pay For

<div style="display:flex; gap:16px; margin-top:14px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px; position:relative; overflow:hidden;">
    <div style="position:absolute; top:0; left:0; right:0; height:2px; background:var(--g);"></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--g); margin-bottom:8px;">High Willingness</div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.9;">
      1. Time savings on content creation<br>
      2. SEO & discoverability tools<br>
      3. Monetization infrastructure<br>
      4. Custom domain
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px; position:relative; overflow:hidden;">
    <div style="position:absolute; top:0; left:0; right:0; height:2px; background:var(--y);"></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--y); margin-bottom:8px;">Moderate Willingness</div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.9;">
      5. Analytics & retention data<br>
      6. Email / newsletter integration<br>
      7. Transcript publication
    </div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px; position:relative; overflow:hidden;">
    <div style="position:absolute; top:0; left:0; right:0; height:2px; background:var(--m);"></div>
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--m); margin-bottom:8px;">Low / Don't Gate</div>
    <div style="font-size:0.7em; color:var(--body); line-height:1.9;">
      8. Design templates<br>
      9. Community / comments<br>
      10. Niche integrations
    </div>
  </div>
</div>

<div style="margin-top:16px; font-size:0.75em; color:var(--body);">
<strong>Pricing signal:</strong> Freemium conversion in podcast tools is 2-8%. The <strong>$19-29/month</strong> range is the sweet spot. Custom domain is the #1 free-to-paid conversion driver. Annual billing discount of 30-35% is expected.
</div>

---

### Must-Have Pages

# Essential Podcast Website Structure

<div style="display:flex; gap:14px; margin-top:14px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">Home</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Show description, latest episode player, host intro, subscribe buttons across platforms</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">Episodes</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Searchable archive, filters by topic/guest, individual episode pages with full structure</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">About</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Host bio, show mission, media kit, schema-optimized for AI search engines</div>
  </div>
</div>

<div style="display:flex; gap:14px; margin-top:14px;">
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">Blog</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Articles derived from episodes, high SEO value, pillar content for topic clusters</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">Contact / Guest</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Guest applications, media inquiries, sponsorship info, booking form</div>
  </div>
  <div style="flex:1; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:16px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.8em; color:var(--a); margin-bottom:8px;">Subscribe</div>
    <div style="font-size:0.68em; color:var(--body); line-height:1.7;">Newsletter signup, platform links, RSS feed link, email capture with value prop</div>
  </div>
</div>

---

### Content Tools Landscape

# AI Content Tools Exist &mdash; But Have No Website

<div style="margin-top:12px;">
  <div style="display:flex; padding:10px 16px; border-bottom:1px solid #222; font-size:0.68em;">
    <div style="flex:2; color:var(--m); font-family:'Outfit'; font-weight:600;">Tool</div>
    <div style="flex:1; color:var(--m); font-family:'Outfit'; font-weight:600;">Price</div>
    <div style="flex:3; color:var(--m); font-family:'Outfit'; font-weight:600;">What It Generates</div>
  </div>
  <div style="display:flex; padding:11px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--a);">CastMagic</div>
    <div style="flex:1; color:var(--body);">$19-179/mo</div>
    <div style="flex:3; color:var(--body);">Transcripts, show notes, blog posts, social, newsletters</div>
  </div>
  <div style="display:flex; padding:11px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--a);">Capsho</div>
    <div style="flex:1; color:var(--body);">~$99/mo</div>
    <div style="flex:3; color:var(--body);">20+ marketing assets, graphics, clips, brand voice learning</div>
  </div>
  <div style="display:flex; padding:11px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--a);">Deciphr AI</div>
    <div style="flex:1; color:var(--body);">$5-169/mo</div>
    <div style="flex:3; color:var(--body);">Transcripts, SEO articles, white papers, FAQs, newsletters</div>
  </div>
  <div style="display:flex; padding:11px 16px; border-bottom:1px solid #1a1a1a; font-size:0.72em;">
    <div style="flex:2; color:var(--a);">Swell AI</div>
    <div style="flex:1; color:var(--body);">$8.99/60min</div>
    <div style="flex:3; color:var(--body);">Transcripts, show notes, blog posts, social media</div>
  </div>
  <div style="display:flex; padding:11px 16px; font-size:0.72em;">
    <div style="flex:2; color:var(--a);">Podium</div>
    <div style="flex:1; color:var(--body);">$12-14/mo</div>
    <div style="flex:3; color:var(--body);">Transcripts, show notes, chapters, social posts</div>
  </div>
</div>

<div style="margin-top:14px; font-size:0.75em; color:var(--body);">
These tools produce great content. But podcasters copy-paste it into Podpage or WordPress. <strong>A website builder that integrates with &mdash; or replaces &mdash; these tools closes the loop.</strong>
</div>

---

### Social Promotion Tools

# The Fragmented Social Toolkit

<div style="display:flex; gap:14px; margin-top:14px; flex-wrap:wrap;">
  <div style="flex:1; min-width:170px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Opus Clip</div>
    <div style="font-size:0.62em; color:var(--label);">$15-29/mo</div>
    <div style="font-size:0.68em; color:var(--body); margin-top:6px;">AI viral clip extraction from video podcasts. "Virality score" per clip.</div>
  </div>
  <div style="flex:1; min-width:170px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Headliner</div>
    <div style="font-size:0.62em; color:var(--label);">$0-26/mo</div>
    <div style="font-size:0.68em; color:var(--body); margin-top:6px;">Audiograms and video clips. Free for educators and nonprofits.</div>
  </div>
  <div style="flex:1; min-width:170px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Repurpose.io</div>
    <div style="font-size:0.62em; color:var(--label);">$35-179/mo</div>
    <div style="font-size:0.68em; color:var(--body); margin-top:6px;">Cross-platform distribution. Connects RSS to social channels.</div>
  </div>
  <div style="flex:1; min-width:170px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Capsho</div>
    <div style="font-size:0.62em; color:var(--label);">~$99/mo</div>
    <div style="font-size:0.68em; color:var(--body); margin-top:6px;">Written social copy, newsletters, blog posts. Closest to "agency in a box."</div>
  </div>
  <div style="flex:1; min-width:170px; background:var(--s); border:1px solid var(--b); border-radius:10px; padding:14px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.78em; color:var(--t);">Descript</div>
    <div style="font-size:0.62em; color:var(--label);">$0-24/mo</div>
    <div style="font-size:0.68em; color:var(--body); margin-top:6px;">Text-based editing + clip generation + blog/social content from episodes.</div>
  </div>
</div>

<div style="margin-top:14px; font-size:0.75em; color:var(--body);">
Podcasters spend <strong>2-3 hours per episode</strong> on social promotion. No single tool handles the full lifecycle. The <strong>"agency in a box" for podcasters does not exist yet.</strong>
</div>

---

<!-- _class: bg-hero -->

### The Opportunity

# What's Missing From the Market

<div style="display:flex; gap:20px; margin-top:20px;">
  <div style="flex:1; background:rgba(17,17,17,0.8); border:1px solid #222; border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.9em; color:var(--a); margin-bottom:10px;">Structure</div>
    <div style="font-size:0.75em; color:var(--body); line-height:1.8;">
      No builder provides the right page architecture &mdash; sections for long-form show notes, transcripts, FAQs, resources, guest bios. The structure alone is the differentiator.
    </div>
  </div>
  <div style="flex:1; background:rgba(17,17,17,0.8); border:1px solid #222; border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.9em; color:var(--a); margin-bottom:10px;">SEO by Default</div>
    <div style="font-size:0.75em; color:var(--body); line-height:1.8;">
      JSON-LD, FAQ schema, XML sitemaps, and semantic HTML should be baked into the architecture. Not an upsell. Not a premium feature. Just how it works.
    </div>
  </div>
  <div style="flex:1; background:rgba(17,17,17,0.8); border:1px solid #222; border-radius:10px; padding:20px;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:0.9em; color:var(--a); margin-bottom:10px;">Integration</div>
    <div style="font-size:0.75em; color:var(--body); line-height:1.8;">
      The content tools exist. The social tools exist. Nobody has connected them to the website. Episode &rarr; website &rarr; social &rarr; traffic back to website.
    </div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Sources

# Market Data & Research

<div style="display:flex; gap:16px; margin-top:14px;">
  <div style="flex:1; font-size:0.65em; color:var(--body); line-height:2;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:1.1em; color:var(--t); margin-bottom:6px;">Industry Data</div>
    &bull; Independent podcaster survey (558 creators)<br>
    &bull; Global podcast market sizing (2025-2026)<br>
    &bull; Podcast advertising market reports<br>
    &bull; AI in podcasting market analysis<br>
    &bull; Apple Podcasts RSS feed specifications
  </div>
  <div style="flex:1; font-size:0.65em; color:var(--body); line-height:2;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:1.1em; color:var(--t); margin-bottom:6px;">Platform Research</div>
    &bull; Podpage, Beamly, OnPodium, ZipiStream pricing<br>
    &bull; Transistor, Captivate, Buzzsprout, Podbean, Libsyn, Castos<br>
    &bull; CastMagic, Capsho, Deciphr AI, Swell AI, Podium<br>
    &bull; Opus Clip, Headliner, Repurpose.io, Descript, Riverside
  </div>
  <div style="flex:1; font-size:0.65em; color:var(--body); line-height:2;">
    <div style="font-family:'Outfit'; font-weight:600; font-size:1.1em; color:var(--t); margin-bottom:6px;">SEO & Content</div>
    &bull; This American Life transcription study<br>
    &bull; Schema.org PodcastEpisode/Series specs<br>
    &bull; Tim Ferriss, Lex Fridman, Huberman Lab site analysis<br>
    &bull; Google AI Overviews citation patterns<br>
    &bull; Podcasting 2.0 namespace standards
  </div>
</div>

<div style="margin-top:20px; text-align:center; font-size:0.7em; color:var(--label);">
Research conducted April 2026 &middot; Polymash
</div>

---

<!-- _class: bg-hero -->
<!-- _paginate: false -->

<div style="text-align:center;">

# Thank You

## Questions, thoughts, feedback welcome

<div style="margin-top:40px; font-size:0.8em; color:var(--m);">
Juergen Berkessel &middot; Polymash<br>
<span style="color:var(--a);">juergen@polymash.com</span>
</div>

</div>
