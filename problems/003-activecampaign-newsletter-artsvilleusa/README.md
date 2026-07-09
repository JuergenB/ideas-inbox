# Sending ArtsvilleUSA Newsletters from ActiveCampaign

**Status:** Ready to implement — team setup guide
**Filed:** 2026-07-08
**Domain in scope:** artsvilleusa.com (sending subdomain: `mail.artsvilleusa.com`)
**Tools:** ActiveCampaign (email) · GoDaddy (DNS) · Ghost(Pro) (existing newsletter — unchanged)
**Related:** [problems/001 — Curated.co deliverability + cross-domain SPF/DKIM audit](../001-curated-deliverability-nra/README.md)

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/activecampaign-newsletter-artsvilleusa-slide-1.png" width="820" alt="Sending Newsletters from ActiveCampaign — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/problems/003-activecampaign-newsletter-artsvilleusa/exports/activecampaign-newsletter-setup.html) — print to PDF from the browser if you need an offline copy.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, verbatim quotes, and retrieval dates for every step cited in the deck.

---

# Plain-English summary

**TL;DR.** ArtsvilleUSA can send newsletters and announcements from ActiveCampaign *with strong deliverability* by giving ActiveCampaign its own authenticated sending address on a `mail.artsvilleusa.com` subdomain — a one-time setup done in ActiveCampaign and GoDaddy. The existing Ghost(Pro) newsletter is **not touched** and keeps working exactly as it does today. This brief plus the linked deck is the step-by-step guide the team can follow.

**Why this is needed.** Modern email systems (Gmail, Outlook, Yahoo) send any newsletter to spam unless the *sending domain* is cryptographically authenticated — proven to belong to you via DNS records (SPF, DKIM, DMARC). Ghost's authentication only covers mail sent *through Ghost*. ActiveCampaign is a separate mail stream, so it needs its **own** authenticated identity. You don't need access to Ghost's DNS to set this up — you only need the DNS records you already control for artsvilleusa.com at GoDaddy.

**What we're doing.** Add `mail.artsvilleusa.com` as a verified sending domain in ActiveCampaign, add the three DNS records it provides at GoDaddy, and send campaigns *from* `newsletter@mail.artsvilleusa.com` with **replies going to `editor@artsvilleusa.com`** — a real, monitored inbox — so subscribers always reach a person. Because the subdomain shares the `artsvilleusa.com` root, ActiveCampaign's authentication "aligns" and passes the Gmail/Yahoo requirements.

**What this does NOT do.** It does not change, replace, or risk the Ghost newsletter. It does not require adding a second SPF record or a conflicting DMARC record to the main `artsvilleusa.com` domain — and it must not (that's the failure mode we're already cleaning up in [problems/001](../001-curated-deliverability-nra/README.md)).

**The one decision to confirm.** `editor@artsvilleusa.com` must be a real, monitored inbox before it's used as the reply address. If a different inbox is preferred, swap it in — everything else stays the same.

---

# The setup, step by step

The deck is the shareable walk-through; this is the same content in text so it's greppable and linkable.

## Prerequisites (confirm all five first)

1. **Admin access to ActiveCampaign** — Settings → Advanced is visible.
2. **GoDaddy login** for artsvilleusa.com DNS (Domain Portfolio → DNS).
3. **`editor@artsvilleusa.com` exists and is monitored** — this becomes the Reply-To.
4. **From address decided** — we standardize on `newsletter@mail.artsvilleusa.com`.
5. **Do not modify Ghost's DNS records** at any point.

## Step 1 — ActiveCampaign: add the sending domain

- **Settings (gear) → Advanced → "Sending Domain"** section.
- Enter `mail.artsvilleusa.com` (no `https://`).
- Choose a method:
  - **"Configure Domain" (automated)** — GoDaddy *is* supported. ActiveCampaign logs into GoDaddy with your credentials and writes the records for you. Fastest.
  - **"Set up manually"** — ActiveCampaign verifies via an email link, then shows a table of DNS records to add at GoDaddy yourself (Step 2). Preferred if you'd rather not hand ActiveCampaign your GoDaddy login.

## Step 2 — GoDaddy: add the records (manual path)

GoDaddy → **Domain Portfolio** → select `artsvilleusa.com` → **DNS** → **Add New Record**. ActiveCampaign provides three:

| Record | Type | Purpose |
|--------|------|---------|
| DKIM (e.g. `acdkim1._domainkey…`) | CNAME | Cryptographically signs the mail |
| Mailserver / Return-Path (e.g. `em…`) | CNAME | Passes SPF, aligns the return domain |
| DMARC | TXT | How inbox providers handle unauthenticated mail |

> **⚠️ The #1 mistake — the "Name" field.** GoDaddy automatically appends `.artsvilleusa.com` to whatever you type in **Name**. Since these records belong to the **mail** subdomain, a Name ActiveCampaign shows as `acdkim1._domainkey` becomes `acdkim1._domainkey.mail` in GoDaddy. Match the format of your existing records; never paste the root domain twice. Copy each **Value** exactly; leave **TTL** at default (1 hour) or set `600`. GoDaddy may ask for a 2-step verification code on save.

## Step 3 — verify

- Back in ActiveCampaign: **Settings → Advanced → Sending Domains**, open the dropdown, click **"Recheck Authentication."**
- Propagation is usually **5–10 minutes**, occasionally up to **24–48 hours**. Recheck periodically.
- Success = green **"Authenticated."** If stalled, use **"View DNS Records"** to compare or **"Resolve Issues."**

## Step 4 — set From and Reply-To on campaigns

- **From:** `newsletter@mail.artsvilleusa.com` (the authenticated identity).
- **Reply-To:** `editor@artsvilleusa.com` (monitored inbox on the main domain).
- **From name:** `ArtsvilleUSA` — what subscribers actually see.

## The one thing to be careful about

Everything ActiveCampaign *authenticates* lives on the **mail** subdomain — isolated and safe. The **Reply-To** uses the root `artsvilleusa.com`, so ActiveCampaign may ask you to **verify** the root too:

- ✅ **Safe:** Reply-To only needs the root **verified** (click the email link). It does **not** need DKIM/SPF on the root — zero risk to Ghost or Google Workspace mail.
- ❌ **Danger:** never add a **second SPF** record or a **conflicting DMARC** to the root. A domain may have only one of each. If ActiveCampaign ever prompts for root authentication records, **stop and coordinate** — this is exactly the failure mode of [problems/001](../001-curated-deliverability-nra/README.md).

## Keeping Ghost and ActiveCampaign in sync

- Sync Ghost members into ActiveCampaign (Zapier or API) so **unsubscribes flow both ways**.
- Divide the jobs: e.g. Ghost for the regular member newsletter, ActiveCampaign for announcements, automations, and segmented campaigns. Don't double-send.

## Deliverability do's & don'ts

- **Do:** warm up gradually, keep From name consistent, clean bounces/inactives, one-click unsubscribe.
- **Don't:** send from a freemail (gmail.com) From address, blast the full list cold, duplicate root SPF/DMARC, import unconsented lists.

---

# Verification checklist (acceptance criteria)

- [ ] `mail.artsvilleusa.com` shows green **"Authenticated"** in ActiveCampaign.
- [ ] DKIM, Mailserver/SPF, and DMARC records confirmed present at GoDaddy.
- [ ] Root `artsvilleusa.com` **verified** (Reply-To) with **no** duplicate SPF/DMARC added.
- [ ] Ghost DNS records untouched; Ghost newsletter still sends normally.
- [ ] Test campaign: From = subdomain, Reply-To = `editor@`, lands in **inbox** (Gmail + Outlook), not spam.
- [ ] A reply to the test lands in the monitored `editor@artsvilleusa.com` inbox.

---

*Sources and verbatim documentation quotes: [research/sources.md](research/sources.md). ActiveCampaign and GoDaddy help pages retrieved 2026-07-08; re-verify exact menu labels if they've been renamed.*
