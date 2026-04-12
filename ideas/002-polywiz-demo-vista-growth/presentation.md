---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@100;200;300&display=swap');

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
    --body: #b0b0b0;
    --label: #888;
  }

  section {
    background-color: #0c0c0c;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(255,107,26,0.12) 100%);
    color: var(--t);
    font-family: 'Raleway', sans-serif;
    font-weight: 300;
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

  /* Edge-glow backgrounds — dark center, color bleeds from edges, varied per slide */
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
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="./images/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 0.7;" />
</div>

# A Marketing Agency in a Box

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: #aaa; margin-top: 12px; max-width: 600px;">How one person built a production social media system — and what it means for Vista Growth</div>

<div style="display: flex; gap: 8px; margin-top: 24px;">
  <span style="background: #ff6b1a15; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #ff6b1aaa; font-weight: 400;">Juergen Berkessel</span>
  <span style="background: #ff6b1a15; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #ff6b1aaa; font-weight: 400;">April 2026</span>
</div>

---

<!-- _paginate: false -->
<!-- _class: bg-dots -->

### Today's Agenda

# What We'll Cover

<div style="display: flex; gap: 14px; margin-top: 20px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--a); line-height: 1;">01</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t); margin-top: 10px;">PolyWiz Demo</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">A real AI marketing tool — the kind of solution Vista Growth could bring to clients</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--g); line-height: 1;">02</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t); margin-top: 10px;">Strategic Framing</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">Why Vista Growth should advise on navigating structural change, not recommending specific tools</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--y); line-height: 1;">03</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t); margin-top: 10px;">The Boilerplate Path</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">How Jackie can go from building websites to building real applications using AI-assisted development</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #0199fe, transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: #0199fe; line-height: 1;">04</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t); margin-top: 10px;">AI Interview Protocol</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px;">If time allows — turning the $7,500 audit into a self-service qualification engine (<a href="./interview-protocol.html" style="color: #0199fe; text-decoration: none;">separate deck</a>)</div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### The Story

# Why We Built PolyWiz

<div style="display: flex; gap: 24px; margin-top: 16px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">

Our clients are 501(c)(3) arts organizations — nonprofits running on thin budgets. Their teams were burning enormous time, energy, and money **laboriously producing social media content** — writing posts, reformatting for each platform, managing scheduling, tracking results.

That's time they could spend curating exhibitions, building relationships with artists, engaging their communities. The real work.

So we built PolyWiz — not to replace anyone, but to **free people up** for the work that actually matters.

</div>
  </div>
  <div style="width: 1px; background: var(--b);"></div>
  <div style="width: 300px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">PolyWiz Today</div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t); width: 28px;">1</div>
        <span style="font-size: 0.7em; color: var(--body);">person operating the system</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--a); width: 28px;">13</div>
        <span style="font-size: 0.7em; color: var(--body);">social platforms managed</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--g); width: 28px;">4</div>
        <span style="font-size: 0.7em; color: var(--body);">organizations in production</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--y); width: 28px;">11</div>
        <span style="font-size: 0.7em; color: var(--body);">campaign types running</span>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### The Real ROI

# It's Not About Cutting Headcount

<div style="font-size: 0.8em; color: var(--body); margin-bottom: 14px;">The early adopters of AI aren't just saving money. They're **expanding what their teams can do.** The ROI story is about increased capabilities, not reduced costs.</div>

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--r), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--r); margin-bottom: 8px;">BEFORE — WHERE TIME WENT</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6;">
      <div style="margin-bottom: 4px;">Writing posts for 13 platforms</div>
      <div style="margin-bottom: 4px;">Reformatting content per channel</div>
      <div style="margin-bottom: 4px;">Managing scheduling spreadsheets</div>
      <div>Tracking what was posted where</div>
    </div>
  </div>
  <div style="display: flex; align-items: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--g); margin-bottom: 8px;">AFTER — WHERE TIME GOES NOW</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6;">
      <div style="margin-bottom: 4px;">Curating exhibitions and shows</div>
      <div style="margin-bottom: 4px;">Building relationships with artists</div>
      <div style="margin-bottom: 4px;">Community engagement and outreach</div>
      <div>Competing better with sustained social presence</div>
    </div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 12px; margin-top: 14px; text-align: center;">
  <div style="font-size: 0.68em; color: var(--body);">Same team. Same budget. **Dramatically more output and reach.** That's the story early AI adopters are living — and the story Vista Growth's clients will want to hear.</div>
</div>

---

<!-- _class: bg-glow -->

### Possibilities

# Where Vista Growth Could Fit

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">Your clients may not need to build these tools themselves. They may need someone who understands the landscape, vets the solutions, and helps design the transition.</div>

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">Evaluate Solutions</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; line-height: 1.5;">Tools like PolyWiz already exist. Vista Growth helps clients find, vet, and compare them — not which tool, but **what criteria**, how to pilot, how to measure.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">Redeploy Teams</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; line-height: 1.5;">5 content writers don't become 0. They become **2 strategists + 3 community managers**. Vista Growth designs the retraining and the transition plan.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">Partner & Integrate</div>
    <div style="font-size: 0.65em; color: var(--body); margin-top: 6px; line-height: 1.5;">Bring **vetted solution partners** — like PolyWiz for social media automation — to clients who need them. Revenue share, not just advice.</div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### PolyWiz

# Not a Prototype. Production.

<div style="display: flex; gap: 14px; margin-top: 20px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--t); line-height: 1;">13</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">PLATFORMS</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 6px;">Instagram, Facebook, X, LinkedIn, Threads, Bluesky, TikTok, Pinterest, YouTube, Tumblr, Mastodon, Reddit, Google Business</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--g); line-height: 1;">4</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">ORGANIZATIONS</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 6px;">Running production campaigns right now — real posts, real platforms, real approval workflows</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--y); line-height: 1;">11</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">CAMPAIGN TYPES</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 6px;">Newsletter, Exhibition, Artist Profile, Podcast, Event, Open Call, and more</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--t); line-height: 1;">1</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; margin-top: 4px;">PERSON</div>
    <div style="font-size: 0.6em; color: var(--label); margin-top: 6px;">Built and operated by one person using AI-assisted development</div>
  </div>
</div>

<div style="margin-top: 20px; text-align: center;">
  <img src="./images/dashboard-overview-publishing-pipeline.png" style="width: 85%; border-radius: 8px; border: 1px solid var(--b);" />
</div>

---

<!-- _class: bg-dots -->

### PolyWiz — Brand Voice

# 8-Dimension Voice System

<div style="display: flex; gap: 24px; margin-top: 12px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.8em; color: var(--body); margin-bottom: 16px; line-height: 1.7;">Every organization sounds different. PolyWiz doesn't use one-size-fits-all prompts — it calibrates across **8 tonal dimensions** so that each brand's voice is distinct and consistent across all platforms.</div>

<div style="display: flex; flex-wrap: wrap; gap: 8px;">
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Wit</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Warmth</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Opinion</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Skepticism</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Playfulness</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Urgency</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Authority</span>
  <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Intimacy</span>
</div>

<div style="font-size: 0.7em; color: var(--label); margin-top: 14px;">Each slider ranges 0-10. The AI adapts its writing style per brand, per platform, per post type.</div>
  </div>
  <div style="width: 420px;">
    <img src="./images/tone-dimensions-eight-sliders.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--b);" />
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### PolyWiz — Human Control

# Approval Queue

<div style="display: flex; gap: 24px; margin-top: 12px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7;">

**Nothing auto-fires.** Every AI-generated post enters the approval queue as a draft.

Humans review, edit, approve, or reject. The AI is the engine — the humans are the drivers.

Your team stays in control. The AI handles the production grind — your people focus on engagement, community, and creative strategy.

</div>
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; margin-top: 12px;">
      <div style="display: flex; align-items: center; gap: 6px;">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
        <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Key principle:</span>
        <span style="font-size: 0.65em; color: var(--body);">AI generates, humans decide</span>
      </div>
    </div>
  </div>
  <div style="width: 440px;">
    <img src="./images/approval-queue-pending-posts.png" style="width: 100%; border-radius: 8px; border: 1px solid var(--b);" />
  </div>
</div>

---

<!-- _class: lead bg-hero -->

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.65em; color: var(--a); text-transform: uppercase; letter-spacing: 0.25em; margin-bottom: 14px;">Live Demo</div>

# Let Me Show You

<a href="https://polywiz.polymash.com" target="_blank" style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: var(--a); margin-top: 12px; max-width: 500px; text-decoration: none; display: block;">polywiz.polymash.com</a>

---

<!-- _class: bg-glow-gold -->

### Same Philosophy

# Different Packaging

<div style="display: flex; gap: 24px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; color: var(--t); margin-bottom: 10px;">Steve's World</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">Mid-Market B2B</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">
      "**AI-powered**" is a selling point. Clients want to hear it. The language of transformation, automation, and AI governance resonates.
    </div>
    <div style="display: flex; gap: 6px; margin-top: 12px;">
      <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Lead with AI</span>
    </div>
  </div>
  <div style="display: flex; align-items: center; padding: 0 8px;">
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 0.7em; color: var(--m);">VS</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; color: var(--t); margin-bottom: 10px;">My World</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 8px;">501(c)(3) Arts Organizations</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">
      "**AI-powered**" triggers skepticism. Arts orgs don't want a robot writing about their artists. PolyWiz leads with sustained presence and human approval.
    </div>
    <div style="display: flex; gap: 6px; margin-top: 12px;">
      <span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">AI Under the Hood</span>
    </div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; margin-top: 16px; text-align: center;">
  <div style="font-size: 0.75em; color: var(--body);">Same philosophy — <strong>AI frees people up rather than replacing them</strong> — different audience, different framing. This nuance is something Vista Growth's clients will face too.</div>
</div>

---

<!-- _class: bg-glow-orange -->

### The Strategic Point

# Don't Recommend Tools. Navigate Change.

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">This space moves so fast that recommending specific AI tools is a losing game. Whatever you recommend in April will be surpassed by July. Tools like PolyWiz will be **commonplace within a year**.</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 10px;">What Vista Growth should advise on instead</div>

<div style="display: flex; gap: 12px;">
  <div style="flex: 1;">
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Redeploy People</div>
        <div style="font-size: 0.58em; color: var(--label);">What do your marketers do when AI handles content generation?</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Restructure Teams</div>
        <div style="font-size: 0.58em; color: var(--label);">5 content writers → 2 strategists + 3 community managers</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Evaluate & Adopt</div>
        <div style="font-size: 0.58em; color: var(--label);">Not which tool, but what criteria, how to pilot, how to measure</div>
      </div>
    </div>
  </div>
  <div style="flex: 1;">
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Compete Better</div>
        <div style="font-size: 0.58em; color: var(--label);">Your competitors will have AI marketing. Will you?</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 10px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Manage the Human Side</div>
        <div style="font-size: 0.58em; color: var(--label);">Retraining, redeployment, morale, the internal narrative</div>
      </div>
    </div>
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 12px; margin-top: 8px;">
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5; font-style: italic;">"I'm not telling you to use PolyWiz. I'm showing you what one person built. Your clients need someone to help them navigate what happens when these tools exist."</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### The Origin Story

# It Started with a YouTube Video

<div style="display: flex; gap: 24px; margin-top: 16px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7; margin-bottom: 14px;">

**Bart Slodyczka** published a video called "Build 10X Faster With This Simple Claude Code Workflow."

His key insight: give an AI coding assistant a well-structured starting point — authentication, database, UI components, API patterns — and it can build **real applications**, not just websites.

I took that idea, forked the boilerplate, and built <a href="https://polywiz.polymash.com" target="_blank" style="color: var(--a); text-decoration: none;">PolyWiz</a> as well as <a href="https://visibilitylabs.polymash.com" target="_blank" style="color: var(--a); text-decoration: none;">Visibility Labs</a>.

</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
  <div style="display: flex; align-items: center; gap: 8px;">
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">The leap:</span>
    <span style="font-size: 0.62em; color: var(--body);">From building websites → building applications</span>
  </div>
</div>
  </div>
  <div style="width: 380px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">The Boilerplate Stack</div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Next.js + React + TypeScript</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Tailwind CSS + shadcn/ui</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Authentication & login flows</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Supabase or Airtable backend</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Dashboard + sidebar navigation</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Deploy-ready for Vercel</span>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow -->

### For Jackie

# Feature Prompting

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">Instead of writing code line by line, you describe features to Claude Code and it builds them against the boilerplate's architecture.</div>

<div style="display: flex; gap: 16px; margin-top: 8px;">
  <div style="flex: 1;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--r), transparent);"></div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--r); margin-bottom: 8px;">BEFORE — Website Level</div>
      <div style="background: #0a0a0a; border-radius: 6px; padding: 12px; font-family: 'Courier New', monospace; font-size: 0.6em; color: var(--body); line-height: 1.5;">
        <div style="color: var(--label);">// Static pages</div>
        <div style="color: var(--label);">// Contact forms</div>
        <div style="color: var(--label);">// Content updates</div>
        <div style="color: var(--m);">No database. No users.</div>
        <div style="color: var(--m);">No application state.</div>
      </div>
    </div>
  </div>
  <div style="display: flex; align-items: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
  <div style="flex: 1;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--g); margin-bottom: 8px;">AFTER — Application Level</div>
      <div style="background: #0a0a0a; border-radius: 6px; padding: 12px; font-family: 'Courier New', monospace; font-size: 0.6em; color: var(--body); line-height: 1.5;">
        <div style="color: var(--g);">"Add a survey form that</div>
        <div style="color: var(--g);">saves responses to Supabase"</div>
        <div style="color: var(--m); margin-top: 4px;">→ Working feature in minutes</div>
        <div style="color: var(--m);">→ Auth, DB, UI — all included</div>
      </div>
    </div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; margin-top: 14px;">
  <div style="font-size: 0.7em; color: var(--body); line-height: 1.5;">Jackie already builds with Claude Code. The boilerplate is the bridge — it provides the patterns so AI fills in your specific business logic. Authentication, login, user management, role-based access are **solved problems** baked into the template.</div>
</div>

---

<!-- _class: bg-glow-green -->

### The Opportunity

# AI Transformation Audit — As a Built Tool

<div style="display: flex; gap: 24px; margin-top: 12px;">
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--r); margin-bottom: 6px;">WHAT YOU HAVE NOW</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">A **$7,500** consulting engagement delivered over 2 weeks. Current state assessment, AI Opportunity Matrix, ROI projections, technology recommendations, 90-day action plan.</div>
    <div style="font-size: 0.65em; color: var(--label); margin-top: 8px;">Manual. High-touch. Doesn't scale.</div>
  </div>
  <div style="width: 1px; background: var(--b);"></div>
  <div style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--g); margin-bottom: 6px;">WHAT IT COULD BECOME</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">A self-service assessment tool at **audit.vistagrowth.ai**. Conversational AI interview, AI-scored results, personalized report, CTA to book the full engagement.</div>
    <div style="font-size: 0.65em; color: var(--g); margin-top: 8px;">Qualified leads on autopilot.</div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); margin-bottom: 6px;">PHASE 1 — Qualification</div>
    <div style="font-size: 0.6em; color: var(--body); line-height: 1.5;">15-min conversational AI interview (audio-only). Adaptive follow-ups. AI-scored readiness. Branded PDF report. CRM integration.</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 6px;">70-90% completion rate vs 10-30% for forms</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--y); margin-bottom: 6px;">PHASE 2 — Organizational</div>
    <div style="font-size: 0.6em; color: var(--body); line-height: 1.5;">Multiple stakeholders take interviews independently. System generates organizational rollup. Divergence reveals alignment issues.</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 6px;">A consultable finding itself</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); margin-bottom: 6px;">PHASE 3 — Full Platform</div>
    <div style="font-size: 0.6em; color: var(--body); line-height: 1.5;">Client portal with audit findings, progress tracking against 90-day plan, ongoing monitoring.</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 6px;">Aspirational — build after Phase 1 proves out</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### Credibility

# The Difference It Makes

<div style="display: flex; gap: 24px; margin-top: 20px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--r); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px;">Without a Built Tool</div>
    <div style="font-size: 1.4em; margin-bottom: 14px;">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--r)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
    </div>
    <div style="font-size: 0.85em; color: var(--body); line-height: 1.6; font-style: italic;">"Trust us, we know AI."</div>
    <div style="font-size: 0.65em; color: var(--label); margin-top: 10px;">Decks, whitepapers, and promises</div>
  </div>
  <div style="display: flex; align-items: center;">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--m)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 24px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 14px;">With a Built Tool</div>
    <div style="font-size: 1.4em; margin-bottom: 14px;">
      <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
    </div>
    <div style="font-size: 0.85em; color: var(--body); line-height: 1.6; font-style: italic;">"Trust us, we build AI tools. Try one."</div>
    <div style="font-size: 0.65em; color: var(--g); margin-top: 10px;">Experience over explanation</div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; margin-top: 20px; text-align: center;">
  <div style="font-size: 0.72em; color: var(--body);">The most credible navigators of structural change are the ones who've **actually made the journey themselves**.</div>
</div>

---

<!-- _class: bg-grid -->

### Getting Started

# Next Steps for Jackie

<div style="margin-top: 16px;">
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 14px 8px; border-bottom: 1px solid var(--b);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.2em; color: var(--a); width: 36px;">1</div>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t);">Watch Bart's Video</div>
      <div style="font-size: 0.65em; color: var(--body);">30 min — understand the feature-prompting workflow that made PolyWiz possible</div>
    </div>
    <div style="margin-left: auto;">
      <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">30 min</span>
    </div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 14px 8px; border-bottom: 1px solid var(--b);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.2em; color: var(--a); width: 36px;">2</div>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t);">Clone the Supabase Boilerplate</div>
      <div style="font-size: 0.65em; color: var(--body);">Get it running locally — instant Next.js app with auth, database, dashboard</div>
    </div>
    <div style="margin-left: auto;">
      <span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">1 hour</span>
    </div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 14px 8px; border-bottom: 1px solid var(--b);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.2em; color: var(--a); width: 36px;">3</div>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t);">Try One Feature Prompt</div>
      <div style="font-size: 0.65em; color: var(--body);">"Add a 10-question survey form that saves responses to Supabase" — see what happens</div>
    </div>
    <div style="margin-left: auto;">
      <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">1 hour</span>
    </div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 14px 8px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.2em; color: var(--a); width: 36px;">4</div>
    <div>
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--t);">Think About the AI Transformation Audit</div>
      <div style="font-size: 0.65em; color: var(--body);">Your entry product, well-defined, would immediately differentiate Vista Growth</div>
    </div>
    <div style="margin-left: auto;">
      <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">First Project</span>
    </div>
  </div>
</div>

---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

# PolyWiz Is Evidence. Not Prescription.

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: #aaa; margin-top: 12px; max-width: 600px;">Vista Growth's job isn't to build PolyWiz for clients — it's to help clients navigate a world where PolyWiz exists.</div>

<div style="display: flex; gap: 14px; margin-top: 30px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">MARKETING SITE</div>
    <a href="https://polywiz.polymash.com" target="_blank" style="font-size: 0.65em; color: var(--a); margin-top: 2px; text-decoration: none; display: block;">polywiz.polymash.com</a>
  </div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">BART'S VIDEO</div>
    <a href="https://www.youtube.com/watch?v=uHpUVBA8dWE" target="_blank" style="font-size: 0.65em; color: var(--a); margin-top: 2px; text-decoration: none; display: block;">Build 10X Faster — YouTube</a>
  </div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">BOILERPLATE REPOS</div>
    <a href="https://github.com/JuergenB/polymash-nextjs-supabase-shadcn-boilerplate" target="_blank" style="font-size: 0.58em; color: var(--a); margin-top: 2px; text-decoration: none; display: block;">Supabase Boilerplate</a>
    <a href="https://github.com/JuergenB/polymash-nextjs-airtable-boilerplate" target="_blank" style="font-size: 0.58em; color: var(--a); margin-top: 2px; text-decoration: none; display: block;">Airtable Boilerplate</a>
  </div>
</div>
