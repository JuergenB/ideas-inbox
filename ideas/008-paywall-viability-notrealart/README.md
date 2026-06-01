# Paywall Viability for NotRealArt.com

**Origin:** Scott Power (proposal) / Juergen Berkessel (analysis)
**Status:** Research & Discussion — recommendation: do not build now
**Date:** 2026-06-01

<p>
  <a href="https://ideas-inbox-mocha.vercel.app/ideas/008-paywall-viability-notrealart/exports/paywall-viability-light.html">
    <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/paywall-viability-notrealart-slide-1.png" width="820" alt="Should We Put Up a Paywall? — click to open full-screen presentation">
  </a>
</p>

**🎬 Open presentation (full-screen, arrow keys):** [light version →](https://ideas-inbox-mocha.vercel.app/ideas/008-paywall-viability-notrealart/exports/paywall-viability-light.html) · [dark version →](https://ideas-inbox-mocha.vercel.app/ideas/008-paywall-viability-notrealart/exports/paywall-viability.html)
**📄 Slide deck (PDF):** [exports/paywall-viability.pdf](exports/paywall-viability.pdf) — download for print or offline.
**📄 Sources & references:** [research/sources.md](research/sources.md) — full URLs, quotes, and retrieval dates for every statistic cited in the deck.

---

## The Question

Scott is considering installing a subscription paywall on **NotRealArt.com** — a metered model where visitors read four or five articles free before being required to sign up to read more. The intent is to turn the site's audience into recurring subscription revenue.

The concern driving this analysis: **our visitor volume and repeat-visitor rate are far too low for a paywall to ever be a meaningful monetization technique.** The risk is that we alienate the art-lover community with a "pay to look" gate, complicate our infrastructure, slow the user experience, and negatively impress our artists — all for revenue that rounds to zero.

This is not an argument that paywalls don't work. It's a test of whether *our* site is anywhere near the traffic and loyalty thresholds a paywall needs to earn more than it costs.

## TL;DR

A metered paywall doesn't monetize traffic — it monetizes **loyalty**. Revenue comes from the small core of readers who return *often enough to hit the free-article limit*, and the ~1–3% of those who then subscribe. Two prerequisites must both hold: **volume** (hundreds of thousands of monthly pageviews) and **loyalty** (30–40%+ of traffic returning, with a habitual super-user core).

NotRealArt.com has neither:

- **Volume:** ~5,000 visits/month — roughly **50× below** the entry threshold where a meter begins to pay.
- **Loyalty:** Period-1 cohort retention averages **~1.1%** (UserMaven, Nov 2025–May 2026). About **1 in 90 visitors ever returns at all** — let alone often enough to read past a five-article meter.

Run the funnel on our numbers, generously: 5,000 visits → ~55 return → ~0–1 read past the meter → **~$0/month** in subscribers. Even applying the optimistic benchmark of 0.5%-of-uniques-pay (which assumes loyalty we don't have) tops out near **$150/mo** — and after Stripe fees, a paywall platform, and ongoing dev/support time, the realistic outcome is **net negative**.

**Recommendation:** Don't build a paywall now. Pursue no-wall revenue (membership/patronage, sponsorship, paid artist spotlights) that monetizes goodwill and the artist side rather than taxing the reader's fifth click. Revisit only if traffic clears ~100K/month **and** returning-visitor share clears ~20–30% with a measurable super-user core.

## Why It's Not Size — It's Habit

Paywalls win where content is a **recurring need** people return to on a schedule: daily national news (NYT), must-read longform (The Atlantic), local daily news you can't get elsewhere, or job-critical trade information professionals expense. The habit *creates* the return visits the meter feeds on.

NotRealArt.com lives in **serendipitous discovery** — art lovers find us through search and social, enjoy a piece, and leave inspired. That's a healthy outcome for an arts community, but it's structurally incompatible with a meter. You can't fix a habit problem with more traffic: even 10× the visitors at ~1% loyalty still leaves the meter empty.

## Better-Fit Monetization

For a low-volume, high-affinity arts community, these earn without walling readers out — and several monetize the **artist side**, where the willingness to pay actually lives:

- **Membership / patronage** — optional "support us" (public-radio model); perks, not gates
- **Donations / pay-what-you-want** — lower friction than subscriptions; builds trust
- **Sponsorship & partnerships** — galleries, art brands, supply companies reach our exact audience
- **Paid artist spotlights** — artists pay for promotion; aligned incentives, readers stay free
- **Affiliate & marketplace** — prints, books, supplies readers already want
- **Events & workshops** — paid community, classes, ticketed gatherings

## What Would Strengthen This Analysis

The UserMaven retention chart is decisive on its own, but its repeat-visit reporting is limited. **Google Analytics 4** would sharpen the loyalty picture — Retention report, Cohort exploration, returning-user %, engaged sessions, and pages/session. If we export those (or set up a GA4 Data API service account for direct querying), the numbers can be folded into a revision.

## Status & Next Steps

- [x] Research paywall viability benchmarks (volume, loyalty, conversion thresholds)
- [x] Build the revenue-math model from UserMaven retention data
- [x] Presentation deck for discussion with Scott
- [ ] Optional: pull GA4 retention/cohort data to corroborate the ~1.1% figure
- [ ] Decision: confirm no-paywall, scope a no-wall monetization pilot (membership or sponsorship)
