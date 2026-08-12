# Sources & References — "Dollar for the Arts" (Idea 014)

Audit trail for every external claim, statistic, or named capability used in the deck and README. Entries are in the order the claims appear in the deck. The two long-form research files carry the deep provenance:

- **[501c3-public-support-fundraising.md](../../013-arterial-impact-report/research/501c3-public-support-fundraising.md)** — the IRS public-support / donor-breadth math (research prepared for Arterial, 2026-07-03; carries full IRS / Cornell LII / Foundation Group / Public Counsel URLs).
- **[instapage-fundraising-research.md](instapage-fundraising-research.md)** — Instapage-for-fundraising research (2026-07-11; ~40 cited sources, with explicit unverified items).

---

## Broad small-dollar giving protects 501(c)(3) status more than a few large gifts

- **Claim:** Under IRC §170(b)(1)(A)(vi), any one private donor's gift counts toward "public support" only up to **2% of total support**; on $1M of 5-year support, **500 small donors → ~50% public-support ratio (passes)** while **3 large donors of the same total → ~6% (fails)**.
- **Source:** IRS Schedule A (Form 990) public-support mechanics; Foundation Group; Public Counsel. Worked in Arterial's own research file.
- **Date:** IRS rules current; research compiled 2026-07-03.
- **URL:** https://www.irs.gov/pub/irs-pdf/i990sa.pdf · https://www.501c3.org/understanding-the-501c3-public-support-test/ · full set in [501c3-public-support-fundraising.md](../../013-arterial-impact-report/research/501c3-public-support-fundraising.md)
- **Used in deck:** the "Why it's defensible" / breadth-math slide.

## Founder self-funding hurts public-charity status

- **Claim:** A large founder gift barely helps the public-support numerator (capped at 2%) while inflating the denominator — pushing the ratio *down*; founders are "disqualified persons," not "the public."
- **Source:** IRC §4946; IRS Schedule A instructions; Foundation Group.
- **URL:** https://www.law.cornell.edu/uscode/text/26/4946 · see [501c3-public-support-fundraising.md](../../013-arterial-impact-report/research/501c3-public-support-fundraising.md) §2.
- **Used in deck:** breadth-math slide.

## A voluntary donation is more defensible than payment-for-access (quid-pro-quo)

- **Claim:** Tying a benefit/access directly to payment raises quid-pro-quo concerns; a voluntary gift with content free either way keeps the dollar a clean contribution.
- **Source:** General nonprofit-law principle; consistent with [Idea 008](../../008-paywall-viability-notrealart/) analysis. **Flagged in deck as requiring nonprofit counsel / CPA review** — not asserted as settled.
- **Used in deck:** the gate-hardness fork slide + trust/compliance note.

## Instapage Optimize includes A/B testing + dynamic text replacement; AdMap maps ads→pages; custom subdomain via CNAME

- **Claim:** Optimize tier includes A/B + DTR; AdMap gives visual ad-to-page mapping; pages publish to a custom subdomain (e.g. `give.arterial.org`) via CNAME → `secure.pageserve.co` with auto-SSL; native Meta pixel supported.
- **Source:** Instapage plans/help docs + independent pricing reviews.
- **Date:** as of 2026-07-11.
- **URL:** https://instapage.com/plans · https://instapage.com/en/products/admap · https://help.instapage.com/hc/en-us/articles/205226088-Publishing-on-a-Custom-Domain-CNAME · full set in [instapage-fundraising-research.md](instapage-fundraising-research.md).
- **Used in deck:** "the stack we already own" / platform slide.

## Donately embed works but its completions don't register in Instapage's native conversion tracking

- **Claim:** A Donately widget embeds via custom HTML/iFrame, but embedded-form submissions aren't counted by Instapage Conversion Goals — track via Meta pixel + thank-you redirect.
- **Source:** Instapage embedding docs; Donately embedding docs.
- **URL:** https://help.instapage.com/hc/en-us/articles/205221768-Embedding-custom-HTML-or-widgets-into-an-Instapage-landing-page · https://support.donately.com/en/knowledge/hc/en-us/articles/360048918354-embedding-options
- **Used in deck:** platform / stack slide (as a build note).

## Donation-page best practices: single CTA, message match, amount ladder, mobile-first, trust signals

- **Claim:** Single unambiguous CTA; landing headline echoes the ad (message match); 3–5 suggested amounts with impact framing (anchor $1, ladder up); minimize form friction; mobile-first (main donation-page conversion ~11% desktop / ~8% mobile); show 501(c)(3)/tax-deductible trust signals.
- **Source:** Fundraise Up, iDonate, DonorPerfect, Double the Donation, 4aGoodCause, RallyUp, DonorDock.
- **Date:** as of 2026-07-11.
- **URL:** https://fundraiseup.com/blog/Optimizing-Donation-Landing-Pages/ · https://www.idonate.com/blog/nonprofit-donation-page-basics-how-to-optimize-for-more-donations · full set in [instapage-fundraising-research.md](instapage-fundraising-research.md) Q8.
- **Used in deck:** best-practices / execution note.

## Existing Not Real Art lead magnets (Bomb The Art World, 100 Top Street Artists)

- **Claim:** Proven email-capture magnets already live on notrealart.com, with Artist/Art-Lover segmentation and a minimal thank-you page (download link + share only, no ask).
- **Source:** Live pages, retrieved 2026-07-11.
- **URL:** https://notrealart.com/bomb-the-art-world/ · https://notrealart.com/100-top-street-artists-of-2020-thank-you-b8767b24-5419-11ea-8d77-2e728ce88125/
- **Used in deck:** inventory + "where the ask goes" slides.
