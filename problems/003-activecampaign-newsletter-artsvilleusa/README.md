# ArtsvilleUSA Email Sending via ActiveCampaign

**Status:** Ready to implement — team decision + setup guide (for Thursday team meeting & office hours)
**Filed:** 2026-07-08
**Domain in scope:** artsvilleusa.com (sending subdomain: `mail.artsvilleusa.com`) — plus a deliverability re-check of notrealart.com, arterial.org, creweststudio.com
**Tools:** ActiveCampaign (email) · GoDaddy (DNS) · Ghost(Pro) (existing newsletter — unchanged)
**Related:** [problems/001 — Curated.co deliverability + cross-domain SPF/DKIM audit](../001-curated-deliverability-nra/README.md)

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/activecampaign-newsletter-artsvilleusa-slide-1.png" width="820" alt="Sending Newsletters from ActiveCampaign — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup.html) — print to PDF from the browser if you need an offline copy.
**📄 CloudFuze remediation email (ready to send):** [docs/cloudfuze-notrealart-dns-remediation.md](docs/cloudfuze-notrealart-dns-remediation.md) — technical fix request for notrealart.com.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, verbatim quotes, retrieval dates, and the raw DNS analysis.

---

# Plain-English summary

**TL;DR.** ArtsvilleUSA needs an all-purpose email-sending channel — **fundraising, announcements, exhibition promos, open calls, and press releases** to its lists. The right tool is ActiveCampaign — but it won't send until the sending domain is authenticated. We authenticate a `mail.artsvilleusa.com` subdomain (a generic, all-purpose name — one-time setup in ActiveCampaign + GoDaddy), send *From* that subdomain with replies going to a monitored ArtsvilleUSA inbox, and warm the list up gradually. The Ghost(Pro) member newsletter is **not touched**. Two decisions need the team: **which ActiveCampaign account** to send from, and **who owns press replies**. Separately, a DNS check surfaced a real deliverability problem on **notrealart.com** that CloudFuze should fix before their engagement ends.

**Why this is needed.** Modern email systems (Gmail, Outlook, Yahoo — tightened Feb 2024) send list mail to spam unless the *sending domain* is authenticated (SPF, DKIM, DMARC). Sending a press blast from a personal or Crewest inbox risks a sender-reputation hit and lacks list tooling. Ghost's authentication only covers mail sent *through Ghost*. ActiveCampaign is a separate mail stream and needs its **own** authenticated identity — on a domain we control at GoDaddy.

**What this does NOT do.** It does not change or risk the Ghost newsletter, and it must **not** add a second SPF or a conflicting DMARC to the root `artsvilleusa.com` (that's the failure mode we're cleaning up in [problems/001](../001-curated-deliverability-nra/README.md)).

**Decisions to confirm (Thursday):**
1. **Which AC account** — the existing warmed Crewest Studio account (lists already synced) vs. the new cold Arterial/AV account Scott set up.
2. **Reply-To owner** — press replies likely need **Elise** (ED); `editor@artsvilleusa.com` (Morgan) is the editorial inbox. Whoever it is, validate the address in AC.

---

# Why we're doing this

- **The need — all-purpose:** one tool for fundraising, announcements, exhibition promos, open calls, and press releases, sent to our lists (press contacts, members, donors) — list email, not one-off personal notes.
- **Why not personal/Crewest email:** reputation hit + no list tooling. Scott's direction: don't use the Crewest AC account for AV.
- **The account Scott set up:** a dedicated ActiveCampaign account for Arterial/ArtsvilleUSA (see the account decision below).
- **The blocker this clears:** AC won't send until the sending domain is authenticated in DNS.

# The options — and why we lean ActiveCampaign

| Option | What it is | Trade-off |
|--------|-----------|-----------|
| **A · ActiveCampaign** *(recommended)* | Purpose-built for list sending: segments, automations, reply tracking, list management, unsubscribe handling — the long-term home for all AV email | One-time domain auth + a short warm-up (this guide) |
| **B · Ghost "Email only"** | Lay the email out in Ghost and publish as **Email only** — sends to members, **never appears on the site**. Ghost handles all authentication → **zero DNS work** | Recipients must be Ghost members; you lose AC's outreach tooling. Good **interim** — can go out today while the AC subdomain warms up |

*Two real options: ActiveCampaign vs. Ghost "Email only" (a documented publish → Email only feature). Which AC **account** — warmed Crewest vs. new Arterial — is the separate decision below.*

# Open decision: which ActiveCampaign account?

- **Existing Crewest Studio AC:** the real advantage is that our **lists — and their in-account engagement history — already live here**, so we can send-to-most-engaged-first and skip re-importing. Downside: entangles AV with the Crewest account being wound down.
- **New Arterial/AV AC:** clean ownership, likely a nonprofit account, aligned with Scott's direction. Downside: **re-import contacts** — they arrive with no in-account engagement history to segment on.
- **Myth-buster (important):** a "warm" Crewest account does **not** make `mail.artsvilleusa.com` warm. Mailbox-provider reputation attaches to the **sending domain** (and, on AC's shared IPs, to AC's pool — not to your account), and that subdomain is **brand-new either way** → identical DKIM/SPF setup and identical warm-up in both accounts. *Exception:* if an account has a **dedicated IP**, that IP warmth is account-specific — worth checking.
- **So the real trade to discuss tomorrow:** keep existing lists + engagement history (Crewest) vs. clean nonprofit ownership + re-imported lists (Arterial). **If the lists migrate cleanly, the Crewest edge mostly evaporates.** Whatever we pick, if it's the new account we all commit to the full warm-up; either way `mail.artsvilleusa.com` is new and must warm up.

---

# The setup, step by step

## Prerequisites (confirm before you start)

1. **Which AC account** sends AV — warmed Crewest vs. new Arterial (decide Thursday).
2. **Admin access** to the chosen ActiveCampaign account (Settings → Advanced visible).
3. **GoDaddy login** for artsvilleusa.com DNS (Domain Portfolio → DNS).
4. **From address** — e.g. `newsletter@mail.artsvilleusa.com` (or `press@mail.artsvilleusa.com`).
5. **Reply-To owner** validated in AC — press → likely **Elise** (`elisewilson@artsvilleusa.com`); `editor@` = Morgan for editorial.
6. **Do not modify Ghost's DNS records** at any point.

## Step 1 — ActiveCampaign: add the sending domain

- **Settings (gear) → Advanced → "Sending Domain"** section. Enter `mail.artsvilleusa.com` (no `https://`).
- **"Configure Domain" (automated)** — GoDaddy *is* supported; AC logs into GoDaddy and writes the records. Fastest.
- **"Set up manually"** — AC verifies via an email link, then shows the DNS records to add at GoDaddy yourself (Step 2). Preferred if you'd rather not hand AC your GoDaddy login.

## Step 2 — GoDaddy: add the records (manual path)

GoDaddy → **Domain Portfolio** → select `artsvilleusa.com` → **DNS** → **Add New Record**. AC provides three:

| Record | Type | Purpose |
|--------|------|---------|
| DKIM (e.g. `acdkim1._domainkey…`) | CNAME | Cryptographically signs the mail |
| Mailserver / Return-Path (e.g. `em…`) | CNAME | Passes SPF, aligns the return domain |
| DMARC | TXT | How inbox providers handle unauthenticated mail |

> **⚠️ The #1 mistake — the "Name" field.** GoDaddy appends `.artsvilleusa.com` to whatever you type in **Name**. Since these records belong to the **mail** subdomain, a Name AC shows as `acdkim1._domainkey` becomes `acdkim1._domainkey.mail` in GoDaddy. Copy each **Value** exactly; leave **TTL** at default (1 hour) or `600`. GoDaddy may ask for a 2-step verification code.

## Step 3 — verify

- AC → **Settings → Advanced → Sending Domains**, open the dropdown, click **"Recheck Authentication."** Propagation is usually **5–10 min** (up to 24–48h). Success = green **"Authenticated."**

## Step 4 — set From and Reply-To on campaigns

- **From:** `newsletter@mail.artsvilleusa.com` (the authenticated identity).
- **Reply-To:** the press-response owner — likely **`elisewilson@artsvilleusa.com`** (confirm Thursday); validate it in AC. `editor@` (Morgan) is editorial.
- **From name:** `ArtsvilleUSA`.

## The one thing to be careful about (the root domain)

- ✅ **Safe:** Reply-To only needs the root **verified** (click the email link) — no DKIM/SPF on the root, zero risk to Ghost or Google Workspace.
- ❌ **Danger:** never add a **second SPF** or a **conflicting DMARC** to the root. If AC ever prompts for root authentication records, **stop and coordinate** — the [problems/001](../001-curated-deliverability-nra/README.md) failure mode.

---

# Warming up a cold list on ActiveCampaign

A new subdomain (and a possibly-new cold AC account) earns its **own** reputation — it does not inherit Ghost's sending history (Ghost doesn't send via AC), and that isolation is the point. Practical ladder — **ourselves → friendlies → most-engaged press → full list:**

1. **First 24–48h: don't send.** Confirm DKIM/SPF/DMARC are green "Authenticated" first.
2. **Days 1–3 — seed to friendlies.** Send the real template to yourselves + a "friendlies" list (team, board, partner orgs, a few warm journalists) who'll reliably open, click, and reply. Keep it under ~50–100; a few replies are a strong trust signal.
3. **Days 3–7 — smallest real batches.** Send to your most-likely-to-open press contacts (recent, known relationships) in batches of a few hundred. Delete hard bounces immediately.
4. **Weeks 2–4 — ramp, never spike.** Roughly double each successful send (AC guide: <500 → <1,000 → <5,000/day). A small press list clears this in a week or two.
5. **Watch + stay on-brand.** Monitor Google Postmaster (Red/Yellow/Green) and bounce/complaint rates (<0.3% complaints). Consistent ArtsvilleUSA branding/template. If reputation dips — slow down.

*Source: ActiveCampaign, "How to warm up a new sending domain."*

---

# While we're in the DNS — re-verify every sending domain

Gmail & Yahoo's 2024 bulk-sender rules are recent — don't assume prior setups comply. A quick public-DNS pass (2026-07-08):

| Domain | SPF | DMARC | Status |
|--------|-----|-------|--------|
| artsvilleusa.com | ✅ single, valid | ✅ p=none → editor@ | OK baseline |
| arterial.org | ✅ single, valid | ✅ p=none (no reporting) | OK — add reporting address |
| creweststudio.com | ✅ single, valid | ✅ p=none | OK baseline |
| **notrealart.com** | ⚠️ **10/10 lookups** | ❌ **two DMARC records** | **Broken — see below** |

The bar: one valid SPF (<10 lookups) · DKIM · a DMARC record (≥ p=none) · one-click unsubscribe · <0.3% complaints. Full cross-domain audit: [problems/001](../001-curated-deliverability-nra/README.md).

## notrealart.com — the problems

This matters now: open calls, exhibitions, and fundraising emails are going out via `@notrealart.com`.

- **Problem 1 — two DMARC records.** Two `v=DMARC1` records are published at `_dmarc.notrealart.com`. Per RFC 7489, receivers then apply **no DMARC at all** — the domain is effectively unprotected.
- **Problem 2 — SPF at exactly 10/10 DNS lookups** (the RFC 7208 max). One nested change at any provider → **PermError** and SPF fails. It's carrying senders we no longer use.

**SPF sender inventory (identified from live DNS):**

| SPF term | Belongs to | Needed? |
|----------|-----------|---------|
| `include:_spf.google.com` | Google Workspace (MX = `smtp.google.com`) | ✅ keep |
| `include:emsd1.com` | ActiveCampaign (IP rDNS → `acems1.com`) | ✅ keep |
| `include:spf.curated.co` | Curated.co → SparkPost | ❌ dropped — moved to AC |
| `include:spf.protection.outlook.com` | Microsoft 365 | ❌ legacy (MX is Google) — confirm/remove |
| `+a` · `ip4:35.212.92.184` · `+mx` | Website server (Google Cloud) + Google MX | ❌ non-sending — remove |
| `include:…dnssmarthost.net` | SpamExperts / Mail Assure filter | ❔ confirm — likely remove |

## notrealart.com — the fix

- **Target SPF (≈2 lookups):** `v=spf1 include:_spf.google.com include:emsd1.com ~all` (keep Google Workspace + ActiveCampaign; add M365 back only if confirmed in use).
- **Target DMARC (one record):** delete the duplicate, keep the DMARC-Report monitoring address, `p=none` now → `quarantine` → `reject` over 2–4 weeks of clean reports.
- **DKIM:** confirm a valid key per retained sender (Google Workspace, ActiveCampaign).
- **Who fixes it — CloudFuze.** They set up GoDaddy/AC/email. Contract terminated with notice but **obligated through Aug 16, 2026** — within remaining scope. Contact: **Joy Prakash**, Sr. Account Manager · joy.prakash@cloudfuze.com · +1 252 496 9316. **Ready-to-send email:** [docs/cloudfuze-notrealart-dns-remediation.md](docs/cloudfuze-notrealart-dns-remediation.md).

---

# Verification checklist (acceptance criteria)

**ArtsvilleUSA / ActiveCampaign:**
- [ ] Account decision made (warmed Crewest vs. new Arterial) and everyone agrees on warm-up if cold.
- [ ] `mail.artsvilleusa.com` shows green **"Authenticated"** in AC; DKIM/Mailserver/DMARC present at GoDaddy.
- [ ] Root `artsvilleusa.com` **verified** (Reply-To) with **no** duplicate SPF/DMARC added.
- [ ] Ghost DNS untouched; Ghost newsletter still sends normally.
- [ ] Reply-To owner (Elise?) validated in AC; a test reply lands in that inbox.
- [ ] Warm-up ladder started (ourselves → friendlies → engaged press → full list); Google Postmaster green.
- [ ] Test campaign lands in inbox (Gmail + Outlook), not spam.

**notrealart.com (via CloudFuze):**
- [ ] Duplicate DMARC removed — single record remains.
- [ ] SPF consolidated to active senders, well under 10 lookups.
- [ ] DKIM confirmed for each retained sender; DMARC stepped toward `quarantine`/`reject`.

---

*Sources, verbatim quotes, and the raw DNS analysis: [research/sources.md](research/sources.md). ActiveCampaign, GoDaddy, and Ghost help pages retrieved 2026-07-08; DNS read live 2026-07-08. Re-verify exact menu labels if they've been renamed.*
