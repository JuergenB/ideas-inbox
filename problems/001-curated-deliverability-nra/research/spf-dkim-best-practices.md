# Email Authentication (SPF, DKIM, DMARC) — Technical Reference

Working reference for the implementation brief in [`../README.md`](../README.md). Assumes the reader is a DNS / email administrator.

## SPF

### One record per domain — direct RFC citation

RFC 7208 §3.2 (publication requirement):

> "A domain name MUST NOT have multiple records that would cause an authorization check to select more than one record."

RFC 7208 §4.5 (evaluation behavior when the rule is violated):

> "If the resultant record set includes more than one record, check_host() produces the 'permerror' result."

Both records are invalidated when a domain publishes multiple SPF records. SPF fails closed — every message fails authentication regardless of sending IP.

**Implication:** every additional sender must be added as an `include:` inside the single existing record, not as a second record.

### One `v=spf1` token per record — direct RFC citation

RFC 7208 §4.5 (same section; the version-token rule):

> "Records begin with a version section: `record = version terms *SP`, `version = 'v=spf1'`. Starting with the set of records that were returned by the lookup, discard records that do not begin with a version section of exactly `v=spf1`."

Exactly one version token, at the start of the record. A second `v=spf1` mid-string is an unknown mechanism and produces `permerror`. This form of duplication is distinct from — and additive to — the multi-record form, and is sometimes introduced when a DNS admin concatenates two existing SPF strings without removing the second version prefix.

### Industry confirmation

- Mimecast — [Multiple SPF Records: Causes, Errors & Fixes](https://www.mimecast.com/content/multiple-spf-records/)
- Red Sift OnDMARC — [Multiple SPF records](https://knowledge.ondmarc.redsift.com/en/articles/1155789-multiple-spf-records)
- PowerDMARC — [SPF PermError: Fix Too Many DNS Lookups](https://powerdmarc.com/spf-permerror-too-many-dns-lookups/)
- AutoSPF — [Multiple SPF Records](https://autospf.com/blog/multiple-spf-records-essential-configuration-for-email-authentication/)

All document identical guidance: one SPF record per domain, one `v=spf1` token per record, combine senders via cumulative includes.

### 10 DNS lookup limit

RFC 7208 §4.6.4 caps SPF evaluation at 10 DNS lookups across all directives that require them (`include`, `a`, `mx`, `exists`, `redirect`, `ptr`). Each `include:` is one lookup; any nested `include:` inside that include is another lookup. Exceeding 10 causes `permerror`.

**Typical lookup costs (verify per-domain):**

- `include:_spf.google.com` — ~3 lookups (cascades)
- `include:spf.protection.outlook.com` — ~3 lookups
- `include:spf.curated.co` — 1–2 lookups
- ActiveCampaign's current sending-domain include — 1–2 lookups (verify from ActiveCampaign docs)

Audit with [DMARC Report SPF lookup](https://app.dmarcreport.com/lookups/spf).

### Softfail vs hardfail

`~all` (softfail → quarantine) is recommended over `-all` (hardfail → reject) during transitions. Under `-all`, a single missing include causes hard rejection of legitimate mail. Move to `-all` only after DMARC aggregate reports confirm no legitimate senders are failing.

## DKIM

### One record per selector per sender

DKIM uses selector subdomains to scope each sender's public key: `<selector>._domainkey.<domain>`. Multiple DKIM records are expected — one per sender — and do not conflict with each other.

**Curated.co documented selector (verify in Curated admin panel for each publication):** `curated`
Record host pattern: `curated._domainkey.<publication-domain>`

### Key rotation

Senders occasionally rotate DKIM keys. The current value must be copied verbatim from the sender's admin panel at time of publish. Stale keys cause silent signature failures.

## DMARC

### Record syntax

```
v=DMARC1; p=<policy>; rua=mailto:<aggregate-reports>; ruf=mailto:<forensic-reports>; adkim=<r|s>; aspf=<r|s>
```

**Policy levels:**

- `p=none` — monitor only; collect reports, take no action on failures
- `p=quarantine` — send failing mail to spam
- `p=reject` — reject failing mail entirely

**Alignment modes:** `r` (relaxed, default) allows organizational-domain match; `s` (strict) requires exact match. Relaxed is sufficient for most setups.

### Recommended progression

1. Start at `p=none`. Collect aggregate reports via `rua=` without impact.
2. Review reports over 2–4 weeks; confirm all legitimate senders pass SPF or DKIM (ideally both).
3. Graduate to `p=quarantine`.
4. After extended monitoring with no false positives, consider `p=reject`.

## Alignment — the rule that trips people up

DMARC passes only if the `From:` header domain aligns with either:

- The SPF Mail-From (Return-Path) domain, **or**
- The DKIM `d=` signing domain.

**Non-obvious case:** if Curated.co publishes a `notrealart.com` newsletter but uses `scott@creweststudio.com` as the From header, receivers evaluate `creweststudio.com`'s SPF/DKIM records, not `notrealart.com`'s. Even with perfect DNS on `notrealart.com`, alignment fails at the receiving end.

**Rule:** the From-domain should match the domain whose DNS is being maintained for that mailstream. Changing the Curated sender from `scott@creweststudio.com` to `editor@notrealart.com` fixes this.

## Verification commands

```bash
# SPF
dig +short TXT notrealart.com | grep spf1

# DKIM (replace selector)
dig +short TXT curated._domainkey.notrealart.com

# DMARC
dig +short TXT _dmarc.notrealart.com
```

## Tooling

- **DMARC Report** — the monitoring platform already in use for these domains:
  - Dashboard: https://app.dmarcreport.com/
  - SPF lookup: https://app.dmarcreport.com/lookups/spf
  - DKIM lookup: https://app.dmarcreport.com/lookups/dkim
  - Docs: https://docs.dmarcreport.com/
- **MXToolbox SuperTool** — https://mxtoolbox.com/SuperTool.aspx (SPF/DKIM/DMARC lookups, lookup-count budget analysis; useful as a second-opinion tool)
- **kitterman.com SPF validator** — https://www.kitterman.com/spf/validate.html (strict syntax validation)

## Reference

- RFC 7208 — Sender Policy Framework: https://www.rfc-editor.org/rfc/rfc7208
- RFC 6376 — DomainKeys Identified Mail (DKIM): https://www.rfc-editor.org/rfc/rfc6376
- RFC 7489 — Domain-based Message Authentication, Reporting, and Conformance (DMARC): https://www.rfc-editor.org/rfc/rfc7489
