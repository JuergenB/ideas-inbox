---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Inter:wght@300;400;500&display=swap');

  :root {
    --a: #e85d0c;
    --a2: #d14e00;
    --bg: #f8f8f8;
    --s: #ffffff;
    --b: #e0e0e0;
    --m: #999;
    --t: #1a1a1a;
    --g: #16a34a;
    --r: #dc2626;
    --y: #d97706;
    --body: #555;
    --label: #999;
  }

  * { font-family: 'Inter', 'Outfit', sans-serif; }

  section {
    background-color: #f8f8f8;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(0,0,0,0.025) 100%);
    color: var(--t);
    font-family: 'Inter', sans-serif;
    font-weight: 400;
    padding: 56px 72px;
    line-height: 1.5;
  }

  h1 { font-family: 'Outfit'; font-weight: 700; font-size: 2.2em; color: var(--t); letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 4px; }
  h2 { font-family: 'Inter'; font-weight: 300; font-size: 1.2em; color: #777; margin: 0 0 20px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 500; }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.6em; color: var(--t); }

  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #ddd; }

  section.bg-glow { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(232,93,12,0.06) 100%), radial-gradient(ellipse at 0% 100%, rgba(22,163,74,0.04) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(232,93,12,0.07) 100%); }
  section.bg-glow-green { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(22,163,74,0.06) 100%), radial-gradient(ellipse at 100% 0%, rgba(22,163,74,0.04) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(217,119,6,0.06) 100%); }
  section.bg-dots { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,119,200,0.05) 100%), radial-gradient(circle, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(217,119,6,0.05) 100%), linear-gradient(rgba(0,0,0,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.04) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #f8f8f8; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(1,119,200,0.08) 100%); }

  header { text-align: right; padding: 0; margin: 0; }
  header img { margin: 0; }

  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; display: inline-block; }

  .row:hover { background: #f0f0f0; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="https://itcls3wqp5koksgn.public.blob.vercel-storage.com/presentations/ai-voice-surveys-vs-email-forms/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 1;" />
</div>

# Before You Email That Survey Link

<div style="font-family: 'Inter'; font-weight: 300; font-size: 0.85em; color: #777; margin-top: 12px; max-width: 640px;">Why a 15-minute voice conversation outperforms every form we've ever sent — and what it would cost to build it ourselves</div>

<div style="display: flex; gap: 8px; margin-top: 24px;">
  <span style="background: #e85d0c10; border: 1px solid #e85d0c25; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #e85d0c; font-weight: 400;">Polymash</span>
  <span style="background: #e85d0c10; border: 1px solid #e85d0c25; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #e85d0c; font-weight: 400;">April 2026</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The Reflex

# You're About to Send a Survey

<div style="display: flex; gap: 24px; margin-top: 20px; align-items: stretch;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">The Plan</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.65;">
      Build a set of questions. Put them in the email platform. Schedule the broadcast. Watch responses trickle in across the next two weeks. Export the results.
    </div>
    <div style="margin-top: 14px;">
      <span class="tag" style="background: #dc262610; color: var(--r); border: 1px solid #dc262620;">Familiar</span>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 10px;">Three Minutes First</div>
    <div style="font-size: 0.78em; color: var(--body); line-height: 1.65;">
      There is a meaningfully better option that changes nothing about the send workflow. Same audience. Same CRM. Same invitation email. Only the <strong>destination of the link</strong> changes.
    </div>
    <div style="margin-top: 14px;">
      <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">One Small Switch</span>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### What Email Surveys Actually Return

# The Funnel That Ends at 1–3%

<div style="font-size: 0.75em; color: var(--body); margin-bottom: 18px; line-height: 1.6;">Industry benchmarks for a well-segmented email survey. Each step discards a substantial fraction of the list. The people who finish are self-selected, and the answers they leave are short.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px;">

  <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
    <div style="width: 100px; font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Open</div>
    <div style="flex: 1; background: #f0f0f0; height: 22px; border-radius: 4px; overflow: hidden;"><div style="width: 40%; height: 100%; background: linear-gradient(90deg, var(--a), #f2803c);"></div></div>
    <div style="width: 60px; font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; color: var(--t); text-align: right;">40%</div>
  </div>

  <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
    <div style="width: 100px; font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Click</div>
    <div style="flex: 1; background: #f0f0f0; height: 22px; border-radius: 4px; overflow: hidden;"><div style="width: 10%; height: 100%; background: linear-gradient(90deg, var(--a), #f2803c);"></div></div>
    <div style="width: 60px; font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; color: var(--t); text-align: right;">10%</div>
  </div>

  <div style="display: flex; align-items: center; gap: 14px; margin-bottom: 12px;">
    <div style="width: 100px; font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Start</div>
    <div style="flex: 1; background: #f0f0f0; height: 22px; border-radius: 4px; overflow: hidden;"><div style="width: 5%; height: 100%; background: linear-gradient(90deg, var(--a), #f2803c);"></div></div>
    <div style="width: 60px; font-family: 'Outfit'; font-weight: 700; font-size: 0.85em; color: var(--t); text-align: right;">3–5%</div>
  </div>

  <div style="display: flex; align-items: center; gap: 14px;">
    <div style="width: 100px; font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--r);">Finish</div>
    <div style="flex: 1; background: #f0f0f0; height: 22px; border-radius: 4px; overflow: hidden;"><div style="width: 2%; height: 100%; background: linear-gradient(90deg, var(--r), #f05060);"></div></div>
    <div style="width: 60px; font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--r); text-align: right;">1–3%</div>
  </div>

</div>

<div style="font-size: 0.65em; color: var(--label); margin-top: 14px; text-align: center;">Benchmarks: RivalTech, Specific.app, cross-industry form-completion studies</div>

---

<!-- _class: bg-glow-green -->

### The Alternative

# Same Invitation. Different Destination.

<div style="display: flex; justify-content: center; align-items: center; margin-top: 36px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 14px; padding: 36px 48px; max-width: 820px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 16px;">The Whole Pitch, In One Sentence</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 1.3em; color: var(--t); line-height: 1.4;">
      The CRM still sends the invite, still tracks who opened it, still enrolls responders in sequences.<br/>
      <span style="color: var(--a);">The only thing that changes is that the link opens a voice conversation, not a form.</span>
    </div>
  </div>
</div>

<div style="display: flex; justify-content: center; gap: 10px; margin-top: 26px;">
  <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">No New Tool to Learn</span>
  <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">Same Sequences</span>
  <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">Same Reporting</span>
</div>

---

<!-- _class: lead bg-glow-orange -->

### Completion Rate

<div style="font-family: 'Outfit'; font-weight: 800; font-size: 6em; color: var(--a); line-height: 1; letter-spacing: -0.04em; margin-top: 20px;">95%</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 1.1em; color: var(--t); margin-top: 16px; max-width: 760px;">Participants who start an AI voice conversation finish it.</div>

<div style="font-size: 0.82em; color: var(--body); margin-top: 14px; max-width: 720px; line-height: 1.6;">Email-delivered forms return <strong>10–30%</strong>. The delta is not marginal — it is the difference between having real data and having a sample so small it cannot be used.</div>

<div style="font-size: 0.62em; color: var(--label); margin-top: 20px;">Sources: NTRVSTA audio-screening benchmarks, cross-study form-completion data</div>

---

<!-- _class: lead bg-glow-gold -->

### Response Depth

<div style="font-family: 'Outfit'; font-weight: 800; font-size: 5.5em; color: var(--y); line-height: 1; letter-spacing: -0.04em; margin-top: 20px;">2.5× – 8×</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 1.1em; color: var(--t); margin-top: 16px; max-width: 760px;">Richer answers than the same question in a form.</div>

<div style="font-size: 0.82em; color: var(--body); margin-top: 14px; max-width: 760px; line-height: 1.6;">A conversation that can ask <em>"tell me more about that"</em> produces answers that are fundamentally different in kind — not just longer, but more specific, more honest, and more useful. A form cannot follow up.</div>

<div style="display: flex; justify-content: center; gap: 12px; margin-top: 22px;">
  <span class="tag" style="background: #d9770610; color: var(--y); border: 1px solid #d9770620;">2.5× Baseline</span>
  <span class="tag" style="background: #d9770610; color: var(--y); border: 1px solid #d9770620;">5× With Probing</span>
  <span class="tag" style="background: #d9770610; color: var(--y); border: 1px solid #d9770620;">8× With Video</span>
</div>

---

<!-- _class: lead bg-glow-green -->

### The Skeptics Liked It

<div style="display: flex; gap: 48px; justify-content: center; align-items: baseline; margin-top: 20px;">
  <div>
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 5em; color: var(--g); line-height: 1; letter-spacing: -0.04em;">97.6%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--m); margin-top: 8px; letter-spacing: 0.1em; text-transform: uppercase;">Satisfaction</div>
  </div>
  <div style="width: 1px; background: var(--b); align-self: stretch;"></div>
  <div>
    <div style="font-family: 'Outfit'; font-weight: 800; font-size: 5em; color: var(--g); line-height: 1; letter-spacing: -0.04em;">99%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--m); margin-top: 8px; letter-spacing: 0.1em; text-transform: uppercase;">Would Recommend</div>
  </div>
</div>

<div style="font-family: 'Outfit'; font-weight: 600; font-size: 1em; color: var(--t); margin-top: 28px; max-width: 760px;">From Anthropic's own 1,250-interview study.</div>

<div style="font-size: 0.82em; color: var(--body); margin-top: 12px; max-width: 780px; line-height: 1.6;">The pattern that repeats in every study: participants who enter skeptical of AI come out as the most positive reviewers of the experience.</div>

---

<!-- _class: bg-glow -->

### Field Report

# The AI Skeptics Ended Up Preferring It

<div style="display: flex; gap: 28px; margin-top: 22px; align-items: stretch;">
  <div style="flex: 1.6; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 26px; position: relative;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 14px;">Anecdote, But Not a Small One</div>
    <div style="font-size: 0.72em; color: var(--body); line-height: 1.65;">
      A colleague who runs a creative agency employs a team of designers and graphic artists — a demographic not known for AI enthusiasm.
      <br/><br/>
      Several of them recently went through AI-powered interviews while job-hunting, and came back reporting — with some surprise — that the experience was <strong>meaningfully better</strong> than the alternatives: a long application form, or a video interview.
      <br/><br/>
      In spite of their stance against AI in their own work, they wound up <strong>preferring it</strong> in this role.
    </div>
  </div>
  <div style="flex: 1; display: flex; flex-direction: column; gap: 14px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;">Versus A Form</div>
      <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">Felt faster, less tedious, less like performing for a resume scanner.</div>
    </div>
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;">Versus A Video Interview</div>
      <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">No camera. No lighting setup. No sense of being judged on appearance or affect.</div>
    </div>
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--m); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 6px;">The Surprise</div>
      <div style="font-size: 0.7em; color: var(--body); line-height: 1.55;">They noticed they were giving longer, more candid answers than they would have in either alternative.</div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### The Mechanism

# Why the Experience Feels Good

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 18px; line-height: 1.6;">Published research across tens of thousands of AI-moderated interviews has converged on four reasons participants rate the experience highly — including participants who describe themselves as AI-skeptical.</div>

<div style="display: flex; gap: 12px;">

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--t); margin-bottom: 6px;">Reflects Back</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">The single most-cited positive: the AI condenses what you said and hands it back to you. People feel heard. A form cannot do this.</div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--t); margin-bottom: 6px;">No Micro-Reactions</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">No raised eyebrow, no "interesting." Nothing to filter answers against. Candor goes up measurably.</div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--t); margin-bottom: 6px;">Answers Complete</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">Nobody interrupts. Nobody checks their watch. Participants finish their thought before moving on.</div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, #0177c8, transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.7em; color: var(--t); margin-bottom: 6px;">Own Schedule</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">Pause, think, resume. No calendar friction, no "are you free at three." Participants go at their pace.</div>
  </div>

</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; margin-top: 18px; text-align: center;">
  <div style="font-size: 0.72em; color: var(--body);">The net effect: richer answers from a larger share of the audience, with a higher satisfaction rating than either forms or human interviews.</div>
</div>

---

<!-- _class: bg-glow-orange -->

### The Design Choice

# Audio, Not Avatars

<div style="font-size: 0.76em; color: var(--body); margin-bottom: 16px; line-height: 1.6;">The data on modality is clear, and it points away from the flashier option. Video avatars are the wrong default — not because they are not impressive, but because they measurably hurt completion and candor.</div>

<div style="display: flex; gap: 18px; margin-top: 8px;">

  <div style="flex: 1; background: var(--s); border: 1px solid #16a34a25; border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--t); margin-bottom: 8px;">Audio</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">The Restrained Choice</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.7;">
      <div style="margin-bottom: 4px;"><strong>95%</strong> completion</div>
      <div style="margin-bottom: 4px;">No camera, no lighting, no performance anxiety</div>
      <div style="margin-bottom: 4px;">Candor rises when the face is removed</div>
      <div>~$1.50 per 15-minute interview</div>
    </div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--m), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.9em; color: var(--t); margin-bottom: 8px;">Video Avatar</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">The Flashy Option</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.7;">
      <div style="margin-bottom: 4px;"><strong style="color: var(--r);">40–60%</strong> completion</div>
      <div style="margin-bottom: 4px;">Requires camera setup and a quiet space</div>
      <div style="margin-bottom: 4px;">Triggers the same self-filtering as a human interview</div>
      <div>$5–6 per interview, 3–4× the cost</div>
    </div>
  </div>

</div>

---

<!-- _class: bg-glow-orange -->

### The Ceiling of a Form

# What a Form Simply Cannot Do

<div style="font-size: 0.74em; color: var(--body); margin-bottom: 14px; line-height: 1.55;">Every item below is structurally impossible in a form — not a matter of better design. A form captures what a respondent remembered to type. That is the ceiling.</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 6px 18px;">

  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 10px 8px; border-bottom: 1px solid #f0f0f0;">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>
    <div style="flex: 1;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t);">Adaptive Follow-Ups</div>
      <div style="font-size: 0.62em; color: var(--label);">A form asks Q3 of every respondent. A conversation asks the version of Q3 that fits what the respondent just said.</div>
    </div>
  </div>

  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 10px 8px; border-bottom: 1px solid #f0f0f0;">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
    <div style="flex: 1;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t);">"Tell Me More About That"</div>
      <div style="font-size: 0.62em; color: var(--label);">The single richest mechanism in qualitative research. Forms have no equivalent.</div>
    </div>
  </div>

  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 10px 8px; border-bottom: 1px solid #f0f0f0;">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
    <div style="flex: 1;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t);">Sentiment Signal</div>
      <div style="font-size: 0.62em; color: var(--label);">Voice prosody and word choice tell you whether the respondent is enthusiastic, uncertain, or frustrated. Form text is flat.</div>
    </div>
  </div>

  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 10px 8px; border-bottom: 1px solid #f0f0f0;">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
    <div style="flex: 1;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t);">On-the-Fly Synthesis</div>
      <div style="font-size: 0.62em; color: var(--label);">The conversation can reference what the respondent said five minutes earlier. A form cannot build on itself.</div>
    </div>
  </div>

  <div class="row" style="display: flex; align-items: center; gap: 14px; padding: 10px 8px;">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>
    <div style="flex: 1;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.72em; color: var(--t);">Structured Summary You Can Trust</div>
      <div style="font-size: 0.62em; color: var(--label);">The AI returns transcript, summary, extracted fields, and sentiment — review-ready. Form data is raw rows.</div>
    </div>
  </div>

</div>

---

<!-- _class: bg-glow-green -->

### Keeping What Works

# Your CRM Stays in Charge

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 20px; line-height: 1.6;">The email marketing tool is not the thing being replaced. It remains the orchestrator. What changes is one URL.</div>

<div style="display: flex; align-items: center; gap: 10px; margin-top: 10px;">

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--a); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Step 1</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">CRM Sends Invite</div>
    <div style="font-size: 0.58em; color: var(--body); line-height: 1.5;">Same segment, same sequence, same email template.</div>
  </div>

  <div style="font-family: 'Outfit'; font-weight: 800; color: var(--a); font-size: 1.2em;">→</div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--g); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Step 2</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">Voice Conversation</div>
    <div style="font-size: 0.58em; color: var(--body); line-height: 1.5;">Recipient clicks. 15 minutes, audio only, on their phone or laptop.</div>
  </div>

  <div style="font-family: 'Outfit'; font-weight: 800; color: var(--a); font-size: 1.2em;">→</div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: var(--y); letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Step 3</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">Data Returns</div>
    <div style="font-size: 0.58em; color: var(--body); line-height: 1.5;">Transcript, summary, extracted fields, sentiment — via webhook.</div>
  </div>

  <div style="font-family: 'Outfit'; font-weight: 800; color: var(--a); font-size: 1.2em;">→</div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.5em; color: #0177c8; letter-spacing: 0.12em; text-transform: uppercase; margin-bottom: 8px;">Step 4</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 0.8em; color: var(--t); margin-bottom: 6px;">Back Into CRM</div>
    <div style="font-size: 0.58em; color: var(--body); line-height: 1.5;">Tags applied, custom fields updated, the right follow-up sequence fires.</div>
  </div>

</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px 18px; margin-top: 20px; text-align: center;">
  <div style="font-size: 0.72em; color: var(--body);"><strong>Nothing that works today stops working.</strong> The segments, sequences, and reporting your team already trusts remain the foundation.</div>
</div>

---

<!-- _class: bg-glow-gold -->

### Two Paths Forward

# Rent It, Or Build It

<div style="display: flex; gap: 20px; margin-top: 20px;">

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">Path A — Right For The Short Term</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t); margin-bottom: 12px;">Rent a Platform</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.65;">
      Use an existing commercial tool. Drop their link into the email. Inherit their conversation flow and their reporting.
      <br/><br/>
      <strong style="color: var(--t); font-weight: 600;">TheySaid</strong> free tier for a pilot.<br/>
      <strong style="color: var(--t); font-weight: 600;">Ribbon AI</strong> at $499/mo for volume.<br/>
      <strong style="color: var(--t); font-weight: 600;">Retell.ai</strong> at ~$1.50/interview as a service.
    </div>
    <div style="margin-top: 14px;">
      <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">Days To Launch</span>
      <span class="tag" style="background: #16a34a10; color: var(--g); border: 1px solid #16a34a20;">Great For Validation</span>
    </div>
  </div>

  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 24px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); letter-spacing: 0.14em; text-transform: uppercase; margin-bottom: 10px;">Path B — The Real Play</div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.1em; color: var(--t); margin-bottom: 12px;">Build Our Own Module</div>
    <div style="font-size: 0.68em; color: var(--body); line-height: 1.65;">
      A branded, embeddable interview widget on any Polymash property. Voice engine underneath (Retell.ai or Vapi.ai), our experience on top. Built on the same boilerplate approach that produced PolyWiz.
      <br/><br/>
      <strong style="color: var(--t); font-weight: 600;">~30 days</strong> to deliver.<br/>
      <strong style="color: var(--t); font-weight: 600;">~$1.50</strong> per completed interview.<br/>
      <strong style="color: var(--t); font-weight: 600;">Full data ownership.</strong>
    </div>
    <div style="margin-top: 14px;">
      <span class="tag" style="background: #e85d0c10; color: var(--a); border: 1px solid #e85d0c25;">Reusable</span>
      <span class="tag" style="background: #e85d0c10; color: var(--a); border: 1px solid #e85d0c25;">Branded</span>
      <span class="tag" style="background: #e85d0c10; color: var(--a); border: 1px solid #e85d0c25;">Owned</span>
    </div>
  </div>

</div>

<div style="text-align: center; font-size: 0.66em; color: var(--body); margin-top: 14px;"><strong>Rent in the short term. Build in parallel.</strong> The commercial pilot becomes the requirements document.</div>

---

<!-- _class: bg-glow -->

### The Real Opportunity

# One Module. Every Intake Conversation.

<div style="font-size: 0.72em; color: var(--body); margin-bottom: 14px; line-height: 1.55;">The reason to build this ourselves is not the single survey that triggered the conversation. Every intake conversation we will need — across every property, for the next two years — is structurally the same task with different questions. We build the engine once.</div>

<div style="display: flex; gap: 12px;">

  <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0L12 5.35l-.77-.77a5.4 5.4 0 0 0-7.65 7.65l8.42 8.42 8.42-8.42a5.4 5.4 0 0 0 0-7.65z"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Artist Submissions</div>
        <div style="font-size: 0.56em; color: var(--label);">Automatic follow-up interview enriches every directory profile.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">B2B Qualification</div>
        <div style="font-size: 0.56em; color: var(--label);">Designers, consultants, corporate art programs pre-qualified before any human call.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 1 0 0 7h5a3.5 3.5 0 1 1 0 7H6"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Pricing Studies</div>
        <div style="font-size: 0.56em; color: var(--label);">Van Westendorp and willingness-to-pay conversations instead of surveys.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Collector Onboarding</div>
        <div style="font-size: 0.56em; color: var(--label);">Preference capture with nuance that checkboxes cannot touch.</div>
      </div>
    </div>
  </div>

  <div style="flex: 1; display: flex; flex-direction: column; gap: 8px;">
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Grant Impact Interviews</div>
        <div style="font-size: 0.56em; color: var(--label);">Scalable qualitative evidence for NEA, Knight, Bloomberg submissions.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Podcast Guest Pre-Interviews</div>
        <div style="font-size: 0.56em; color: var(--label);">Structured prep content before recording day.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Post-Event Feedback</div>
        <div style="font-size: 0.56em; color: var(--label);">Office hours, workshops, launches — wrap-ups with real answers.</div>
      </div>
    </div>
    <div class="row" style="display: flex; align-items: center; gap: 10px; padding: 7px 8px;">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
      <div>
        <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.65em; color: var(--t);">Advisory Audit Intake</div>
        <div style="font-size: 0.56em; color: var(--label);">Readiness assessments delivered as self-service qualification tools.</div>
      </div>
    </div>
  </div>

</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 10px 16px; margin-top: 12px; text-align: center;">
  <div style="font-size: 0.66em; color: var(--body);"><strong>~30 days to deliver.</strong> Hostable on Arterial, Not Real Art, Artsville USA — or embedded as a widget anywhere.</div>
</div>

---

<!-- _class: lead bg-hero -->

<div style="font-family: 'Inter'; font-weight: 300; font-size: 0.65em; color: var(--a); text-transform: uppercase; letter-spacing: 0.25em; margin-bottom: 14px;">The Decision</div>

# Surface Answers,<br/>or Real Understanding?

<div style="font-family: 'Inter'; font-weight: 300; font-size: 0.85em; color: #777; margin-top: 20px; max-width: 640px;">The question is not whether to run a survey. It is what we want to learn — and whether the method we are about to use is capable of telling us.</div>

---

<!-- _class: bg-dots -->

### Sources & references

# Sources & References

<div style="font-family: 'Inter'; font-weight: 400; font-size: 0.95em; color: var(--body); margin: 8px 0 28px;">
All research lives in <a href="https://github.com/JuergenB/ideas-inbox/tree/main/ideas/005-ai-voice-surveys-vs-email-forms/research" style="color: var(--a); text-decoration: underline; font-weight: 600;">ideas/005-ai-voice-surveys-vs-email-forms/research/</a> — full provenance in <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/005-ai-voice-surveys-vs-email-forms/research/sources.md" style="color: var(--a); text-decoration: underline; font-weight: 600;">sources.md</a> with every URL, verbatim quote, retrieval date, and per-claim defensibility note. Originating research lineage: <a href="https://github.com/JuergenB/ideas-inbox/blob/main/ideas/002-polywiz-demo-vista-growth/research/research-ai-interview-platforms.md" style="color: var(--a); text-decoration: underline; font-weight: 600;">idea 002 research</a> (compiled 2026-04-12).
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; column-gap: 36px; row-gap: 10px; font-size: 0.7em; line-height: 1.5; color: var(--body);">

  <div><strong style="color: var(--t); font-weight: 600;">95% audio interview completion</strong> — <a href="https://learn.ntrvsta.com/ai-phone-screening/ai-phone-screening-vs-traditional-interviews-what-your-ta-team-needs-to-know" style="color: inherit; text-decoration: underline;">NTRVSTA audio-screening benchmarks</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">10–30% form completion baseline</strong> — <a href="https://www.rivaltech.com/blog/conversational-chat-surveys" style="color: inherit; text-decoration: underline;">RivalTech</a> · <a href="https://specific.app/" style="color: inherit; text-decoration: underline;">Specific.app</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">2.5× / 5× / 8× richer answers in conversational research</strong> — <a href="https://www.rivaltech.com/research-on-conversational-research" style="color: inherit; text-decoration: underline;">RivalTech / Reach3 study</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">1,250 interviews, 97.6% satisfaction, 99% recommend</strong> — <a href="https://www.anthropic.com/research/anthropic-interviewer" style="color: inherit; text-decoration: underline;">Anthropic Interviewer study</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Tens of thousands of AI-moderated interviews on candor</strong> — <a href="https://www.userintuition.ai/posts/can-you-trust-ai-moderated-interviews/" style="color: inherit; text-decoration: underline;">User Intuition research</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">40–60% video interview completion (vs 95% audio)</strong> — <a href="https://learn.ntrvsta.com/ai-phone-screening/ai-phone-screening-vs-traditional-interviews-what-your-ta-team-needs-to-know" style="color: inherit; text-decoration: underline;">NTRVSTA video benchmarks</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">$0.07/min base, ~$1.50–$4.50 all-in per 15-min interview</strong> — <a href="https://www.retellai.com/pricing" style="color: inherit; text-decoration: underline;">Retell.ai pricing</a></div>

  <div><strong style="color: var(--t); font-weight: 600;">Rentable platforms — pricing tiers</strong> — <a href="https://www.theysaid.io/" style="color: inherit; text-decoration: underline;">TheySaid</a> · <a href="https://ribbon.ai/" style="color: inherit; text-decoration: underline;">Ribbon AI</a> · <a href="https://vapi.ai/" style="color: inherit; text-decoration: underline;">Vapi.ai</a></div>

</div>

<div style="font-size: 0.62em; color: var(--m); margin-top: 22px;">Email-survey funnel benchmarks (40% open / 10% click / 3–5% start / 1–3% finish) are illustrative-stack from Mailchimp + RivalTech industry data — not a single-source claim. Detail in <code>research/sources.md</code>.</div>
