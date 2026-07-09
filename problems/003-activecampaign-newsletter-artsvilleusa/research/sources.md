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

---

### Method note

The two ActiveCampaign help articles and the GoDaddy help article return **HTTP 403** to direct fetches. They were retrieved via the Firecrawl scrape API (key in `the-intersect-curator/.env.local`) on 2026-07-08. UI labels quoted above are verbatim from those pages as of that date; ActiveCampaign and GoDaddy occasionally rename menu items, so re-verify the exact button text if a step doesn't match what you see.
