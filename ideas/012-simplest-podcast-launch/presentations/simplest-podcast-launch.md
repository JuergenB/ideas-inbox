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

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/simplest-podcast-launch/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px; opacity: 0.7;" />

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.62em; letter-spacing: 0.22em; text-transform: uppercase; color: var(--a); margin-bottom: 10px;">A Podcast for Lynda</div>

# The Best is Yet to Come

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.0em; color: var(--body); margin-top: 12px; max-width: 780px;">The simplest way, in 2026, to record real conversations with people you admire — and have them appear as a published podcast. A plain-language overview, so we can talk it through together.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">Prepared for Dr. Lynda Klau</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">A conversation starter</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">July 2026</span>
</div>

---

<!-- _class: bg-dots -->

### What this is

# A friendly overview — read before we talk

<div style="font-size: 0.85em; color: var(--body); margin-top: 8px; max-width: 900px; line-height: 1.6;">You've imagined a show — <em>The Best is Yet to Come</em> — where you sit down with remarkable people and explore what's possible. This isn't a technical manual. It's a short walk through <strong>how simple starting a podcast has actually become</strong>, so nothing about the "how" stands between you and the conversations.</div>

<div style="display: flex; gap: 16px; margin-top: 24px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--a); margin-bottom: 6px;">What you want</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">To interview people you admire — remotely — and have each episode appear on Spotify and Apple Podcasts.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--a); margin-bottom: 6px;">What you don't want</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">To juggle software, wrestle audio files, or learn a stack of technical tools just to press record.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.8em; color: var(--a); margin-bottom: 6px;">The promise</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.6;">One tool, a few clicks per episode, and the fiddly parts set up just once — by someone else.</div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### The way it usually works

# Normally, a podcast means assembling a small stack of tools

<div style="font-size: 0.78em; color: var(--body); margin-top: 4px; max-width: 900px; line-height: 1.55;">This is what has scared people off for years — not the talking, but everything around it. A typical setup asks a beginner to learn and connect <strong>six to eight separate tools</strong>:</div>

<div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; margin-top: 20px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Scheduling</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">A separate booking tool for guests</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Recording</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">A remote studio like Zoom or Zencastr</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Editing</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">Audio software (Audacity, Descript)</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Hosting</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">A podcast host (Buzzsprout, Captivate)</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Uploads</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">Export the file, re-upload each episode</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Submission</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">List the show on Apple &amp; Spotify</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Show notes</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">Write a summary for every episode</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 16px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t); margin-bottom: 4px;">Website + clips</div><div style="font-size: 0.62em; color: var(--m); line-height: 1.5;">A site, plus social snippets</div></div>
</div>

<div style="margin-top: 18px; font-size: 0.72em; color: var(--m); font-style: italic;">None of it is about the conversation. All of it is why most people never start.</div>

---

<!-- _class: bg-glow -->

### The simple way

# In 2026, it collapses to two things

<div style="display: flex; gap: 20px; margin-top: 22px; align-items: stretch;">
  <div style="flex: 1.3; background: var(--s); border: 1px solid var(--b); border-left: 3px solid var(--a); border-radius: 12px; padding: 24px 26px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.05em; color: var(--t); margin-bottom: 8px;">1 · Riverside</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">One website where you <strong>record</strong> with remote guests, let it <strong>clean up</strong> the audio, and <strong>publish</strong> — all in the same place. It even <strong>hosts</strong> the show for you, so there's no separate host and no files to move.</div>
    <div style="margin-top: 14px; font-family: 'Outfit'; font-size: 0.6em; letter-spacing: 0.06em; color: var(--a);">RECORD → EDIT → HOST → PUBLISH</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-left: 3px solid var(--blue); border-radius: 12px; padding: 24px 26px;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.05em; color: var(--t); margin-bottom: 8px;">2 · Spotify for Creators</div>
    <div style="font-size: 0.76em; color: var(--body); line-height: 1.65;">A <strong>free</strong> service from Spotify that carries your show out to the listening apps. Set up <em>once</em>, then it just works in the background.</div>
    <div style="margin-top: 14px; font-family: 'Outfit'; font-size: 0.6em; letter-spacing: 0.06em; color: var(--blue);">DISTRIBUTES EVERYWHERE · FREE</div>
  </div>
</div>

<div style="margin-top: 20px; background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6;">Everything on the previous slide folds into these two. You live in <strong>one</strong> tool. The rest is handled — most of it just once, at the start.</div>

---

<!-- _class: bg-grid -->

### Recording an episode, start to finish

# Five steps — and none of them touch a file

<div style="display: flex; flex-direction: column; gap: 11px; margin-top: 20px;">
  <div class="row" style="display: flex; align-items: center; gap: 18px;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--a); width: 34px;">1</div><div style="font-size: 0.82em; color: var(--body);"><strong>Open your studio.</strong> Log in to Riverside in your browser — nothing to install.</div></div>
  <div class="row" style="display: flex; align-items: center; gap: 18px;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--a); width: 34px;">2</div><div style="font-size: 0.82em; color: var(--body);"><strong>Send your guest a link.</strong> They click it and join — no account, no download.</div></div>
  <div class="row" style="display: flex; align-items: center; gap: 18px;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--a); width: 34px;">3</div><div style="font-size: 0.82em; color: var(--body);"><strong>Press record.</strong> Have your conversation. When you're done, stop.</div></div>
  <div class="row" style="display: flex; align-items: center; gap: 18px;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--a); width: 34px;">4</div><div style="font-size: 0.82em; color: var(--body);"><strong>Accept the tidy-up.</strong> The tool cleans the audio and drafts your notes — you review.</div></div>
  <div class="row" style="display: flex; align-items: center; gap: 18px;"><div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.3em; color: var(--a); width: 34px;">5</div><div style="font-size: 0.82em; color: var(--body);"><strong>Publish.</strong> One button. The episode goes live on Spotify, Apple, and YouTube.</div></div>
</div>

<div style="margin-top: 18px; font-size: 0.72em; color: var(--m); font-style: italic;">No downloading. No uploading. No "where did that file go." Record here, publish here.</div>

---

<!-- _class: bg-glow-green -->

### Your guests just click a link

# The remote-guest part is genuinely easy

<div style="display: flex; gap: 18px; margin-top: 22px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 11px; padding: 20px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--g); margin-bottom: 8px;">Nothing to install</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Your guest opens the link in their normal web browser and they're in. No app, no account, no setup call beforehand.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 11px; padding: 20px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--g); margin-bottom: 8px;">Everyone sounds good</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">Each person is recorded in high quality on their own device — so even a shaky internet connection doesn't ruin the audio.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 11px; padding: 20px 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--g); margin-bottom: 8px;">Room for a group</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.6;">You and up to nine guests at once — plenty for a one-on-one interview or a small panel.</div>
  </div>
</div>

<div style="margin-top: 22px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--g); border-radius: 8px; padding: 15px 20px; font-size: 0.8em; color: var(--body); line-height: 1.6; font-style: italic;">This is the part people worry about most — "will my guest be able to figure it out?" With a single link, they will.</div>

---

<!-- _class: bg-dots -->

### What the assistant does for you

# The tedious production work is drafted automatically

<div style="font-size: 0.78em; color: var(--body); margin-top: 4px; max-width: 900px; line-height: 1.55;">After you finish recording, Riverside's built-in assistant prepares the "produced" version of your episode. You don't operate it — you <strong>review what it drafts</strong>.</div>

<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 20px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Cleaner audio</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">Background noise reduced, levels smoothed.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Show notes &amp; title</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">A written summary and a title suggestion.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Chapters</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">Timestamps for the topics you covered.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Transcript</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">A full written version of the conversation.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Short clips</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">Highlight moments cut for social media.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 15px 18px;"><div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.74em; color: var(--a); margin-bottom: 4px;">Text-based trims</div><div style="font-size: 0.64em; color: var(--body); line-height: 1.5;">Delete a stumble by deleting the words.</div></div>
</div>

<div style="margin-top: 16px; font-size: 0.68em; color: var(--m); font-style: italic;">Everything here is a draft you can accept as-is or lightly adjust — never a technical chore.</div>

---

<!-- _class: bg-glow -->

### Where your episodes appear

# On the listening apps — and on your own website

<div style="display: flex; gap: 20px; margin-top: 22px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.9em; color: var(--t); margin-bottom: 10px;">The podcast apps</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.65;">Once set up, each new episode flows automatically to <strong>Spotify</strong>, <strong>Apple Podcasts</strong>, and <strong>YouTube</strong>. The technical "feed" that carries them there is handled for you — you never see it.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.9em; color: var(--t); margin-bottom: 10px;">Your own website</div>
    <div style="font-size: 0.74em; color: var(--body); line-height: 1.65;">Want episodes on <em>drlyndaklau.com</em> too? <strong>Your web person can add a small Spotify player</strong> to your site — visitors press play right there, no extra work from you.</div>
  </div>
</div>

<div style="margin-top: 20px; background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--blue); border-radius: 8px; padding: 15px 20px; font-size: 0.78em; color: var(--body); line-height: 1.6;">The show lives everywhere your listeners already are — and on your own site as a natural extension of <em>Life Unlimited</em>.</div>

---

<!-- _class: bg-grid -->

### The one-time setup

# The technical part happens once — and not by you

<div style="font-size: 0.8em; color: var(--body); margin-top: 6px; max-width: 900px; line-height: 1.6;">There's exactly one moment of "wiring things together" in this whole story: connecting your show to Spotify, and listing it on Apple Podcasts. It's done <strong>a single time, at the very beginning</strong> — and it's a natural job for <strong>your web person</strong>.</div>

<div style="display: flex; gap: 16px; margin-top: 22px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--a); margin-bottom: 6px;">Done once</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">Connect to Spotify for Creators; submit the show to Apple Podcasts. After that, it's automatic forever.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--a); margin-bottom: 6px;">Not your job</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">Your web person can handle it — Juergen can hand them a simple step-by-step so it takes them minutes.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px 20px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.78em; color: var(--a); margin-bottom: 6px;">Then invisible</div>
    <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">From your first episode onward, you only ever record and press publish.</div>
  </div>
</div>

---

### Usually many tools → now built in

# The same jobs, quietly handled

<table>
  <thead><tr><th>The job</th><th>The old way</th><th>Now</th></tr></thead>
  <tbody>
    <tr><td>Book &amp; meet the guest</td><td>Separate scheduling + video tool</td><td>One link, in Riverside</td></tr>
    <tr><td>Record everyone in HD</td><td>A remote recording studio</td><td>Built in</td></tr>
    <tr><td>Clean up the audio</td><td>Editing software to learn</td><td>Automatic draft</td></tr>
    <tr><td>Store &amp; serve the show</td><td>A separate podcast host</td><td>Built in (hosting)</td></tr>
    <tr><td>Get each episode online</td><td>Export a file, re-upload it</td><td>One publish button</td></tr>
    <tr><td>Write show notes &amp; title</td><td>Write by hand every time</td><td>Drafted for you</td></tr>
    <tr><td>List on Apple &amp; Spotify</td><td>Manual submission</td><td>One-time setup (web person)</td></tr>
    <tr><td>Episodes on your website</td><td>Build a player yourself</td><td>Paste-in Spotify player</td></tr>
  </tbody>
</table>

---

<!-- _class: bg-glow-gold -->

### What it costs

# One modest subscription, plus a free service

<div style="display: flex; gap: 20px; margin-top: 22px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); margin-bottom: 6px;">Riverside</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.7em; color: var(--t);">~$29<span style="font-size: 0.4em; color: var(--m); font-weight: 400;"> / month</span></div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55; margin-top: 8px;">The paid plan that includes hosting, the AI assistant, and longer recordings. A bit less if paid yearly.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--blue); margin-bottom: 6px;">Spotify for Creators</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.7em; color: var(--t);">Free</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.55; margin-top: 8px;">Hosting and distribution to the apps, at no cost.</div>
  </div>
  <div style="flex: 1.2; background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 22px 24px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--m); margin-bottom: 6px;">The old stack, for contrast</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.6; margin-top: 6px;">A separate host ($19–99/mo), editing software ($16–24/mo), a recording tool, and a website — several bills, several logins.</div>
  </div>
</div>

<div style="margin-top: 18px; font-size: 0.66em; color: var(--m); font-style: italic;">Prices as listed July 2026 and can change — the point is the shape: one small subscription instead of many.</div>

---

<!-- _class: bg-glow-green -->

### What you never have to touch

# The list of things that are simply not your problem

<div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 12px; margin-top: 22px;">
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">Downloading or uploading audio files</div></div>
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">Anything called "RSS" or a "feed"</div></div>
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">Audio editing software</div></div>
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">A separate hosting platform</div></div>
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">Manual submissions after episode one</div></div>
  <div style="display: flex; align-items: center; gap: 12px; background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 14px 18px;"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#22c55e" stroke-width="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg><div style="font-size: 0.76em; color: var(--body);">Asking guests to install anything</div></div>
</div>

---

### A few honest, practical notes

# So there are no surprises

<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--y); border-radius: 8px; padding: 15px 20px;"><div style="font-size: 0.8em; color: var(--body); line-height: 1.55;"><strong style="color: var(--y);">Hosting comes with the paid plan.</strong> The all-in-one convenience is why the ~$29/month plan is the one to use — the free tier can't host your show.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--y); border-radius: 8px; padding: 15px 20px;"><div style="font-size: 0.8em; color: var(--body); line-height: 1.55;"><strong style="color: var(--y);">The Apple listing is one small technical step.</strong> It happens once, at the start, and your web person (or Juergen) can take care of it — you don't need to learn it.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-left: 2px solid var(--y); border-radius: 8px; padding: 15px 20px;"><div style="font-size: 0.8em; color: var(--body); line-height: 1.55;"><strong style="color: var(--y);">Nothing here traps you.</strong> If the show grows and you ever want more, everything can be moved to another service later. You're not locked in.</div></div>
</div>

---

### Learn it in an afternoon

# A few plain-English walkthroughs (not sales pitches)

<div style="font-size: 0.8em; color: var(--body); margin-top: 6px; max-width: 900px; line-height: 1.6;">These are independent teachers on YouTube — the kind that walk you through it gently, screen by screen. Watching one or two is genuinely enough to feel ready.</div>

<div style="display: flex; flex-direction: column; gap: 12px; margin-top: 20px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 16px 20px;"><a href="https://www.youtube.com/watch?v=IYdN4V8I-do" style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); text-decoration: none;">How to Use Riverside.fm for Podcasting — Beginner Walkthrough →</a><div style="font-size: 0.68em; color: var(--m); margin-top: 4px;">StartupWise · account, studio, inviting guests, recording, in plain language.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 16px 20px;"><a href="https://www.youtube.com/watch?v=1Ozb5dFLeaA" style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); text-decoration: none;">How to Start a Podcast with Riverside — The Ultimate Beginner's Guide →</a><div style="font-size: 0.68em; color: var(--m); margin-top: 4px;">Primal Video · settings, scheduling, recording, and who it's best for.</div></div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 9px; padding: 16px 20px;"><a href="https://www.youtube.com/watch?v=-yW3ZOvhW5Q" style="font-family: 'Outfit'; font-weight: 600; font-size: 0.82em; color: var(--a); text-decoration: none;">Riverside: Record, Edit, and Host Your Podcast — Full Tutorial →</a><div style="font-size: 0.68em; color: var(--m); margin-top: 4px;">Covers the AI cleanup, show notes, and publishing/hosting in one place.</div></div>
</div>

---

<!-- _class: lead bg-hero -->

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.62em; letter-spacing: 0.22em; text-transform: uppercase; color: var(--a); margin-bottom: 10px;">Before we talk</div>

# Questions to bring to our conversation

<div style="font-size: 0.9em; color: var(--body); margin-top: 8px; max-width: 820px; line-height: 1.7;">Nothing to decide yet. Just notice what you're curious or unsure about — that's exactly what we'll walk through together.</div>

<div style="display: flex; gap: 14px; margin-top: 28px; max-width: 940px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;"><div style="font-size: 0.72em; color: var(--body); line-height: 1.55;">Who are the first few people you'd love to interview?</div></div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;"><div style="font-size: 0.72em; color: var(--body); line-height: 1.55;">How often feels joyful, not like a chore?</div></div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px 18px;"><div style="font-size: 0.72em; color: var(--body); line-height: 1.55;">What would make this feel like a success to you?</div></div>
</div>

<div style="margin-top: 26px; font-family: 'Outfit'; font-weight: 300; font-size: 1.0em; color: var(--t); font-style: italic;">The best is yet to come.</div>

---

<!-- _class: bg-dots -->

# Sources & References
## The facts behind this overview

<div style="font-size: 0.66em; line-height: 1.5; margin-top: 6px;">

**Riverside records remote guests via browser link, no download, local HD tracks (up to 10)** — Riverside.fm Help Center / FAQ, <a href="https://riverside.com/faq">riverside.com/faq</a>. Retrieved July 2026.

**Riverside offers built-in podcast hosting + RSS feed, free with any paid plan** — Riverside Podcast Hosting, <a href="https://riverside.com/podcast-hosting">riverside.com/podcast-hosting</a>; public launch reported late November 2025 (Podnews Weekly Review). Retrieved July 2026.

**Publish directly to Spotify, Apple Podcasts &amp; YouTube from Riverside — no file download** — Riverside University, <a href="https://riverside.com/university-videos/record-on-riverside-publish-to-spotify">"Record on Riverside, Publish to Spotify"</a>; Spotify for Creators, <a href="https://support.spotify.com/us/creators/article/creating-with-riverside-fm/">"Creating with Riverside.fm"</a>. Retrieved July 2026.

**AI assistant drafts show notes, titles, chapters, transcripts, social clips + audio cleanup** — Riverside features &amp; Magic Clips, <a href="https://riverside.com/magic-clips">riverside.com/magic-clips</a>. (Accuracy/"viral" specifics are third-party claims.) Retrieved July 2026.

**Riverside paid plan ≈ $29/mo (less annually); the tier that unlocks hosting + AI + longer recording** — Riverside Plans &amp; Pricing, <a href="https://riverside.com/pricing">riverside.com/pricing</a>. Prices change — retrieved July 2026.

**Spotify for Creators = free hosting + distribution; one-time Apple Podcasts submission; embeddable player** — Spotify for Creators, <a href="https://creators.spotify.com/features/podcast">creators.spotify.com/features/podcast</a> and <a href="https://support.spotify.com/us/creators/article/submitting-your-show-to-apple-podcasts/">Apple submission guide</a>. Retrieved July 2026.

</div>

<p style="font-size: 0.66em; color: var(--body); margin-top: 14px;">Full URLs, quotes, retrieval dates, and every claim's provenance: see <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/012-simplest-podcast-launch/research/sources.md" style="color: var(--a); text-decoration: underline; font-family: 'Outfit'; font-weight: 600;">research/sources.md</a> in the idea folder.</p>
