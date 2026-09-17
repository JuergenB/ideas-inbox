---
marp: true
theme: default
paginate: true
html: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');
  :root {
    --a: #e85d0c; --a2: #d14e00;
    --bg: #f8f8f8; --s: #ffffff; --b: #e0e0e0;
    --m: #6f6f6f; --t: #1a1a1a;
    --g: #16a34a; --r: #dc2626; --y: #d97706; --blue: #0177c8;
    --body: #555; --label: #999;
  }
  * { font-family: 'Inter', 'Outfit', sans-serif; }
  /* Slides are 1280x720. The body is a flex column that CENTRES its content in
     the space left under the headline. Everything is sized so a TWO-LINE
     headline still leaves room; that overflow was the bug in the last deck. */
  section {
    background-color: #f8f8f8;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.025) 100%);
    color: var(--t); font-weight: 400; padding: 40px 64px 60px; line-height: 1.42; font-size: 26px;
    display: flex; flex-direction: column; overflow: hidden;
  }
  section > .body { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 16px; }
  h1 { font-family: 'Outfit'; font-weight: 700; font-size: 1.72em; color: var(--t);
       letter-spacing: -0.02em; line-height: 1.12; margin: 0 0 10px; max-width: 94%; }
  h2 { font-weight: 300; font-size: 1.0em; color: #777; margin: 0 0 14px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m);
       text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 6px; }
  p { margin: 0 0 10px; }
  strong { color: var(--a); font-weight: 500; }
  a { color: var(--blue); text-decoration: none; }
  section.lead { justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.3em; max-width: 100%; }
  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #ddd; }
  section.bg-glow { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(232,93,12,0.06) 100%); }
  section.bg-green { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(22,163,74,0.07) 100%); }
  section.bg-gold  { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(217,119,6,0.07) 100%); }
  section.bg-blue  { background-image: radial-gradient(ellipse at 50% 50%, transparent 22%, rgba(1,119,200,0.07) 100%); }
  section.bg-red   { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(220,38,38,0.05) 100%); }
  .card { background: #fff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 14px 16px; }
  .card .k { font-size: 0.6em; color: #6f6f6f; text-transform: uppercase; letter-spacing: 0.1em; }
  .card .h { font-size: 0.9em; color: var(--t); margin-top: 5px; font-weight: 500; }
  .card .d { font-size: 0.74em; color: var(--body); margin-top: 6px; }
  .row { display: flex; gap: 16px; }
  .huge { font-family: 'Outfit'; font-weight: 800; font-size: 4.4em; line-height: 0.95;
          letter-spacing: -0.03em; color: var(--t); }
  .huge.g { color: var(--g); } .huge.r { color: var(--r); } .huge.a { color: var(--a); }
  .sub { font-size: 0.88em; color: var(--body); max-width: 88%; }
  .note { padding: 12px 17px; background: #fff; border-left: 3px solid var(--a);
          border-radius: 0 8px 8px 0; font-size: 0.76em; color: var(--body); }
  .note.g { border-left-color: var(--g); } .note.b { border-left-color: var(--blue); }
  .note.r { border-left-color: var(--r); } .note.y { border-left-color: var(--y); }
  table { font-size: 0.68em; border-collapse: collapse; width: 100%; }
  th { text-align: left; color: var(--m); font-weight: 500; font-size: 0.9em; text-transform: uppercase;
       letter-spacing: 0.08em; border-bottom: 1px solid #e0e0e0; padding: 6px 8px; }
  td { color: var(--body); border-bottom: 1px solid #efefef; padding: 5px 8px; vertical-align: top; }
  .barrow { display: flex; align-items: center; gap: 16px; margin-bottom: 14px; }
  .barlab { width: 300px; font-size: 0.82em; color: var(--body); flex: none; }
  .bartrack { flex: 1; height: 28px; background: #e9e9e9; border-radius: 6px; overflow: hidden; }
  .barfill { height: 100%; border-radius: 6px; }
  .barval { width: 96px; flex: none; text-align: right; font-family: 'Outfit'; font-weight: 700;
            font-size: 1.05em; color: var(--t); white-space: nowrap; }
  .pill { display: inline-block; font-family: 'Outfit'; font-weight: 600; font-size: 0.6em;
          letter-spacing: 0.06em; padding: 3px 9px; border-radius: 999px; border: 1px solid #e0e0e0; background: #fff; color: var(--body); }
  .pill.g { border-color: #16a34a40; color: var(--g); background: #16a34a10; }
  .pill.r { border-color: #dc262640; color: var(--r); background: #dc262610; }
  .pill.y { border-color: #d9770640; color: var(--y); background: #d9770610; }
  .pill.b { border-color: #0177c840; color: var(--blue); background: #0177c810; }
  .pill.a { border-color: #e85d0c40; color: var(--a); background: #e85d0c10; }
  /* Timeline grid used on the mock-up slide. */
  .tl { display: grid; grid-template-columns: 170px repeat(6, 1fr); gap: 6px 6px; font-size: 0.7em; align-items: center; }
  .tl .hd { color: var(--m); text-transform: uppercase; letter-spacing: 0.08em; font-size: 0.85em; text-align: center; padding-bottom: 4px; border-bottom: 1px solid #e0e0e0; }
  .tl .seg { color: var(--t); font-weight: 500; padding-right: 8px; }
  .tl .cell { min-height: 34px; display: flex; gap: 4px; align-items: center; justify-content: center; }
  .tl .em { border-radius: 6px; padding: 5px 8px; font-size: 0.82em; color: var(--bg); white-space: nowrap; }
  .steps { display: flex; align-items: stretch; gap: 0; }
  .steps .st { flex: 1; background: #fff; border: 1px solid #e0e0e0; padding: 12px 12px; font-size: 0.72em; color: var(--body); position: relative; }
  .steps .st:first-child { border-radius: 10px 0 0 10px; } .steps .st:last-child { border-radius: 0 10px 10px 0; }
  .steps .st b { display: block; color: var(--t); font-weight: 500; font-size: 1.05em; margin-bottom: 4px; }
  ul { margin: 0; padding-left: 1.1em; } li { margin-bottom: 5px; color: var(--body); font-size: 0.84em; }
footer: 'Arterial · Campaign sequence tool · Discussion paper · Juergen Berkessel'
---

<!-- _class: lead bg-blue -->
<!-- _paginate: false -->
<!-- _footer: '' -->

### Arterial fundraising, and everything after it

# From a campaign plan to the emails that go out

## A discussion paper on building a tool that turns a brief into email sequences, and whether it belongs in Polywiz, on its own, or nowhere

<div style="margin-top: 32px; color: #6f6f6f; font-size: 0.72em;">Team discussion · September 2026 · Nothing here is decided</div>

---

<!-- _class: bg-glow -->

### The whole thing in one sentence

# We have the plan, the list, the people and the tools. Not the machine between them.

<div class="body">

<div class="sub" style="max-width:100%;">
Julie and Molly write the fundraising plan. Scott records the video. The list is clean and scored. Polywiz can write in our voice. ActiveCampaign can send. <strong>What connects them today is one person, by hand, and that person is the only one who knows how.</strong>
</div>

<div class="row">
  <div class="card" style="flex:1;"><div class="k">The question</div><div class="h">Can a tool take a campaign concept and produce the sequences, the timings, the segments and the emails?</div></div>
  <div class="card" style="flex:1;"><div class="k">The second question</div><div class="h">If it can, where does it live: inside Polywiz, on its own, or as a kit of parts we already own?</div></div>
</div>

<div class="note b">This deck lays out three approaches and ends with the questions we need to answer together. <strong>It recommends one, as an opening position.</strong></div>

</div>

---

<!-- _class: bg-red -->

### What happens today

# Seven hand-offs, one head

<div class="body">

<div class="steps">
  <div class="st"><b>1 · Plan</b>Consultant writes the campaign document</div>
  <div class="st"><b>2 · Read</b>Juergen turns it into a send list</div>
  <div class="st"><b>3 · Write</b>Each email drafted from scratch</div>
  <div class="st"><b>4 · Segment</b>Audiences built in ActiveCampaign</div>
  <div class="st"><b>5 · Automate</b>Welcome, thank-you, suppression flows built by hand</div>
  <div class="st"><b>6 · Test</b>Test sends, personalisation checked</div>
  <div class="st"><b>7 · Schedule</b>Dates set, sends enabled</div>
</div>

<div class="sub" style="max-width:100%;">Nobody else can preview the sequence before it exists in ActiveCampaign. Nobody else can change a date or a paragraph without asking. <strong>And "remove people who donate from the ask" is rebuilt every time.</strong></div>

<div class="note r">The plan asks for twelve sends in three acts plus four automations, all before October. <strong>Every one of those is a manual build today.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### What the plan already asks for

# Twelve sends, three acts, four flows

<div class="body">

<table>
<tr><th style="width:22%">Act</th><th style="width:34%">What it does</th><th>Cadence the consultants set</th></tr>
<tr><td><strong>1 · Prove</strong></td><td>"Look what we've accomplished." Stories, no ask.</td><td>One email a week, soft call to action</td></tr>
<tr><td><strong>2 · Participate</strong></td><td>"Become part of what we're building." First hard ask, then story and ask alternating.</td><td>One to two a week</td></tr>
<tr><td><strong>3 · Act</strong></td><td>"Help make 2027 possible." Giving Tuesday, impact update, year-end deadline.</td><td>Two to three a week, daily in the last 48 hours</td></tr>
<tr><td><strong>Always on</strong></td><td>Welcome and nurture · abandoned donation · thank-you and receipt · lapsed donor</td><td>Triggered, not scheduled</td></tr>
</table>

<div class="note b">Warm contacts get the full arc, twelve to sixteen emails. The cold bulk is capped at eight to ten. <strong>Anyone who gives leaves the ask stream the same day.</strong> Those three rules are the spec, and they live in a Word document.</div>

</div>

---

<!-- _class: bg-gold -->

### This is not only a fundraising problem

# Fundraising is one shape of sequence. We need seven.

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">Fundraising appeal</div><div class="d">Soft launch, launch, story, progress, match, final day, thank-you.</div></div>
  <div class="card" style="flex:1;"><div class="k">Welcome</div><div class="d">Four emails over two weeks, or eight over 45 days. No hard ask before the end.</div></div>
  <div class="card" style="flex:1;"><div class="k">Nurture / news</div><div class="d">"Here is what ArtHouse did this month." One email, right cohort, or a short run.</div></div>
  <div class="card" style="flex:1;"><div class="k">Re-engagement</div><div class="d">"We miss you", what your last gift did, come back.</div></div>
</div>
<div class="row">
  <div class="card" style="flex:1;"><div class="k">Stewardship</div><div class="d">Thank-you within 48 hours, then what the gift did.</div></div>
  <div class="card" style="flex:1;"><div class="k">Ambassador</div><div class="d">Recruit past guests to share the impact report, not to give.</div></div>
  <div class="card" style="flex:1;"><div class="k">Promotion</div><div class="d">Announce a newsletter, an exhibition, a podcast season. The Intersect, too.</div></div>
</div>

<div class="note">Same engine, different arc. <strong>Whether we build a fundraising tool or an audience tool is a settings question, not an architecture question.</strong></div>

</div>

---

<!-- _class: bg-glow -->

### The one idea that organises everything else

# There are two problems here, not one

<div class="body">

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--a);">
    <div class="k">Problem one · The arc</div>
    <div class="h">Brief in, sequence out</div>
    <div class="d">Understand the brand, read the documents, choose the arc, decide which segments get which variation, write every email, show it all on one timeline, let people edit it.</div>
    <div class="d"><strong>This is where the value is, and it is the same work whatever sends the email.</strong></div>
  </div>
  <div class="card" style="flex:1; border-top:3px solid var(--blue);">
    <div class="k">Problem two · The delivery</div>
    <div class="h">Sequence into ActiveCampaign</div>
    <div class="d">Create the emails, aim them at the right segment, set the dates, wire the "stop asking once they give" rule, hand over drafts a person enables.</div>
    <div class="d"><strong>This is bounded, partly automatable, and partly a hard wall.</strong></div>
  </div>
</div>

<div class="note">Every approach on the following slides keeps these two apart. <strong>The arc side should never know how the email will be sent.</strong></div>

</div>

---

<!-- _class: lead bg-blue -->

### Part one

# What the arc side has to know

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%;">The best-practice foundations a generator must carry, so it proposes something a fundraiser would recognise.</div>

---

<!-- _class: bg-blue -->

### The shapes are known

# Every good sequence follows a published pattern

<div class="body">

<table>
<tr><th style="width:24%">Sequence</th><th style="width:20%">Emails · span</th><th>What each one does</th></tr>
<tr><td><strong>Welcome</strong></td><td>4 · 14 days, or 8 · 45 days</td><td>Person introduces themselves and asks for a reply · what we offer · a story · a resource · only the last one asks</td></tr>
<tr><td><strong>Appeal</strong></td><td>7 to 10 · 3 to 6 weeks</td><td>Soft launch to insiders · launch · one story · progress bar · match if there is one · final day morning, midday, evening · thank-you</td></tr>
<tr><td><strong>New donor</strong></td><td>3 · one a week</td><td>Gratitude and a story, no ask · what your gift did · invitation to give monthly</td></tr>
<tr><td><strong>Lapsed</strong></td><td>2 · two weeks apart</td><td>What your last gift did, reply to me · an appeal tied to outcomes</td></tr>
<tr><td><strong>Ambassador</strong></td><td>4 · first week</td><td>Thanks and a share nudge · milestone · make your own first gift · it is hard, here is help</td></tr>
</table>

<div class="note b">Sources: NextAfter, Bloomerang, GivingTuesday toolkit, Funraise. <strong>The tool proposes the shape; the operator edits it. The model never invents structure.</strong></div>

</div>

---

<!-- _class: bg-green -->

### What actually raises money in email

# The evidence points away from "make it beautiful"

<div class="body">

<div class="barrow">
  <div class="barlab">Sent from a named person, not the organisation</div>
  <div class="bartrack"><div class="barfill" style="width:38%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">+28 to 38% opens</div>
</div>
<div class="barrow">
  <div class="barlab">Plain text instead of a designed template</div>
  <div class="bartrack"><div class="barfill" style="width:29%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">+29% donors</div>
</div>
<div class="barrow">
  <div class="barlab">One link per email instead of several</div>
  <div class="bartrack"><div class="barfill" style="width:27%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">+27% gifts</div>
</div>
<div class="barrow" style="margin-bottom:0;">
  <div class="barlab">One cultivation email a week, no extra ask</div>
  <div class="bartrack"><div class="barfill" style="width:21%; background:linear-gradient(90deg,#0177c8,#0177c8aa);"></div></div>
  <div class="barval">+21% revenue</div>
</div>

<div class="note g">All from NextAfter's published experiments. <strong>A generator that defaults to a person's name, plain text and one link is encoding the evidence, not a taste.</strong> The consultants' plan already says the same thing.</div>

</div>

---

<!-- _class: bg-gold -->

### Where the same campaign has to differ

# One arc, four things that change per segment

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">The story hook</div><div class="d">A past podcast guest hears their own episode named in sentence one. A prior donor hears what their gift did. A stranger hears the problem and the proof.</div></div>
  <div class="card" style="flex:1;"><div class="k">The ask</div><div class="d">Anchored to giving history for donors. A declared default for everyone else. Never a number the model chose.</div></div>
  <div class="card" style="flex:1;"><div class="k">The call to action</div><div class="d">Give · give again · come back · share this · reply to me. Ambassadors are asked to share, not to give.</div></div>
  <div class="card" style="flex:1;"><div class="k">The sender</div><div class="d">Always a person. Scott for the list. The host who knows them for guests. Elise for Artsville.</div></div>
</div>

<div class="sub" style="max-width:100%;">What stays shared: the arc, the dates, the story beats. <strong>Segmented sends open 14% more and click twice as often as blasts</strong>, across eleven thousand campaigns Mailchimp measured.</div>

<div class="note">The timeline reads as one campaign with four voices, not four campaigns.</div>

</div>

---

<!-- _class: bg-blue -->

### Who those segments are, in our account

# The audiences exist. Most have never been written to as themselves.

<div class="body">

<table>
<tr><th style="width:36%">Audience</th><th style="width:16%">Size</th><th>What is different about the message</th></tr>
<tr><td><strong>Past podcast guests</strong></td><td>258, 81 matched so far</td><td>We interviewed you. Help us share the impact report.</td></tr>
<tr><td><strong>Grant winners</strong></td><td>36 across five cycles</td><td>You were funded. Here is what that fund does next.</td></tr>
<tr><td><strong>Artists on the list</strong></td><td>2,967</td><td>Cheerleaders, not critics. Peer to peer.</td></tr>
<tr><td><strong>Artsville readers</strong></td><td>1,136, through Ghost</td><td>Craft and place. Sent by Elise, not from ActiveCampaign.</td></tr>
<tr><td><strong>Prior donors</strong></td><td>134 on the donor lists</td><td>Thank first. Then the monthly invitation.</td></tr>
</table>

<div class="note b">Plus the 5,648 on the fundraising list who get the capped consumer arc. <strong>Almost nobody knows Arterial by name.</strong> They know Not Real Art or Artsville, so which brand a person came through is the first thing the tool must know.</div>

</div>

---

<!-- _class: bg-red -->

### What we have already learned the hard way

# Three failures the tool must be built around

<div class="body">

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">It did the maths</div><div class="d">Handed a date, the model wrote "it's been over a year since you exhibited with us" to a real person. It had been five weeks. <strong>Now every interval is computed in code and handed over as finished words.</strong></div></div>
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">A click became a relationship</div><div class="d">"Clicked the Not Real Art home page" turned into "you were featured on Not Real Art". Plausible, specific and false. <strong>A click is never described as participation.</strong></div></div>
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">Numbers without a source</div><div class="d">A fabricated statistic in a funder report damages credibility permanently. <strong>Every number, name and outcome in a draft must trace to an uploaded document or a contact field, or it is flagged.</strong></div></div>
</div>

<div class="note r">These three are already enforced in the outreach drafting workflow we run today. <strong>They come with us, along with "a human signs every donor-facing message".</strong></div>

</div>

---

<!-- _class: lead bg-blue -->

### Part two

# What ActiveCampaign lets a machine build

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%;">Checked against the vendor's own API documentation this week, and against what we have already probed in our account.</div>

---

<!-- _class: bg-gold -->

### The honest capability map

# Broadcasts: fully buildable. Automations: not by any API.

<div class="body">

<table>
<tr><th style="width:44%">What the tool would need to create</th><th style="width:16%">By API</th><th>Notes</th></tr>
<tr><td>A one-off email in <strong>draft</strong>, with HTML, list, segment and a send date</td><td><span class="pill g">Yes</span></td><td>One call. Nothing sends until a person enables it.</td></tr>
<tr><td>The email content, subject, sender, preheader</td><td><span class="pill g">Yes</span></td><td>Lands as custom HTML; the drag-and-drop designer will not show it.</td></tr>
<tr><td>A test send to the operator</td><td><span class="pill g">Yes</span></td><td>Checks personalisation before anyone else sees it.</td></tr>
<tr><td>A saved segment</td><td><span class="pill y">Partly</span></td><td>Only shapes the segment builder makes are guaranteed. Build one by hand, copy it.</td></tr>
<tr><td>An <strong>automation</strong>: trigger, wait, send, goal, exit</td><td><span class="pill r">No</span></td><td>No create, edit, copy, share or import call in either API version.</td></tr>
</table>

<div class="note y">The tools ActiveCampaign ships for AI assistants have the same shape: read, tag, enrol, edit a message. <strong>Nothing creates an automation, and nothing sends.</strong></div>

</div>

---

<!-- _class: bg-green -->

### Why that wall matters less than it looks

# Two kinds of sequence, and only one needs an automation

<div class="body">

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--g);">
    <div class="k">Calendar sequences</div>
    <div class="h">Everyone gets email four on the same day</div>
    <div class="d">The fundraising arc. Giving Tuesday. Year end. A news email about ArtHouse. A newsletter promotion.</div>
    <div class="d"><strong>These are scheduled broadcasts aimed at a segment. Fully buildable by API today, in draft, per segment, with dates.</strong></div>
  </div>
  <div class="card" style="flex:1; border-top:3px solid var(--y);">
    <div class="k">Triggered sequences</div>
    <div class="h">Something happens to one person</div>
    <div class="d">Someone joins the list. Someone gives. Someone abandons a donation. Someone goes quiet for a year.</div>
    <div class="d"><strong>These are automations. Built once, by hand or by ActiveCampaign's own AI, then reused for years.</strong></div>
  </div>
</div>

<div class="note g">The plan's twelve sends are all calendar sequences. The four always-on flows are triggered. <strong>The repeated work is automatable; the one-time work is the part that is not.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### The rule everyone worries about

# "Stop asking once they give" does not need a new automation

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">For calendar sends</div><div class="h">The segment decides at send time</div><div class="d">Each broadcast is aimed at a segment whose conditions include "does not have the tag Donated 2026". Whoever gave on Tuesday is not in Thursday's audience. No flow, no exit step, nothing to rebuild per campaign.</div></div>
  <div class="card" style="flex:1;"><div class="k">For triggered flows</div><div class="h">One goal step, built once</div><div class="d">A goal early in each welcome or nurture flow watches for that tag and ends the automation. Or one central "donation received" flow ends every ask flow and starts the thank-you.</div></div>
</div>

<div class="sub" style="max-width:100%;">Both depend on the same thing: <strong>every donation path applies the tag</strong>. Donately reaches ActiveCampaign through Zapier today; the tag has to be in that mapping, and the donor lists holding 11 and 1 members say it is not yet.</div>

<div class="note b">One tag, applied reliably, is the entire suppression system. <strong>That is a data job, not a tool job, and it is on the critical path either way.</strong></div>

</div>

---

<!-- _class: bg-gold -->

### The vendor is building part of this themselves

# ActiveCampaign's own AI will draft a whole automation from a paragraph

<div class="body">

<div class="sub" style="max-width:100%;">Since October 2025, on every plan: paste "generate a four-email welcome sequence for new artist subscribers" into the sidebar and the <strong>Automations agent</strong> drafts the triggers, the waits and the email copy into the builder for review. There is also an AI campaign builder for single emails and a brand kit that reads colours and fonts off a URL.</div>

<div class="row">
  <div class="card" style="flex:1;"><div class="k">What it is good at</div><div class="d">The skeleton. A person who has never opened the automation builder gets a reviewable flow in a minute.</div></div>
  <div class="card" style="flex:1;"><div class="k">What it is not</div><div class="d">Our voice, our facts, our segments, our guardrails. No API, so nothing can drive it or read what it made except a person.</div></div>
</div>

<div class="note y">So the workable division is: <strong>our tool writes the brief and the emails; a person pastes the brief into their agent to get the flow; our tool then replaces the generated copy with ours.</strong> Not a hack. The only route to a generated automation that exists.</div>

</div>

---

<!-- _class: bg-red -->

### Can we buy it instead?

# Nobody sells this shape

<div class="body">

<table>
<tr><th style="width:26%">Tool</th><th style="width:38%">What it does</th><th>Pushes a sequence into ActiveCampaign?</th></tr>
<tr><td><strong>Klaviyo Flows AI</strong></td><td>Description in, full flow out. The closest analogue.</td><td>No. Inside Klaviyo only.</td></tr>
<tr><td><strong>Jasper email sequence</strong></td><td>Multi-step copy from a brief, any platform.</td><td>Paste only. No arc logic, no nonprofit rules.</td></tr>
<tr><td><strong>Dataro</strong></td><td>AI appeals and journeys from donor data. New ActiveCampaign link in July.</td><td>Reads from it. Does not write drafts into it.</td></tr>
<tr><td><strong>Raisely, Funraise, Keela, Bloomerang, Bonterra</strong></td><td>Journeys inside their own sending tools.</td><td>No. Each is its own email system.</td></tr>
<tr><td><strong>HubSpot, Mailchimp assistants</strong></td><td>Single emails, generic copy.</td><td>No.</td></tr>
</table>

<div class="note r">Everything that builds sequences builds them inside its own sender. <strong>Nothing takes a brief plus uploaded documents, writes per-segment sequences on a timeline, and drafts them into ActiveCampaign.</strong> The niche is real, and it is small.</div>

</div>

---

<!-- _class: lead bg-blue -->

### Part three

# What we already own, and what nobody has built

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%;">An inventory across Polywiz, the Intersect curator, Auctor and this campaign's own tooling.</div>

---

<!-- _class: bg-green -->

### The reuse inventory

# Most of the arc side already exists somewhere

<div class="body">

<table>
<tr><th style="width:30%">Capability</th><th style="width:22%">Where it lives</th><th>State</th></tr>
<tr><td><strong>Brand voice</strong>, eight tone dimensions, compiled prompt</td><td>Polywiz</td><td>Mature. The Intersect curator copies the same model.</td></tr>
<tr><td><strong>Document upload and interpretation</strong></td><td>Polywiz</td><td>Mature. A PDF is read and assessed on arrival.</td></tr>
<tr><td><strong>Campaign arc</strong>: awareness, amplification, invitation, ask</td><td>Polywiz</td><td>Works, but computed from a post's position. Nothing is stored.</td></tr>
<tr><td><strong>Retell it in your own voice</strong> so it stops sounding generated</td><td>Auctor</td><td>Live. Called by Polywiz and the curator.</td></tr>
<tr><td><strong>Preview, edit, regenerate, accept</strong> a generated piece</td><td>Polywiz, curator</td><td>Mature screens.</td></tr>
<tr><td><strong>ActiveCampaign client</strong>, segments, engagement, matching</td><td>This campaign's scripts</td><td>Read paths proven live. One careful writer.</td></tr>
<tr><td><strong>Draft one email with guardrails</strong></td><td>n8n workflow</td><td>Live since 3 September.</td></tr>
</table>

<div class="note g">Six of seven were built for something else. <strong>None of them knows what a sequence is.</strong></div>

</div>

---

<!-- _class: bg-red -->

### The honest gaps

# Six things that do not exist in any of our repositories

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">1</div><div class="h">A stored sequence</div><div class="d">Emails in order, each with a stage, a day offset, a segment, a subject and a body. Polywiz keeps nothing.</div></div>
  <div class="card" style="flex:1;"><div class="k">2</div><div class="h">Email composition</div><div class="d">No email rendering anywhere except password resets.</div></div>
  <div class="card" style="flex:1;"><div class="k">3</div><div class="h">ActiveCampaign link</div><div class="d">None in Polywiz or the curator. Only this campaign's scripts talk to it.</div></div>
</div>
<div class="row">
  <div class="card" style="flex:1;"><div class="k">4</div><div class="h">Video intake</div><div class="d">Scott's recorded update has no way in. Only pasted text does.</div></div>
  <div class="card" style="flex:1;"><div class="k">5</div><div class="h">A per-brand gate</div><div class="d">Polywiz has switches for images and link-in-bio. No general "show this tab for this brand".</div></div>
  <div class="card" style="flex:1;"><div class="k">6</div><div class="h">A sequence timeline</div><div class="d">The website has the look, Polywiz has a track for posts. Neither shows segments as rows.</div></div>
</div>

<div class="note r"><strong>Gap one is the heart of it.</strong> Every approach on the next slides has to build it; they differ in where it lives.</div>

</div>

---

<!-- _class: lead bg-blue -->

### Part four

# Three ways to build it

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%;">A tab in Polywiz, a tool of its own, or a kit of parts. Then a recommendation.</div>

---

<!-- _class: bg-blue -->

### Approach A

# A gated "Sequences" tab inside Polywiz

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">What it reuses</div><div class="d">Brand voice, document intake, the arc, Auctor, the sanitiser, the preview-and-edit screens, logins the team already has, the credit meter.</div></div>
  <div class="card" style="flex:1;"><div class="k">What it adds</div><div class="d">A sequence table, email rendering, the timeline view, a per-brand switch, and an ActiveCampaign connection with the account's key held per brand.</div></div>
  <div class="card" style="flex:1;"><div class="k">The gate</div><div class="d">One boolean on the brand plus one sidebar entry. The switch pattern exists; the tab is invisible for brands that do not fundraise.</div></div>
</div>

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--g);"><div class="k">For it</div><div class="d">Teammates get a real screen without a new login. The brand knows itself. Shortest path to "Scott can preview and tweak".</div></div>
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">Against it</div><div class="d">Polywiz becomes an email tool for one customer. Three separate generation routes each need the new block. Airtable is the store. Clutter risk is real and the reason the gate exists.</div></div>
</div>

<div class="note b">Effort: medium. <strong>Most of the new code is the sequence model and the ActiveCampaign push, which every approach needs anyway.</strong></div>

</div>

---

<!-- _class: bg-gold -->

### Approach B

# A tool of its own, built for sequences

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">What it is</div><div class="d">A small app whose whole screen is the timeline: segments as rows, weeks as columns, every email a card you open, edit, regenerate and approve. Brief and documents on the left, ActiveCampaign push on the right.</div></div>
  <div class="card" style="flex:1;"><div class="k">What it borrows</div><div class="d">The voice model copied in, the way the curator did. The arc rules. Auctor over HTTP. This campaign's ActiveCampaign client as its delivery layer.</div></div>
</div>

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--g);"><div class="k">For it</div><div class="d">Nothing to clutter. Its data model is exactly the sequence. Could serve the Intersect and Artsville without asking Polywiz's permission. Cleanest home for the ActiveCampaign key.</div></div>
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">Against it</div><div class="d">A second copy of the brand configuration that drifts. Another app to host, log into, and keep alive. Slowest path to a first usable screen. The auctor-platform and email-helper repos both stalled at exactly this gate.</div></div>
</div>

<div class="note y">Effort: high. <strong>Right answer if Polywiz's tenancy or Airtable turns out to be the wrong fit; wrong answer to start with, because we would learn that from A or C first.</strong></div>

</div>

---

<!-- _class: bg-green -->

### Approach C

# No new app. A kit: a sequence file, a review page, and a push script

<div class="body">

<div class="steps">
  <div class="st"><b>Brief + material</b>Plan, impact report, blog post, transcript of Scott's video</div>
  <div class="st"><b>Generate</b>One sequence file: arc, segments, dates, every email with its sources</div>
  <div class="st"><b>Review page</b>One offline page with the timeline, like the ambassador page Julie and Scott use. Edit, export</div>
  <div class="st"><b>Push</b>Drafts every calendar email into ActiveCampaign per segment, test-sends to the operator</div>
  <div class="st"><b>Flows</b>A build sheet for the four automations, pasted into the vendor's agent, read back to check</div>
</div>

<div class="row">
  <div class="card" style="flex:1; border-top:3px solid var(--g);"><div class="k">For it</div><div class="d">Weeks, not months. Every piece is a tool the future chatbot calls. Proves the sequence model before anything wraps it. Runs this quarter's campaign not by hand.</div></div>
  <div class="card" style="flex:1; border-top:3px solid var(--r);"><div class="k">Against it</div><div class="d">Teammates edit in a page, not an app. Brand voice is fetched from Polywiz, not shared. Generation starts from a terminal until the chatbot exists.</div></div>
</div>

<div class="note g">Effort: low to medium. <strong>C is not a lesser A. It is the engine A would need, built first and on its own.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### Side by side

# The same six questions asked of each

<div class="body">

<table>
<tr><th style="width:34%"></th><th>A · Polywiz tab</th><th>B · Own tool</th><th>C · Kit</th></tr>
<tr><td><strong>Teammates preview and edit without Juergen</strong></td><td>Yes, in an app they use</td><td>Yes, in a new app</td><td>Yes, in an offline page</td></tr>
<tr><td><strong>Reuses brand voice and document intake</strong></td><td>Directly</td><td>Copied</td><td>Fetched</td></tr>
<tr><td><strong>Clutters Polywiz for brands that do not need it</strong></td><td>Gated, some risk</td><td>None</td><td>None</td></tr>
<tr><td><strong>Time to first real sequence in ActiveCampaign</strong></td><td>Months</td><td>Months</td><td>Weeks</td></tr>
<tr><td><strong>Feeds the "chatbot that understands the project"</strong></td><td>Indirectly</td><td>Indirectly</td><td>Directly, tool by tool</td></tr>
<tr><td><strong>Delivery into ActiveCampaign</strong></td><td colspan="3" style="text-align:center;">Identical. Broadcasts by API in draft; automations built once through the vendor's agent.</td></tr>
</table>

<div class="note b">The delivery row is the tell. <strong>The approaches differ only in where the arc side lives and who can touch it.</strong></div>

</div>

---

<!-- _class: bg-green -->

### The opening position

# Build C now. Let it earn A.

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">Now · this quarter</div><div class="h">The kit</div><div class="d">Sequence file, generator, review page with a timeline, draft push for calendar sends, build sheet for the four flows. Used on the real fall campaign, with the consultants' plan as the brief.</div></div>
  <div class="card" style="flex:1;"><div class="k">Then · if it holds</div><div class="h">Wrap it in Polywiz</div><div class="d">The sequence file becomes a table. The review page becomes a tab, gated per brand. Brand voice and document intake stop being fetched and start being shared.</div></div>
  <div class="card" style="flex:1;"><div class="k">Only if</div><div class="h">Its own tool</div><div class="d">If the Polywiz fit fails on evidence: tenancy, Airtable, or a second brand that needs it and has no Polywiz account.</div></div>
</div>

<div class="sub" style="max-width:100%;">Why this order: the arc side is the reusable value and it is unproven. <strong>Proving it on one real campaign, in the cheapest wrapper, is what tells us whether the tab is worth building.</strong> The same rule this project already applies to the chatbot.</div>

<div class="note g">This is a position to argue with, not a decision. <strong>The questions at the end are what would change it.</strong></div>

</div>

---

<!-- _class: lead bg-blue -->

### Part five

# What the thing would look like

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%;">The intake, the timeline, the drill-down, and who does what.</div>

---

<!-- _class: bg-blue -->

### The intake

# Six questions, then generate

<div class="body">

<div class="steps">
  <div class="st"><b>1 · Which brand</b>Not Real Art, Artsville, Arterial, the Intersect. Voice and sender follow.</div>
  <div class="st"><b>2 · Which shape</b>Appeal, welcome, news, re-engagement, stewardship, ambassador, promotion.</div>
  <div class="st"><b>3 · The brief</b>What should this achieve, by when, with what ask.</div>
  <div class="st"><b>4 · The material</b>Plan, impact report, blog post, video transcript. Each fact keeps its source.</div>
  <div class="st"><b>5 · Who gets it</b>Segments picked from the account, each with its story hook and sender.</div>
  <div class="st"><b>6 · The limits</b>Sends per week, quiet days, the frequency cap for cold contacts.</div>
</div>

<div class="sub" style="max-width:100%;">Steps one, two and four already exist in Polywiz as a brand picker, a campaign type, and a document drop zone. <strong>Step five is the new one, and it reads the segments we have already built.</strong></div>

<div class="note b">A video is a transcript with a source id. <strong>Nothing in the output may say something the material does not.</strong></div>

</div>

---

<!-- _class: bg-green -->

### The timeline view

# One campaign, four voices, six weeks, one screen

<div class="body">

<div class="tl">
  <div></div><div class="hd">Week 1</div><div class="hd">Week 2</div><div class="hd">Week 3</div><div class="hd">Week 4</div><div class="hd">Week 5</div><div class="hd">Week 6</div>
  <div class="seg">Prior donors</div>
  <div class="cell"><span class="em" style="background:#0177c8;">Something's coming</span></div><div class="cell"><span class="em" style="background:#0177c8;">Story</span></div><div class="cell"><span class="em" style="background:#e85d0c;">Give again</span></div><div class="cell"><span class="em" style="background:#0177c8;">Progress</span></div><div class="cell"><span class="em" style="background:#e85d0c;">Match</span></div><div class="cell"><span class="em" style="background:#16a34a;">Thank you</span></div>
  <div class="seg">Podcast guests</div>
  <div class="cell"></div><div class="cell"><span class="em" style="background:#0177c8;">Your episode</span></div><div class="cell"><span class="em" style="background:#b45309;">Share the report</span></div><div class="cell"></div><div class="cell"><span class="em" style="background:#b45309;">One more share</span></div><div class="cell"><span class="em" style="background:#16a34a;">Thank you</span></div>
  <div class="seg">Artists</div>
  <div class="cell"><span class="em" style="background:#0177c8;">Meet the makers</span></div><div class="cell"></div><div class="cell"><span class="em" style="background:#0177c8;">Why artists need you</span></div><div class="cell"><span class="em" style="background:#e85d0c;">Where $25 goes</span></div><div class="cell"></div><div class="cell"><span class="em" style="background:#e85d0c;">Final day</span></div>
  <div class="seg">Artsville readers</div>
  <div class="cell"></div><div class="cell"><span class="em" style="background:#0177c8;">From Elise</span></div><div class="cell"></div><div class="cell"><span class="em" style="background:#e85d0c;">The ask</span></div><div class="cell"></div><div class="cell"><span class="em" style="background:#e85d0c;">Final day</span></div>
</div>

<div style="display:flex; gap:14px; font-size:0.7em; color:var(--body);"><span><span class="pill b">blue</span> story, no ask</span><span><span class="pill a">orange</span> ask</span><span><span class="pill y">gold</span> share</span><span><span class="pill g">green</span> thank</span></div>

<div class="note g">Click any card and you get its intention, its story beat, subject, sender, call to action, the sources it drew on, and the text. <strong>Move a card and every date after it shifts.</strong> This is the screen Scott and Julie would work from.</div>

</div>

---

<!-- _class: bg-gold -->

### Who does what

# The tool proposes. People decide. Nothing sends itself.

<div class="body">

<table>
<tr><th style="width:26%">Who</th><th>Does</th><th style="width:30%">Does not</th></tr>
<tr><td><strong>Julie, Molly</strong></td><td>Write the plan and the messaging direction. The plan is the brief.</td><td>Operate ActiveCampaign.</td></tr>
<tr><td><strong>The tool</strong></td><td>Proposes the arc, writes every email from the material, shows the timeline, drafts into ActiveCampaign, flags anything it cannot source.</td><td>Choose an ask amount. Invent a story. Send.</td></tr>
<tr><td><strong>Scott, Elise</strong></td><td>Edit, retell in their own voice through Auctor, approve. Their name is on it.</td><td>Build segments or flows.</td></tr>
<tr><td><strong>Juergen, then anyone</strong></td><td>Enable the drafts, paste the build sheet, apply the donor tag mapping.</td><td>Write emails from scratch.</td></tr>
</table>

<div class="note y">The last row is the point. <strong>Enabling a draft is a ten-minute job anyone can be shown. Building the sequence from a Word document is not.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### Delivery, concretely, for the fall campaign

# What lands in ActiveCampaign, and how

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">By the script</div><div class="h">Up to 12 sends × 4 segments, as drafts</div><div class="d">Each with its own copy, aimed at a segment cloned from one built by hand, dated, test-sent. A person enables them.</div></div>
  <div class="card" style="flex:1;"><div class="k">By a person, once</div><div class="h">Four automations</div><div class="d">Welcome, abandoned donation, thank-you, lapsed. Brief pasted into the vendor's agent, our copy dropped in, the donor goal added.</div></div>
  <div class="card" style="flex:1;"><div class="k">By the data job</div><div class="h">One tag on every donation</div><div class="d">Donately's Zapier mapping applies "Donated 2026". Every segment and goal keys on it.</div></div>
</div>

<div class="sub" style="max-width:100%;">Three things need one live probe each first: the send date at creation, replacing copy inside an automation email, and conditional blocks in custom HTML. <strong>Each is a ten-minute test against a throwaway.</strong></div>

<div class="note b">Five requests a second for the whole account, shared with the artwork intake. <strong>Drafting 48 emails takes about a minute.</strong></div>

</div>

---

<!-- _class: bg-red -->

### What could go wrong

# Six risks, and which ones the design already answers

<div class="body">

<table>
<tr><th style="width:36%">Risk</th><th>Answer</th></tr>
<tr><td><strong>The model invents a fact, a number or a person</strong></td><td>Every claim carries a source id or a flag. No composite stories. Human signs every message.</td></tr>
<tr><td><strong>Faster writing means more sending</strong></td><td>Frequency caps are part of the sequence file, not advice. Cold contacts stop at ten. Nobody goes three weeks silent either.</td></tr>
<tr><td><strong>It reads as a computer wrote it</strong></td><td>Voice compiled per brand, no em dashes at the boundary, Auctor for the emails that matter most.</td></tr>
<tr><td><strong>The tool second-guesses the consultants</strong></td><td>The plan is the brief. The tool executes it and shows the arc; it does not propose a different one unasked.</td></tr>
<tr><td><strong>Open rates mislead us again</strong></td><td>Four in ten opens are Apple Mail. Scoring reads clicks and real opens; Artsville is read through Ghost.</td></tr>
<tr><td><strong>The dates in the plan get treated as a calendar</strong></td><td>The sequence keeps the order and the gaps; the start date is a single field.</td></tr>
</table>

</div>

---

<!-- _class: bg-gold -->

### Fundraising only, or the whole audience?

# General engine, fundraising first

<div class="body">

<div class="row">
  <div class="card" style="flex:1;"><div class="k">Why general</div><div class="d">The seven shapes share everything but the arc. A news email about ArtHouse, a welcome for new Intersect readers and a year-end appeal all need a brand, material, segments, a timeline and a draft in the sender. Building the fundraising shape alone would still build all of that.</div></div>
  <div class="card" style="flex:1;"><div class="k">Why fundraising first</div><div class="d">It is the shape with a real plan, a real deadline and a consultant's document to test the intake against. It also carries the hardest rule, "stop asking once they give", so if the engine handles it the others are easy.</div></div>
</div>

<div class="sub" style="max-width:100%;">The delineation that does hold: <strong>the tool ends at a draft in the sending system.</strong> It never sends, never scores donors, never replaces Julie's book of 66 prospects. Major gifts stay a human job.</div>

<div class="note">Name it for what it does, not for fundraising. <strong>"Sequences" is honest; "fundraising tool" would be narrower than the thing.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### Questions Juergen can answer now

# Eight decisions that need only one person

<div class="body">

<ul style="columns:2; column-gap:40px;">
<li>Is the consultants' plan the brief, verbatim, for the first run?</li>
<li>Which four segments does the first run target, and is the podcast guest list one of them?</li>
<li>Does Donately's Zapier mapping apply a donor tag today, and if not, who owns adding it?</li>
<li>Do we build the sequence on the Not Real Art brand in Polywiz, or on an Arterial brand that does not exist there yet?</li>
<li>Is Scott willing to retell the ask emails through Auctor, or only to edit text?</li>
<li>Where does the ActiveCampaign key live for the push: this repository, n8n, or Polywiz?</li>
<li>Plain-text emails by default, with the designed template only on request?</li>
<li>Is "weeks, on the real fall campaign" the right test, or do we want a dry run on a news email first?</li>
</ul>

<div class="note b">Answered one at a time and written down, these turn the recommendation into a first sprint. <strong>None of them needs the whole team.</strong></div>

</div>

---

<!-- _class: bg-gold -->

### Questions for the team

# Seven things to discuss that may not get an answer today

<div class="body">

<ul style="columns:2; column-gap:40px;">
<li>Who edits and approves an email before it is enabled, and does that person's name go on the sender line?</li>
<li>How much do Julie and Molly want the tool to propose, versus execute exactly what the plan says?</li>
<li>Which of us should be able to enable a send in ActiveCampaign, so it stops being one person?</li>
<li>Should past podcast guests be asked to give at all, or only to share?</li>
<li>Is the Artsville audience part of this, given it is emailed by Elise through Ghost and not from ActiveCampaign?</li>
<li>What does the tool owe the major-gift track: nothing, or a stewardship sequence for the 66?</li>
<li>If the kit works, is a Polywiz tab worth its clutter, or does this stay a tool for us?</li>
</ul>

<div class="note y">Each of these changes the design in a different direction. <strong>They are the reason this is a discussion paper and not a plan.</strong></div>

</div>

---

<!-- _class: lead bg-green -->

### Where this leaves us

# Build the arc first, and build it small.

<div class="sub" style="margin-top:24px; text-align:center; max-width:82%; font-size:1.0em;">
A sequence file, a timeline page anyone can edit, and a script that drafts into ActiveCampaign. Used once on the real campaign. Then we know whether it deserves a home in Polywiz.
</div>

<div style="margin-top:26px; font-size:0.86em; color:var(--body);">The full discussion paper, with sources, sits beside this deck.</div>
