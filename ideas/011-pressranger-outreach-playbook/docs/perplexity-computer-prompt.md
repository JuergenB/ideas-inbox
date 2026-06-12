# Perplexity Computer prompt — master submission / outreach / fundraising table

Paste the block below into **Perplexity Pro → Computer** (the agentic mode that can browse and build a shareable widget). It's engineered to produce a verified, multi-dimensional, sortable table covering open-call submission, media outreach, and fundraising — prioritizing **free, self-service, URL-based** registration. The seed list is pre-loaded from our own verified research so Computer expands rather than starts cold.

> **Why this design:** the failure mode of automated research here is *fabricated URLs* (a model guessing `site.com/submit-opportunity` patterns). The prompt's hard rule — "visit and verify every URL; never guess; mark 'confirm' if unsure" — is what forces Computer to actually browse instead of hallucinate. Default-sorting to free + instant + low-effort puts the highest-value rows on top.

---

## THE PROMPT (copy everything below)

```
ROLE
You are a meticulous research analyst building a verified, shareable resource for a US-based arts nonprofit (brands: Not Real Art and Artsville USA; parent org: Arterial / Crewest Studio).

CONTEXT
We run open calls for artists and juried exhibitions, and in fall 2026 we launch a fundraising campaign (individual donors, donor-advised funds, and grants). Today we promote almost nothing systematically and rely on our own small email list. We want ONE master, sortable resource listing every place we can (a) register/list an open call or exhibition, (b) reach press/partners to amplify it, and (c) find funding/donors — prioritizing options that are FREE and SELF-SERVICE via a URL (a web form we fill ourselves), with NO email back-and-forth or slow manual approval.

OBJECTIVE
Use Perplexity Computer to research, verify, and BUILD A SHAREABLE INTERACTIVE WIDGET containing an exhaustive, deduplicated, US-focused master table (aim for 50+ rows) with the columns defined below. Then make it sortable/filterable and provide a downloadable CSV.

CRITICAL CONSTRAINTS (do not violate)
- VISIT each site and VERIFY the URL is live and points to the actual ACTION page (the specific "submit a call / post an opportunity / apply / list your event / create account" page), NOT the homepage.
- NEVER invent or pattern-guess a URL. If you cannot find/verify the real action page, put "not found" in the URL cell. Do not fabricate.
- Record Cost and Self-service level ONLY from what you actually see on the page. If you cannot confirm, write "confirm" — never assume "free".
- US-focused: include national plus major regional/state options. Mark non-US/global clearly.
- Deduplicate. One row per destination.

COLUMNS (every row must fill all of these)
1. Name
2. Workstream — one of: Open-Call Listing | Submission Software | Media/PR Amplifier | Partner Org/Council | Fundraising/Grants/Donor | Paid-Ads Channel
3. What it is (one short line)
4. Action URL (the exact submit/post/apply/list/signup page — verified live)
5. Cost (Free | $X per listing | membership $X/yr | confirm)
6. Self-service level (Instant web form | Account required | Manual review/approval | Email/pitch required)
7. Effort/time to use (Low | Medium | High)
8. Audience / reach (approx size + who it reaches)
9. Geography (US national | US region/state | Global)
10. Best for (open call | exhibition | grant | donor | press)
11. Cadence fit (one-off post | recurring roundup | always-on)
12. Notes / gotchas
13. Source URL + date you verified it

OUTPUT
- Build a SHAREABLE, INTERACTIVE WIDGET: a table that can be SORTED and FILTERED (filter by Workstream; by Cost = Free; by Self-service = Instant web form; sort by Effort).
- DEFAULT SORT: Free + Instant self-service + Low effort at the TOP.
- Add a "QUICK-START SHORTLIST" callout box above the table: the 8–12 free, instant, self-service places to post EVERY open call, with their action URLs.
- Add a second shortlist: the top free/low-cost fundraising + grant-discovery destinations to revisit for the fall campaign.
- Provide a downloadable CSV export of the full table.
- Group or color-tag rows by Workstream.

SEED LIST (verify and EXPAND — do not limit yourself to these)
Open-call / submission: CaFÉ (callforentry.org), Submittable, ArtCall.org (artcall.org/calls/add), ArtCallEntry.com, EntryThingy (app.entrythingy.com/calls_list), Artwork Archive (artworkarchive.com/call-for-entry-management), ArtConnect (magazine.artconnect.com/organizations), ArtDeadline (artdeadline.com/adc-news), Fractured Atlas Artist Opportunity Database, The Art List, ZAPPlication, ShowSubmit, CuratorSpace, InLiquid, NYFA Opportunities, ArtRabbit, ResArtis, Café/Zealous.
Media / outreach: Hyperallergic (tips@hyperallergic.com), This Is Colossal (monthly Opportunities), Create! Magazine, Art Opportunities Monthly, Booooooom, Juxtapoz, The Art Newspaper, Arts to Hearts Project, regional arts blogs.
Partners / orgs / councils: Americans for the Arts, College Art Association, Artist Communities Alliance, Creative Capital (artist opportunities list), National Endowment for the Arts (Grants for Arts Projects), state/regional arts councils (e.g. California Arts Council, Mid-America Arts Alliance, your relevant state council).
Fundraising / grants / donor: Candid / Foundation Directory Online, Instrumentl, GrantStation, Grants.gov, state arts council grant portals, DAF sponsors (Fidelity Charitable, Schwab Charitable, DAFgiving360), giving platforms (Givebutter, Donorbox, Classy, GoFundMe, Zeffy), GivingTuesday, nonprofit PR (eReleases CauseWire), arts-specific funder databases.
Paid-ads channels (awareness): Meta (Facebook + Instagram), Pinterest, Google.

QUALITY BAR
Exhaustive (50+ rows), deduplicated, every URL live and verified, free/self-service clearly and honestly flagged, US-focused, a real source per row.

REPEAT — CRITICAL
Never fabricate a URL — verify on the actual page or write "not found". Record Cost and Self-service only from what you see, or write "confirm". Default-sort the widget to Free + Instant self-service + Low effort at the top, and include the two quick-start shortlists.
```

---

## After Computer builds it

- Share the widget link with Scott + Elise (it doubles as the "shared list" the Thursday meeting asked for).
- Export the CSV and we can import it straight into the Artwork Archive Airtable as the *Listing-Site & Partner Registry* table (the repository in [the playbook](playbook-exhibition-promotion.md)).
- Our own verified seed rows live in [research/submission-platforms.md](../research/submission-platforms.md) — cross-check Computer's output against those for the self-service URLs we've already confirmed.
