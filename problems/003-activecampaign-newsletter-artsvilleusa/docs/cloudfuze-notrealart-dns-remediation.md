# Email to CloudFuze — notrealart.com DNS / deliverability remediation

**Purpose:** ready-to-send request for CloudFuze to correct the email-authentication issues on `notrealart.com` before their engagement ends. CloudFuze set up the GoDaddy DNS, ActiveCampaign, and email accounts; the contract has been terminated with two months' notice and remains in force **through August 16, 2026**, so this correction falls within their remaining scope.

**Send from:** Scott Power (scottpower@arterial.org)
**To:** Joy Prakash — Senior Account Manager, CloudFuze · joy.prakash@cloudfuze.com · +1 252 496 9316
**Cc:** Juergen Berkessel (juergen@polymash.com), Elise Wilson (elisewilson@artsvilleusa.com)

---

**Subject: notrealart.com email authentication — two issues to correct before handoff**

Hi Joy,

Before we close out the engagement (through August 16), we need CloudFuze to correct two email-authentication problems on **notrealart.com**. We're actively sending open-call, exhibition, and fundraising emails from `@notrealart.com`, so deliverability here matters right now. Both issues trace to the current GoDaddy DNS setup.

**Issue 1 — Two DMARC records are published.**
`_dmarc.notrealart.com` currently returns **two** separate `v=DMARC1` TXT records. Per the DMARC spec (RFC 7489), when more than one record exists, receivers apply **no DMARC policy at all** — so the domain is effectively unprotected today, and this is one of the exact conditions Gmail/Yahoo's 2024 sender rules penalize. Please remove the duplicate and leave a **single** DMARC record (keep the DMARC-reporting/monitoring address; drop the stray one).

**Issue 2 — SPF is at the maximum of 10 DNS lookups.**
The SPF record for notrealart.com resolves to **exactly 10 DNS lookups** — the hard limit in RFC 7208. Any one of the third-party includes adding a nested lookup will tip it to a **PermError**, at which point SPF fails outright. It's also carrying senders we no longer use. Please consolidate to only the senders we actually send from.

We've done the analysis below to make this fast. Please confirm the sender list with us, apply the target records, and confirm DKIM is valid for each retained sender. Could you let us know a timeline to complete this? Happy to hop on a call.

Thanks,
Scott

---

## Technical appendix (for CloudFuze)

### Current SPF (10/10 lookups)

```
notrealart.com  TXT  "v=spf1 +a +mx +ip4:35.212.92.184 include:_spf.google.com include:spf.curated.co include:spf.protection.outlook.com include:emsd1.com include:notrealart.com.spf.auto.dnssmarthost.net ~all"
```

| SPF term | Identified as | Action |
|----------|---------------|--------|
| `include:_spf.google.com` | Google Workspace (MX = `smtp.google.com`) | **Keep** |
| `include:emsd1.com` | ActiveCampaign (IP rDNS → `acems1.com`) | **Keep** (now our newsletter + press sender) |
| `include:spf.curated.co` | Curated.co → SparkPost | **Remove** — we've moved off Curated to ActiveCampaign |
| `include:spf.protection.outlook.com` | Microsoft 365 | **Remove** if unused — our MX is Google, not M365 (please confirm no M365 outbound) |
| `+a`, `ip4:35.212.92.184`, `+mx` | Website server (Google Cloud) + Google MX | **Remove** — web/MX hosts don't send our marketing mail; `+mx` duplicates the Google include |
| `include:notrealart.com.spf.auto.dnssmarthost.net` | SpamExperts / Mail Assure filter (→ `_spf.mailspamprotection.com`) | **Remove** if not an active outbound relay (please confirm) |

### Target SPF (≈2 lookups)

```
notrealart.com  TXT  "v=spf1 include:_spf.google.com include:emsd1.com ~all"
```

- Add back Microsoft 365 (`include:spf.protection.outlook.com`) **only** if we confirm M365 still sends outbound.
- For ActiveCampaign, the cleanest long-term setup is to authenticate `notrealart.com` inside the ActiveCampaign account (DKIM + a per-domain Mailserver/Return-Path CNAME). If you set that up, SPF alignment rides the Mailserver CNAME and the root SPF may only need Google Workspace. Please advise which you implement.

### Current DMARC (two records — invalid)

```
_dmarc.notrealart.com  TXT  "v=DMARC1; p=none; rua=mailto:1524dcaead6b.a@dmarcinput.com; ruf=mailto:1524dcaead6b.f@dmarcinput.com"
_dmarc.notrealart.com  TXT  "v=DMARC1; p=none; rua=mailto:sourdough@notrealart.com"
```

### Target DMARC (one record)

```
_dmarc.notrealart.com  TXT  "v=DMARC1; p=none; rua=mailto:1524dcaead6b.a@dmarcinput.com; ruf=mailto:1524dcaead6b.f@dmarcinput.com; fo=1; adkim=r; aspf=r"
```

- Keep the DMARC-reporting address that feeds our monitoring; delete the `sourdough@notrealart.com` record.
- Leave the policy at `p=none` during cleanup. Once SPF and DKIM are confirmed aligned across all retained senders, we'll step the policy up to `p=quarantine`, then `p=reject`.

### DKIM

- Please confirm a valid, published DKIM key for each **retained** sender:
  - **Google Workspace** — Google-generated DKIM selector published in GoDaddy.
  - **ActiveCampaign** — DKIM (and Mailserver/Return-Path) records from the ActiveCampaign sending-domain setup.
- We could not inspect DKIM externally (it requires the per-sender selector), so we need CloudFuze to verify these are in place.

### How we verified

All records above were read directly from public DNS on **2026-07-08**. SPF lookup count computed by recursively resolving every `include`/`a`/`mx`/`exists` term (RFC 7208 §4.6.4). This work is tracked alongside the broader cross-domain audit in [problems/001](../../001-curated-deliverability-nra/README.md).
