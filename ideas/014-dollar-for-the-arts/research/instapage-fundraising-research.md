# Instapage for an Ads-First "$1 for the Arts" Fundraising Funnel — Research & Recommendation

*Prepared for: Arterial.org (501(c)(3)) — Not Real Art / Artsville USA — "Dollar for the Arts" fall campaign*
*Retrieval date for all sources unless noted: 2026-07-11*
*Author: research pass via web search + primary-source fetch. Vendor-sourced claims are flagged; independent corroboration noted where found.*

---

## Executive Summary

Instapage is a genuinely capable, ads-first landing-page platform whose stand-out features — AdMap (visual ad-to-page mapping), dynamic text replacement, server-side A/B testing, and Instablocks/global blocks — are purpose-built for exactly the "one page per ad/lead-magnet, message-matched, retargeting-driven" pattern this campaign describes. It supports custom subdomains (e.g. `give.arterial.org`) with auto-SSL, the Meta/Facebook pixel for retargeting and conversion tracking, and custom HTML/JS embeds — which means a Donately donation widget **can** be dropped onto an Instapage page. However, its pricing is high for a nonprofit ($99–$199/mo published list, custom "Convert" tier above that), several of the features that justify choosing it (AdMap-based **personalization**, heatmaps, root-domain publishing, and — per independent reviews — **global** blocks) are gated to the **top tiers**, and its embed model has real limitations (embedded widgets sit "on top" of the page, don't participate in Instapage's native conversion tracking, and aren't supported by Instapage's team). Because Arterial **already owns Instapage accounts** and **already runs Thrive Themes on notrealart.com**, the honest decision is not "Instapage vs. nothing" but "does Instapage's ads-first tooling earn its keep over Thrive/hand-built pages for a low-dollar $1 funnel?" The bottom line (see final section): **use the Instapage you already own to launch fast and get message-match + A/B + pixel tracking for free-of-additional-build, but do not upgrade to the Convert tier for this campaign, and put the pages on a `*.arterial.org` subdomain, not the root domain.**

---

## Q1 — Instapage for Fundraising: fit for nonprofits

**What exists (vendor-sourced):** Instapage publishes dedicated marketing landing pages for "Charities" and "Fundraising Campaigns," a nonprofit blog post ("4 Tips to Increase Donations on Non-Profit Landing Pages"), and nonprofit-oriented template/functionality pages. One vendor blog claims that simplifying a nonprofit's post-click page (plus Google Ads optimization) produced a **178% increase in conversions** — this is a vendor case-study figure and is **not independently corroborated**; treat as marketing.
- https://instapage.com/blog/non-profit-landing-pages
- https://instapage.com/en/tools/landing-page-software-for-charities
- https://instapage.com/en/solutions/landing-pages-for-fundraising-campaigns
- https://instapage.com/en/functionality/create-your-web-page-for-nonprofit-organizations

**Honest read:** Instapage markets to nonprofits, but I found **no** deep, independently reported nonprofit donation-page case study — the nonprofit content is generic best-practice blogging plus template landing pages, the same content marketing every landing-page vendor produces. Instapage is **not** a fundraising-native tool: it has no built-in donation processing, no donor CRM, no recurring-gift logic, no receipting. It is a landing-page/ad-conversion tool that a nonprofit *can* use, with donation handling bolted on via a third party (here, Donately). For nonprofit-specific donation features you'd look at Fundraise Up, Donorbox, Givebutter, etc. — Instapage competes on the *ad-to-page* layer, not the *donation* layer. **Verdict: capable general tool, not a nonprofit specialist; the "nonprofit case study" evidence is thin and vendor-sourced.**

---

## Q2 — Personalization & AdMap (concrete mechanics)

**Dynamic Text Replacement (DTR):** You place a token in square brackets on the page, e.g. `[keyword]` or `[city]`, and Instapage swaps it for the value of a matching **URL parameter** at page load. So `?keyword=street-art` renders "street-art" wherever `[keyword]` appears. Mechanically it is URL-query-string → on-page text substitution. It's great for keyword/location echoing (message match at the headline/CTA level) but it is **one page with swapped words**, not distinct experiences. Instapage itself publishes a post arguing DTR "is not true post-click personalization" — i.e. they position DTR as the lightweight tier and AdMap/Personalization as the real thing.
- https://help.instapage.com/hc/en-us/articles/205223658-Dynamic-Text-Replacement-How-to-use-URL-parameters-on-your-page
- https://instapage.com/en/features/dynamic-text-replacement
- https://instapage.com/blog/dynamic-text-replacement-personalization

**AdMap:** A visual, point-and-click interface that maps **specific ads/ad groups to specific post-click pages** using UTM parameters, so instead of tracking ad→page alignment in a spreadsheet you see and wire it visually. Vendor calls it "the world's first visual ad-to-page mapping technology." It's designed to keep every ad's promise matched to a dedicated page experience.
- https://instapage.com/en/products/admap
- https://instapage.com/blog/admap

**Personalization (audience-specific pages):** Beyond DTR, Instapage's "Personalization" lets you build multiple **experiences** of the same page and serve a different one to a different audience/UTM combination — i.e. genuinely different layouts/offers per segment, not just swapped words.
- https://help.instapage.com/hc/en-us/articles/360041509773-Personalization-creating-personalized-experiences-for-different-audiences

**How this helps an ads-first, retargeting funnel — concretely:**
- Run one ad set per lead magnet ("Bomb the Art World" ebook, "100 Top Street Artists"). AdMap wires each ad to its own message-matched page so the ad creative and the landing headline/hero say the same thing (message match lifts conversion — see Q8).
- Cold-traffic page emphasizes the free ebook; DTR can echo the ad's hook in the headline via UTM.
- Retargeting audiences (people who downloaded but skipped the $1 ask) can be sent — via a different UTM + AdMap/Personalization — to a variant that leads with the "$1 for the arts" ask instead of the ebook. That's the ads-first payoff: same asset, different framing per funnel stage without hand-building each page from scratch.

**Caveat — gating (see Q6):** DTR requires the **Optimize** tier; AdMap-driven **personalization** (distinct experiences per audience) is a **Convert** (top/custom) tier feature per independent reviews. So the *deepest* personalization is the most expensive.

---

## Q3 — Rapid iteration, A/B testing, global blocks

**Standing up many pages fast:** Instablocks lets you save reusable content blocks and drop them into new pages, so a "one page per lead magnet" fleet is assembled from shared blocks rather than rebuilt each time. This is materially faster than hand-building each page.
- https://instapage.com/blog/instablocks
- https://instapage.com/blog/landing-page-instablocks/

**Global Blocks:** Edit a block once and it updates across **all** pages that use it ("update hundreds/thousands of pages with a single click") — e.g. change the Donately embed, the disclaimer, or the logo everywhere at once. This is the single biggest maintenance advantage over hand-built pages, where a footer change means editing N files.
- https://help.instapage.com/hc/en-us/articles/360001095648-What-are-Global-Blocks-and-how-to-use-them
- https://instapage.com/blog/instablocks-part-5

**A/B testing:** Server-side A/B/split testing of variations, layouts, and AI-generated copy, with Instablocks making variant assembly fast (build element once, save as block, swap in).
- https://instapage.com/en/features/unlimited-ab-testing
- https://instapage.com/blog/instablocks-part-3/

**vs. hand-building:** Hand-built pages give total control but every new lead-magnet page, every variant, and every global change is developer time. Instapage front-loads that into a builder + reusable blocks + built-in split testing and stats. For a campaign that wants *many* pages and *fast* rotation, this is where Instapage clearly beats hand-coding on speed.

**Gating caveats:**
- **A/B testing** requires **Optimize** (not on Create).
- **Global blocks:** *discrepancy in sources.* Instapage's own plans page lists "Global Elements/Instablocks" across all tiers, but two independent reviews (Swipe Pages, and the pricing summaries) attribute **Global Blocks to the Convert tier**. **Unverified which is authoritative** — likely Instablocks (save/reuse) is broad while true edit-once-sync-everywhere Global Blocks is gated higher. Verify in-account before relying on it.
  - https://instapage.com/plans (as of 2026-07-11)
  - https://swipepages.com/blog/instapage-pricing/ (as of 2026-07-11)

---

## Q4 — Embedding (Donately) & integrations

**Can you embed a Donately widget?** Yes, mechanically. Instapage supports custom HTML/CSS/JS via the HTML/CSS Settings tab (Header/Body/Footer) and an embed-code element on the page. Donately provides three embed methods — **Simple Script** (least code, auto-syncs form changes from the Donately builder), **iFrame** (isolated, robust), and **Advanced Script** (developer, most flexible, but customizations don't save back to the Donately dashboard). Any of these pastes into an Instapage custom-HTML block. Donately embedding requires a paid Donately tier (Legacy, Starter, Team, or Enterprise — not free).
- https://help.instapage.com/hc/en-us/articles/205178068-Using-Custom-HTML-Javascript-and-CSS-on-Your-Landing-Page
- https://help.instapage.com/hc/en-us/articles/205221768-Embedding-custom-HTML-or-widgets-into-an-Instapage-landing-page
- https://instapage.com/en/features/custom-code-editing
- https://support.donately.com/en/knowledge/hc/en-us/articles/360048918354-embedding-options

**Real limitations to know (vendor docs, important):**
- Instapage explicitly **does not guarantee** custom/third-party code and its **Support team won't troubleshoot** it. Only **Convert**-tier Professional Services will assist with custom code.
- Embedded elements "sit **on top** of the page" — they are **not** part of Instapage's page structure, **do not** interact with native forms/integrations/lead notifications, and **submissions through embedded forms are NOT counted by Instapage Conversion Goals.** → **Implication:** a Donately donation completed inside the embed will *not* register as an Instapage conversion. You must track the donation as a conversion via the **pixel/thank-you-page redirect** or Donately's own reporting, not Instapage's native goals.
- Custom code executes only on the **published/live** page, not in the editor/preview — so you must publish to test the Donately widget.
- **CSP:** I found **no** documented Content-Security-Policy restriction that would block Donately's script specifically; the iFrame method exists precisely to sidestep script conflicts. **Unverified** that there are zero CSP edge cases — test the live embed. (I did not find an Instapage CSP policy doc; treat "no CSP problems" as untested until you publish and confirm.)

**Facebook/Meta pixel (retargeting + conversion tracking):** Fully supported. Native Meta Pixel ID field per page; custom events (button click, form submit, thank-you-page visit) for granular conversion tracking and Custom Audiences; retargeting audiences build off the pixel. On **Convert**, Workspace Scripts add the pixel to all pages at once; otherwise it's per-page.
- https://help.instapage.com/hc/en-us/articles/205235628-Adding-a-Meta-Facebook-Tracking-Pixel-ID-to-your-page
- https://help.instapage.com/hc/en-us/articles/360016176731-Using-events-to-track-conversions-with-the-Facebook-Pixel
- https://instapage.com/en/features/tracking-pixel/

---

## Q5 — Custom domain / subdomain (arterial.org)

**Yes — subdomains work on any plan.** Instapage publishes to a custom domain via a **CNAME record pointing to `secure.pageserve.co`** (A-records/IP not supported). Auto-SSL is generated/installed by Instapage for free once the CNAME propagates — recommended order is: add CNAME at your DNS host → wait for propagation (24–48h) → add the domain/subdomain in Instapage's dashboard so SSL auto-activates.
- https://help.instapage.com/hc/en-us/articles/205226088-Publishing-on-a-Custom-Domain-CNAME
- https://help.instapage.com/hc/en-us/articles/115000334307-Enabling-SSL-or-HTTPS-on-your-landing-pages
- https://help.instapage.com/hc/en-us/articles/205242898-Adding-and-managing-custom-domains

**For arterial.org, concretely:** point a subdomain such as `give.arterial.org` (or `dollar.arterial.org`) via CNAME to `secure.pageserve.co`. This keeps pages on the registered 501(c)(3) domain — which matters for donor trust and any compliance framing — without touching the main site. The pages live on the subdomain and Donately handles the actual transaction.

**Caveats:**
- **Root-domain publishing (`arterial.org` bare, no subdomain) is a Convert-tier feature** per the plans page. For everyone else it's **subdomain only** — which is fine and arguably preferable here (`give.arterial.org` reads well and keeps the apex for the main site). (https://instapage.com/plans, as of 2026-07-11)
- If arterial.org has an existing **CAA record**, you must add a CAA entry for Google Trust Services (`pki.goog`) and email Instapage support to enable SSL. Otherwise SSL is automatic.
- Standard DNS propagation delay (24–48h) — set up the subdomain a few days before launch.

---

## Q6 — Pricing (2025–2026)

Instapage publishes three tiers. Prices below are the **list prices as of 2026-07-11** from Instapage's plans page and corroborated by independent pricing reviews:

| Tier | Price (annual) | Price (monthly) | Visitor cap | Notable inclusions |
|---|---|---|---|---|
| **Create** | ~$79/mo | $99/mo | 15,000 unique/mo | Builder, Instablocks, unlimited pages/conversions, **no A/B, no DTR, no AdMap personalization, no heatmaps** |
| **Optimize** (recommended) | ~$159/mo | $199/mo | 30,000 (up to 50,000) | Adds **A/B testing**, **dynamic text replacement**, multi-step forms |
| **Convert** | Custom | Custom | Custom | Adds AdMap-driven **personalization**, **heatmaps**, **root-domain publishing**, **global blocks** (per independent reviews), Workspace Scripts, Professional Services |

Sources:
- https://instapage.com/plans (as of 2026-07-11)
- https://swipepages.com/blog/instapage-pricing/ (as of 2026-07-11)
- https://leadpages.com/blog/instapage-pricing (as of 2026-07-11)

**Is it expensive vs. alternatives? Yes — notably.** Independent reviews consistently flag Instapage as one of the priciest builders, with complaints about **overage fees** when traffic exceeds the visitor cap and about **essential optimization features being locked to higher tiers**. For comparison, **Leadpages starts ~$37/mo with unlimited traffic and A/B testing**, and **Unbounce sits between the two** while raising the visitor cap. Instapage's own positioning ("AdMap is best-in-class if you're spending $50,000+/mo on ads") signals it's built for **high-spend performance advertisers**, not a $1-donation nonprofit campaign.
- https://www.wpbeginner.com/opinion/instapage-vs-leadpages-vs-unbounce-vs-seedprod-comparison/
- https://www.seedprod.com/best-instapage-alternatives/

**Important nuance for Arterial:** you **already own Instapage accounts.** If that ownership includes a tier with A/B + DTR (Optimize or an existing grandfathered plan), the marginal cost of using it for this campaign is **zero incremental dollars**, which changes the calculus entirely (see bottom line). *Confirm which tier the existing accounts are on — I could not verify that.*

---

## Q7 — Honest comparison for THIS use case

Scenario: ads-first funnel, one page per lead magnet, message-matched to ad creative, free ebook + skippable "$1 for the arts" Donately ask, hosted on an arterial.org subdomain, low dollar-value per conversion, needs fast rotation.

| Criterion | **Instapage** | **Thrive Themes (WP, notrealart.com)** | **Hand-built (Next.js)** | **Unbounce / Leadpages** | **Donately's own pages** |
|---|---|---|---|---|---|
| Speed to launch | Fast (builder + Instablocks) | Fast-ish (already installed, familiar) | Slow (dev build) | Fast | Fastest (form already exists) |
| Incremental per-page cost | $0 if account already owned; else high subscription | $0 (already licensed) | $0 tooling, high dev time | New subscription | $0 (within Donately) |
| A/B testing | Yes (Optimize+) | Yes (Thrive Optimize add-on) | DIY / needs tooling | Yes (Unbounce Smart Traffic; Leadpages A/B) | Limited/none |
| DTR / personalization | **Best-in-class** (DTR Optimize, AdMap personalization Convert) | Manual / limited | Fully custom but you build it | Unbounce good; Leadpages basic | None |
| Ad-to-page mapping (AdMap) | **Unique — visual UTM mapping** | None (manual) | Manual | None comparable | None |
| Embedding Donately | Yes (custom HTML/iframe), but embed not in native conversion tracking | Yes, native WP HTML block, clean | Yes, full control | Yes (custom HTML) | N/A (it *is* Donately) |
| Custom nonprofit domain | Subdomain any plan (auto-SSL); root = Convert | Root domain already = notrealart.com; arterial.org needs its own WP/host | Any domain, full control | Subdomain/custom (paid) | Donately subdomain or embed on your domain |
| Facebook pixel | Native, custom events | Via plugin/header | Full control | Native | Limited |
| Maintenance burden | Low (global blocks) but locked into platform | Low-med (WP updates/plugins) | High (you own it all) | Low but another subscription | Lowest but least flexible |
| Fit verdict | Strong on ads-first tooling; overkill/expensive unless already owned | Pragmatic, free, but weaker ad-to-page tooling; tied to notrealart.com WP | Max control, worst speed/cost for a campaign | Cheaper A/B (Leadpages) or better AI routing (Unbounce) but new spend | Fine for a single donation form, not a message-matched ad funnel |

**Key asymmetries:**
- **Donately's own pages** are the wrong tool for an *ads-first message-matched* funnel — they're a donation form, not an ad-landing system. Use Donately as the **widget**, not the page.
- **Thrive** is free-to-you and familiar, but it lives on **notrealart.com** — to host on **arterial.org** you'd stand up WordPress/Thrive on that domain (new hosting) or accept a different domain. Thrive also lacks AdMap-style ad-to-page mapping; you'd track UTMs manually.
- **Hand-built Next.js** is the worst speed/cost trade for a time-boxed campaign of many rotating pages — reserve it only if you already have the dev capacity and want the pages to become permanent infrastructure.
- **Instapage's** differentiators (AdMap, deep personalization) are real but the ones that matter most are **Convert-tier**, and its whole pricing model targets big ad spenders. Its decisive advantage here is **you already own it** + subdomain-on-arterial.org + native pixel + fast A/B — *if* the owned tier includes A/B/DTR.

---

## Q8 — Donation landing page best practices (well-sourced)

Consensus across nonprofit-fundraising and CRO sources:

- **Single, clear CTA.** Pages with one unambiguous CTA outperform multi-option pages. Use an action verb: "Donate Now," "Give $1 for the Arts." Remove nav and competing links. (idonate, 4aGoodCause, DonorDock)
- **Message match / ad-to-page continuity.** The landing page headline and hero should echo the ad's promise and creative — mismatch kills conversion. (This is precisely what Instapage AdMap/DTR operationalizes.) (Fundraise Up, general CRO)
- **Suggested amounts with impact framing.** Offer **3–5 suggested amounts** in a logical progression; pair each with a concrete impact statement — "$50 provides art supplies for one student for a semester" beats a bare "$50." For a $1 campaign, anchor the $1 ask but ladder up ($1 / $5 / $25 / custom) so willing donors can give more. (DonorPerfect, Double the Donation, Fundraise Up)
- **"You"-centered, donor-as-protagonist copy.** "You" is among the most powerful words in fundraising; frame the donor as the one making the impact. (Soapbox Engage, DonorDock)
- **Friction reduction.** Minimize form fields, default to the most common gift, offer wallet/express pay, avoid forced account creation. Every extra field costs conversions. (4aGoodCause, DonorPerfect, Raisely)
- **Mobile-first.** Average main donation-page conversion is ~**11% desktop / ~8% mobile** (nonprofit pages typically 5–14%); most ad traffic is mobile, so design and test on mobile first. (Fundraise Up, RallyUp)
- **Trust signals.** 501(c)(3) status, tax-deductibility note, security/lock indicators, and social proof (donor count, testimonials) raise completion. (idonate, DonorDock)

Sources:
- https://fundraiseup.com/blog/Optimizing-Donation-Landing-Pages/
- https://www.idonate.com/blog/nonprofit-donation-page-basics-how-to-optimize-for-more-donations
- https://4agoodcause.com/reduce-confusion-distraction-and-friction-to-convert-more-online-gifts/
- https://www.donordock.com/articles/donation-pages-that-conver
- https://www.raisely.com/blog/conversion-rate-optimisation-nonprofit-guide
- https://www.donorperfect.com/nonprofit-technology-blog/fundraising-software/donation-form-optimization-cro/
- https://doublethedonation.com/donation-levels/
- https://www.soapboxengage.com/blog/1806-5-ways-to-boost-your-wording-when-asking-for-donations
- https://rallyup.com/blog/fundraising-metrics-conversion-rate/

**Note on this specific funnel:** the "$1 ask on the download/thank-you page" is a strong pattern — you deliver the free value first (ebook), then ask on the moment of highest goodwill. Best practice above applies to that thank-you/download page: single ask, impact-framed ladder anchored at $1, skippable but visually prominent, mobile-first, Donately embed as the transaction layer.

---

## BOTTOM-LINE RECOMMENDATION

**Does Instapage carry real benefit over hand-built/Thrive pages for this ads-first $1-donation funnel? — Qualified yes, but do NOT upgrade to Convert for it.**

1. **Use the Instapage you already own — it's the right *shape* of tool for an ads-first, message-matched, many-pages funnel, and the marginal cost is ~$0 if the account already includes A/B/DTR.** Its ad-to-page mapping (AdMap), dynamic text replacement, fast page-fleet assembly (Instablocks), native Meta pixel, and subdomain-on-arterial.org support line up almost exactly with the campaign's needs. Hand-building in Next.js is the worst speed/cost trade for a time-boxed campaign of rotating pages; Thrive is free-to-you but lives on notrealart.com and lacks the ad-to-page tooling.

2. **Host on a subdomain of arterial.org (`give.arterial.org`), not the root.** Subdomain publishing with auto-SSL works on any Instapage tier via a CNAME to `secure.pageserve.co`; root-domain publishing is Convert-only and unnecessary. Set the DNS up several days pre-launch (24–48h propagation; add a `pki.goog` CAA record if a CAA record already exists).

3. **Embed Donately via its Simple Script or iFrame in an Instapage custom-HTML block — but track the donation as a conversion via the Meta pixel + thank-you redirect, NOT Instapage's native Conversion Goals** (embedded forms don't register there). Publish and test the live embed; Instapage support won't help with third-party code.

4. **Do NOT buy the Convert tier for this campaign.** Its exclusive features (AdMap *personalization*, heatmaps, root-domain, and — per independent reviews — global blocks) are aimed at $50k+/mo ad spenders. For a $1-donation nonprofit campaign the ROI isn't there. Confirm what tier the existing accounts are on; if they lack A/B/DTR (i.e. Create only), then Instapage's edge shrinks and **Thrive on an arterial.org WordPress install, or Leadpages at ~$37/mo, become genuinely competitive** — decide by whether you value AdMap/DTR enough to sit on Optimize.

5. **The platform choice matters less than execution on Q8 best practices.** Whatever you build on, the conversion outcome is driven by single-CTA, message match to the ad, an impact-framed $1→$5→$25 ladder, minimal friction, mobile-first, and 501(c)(3) trust signals. Instapage makes the *ads-first message-match* part easier; it does not substitute for good page craft.

**Decision rule in one line:** *If the owned Instapage tier already includes A/B + dynamic text replacement → use it (it's free-to-you and the best-shaped tool). If it's Create-only → don't upgrade; use Thrive on an arterial.org WP install or Leadpages instead, and keep Instapage only if AdMap/DTR is worth the Optimize price.*

---

## Sources (full list, retrieved 2026-07-11 unless noted)

**Instapage — primary (vendor):**
- Plans/pricing: https://instapage.com/plans
- AdMap: https://instapage.com/en/products/admap · https://instapage.com/blog/admap
- Dynamic Text Replacement: https://instapage.com/en/features/dynamic-text-replacement · https://help.instapage.com/hc/en-us/articles/205223658-Dynamic-Text-Replacement-How-to-use-URL-parameters-on-your-page · https://instapage.com/blog/dynamic-text-replacement-personalization
- Personalization: https://help.instapage.com/hc/en-us/articles/360041509773-Personalization-creating-personalized-experiences-for-different-audiences
- Instablocks / Global Blocks: https://instapage.com/blog/instablocks · https://instapage.com/blog/instablocks-part-5 · https://help.instapage.com/hc/en-us/articles/360001095648-What-are-Global-Blocks-and-how-to-use-them
- A/B testing: https://instapage.com/en/features/unlimited-ab-testing · https://instapage.com/blog/instablocks-part-3/
- Custom HTML/JS & embedding: https://help.instapage.com/hc/en-us/articles/205178068-Using-Custom-HTML-Javascript-and-CSS-on-Your-Landing-Page · https://help.instapage.com/hc/en-us/articles/205221768-Embedding-custom-HTML-or-widgets-into-an-Instapage-landing-page · https://instapage.com/en/features/custom-code-editing
- Meta/Facebook pixel: https://help.instapage.com/hc/en-us/articles/205235628-Adding-a-Meta-Facebook-Tracking-Pixel-ID-to-your-page · https://help.instapage.com/hc/en-us/articles/360016176731-Using-events-to-track-conversions-with-the-Facebook-Pixel · https://instapage.com/en/features/tracking-pixel/
- Custom domain / SSL / CNAME: https://help.instapage.com/hc/en-us/articles/205226088-Publishing-on-a-Custom-Domain-CNAME · https://help.instapage.com/hc/en-us/articles/205242898-Adding-and-managing-custom-domains · https://help.instapage.com/hc/en-us/articles/115000334307-Enabling-SSL-or-HTTPS-on-your-landing-pages
- Nonprofit/charity/fundraising marketing pages: https://instapage.com/blog/non-profit-landing-pages · https://instapage.com/en/tools/landing-page-software-for-charities · https://instapage.com/en/solutions/landing-pages-for-fundraising-campaigns · https://instapage.com/en/functionality/create-your-web-page-for-nonprofit-organizations

**Donately — primary (vendor):**
- Embedding options: https://support.donately.com/en/knowledge/hc/en-us/articles/360048918354-embedding-options
- Embedding into a site (Wix example, mechanics generalize): https://support.donately.com/en/knowledge/hc/en-us/articles/360009098233-embedding-a-donately-donation-form-into-a-wix-site

**Independent / third-party (pricing, comparisons, reviews):**
- https://swipepages.com/blog/instapage-pricing/
- https://leadpages.com/blog/instapage-pricing
- https://pricingify.com/instapage-pricing-review/
- https://www.wpbeginner.com/opinion/instapage-vs-leadpages-vs-unbounce-vs-seedprod-comparison/
- https://www.seedprod.com/best-instapage-alternatives/
- https://thesoftwaregal.com/instapage-vs-unbounce-vs-leadpages-comparison/

**Nonprofit donation-page CRO / best practices (independent):**
- https://fundraiseup.com/blog/Optimizing-Donation-Landing-Pages/
- https://www.idonate.com/blog/nonprofit-donation-page-basics-how-to-optimize-for-more-donations
- https://4agoodcause.com/reduce-confusion-distraction-and-friction-to-convert-more-online-gifts/
- https://www.donordock.com/articles/donation-pages-that-conver
- https://www.raisely.com/blog/conversion-rate-optimisation-nonprofit-guide
- https://www.donorperfect.com/nonprofit-technology-blog/fundraising-software/donation-form-optimization-cro/
- https://doublethedonation.com/donation-levels/
- https://www.soapboxengage.com/blog/1806-5-ways-to-boost-your-wording-when-asking-for-donations
- https://rallyup.com/blog/fundraising-metrics-conversion-rate/

---

## Explicitly UNVERIFIED / could not confirm

- **The "178% conversion increase" nonprofit case study** is vendor-sourced (Instapage blog) with no independent corroboration — do not cite as fact.
- **Global Blocks tier gating** — Instapage's plans page implies it's broadly available ("Global Elements/Instablocks"), while independent reviews place true Global Blocks on Convert. Which is authoritative is **unverified**; check inside the owned account.
- **Which Instapage tier Arterial's existing accounts are on** — not verifiable from public sources; this materially changes the recommendation (whether A/B/DTR are already included at $0 incremental cost). Confirm in-account.
- **CSP / script-conflict behavior of the Donately embed on a live Instapage page** — I found no Instapage CSP policy doc and no report of Donately-specific blocking; the iFrame method is the documented fallback. Treat "embeds cleanly, no CSP issue" as **untested** until you publish and confirm on the live page.
- **Exact current Donately pricing/plan names** (Legacy/Starter/Team/Enterprise) were named in the embedding doc but I did not pull a current Donately pricing page — verify Donately tier costs separately.
