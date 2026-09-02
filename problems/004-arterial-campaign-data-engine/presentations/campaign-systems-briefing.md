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
  /* Slides are 720px tall. Everything below is sized so a TWO-LINE headline
     still leaves room, because that overflow was the bug in the last version. */
  /* Slides are 1280x720. The body is a flex column that CENTRES its content in
     the space left under the headline, so a sparse slide is balanced instead of
     leaving a hole in the middle. The note travels with the content; it is not
     pinned to the floor. padding-bottom clears the footer. */
  section {
    background-color: #f8f8f8;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.025) 100%);
    color: var(--t); font-weight: 400; padding: 44px 64px 62px; line-height: 1.45;
    display: flex; flex-direction: column; overflow: hidden;
  }
  /* Everything between the headline and the end of the slide, centred as a group. */
  section > .body { flex: 1; display: flex; flex-direction: column; justify-content: center; gap: 22px; }
  h1 { font-family: 'Outfit'; font-weight: 700; font-size: 1.72em; color: var(--t);
       letter-spacing: -0.02em; line-height: 1.12; margin: 0 0 10px; max-width: 94%; }
  h2 { font-weight: 300; font-size: 1.0em; color: #777; margin: 0 0 14px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m);
       text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 6px; }
  p { margin: 0 0 10px; }
  strong { color: var(--a); font-weight: 500; }
  section.lead { justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.3em; max-width: 100%; }
  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #ddd; }
  section.bg-glow { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(232,93,12,0.06) 100%); }
  section.bg-green { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(22,163,74,0.07) 100%); }
  section.bg-gold  { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(217,119,6,0.07) 100%); }
  section.bg-blue  { background-image: radial-gradient(ellipse at 50% 50%, transparent 22%, rgba(1,119,200,0.07) 100%); }
  section.bg-red   { background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(220,38,38,0.05) 100%); }
  .card { background: #fff; border: 1px solid #e0e0e0; border-radius: 10px; padding: 20px 22px; }
  .row { display: flex; gap: 16px; }
  .huge { font-family: 'Outfit'; font-weight: 800; font-size: 4.4em; line-height: 0.95;
          letter-spacing: -0.03em; color: var(--t); }
  .huge.g { color: var(--g); } .huge.r { color: var(--r); } .huge.a { color: var(--a); }
  .sub { font-size: 0.92em; color: var(--body); max-width: 88%; }
  /* margin-bottom keeps the closing note clear of the footer even if it wraps
     to three lines. Without it a long note collides with the page furniture. */
  /* No margin-top:auto. That pinned the note to the floor and opened a gap. */
  .note { padding: 12px 17px; background: #fff; border-left: 3px solid var(--a);
          border-radius: 0 8px 8px 0; font-size: 0.78em; color: var(--body); }
  .note.g { border-left-color: var(--g); } .note.b { border-left-color: var(--blue); }
  table { font-size: 0.74em; border-collapse: collapse; width: 100%; }
  th { text-align: left; color: var(--m); font-weight: 500; font-size: 0.9em; text-transform: uppercase;
       letter-spacing: 0.08em; border-bottom: 1px solid #e0e0e0; padding: 6px 8px; }
  td { color: var(--body); border-bottom: 1px solid #efefef; padding: 7px 8px; }
  /* Label OUTSIDE the bar. The previous version printed the label inside the
     fill, so a small value (LinkedIn, 7%) had no room and the text spilled out
     across the slide. Nothing here can overflow at any value. */
  .barrow { display: flex; align-items: center; gap: 16px; margin-bottom: 14px; }
  .barlab { width: 250px; font-size: 0.84em; color: var(--body); flex: none; }
  .bartrack { flex: 1; height: 30px; background: #e9e9e9; border-radius: 6px; overflow: hidden; }
  .barfill { height: 100%; border-radius: 6px; }
  .barval { width: 96px; flex: none; text-align: right; font-family: 'Outfit'; font-weight: 700;
            font-size: 1.05em; color: var(--t); white-space: nowrap; }
footer: 'Arterial 2026 Campaign · Systems & Data · Juergen Berkessel'
---

<!-- _class: lead bg-blue -->
<!-- _paginate: false -->
<!-- _footer: '' -->

### Arterial 2026 Fundraising Campaign

# The data engine

## What we found in our own contact list, and what it changes

<div style="margin-top: 32px; color: #6f6f6f; font-size: 0.72em;">Team briefing · Systems &amp; Data</div>

---

<!--
SUPPRESSED FOR THIS BRIEFING, kept deliberately in the source.

The $150,000 breakdown and the campaign-dashboard quote belong to Julie Norris,
who built the campaign and is not presenting today. Restating her targets here
would step on her toes. Restore this slide when she is in the room.

### Start here
# $150,000, and where it actually comes from

<div class="body">

[four cards: $65K major gifts, $50K storyteller grants, $25K projects,
 $10K grassroots, plus the verbatim dashboard quote]
-->

<!-- _class: bg-glow -->

### Why we did this

# Three questions we could not answer

<div class="row" style="margin-top:22px;">
  <div class="card" style="flex:1;"><div style="font-size:0.7em; color:#6f6f6f;">1</div><div style="font-size:0.95em; color:var(--t); margin-top:6px; font-weight:500;">Who is actually on our list?</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.7em; color:#6f6f6f;">2</div><div style="font-size:0.95em; color:var(--t); margin-top:6px; font-weight:500;">Who actually reads what we send?</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.7em; color:#6f6f6f;">3</div><div style="font-size:0.95em; color:var(--t); margin-top:6px; font-weight:500;">Who could carry us to their own audience?</div></div>
</div>

<div class="sub" style="margin-top:26px;">We answered all three by measuring the account rather than guessing at it.</div>

<div class="note g">Everything here was read from the live account. <strong>Nothing has been changed yet.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### What we actually have

# The fundraising list is 98% of who we may email

<div class="body">

<div class="barrow">
  <div class="barlab">Contact records</div>
  <div class="bartrack"><div class="barfill" style="width:100%; background:linear-gradient(90deg,#999,#bbb);"></div></div>
  <div class="barval">11,622</div>
</div>
<div class="barrow">
  <div class="barlab">Allowed to email</div>
  <div class="bartrack"><div class="barfill" style="width:50%; background:linear-gradient(90deg,#0177c8,#0177c8aa);"></div></div>
  <div class="barval">5,757</div>
</div>
<div class="barrow" style="margin-bottom:0;">
  <div class="barlab">On the fundraising list</div>
  <div class="bartrack"><div class="barfill" style="width:49%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">5,646</div>
</div>

<div class="sub" style="margin-top:18px; max-width:100%;">
Of the 5,865 who never made it: <strong>2,516 bounced or unsubscribed everywhere</strong>, and <strong>3,349 opted out of every content list</strong> and now sit on a suppression list. They told us to stop.
</div>

<div class="note g">Only <strong>111</strong> people are outside the list for any other reason - 25 journalists we keep separate on purpose, and the rest signed up after it was built. <strong>The consolidation was complete.</strong></div>

</div>

---

<!-- _class: bg-red -->

### The thing worth fixing

# We only email two thirds of our list

<div class="body">

<div class="barrow">
  <div class="barlab">On the list</div>
  <div class="bartrack"><div class="barfill" style="width:100%; background:linear-gradient(90deg,#0177c8,#0177c8aa);"></div></div>
  <div class="barval">5,646</div>
</div>
<div class="barrow">
  <div class="barlab">We actually email</div>
  <div class="bartrack"><div class="barfill" style="width:67%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">3,800</div>
</div>
<div class="barrow">
  <div class="barlab">We never email</div>
  <div class="bartrack"><div class="barfill" style="width:33%; background:linear-gradient(90deg,#dc2626,#dc2626aa);"></div></div>
  <div class="barval">1,846</div>
</div>

<div class="sub" style="margin-top:24px;">Those 1,846 are excluded by one setting: an email-checking service would not call them a guaranteed delivery.</div>

<div class="note">They get nothing. Not a newsletter, not an appeal, not a thank you.</div>

</div>

---

<!-- _class: bg-green -->

### Is that caution justified?

# Five people

<div class="body">

<div class="huge g" style="margin-top:10px;">5</div>

<div class="sub" style="margin-top:20px; font-size:1.0em;">
That is how many of our <strong>5,646</strong> have <strong>ever</strong> had an email bounce. In the whole history of the list.
</div>

<div class="note g">Mail providers start to worry at about <strong>2%</strong>. This list is at <strong>0.09%</strong> - because the addresses that did break are already off it.</div>

</div>

---

<!-- _class: bg-gold -->

### What the flag really means

# "Risky" mostly is not risky

<div class="body">

<div class="row" style="margin-top:20px;">
  <div class="card" style="flex:1.15;">
    <div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Of the flagged addresses we checked</div>
    <div style="font-size:3.0em; font-weight:800; color:var(--g); line-height:1; margin-top:8px;">84%</div>
    <div style="font-size:0.8em; color:var(--body); margin-top:8px;">were confirmed <strong>valid</strong> by the same service that flagged them.</div>
  </div>
  <div class="card" style="flex:1;">
    <div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Why they get flagged</div>
    <div style="font-size:0.82em; color:var(--body); margin-top:10px;">The service only says <strong>"guaranteed"</strong> or <strong>"not guaranteed"</strong>. We have been reading "not guaranteed" as "probably bad".</div>
  </div>
</div>

<div class="note">Re-checking them does not help. We tried it. They come back the same.</div>

</div>

---

<!-- _class: bg-red -->

### What that costs us

# We stopped writing to our best reader

<div class="body">

<div class="huge a" style="margin-top:6px; font-size:3.2em;">543 <span style="font-size:0.34em; font-weight:400; color:#6f6f6f;">of the 584 we sent him, opened</span></div>

<div class="row" style="margin-top:22px;">
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Emails we sent him in 2025</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">102</div></div>
  <div class="card" style="flex:1; border-color:#dc262620;"><div style="font-size:0.62em; color:var(--r); text-transform:uppercase; letter-spacing:0.1em;">In 2026</div><div style="font-size:2.0em; font-weight:700; margin-top:4px; color:var(--r);">7</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Times he has bounced</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">0</div></div>
</div>

<div class="note">He is flagged, so he drops out of every send that filters on the flag - including our last three campaigns. <strong>He is not unusual.</strong> Of the 197 excluded contacts we examined closely, <strong>57 read something in the last 90 days</strong> - nearly three in ten. Not one of them has unsubscribed from this list.</div>

</div>

---

<!-- _class: bg-green -->

### What we propose

# Email everyone unless there is a reason not to

<div class="body">

<div class="row" style="margin-top:20px;">
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Today</div><div style="font-size:2.2em; font-weight:700; margin-top:4px;">3,800</div><div style="font-size:0.75em; color:#6f6f6f;">only "guaranteed" addresses</div></div>
  <div class="card" style="flex:1; border-color:#16a34a40;"><div style="font-size:0.62em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em;">Proposed</div><div style="font-size:2.2em; font-weight:700; margin-top:4px; color:var(--g);">4,926</div><div style="font-size:0.75em; color:#6f6f6f;">everyone not suppressed</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Actually suppressed</div><div style="font-size:2.2em; font-weight:700; margin-top:4px;">720</div><div style="font-size:0.75em; color:#6f6f6f;">bounced, dead, or never once opened</div></div>
</div>

<div class="note g"><strong>1,126 more people</strong> reached. Juergen built the same audience in ActiveCampaign's own segment builder and got <strong>4,911</strong> - two different routes, the same answer.</div>

</div>

---

<!-- _class: bg-gold -->

### One caution

# Do not flip the switch on Monday

<div class="body">

<div class="sub" style="margin-top:20px; font-size:1.05em; max-width:94%;">
Adding a thousand people who have not heard from us in a while, <strong>all in one send</strong>, is how a newsletter lands in spam folders.
</div>

<div class="sub" style="margin-top:18px; font-size:1.05em; max-width:94%;">
That happens <strong>even when every address is good</strong>. Mailbox providers watch for sudden changes in who we write to.
</div>

<div class="note">Reach is the prize. Our sending reputation is the thing we cannot buy back.</div>

</div>

---

<!-- _class: bg-green -->

### How we add them safely

# Three batches, a week apart

<div class="body">

<div class="row" style="margin-top:20px;">
  <div class="card" style="flex:1; border-color:#16a34a40;"><div style="font-size:0.6em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Batch 1 &nbsp;·&nbsp; day 0</div><div style="font-size:1.7em; font-weight:700; margin-top:6px;">~250</div><div style="font-size:0.76em; color:#6f6f6f; margin-top:2px;">read us in the last 90 days</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.6em; color:var(--blue); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Batch 2 &nbsp;·&nbsp; day 7</div><div style="font-size:1.7em; font-weight:700; margin-top:6px;">~400</div><div style="font-size:0.76em; color:#6f6f6f; margin-top:2px;">read us within the year</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.6em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Batch 3 &nbsp;·&nbsp; day 14</div><div style="font-size:1.7em; font-weight:700; margin-top:6px;">~475</div><div style="font-size:0.76em; color:#6f6f6f; margin-top:2px;">everyone else not suppressed</div></div>
</div>

<div class="note g">A <strong>Send Batch</strong> field drives all three, so the audiences are built once and any operator can trigger the sequence without asking us.</div>

</div>

---

<!-- _class: bg-blue -->

### Who actually reads us

# Four in ten "opens" are a machine

<div class="body">

<div class="barrow">
  <div class="barlab">Real people</div>
  <div class="bartrack"><div class="barfill" style="width:100%; background:linear-gradient(90deg,#16a34a,#4ade80);"></div></div>
  <div class="barval">33,304</div>
</div>
<div class="barrow" style="margin-bottom:0;">
  <div class="barlab">Apple Mail</div>
  <div class="bartrack"><div class="barfill" style="width:69%; background:linear-gradient(90deg,#999,#bbb);"></div></div>
  <div class="barval">23,091</div>
</div>

<div class="sub" style="margin-top:22px;">Apple loads the images before anyone reads the message, and every email tool counts that as an open.</div>

<div class="note b"><strong>Four in every ten opens we record is a machine, not a person.</strong> It makes our open rates look about <strong>70% better</strong> than they are. Our software tells the two apart. Most reporting does not.</div>

</div>

---

<!-- _class: bg-green -->

### What that gives us

# We know who genuinely reads us

<div class="body">

<div class="row" style="margin-top:20px;">
  <div class="card" style="flex:1; border-color:#16a34a40;"><div style="font-size:0.62em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em;">Read us recently</div><div style="font-size:2.3em; font-weight:700; margin-top:4px; color:var(--g);">532</div><div style="font-size:0.75em; color:#6f6f6f;">in the last 90 days</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Clicked a real link</div><div style="font-size:2.3em; font-weight:700; margin-top:4px;">595</div><div style="font-size:0.75em; color:#6f6f6f;">at some point</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Browsed our sites</div><div style="font-size:2.3em; font-weight:700; margin-top:4px;">48</div><div style="font-size:0.75em; color:#6f6f6f;">we know which pages</div></div>
</div>

<div class="note g">We can rank people by <strong>whether they pay attention</strong>, going back to 2020. More useful than how many followers they have.</div>

</div>

---

<!-- _class: bg-blue -->

### What else we already hold

# Their websites and handles, already on file

<div class="body">

<div class="barrow">
  <div class="barlab">Website addresses</div>
  <div class="bartrack"><div class="barfill" style="width:100%; background:linear-gradient(90deg,#0177c8,#0177c8aa);"></div></div>
  <div class="barval">1,635</div>
</div>
<div class="barrow">
  <div class="barlab">Instagram handles</div>
  <div class="bartrack"><div class="barfill" style="width:97%; background:linear-gradient(90deg,#e85d0c,#e85d0caa);"></div></div>
  <div class="barval">1,580</div>
</div>
<div class="barrow">
  <div class="barlab">LinkedIn profiles</div>
  <div class="bartrack"><div class="barfill" style="width:7%; background:linear-gradient(90deg,#16a34a,#16a34aaa);"></div></div>
  <div class="barval">108</div>
</div>

<div class="note b">Nobody had to go and find these - they were already in the account. <strong>The gap was never who these people are.</strong></div>

</div>

---

<!-- _class: bg-gold -->

### The Instagram work

# We looked up how big each following is

<div class="body">

<div class="sub" style="margin-top:18px; font-size:0.96em;">
Instagram will tell you a professional account's follower count if you ask properly. We built that, tested it, and set it running across every artist on the list.
</div>

<div class="row" style="margin-top:22px;">
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Artists checked</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">871</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">We get an answer for</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">2 in 3</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">What it cost</div><div style="font-size:2.0em; font-weight:700; margin-top:4px; color:var(--g);">nothing</div></div>
</div>

<div class="note">The third we cannot see are personal rather than professional accounts. <strong>That is not a failure, and it is not a zero.</strong></div>

</div>

---

<!-- _class: bg-glow -->

### The answer so far

# Most followings are small

<div class="body">

<div class="row" style="margin-top:18px;">
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Typical artist</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">1,592</div><div style="font-size:0.72em; color:#6f6f6f;">followers</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f; text-transform:uppercase; letter-spacing:0.1em;">Above 10,000</div><div style="font-size:2.0em; font-weight:700; margin-top:4px;">1 in 9</div><div style="font-size:0.72em; color:#6f6f6f;">60 artists</div></div>
  <div class="card" style="flex:1; border-color:#e85d0c40;"><div style="font-size:0.62em; color:var(--a); text-transform:uppercase; letter-spacing:0.1em;">Our biggest</div><div style="font-size:2.0em; font-weight:700; margin-top:4px; color:var(--a);">263,372</div><div style="font-size:0.72em; color:#6f6f6f;">a glass artist</div></div>
</div>

<div class="note">Half our artists sit under 1,600 followers. But <strong>four are above 100,000</strong>, and we did not know that yesterday.</div>

</div>

---

<!-- _class: bg-red -->

### The finding that decides our approach

# The people with the audience do not read us

<div class="body">

<table style="margin-top:16px;">
<tr><th style="width:34%"></th><th>Top 25 by audience</th><th>Top 25 by attention</th></tr>
<tr><td><strong>Typical following</strong></td><td>50,245</td><td>3,299</td></tr>
<tr><td><strong>Read us recently</strong></td><td>7 of 25</td><td>25 of 25</td></tr>
<tr><td><strong>Clicks between them</strong></td><td>29</td><td>306</td></tr>
<tr><td><strong>People on both lists</strong></td><td colspan="2" style="text-align:center;"><strong style="font-size:1.4em;">0</strong></td></tr>
</table>

<div class="note">Two completely different groups of people. <strong>Our biggest account, 263,372 followers, has never clicked anything we sent.</strong> Our most engaged artist has 845 followers and has clicked 16 times.</div>

</div>

---

<!-- _class: bg-green -->

### Which means two different jobs

# Warm the reach. Mobilise the willing.

<div class="body">

<div class="row" style="margin-top:16px;">
<div style="flex:1;">
<div class="card" style="border-color:#0177c830;">
<div style="font-size:0.62em; color:var(--blue); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Big audience, cold to us</div>
<div style="font-size:0.84em; color:var(--body); margin-top:8px;">They do not know us well enough to help yet. Celebrate their work first and earn the relationship.</div>
</div>
</div>
<div style="flex:1;">
<div class="card" style="border-color:#16a34a30;">
<div style="font-size:0.62em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Small audience, already with us</div>
<div style="font-size:0.84em; color:var(--body); margin-top:8px;">They read everything and click. Ask them directly, and ask soon.</div>
</div>
</div>
</div>

<div class="note g"><strong>And 66 artists are in both camps</strong> - over 5,000 followers and genuinely engaged. <strong>That is the list to start with.</strong></div>

</div>

---

<!-- _class: bg-green -->

### So what is this for

# Introductions, not advertising

<div class="body">

<div class="row" style="margin-top:20px;">
<div style="flex:1;">
<div class="card" style="border-color:#dc262620;">
<div style="font-size:0.62em; color:var(--r); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">Not this</div>
<div style="font-size:0.84em; color:var(--body); margin-top:8px;">Three big accounts put us in front of 100,000 strangers.</div>
<div style="font-size:0.76em; color:#6f6f6f; margin-top:8px;">Those people are not on our list. Forty artists sharing a post is worth a few hundred dollars.</div>
</div>
</div>
<div style="flex:1;">
<div class="card" style="border-color:#16a34a30;">
<div style="font-size:0.62em; color:var(--g); text-transform:uppercase; letter-spacing:0.1em; font-weight:600;">This</div>
<div style="font-size:0.84em; color:var(--body); margin-top:8px;">Artists introduce us to their own followers, or work with us directly to move the mission along.</div>
<div style="font-size:0.76em; color:#6f6f6f; margin-top:8px;">A warm introduction, or a collaborator who wants what we want, is worth more than any number of shares.</div>
</div>
</div>
</div>

<div class="note g">Which is why <strong>who engages with us matters more than who has an audience</strong>.</div>

</div>

---

<!-- _class: bg-blue -->

### The order of operations

# Celebrate first. Ask later.

<div class="body">

<div class="row" style="margin-top:26px;">
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f;">STEP 1</div><div style="font-size:0.9em; color:var(--t); margin-top:6px; font-weight:500;">Share their work</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f;">STEP 2</div><div style="font-size:0.9em; color:var(--t); margin-top:6px; font-weight:500;">They notice</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.62em; color:#6f6f6f;">STEP 3</div><div style="font-size:0.9em; color:var(--t); margin-top:6px; font-weight:500;">Then we ask</div></div>
</div>

<div class="note">No software can do step 1. <strong>Somebody has to actually share an artist's work</strong>, and we have not agreed who.</div>

</div>

---

<!-- _class: bg-gold -->

### New capability

# We can record all this properly now

<div class="body">

<div class="sub" style="margin-top:18px; font-size:0.96em;">
Until this week these facts lived in spreadsheets. We are adding <strong>16 fields</strong> to ActiveCampaign so they sit on the contact record where anyone can use them.
</div>

<div class="row" style="margin-top:22px;">
  <div class="card" style="flex:1;"><div style="font-size:0.66em; color:var(--blue); font-weight:600;">Web &amp; Social</div><div style="font-size:0.78em; color:var(--body); margin-top:6px;">Follower count, when we checked, whether their site is alive</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.66em; color:var(--g); font-weight:600;">Engagement</div><div style="font-size:0.78em; color:var(--body); margin-top:6px;">How engaged they are, and whether we should email them</div></div>
  <div class="card" style="flex:1;"><div style="font-size:0.66em; color:var(--a); font-weight:600;">Fundraising 26/27</div><div style="font-size:0.78em; color:var(--body); margin-top:6px;">Amplifier tier and where outreach has got to</div></div>
</div>

<div class="note g">Grouped by <strong>how long they stay useful</strong>. When the campaign ends the middle group survives and the right one retires, exactly as the Arthouse fields did.</div>

</div>

---

<!-- _class: bg-blue -->

### Why that matters to you

# You can build these lists yourself

<div class="body">

<div class="sub" style="margin-top:16px; font-size:0.94em;">
Once the fields exist they appear in the normal ActiveCampaign audience builder. No developer, no export, no waiting on us.
</div>

<table style="margin-top:16px;">
<tr><th style="width:56%">You want</th><th>You pick</th></tr>
<tr><td>Everyone who genuinely read us this quarter</td><td>Engagement = Hot</td></tr>
<tr><td>Artists worth celebrating first</td><td>Amplifier tier = Top 25</td></tr>
<tr><td>Everyone we are allowed to email</td><td>Mailable = Send</td></tr>
<tr><td>People who said no, so we stop asking</td><td>Outreach = Declined</td></tr>
</table>

<div class="note b">One catch: ActiveCampaign cannot sort by a number, so <strong>"more than 3,000 followers" is not something you can pick</strong>. We work the ranking out and write the answer in.</div>

</div>

---

<!-- _class: bg-glow -->

### What we can automate

# Six flows we can switch on

<div class="body">

<table style="margin-top:16px;">
<tr><th style="width:32%">Flow</th><th>What it does</th></tr>
<tr><td><strong>Welcome</strong></td><td>New sign-ups get a proper introduction</td></tr>
<tr><td><strong>Amplifier entry</strong></td><td>Reaching the top tier starts an outreach sequence</td></tr>
<tr><td><strong>Give first</strong></td><td>Reminds us to share an artist's work before we ask</td></tr>
<tr><td><strong>Thank you</strong></td><td>Fires on a donation and stops the asking</td></tr>
<tr><td><strong>Re-engagement</strong></td><td>Already exists and already runs</td></tr>
<tr><td><strong>Suppression</strong></td><td>Stops mailing anyone who bounces or opts out</td></tr>
</table>

<div class="note">Built by hand inside ActiveCampaign, not in code. <strong>Half a day once the fields exist.</strong></div>

</div>

---

<!--
SUPPRESSED FOR THIS BRIEFING, kept in the source deliberately.

"Twelve sends, three acts" is the email content plan, which is Julie Norris's
domain. Presenting it here would step on her work. If it is ever shown it should
be framed as a suggestion to her, never as a plan.

### Email content plan
# Twelve sends, three acts

<div class="body">

[the three-act send calendar]
-->

<!--
ALSO SUPPRESSED, same reason plus one more.

"The amplifier calendar" is peer-to-peer project planning, which is not
Juergen's to present. Kept in source for whoever does own it.

### Where peer-to-peer plugs in
# The amplifier calendar
[the wave-by-wave outreach calendar]
-->

<!-- _class: bg-green -->

### Where we are

# Done, and all of it was measurement

<div style="margin-top:18px; font-size:0.86em; color:var(--body); line-height:2.0;">
Measured the whole account instead of estimating it<br/>
Worked out who genuinely reads us, back to 2020<br/>
Found that our sending rule costs us about 800 people<br/>
Built and proved the Instagram follower lookup<br/>
Found handles we already held but were not using
</div>

<div class="note g"><strong>Nothing has been changed in ActiveCampaign.</strong> Every number came from reading, not editing.</div>

</div>

---

<!-- _class: bg-gold -->

### Where we are

# Not done yet

<div class="body">

<div style="margin-top:18px; font-size:0.86em; color:var(--body); line-height:2.0;">
Follower counts still running, finishing today<br/>
The 16 fields are designed but not created<br/>
The new sending rule is proposed, not agreed<br/>
The six flows need building by hand<br/>
Nobody has agreed to own the celebrate-first step
</div>

<div class="note">None of it is blocked on technology. <strong>It is blocked on decisions.</strong></div>

</div>

---

<!-- _class: bg-blue -->

### What we need

# Four decisions, none of them one person's

<div class="body">

<table style="margin-top:16px;">
<tr><th style="width:44%">Decision</th><th>Why it matters</th></tr>
<tr><td><strong>Do we widen who we email?</strong></td><td>1,126 more people, including artists who read everything we send</td></tr>
<tr><td><strong>Who shares an artist's work?</strong></td><td>No software can do it, and the approach stalls without it</td></tr>
<tr><td><strong>Shortlist to a person, or a mailing?</strong></td><td>25 names or 200. Same machinery, different job</td></tr>
<tr><td><strong>Who do we already know?</strong></td><td>Our strongest signal, and it only exists in people's heads</td></tr>
</table>

<div class="note b">The last one no measurement can reach. <strong>A name any of us can vouch for beats every number in this deck.</strong></div>

</div>

---

<!-- _class: lead bg-green -->

### Where this leaves us

# The list is ready. The stories are not.

<div class="sub" style="margin-top:24px; text-align:center; max-width:80%; font-size:1.0em;">
We know who is on the list, who reads it, who has an audience, and who we have been ignoring by mistake.
</div>

<div style="margin-top:26px; font-size:0.86em; color:var(--body);">What we do not have is <strong>the work to celebrate</strong>, and somebody to do the celebrating.</div>
