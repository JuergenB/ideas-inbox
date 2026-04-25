---
marp: true
theme: default
paginate: true
html: true
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

  section.bg-glow { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.20) 100%), radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.14) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.22) 100%); }
  section.bg-glow-green { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(34,197,94,0.18) 100%), radial-gradient(ellipse at 100% 0%, rgba(34,197,94,0.12) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.18) 100%); }
  section.bg-dots { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,153,254,0.14) 100%), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.14) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(1,153,254,0.25) 100%); }

  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; display: inline-block; }
  .row:hover { background: #161616; } .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

### Discussion Paper

# Artist Directory
## Should We Build It? What Should It Look Like?

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: #ffffff44; margin-top: 24px;">Juergen & Scott · April 2026</div>

<div style="display: flex; gap: 8px; margin-top: 16px;">
  <span style="background: #0199fe15; border: 1px solid #0199fe33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.5em; color: #0199feaa; font-weight: 400;">5 Research Investigations</span>
  <span style="background: #0199fe15; border: 1px solid #0199fe33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.5em; color: #0199feaa; font-weight: 400;">200+ Citations</span>
  <span style="background: #0199fe15; border: 1px solid #0199fe33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.5em; color: #0199feaa; font-weight: 400;">Idea 001</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The Original Proposal

# Scott's Pitch

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px 24px; margin-top: 12px; border-left: 3px solid var(--a);">
  <div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.78em; color: var(--body); line-height: 1.7; font-style: italic;">
    "Create a private, exclusive, curated online artist gallery/directory powered by our database featuring 1000+ artists anyone can view, discover and connect with artists for a nominal fee."
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 20px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">SUBSCRIBERS</div>
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--t); line-height: 1;">1,000</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">@ $25/mo ($250/yr)</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">ARTISTS</div>
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--t); line-height: 1;">1,000</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">@ $10/mo ($100/yr)</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">PROJECTED REVENUE</div>
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--y); line-height: 1;">$350K</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">annual target</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.72em; color: var(--label);">
  <strong>The data asset:</strong> 1,000+ artists and 8,000+ artworks with AI-enriched profiles, classifications, tags, and dimensions
</div>

---

<!-- _class: bg-dots -->

### Research Approach

# How We Investigated This

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2em; font-weight: 700; color: var(--blue); line-height: 1;">5</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">parallel deep-research<br>investigations</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2em; font-weight: 700; color: var(--blue); line-height: 1;">200+</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">web citations<br>analyzed</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2em; font-weight: 700; color: var(--blue); line-height: 1;">15+</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">art platforms and<br>competitors benchmarked</div>
  </div>
</div>

<div style="margin-top: 20px; font-size: 0.72em; color: var(--body); line-height: 1.8;">

**Investigation 1** — Market viability: do paid artist directories work?
**Investigation 2** — Freemium models: what to show, what to gate
**Investigation 3** — Market validation: how to test before building
**Investigation 4** — Artist value proposition: what artists actually need
**Investigation 5** — B2B opportunity: who would pay real money?

</div>

---

<!-- _class: bg-glow -->

### Executive Summary

# Five Key Findings

<div style="margin-top: 8px;">
  <div class="row" style="display: flex; align-items: flex-start; padding: 10px 8px; border-bottom: 1px solid #1a1a1a; gap: 12px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--a); min-width: 24px;">1</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.5;"><span style="color: var(--t); font-weight: 600;">Scott's specific revenue model faces strong headwinds.</span> No successful art platform charges consumers to browse. At 1,000 artists, the database is too small to justify a subscription.</div>
  </div>
  <div class="row" style="display: flex; align-items: flex-start; padding: 10px 8px; border-bottom: 1px solid #1a1a1a; gap: 12px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--a); min-width: 24px;">2</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.5;"><span style="color: var(--t); font-weight: 600;">The underlying idea has real merit — with a different structure.</span> Freemium with gated connection features aligns with every successful platform's approach.</div>
  </div>
  <div class="row" style="display: flex; align-items: flex-start; padding: 10px 8px; border-bottom: 1px solid #1a1a1a; gap: 12px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--g); min-width: 24px;">3</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.5;"><span style="color: var(--t); font-weight: 600;">The strongest revenue opportunity is B2B.</span> Interior designers and art consultants would pay $300-500/month. Real budgets, real pain points.</div>
  </div>
  <div class="row" style="display: flex; align-items: flex-start; padding: 10px 8px; border-bottom: 1px solid #1a1a1a; gap: 12px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--g); min-width: 24px;">4</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.5;"><span style="color: var(--t); font-weight: 600;">Exhibition auto-matching is a greenfield opportunity.</span> No platform does AI-powered matching of artists to open calls. The enriched data already exists for this.</div>
  </div>
  <div class="row" style="display: flex; align-items: flex-start; padding: 10px 8px; gap: 12px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--y); min-width: 24px;">5</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.5;"><span style="color: var(--t); font-weight: 600;">Even if revenue never materializes, it's a lead generation engine</span> — driving submissions, segmented contacts, grant applications, and ecosystem growth.</div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### Market Reality

# Browsing Is Free

## Every major art platform offers free discovery

<div style="margin-top: 8px;">
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #1a1a1a; font-size: 0.62em;">
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Platform</div>
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Who Pays</div>
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Pricing</div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Browse</div>
  </div>
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #111; font-size: 0.68em;">
    <div style="flex: 2; color: var(--t);">Artsy</div>
    <div style="flex: 2; color: var(--body);">Galleries: $200-3K+/mo</div>
    <div style="flex: 2; color: var(--body);">Subscriptions + commissions</div>
    <div style="flex: 1.5;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Free</span></div>
  </div>
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #111; font-size: 0.68em;">
    <div style="flex: 2; color: var(--t);">Saatchi Art</div>
    <div style="flex: 2; color: var(--body);">Artists: 40% commission</div>
    <div style="flex: 2; color: var(--body);">Pure commission</div>
    <div style="flex: 1.5;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Free</span></div>
  </div>
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #111; font-size: 0.68em;">
    <div style="flex: 2; color: var(--t);">Singulart</div>
    <div style="flex: 2; color: var(--body);">Artists: 45-50% commission</div>
    <div style="flex: 2; color: var(--body);">Commission + tiers</div>
    <div style="flex: 1.5;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Free</span></div>
  </div>
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #111; font-size: 0.68em;">
    <div style="flex: 2; color: var(--t);">Artnet</div>
    <div style="flex: 2; color: var(--body);">Data subscribers: ~$29+/mo</div>
    <div style="flex: 2; color: var(--body);">Data + advertising</div>
    <div style="flex: 1.5;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Free</span></div>
  </div>
  <div style="display: flex; padding: 8px 0; font-size: 0.68em;">
    <div style="flex: 2; color: var(--t);">Artwork Archive</div>
    <div style="flex: 2; color: var(--body);">Artists: $6-139/mo</div>
    <div style="flex: 2; color: var(--body);">SaaS for artists</div>
    <div style="flex: 1.5;"><span class="tag" style="background: #ef444412; color: var(--r); border: 1px solid #ef444422;">None</span></div>
  </div>
</div>

<div style="margin-top: 12px; font-size: 0.68em; color: var(--label); line-height: 1.6;">
  <strong>What IS paywalled successfully:</strong> market data and analytics (Artnet, ArtFacts) — intelligence <em>about</em> art, not access to <em>view</em> art. Beowolff Capital acquired Artnet for ~$73.7M and took a controlling stake in Artsy in 2025 — consolidation is around <strong>data + marketplace</strong>, not directories.
</div>

---

<!-- _class: bg-glow-orange -->

### Revenue Pathways

# Different Roads to $350K

<div style="margin-top: 16px;">
  <div style="display: flex; padding: 10px 0; border-bottom: 1px solid #1a1a1a; font-size: 0.62em;">
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Scenario</div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Year 1</div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Year 2</div>
    <div style="flex: 2.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Assumptions</div>
  </div>
  <div class="row" style="display: flex; padding: 10px 0; border-bottom: 1px solid #111; font-size: 0.7em;">
    <div style="flex: 2; color: var(--y); font-family: 'Outfit'; font-weight: 600;">Scott's Original Model</div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 700;">$350K</div>
    <div style="flex: 1.5; color: var(--t);">$350K+</div>
    <div style="flex: 2.5; color: var(--body); font-size: 0.9em;">1,000 subs + 1,000 artists</div>
  </div>
  <div class="row" style="display: flex; padding: 10px 0; border-bottom: 1px solid #111; font-size: 0.7em;">
    <div style="flex: 2; color: var(--g); font-family: 'Outfit'; font-weight: 600;">Optimistic Freemium</div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 700;">$50-80K</div>
    <div style="flex: 1.5; color: var(--t);">$200-300K</div>
    <div style="flex: 2.5; color: var(--body); font-size: 0.9em;">B2B + artist pro, aggressive growth</div>
  </div>
  <div class="row" style="display: flex; padding: 10px 0; border-bottom: 1px solid #111; font-size: 0.7em;">
    <div style="flex: 2; color: var(--blue); font-family: 'Outfit'; font-weight: 600;">Realistic Freemium</div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 700;">$18-40K</div>
    <div style="flex: 1.5; color: var(--t);">$80-150K</div>
    <div style="flex: 2.5; color: var(--body); font-size: 0.9em;">Modest conversion, organic growth</div>
  </div>
  <div class="row" style="display: flex; padding: 10px 0; font-size: 0.7em;">
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Lead Gen Only</div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 700;">$0</div>
    <div style="flex: 1.5; color: var(--m);">$0</div>
    <div style="flex: 2.5; color: var(--body); font-size: 0.9em;">Value via submissions, grants, partners</div>
  </div>
</div>

<div style="margin-top: 16px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; border-left: 3px solid var(--g);">
  <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">
    <strong>The opportunity:</strong> $350K is achievable — the research points to B2B channels, exhibition matching, and curated positioning as faster paths than consumer subscriptions alone. The rest of this deck explores how we might get there by playing to our unique strengths.
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### The Model That Works

# Gate Connection, Not Content

## Show the art freely. Charge for contact and tools.

<div style="margin-top: 8px;">
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #1a1a1a; font-size: 0.58em;">
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Tier</div>
    <div style="flex: 1; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Price</div>
    <div style="flex: 3; color: var(--m); font-family: 'Outfit'; font-weight: 600;">What's Included</div>
  </div>
  <div style="display: flex; padding: 7px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 2; color: var(--t); font-family: 'Outfit'; font-weight: 600;">Public Browse</div>
    <div style="flex: 1; color: var(--g);">Free</div>
    <div style="flex: 3; color: var(--body);">All artworks, basic search, artist names, truncated bios</div>
  </div>
  <div style="display: flex; padding: 7px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 2; color: var(--t); font-family: 'Outfit'; font-weight: 600;">Free Account</div>
    <div style="flex: 1; color: var(--g);">Free (email)</div>
    <div style="flex: 3; color: var(--body);">5 wishlists, follow 20 artists, full bios</div>
  </div>
  <div style="display: flex; padding: 7px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 2; color: var(--a); font-family: 'Outfit'; font-weight: 600;">Collector Premium</div>
    <div style="flex: 1; color: var(--t);">$9.99/mo</div>
    <div style="flex: 3; color: var(--body);">Direct messaging, unlimited saves, price alerts, advanced filters</div>
  </div>
  <div style="display: flex; padding: 7px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 2; color: var(--t); font-family: 'Outfit'; font-weight: 600;">Artist Free</div>
    <div style="flex: 1; color: var(--g);">Free</div>
    <div style="flex: 3; color: var(--body);">Profile + uploads, basic analytics, receive inquiries</div>
  </div>
  <div style="display: flex; padding: 7px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 2; color: var(--a); font-family: 'Outfit'; font-weight: 600;">Artist Pro</div>
    <div style="flex: 1; color: var(--t);">$19.99/mo</div>
    <div style="flex: 3; color: var(--body);">Exhibition matching, lead CRM, advanced analytics, SEO</div>
  </div>
  <div style="display: flex; padding: 7px 0; font-size: 0.66em;">
    <div style="flex: 2; color: var(--y); font-family: 'Outfit'; font-weight: 600;">Institutional</div>
    <div style="flex: 1; color: var(--t);">$299/mo</div>
    <div style="flex: 3; color: var(--body);">Database access, bulk search, API, multi-user</div>
  </div>
</div>

<div style="margin-top: 12px; font-size: 0.68em; color: var(--label);">
  <strong>Key insight:</strong> Direct messaging/artist contact is the #1 conversion driver — 50-65% of paying users cite it as primary reason to subscribe.
</div>

---

<!-- _class: bg-glow-orange -->

### Artist Economics

# What Artists Actually Spend

## $30-100/month fragmented across 4+ tools

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">PORTFOLIO HOSTING</div>
    <div style="font-family: 'Outfit'; font-size: 1.4em; font-weight: 700; color: var(--t); line-height: 1;">$8-26</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 4px;">Format, Cargo, Squarespace</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">SUBMISSIONS</div>
    <div style="font-family: 'Outfit'; font-size: 1.4em; font-weight: 700; color: var(--t); line-height: 1;">$17-42</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 4px;">CaFE, Submittable fees</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">SOCIAL MEDIA</div>
    <div style="font-family: 'Outfit'; font-size: 1.4em; font-weight: 700; color: var(--t); line-height: 1;">$5-43</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 4px;">Buffer, Later, freelancers</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--blue), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">INVENTORY</div>
    <div style="font-family: 'Outfit'; font-size: 1.4em; font-weight: 700; color: var(--t); line-height: 1;">$9-42</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 4px;">Artwork Archive</div>
  </div>
</div>

<div style="margin-top: 20px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px;">
  <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">
    <strong>The consolidation opportunity:</strong> Artists pay $200-500+/year on submission fees alone — with zero matching intelligence. 40% feel unconfident in self-promotion. A platform that consolidates discovery, analytics, and exhibition matching replaces multiple tools.
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### Positioning

# Curated, Not Commodified

## This is the opposite of mass-market art

<div style="display: flex; gap: 2px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border-radius: 10px 0 0 10px; padding: 18px; border-top: 3px solid var(--r);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--r); margin-bottom: 8px;">Mass Market</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.6;">
      Society6, Redbubble, Fine Art America — $12.96B market, projected $103B by 2034. Decor-driven, trend-driven, seasonally replaced. No artist relationship. No story.
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border-radius: 0 10px 10px 0; padding: 18px; border-top: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--g); margin-bottom: 8px;">What We're Building</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.6;">
      1,000-2,000 vetted, real artists with AI-enriched profiles. Conversation pieces, not filler. Local artists designers can visit, commission, and build relationships with.
    </div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--blue); line-height: 1;">95%</div>
    <div style="font-size: 0.55em; color: var(--body); margin-top: 4px;">of Gen Z collectors cite<br>emotional connection as<br>primary purchase motivation</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--blue); line-height: 1;">60%</div>
    <div style="font-size: 0.55em; color: var(--body); margin-top: 4px;">specifically want to<br>support underrepresented<br>voices</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--blue); line-height: 1;">63%</div>
    <div style="font-size: 0.55em; color: var(--body); margin-top: 4px;">of collectors bought<br>directly from artists<br>in 2024-25 (2x from 2022)</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.6em; font-weight: 700; color: var(--blue); line-height: 1;">180K</div>
    <div style="font-size: 0.55em; color: var(--body); margin-top: 4px;">US interior designers<br>served by only ~5,000<br>galleries</div>
  </div>
</div>

<div style="margin-top: 12px; font-size: 0.65em; color: var(--label); line-height: 1.5;">
  <strong>The small database is the feature, not the bug.</strong> 1,000 curated artists signals quality. Arterial's DNA — Not Real Art, Arthouse TV, Artsville, Sugar Press — already embodies supporting real, local, underrepresented artists. This is not a pivot; it's who we are.
</div>

---

<!-- _class: bg-glow-green -->

### The Real Opportunity

# B2B: Interior Designers & Art Consultants

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">WILLINGNESS TO PAY</div>
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--g); line-height: 1;">$300-500</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">per month</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">GLOBAL MARKET</div>
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--t); line-height: 1;">$128B</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">interior design services</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 8px;">US DESIGN FIRMS</div>
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--t); line-height: 1;">10-15K</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">with sufficient scale</div>
  </div>
</div>

<div style="margin-top: 16px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; border-left: 3px solid var(--r);">
  <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="1.5" style="vertical-align: middle;"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
    <strong>The pain point:</strong> When a designer needs 12 paintings at 36"x48" with specific color palettes for a hotel corridor, they spend <strong>20-30 hours manually browsing</strong> with no multi-dimensional filtering. Our data has exactly what they need: dimensions, medium, subject, tags — searchable attributes no other emerging-artist platform offers.
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### B2B Segments

# Ranked by Fit and Revenue Potential

<div style="margin-top: 12px;">
  <div style="display: flex; padding: 8px 0; border-bottom: 1px solid #1a1a1a; font-size: 0.58em;">
    <div style="flex: 0.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">#</div>
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Segment</div>
    <div style="flex: 2; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Pain Point</div>
    <div style="flex: 1; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Asset Fit</div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">Annual Rev</div>
  </div>
  <div class="row" style="display: flex; padding: 9px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 0.5; color: var(--g); font-family: 'Outfit'; font-weight: 700;">1</div>
    <div style="flex: 2; color: var(--t);">Interior designers + consultants</div>
    <div style="flex: 2; color: var(--body);">Manual sourcing is painful</div>
    <div style="flex: 1;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Strong</span></div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 600;">$150-350K</div>
  </div>
  <div class="row" style="display: flex; padding: 9px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 0.5; color: var(--t); font-family: 'Outfit'; font-weight: 700;">2</div>
    <div style="flex: 2; color: var(--t);">Small-to-mid galleries</div>
    <div style="flex: 2; color: var(--body);">Oversupply, not undersupply</div>
    <div style="flex: 1;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Strong</span></div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 600;">$80-200K</div>
  </div>
  <div class="row" style="display: flex; padding: 9px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 0.5; color: var(--t); font-family: 'Outfit'; font-weight: 700;">3</div>
    <div style="flex: 2; color: var(--t);">Independent curators</div>
    <div style="flex: 2; color: var(--body);">Finding artists for themed shows</div>
    <div style="flex: 1;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Strong</span></div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 600;">$40-100K</div>
  </div>
  <div class="row" style="display: flex; padding: 9px 0; border-bottom: 1px solid #111; font-size: 0.66em;">
    <div style="flex: 0.5; color: var(--m); font-family: 'Outfit'; font-weight: 700;">4</div>
    <div style="flex: 2; color: var(--t);">Corporate art programs</div>
    <div style="flex: 2; color: var(--body);">Buy through intermediaries</div>
    <div style="flex: 1;"><span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">Medium</span></div>
    <div style="flex: 1.5; color: var(--t); font-family: 'Outfit'; font-weight: 600;">$45-100K</div>
  </div>
  <div class="row" style="display: flex; padding: 9px 0; font-size: 0.66em;">
    <div style="flex: 0.5; color: var(--m); font-family: 'Outfit'; font-weight: 700;">5</div>
    <div style="flex: 2; color: var(--t);">Arts education</div>
    <div style="flex: 2; color: var(--body);">Rigid budgets, long cycles</div>
    <div style="flex: 1;"><span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Strong</span></div>
    <div style="flex: 1.5; color: var(--m); font-family: 'Outfit'; font-weight: 600;">$100-300K (3+ yr)</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### Competitive Positioning

# What Nobody Else Combines

<div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 20px;">
  <div style="flex: 1; min-width: 280px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5" style="flex-shrink: 0; margin-top: 2px;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--t);">AI-Enriched Discovery</div>
      <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">Not just portfolio dumps — AI-researched profiles, validated citations, classified artworks</div>
    </div>
  </div>
  <div style="flex: 1; min-width: 280px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5" style="flex-shrink: 0; margin-top: 2px;"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--t);">Multi-Dimensional Search</div>
      <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">Dimensions, medium, subject, tags, color — visual attributes no other emerging-artist platform offers</div>
    </div>
  </div>
  <div style="flex: 1; min-width: 280px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5" style="flex-shrink: 0; margin-top: 2px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--t);">Emerging/Mid-Career Focus</div>
      <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">Existing platforms skew established. This serves the underserved middle of the market.</div>
    </div>
  </div>
  <div style="flex: 1; min-width: 280px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; display: flex; align-items: flex-start; gap: 12px;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="1.5" style="flex-shrink: 0; margin-top: 2px;"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--t);">501(c)(3) Trust Factor</div>
      <div style="font-size: 0.65em; color: var(--body); margin-top: 4px;">Grant eligibility, tax advantages, "built to serve artists, not extract from them"</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### The Floor Case

# Even If Nobody Pays

## The platform has substantial value as a lead generation engine

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Exhibition Submissions</span>
    </div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">Every browser who sees "Submit to our next exhibition" is a warm lead for NRA, Artsville, and partners</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Segmented Contacts</span>
    </div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">Artist vs. curator vs. collector — transforms an undifferentiated list into a multi-purpose asset</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 8px;">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Grant Leverage</span>
    </div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">5,000+ users strengthens every NEA, Knight Foundation, and Bloomberg application</div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 10px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 4px;">B2B ARTS CPL</div>
    <div style="font-family: 'Outfit'; font-size: 1.2em; font-weight: 700; color: var(--t);">$300-500 <span style="font-size: 0.5em; color: var(--label); font-weight: 400;">per lead</span></div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 4px;">SEGMENTED LIST VALUE</div>
    <div style="font-family: 'Outfit'; font-size: 1.2em; font-weight: 700; color: var(--t);">$2-5K <span style="font-size: 0.5em; color: var(--label); font-weight: 400;">per year</span></div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 4px;">GRANT APPLICATION LIFT</div>
    <div style="font-family: 'Outfit'; font-size: 1.2em; font-weight: 700; color: var(--g);">$10-100K <span style="font-size: 0.5em; color: var(--label); font-weight: 400;">NEA alone</span></div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Growth Milestones

# What Success Looks Like

<div style="margin-top: 16px; position: relative; padding-left: 24px;">
  <div style="position: absolute; left: 7px; top: 6px; bottom: 6px; width: 2px; background: linear-gradient(180deg, var(--blue), var(--g));"></div>

  <div style="position: relative; margin-bottom: 20px; padding-left: 20px;">
    <div style="position: absolute; left: -20px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--blue); border: 2px solid #0c0c0c;"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.85em; color: var(--blue);">Month 3</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 4px; line-height: 1.5;">500+ registered users · clear segment breakdown · engagement data to prioritize features</div>
  </div>

  <div style="position: relative; margin-bottom: 20px; padding-left: 20px;">
    <div style="position: absolute; left: -20px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--a); border: 2px solid #0c0c0c;"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.85em; color: var(--a);">Month 6</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 4px; line-height: 1.5;">50+ paying users across tiers · 2-3 institutional/B2B customers · measurable lift in exhibition submissions</div>
  </div>

  <div style="position: relative; margin-bottom: 20px; padding-left: 20px;">
    <div style="position: absolute; left: -20px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--y); border: 2px solid #0c0c0c;"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.85em; color: var(--y);">Month 12</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 4px; line-height: 1.5;">200+ paying users · $3-5K MRR · 2,000+ registered users · at least one grant citing platform data</div>
  </div>

  <div style="position: relative; padding-left: 20px;">
    <div style="position: absolute; left: -20px; top: 4px; width: 12px; height: 12px; border-radius: 50%; background: var(--g); border: 2px solid #0c0c0c;"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.85em; color: var(--g);">Month 18+</div>
    <div style="font-size: 0.7em; color: var(--body); margin-top: 4px; line-height: 1.5;">$8-15K MRR · 5,000+ registered users · B2B pipeline generating $50K+ ARR</div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### Opportunities Beyond Discovery

# Exhibition Auto-Matching

## The headline feature nobody else offers

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2.2em; font-weight: 700; color: var(--g); line-height: 1;">0</div>
    <div style="font-size: 0.6em; color: var(--body); margin-top: 6px;">platforms that do<br>AI-powered open call matching</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2.2em; font-weight: 700; color: var(--a); line-height: 1;">75%</div>
    <div style="font-size: 0.6em; color: var(--body); margin-top: 6px;">acceptance rate for<br>early submitters (vs. 60% late)</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 2.2em; font-weight: 700; color: var(--y); line-height: 1;">58→79%</div>
    <div style="font-size: 0.6em; color: var(--body); margin-top: 6px;">acceptance rate for<br>repeat submitters (4-10 subs)</div>
  </div>
</div>

<div style="margin-top: 16px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
  <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-bottom: 8px;">How It Works (B2C)</div>
  <div style="font-size: 0.68em; color: var(--body); line-height: 1.7;">
    AI matches artist profiles to open calls based on <strong>medium, style, tags, location, career stage</strong>. The enriched data already exists in the system. Artists currently spend $200-500+/year on submission fees with zero matching intelligence — CaFE and Submittable host calls but don't match. This feature alone justifies Artist Pro at $15-20/mo.
  </div>
</div>

<div style="margin-top: 10px; font-size: 0.65em; color: var(--label);">
  Average artist spends 3-10 hours/year on repetitive submission data entry. Auto-matching eliminates this entirely.
</div>

---

<!-- _class: bg-glow -->

### The Data Gap

# Why Matching Needs Interviews

## Public research can't capture what matters most for matching

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; border-top: 2px solid var(--m);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--m); margin-bottom: 8px;">What We Have Today</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em; margin-bottom: 6px;">FROM PUBLIC RESEARCH (PERPLEXITY)</div>
    <div style="font-size: 0.64em; color: var(--body); line-height: 1.6;">
      Bio, exhibition history, medium, style, education, gallery representation, social media presence, press mentions
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; border-top: 2px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--g); margin-bottom: 8px;">What Matching Actually Needs</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em; margin-bottom: 6px;">FROM CONVERSATIONAL AI INTERVIEW</div>
    <div style="font-size: 0.64em; color: var(--body); line-height: 1.6;">
      Venue preferences, shipping willingness, submission fee budget, geographic constraints, career ambitions, preferred exhibition scale, medium they <em>want</em> to be known for
    </div>
  </div>
</div>

<div style="margin-top: 14px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; border-left: 3px solid var(--a);">
  <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">
    <strong>The key insight:</strong> The AI interview isn't just a nicer onboarding experience — it's <strong>critical infrastructure for the matching engine</strong>. Preference data, intent data, and constraint data can't be scraped from the web. A 10-15 minute conversation during onboarding captures what no competitor can replicate with public research alone. This is the data moat.
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### The B2B Play

# Open Call Matching for Galleries

## Not just artists — galleries and organizations as clients

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--a); line-height: 1;">8-12K</div>
    <div style="font-size: 0.58em; color: var(--body); margin-top: 4px;">active open calls<br>globally at any time</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--g); line-height: 1;">5,700+</div>
    <div style="font-size: 0.58em; color: var(--body); margin-top: 4px;">call listings on CaFE<br>alone annually</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <div style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--r); line-height: 1;">0</div>
    <div style="font-size: 0.58em; color: var(--body); margin-top: 4px;">competitors offering<br>roster-based matching</div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 10px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; border-top: 2px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--g); margin-bottom: 6px;">Gallery Subscription</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
      Gallery uploads roster of 20-50 artists. Platform scans 10,000+ calls and surfaces matches by medium, style, geography, career stage. Gallery offers this as a <strong>value-added service</strong> to their artists.
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; border-top: 2px solid var(--y);">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--y); margin-bottom: 6px;">Arts Orgs & Collectives</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
      Arts councils (200-2,000 members), cooperatives, university art departments, nonprofit galleries. Matching as a <strong>member benefit</strong> across local → regional → national → international.
    </div>
  </div>
</div>

<div style="margin-top: 10px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 12px 18px;">
  <div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">
    <strong>No one connects these two sides.</strong> CaFE, Submittable, ArtCall = submission infrastructure. ArtLogic, ARTERNAL = gallery CRM. Neither bridges the gap. Pricing: $99-299/mo per gallery. 500 subscribers at $149/mo avg = <strong>$894K ARR</strong>. Adjacent: ArtLogic charges $409-$1,690/mo for gallery CRM alone.
  </div>
</div>

---

<!-- _class: bg-glow -->

### AI-Powered Interviews

# Conversational AI as Platform Infrastructure

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">COMPLETION RATE</div>
    <div style="display: flex; align-items: baseline; gap: 6px;">
      <span style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--g); line-height: 1;">70-90%</span>
      <span style="font-size: 0.6em; color: var(--label);">AI interview</span>
    </div>
    <div style="display: flex; align-items: baseline; gap: 6px; margin-top: 4px;">
      <span style="font-family: 'Outfit'; font-size: 1.1em; font-weight: 700; color: var(--r); line-height: 1;">10-30%</span>
      <span style="font-size: 0.6em; color: var(--label);">traditional form</span>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">RESPONSE DEPTH</div>
    <div style="display: flex; align-items: baseline; gap: 6px;">
      <span style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--a); line-height: 1;">2.5-8x</span>
      <span style="font-size: 0.6em; color: var(--label);">longer than forms</span>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-bottom: 6px;">COST PER INTERVIEW</div>
    <div style="display: flex; align-items: baseline; gap: 6px;">
      <span style="font-family: 'Outfit'; font-size: 1.8em; font-weight: 700; color: var(--t); line-height: 1;">$1-1.50</span>
      <span style="font-size: 0.6em; color: var(--label);">via Retell.ai</span>
    </div>
  </div>
</div>

<div style="margin-top: 14px; font-size: 0.68em; color: var(--body); line-height: 1.7;">

**Use cases across the platform:**
**Artist onboarding** — 10-15 min audio interview replaces forms, captures artistic philosophy, influences, career stage, exhibition goals. AI summarizes into structured Supabase fields.
**Pricing validation** — Conversational Van Westendorp study yields more honest responses than surveys.
**B2B qualification** — AI pre-filters high-value design/consultant prospects before human engagement.
**Collector engagement** — Preference discovery via dialogue, not checkboxes.

</div>

---

<!-- _class: bg-glow -->

### Phased Rollout

# AI Interview Implementation Path

<div style="margin-top: 16px;">
  <div style="display: flex; gap: 2px;">
    <div style="flex: 1; background: var(--s); border-radius: 10px 0 0 10px; padding: 16px; border-top: 3px solid var(--blue);">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--blue); margin-bottom: 6px;">Phase 1</div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.08em; margin-bottom: 8px;">WEEKS 1-6 · $200-500</div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        TheySaid or User Intuition for pricing study + smoke test interviews
      </div>
    </div>
    <div style="flex: 1; background: var(--s); padding: 16px; border-top: 3px solid var(--a);">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--a); margin-bottom: 6px;">Phase 2</div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.08em; margin-bottom: 8px;">MONTHS 3-6 · $5-10K</div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        Custom Retell.ai / Vapi.ai build for artist onboarding interviews
      </div>
    </div>
    <div style="flex: 1; background: var(--s); padding: 16px; border-top: 3px solid var(--y);">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--y); margin-bottom: 6px;">Phase 3</div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.08em; margin-bottom: 8px;">MONTHS 6-12</div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        B2B qualification interviews with Ribbon AI
      </div>
    </div>
    <div style="flex: 1; background: var(--s); border-radius: 0 10px 10px 0; padding: 16px; border-top: 3px solid var(--g);">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--g); margin-bottom: 6px;">Phase 4</div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.08em; margin-bottom: 8px;">YEAR 2+</div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        Hume AI emotional analysis layer for deeper artist profiling
      </div>
    </div>
  </div>
</div>

<div style="margin-top: 16px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; border-left: 3px solid var(--a);">
  <div style="font-size: 0.7em; color: var(--body); line-height: 1.6;">
    <strong>Key insight:</strong> AI interviews aren't a separate product — they improve activities the platform already needs to do. The 90-day experiment calls for onboarding questions, a Van Westendorp survey, and 15-20 qualitative interviews. Conversational AI delivers higher quality at lower effort and cost for all three.
  </div>
</div>

---

<!-- _class: bg-grid -->

### Validation Strategy

# The $600 Smoke Test

## Test before you build. 2-3 weeks.

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; border-top: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.4em; color: var(--g); line-height: 1;">8-12%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">CTR</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px; line-height: 1.4;">Strong product-market fit. Build the paid version.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; border-top: 3px solid var(--y);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.4em; color: var(--y); line-height: 1;">2-8%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">CTR</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px; line-height: 1.4;">Proceed with caution. May work with iteration.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; border-top: 3px solid var(--r);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.4em; color: var(--r); line-height: 1;"><2%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">CTR</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 8px; line-height: 1.4;">Rethink the model. Keep as lead magnet.</div>
  </div>
</div>

<div style="margin-top: 16px; font-size: 0.68em; color: var(--body); line-height: 1.7;">

**The 90-day experiment:** Launch simple public gallery (weeks 1-2) → Gate contact behind signup (weeks 2-3) → Monitor engagement (weeks 3-4) → AI-powered Van Westendorp pricing study (weeks 4-5) → Smoke test with $300-600 ad spend (weeks 5-6) → Segment analysis (weeks 6-8) → AI qualitative interviews (weeks 8-9) → Synthesize and decide (weeks 9-12)

</div>

<div style="margin-top: 10px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 12px 18px;">
  <div style="font-size: 0.68em; color: var(--body); line-height: 1.5;">
    <strong>Day 90 decision:</strong> Signup >15% + any segment shows WTP of $5+/mo in both survey AND smoke test = <span style="color: var(--g);">build paid version</span>. Strong engagement but weak WTP = <span style="color: var(--y);">keep as lead magnet</span>. Signup <10%, time on site <2 min = <span style="color: var(--r);">rethink</span>.
  </div>
</div>

---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

### Discussion

# Questions for Us

<div style="display: flex; flex-direction: column; gap: 14px; margin-top: 24px; text-align: left; max-width: 700px;">
  <div style="background: #111; border: 1px solid #1a1a1a; border-radius: 10px; padding: 16px; border-left: 3px solid var(--blue);">
    <div style="font-size: 0.78em; color: var(--t); font-weight: 300; line-height: 1.5;">Is this a <strong>platform play</strong> or a <strong>feature of the existing ecosystem</strong>? Does it live on its own or enhance Arterial/NRA/Artsville?</div>
  </div>
  <div style="background: #111; border: 1px solid #1a1a1a; border-radius: 10px; padding: 16px; border-left: 3px solid var(--a);">
    <div style="font-size: 0.78em; color: var(--t); font-weight: 300; line-height: 1.5;">Do we build for <strong>artists</strong> (the supply side) or for <strong>the people who buy from them</strong> (the demand side)? Where does the first dollar come from?</div>
  </div>
  <div style="background: #111; border: 1px solid #1a1a1a; border-radius: 10px; padding: 16px; border-left: 3px solid var(--g);">
    <div style="font-size: 0.78em; color: var(--t); font-weight: 300; line-height: 1.5;">If <strong>open call matching</strong> is the killer feature — should the directory be the product, or should the matching engine be the product with the directory as the data layer?</div>
  </div>
  <div style="background: #111; border: 1px solid #1a1a1a; border-radius: 10px; padding: 16px; border-left: 3px solid var(--y);">
    <div style="font-size: 0.78em; color: var(--t); font-weight: 300; line-height: 1.5;">What's the <strong>minimum viable test</strong>? Can we validate willingness to pay before writing a single line of code?</div>
  </div>
</div>

---

### Sources & references

# Sources & References

<div style="font-family: 'Raleway'; font-weight: 400; font-size: 0.95em; color: var(--body); margin: 8px 0 28px;">
All research lives in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/001-artist-directory/research" style="color: var(--a); text-decoration: underline; font-weight: 600;">ideas/001-artist-directory/research/</a> — six Perplexity deep-research investigations (sub-1 to sub-6) plus an AI-interview follow-on, with <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/001-artist-directory/research/sources.md" style="color: var(--a); text-decoration: underline; font-weight: 600;">sources.md</a> capturing every URL, retrieval date, and defensibility note per claim.
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 36px; row-gap: 10px; font-size: 0.7em; line-height: 1.5; color: var(--body);">

  <div><strong style="color: var(--t); font-weight: 600;">Beowolff acquired Artnet ~$73.7M + Artsy stake (2025)</strong> — <a href="https://news.artnet.com/market/beowolff-capital-artnet-acquisition" style="color: inherit; text-decoration: underline;">Artnet News</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Artsy galleries $200–$3K+/mo; Saatchi 40% commission</strong> — <a href="https://partners.artsy.net/" style="color: inherit; text-decoration: underline;">Artsy Partner Report 2025</a> · <a href="https://support.saatchiart.com/hc/en-us/articles/360030395771" style="color: inherit; text-decoration: underline;">Saatchi support</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Artwork Archive $6–$139/mo across 5 tiers</strong> — <a href="https://www.artworkarchive.com/pricing" style="color: inherit; text-decoration: underline;">artworkarchive.com/pricing</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Mass-market wall art $12.96B → $103B by 2034</strong> — <a href="https://www.grandviewresearch.com/industry-analysis/wall-art-market-report" style="color: inherit; text-decoration: underline;">Grand View Research, 2024</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Global interior design services $128B (2024)</strong> — <a href="https://www.grandviewresearch.com/industry-analysis/interior-design-services-market" style="color: inherit; text-decoration: underline;">Grand View Research</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Art gallery software market $2.3B → $5.4B by 2033</strong> — <a href="https://market.us/report/art-gallery-software-market/" style="color: inherit; text-decoration: underline;">Market.us, 2024</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">75% early-submitter acceptance vs 60% late; 58→79% on repeats</strong> — <a href="https://sideartsmag.com/jurying-art-show-applications/" style="color: inherit; text-decoration: underline;">Side Arts / CaFE jurying analysis</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">B2B SaaS avg CPL $237; arts/culture est. $300–$500</strong> — <a href="https://firstpagesage.com/seo-blog/the-average-cost-per-lead-by-industry-fc/" style="color: inherit; text-decoration: underline;">First Page Sage 2024</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">NEA Grants for Arts Projects $10K–$100K</strong> — <a href="https://www.arts.gov/grants/grants-for-arts-projects" style="color: inherit; text-decoration: underline;">arts.gov</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">AI interviews ~$1–1.50 per 15-min call (Retell.ai)</strong> — <a href="https://www.retellai.com/pricing" style="color: inherit; text-decoration: underline;">retellai.com/pricing</a> · <a href="https://www.ribbon.ai/pricing" style="color: inherit; text-decoration: underline;">Ribbon AI $499/mo</a></div>

</div>

<div style="font-size: 0.62em; color: var(--m); margin-top: 22px;">Plus internal/first-party data — 1,000+ artists, 8,000+ AI-enriched artworks in the Arterial production database — and synthesized benchmarks (50–65% messaging-as-#1-driver, 70–90% AI-interview completion, smoke-test CTR thresholds) flagged with defensibility notes in <code>research/sources.md</code>.</div>
