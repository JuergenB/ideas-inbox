# Idea 014: Dollar for the Arts — Fundraising Front-End for Arterial

**Origin:** Juergen Berkessel (Polymash), for Arterial — 2026-07-11
**Status:** Research & Discussion
**Related:** [Idea 008 — Paywall Viability](../008-paywall-viability-notrealart/) (the defensible alternative to a reader paywall) · [Idea 009 — Arterial's Owned Platform](../009-arterial-owned-platform/) (where the content/CMS layer could eventually live) · [Idea 013 — Arterial Impact Report](../013-arterial-impact-report/) (the *retention* half of the donor-breadth loop)

---

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/014-dollar-for-the-arts/exports/dollar-for-the-arts-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/dollar-for-the-arts-slide-1.png" width="820" alt="Dollar for the Arts — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/014-dollar-for-the-arts/exports/dollar-for-the-arts-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/014-dollar-for-the-arts/exports/dollar-for-the-arts.html)
**📄 Slide deck (PDF):** [exports/dollar-for-the-arts.pdf](exports/dollar-for-the-arts.pdf) — download for print or offline.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, quotes, and retrieval dates for every claim cited in the deck.
**📄 Instapage platform research:** [research/instapage-fundraising-research.md](research/instapage-fundraising-research.md) — landing-page platform analysis with a tier-dependent recommendation.

## TL;DR

Arterial wants to run a **fall fundraising campaign** and wants a **purpose-built, conversion-ready anchor** for it. "Dollar for the Arts" is a **flexible campaign landing-page system**: a constant, gentle **"$1 for the arts" donation-onboarding layer** wrapped around a **swappable lead magnet** (one of the content assets Arterial already owns). Facebook ads drive cold traffic in; the onboarding makes a strong-but-skippable $1+ ask; access to the content stays free either way.

The reason this is more than a donate button: under IRS rules, **broad small-dollar giving — many people at $1 — is exactly what protects a 501(c)(3)'s public-charity status**, far more than a few large gifts or founder self-funding. A low-friction $1 ask is the most efficient instrument there is for manufacturing that breadth, and a *voluntary* donation is far more defensible than *paying for access*.

## The problem

Arterial has a fall fundraising campaign coming and wants an anchor built to convert. It already owns content assets and **several lead magnets**. What's missing is a **campaign-ready front-end purpose-built to turn those assets into broad small-dollar donations**, and a way to run **Facebook/Meta ads for a non-profit that are defensible** — i.e. that clearly drive *voluntary donations*, not payment for access.

So the real first question isn't "what do we build?" — it's **"what do we already own that makes this possible without reinventing the wheel?"**

## What we already own — the real starting point

An honest inventory of the assets that could feed this (confirm the full set with Scott):

| Asset | What it is | Usefulness as a fundraising magnet |
|---|---|---|
| **NRA ebooks / freebies** — [Bomb The Art World](https://notrealart.com/bomb-the-art-world/), 100 Top Street Artists, the Freebies library | Proven email-capture magnets already live, with Artist/Art-Lover segmentation and a thank-you page | **Strongest, ready today** — working funnels we can layer a $1 ask onto immediately |
| **Not Real Art podcast library** | Existing, free, podcast-hosted (Captivate) | High value, but already free — so the magnet becomes *curation / an app / membership*, not the audio itself |
| **Arterial Radio** | Today: a **collection of sequenced podcast episodes** — no dedicated listening app; only subscribe or play on a website | Weak *as-is* (website-only, not truly mobile); becomes strong **if given a portable app** — see the honest take below |
| **NRA Grant / NRA Conference** | Audience-building programs | Can anchor their own campaigns and audiences |
| **[Idea 013](../013-arterial-impact-report/) impact report** | Credibility artifact (in design) | A trust magnet that strengthens the donation ask |
| **Curated.co newsletter** | Existing NRA email audience | Distribution + re-engagement for people who skip the ask |
| **Donately** | Owned donation platform — ugly landing pages, but **excellent embeddable one-time / recurring donation widgets**; campaigns embeddable anywhere | **The donation rails.** Drop the $1 widget onto existing download/thank-you pages — little-to-no custom payment build needed |
| **Facebook ad audience / pixel** | Scott is **already running FB ads**; the NotRealArt pixel should be accruing lookalike + retargeting audiences *(verify)* | **Warm traffic.** Retargeting a built audience beats cold — materially better cost-per-donation, more defensible spend |
| **Instapage (Optimize tier)** | Owned premium landing-page builder — **Optimize** includes A/B testing + dynamic text replacement; native Meta pixel; custom subdomain | **The page platform** (decided) — free-to-us, best-shaped for the ads-first funnel; no upgrade needed |
| **Thrive Themes** | WordPress page builder connected to notrealart.com; can also serve arterial.org | The manual-build alternative — proven, cheaper, but slower to rotate/personalize than Instapage |

### Arterial Radio — an honest take

Scott loves Arterial Radio, and there's a big-swing dream of **selling it to SiriusXM** — **out of scope for this discussion.**

Be clear about what it actually is **today: a collection of sequenced podcast episodes** — with **no real delivery mechanism or listening app.** People can subscribe, or play it on a website, but that's **not truly mobile**: there's no good way to listen in the gym, in the car, or on the go. And "online radio stations" broadly get little listening now — consumption has moved to **on-demand podcasts**, which Arterial already has, already free.

So the gap isn't the *content* — it's the **delivery**. That's what makes the app idea real rather than redundant: an **installable app gives Arterial Radio the portable, gym/car/anywhere listening experience it doesn't have today.** Framed that way, *"donate a dollar for the arts, install the Arterial app, take it with you"* makes the **app itself the lead magnet** — a genuine value-add, not just a wrapper around free files. That's a real strategic option (see Open Questions).

## The concept — a flexible landing system, not a one-off page

**This is an ads-first system.** The existing lead-magnet pages perform poorly because they aren't surfaced anywhere organically — so this funnel is **paid by design**: **Facebook / Instagram ads → landing page → free download, with a strong donation gate in the onboarding.** The landing-page system exists to convert *bought* traffic, not to wait for discovery.

Two things follow:

- **The landing pages need a fundraising-first refactor.** Today's magnet pages are generic opt-in pages, not donation pages — and most of them share the same weak, unsurfaced design. Part of this work is **rebuilding them to be about the arts-fundraising campaign** and **associated with specific campaigns**, not just "download this ebook."
- **We may already have a warm audience.** Scott is **currently running Facebook ads**. If the pixel is live on NotRealArt (where some of the content lives), it should be **building lookalike + retargeting audiences** — meaning we can focus spend on *warm* traffic at a much better cost-per-donation than cold reach. **Verify the pixel/audience setup** — it changes the ad economics significantly.

One donation funnel, many magnets:

- **Constant layer:** a mission-centered **"$1 for the arts" donation gate** in the onboarding — **strong and prominent**, positioned as the price of admission *to the mission*, not to the file.
- **How "strong" is the gate? — the load-bearing design fork.** A strong ask is not the same as a hard wall, and the difference is legal, not cosmetic:
  - **Skippable strong gate (recommended default):** the ask is front-and-center and persuasive, but the free download is still available if the visitor declines. The donation stays a **clean voluntary gift** — which is what the 501(c)(3) breadth logic and defensible-ads posture depend on.
  - **Hard gate (must donate to download):** turns the magnet into a **purchase** — quid-pro-quo territory, the exact thing that makes it look like paid access rather than a donation. Weakens the "contribution" treatment and invites the objection [Idea 008](../008-paywall-viability-notrealart/) raised against walls.
  - **→ Flag for nonprofit counsel / CPA.** How hard the gate can be *while keeping the dollar a deductible gift* is a legal question, not a design preference. The paper's default is **skippable-but-strong**; the final line is counsel's call.
- **Swappable layer:** the **lead magnet behind the ask is pluggable**. Any owned asset can be the offer for a given campaign or audience — one of the existing Not Real Art ebooks, Arterial Radio, a podcast series, the impact report, a newsletter signup.
- **The key insight — we already run this pattern, minus the ask.** Not Real Art's current magnets (e.g. **[Bomb The Art World](https://notrealart.com/bomb-the-art-world/)** and **100 Top Street Artists**) already do email capture: pick your audience (Artist / Art Lover) → get a free download → join the list. "Dollar for the Arts" **layers a skippable $1 donation onto that same proven opt-in flow** — turning an email-capture funnel into an email-capture *and* small-dollar-donation funnel, without changing what already works.
- **Where the ask goes — the thank-you page we already have.** Today the post-opt-in confirmation screen is dead space: just a *"check your email"* line, a download link, and share buttons — **no ask, no follow-up** ([live example](https://notrealart.com/100-top-street-artists-of-2020-thank-you-b8767b24-5419-11ea-8d77-2e728ce88125/)). That moment — email already given, content already delivered, goodwill at its peak — is the natural, non-gating place to put the **"$1 for the arts"** ask.
- **The rails already exist — Donately.** We don't build a payment flow. **Embed a Donately one-time/recurring donation widget at the top of the download + thank-you pages** — framed as *"$1 for the arts to download this great book."* Donately's landing pages are ugly, but its widgets are strong and embeddable anywhere, so we use *our* pages and *their* rails. (Donately can also do harder "unlock gated content" embeds — relevant to the gate-hardness fork above.)
- **Skippers become a campaign, not a loss.** Anyone who downloads but doesn't give enters a **follow-up email sequence** — *"if you enjoyed this book, help us stay in business / donate to the arts"* — a gentle recurring drip until they convert. **Recurring gifts are especially valuable:** they compound the *breadth* of small donors the 501(c)(3) test rewards (see below), and Donately supports them natively.
- **Why swappable matters:**
  - **Reuse what we already own** — no new content required to launch.
  - **A/B which magnet converts** — swap the offer per campaign and measure cost-per-donation by magnet, without rebuilding the donation flow.
  - **Compounds donor breadth** — one reusable funnel run across many campaigns is the most efficient way to accumulate the *many small donors* the IRS rewards (see below).
  - **Templated, not bespoke** — mirrors the white-label/multi-tenant pattern already in [Idea 002](../002-polywiz-demo-vista-growth/) / [Idea 004](../004-multi-tenant-curator-platform/); could later ride [Idea 009](../009-arterial-owned-platform/)'s owned platform rather than living as a standalone microsite.

*(The definitive lead-magnet inventory is Scott/Juergen's call — this paper lists candidates, it does not fix the set.)*

## Why it's defensible — the 501(c)(3) breadth argument

This is the load-bearing part, and it comes straight from Arterial's own tax research ([501c3-public-support-fundraising.md](../013-arterial-impact-report/research/501c3-public-support-fundraising.md)):

- The IRS **public-support test** caps any single private donor's gift at **2% of total support** in the "public support" numerator. Everything above 2% is thrown out.
- **Worked math on $1M of 5-year support:** 500 small donors → **50% public-support ratio (passes)**. The same $1M from 3 large donors → **6% (fails)**. Same dollars raised; breadth is the only difference.
- **Founder self-funding actively hurts** — a large founder check barely helps the numerator while inflating the denominator, pushing the ratio *down*.

So "500 people at $1" isn't a cute hook — it is the **cheapest, most scalable way to build the donor breadth that keeps Arterial a public charity**. And because the ask is a **voluntary donation, not a payment for access**, it sidesteps the quid-pro-quo problem that makes a reader paywall legally and reputationally awkward (the exact reason [Idea 008](../008-paywall-viability-notrealart/) recommended *against* walling off NotRealArt.com).

> **Legal note:** the donation-receipt language, "no goods or services provided" acknowledgments, and quid-pro-quo boundaries all **require review by nonprofit counsel / a CPA** before launch. This paper flags them; it does not settle them.

## Delivery model — web PWA vs. native iOS (open decision)

The donation research also puts a **native iOS app back on the table**. Apple **prohibits charitable donations via In-App Purchase** and instead routes them through **Apple Pay, which is 0% for approved nonprofits** — so the "Apple takes 30%" objection does *not* apply here. That neutralizes payment economics as a deciding factor. The decision turns on what actually differs:

| Factor | Web PWA | Native iOS |
|---|---|---|
| **Payment cut** | 0% via Apple Pay | 0% via Apple Pay (not IAP) — **a wash** |
| **Ad-funnel friction** | Ad → one tap into onboarding ✅ | Ad → App Store → install → open → onboard ❌ |
| **Build & maintenance** | One codebase, no review, ships in weeks; iOS + Android + desktop ✅ | Swift/React-Native, dev account, review cycles, iOS-only unless Android also built ❌ |
| **Exposure** | No review gate | App Store scrutiny of "free app that immediately asks for money" ⚠️ — but adds legitimacy, native audio, push ✅ |
| **Time-to-launch (fall)** | Weeks ✅ | + review + platform time ❌ |

**Recommended framing (proposal, not decision):** **PWA as the fall-campaign acquisition front-end** — speed, funnel, and cross-platform reach win, and payment economics are equal. **Native iOS as a phase-2 option** *if* the goal shifts from "donations captured this fall" to "a retained daily listening product" (background audio, push re-engagement, home-screen habit) — the same acquisition-vs-retention split that separates this idea from [Idea 013](../013-arterial-impact-report/).

> **Verify before finalizing:** the Apple Pay / no-IAP / App-Store-review claims above are current understanding, to be confirmed against Apple's App Review Guidelines (§3.2.1) and Apple Pay nonprofit onboarding.

## How it fits the other ideas

- **[Idea 013 — Impact Report]** retains donors with an annual story; **014 acquires them**. Together they are the two halves of the donor-breadth loop the 501(c)(3) test rewards.
- **[Idea 008 — Paywall]** concluded NotRealArt shouldn't wall readers out; a voluntary donation front-end is the "monetize goodwill, not access" answer it pointed to.
- **[Idea 009 — Owned Platform]** is where the content, CMS, and audio layer could eventually live so this isn't a disconnected microsite.

## Open questions to discuss

These are the forks to settle together — the paper deliberately leaves them open:

1. **Landing-page-only, or phased?** Is the fall goal "capture donations now using magnets we already have," or "launch an app product"? (A phased path is sketched below.)
2. **How hard is the gate?** Skippable-but-strong voluntary ask (keeps the dollar a clean gift) vs. hard "donate to download" (a purchase — quid-pro-quo). *Counsel's call, not ours.*
3. **Is the app the magnet, or the delivery?** "Donate $1, install the Arterial app" (app *is* the reward) vs. app as just a nicer wrapper around existing free content.
4. **Which magnet leads the fall campaign?** One of the proven ebooks (fast) vs. a new "install the app" offer (bigger, slower).
5. **Delivery for v1** — web PWA (fast, cross-platform) vs. native iOS (heavier; better for retention later).
6. **Reuse vs. rebuild** — aggregate/link existing podcasts + freebies, or rebuild them inside a new experience.
7. **What defines success?** Target cost-per-donation from FB/IG ads; is the fall goal donor *breadth* (many $1 gifts) or dollars raised? (The 501c3 logic says breadth.)
8. **Payment rails & nonprofit approval** — we already have **Donately** (one-time + recurring, embeddable); do we just use it, or add Apple Pay for nonprofits / Stripe / PayPal Giving Fund for a smoother native flow? Confirm Arterial's approval status on each. *(Needs verification.)*
9. **Is the warm audience actually being built?** Confirm the **Facebook pixel** is live on NotRealArt and that lookalike/retargeting audiences are accruing from Scott's current ads — this materially changes ad economics.
10. **Which page platform? — RESOLVED: Instapage (Optimize).** We have **Instapage Optimize**, which includes **A/B testing + dynamic text replacement** — the exact threshold the [research](research/instapage-fundraising-research.md) set for "use the Instapage you already own." It's free-to-us and best-shaped for an ads-first, message-matched funnel; no upgrade needed, Thrive/Leadpages fall away. *Note:* Optimize covers DTR (headline/CTA message-match) and A/B; **AdMap-driven deep audience personalization and global blocks are Convert-only** — not needed for a $1 funnel, so **do not upgrade to Convert.**
11. **Where do the campaigns live — arterial.org (the 501c3).** Donations should be associated with the **registered 501(c)(3), Arterial.org**, not notrealart.com — for donor trust, tax-receipt clarity, and public-support attribution. Concretely: publish to a **subdomain like `give.arterial.org`** (CNAME → `secure.pageserve.co`, auto-SSL, works on any Instapage tier) and put the pixel there. Note: **Donately's embedded widget works but its completions won't register in Instapage's native conversion tracking** — track donations via the Meta pixel + thank-you redirect (or Donately's own reporting).

## A possible phased approach

One way to sequence it so the fall campaign ships without betting on a big build:

- **Phase 0 — fall campaign, ships now (web only).** **Refactor the existing ebook-magnet landing pages to be fundraising-first and campaign-associated**, embed a **Donately $1 widget** (one-time + recurring) at the download/thank-you step as a **skippable-but-strong gate**, and add a **follow-up email drip** for skippers. Drive it with **FB/IG ads, retargeting the warm audience** Scott's ads are building. Reuses what's already live (magnets, Donately rails, ad audience); fastest, cheapest, testable this season.
- **Phase 1 — if Phase 0 converts.** A small aggregated **installable PWA** that bundles podcasts + freebies + radio behind one "Arterial app" install, so the **app itself becomes the magnet** ("donate a dollar, install the app").
- **Phase 2 — retention, later.** A **native iOS app** *if* the listening product proves out — background audio, push re-engagement, home-screen habit. Decide against real Phase-1 numbers, not up front.

## Next steps

- [ ] Align on the **concept and the open questions above** — especially the gate-hardness fork and phased-vs-not.
- [ ] Confirm the **lead-magnet inventory** and which magnet leads the fall campaign.
- [ ] **Legal review** of gate hardness, donation-ask, receipt, and acknowledgment language (nonprofit counsel / CPA).
- [ ] Decide **Phase 0 scope + delivery model** for the fall.
- [ ] On green light: build the discussion deck and a click-through prototype of the onboarding flow.

## Research

- **[research/instapage-fundraising-research.md](research/instapage-fundraising-research.md)** — Instapage for an ads-first $1 fundraising funnel: personalization/AdMap, rapid page rotation, Donately embedding, custom-domain hosting on arterial.org, pricing/tier-gating, an honest Instapage-vs-Thrive-vs-build comparison, donation-page best practices, and a tier-dependent bottom-line recommendation (with cited sources + explicit unverified items).
- **[../013-arterial-impact-report/research/501c3-public-support-fundraising.md](../013-arterial-impact-report/research/501c3-public-support-fundraising.md)** — the IRS public-support / donor-breadth math that underpins the defensibility argument.
