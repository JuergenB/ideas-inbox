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

  .step { display: inline-flex; align-items: center; justify-content: center; width: 30px; height: 30px; border-radius: 8px; background: var(--a); color: var(--bg); font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; flex-shrink: 0; }
  .card { background: var(--s); border: 1px solid var(--b); border-radius: 12px; padding: 16px 20px; }
  code { background: var(--s); border: 1px solid var(--b); border-radius: 5px; padding: 1px 7px; font-family: 'IBM Plex Mono', monospace; font-size: 0.85em; color: var(--a2); }

  .row:hover { background: #161616; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }

  a { color: inherit; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/activecampaign-newsletter-artsvilleusa/polymash-logo.png" style="position: absolute; top: 34px; left: 44px; width: 52px; border-radius: 11px; opacity: 0.7;" />

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.62em; letter-spacing: 0.22em; text-transform: uppercase; color: var(--a); margin-bottom: 10px;">ArtsvilleUSA · Team Setup Guide</div>

# Sending Newsletters from ActiveCampaign

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 1.0em; color: var(--body); margin-top: 12px; max-width: 820px;">How to add ActiveCampaign as a second, fully authenticated sender for ArtsvilleUSA — using a <strong>mail.artsvilleusa.com</strong> subdomain configured in GoDaddy — <em>without touching the Ghost newsletter setup.</em> A step-by-step guide anyone on the team can follow.</div>

<div style="display: flex; gap: 8px; margin-top: 26px;">
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">ActiveCampaign + GoDaddy DNS</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">Deliverability that lands in the inbox</span>
  <span style="background: #ff6b1a18; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: var(--a); font-weight: 400;">July 2026</span>
</div>

---

<!-- _class: bg-glow-gold -->

### Why we're even doing this

# ArtsvilleUSA needs a real email-sending channel

<div style="display: flex; gap: 16px; margin-top: 14px;">
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--a); font-size: 0.8em; margin-bottom: 6px;">The need — all-purpose</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">One tool for <strong>fundraising, announcements, exhibition promos, open calls, and press releases</strong> — sent to our lists (press contacts, members, donors). All of it is <strong>list email</strong>, not one-off personal notes.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--r); font-size: 0.8em; margin-bottom: 6px;">Why not personal email</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">Blasting a list from a personal or Crewest inbox risks a <strong>sender-reputation hit</strong> — and those inboxes aren't built for list sending, tracking, or unsubscribes.</div>
  </div>
</div>

<div style="display: flex; gap: 16px; margin-top: 14px;">
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--blue); font-size: 0.8em; margin-bottom: 6px;">The account to use</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">Scott set up a <strong>dedicated ActiveCampaign account for Arterial / ArtsvilleUSA</strong>. Use it for all AV — <em>not</em> the Crewest AC account.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--y); font-size: 0.8em; margin-bottom: 6px;">The blocker this guide clears</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">ActiveCampaign won't let you send until the sending domain is <strong>authenticated</strong> in DNS. That's the one-time setup below.</div>
  </div>
</div>

---

<!-- _class: bg-dots -->

### Two ways to get list email out

# The options — and why we lean ActiveCampaign

<div style="display: flex; gap: 16px; margin-top: 16px;">
  <div class="card" style="flex: 1; border-top: 3px solid var(--a);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--a); font-size: 0.9em;">A · ActiveCampaign</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.55; margin-top: 8px;">Purpose-built for list sending: <strong>segments, automations, reply tracking, clean list management</strong>, and proper unsubscribe handling. The right long-term home for all AV email.<br><br><strong>Cost:</strong> a one-time domain authentication + a short warm-up — this guide.</div>
  </div>
  <div class="card" style="flex: 1; border-top: 3px solid var(--blue);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--blue); font-size: 0.9em;">B · Ghost "Email only"</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.55; margin-top: 8px;">Lay the email out in Ghost and publish as <strong>Email only</strong> — it goes to members but <em>never appears on the site</em>. Ghost handles all authentication → <strong>zero DNS work</strong>.<br><br><strong>Trade-off:</strong> recipients must be Ghost members, and you lose AC's outreach tooling.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--m); font-size: 0.74em; line-height: 1.5;">
<strong style="color:var(--t);">Our lean:</strong> ActiveCampaign as the all-purpose ArtsvilleUSA sender. Ghost "Email only" is a fine <em>interim</em> — it can go out today with no setup while the AC subdomain warms up. <em>(Which AC account — existing Crewest vs. new Arterial — is the next slide.)</em>
</div>

---

<!-- _class: bg-glow-orange -->

### An open decision for Thursday

# Which ActiveCampaign account should send AV?

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div class="card" style="flex: 1; border-left: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--g); font-size: 0.8em; margin-bottom: 4px;">Existing Crewest Studio AC</div>
    <div style="color: var(--body); font-size: 0.68em; line-height: 1.5;">Real advantage: our <strong>lists — and their engagement history — already live here</strong>, so we can send-to-most-engaged-first and skip re-importing. Downside: entangles AV with the Crewest account being wound down.</div>
  </div>
  <div class="card" style="flex: 1; border-left: 3px solid var(--y);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--y); font-size: 0.8em; margin-bottom: 4px;">New Arterial / AV AC</div>
    <div style="color: var(--body); font-size: 0.68em; line-height: 1.5;">Clean ownership; likely a <strong>nonprofit</strong> account; aligned with Scott's direction. Downside: <strong>re-import contacts</strong> — they arrive with no in-account engagement history to segment on.</div>
  </div>
</div>

<div class="card" style="margin-top: 14px; border-left: 3px solid var(--r);">
<div style="color: var(--body); font-size: 0.7em; line-height: 1.5;">
<strong style="color:var(--r);">Myth-buster:</strong> a "warm" Crewest account does <strong>not</strong> make <code>mail.artsvilleusa.com</code> warm. Reputation attaches to the <strong>domain</strong> (and, on AC's shared IPs, to AC's pool) — and that subdomain is <strong>brand-new either way</strong>. Same DKIM/SPF setup, same warm-up in both accounts. <em>(One exception: if an account has a <strong>dedicated IP</strong>, that IP warmth is account-specific — worth checking.)</em>
</div>
</div>

<div style="margin-top: 10px; color: var(--body); font-size: 0.72em; line-height: 1.5;">
<strong>So the real trade to discuss:</strong> keep existing lists + engagement history (Crewest) vs. clean nonprofit ownership + re-imported lists (Arterial). If the lists migrate cleanly, the Crewest edge mostly evaporates.
</div>

---

<!-- _class: bg-dots -->

### The situation — the technical picture

# Two senders, one brand, zero conflict

<div style="display: flex; gap: 18px; margin-top: 14px;">
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--blue); font-size: 0.8em; margin-bottom: 6px;">Ghost(Pro) — stays exactly as it is</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">ArtsvilleUSA's regular member newsletters go out through Ghost. Ghost manages its own authenticated sending behind the scenes (via Mailgun). <strong>We do not touch that.</strong></div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--a); font-size: 0.8em; margin-bottom: 6px;">ActiveCampaign — what we're adding</div>
    <div style="color: var(--body); font-size: 0.72em; line-height: 1.5;">A <strong>separate</strong> way to send newsletters &amp; announcements — automations, segments, richer campaigns. It needs its <em>own</em> authenticated identity to reach the inbox.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--body); font-size: 0.8em; line-height: 1.55;">
<strong>Why this guide exists.</strong> Email providers (Gmail, Outlook, Yahoo) junk any newsletter whose sending domain isn't cryptographically authenticated. Ghost's authentication only covers Ghost's mail. ActiveCampaign is a different mail stream, so it needs its own SPF/DKIM/DMARC — set up on a domain <em>we</em> control at GoDaddy. This guide walks the whole team through doing that, once, correctly.
</div>

---

<!-- _class: bg-grid -->

### The one concept that makes this make sense

# "Where the content is made" ≠ "who sends the email"

<div style="display: flex; gap: 16px; margin-top: 16px;">
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--t); font-size: 0.82em;">Content origin</div>
    <div style="color: var(--m); font-size: 0.62em; letter-spacing: 0.1em; text-transform: uppercase; margin: 2px 0 8px;">Ghost · ActiveCampaign</div>
    <div style="color: var(--body); font-size: 0.7em; line-height: 1.5;">Where you write and design the email. Irrelevant to deliverability on its own.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--t); font-size: 0.82em;">Sending domain</div>
    <div style="color: var(--m); font-size: 0.62em; letter-spacing: 0.1em; text-transform: uppercase; margin: 2px 0 8px;">Authenticated in DNS</div>
    <div style="color: var(--body); font-size: 0.7em; line-height: 1.5;">The domain in the <em>From</em> address, proven yours via SPF, DKIM &amp; DMARC records. This is what inbox providers judge.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--t); font-size: 0.82em;">Where records live</div>
    <div style="color: var(--m); font-size: 0.62em; letter-spacing: 0.1em; text-transform: uppercase; margin: 2px 0 8px;">GoDaddy DNS</div>
    <div style="color: var(--body); font-size: 0.7em; line-height: 1.5;">You control artsvilleusa.com's DNS at GoDaddy. That's all ActiveCampaign needs — <strong>never</strong> Ghost's DNS.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--body); font-size: 0.78em;">
Because SPF/DKIM are configured <strong>per sending domain</strong>, one brand can have several authenticated senders. We give ActiveCampaign its own: <strong>mail.artsvilleusa.com</strong>.
</div>

---

<!-- _class: bg-glow -->

### The plan at a glance

# One subdomain for ActiveCampaign, replies to a real inbox

<div style="display: flex; gap: 14px; margin-top: 18px; align-items: stretch;">
  <div class="card" style="flex: 1; border-left: 3px solid var(--blue);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--blue); font-size: 0.78em; margin-bottom: 6px;">Ghost(Pro)</div>
    <div style="color: var(--body); font-size: 0.68em; line-height: 1.5;">Sends member newsletters from its own authenticated domain.<br><strong>Unchanged. Not in scope.</strong></div>
  </div>
  <div class="card" style="flex: 1.4; border-left: 3px solid var(--a);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--a); font-size: 0.78em; margin-bottom: 6px;">ActiveCampaign → mail.artsvilleusa.com</div>
    <div style="color: var(--body); font-size: 0.68em; line-height: 1.5;">Newsletters &amp; announcements send <em>From</em> <code>newsletter@mail.artsvilleusa.com</code>, fully authenticated with records added at GoDaddy on the <strong>mail</strong> subdomain.</div>
  </div>
  <div class="card" style="flex: 1; border-left: 3px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--g); font-size: 0.78em; margin-bottom: 6px;">Reply-To</div>
    <div style="color: var(--body); font-size: 0.68em; line-height: 1.5;">Replies land in <code>editor@artsvilleusa.com</code> — a real, monitored ArtsvilleUSA inbox. Subscribers reply to a human.</div>
  </div>
</div>

<div style="margin-top: 20px; color: var(--m); font-size: 0.72em; line-height: 1.5;">
Because <code>mail.artsvilleusa.com</code> and <code>artsvilleusa.com</code> share the same root domain, ActiveCampaign's authentication <strong>aligns</strong> for DMARC — the technical requirement Gmail &amp; Yahoo now enforce.
</div>

---

<!-- _class: bg-glow-gold -->

### Before you touch anything

# Prerequisites — confirm before you start

<div style="margin-top: 10px;">

| # | What to confirm | Who / where |
|---|-----------------|-------------|
| 1 | **Which AC account** sends AV — existing Crewest vs. new Arterial *(decide Thu)* | Team |
| 2 | **Admin access** to the chosen ActiveCampaign account (Settings → Advanced) | AC owner |
| 3 | **GoDaddy login** for artsvilleusa.com DNS (Domain Portfolio → DNS) | GoDaddy holder |
| 4 | **From address** — e.g. <code>newsletter@mail.artsvilleusa.com</code> (or <code>press@</code>) | Team convention |
| 5 | **Reply-To owner** validated in AC — press → likely **Elise**; <code>editor@</code> = Morgan | Confirm Thu |
| 6 | **Do not modify Ghost's DNS records** — leave anything Ghost/Mailgun untouched | Whole team |

</div>

<div style="margin-top: 14px; color: var(--m); font-size: 0.72em;">
⏱️ Budget ~20 minutes of work, then up to a few hours (occasionally 24–48h) for DNS to propagate before ActiveCampaign shows "Authenticated." Then a 2–4 week warm-up before high-volume sends.
</div>

---

<!-- _class: bg-grid -->

### Step 1 — in ActiveCampaign

# Add mail.artsvilleusa.com as a sending domain

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1;">
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;"><span class="step">1</span><span style="color: var(--body); font-size: 0.78em;">Click the <strong>Settings</strong> gear icon → <strong>Advanced</strong>.</span></div>
    <div style="display:flex; align-items:center; gap:10px; margin-bottom:8px;"><span class="step">2</span><span style="color: var(--body); font-size: 0.78em;">Find the <strong>Sending Domain</strong> section. Enter <code>mail.artsvilleusa.com</code> (no <code>https://</code>).</span></div>
    <div style="display:flex; align-items:center; gap:10px;"><span class="step">3</span><span style="color: var(--body); font-size: 0.78em;">Pick one of the two methods on the right →</span></div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div class="card" style="flex: 1; border-top: 2px solid var(--g);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--g); font-size: 0.78em;">"Configure Domain" — automated</div>
    <div style="color: var(--body); font-size: 0.7em; line-height: 1.5; margin-top: 6px;">GoDaddy <em>is</em> supported. AC logs into GoDaddy (you enter your GoDaddy credentials) and writes the records for you. Fastest path.</div>
  </div>
  <div class="card" style="flex: 1; border-top: 2px solid var(--a);">
    <div style="font-family: 'Outfit'; font-weight: 600; color: var(--a); font-size: 0.78em;">"Set up manually" — you add records</div>
    <div style="color: var(--body); font-size: 0.7em; line-height: 1.5; margin-top: 6px;">AC verifies via an email link, then shows a table of DNS records to copy into GoDaddy yourself. Preferred if you'd rather not hand AC your GoDaddy login. <strong>Step 2 covers this.</strong></div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### Step 2 — in GoDaddy (manual path)

# Copy each record into GoDaddy DNS

<div style="color: var(--body); font-size: 0.75em; margin-bottom: 6px;">GoDaddy → <strong>Domain Portfolio</strong> → select <code>artsvilleusa.com</code> → <strong>DNS</strong> → <strong>Add New Record</strong>. ActiveCampaign gives you 3 records:</div>

| Record | Type | Purpose |
|--------|------|---------|
| **DKIM** — e.g. <code>acdkim1._domainkey…</code> | CNAME | Cryptographically signs the mail (proves it's really you) |
| **Mailserver / Return-Path** — e.g. <code>em…</code> | CNAME | Passes SPF and aligns the bounce/return domain |
| **DMARC** | TXT | Tells inbox providers how to handle unauthenticated mail |

<div class="card" style="margin-top: 14px; border-left: 3px solid var(--y);">
<div style="font-family:'Outfit'; font-weight:600; color: var(--y); font-size: 0.74em;">⚠️ The #1 mistake — the "Name" field</div>
<div style="color: var(--body); font-size: 0.7em; line-height:1.5; margin-top:4px;">GoDaddy automatically appends <code>.artsvilleusa.com</code> to whatever you type in <strong>Name</strong>. Since these records belong to the <strong>mail</strong> subdomain, a Name AC shows as <code>acdkim1._domainkey</code> becomes <code>acdkim1._domainkey.mail</code> in GoDaddy. Match the format of your existing records — and never paste the full root domain twice.</div>
</div>

<div style="margin-top: 10px; color: var(--m); font-size: 0.68em;">Copy <strong>Value</strong> exactly as shown. Leave <strong>TTL</strong> at the default (1 hour) or set <code>600</code>. Save each record (GoDaddy may ask for a 2-step verification code).</div>

---

<!-- _class: bg-glow-green -->

### Step 3 — verify it worked

# Recheck authentication until it goes green

<div style="display: flex; gap: 14px; margin-top: 12px;">
  <div style="flex: 1.1;">
    <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px;"><span class="step">1</span><span style="color: var(--body); font-size: 0.78em; padding-top:3px;">Back in ActiveCampaign: <strong>Settings → Advanced → Sending Domains</strong>, open the dropdown on the right, click <strong>"Recheck Authentication."</strong></span></div>
    <div style="display:flex; align-items:flex-start; gap:10px; margin-bottom:10px;"><span class="step">2</span><span style="color: var(--body); font-size: 0.78em; padding-top:3px;">Records usually propagate in <strong>5–10 minutes</strong>, but can take up to <strong>24–48 hours</strong>. Recheck periodically — don't panic early.</span></div>
    <div style="display:flex; align-items:flex-start; gap:10px;"><span class="step">3</span><span style="color: var(--body); font-size: 0.78em; padding-top:3px;">Success = a green <strong>"Authenticated"</strong> status. If it stalls, use <strong>"View DNS Records"</strong> to compare, or <strong>"Resolve Issues."</strong></span></div>
  </div>
  <div class="card" style="flex: 0.9; display:flex; flex-direction:column; justify-content:center;">
    <div style="font-family:'Outfit'; font-weight:600; color: var(--g); font-size: 1.6em;">✓ Authenticated</div>
    <div style="color: var(--body); font-size: 0.68em; margin-top:8px; line-height:1.5;">Once green, <code>mail.artsvilleusa.com</code> is a verified, authenticated sender — DKIM, SPF and DMARC align to the ArtsvilleUSA root. (Now begin the warm-up.)</div>
  </div>
</div>

---

<!-- _class: bg-glow -->

### Step 4 — on every campaign

# Set From on the subdomain, Reply-To on the root

<div style="display: flex; gap: 16px; margin-top: 16px;">
  <div class="card" style="flex: 1; border-top: 2px solid var(--a);">
    <div style="color: var(--m); font-size: 0.62em; letter-spacing:0.12em; text-transform:uppercase;">From address</div>
    <div style="font-family:'Outfit'; font-weight:600; color: var(--a); font-size: 0.95em; margin-top:4px;">newsletter@mail.artsvilleusa.com</div>
    <div style="color: var(--body); font-size: 0.68em; margin-top:8px; line-height:1.5;">The authenticated identity. This is the domain inbox providers judge — so it must be the subdomain you just verified.</div>
  </div>
  <div class="card" style="flex: 1; border-top: 2px solid var(--g);">
    <div style="color: var(--m); font-size: 0.62em; letter-spacing:0.12em; text-transform:uppercase;">Reply-To address</div>
    <div style="font-family:'Outfit'; font-weight:600; color: var(--g); font-size: 0.9em; margin-top:4px;">elisewilson@artsvilleusa.com <span style="font-size:0.6em; color:var(--y);">confirm Thu</span></div>
    <div style="color: var(--body); font-size: 0.68em; margin-top:8px; line-height:1.5;">Where press replies land. Press responses likely need <strong>Elise</strong> (ED) — not the editorial inbox. <code>editor@</code> = Morgan for editorial. Whoever owns it, <strong>validate that address in AC</strong>.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--body); font-size: 0.76em; line-height:1.55;">
Set both in each campaign's email settings. The <strong>From name</strong> should read <em>ArtsvilleUSA</em> regardless of the technical address — that's what subscribers actually see.
</div>

---

<!-- _class: bg-glow-gold -->

### The question Juergen raised — answered

# Does the subdomain need warming up?

<div style="color: var(--body); font-size: 0.8em; line-height:1.55; margin-top:6px;">
<strong>Short answer: yes — warm up <code>mail.artsvilleusa.com</code>. It earns its own reputation.</strong>
</div>

<div style="display:flex; gap:14px; margin-top:14px;">
  <div class="card" style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--t); font-size:0.76em; margin-bottom:4px;">What carries over</div>
    <div style="color:var(--body); font-size:0.68em; line-height:1.5;">A new subdomain gets a <strong>partial trust signal</strong> from the established <code>artsvilleusa.com</code> root — so it starts friendlier than a cold, unrelated domain. ActiveCampaign: a subdomain is <em>"managed as a separate domain from the base domain, with its own reputation."</em></div>
  </div>
  <div class="card" style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--t); font-size:0.76em; margin-bottom:4px;">What does NOT</div>
    <div style="color:var(--body); font-size:0.68em; line-height:1.5;">It does <strong>not</strong> inherit the root's full sending history — and it shouldn't: reputation <strong>isolation is the whole point</strong>. If a press blast ever stumbles, it stays off the Ghost newsletter. (We don't "inherit credit from Ghost" — Ghost doesn't send via AC.)</div>
  </div>
</div>

<div class="card" style="margin-top:14px; border-left:3px solid var(--a);">
<div style="color:var(--body); font-size:0.7em; line-height:1.5;"><strong>The key point:</strong> the new-domain cold start applies in <em>either</em> account — <code>mail.artsvilleusa.com</code> is new regardless. On AC's shared IPs, AC manages IP reputation; your job is domain reputation + engagement. What the existing Crewest account saves is the <strong>engaged lists to warm up <em>with</em></strong> — not a warm domain. The practical how-to is next.</div>
</div>

---

<!-- _class: bg-grid -->

### The practical part people get wrong

# How to warm up a cold list on AC

<div style="margin-top:8px;">
<div class="row" style="display:flex; gap:10px; align-items:flex-start; padding:5px 8px;"><span class="step" style="width:24px; height:24px; font-size:0.72em;">1</span><div style="color:var(--body); font-size:0.7em; line-height:1.4;"><strong>First 24–48h: don't send.</strong> Confirm DKIM/SPF/DMARC show green "Authenticated" first. A brand-new subdomain shouldn't send on day zero.</div></div>
<div class="row" style="display:flex; gap:10px; align-items:flex-start; padding:5px 8px;"><span class="step" style="width:24px; height:24px; font-size:0.72em;">2</span><div style="color:var(--body); font-size:0.7em; line-height:1.4;"><strong>Days 1–3 — seed to friendlies.</strong> Send the real template to <strong>yourselves + a "friendlies" list</strong> (team, board, partner orgs, a few warm journalists) — people who'll reliably <strong>open, click, and reply</strong>. Keep it under ~50–100. Ask a few to reply "hi" — replies are a strong trust signal.</div></div>
<div class="row" style="display:flex; gap:10px; align-items:flex-start; padding:5px 8px;"><span class="step" style="width:24px; height:24px; font-size:0.72em;">3</span><div style="color:var(--body); font-size:0.7em; line-height:1.4;"><strong>Days 3–7 — smallest real batches first.</strong> Send to your <strong>most-likely-to-open</strong> press contacts (recent, known relationships) in batches of a few hundred. Delete hard bounces immediately.</div></div>
<div class="row" style="display:flex; gap:10px; align-items:flex-start; padding:5px 8px;"><span class="step" style="width:24px; height:24px; font-size:0.72em;">4</span><div style="color:var(--body); font-size:0.7em; line-height:1.4;"><strong>Weeks 2–4 — ramp, never spike.</strong> Roughly double each successful send (AC: &lt;500 → &lt;1k → &lt;5k / day). A small press list clears this in a week or two.</div></div>
<div class="row" style="display:flex; gap:10px; align-items:flex-start; padding:5px 8px;"><span class="step" style="width:24px; height:24px; font-size:0.72em;">5</span><div style="color:var(--body); font-size:0.7em; line-height:1.4;"><strong>Watch + stay on-brand.</strong> Monitor <strong>Google Postmaster</strong> (Red/Yellow/Green) and bounce/complaint rates (keep complaints &lt;0.3%). Consistent ArtsvilleUSA branding + template. If reputation dips — slow down.</div></div>
</div>

<div style="margin-top:8px; color:var(--m); font-size:0.64em;">Ladder: <strong>ourselves → friendlies → most-engaged press → full list.</strong> Source: ActiveCampaign, "How to warm up a new sending domain."</div>

---

<!-- _class: bg-glow-orange -->

### The one thing to be careful about

# Don't disturb the root domain's existing mail

<div style="color: var(--body); font-size: 0.78em; line-height:1.6; margin-top:8px;">
Everything ActiveCampaign <em>authenticates</em> lives on the <strong>mail</strong> subdomain — safely isolated. But the <strong>Reply-To</strong> uses the root <code>artsvilleusa.com</code>, so ActiveCampaign may ask you to <em>verify</em> that domain too.
</div>

<div style="display:flex; gap:14px; margin-top:14px;">
  <div class="card" style="flex:1; border-left:3px solid var(--g);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--g); font-size:0.74em;">✓ Safe: ownership verification</div>
    <div style="color:var(--body); font-size:0.68em; line-height:1.5; margin-top:4px;">Reply-To only needs the root <strong>verified</strong> (click the email link AC sends). It does <em>not</em> need DKIM/SPF on the root. Zero risk to Ghost or Google Workspace mail.</div>
  </div>
  <div class="card" style="flex:1; border-left:3px solid var(--r);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--r); font-size:0.74em;">✗ Danger: don't duplicate root records</div>
    <div style="color:var(--body); font-size:0.68em; line-height:1.5; margin-top:4px;">Never add a <strong>second SPF</strong> record or a <strong>conflicting DMARC</strong> to the root. A domain may have only one of each. If AC ever prompts for root auth records, <strong>stop and coordinate</strong> — this is exactly the failure mode of <a href="https://github.com/JuergenB/ideas-inbox/tree/main/problems/001-curated-deliverability-nra">problems/001</a>.</div>
  </div>
</div>

---

<!-- _class: bg-grid -->

### While we're in the DNS — don't assume

# Re-verify every sending domain for 2024 rules

<div style="color: var(--body); font-size: 0.74em; line-height:1.5; margin-bottom:8px;">Gmail &amp; Yahoo's bulk-sender requirements (Feb 2024) are recent. A quick public-DNS pass across all four brand domains:</div>

| Domain | SPF | DMARC | Status |
|--------|-----|-------|--------|
| artsvilleusa.com | ✅ single, valid | ✅ p=none → editor@ | OK baseline |
| arterial.org | ✅ single, valid | ✅ p=none (no reports) | OK — add reporting |
| creweststudio.com | ✅ single, valid | ✅ p=none | OK baseline |
| **notrealart.com** | ⚠️ **10/10 lookups** | ❌ **two DMARC records** | **Broken — see next** |

<div style="margin-top: 12px; color: var(--m); font-size: 0.68em; line-height:1.5;">
The bar: one valid SPF (&lt;10 lookups) · DKIM · a DMARC record (≥ p=none) · one-click unsubscribe · &lt;0.3% complaints. DKIM needs per-sender selectors (not shown here). Full audit lives in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/problems/001-curated-deliverability-nra">problems/001</a>. Verify with DMARC Report · MXToolbox · Google Postmaster.
</div>

---

<!-- _class: bg-glow-orange -->

### Part 2 — for tomorrow's office hours

# notrealart.com is not set up for good delivery

<div style="display:flex; gap:14px; margin-top:10px;">
  <div class="card" style="flex:1; border-left:3px solid var(--r);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--r); font-size:0.74em;">Problem 1 — two DMARC records</div>
    <div style="color:var(--body); font-size:0.66em; line-height:1.45; margin-top:4px;">Two <code>v=DMARC1</code> records are published at once. Per spec, receivers then apply <strong>no DMARC at all</strong> — the domain is effectively unprotected right now.</div>
  </div>
  <div class="card" style="flex:1; border-left:3px solid var(--y);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--y); font-size:0.74em;">Problem 2 — SPF at the 10-lookup ceiling</div>
    <div style="color:var(--body); font-size:0.66em; line-height:1.45; margin-top:4px;">SPF resolves to <strong>exactly 10 DNS lookups</strong> (the RFC max). One nested change at any provider → <strong>PermError</strong> and SPF fails. Bloated with senders no longer in use.</div>
  </div>
</div>

<div style="margin-top:12px;">

| SPF term | Belongs to | Needed? |
|----------|-----------|---------|
| `include:_spf.google.com` | Google Workspace (MX = Google) | ✅ keep |
| `include:emsd1.com` | ActiveCampaign (IP → acems1.com) | ✅ keep |
| `include:spf.curated.co` | Curated.co (→ SparkPost) | ❌ dropped — now on AC |
| `include:spf.protection.outlook.com` | Microsoft 365 | ❌ legacy — confirm/remove |
| `+a` · `ip4:35.212.92.184` · `+mx` | GCP web server + Google MX | ❌ non-sending — remove |
| `include:…dnssmarthost.net` | SpamExperts / Mail Assure filter | ❔ confirm — likely remove |

</div>

<div style="margin-top:8px; color:var(--m); font-size:0.66em;">This matters now: open calls, exhibitions, and fundraising emails are going out via <code>@notrealart.com</code>.</div>

---

<!-- _class: bg-glow-green -->

### notrealart.com — the fix

# Proposed consolidation + who resolves it

<div style="display:flex; gap:14px; margin-top:10px;">
  <div class="card" style="flex:1;">
    <div style="color:var(--m); font-size:0.6em; letter-spacing:0.1em; text-transform:uppercase;">Target SPF — 2 lookups</div>
    <div style="color:var(--g); font-family:'IBM Plex Mono',monospace; font-size:0.62em; margin-top:6px; line-height:1.5; word-break:break-all;">v=spf1 include:_spf.google.com include:emsd1.com ~all</div>
    <div style="color:var(--body); font-size:0.62em; margin-top:8px; line-height:1.45;">Keep Google Workspace + ActiveCampaign. Drop Curated, M365, web-server, filter gateway (confirm each). Re-authenticate AC properly so alignment rides its Mailserver CNAME.</div>
  </div>
  <div class="card" style="flex:1;">
    <div style="color:var(--m); font-size:0.6em; letter-spacing:0.1em; text-transform:uppercase;">Target DMARC — one record</div>
    <div style="color:var(--g); font-family:'IBM Plex Mono',monospace; font-size:0.62em; margin-top:6px; line-height:1.5; word-break:break-all;">v=DMARC1; p=none; rua=mailto:…@dmarcinput.com; fo=1</div>
    <div style="color:var(--body); font-size:0.62em; margin-top:8px; line-height:1.45;">Delete the duplicate (keep DMARC-Report monitoring). Confirm DKIM per retained sender. Then step <code>p=none → quarantine → reject</code> over 2–4 weeks of clean reports.</div>
  </div>
</div>

<div style="margin-top:12px; color:var(--m); font-size:0.7em;">Who resolves it, the contact, and the ready-to-send email → next slide.</div>

---

<!-- _class: bg-glow-orange -->

### Who should work on this

# CloudFuze — and it's within their contract

<div style="display:flex; gap:14px; margin-top:12px;">
  <div class="card" style="flex:1; border-top:2px solid var(--a);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--a); font-size:0.78em;">Why them</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.5; margin-top:6px;">CloudFuze set up the <strong>GoDaddy DNS, ActiveCampaign, and email</strong> for these domains — they're the right party to correct the records they configured.</div>
  </div>
  <div class="card" style="flex:1; border-top:2px solid var(--g);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--g); font-size:0.78em;">The leverage</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.5; margin-top:6px;">Contract terminated with two months' notice — <strong>obligated through Aug 16, 2026</strong>. This is a correction of their own setup, <strong>within remaining scope</strong>, not new billable work.</div>
  </div>
  <div class="card" style="flex:1; border-top:2px solid var(--blue);">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--blue); font-size:0.78em;">Contact</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.5; margin-top:6px;"><strong>Joy Prakash</strong><br>Sr. Account Manager<br>joy.prakash@cloudfuze.com<br>+1 252 496 9316</div>
  </div>
</div>

<div class="card" style="margin-top:14px; border-left:3px solid var(--a);">
<div style="color:var(--body); font-size:0.72em; line-height:1.5;"><strong>📧 Ready-to-send email (Scott → CloudFuze):</strong> <a href="https://github.com/JuergenB/ideas-inbox/blob/main/problems/003-activecampaign-newsletter-artsvilleusa/docs/cloudfuze-notrealart-dns-remediation.md">docs/cloudfuze-notrealart-dns-remediation.md</a> — full technical appendix (current vs. target records). The ask: <strong>remove the duplicate DMARC, consolidate SPF, confirm DKIM per sender</strong>, and a completion date.</div>
</div>

---

<!-- _class: bg-glow-gold -->

### Habits that keep you in the inbox

# Deliverability do's & don'ts

<div style="display:flex; gap:16px; margin-top:14px;">
  <div style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--g); font-size:0.76em; margin-bottom:8px;">✓ Do</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.7;">
    • <strong>Warm up</strong> — start with smaller, engaged sends, ramp volume gradually.<br>
    • Keep <strong>From name = ArtsvilleUSA</strong>, consistent every send.<br>
    • Clean the list — remove hard bounces &amp; long-inactives.<br>
    • Make <strong>unsubscribe</strong> obvious (one click).
    </div>
  </div>
  <div style="flex:1;">
    <div style="font-family:'Outfit'; font-weight:600; color:var(--r); font-size:0.76em; margin-bottom:8px;">✗ Don't</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.7;">
    • Send from a <strong>free address</strong> (gmail.com) as the From — providers now reject it.<br>
    • Blast the full list cold on day one.<br>
    • Duplicate SPF/DMARC on the root domain.<br>
    • Buy or import unconsented lists.
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### Before you hit send for real

# Verification checklist

<div style="margin-top: 6px;">

| ✓ | Acceptance criterion |
|---|----------------------|
| ☐ | <code>mail.artsvilleusa.com</code> shows **green "Authenticated"** in ActiveCampaign |
| ☐ | DKIM, Mailserver/SPF, and DMARC records confirmed present at GoDaddy |
| ☐ | Root <code>artsvilleusa.com</code> **verified** (Reply-To) — with **no** duplicate SPF/DMARC added |
| ☐ | Ghost DNS records **untouched**; Ghost newsletter still sends normally |
| ☐ | Test campaign: From = subdomain, Reply-To = <code>editor@</code>, lands in **inbox** (not spam) |
| ☐ | A reply to the test lands in the monitored <code>editor@artsvilleusa.com</code> inbox |

</div>

<div style="margin-top: 12px; color: var(--m); font-size: 0.7em;">Send the first real test to a few internal addresses (Gmail + Outlook) and check the inbox placement and the "signed-by / mailed-by" header before any broad send.</div>

---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div style="font-family:'Outfit'; font-weight:600; font-size:0.62em; letter-spacing:0.22em; text-transform:uppercase; color:var(--a); margin-bottom:12px;">You've got this</div>

# One subdomain. Three records. Inbox-ready.

<div style="font-family:'Raleway'; font-weight:300; font-size:1.0em; color:var(--body); margin-top:14px; max-width:780px;">Add <strong>mail.artsvilleusa.com</strong> in ActiveCampaign, drop three records into GoDaddy, keep replies flowing to <strong>editor@artsvilleusa.com</strong> — and ArtsvilleUSA sends from ActiveCampaign with Ghost-level deliverability, without ever touching Ghost.</div>

<div style="margin-top:24px; color:var(--m); font-size:0.72em;">Questions on any step? Bring them to the team channel before you start — it's faster to check than to un-send.</div>

---

<!-- _class: bg-grid -->

# Sources & References
## The documentation behind every step in this guide

<div style="font-size: 0.6em; line-height: 1.45; margin-top: 8px;">

**AC sending-domain setup (Settings → Advanced; Configure vs. Manual; DKIM/SPF/DMARC; GoDaddy supported; 5–10 min propagation)** — ActiveCampaign, "Set up your sending domain." <a href="https://help.activecampaign.com/hc/en-us/articles/360015584680-Set-up-your-sending-domain">…/360015584680</a>

**A subdomain must share the root org-domain to align DMARC; align DKIM or Return-Path** — ActiveCampaign, "Domains and domain alignment." <a href="https://help.activecampaign.com/hc/en-us/articles/360014290939-Domains-and-domain-alignment">…/360014290939</a>

**A subdomain is managed as a separate domain with its own reputation; small cross-impact with the base** — ActiveCampaign, "Subdomains and deliverability." <a href="https://help.activecampaign.com/hc/en-us/articles/360017633519-Subdomains-and-deliverability">…/360017633519</a>

**Subdomains inherit only PARTIAL parent reputation and still need their own warm-up** — Suped, "Parent domain reputation &amp; subdomain deliverability." <a href="https://www.suped.com/knowledge/email-deliverability/sender-reputation/how-does-parent-domain-reputation-affect-subdomain-deliverability-and-sender-reputation">suped.com/…/subdomain-deliverability</a>

**Add a CNAME/TXT at GoDaddy (DNS → Add New Record; Name = prefix only; up to 48h)** — GoDaddy, "Add a CNAME record." <a href="https://www.godaddy.com/help/add-a-cname-record-19236">godaddy.com/help/add-a-cname-record-19236</a>

**Ghost "Email only" — send a post to members without publishing it to the website** — Ghost, "Send emails without publishing." <a href="https://ghost.org/changelog/email-without-publishing/">ghost.org/changelog/email-without-publishing</a>

**Gmail &amp; Yahoo 2024 bulk-sender rules (SPF+DKIM, DMARC, one-click unsubscribe, &lt;0.3% complaints)** — ActiveCampaign, "Google &amp; Yahoo 2024." <a href="https://www.activecampaign.com/blog/a-guide-to-google-and-yahoo-authentication-changes-in-2024">activecampaign.com/blog/…google-and-yahoo</a>

**Live SPF/DMARC lookup of all four domains; notrealart.com = duplicate DMARC + SPF at 10/10 lookups** — direct DNS query, 2026-07-08 (see research/sources.md).

</div>

<p style="font-size: 0.66em; color: var(--m); margin-top: 18px;">Full URLs, quotes, and retrieval dates for every claim: <a href="https://github.com/JuergenB/ideas-inbox/blob/main/problems/003-activecampaign-newsletter-artsvilleusa/research/sources.md">problems/003-…/research/sources.md</a>. Related cross-domain SPF/DKIM audit: <a href="https://github.com/JuergenB/ideas-inbox/tree/main/problems/001-curated-deliverability-nra">problems/001</a>.</p>
