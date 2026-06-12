# Exhibition & Open-Call Promotion Playbook (Draft v1)

A repeatable SOP so every open call and every exhibition gets promoted the **same way, every time** — instead of depending on whoever has time. Built from the Thursday Open Call meeting. The engine is **our own stack** — the Artwork Archive Airtable (extended) as the promotion repository, our own AI press-release generator, and n8n for cadence; **PressRanger is one plugged-in feed** (journalist data + pitch radar), not the spine. This document is the *process*.

> **Design principle from the meeting:** *"Institutionalize the outreach process for each exhibition… we notify the right sources every time… because our own email can't be it. It's too weak or small."* And the evidence: the grants over-performed because we **ran Facebook campaigns to the landing pages** — not because of organic interest. Routine open calls deserve the same multi-channel treatment.

---

## 0. Standing infrastructure (build once)

Set these up before the first campaign so each campaign is fill-in-the-blanks, not from scratch:

| Asset | Where | Owner | Notes |
|-------|-------|-------|-------|
| **Promotion repository** | Airtable (extend Artwork Archive) | Juergen + Elise | **Extend the existing** campaigns/open-calls/submissions base with tables: *Press Releases*, *Announcement Playbook*, *Journalists/Media*, *Listing-Site & Partner Registry*, *Artist List segments*, *Campaign Assets*. Ours, portable — the system-of-record. |
| **Press-release generator** | Our stack (AI, reuse the-intersect-curator / PolyWiz) | Juergen | Brand-aware generator: from an open-call record, drafts release + artist-email + social copy, pointed at the right landing page. PressRanger's generator is a fallback. |
| **Listing-site & partner registry** | Airtable table | Elise | US-wide directory of where to register calls — full list in [research/submission-platforms.md](../research/submission-platforms.md). Start with the **free** boards: EntryThingy, ArtCallEntry, Artwork Archive, ArtConnect, Fractured Atlas; add CaFÉ for juried intake. Each row: site, URL, free/paid *(confirm)*, lead time, audience, contact. |
| **PressRanger feed** | PressRanger | Elise | One "company/brand" per property (Not Real Art, Artsville, Arterial, partners). Juergen's account is **Tier 3** = 10 brands + 4,000 exports/mo. Used to find arts-beat contacts → repository, and for inbound pitch alerts. Swappable. See [tool-comparison.md](../research/tool-comparison.md). |
| **Landing-page convention** | Existing system | Juergen | Every campaign points at one canonical registration/submission URL with UTM tags so we can measure. |
| **Automation hooks** | n8n | Juergen | A new open call / exhibition record fires the checklist below so nothing is skipped. |

---

## 1. The campaign cadence — three press moments

Per the meeting: *"We should always do a press release when the exhibition is announced, when the open call is opened, and when the exhibition goes live."* It's a **multi-pronged, "yes-and"** approach — release **and** email **and** listings **and** paid.

### Moment A — Open Call Opens
- [ ] **Press release** (open-call angle: "Call for artists — [theme], deadline [date], [prize/exhibition]"). Draft in PressRanger AI, edit for voice, **Juergen reviews link/landing alignment before send**.
- [ ] **Distribute** — decide tier (see §3). Default: PressRanger wire or owned-only; reserve eReleases/CauseWire for marquee calls.
- [ ] **List on open-call aggregator sites** (from the Airtable table) — this *is* advertising; artists go there to find calls.
- [ ] **Direct email blast** to existing artist list — short, specific, one call, one link.
- [ ] **Paid Facebook/Instagram** to the landing page (Facebook auto-triggers Instagram). This is the lever that worked for grants.
- [ ] **Targeted media/podcast pitches** to curated arts-beat contacts from Airtable (PressRanger-sourced, hand-verified).

### Moment B — Exhibition Announced / Selections Made
- [ ] **Press release** (the exhibition/selected-artists angle).
- [ ] **Email** to artist list + subscribers.
- [ ] **Social** organic + (optional) paid.
- [ ] **Pitch** to journalists who covered or engaged with the call.

### Moment C — Exhibition Goes Live
- [ ] **Press release** (it's live / opening / recap angle).
- [ ] **Email** + social recap.
- [ ] **Capture coverage** back into the Airtable CRM for next time (who covered us → warm contact).

---

## 2. The decision tree (which levers, by campaign type)

From the meeting: *"Create a decision tree — if we're going to market a grant, we want to do these things…"*

| Campaign type | Press release | Aggregator listings | Artist email | Paid social | Premium wire (eReleases/CauseWire) |
|---------------|:---:|:---:|:---:|:---:|:---:|
| **Grant** | ✓ all 3 moments | ✓ | ✓ | ✓ **(proven ROI)** | Consider (newsworthy) |
| **Open call** | ✓ all 3 moments | ✓ | ✓ | ✓ | Usually no |
| **Exhibition launch** | ✓ B + C | — | ✓ | Optional | Marquee only |
| **Event** | ✓ C | — | ✓ | Optional | No |
| **Org milestone / impact story** | ✓ | — | ✓ | Optional | ✓ (this is the kind of story worth premium reach) |

> **Strategic nuance from the meeting:** not every story should go out as a standard wire release — some are more valuable if **Not Real Art / Arterial breaks them first** rather than giving the scoop away. The decision tree decides *push vs. own*.

---

## 3. Distribution tiering (don't overspend the wire)

1. **Routine open call / exhibition** → owned channels + free listing boards + targeted pitches + paid social. **No paid wire**, or **EIN Presswire (~$149)** if cheap SEO syndication helps.
2. **Notable call or selected-artists story** → **PressRanger Gold ($399)** when AI-chatbot indexing (AIWire) + podcast/terminal reach is worth it; EIN Presswire if not.
3. **Marquee / newsworthy (flagship grant, major partnership, impact milestone)** → **eReleases / CauseWire** for PR Newswire-grade reach at nonprofit rates.

Rule of thumb: **the database/CRM/pitching is the workhorse; the paid wire is the exception — and shop it per release** (PressRanger's wire is *not* discounted by our subscription, and isn't the cheapest; see [pricing-analysis.md](../research/pricing-analysis.md)). Most lift comes from targeted pitches + free listings + paid social to an aligned landing page.

---

## 4. Measurement (so we know it works)

- Every campaign URL carries UTMs → registrations/submissions attributable by channel.
- Track **submissions per campaign** vs. baseline (current "promote nothing" baseline).
- Track **coverage earned** (which contacts responded) → feeds CRM scoring for next time.
- Compare paid-social cost-per-submission to the grant benchmark.

---

## 5. Roles

- **Elise** — owns the repository, runs the playbook per campaign, evaluates PressRanger against real calls, drafts releases/pitches.
- **Juergen** — automation hooks, landing-page/UTM alignment, reviews releases for link correctness before send.
- **Scott** — approves the cadence, the premium-wire spend decisions, and which stories we "own vs. push."

---

## 6. First live test

Run the full Moment-A checklist on the next real open call (**Art of Resistance** is the candidate). Debrief at the following Thursday session: submissions vs. baseline, what PressRanger surfaced that was usable, what needed manual cleanup. Iterate the playbook from real numbers.

---

## Phase 2 — Fundraising (fall)

Same engine, repointed: donor/grant-press contacts in Airtable, impact-story releases, eligibility-aware tiering. Gated on the financial-house-in-order / impact-story / DAF-readiness groundwork. The 501(c)(3) **broad-support requirement (funding from 500+ individuals)** makes a disciplined, repeatable donor-outreach cadence a compliance asset, not just marketing. The Atlanta grant-matching contact is a **later** conversation, per Scott.
