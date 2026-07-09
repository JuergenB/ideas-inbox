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

<!-- _class: bg-dots -->

### The situation — read this first

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

# Prerequisites — confirm these five first

<div style="margin-top: 10px;">

| # | What to confirm | Who / where |
|---|-----------------|-------------|
| 1 | **Admin access to ActiveCampaign** (Settings → Advanced is visible) | AC account owner |
| 2 | **Login to GoDaddy** for artsvilleusa.com's DNS (Domain Portfolio → DNS) | GoDaddy account holder |
| 3 | <code>editor@artsvilleusa.com</code> **exists and is monitored** — this becomes Reply-To | Confirm the inbox is real before using it |
| 4 | **Decide the From address** — we use <code>newsletter@mail.artsvilleusa.com</code> | Team convention |
| 5 | **Do not modify Ghost's DNS records** during this — leave anything Ghost/Mailgun untouched | Whole team |

</div>

<div style="margin-top: 14px; color: var(--m); font-size: 0.72em;">
⏱️ Budget ~20 minutes of work, then up to a few hours (occasionally 24–48h) for DNS to propagate before ActiveCampaign shows "Authenticated."
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
    <div style="color: var(--body); font-size: 0.68em; margin-top:8px; line-height:1.5;">Once green, <code>mail.artsvilleusa.com</code> is a verified, warmed-ready sender. DKIM, SPF and DMARC all align to the ArtsvilleUSA root domain.</div>
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
    <div style="font-family:'Outfit'; font-weight:600; color: var(--g); font-size: 0.95em; margin-top:4px;">editor@artsvilleusa.com</div>
    <div style="color: var(--body); font-size: 0.68em; margin-top:8px; line-height:1.5;">Where replies land. A real, monitored inbox on the main domain — so conversations reach a person, not a no-reply void.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--body); font-size: 0.76em; line-height:1.55;">
Set both in each campaign's email settings. The <strong>From name</strong> should read <em>ArtsvilleUSA</em> regardless of the technical address — that's what subscribers actually see.
</div>

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

<!-- _class: bg-dots -->

### Keeping both senders tidy

# Ghost and ActiveCampaign, in sync

<div style="display: flex; gap: 16px; margin-top: 16px;">
  <div class="card" style="flex: 1;">
    <div style="font-family:'Outfit'; font-weight:600; color: var(--t); font-size:0.8em; margin-bottom:6px;">Keep the lists aligned</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.55;">Sync Ghost members into ActiveCampaign (via Zapier or the API) so <strong>unsubscribes flow both ways</strong>. Someone who opts out of one should never keep getting the other.</div>
  </div>
  <div class="card" style="flex: 1;">
    <div style="font-family:'Outfit'; font-weight:600; color: var(--t); font-size:0.8em; margin-bottom:6px;">Divide the jobs clearly</div>
    <div style="color:var(--body); font-size:0.7em; line-height:1.55;">Decide what each tool is for — e.g. Ghost for the regular member newsletter, ActiveCampaign for announcements, automations, and segmented campaigns. Avoid double-sending the same content.</div>
  </div>
</div>

<div style="margin-top: 18px; color: var(--m); font-size: 0.74em; line-height:1.5;">
Both streams carry the ArtsvilleUSA brand; the only difference subscribers might notice is the technical sending domain in the header — which is normal and expected.
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

<div style="font-size: 0.7em; line-height: 1.55; margin-top: 8px;">

**ActiveCampaign sending-domain setup (Settings → Advanced; Configure vs. Manual; DKIM/SPF/DMARC records; GoDaddy supported; propagation 5–10 min, up to 24h)** — ActiveCampaign Help, "Set up your sending domain." <a href="https://help.activecampaign.com/hc/en-us/articles/360015584680-Set-up-your-sending-domain">help.activecampaign.com/…/360015584680</a>

**Domain alignment — From vs. Return-Path vs. DKIM; subdomain must share the root org-domain to align for DMARC; align DKIM or Return-Path to pass** — ActiveCampaign Help, "Domains and domain alignment." <a href="https://help.activecampaign.com/hc/en-us/articles/360014290939-Domains-and-domain-alignment">help.activecampaign.com/…/360014290939</a>

**Add a CNAME/TXT record at GoDaddy (Domain Portfolio → DNS → Add New Record; Name = prefix only, root auto-appended; TTL default; propagation up to 48h)** — GoDaddy Help, "Add a CNAME record." <a href="https://www.godaddy.com/help/add-a-cname-record-19236">godaddy.com/help/add-a-cname-record-19236</a>

**Email deliverability for publishers; using other providers alongside Ghost's native newsletters** — Ghost, "Email deliverability explained" &amp; Mailgun FAQ. <a href="https://ghost.org/resources/email-deliverability-for-publishers/">ghost.org/resources/email-deliverability-for-publishers</a>

**Gmail &amp; Yahoo 2024 bulk-sender authentication requirements (DKIM + DMARC + no freemail From)** — ActiveCampaign, "Google and Yahoo authentication changes in 2024." <a href="https://www.activecampaign.com/blog/a-guide-to-google-and-yahoo-authentication-changes-in-2024">activecampaign.com/blog/…google-and-yahoo…</a>

</div>

<p style="font-size: 0.66em; color: var(--m); margin-top: 18px;">Full URLs, quotes, and retrieval dates for every claim: <a href="https://github.com/JuergenB/ideas-inbox/blob/main/problems/003-activecampaign-newsletter-artsvilleusa/research/sources.md">problems/003-…/research/sources.md</a>. Related cross-domain SPF/DKIM audit: <a href="https://github.com/JuergenB/ideas-inbox/tree/main/problems/001-curated-deliverability-nra">problems/001</a>.</p>
