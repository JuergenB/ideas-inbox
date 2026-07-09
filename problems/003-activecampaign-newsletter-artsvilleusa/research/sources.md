# Sources & References — ActiveCampaign newsletter setup for ArtsvilleUSA

Audit trail for every technical claim in the deck and README. Each entry: the claim, the source, the URL, retrieval date, and a verbatim quote where useful. All ActiveCampaign and GoDaddy pages were retrieved via Firecrawl on **2026-07-08** (the help centers 403 direct fetches).

---

## ActiveCampaign sending-domain setup: menu path, two methods, records, propagation

- **Claim:** Sending domains are set up under **Settings (gear) → Advanced → "Sending Domain"**, which offers **"Configure Domain"** (automated) and **"Set up manually."** Setting up a sending domain covers **DKIM, SPF (Mailserver Domain), and DMARC** together. GoDaddy is a supported provider for the automated flow. DNS typically propagates in **5–10 minutes**, occasionally up to **24 hours**.
- **Source:** ActiveCampaign Help — "Set up your sending domain"
- **URL:** https://help.activecampaign.com/hc/en-us/articles/360015584680-Set-up-your-sending-domain
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Quotes:**
  - "The sending domain section is on your account's Advanced Settings page… 1. Click Settings (Gear icon). 2. … Click Advanced. 3. Two options appear in the 'Sending Domain' section, 'Configure Domain' and 'Set up manually.'"
  - "Setting up a sending domain covers everything you need for DKIM, SPF, and DMARC."
  - "You need to verify the domain you'll use in both your 'From' and 'Reply-to' email addresses."
  - "Typically, the DNS record propagates in 5 to 10 minutes, but in rare cases, it can take up to 24 hours."
  - GoDaddy appears in the "Configure Domain" supported DNS providers list.
- **Used in deck:** slides 7 (Step 1), 8 (Step 2), 9 (Step 3), 11 (root verification)

## Domain alignment — subdomain must share the root organizational domain

- **Claim:** For DMARC to pass, the Return-Path **or** the DKIM domain must match the From-address domain; you only need to align one. In relaxed mode the MailFrom and From domains must share the same **root (organizational) domain** — so a From on `mail.artsvilleusa.com` aligns with the `artsvilleusa.com` root. The From address is the domain inbox providers use to track reputation.
- **Source:** ActiveCampaign Help — "Domains and domain alignment"
- **URL:** https://help.activecampaign.com/hc/en-us/articles/360014290939-Domains-and-domain-alignment
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Quotes:**
  - "For DMARC to pass, the Return Path or the DKIM domain must match the From address domain. You only need to align one of these domains."
  - "In relaxed mode, the MailFrom domain and From domain must have the same root domain (Organizational Domain)… What is essential is that the root domains align."
  - "This [From address] is the most important domain in your messages because it's the domain your subscribers see… and the primary domain email providers use to track your reputation."
- **Used in deck:** slides 3 (concept), 5 (plan), 10 (From/Reply-To)

## Only one SPF / one DMARC per domain; Mailserver Domain uses a subdomain CNAME

- **Claim:** Authentication records must not be duplicated on the root. The Mailserver Domain (Return-Path/SPF alignment) is set up as a CNAME on a subdomain; you can have many Mailserver Domains (one per sending domain). Adding a second SPF record or a conflicting DMARC to a domain breaks authentication — the failure mode documented in problems/001.
- **Source:** ActiveCampaign Help — "Custom domain name versus Mailserver Domain"
- **URL:** https://help.activecampaign.com/hc/en-us/articles/115000999524-Custom-domain-name-versus-Mailserver-Domain
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Quotes:**
  - "When you set up authentication with ActiveCampaign, you set up a CNAME for a Mailserver Domain. Doing so points your domain to us so that we can use your domain as the Return Path domain, passing SPF."
  - "You can only have one domain alias per account, but you can have as many Mailserver Domains as you want. One to match with each sending domain."
- **Cross-reference:** [problems/001 — Curated.co deliverability + cross-domain SPF/DKIM audit](../../001-curated-deliverability-nra/README.md) (malformed single-SPF record was a root cause there)
- **Used in deck:** slide 11 (don't disturb the root)

## GoDaddy — adding a CNAME/TXT record; Name is prefix-only (root auto-appended)

- **Claim:** In GoDaddy: **Domain Portfolio → select domain → DNS → Add New Record → choose Type (CNAME/TXT) → Name (host prefix, without the domain) → Value → TTL → Save.** GoDaddy appends the root domain to the **Name**, so a record for the `mail` subdomain must include `.mail` in the Name field. Domain Protection / 2-step verification may prompt for a code on save. Changes usually take effect within an hour, up to 48 hours globally.
- **Source:** GoDaddy Help — "Add a CNAME record"
- **URL:** https://www.godaddy.com/help/add-a-cname-record-19236
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Quotes:**
  - "Select **DNS** to view your DNS records. Select **Add New Record** and then select **CNAME** from the **Type** menu."
  - "**Name**: The hostname or prefix of the record, without the domain name, such as blog or shop."
  - "Most DNS changes take effect within an hour but could take up to 48 hours to update globally."
- **Used in deck:** slide 8 (Step 2 — the "Name" gotcha)

## Ghost(Pro) manages its own authenticated sending; other providers can run in parallel

- **Claim:** Ghost(Pro) sends newsletters via its own authenticated infrastructure (Mailgun), and Ghost supports using other providers alongside its native newsletters. Deliverability depends on proper SPF/DKIM/DMARC on each chosen sending domain — so ActiveCampaign needs its own, independent of Ghost's DNS.
- **Source:** Ghost — "Email deliverability explained for publishers"; Ghost Docs — "Why do I have to set up Mailgun?"
- **URLs:**
  - https://ghost.org/resources/email-deliverability-for-publishers/
  - https://docs.ghost.org/faq/mailgun-newsletters
- **Retrieved:** 2026-07-08
- **Used in deck:** slides 2 (situation), 12 (Ghost + AC in sync)

## Gmail & Yahoo 2024 bulk-sender authentication requirements

- **Claim:** As of February 2024, Gmail and Yahoo require DKIM and DMARC authentication for bulk senders and reject unauthenticated / freemail-From mail. This is why the From address cannot be a gmail.com address and why authenticating the sending domain is mandatory, not optional.
- **Source:** ActiveCampaign — "A Guide to Google and Yahoo authentication changes in 2024"
- **URL:** https://www.activecampaign.com/blog/a-guide-to-google-and-yahoo-authentication-changes-in-2024
- **Retrieved:** 2026-07-08
- **Quote (from AC alignment doc):** "Aligning either the DKIM or Mailserver Domain is required as of February 2024 following upcoming changes to Gmail and Yahoo regarding authentication requirements."
- **Used in deck:** slides 2, 13 (do's & don'ts)

## Subdomains have their own reputation; warm-up applies to the subdomain you send from

- **Claim:** A subdomain is managed as a separate domain from the base domain, **with its own reputation**. Subdomain reputation has only a small cross-impact on the base domain. Subdomains are not a way to dodge a bad reputation — they differentiate mail streams while keeping a clear relationship to the root.
- **Source:** ActiveCampaign Help — "Subdomains and deliverability"
- **URL:** https://help.activecampaign.com/hc/en-us/articles/360017633519-Subdomains-and-deliverability
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Quotes:**
  - "The domain owner can assign a subdomain to a specific email type and manage this as a separate domain from their base domain (with its own reputation)."
  - "Your subdomain reputation(s) can impact base domain reputation, but the impact between subdomains will be small."
  - "Subdomains are not a way to avoid a bad domain reputation."
- **Used in deck:** "Does the subdomain need warming up?" slide

## Subdomains inherit only partial parent reputation and still require separate warm-up

- **Claim:** A new subdomain gets a partial trust signal from a strong parent domain but is still treated by mailbox providers as an unknown sender; it must build its own history and needs its own warm-up. Skipping warm-up lands the first production-size send in spam regardless of parent reputation.
- **Source:** Suped — "How does parent domain reputation affect subdomain deliverability and sender reputation?"
- **URL:** https://www.suped.com/knowledge/email-deliverability/sender-reputation/how-does-parent-domain-reputation-affect-subdomain-deliverability-and-sender-reputation
- **Retrieved:** 2026-07-08 (WebSearch)
- **Used in deck:** warm-up slides

## ActiveCampaign warm-up best practices (ramp schedule + engaged-first)

- **Claim:** Warm up a new sending domain by starting low and ramping volume; send to the most engaged contacts first; avoid old/unengaged lists; set up DKIM before sending; wait ~30 days before high-volume campaigns; monitor Google Postmaster Tools. Small lists only need to worry about the first week.
- **Source:** ActiveCampaign Help — "How to warm up a new sending domain"
- **URL:** https://help.activecampaign.com/hc/en-us/articles/11874237112988-How-to-warm-up-a-new-sending-domain
- **Retrieved:** 2026-07-08 (Firecrawl)
- **Verbatim ramp example:** "Day 1: < 500 emails · Day 2: < 1,000 · Day 3-7: < 5,000 · Day 7-14: < 20,000 · Day 14-21: < 50,000 · Day 21-30: < 100,000. If you don't have a large list, you only need to worry about the first week or so."
- **Quote:** "When you start warming up your domain, target your most engaged contacts… avoid sending to any lists that are older and less engaged."
- **Used in deck:** "How to warm up a cold press list on AC" slide

## Ghost "Email only" — send to members without publishing to the website

- **Claim:** Ghost lets you publish a post as **Email only**, sending it to newsletter members without creating a public web page. Ghost handles authentication for anything sent through it, so this needs no DNS work.
- **Source:** Ghost — "Send emails without publishing" (changelog) and Ghost Help — "Setting up email newsletters"
- **URLs:**
  - https://ghost.org/changelog/email-without-publishing/
  - https://ghost.org/help/setup-email-newsletters/
- **Retrieved:** 2026-07-08 (WebSearch)
- **Used in deck:** "The options" slide (Option B), and as the interim/no-setup alternative

## Live DNS audit of the four brand domains (2026-07-08)

Direct public-DNS query (Node `dns` module) of SPF and DMARC for each domain. SPF lookup count computed by recursively resolving every `include`/`a`/`mx`/`exists` term per RFC 7208 §4.6.4.

- **artsvilleusa.com** — SPF: `v=spf1 include:dc-aa8e722993._spfm.artsvilleusa.com ~all` (single, valid, managed/flattened). DMARC: `v=DMARC1; p=none; sp=none; rua=mailto:editor@artsvilleusa.com; ruf=mailto:editor@artsvilleusa.com; adkim=r; aspf=r; …` — present, `p=none`, reports to editor@ (Morgan). ✅ baseline OK.
- **arterial.org** — SPF single/valid (`~all`, dnssmarthost + secureserver + mx). DMARC: `v=DMARC1;p=none;` — present but no reporting address. ✅ OK; add `rua` for visibility.
- **creweststudio.com** — SPF single/valid (`-all`). DMARC: `v=DMARC1; p=none; rua=…@dmarcinput.com` — present. ✅ OK.
- **notrealart.com** — ❌ **two problems:**
  - **Duplicate DMARC** — two `v=DMARC1` records published (`…@dmarcinput.com` and `sourdough@notrealart.com`) → per RFC 7489, receivers apply no DMARC at all.
  - **SPF at exactly 10/10 lookups** — recursive count: `+a`(1) `+mx`(1) `_spf.google.com`(1) `spf.curated.co`(1)→`_spf.sparkpostmail.com`(1)→`exists`(1) `spf.protection.outlook.com`(1) `emsd1.com`(1) `dnssmarthost.net`(1)→`_spf.mailspamprotection.com`(1) = **10**. One nested change → PermError.
  - **Sender identification:** MX = `smtp.google.com` (Google Workspace); `+a`/`ip4:35.212.92.184` → Google Cloud web server (`googleusercontent.com`); `emsd1.com` IP rDNS → `server.acems1.com` (ActiveCampaign); `spf.curated.co` → SparkPost (Curated.co, now discontinued); `spf.protection.outlook.com` → Microsoft 365 (likely legacy — MX is Google); `dnssmarthost.net`→`mailspamprotection.com` → SpamExperts/Mail Assure filter.
  - **Remediation:** see [docs/cloudfuze-notrealart-dns-remediation.md](../docs/cloudfuze-notrealart-dns-remediation.md). Owner: CloudFuze (contract terminated w/ notice, obligated through 2026-08-16). Cross-ref [problems/001](../../001-curated-deliverability-nra/README.md).

---

### Method note

The two ActiveCampaign help articles and the GoDaddy help article return **HTTP 403** to direct fetches. They were retrieved via the Firecrawl scrape API (key in `the-intersect-curator/.env.local`) on 2026-07-08. UI labels quoted above are verbatim from those pages as of that date; ActiveCampaign and GoDaddy occasionally rename menu items, so re-verify the exact button text if a step doesn't match what you see.
