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

  .row:hover { background: #0c0c0c; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }

  abbr { text-decoration: none; border-bottom: 1px dotted #333; cursor: help; }

  code { background: var(--s); border: 1px solid var(--b); border-radius: 4px; padding: 1px 5px; color: var(--t); font-size: 0.9em; }
header: ''
footer: ''
---

<!-- exploratory deck — no Sources slide per author direction -->

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/polywiz-paid-ads-engine/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 0.85;" />
</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.22em; text-transform: uppercase; margin-bottom: 28px;">Understanding the archive · for the team</div>

# What GitHub Really Is

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.1em; color: var(--body); margin-top: 12px; max-width: 840px;">You're looking at a <strong>software-development platform</strong> — not a presentation archive. Same screen, completely different machine.</div>

<div style="display: flex; gap: 10px; margin-top: 36px; flex-wrap: wrap; justify-content: center;">
  <span style="background: #ff6b1a; color: var(--bg); border-radius: 20px; padding: 6px 16px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">A 5-minute reframe</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">No jargon</span>
  <span style="background: transparent; border: 1.5px solid #ff6b1a; color: #ff6b1a; border-radius: 20px; padding: 5px 15px; font-family: 'Outfit'; font-size: 0.6em; font-weight: 600; letter-spacing: 0.04em;">For stakeholders</span>
</div>

---

<!-- _class: bg-glow-orange -->

### Where this comes from

## "It looks like a presentation archive — and the interface is kludgy"

<div style="font-size: 0.86em; color: var(--label); margin: 4px 0 22px; max-width: 900px; line-height: 1.6;">That's a completely fair first reaction — and it's worth taking seriously. You open the page, you see idea folders and slide decks, wrapped in a technical-looking interface that isn't built for casual reading. So the natural conclusion is: <em>this is a clunky place to keep our decks.</em></div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">What it looks like</div>
    <div style="font-size: 0.84em; color: var(--body); line-height: 1.6;">A folder of ideas and presentations behind a busy, developer-ish screen. A filing cabinet with too many buttons.</div>
  </div>
  <div style="flex: 1.2; background: rgba(255,107,26,0.05); border: 1px solid #3a2410; border-radius: 10px; padding: 18px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">What's actually going on</div>
    <div style="font-size: 0.84em; color: var(--body); line-height: 1.6;">You're judging a <strong>workshop</strong> as if it were a filing cabinet. The tool isn't clunky for storing decks — it's built for something bigger, and the decks are just what's sitting on the workbench right now.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">This deck fixes the category — not to defend the interface, but to show what the interface is <em>for</em>.</div>

---

<!-- _class: bg-dots -->

### First, the correction

## GitHub is the world's software-development platform

<div style="font-size: 0.86em; color: var(--label); margin: 4px 0 20px; max-width: 900px; line-height: 1.6;">Not a document store. Not an ideas app. It's the standard place where working software gets <strong>built, reviewed, versioned, and shipped</strong> — used by tens of millions of developers and effectively every serious technology company on earth. When engineers build something real, this is where it lives.</div>

<div style="display: flex; gap: 14px; margin-top: 6px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" stroke-width="1.4" style="margin-bottom: 10px;"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">It builds software</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">The actual code that becomes apps and websites is written and assembled here.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0199fe" stroke-width="1.4" style="margin-bottom: 10px;"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">It versions everything</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Every change is dated, attributed, and reversible. Nothing is ever quietly overwritten.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="1.4" style="margin-bottom: 10px;"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">It hands off cleanly</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Any developer, anywhere, can pick up the whole project and continue it — history intact.</div>
  </div>
</div>

<div style="margin-top: 20px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center;">Everything else in this deck follows from that one fact. <strong>The ideas archive is a <em>use</em> of this machine — not the machine itself.</strong></div>

---

<!-- _class: bg-glow-orange -->

### The interface, honestly

## That "kludgy" interface is an engineering cockpit

<div style="font-size: 0.84em; color: var(--label); margin: -2px 0 18px; max-width: 900px; line-height: 1.6;">It looks technical because it <em>is</em> a professional build environment. Every control that feels like clutter is a lever for versioning, review, or handoff. You don't have to touch any of them to read an idea — but they're the reason the archive can do things a folder of files never could.</div>

<div style="display: flex; gap: 0; border: 1px solid var(--b); border-radius: 12px; overflow: hidden; font-size: 0.72em;">
  <div style="flex: 1; padding: 18px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.72em; color: var(--m); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">What feels like clutter</div>
    <div style="line-height: 2.1; color: var(--body);">
      "Commits," "branches," "pull requests"<br>
      A wall of buttons and tabs<br>
      Timestamps and version labels everywhere<br>
      Technical file names and folders
    </div>
  </div>
  <div style="width: 1px; background: var(--b);"></div>
  <div style="flex: 1.15; padding: 18px 22px; background: rgba(255,107,26,0.04);">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.72em; color: var(--a); text-transform: uppercase; letter-spacing: 0.12em; margin-bottom: 14px;">What it actually is</div>
    <div style="line-height: 2.1; color: var(--body);">
      The <strong>controls</strong> for tracking every change safely<br>
      A <strong>cockpit</strong> for building and reviewing work<br>
      The <strong>guarantee</strong> that nothing is ever lost<br>
      The <strong>structure</strong> that lets anyone find their way in
    </div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">Judging it by the interface is like judging a recording studio's mixing board by whether it's a comfy place to read a book. <strong>Wrong test for the machine.</strong></div>

---

<!-- _class: bg-glow -->

### The reframe

## Stop reading it as a document tool

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 20px; max-width: 900px;">Same screen, two completely different mental models. Swap the one on the left for the one on the right and the whole thing starts making sense.</div>

<div style="font-size: 0.74em;">
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 11px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="flex: 1; color: var(--m);"><span style="color:var(--r);">✕</span>&nbsp; A presentation archive</div>
    <div style="flex: 1.1; color: var(--body);"><span style="color:var(--g);">✓</span>&nbsp; A versioned platform we <strong>build</strong> in</div>
    <div style="flex: 1.3; color: var(--label); font-size: 0.92em;">The decks are output, not the point.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 11px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="flex: 1; color: var(--m);"><span style="color:var(--r);">✕</span>&nbsp; A kludgy interface</div>
    <div style="flex: 1.1; color: var(--body);"><span style="color:var(--g);">✓</span>&nbsp; Professional engineering controls</div>
    <div style="flex: 1.3; color: var(--label); font-size: 0.92em;">Built for precision, not for browsing.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 11px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="flex: 1; color: var(--m);"><span style="color:var(--r);">✕</span>&nbsp; Storage for finished files</div>
    <div style="flex: 1.1; color: var(--body);"><span style="color:var(--g);">✓</span>&nbsp; A living record <strong>with memory</strong></div>
    <div style="flex: 1.3; color: var(--label); font-size: 0.92em;">It remembers every step, not just the last one.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 11px 8px;">
    <div style="flex: 1; color: var(--m);"><span style="color:var(--r);">✕</span>&nbsp; A folder on someone's computer</div>
    <div style="flex: 1.1; color: var(--body);"><span style="color:var(--g);">✓</span>&nbsp; A project anyone can <strong>continue</strong></div>
    <div style="flex: 1.3; color: var(--label); font-size: 0.92em;">Not trapped in one laptop or one head.</div>
  </div>
</div>

<div style="margin-top: 20px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center;">The rest of this deck is just the <strong>three things</strong> that right-hand column buys us.</div>

---

<!-- _class: bg-glow -->

### Superpower 1

## Nothing is ever lost — the entire history is kept

<div style="font-size: 0.84em; color: var(--label); margin: -2px 0 18px; max-width: 900px; line-height: 1.6;">Think of <strong>Google Docs version history</strong> — but for an entire project, not one file. Every change is a dated snapshot: who made it, when, and what it replaced. You can rewind to any point, compare any two moments, and recover anything. There is no "final_v3_REALLY_final" problem here.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 20px 24px;">
  <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 18px;">The same idea, remembered at every step</div>
  <div style="display: flex; align-items: center; gap: 0; font-size: 0.66em;">
    <div style="flex: 1; text-align: center;">
      <svg width="14" height="14" viewBox="0 0 14 14" style="margin-bottom: 6px;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#ff6b1a" stroke-width="2"/></svg>
      <div style="color: var(--t); font-family:'Outfit'; font-weight:600;">Idea captured</div>
      <div style="color: var(--m);">first draft</div>
    </div>
    <div style="flex: 0.5; height: 2px; background: var(--b);"></div>
    <div style="flex: 1; text-align: center;">
      <svg width="14" height="14" viewBox="0 0 14 14" style="margin-bottom: 6px;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#0199fe" stroke-width="2"/></svg>
      <div style="color: var(--t); font-family:'Outfit'; font-weight:600;">Research added</div>
      <div style="color: var(--m);">evidence in</div>
    </div>
    <div style="flex: 0.5; height: 2px; background: var(--b);"></div>
    <div style="flex: 1; text-align: center;">
      <svg width="14" height="14" viewBox="0 0 14 14" style="margin-bottom: 6px;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#f5a623" stroke-width="2"/></svg>
      <div style="color: var(--t); font-family:'Outfit'; font-weight:600;">Deck revised</div>
      <div style="color: var(--m);">framing sharpened</div>
    </div>
    <div style="flex: 0.5; height: 2px; background: var(--b);"></div>
    <div style="flex: 1; text-align: center;">
      <svg width="14" height="14" viewBox="0 0 14 14" style="margin-bottom: 6px;"><circle cx="7" cy="7" r="6" fill="#0c0c0c" stroke="#22c55e" stroke-width="2"/></svg>
      <div style="color: var(--t); font-family:'Outfit'; font-weight:600;">Go / no-go</div>
      <div style="color: var(--m);">decision logged</div>
    </div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">Every one of those dots is still there, forever. <strong>You can always see how we got here.</strong></div>

---

<!-- _class: bg-glow-gold -->

### Superpower 2

## It keeps the *why*, not just the files

<div style="font-size: 0.84em; color: var(--label); margin: -2px 0 18px; max-width: 900px; line-height: 1.6;">A shared drive stores <em>what</em> a document says. This stores the <strong>reasoning around it</strong> — the discussion, the objections, the decision, and who was in the room. When you come back in a year and ask "why did we do it this way?", the answer is right there, attached to the work.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--m); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">A plain shared drive</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.7;">
      The latest file, and nothing else<br>
      No record of what was debated<br>
      "Ask whoever made it" — if they're still here<br>
      Decisions live in email threads that get lost
    </div>
  </div>
  <div style="flex: 1.15; background: rgba(245,166,35,0.05); border: 1px solid #3a2f14; border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--y); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 10px;">This archive</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.7;">
      The <strong>discussion</strong> is pinned to the work itself<br>
      Every decision has a <strong>paper trail</strong><br>
      Who changed what, when, and <strong>why</strong><br>
      The full story survives the people who wrote it
    </div>
  </div>
</div>

<div style="margin-top: 18px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 13px 20px; font-size: 0.76em; color: var(--body); line-height: 1.55; text-align: center;">This is called <strong>provenance</strong> — a complete, trustworthy record of how a piece of work came to be. It's the difference between a filing cabinet and an institutional memory.</div>

---

<!-- _class: bg-glow-green -->

### Superpower 3

## Anyone can pick it up and continue the line

<div style="font-size: 0.84em; color: var(--label); margin: -2px 0 18px; max-width: 900px; line-height: 1.6;">This is the one that matters most for us. Because the whole project lives here — with its full history — <strong>any developer, anywhere, can take a complete copy and keep building</strong>. In GitHub's language that's called <em>forking</em>: photocopy the entire lab notebook, every past page intact, and continue it as your own line.</div>

<div style="display: flex; gap: 14px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--g); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">No lock-in</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.6;">The work isn't trapped in one vendor, one tool, or one person's laptop. It's portable by design.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--g); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">No single point of failure</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.6;">If the person who built it moves on, the next developer starts from <strong>exactly here</strong> — not from scratch.</div>
  </div>
  <div style="flex: 1; background: rgba(34,197,94,0.05); border: 1px solid #14361f; border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.62em; color: var(--g); text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Native habitat for developers</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.6;">Fork, copy, review, hand off — this is exactly how software teams collaborate worldwide, every day.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center;"><strong style="color:var(--g);">"Any developer can pick up from here" is literal.</strong> That portability is the whole reason the work is safe.</div>

---

<!-- _class: bg-dots -->

### How we actually use it

## We stage ideas in the same machine they'll be built in

<div style="font-size: 0.84em; color: var(--label); margin: 4px 0 20px; max-width: 900px; line-height: 1.6;">Here's the deliberate part. We could keep early ideas in a doc somewhere and only "move to GitHub" once they become code. We don't — <strong>on purpose</strong>. We incubate ideas <em>here</em> so that the moment one graduates into real software, it's already home: same platform, same history, nothing to migrate.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">What lives here today</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.9;">
      <strong style="color:var(--t);font-weight:600;">Numbered idea folders</strong> — one per idea<br>
      <strong style="color:var(--t);font-weight:600;">Discussion papers</strong> — the written case<br>
      <strong style="color:var(--t);font-weight:600;">Decks</strong> — the pitch, like this one<br>
      <strong style="color:var(--t);font-weight:600;">Research</strong> — the evidence behind it<br>
      <strong style="color:var(--t);font-weight:600;">Issues</strong> — the running debate
    </div>
  </div>
  <div style="flex: 1; background: rgba(1,153,254,0.05); border: 1px solid #10334a; border-radius: 10px; padding: 16px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--blue); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">Why put it here first</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.6;">Every idea arrives already versioned, already discussable, already portable. When Scott greenlights one, it doesn't get "set up" — it just <strong>graduates into its own project</strong>, carrying its entire history with it. No handoff gap.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">We're not storing ideas in a coding tool by accident. <strong>We're staging them in the front door of the factory where they'll be built.</strong></div>

---

<!-- _class: bg-grid -->

### Anatomy of one idea

## What's actually inside a single idea folder

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 18px; max-width: 900px;">The "technical clutter" is simpler than it looks. Open any idea and here's the whole map — five things, plain-English names:</div>

<div style="font-size: 0.72em;">
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 9px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 180px; font-family:'Outfit'; font-weight:600; color: var(--a);"><code>README.md</code></div>
    <div style="width: 150px; color: var(--t);">The discussion paper</div>
    <div style="flex: 1; color: var(--body);">The written case for the idea — what opens automatically when you click the folder.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 9px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 180px; font-family:'Outfit'; font-weight:600; color: var(--t);"><code>presentations/</code></div>
    <div style="width: 150px; color: var(--t);">The pitch</div>
    <div style="flex: 1; color: var(--body);">The source for decks like this one.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 9px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 180px; font-family:'Outfit'; font-weight:600; color: var(--t);"><code>research/</code></div>
    <div style="width: 150px; color: var(--t);">The proof</div>
    <div style="flex: 1; color: var(--body);">Market research, sources, and evidence behind the claims.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 9px 8px; border-bottom: 1px solid #0e0e0e;">
    <div style="width: 180px; font-family:'Outfit'; font-weight:600; color: var(--t);"><code>exports/</code></div>
    <div style="width: 150px; color: var(--t);">The shareable version</div>
    <div style="flex: 1; color: var(--body);">The finished deck as a PDF or a full-screen web link.</div>
  </div>
  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 9px 8px;">
    <div style="width: 180px; font-family:'Outfit'; font-weight:600; color: var(--blue);">Issues &amp; history</div>
    <div style="width: 150px; color: var(--t);">The debate</div>
    <div style="flex: 1; color: var(--body);">The running conversation and every change, dated and attributed.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.78em; color: var(--label); text-align: center;">That's it. <strong>README is the paper; the rest is supporting material.</strong> Once you know the map, the "clutter" disappears.</div>

---

<!-- _class: bg-glow-green -->

### The payoff of staging it here

## Idea → its own repo → built as software, history intact

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 20px; max-width: 900px;">The reason the front-of-house looks like a developer's tool is that it <em>is</em> the on-ramp to one. An idea never has to leave the platform to become real.</div>

<div style="display: flex; align-items: center; gap: 0; margin-top: 8px; font-size: 0.66em;">
  <div style="flex: 1; text-align: center; padding: 0 4px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 8px;">
      <div style="font-family:'Outfit'; font-weight:700; color: var(--t); font-size: 1.05em;">Captured</div>
      <div style="color: var(--m); margin-top: 4px;">idea gets a folder</div>
    </div>
  </div>
  <div style="color: var(--a); font-size: 1.2em; padding: 0 2px;">→</div>
  <div style="flex: 1; text-align: center; padding: 0 4px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 8px;">
      <div style="font-family:'Outfit'; font-weight:700; color: var(--t); font-size: 1.05em;">Researched</div>
      <div style="color: var(--m); margin-top: 4px;">evidence + debate</div>
    </div>
  </div>
  <div style="color: var(--a); font-size: 1.2em; padding: 0 2px;">→</div>
  <div style="flex: 1; text-align: center; padding: 0 4px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 8px;">
      <div style="font-family:'Outfit'; font-weight:700; color: var(--t); font-size: 1.05em;">Go / no-go</div>
      <div style="color: var(--m); margin-top: 4px;">decision logged</div>
    </div>
  </div>
  <div style="color: var(--g); font-size: 1.2em; padding: 0 2px;">→</div>
  <div style="flex: 1.2; text-align: center; padding: 0 4px;">
    <div style="background: rgba(34,197,94,0.06); border: 1px solid #14361f; border-radius: 10px; padding: 14px 8px;">
      <div style="font-family:'Outfit'; font-weight:700; color: var(--g); font-size: 1.05em;">Graduates &amp; is built</div>
      <div style="color: var(--body); margin-top: 4px;">own repo — history carried in</div>
    </div>
  </div>
</div>

<div style="margin-top: 22px; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 20px; font-size: 0.78em; color: var(--body); line-height: 1.6; text-align: center;">At no point does anyone re-key the work into a "real" system. <strong style="color:var(--g);">The idea and the software it becomes are the same continuous thread</strong> — which is exactly why we start it here.</div>

---

<!-- _class: bg-glow-gold -->

### Why this matters for the organization

## Continuity, ownership, and no single point of failure

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 20px; max-width: 900px;">This isn't a developer convenience. For Arterial, Not Real Art, and every brand, it's an operational safeguard.</div>

<div style="display: flex; gap: 14px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.78em; color: var(--t); margin-bottom: 6px;">Institutional memory</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">The reasoning behind every idea and decision survives staff changes. It doesn't walk out the door.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.78em; color: var(--t); margin-bottom: 6px;">You own the work</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">It's portable and vendor-neutral. No platform can hold your ideas or code hostage.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.78em; color: var(--t); margin-bottom: 6px;">Any developer can continue</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">Not dependent on one person being available. The next builder starts from exactly here.</div>
  </div>
</div>

<div style="margin-top: 18px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center;">The "kludgy tool" is the thing making sure <strong>the work outlasts whoever happened to make it.</strong></div>

---

<!-- _class: bg-grid -->

### Wayfinding

## How to read the repo in 60 seconds

<div style="font-size: 0.82em; color: var(--label); margin: -2px 0 20px; max-width: 900px;">You never need to touch a single developer control. Here's the whole path — ignore everything else on the screen.</div>

<div style="margin-top: 6px; padding: 4px 0 4px 18px; border-left: 2px solid var(--b);">
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 13px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--a); font-size: 1.1em; min-width: 28px;">1</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.45;"><strong style="color:var(--t);font-weight:600;">Start at the front-page table.</strong> The main README lists every idea with a one-line status. That's your index.</div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 13px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--a); font-size: 1.1em; min-width: 28px;">2</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.45;"><strong style="color:var(--t);font-weight:600;">Click an idea's folder.</strong> The discussion paper opens automatically underneath it — that's the full written case.</div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px; margin-bottom: 13px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--a); font-size: 1.1em; min-width: 28px;">3</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.45;"><strong style="color:var(--t);font-weight:600;">Click the deck thumbnail near the top.</strong> It opens a full-screen, arrow-key presentation — no PDF tab, no download.</div>
  </div>
  <div style="display: flex; align-items: flex-start; gap: 14px;">
    <div style="font-family:'Outfit'; font-weight:800; color: var(--m); font-size: 1.1em; min-width: 28px;">—</div>
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.45;"><strong style="color:var(--m);font-weight:600;">Everything else is plumbing.</strong> Buttons, tabs, and technical files are for the people building. You can safely ignore them.</div>
  </div>
</div>

<div style="margin-top: 20px; font-weight: 300; font-size: 0.8em; color: var(--label); text-align: center;">Table → folder → deck. <strong>That's the whole tour.</strong></div>

---

<!-- _class: lead bg-hero -->
<!-- _header: '' -->
<!-- _paginate: false -->

<svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ff6b1a" stroke-width="1.4" style="margin-bottom: 18px;"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>

# It's not a presentation archive

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.15em; color: var(--body); margin-top: 14px; max-width: 720px;">It's the workshop where the work gets built — and <strong>survives the people who made it.</strong></div>

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.8em; color: var(--m); margin-top: 24px;">Same screen, completely different machine.</div>
