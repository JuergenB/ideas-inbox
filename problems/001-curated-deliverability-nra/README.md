# Curated.co Newsletter Deliverability + Cross-Domain SPF/DKIM Audit

**Status:** Open — awaiting vendor action
**Filed:** 2026-04-19
**Domains in scope:** notrealart.com, artsvilleusa.com, creweststudio.com, arterial.org
**Senders in scope:** Curated.co, ActiveCampaign, Google Workspace and/or Microsoft 365, any hosted/transactional sender currently in DNS
**Monitoring tool in use:** [DMARC Report](https://app.dmarcreport.com/) — use this for SPF/DKIM lookups and post-change aggregate report review

---

# For Scott — plain-English summary

**TL;DR.** Not Real Art newsletters going out through Curated.co are failing email authentication checks and landing in junk. We're fixing it by moving the newsletter to send from `editor@notrealart.com` (instead of `scott@creweststudio.com`) and having CloudFuze clean up the DNS records that support email authentication on `notrealart.com` — and while they're at it, audit the same records across all four of your domains so authentication is solid everywhere.

**Why the newsletter isn't delivering well today.** Modern email systems — Gmail, Outlook, corporate spam filters — won't treat a newsletter as legitimate unless the sending domain publishes specific "proof of authenticity" records in DNS. Two problems on the Not Real Art side are currently causing those checks to fail: (1) Curated.co hasn't been authenticated on the `notrealart.com` domain at all, and (2) the record on `notrealart.com` that's supposed to list legitimate email systems has a formatting error that makes it unreadable to the mail systems checking it. Either problem alone would hurt deliverability; both together mean the newsletter is effectively unverified when receiving systems look at it.

**What we've decided.** Going forward, Not Real Art newsletters should send from `editor@notrealart.com`, not from `scott@creweststudio.com`. This keeps the newsletter's identity and authentication on the domain it actually represents — better for brand trust, and simpler for modern email systems to evaluate. This is a deliberate governance decision, not a correction of prior work; the original Crewest Studio sender setup was valid at the time it was provisioned.

**What we're asking CloudFuze to do.** Switch the sender in the Curated.co admin panel to `editor@notrealart.com`, then publish the DNS records Curated tells them to publish on `notrealart.com` (the correct values only appear in Curated's admin panel *after* the sender change is saved). While DNS is being touched, also clean up and audit all four domains — `notrealart.com`, `artsvilleusa.com`, `creweststudio.com`, `arterial.org` — so email authentication is solid everywhere. ActiveCampaign is believed to already be configured correctly; it just gets a verification pass.

**Your action.** You've already approved the sender change to `editor@notrealart.com`. The only optional thing: if CloudFuze wants access to DMARC Report (our monitoring tool) so they can verify their own DNS changes end-to-end without pinging us, grant them Account Member access on the Crewest team. That just saves round-trips.

**Expected outcome.** Not Real Art newsletter delivered to inboxes instead of junk, and a clean bill of health on email authentication across all four domains.

---

# For CloudFuze — technical brief

## Summary

**Context.** The Not Real Art weekly newsletter is published via Curated.co. The publication was originally configured to send as `scott@creweststudio.com` — a setup that worked at the time it was provisioned, with SPF/DKIM authentication aligned to `creweststudio.com`. That original configuration is not treated as faulty in this brief. SPF alignment for `creweststudio.com` has since drifted (those records are no longer intact the way they were), but the source of the current deliverability problem is not the original sender choice.

**Internal decision.** After team discussion, we have decided that the `notrealart` publication should send from the `notrealart.com` domain — specifically, `editor@notrealart.com` — rather than from `scott@creweststudio.com`. The reasoning is brand alignment, DMARC-alignment simplicity, and consolidation of the Not Real Art newsletter's authentication on the domain whose mailstream it represents. This is a deliberate governance change, not a correction of prior work.

**Two technical problems surface along the way and must be fixed as part of the migration to `notrealart.com`:**

1. **Curated.co is not authenticated for `notrealart.com`.** Once the sender switches to `editor@notrealart.com`, `notrealart.com` DNS needs Curated's SPF include and DKIM selector — currently neither is present, and the Curated admin panel reports "not correctly configured" for both. This work is required regardless of anything about the previous `creweststudio.com` configuration.

2. **`notrealart.com` SPF record is malformed today.** The current TXT record contains two `v=spf1` version tokens in a single string, which is invalid per RFC 7208 §4.5 and causes SPF to fail with `permerror` regardless of what follows. This breaks authentication for *every* mailstream on `notrealart.com` — independent of Curated, independent of the sender change.

Bundled with a broader SPF/DKIM audit across all four Scott-operated domains (`notrealart.com`, `artsvilleusa.com`, `creweststudio.com`, `arterial.org`) because the same best practices — single cumulative SPF record, no duplicate `v=spf1` tokens, 10-DNS-lookup budget, per-sender DKIM selector — apply everywhere and should be validated coherently while the DNS is being touched.

## Confirmed decisions and scope

- **The core fix is establishing Curated.co as an authorized sender for `notrealart.com`.** This means publishing Curated's SPF include and DKIM selector in `notrealart.com` DNS, plus fixing the malformed SPF record so evaluation succeeds in the first place. Curated.co is the sending platform whose authentication needs to be (re-)established on the `notrealart.com` domain. The earlier email migration work accounted for the platforms in scope at that time; Curated.co was not explicitly on that list, which is why authentication for the Curated mailstream isn't in place today on `notrealart.com`.
- **Reconfigure the Curated.co sender** on the `notrealart` publication from `scott@creweststudio.com` to `editor@notrealart.com` — internal decision, to consolidate the Not Real Art newsletter's authentication on the domain that represents it.
- **ActiveCampaign is believed to be configured correctly today** across all four domains. The broader SPF/DKIM audit below is a sanity check and verification pass, not expected remediation; ActiveCampaign should not need re-authorization. If the audit surfaces anything, fix it, but the working assumption is that ActiveCampaign is fine and this work is primarily about adding Curated.co to the set of authenticated senders and cleaning up the malformed SPF along the way.

## Observed current state (notrealart.com)

### SPF — **malformed**

```
v=spf1 +a +mx +ip4:35.212.92.184 v=spf1 include:spf.protection.outlook.com include:emsd1.com include:notrealart.com.spf.auto.dnssmarthost.net ~all
```

Two `v=spf1` tokens in one record. RFC 7208 §4.5 requires exactly one, at the start. Resolvers treat the second token as an unknown mechanism, causing `permerror`. This breaks SPF entirely regardless of which includes or IPs follow.

### DMARC — monitor-only

A DMARC record is published at `_dmarc.notrealart.com` with policy `p=none` and aggregate reports (`rua`) flowing to the DMARC Report monitoring mailbox. `p=none` collects data without enforcement — appropriate during remediation.

### DKIM — three selectors published, Curated absent

Three DKIM selectors exist on `notrealart.com`. The Curated selector (`curated._domainkey.notrealart.com`) is not among them.

### Curated.co publication admin (notrealart)

Admin URL: `https://my.curated.co/notrealart/settings/hosting_email`

- **Reply To:** `scott@creweststudio.com` ← must change
- **Sender Name:** "Not Real Art"
- **SPF status:** Not correctly configured
- **DKIM status:** Not correctly configured

### What the Curated admin currently instructs (critical — do not act on these values)

Because the Reply-To is still `scott@creweststudio.com` today, the Curated admin panel is currently instructing administrators to publish DNS records on **`creweststudio.com`**, not on `notrealart.com`. The panel's current verbatim guidance:

> Enable SPF by adding a TXT record or modifying the existing TXT record on the root or @ record of **creweststudio.com** to have the value:
>
> `v=spf1 +a +mx +ip4:35.209.38.253 include:spf.curated.co include:spf.protection.outlook.com include:creweststudio.com.spf.auto.dnssmarthost.net -all`
>
> Enable DKIM by adding a TXT record on the **curated._domainkey** subdomain of **creweststudio.com** with the value:
>
> `v=DKIM1; k=rsa; p=MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCrLHiExVd55zd/IQ/J/...`

**These values must not be published on `notrealart.com`.** They are what Curated expects for the current pre-change `creweststudio.com` sender configuration. After the Reply-To change in Objective 1 is saved, the Curated admin panel re-renders with new values targeting `notrealart.com` — different IP, different `<domain>.spf.auto.dnssmarthost.net` hostname, and a different DKIM key / record. Those are the values that go in `notrealart.com` DNS.

Observation on the `<domain>.spf.auto.dnssmarthost.net` pattern: it appears in both Curated's current creweststudio.com instruction and in the existing notrealart.com SPF record. This is an auto-generated per-domain smart-host include that Curated's tooling produces. That partially resolves the "what is this?" question for the existing notrealart.com include — it is structurally the same kind of include, though whether the smart-host service behind it is still operational for notrealart.com should still be verified during the audit.

---

## Scope of work

This brief outlines the problem and the required outcome. It does **not** prescribe the DNS record contents, SPF includes, or DKIM key material — because the authoritative values live in the Curated.co admin panel and the senders' own documentation, not in this document. CloudFuze should read those values directly from the source and publish them; nothing in this brief should be treated as copy-paste content.

### Objective 1 — Not Real Art newsletter authenticated on `notrealart.com` via Curated.co

- Reply-To on the `notrealart` Curated publication changed to `editor@notrealart.com`.
- Once that change is saved, the Curated admin panel (`https://my.curated.co/notrealart/settings/hosting_email`) displays the specific SPF include value and the DKIM TXT record (host/selector and key material) that need to be published in `notrealart.com` DNS. **Those are the source of truth — use those values, not anything in this document.**
- The Curated admin panel currently shows SPF/DKIM values for `creweststudio.com` because that's the pre-change Reply-To. Those are not what should go on `notrealart.com`. The panel's displayed values change after the Reply-To is switched and saved.
- Verification: click **Refresh** in the Curated admin next to each status indicator; both SPF and DKIM must show "Correctly configured and verified."

### Objective 2 — `notrealart.com` SPF record fixed

- Exactly one SPF TXT record at the apex.
- Exactly one `v=spf1` token at the start of that record (the duplicate-token condition described above must be resolved).
- All currently legitimate senders consolidated as `include:` mechanisms within that single record — including Curated's include value as displayed in the Curated admin panel after Objective 1's Reply-To change. Legacy or unidentified includes removed (see Open questions).
- Total SPF DNS lookup count ≤ 10, verified with DMARC Report.

### Objective 3 — Cross-domain SPF/DKIM/DMARC audit

For each of `notrealart.com`, `artsvilleusa.com`, `creweststudio.com`, `arterial.org`: confirm a single compliant SPF record, DKIM selectors published for each active sender, and a DMARC record with aggregate reports flowing.

### Objective 4 — ActiveCampaign verification (not expected remediation)

ActiveCampaign is believed to be configured correctly across all four domains. Verify that ActiveCampaign's SPF include and DKIM selector are present in each domain's DNS. Fix only if something is genuinely broken; the working assumption is that this step produces a clean bill of health.

### Objective 5 — Post-change deliverability verification

Inbox-seed testing across Gmail, Outlook, and Yahoo from each domain (for ActiveCampaign) and from the `notrealart` Curated publication. Post-change DMARC Report aggregate reports reviewed to confirm SPF and DKIM are passing for all legitimate mailstreams.

---

## Best practices (non-negotiable)

1. **One SPF record per domain.** Multiple SPF TXT records at the same apex is invalid and causes `permerror`. Every sender's include must live inside **one** cumulative record. Splitting senders across multiple records is the most common — and most silently destructive — mistake in SPF administration. (Detail below.)
2. **One `v=spf1` token per record.** RFC 7208 §4.5. The version token must appear exactly once, at the start. A second `v=spf1` mid-record is treated as an unknown mechanism and produces `permerror`. **This is the current condition on `notrealart.com`.**
3. **10 DNS lookup budget.** RFC 7208 §4.6.4. SPF evaluation is capped at 10 DNS lookups, including lookups nested inside `include:` directives. Exceeding the cap causes `permerror`. Provider includes for Microsoft, Google, and some marketing platforms can consume 2–4 lookups each on their own.
4. **DKIM: one selector per sender, never merge.** Unlike SPF, DKIM is designed to have one TXT record per sender, each at its own selector subdomain (e.g., `curated._domainkey.notrealart.com`). Attempting to "merge" DKIM records is invalid.
5. **DMARC alignment requires matching domains.** For DMARC to pass, the `From:` header domain must align with the SPF Mail-From domain and/or the DKIM `d=` domain. Sending a `notrealart.com` newsletter from `scott@creweststudio.com` forces receivers to evaluate `creweststudio.com`'s SPF/DKIM instead of `notrealart.com`'s, which breaks alignment even when `notrealart.com` DNS is perfect. **This is the primary reason the sender change in Objective 1 is non-negotiable.**
6. **Stage and verify.** After every DNS change, verify with `dig TXT <record>` or DMARC Report before moving on. Propagation is usually under an hour but can take up to 48 hours with older TTLs.

See [`research/spf-dkim-best-practices.md`](research/spf-dkim-best-practices.md) for full technical background.

### Duplicate SPF records — the authoritative rule

Two independent forms of "duplication" both break SPF. Both are specified in RFC 7208. The RFC text is quoted directly below because it is the authoritative constraint — this brief does not provide a replacement record, and CloudFuze should not treat any SPF example in this document as copy-paste content. The corrected record is built from the currently legitimate senders plus the include value Curated displays in its admin panel after the Reply-To change (Objective 1).

**Form A — multiple SPF TXT records at the same domain apex.** RFC 7208 §3.2:

> "A domain name MUST NOT have multiple records that would cause an authorization check to select more than one record."

RFC 7208 §4.5 (evaluation behavior):

> "If the resultant record set includes more than one record, check_host() produces the 'permerror' result."

Fails closed — **both** records are invalidated, not just one. Every message fails SPF regardless of sending IP. Commonly introduced by adding a new sender as a *second* TXT record instead of merging it into the existing one.

**Form B — two `v=spf1` version tokens inside a single TXT record.** RFC 7208 §4.5:

> "Records begin with a version section: `record = version terms *SP`, `version = 'v=spf1'`. Starting with the set of records that were returned by the lookup, discard records that do not begin with a version section of exactly `v=spf1`."

Exactly one version token, at the start. A second `v=spf1` mid-record is an unknown mechanism and produces `permerror`. **This is the current condition on `notrealart.com`** — see the record quoted in "Observed current state" above.

**Post-change validation commands (for CloudFuze to run after publishing a corrected record):**

```bash
dig +short TXT notrealart.com | grep -c '^"v=spf1'   # must output: 1
dig +short TXT notrealart.com | grep 'v=spf1'        # exactly one record, exactly one v=spf1
```

Plus [DMARC Report SPF lookup](https://app.dmarcreport.com/lookups/spf) — must parse cleanly, lookup count ≤ 10, no `permerror` reported.

**Industry confirmation of the same rule:** [Mimecast](https://www.mimecast.com/content/multiple-spf-records/), [Red Sift OnDMARC](https://knowledge.ondmarc.redsift.com/en/articles/1155789-multiple-spf-records), [PowerDMARC](https://powerdmarc.com/spf-permerror-too-many-dns-lookups/), [AutoSPF](https://autospf.com/blog/multiple-spf-records-essential-configuration-for-email-authentication/). Also [`research/spf-dkim-best-practices.md`](research/spf-dkim-best-practices.md) in this folder.

---

## Access and sources of truth

- **DNS provider consoles** for all four domains. SiteGround access for `notrealart.com` is already shared. Confirm access for `artsvilleusa.com`, `creweststudio.com`, `arterial.org`.
- **Curated.co admin:** `https://my.curated.co/notrealart/settings/hosting_email` — **this is the authoritative source for Curated's SPF include value and DKIM TXT record content** once the Reply-To is changed to `editor@notrealart.com`. Read values directly from this page; do not copy from this brief.
- **ActiveCampaign admin** — confirm current login with Scott. ActiveCampaign's own documentation and in-app sending-domain pages are the source of truth for the ActiveCampaign SPF include and DKIM selector.
- **Mailbox admin** (Google Workspace and/or Microsoft 365) per domain — confirm with Scott.
- **DMARC Report** (`app.dmarcreport.com`) — source of truth for SPF/DKIM/DMARC validation and DNS lookup budget. Account Member access is **offered**: Scott can add CloudFuze as a member on the Crewest team so Chaitanya can verify changes end-to-end (SPF/DKIM lookups, aggregate report flow) rather than relying on Scott or Juergen to confirm. Request access in a comment on the issue if useful.

## Open questions (resolve during execution)

1. Is `notrealart.com` mailbox hosted on Google Workspace, Microsoft 365, or both? The current SPF includes `spf.protection.outlook.com` — validate this is current and correct.
2. What does the `emsd1.com` include represent? If this is a legacy or third-party include rather than current ActiveCampaign configuration, replace with the correct ActiveCampaign SPF include.
3. What does `notrealart.com.spf.auto.dnssmarthost.net` represent? Identify the vendor and confirm the include is still required. Remove if stale.
4. Do `artsvilleusa.com`, `arterial.org`, `creweststudio.com` each need a Curated.co configuration, or is Curated only in use for `notrealart.com`?
5. Should the Sender Name on the `notrealart` Curated publication remain "Not Real Art," or is a different brand string preferred (e.g., "The Intersect: Art In Tech")?

---

## Acceptance criteria

Mark each ✅ with evidence attached to the issue comment: screenshot, `dig` output, DMARC Report lookup result, or raw test email headers.

### Curated.co / notrealart.com

- [ ] Reply-To on the `notrealart` Curated publication is `editor@notrealart.com`.
- [ ] Curated admin SPF status shows "Correctly configured and verified."
- [ ] Curated admin DKIM status shows "Correctly configured and verified."
- [ ] Test issue sent and confirmed inbox delivery (not junk) by at least three recipients across different providers (Gmail, Outlook, Yahoo at minimum).

### Per-domain (notrealart.com, artsvilleusa.com, creweststudio.com, arterial.org)

- [ ] Exactly one SPF TXT record at the domain apex.
- [ ] Single `v=spf1` token per record, correct syntax, with an `all` terminator (`~all` or `-all` as appropriate per the sender's documentation).
- [ ] Total SPF DNS lookup count ≤ 10 (attach DMARC Report lookup output).
- [ ] All active senders' includes present; no unidentified or legacy includes.
- [ ] DKIM selector published for each active sender.
- [ ] DMARC record present and aggregate reports flowing to DMARC Report.

### ActiveCampaign (verification pass — not expected to require changes)

- [ ] Each of the four domains confirmed as an authorized sending domain in ActiveCampaign, with ActiveCampaign's SPF include and DKIM selector present in DNS.
- [ ] Test send from each domain inbox-delivered across Gmail, Outlook, Yahoo — raw headers attached showing SPF=pass, DKIM=pass, DMARC=pass.

---

## References

- Curated.co — Configuring SPF and DKIM: https://support.curated.co/help/configuring-spf-and-dkim-records
- RFC 7208 — Sender Policy Framework: https://www.rfc-editor.org/rfc/rfc7208
- DMARC Report — docs: https://docs.dmarcreport.com/
- DMARC Report — SPF lookup: https://app.dmarcreport.com/lookups/spf
- DMARC Report — DKIM lookup: https://app.dmarcreport.com/lookups/dkim
- Technical background in this folder: [`research/spf-dkim-best-practices.md`](research/spf-dkim-best-practices.md)
