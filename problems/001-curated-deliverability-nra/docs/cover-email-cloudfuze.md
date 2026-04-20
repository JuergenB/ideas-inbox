# Cover email — CloudFuze

**To:** Chaitanya Gupta (CloudFuze)
**Cc:** Scott Power, Morgan Laurens
**Subject:** Curated.co deliverability + DNS/SPF audit — scope and acceptance criteria

---

Hi Chaitanya,

Following up on the Curated.co deliverability issue Scott raised. A couple of things are bundled in here, and I want to separate them up front so the scope is clear.

**First — an internal decision.** After team discussion, we've decided to migrate the Not Real Art Curated.co newsletter onto the notrealart.com domain. The publication was originally set up to send from `scott@creweststudio.com`, which was a valid configuration at the time it was provisioned. This isn't a correction of that setup — it's a deliberate governance change, moving the newsletter's authentication onto the domain the newsletter represents, for brand alignment and DMARC simplicity. The target sender is `editor@notrealart.com`.

**Second — two technical problems that surface along the way** and need to be addressed as part of the migration to `notrealart.com`:

- **Curated.co is not authenticated for `notrealart.com` DNS.** Once the sender switches, `notrealart.com` needs Curated's SPF include and DKIM selector published — neither is present today.
- **`notrealart.com` SPF record is malformed today.** The current TXT record contains two `v=spf1` tokens in a single string, which is invalid per RFC 7208 and causes SPF to fail with `permerror` regardless of what follows. This is breaking authentication for every mailstream on notrealart.com right now, independent of the Curated work.

We've also bundled in a broader SPF/DKIM audit across all four domains (`notrealart.com`, `artsvilleusa.com`, `creweststudio.com`, `arterial.org`) because the same best practices — single cumulative SPF record, no duplicate `v=spf1` tokens, 10-DNS-lookup budget, per-sender DKIM — apply everywhere and are cleaner to validate coherently while DNS is being touched.

Full scope, context, and acceptance criteria are tracked here:

**{{ISSUE_URL}}**

The headline items:

- **The core fix:** establish Curated.co as an authorized sender for `notrealart.com` — publish Curated's SPF include and DKIM selector in `notrealart.com` DNS. Curated.co wasn't explicitly on the list of platforms covered during the earlier migration, so its authentication isn't in place on `notrealart.com` today. That's what this work is primarily closing.
- Reconfigure the Curated.co sender on the `notrealart` publication to `editor@notrealart.com` (internal decision, covered above).
- Fix the malformed `notrealart.com` SPF record (two `v=spf1` tokens in one record today, which is invalid and needs to become a single cumulative record).
- Across all four domains: consolidate all senders into one SPF record per domain, verify lookup budget via DMARC Report, confirm DKIM per sender.
- **ActiveCampaign** is assumed to be configured correctly already — the audit treats it as a verification pass, not expected remediation.

One important operational note, called out in the issue but worth flagging here too: the Curated admin panel is the source of truth for the SPF include and DKIM values to publish. It currently shows values targeting `creweststudio.com` (because that's the pre-change Reply-To) — do not act on those. After the Reply-To is switched to `editor@notrealart.com` and saved, the panel re-renders with the values targeting `notrealart.com` that should actually be published.

The issue also lists a few open questions to resolve during execution — including identifying what `include:emsd1.com` currently represents on `notrealart.com`, since it may be legacy.

One offer: Scott can add you as an Account Member on our **DMARC Report** team (`app.dmarcreport.com`) so you can verify your own changes end-to-end — SPF/DKIM lookups and aggregate report flow after each DNS update — without pinging us to confirm. If you'd find that useful, just say so in a comment on the issue and Scott will provision it.

Could you confirm an ETA and flag anything in the brief that looks off? Happy to jump on a call if that's faster.

Thanks,
Juergen
