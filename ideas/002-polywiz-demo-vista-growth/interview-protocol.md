---
marp: true
theme: default
paginate: true
style: |
  @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700;800&family=Raleway:wght@300;400&display=swap');

  :root {
    --a: #ff6b1a;
    --a2: #ff8c4a;
    --bg: #0c0c0c;
    --s: #111;
    --b: #1a1a1a;
    --m: #777;
    --t: #e0e0e0;
    --g: #22c55e;
    --r: #ef4444;
    --y: #f5a623;
    --body: #b0b0b0;
    --label: #888;
  }

  section {
    background-color: #0c0c0c;
    background-image: radial-gradient(ellipse at 50% 50%, transparent 30%, rgba(255,107,26,0.12) 100%);
    color: var(--t);
    font-family: 'Raleway', sans-serif;
    font-weight: 400;
    padding: 56px 72px;
    line-height: 1.5;
  }

  h1 { font-family: 'Outfit'; font-weight: 600; font-size: 2.2em; color: var(--t); letter-spacing: -0.02em; line-height: 1.1; margin: 0 0 4px; }
  h2 { font-family: 'Raleway'; font-weight: 300; font-size: 1.2em; color: #aaa; margin: 0 0 20px; }
  h3 { font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--m); text-transform: uppercase; letter-spacing: 0.2em; margin: 0 0 4px; }
  strong { color: var(--a); font-weight: 400; }

  section.lead { display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center; }
  section.lead h1 { font-size: 2.6em; color: var(--t); }

  section::after { font-family: 'Outfit'; font-size: 0.6em; color: #151515; }

  /* Edge-glow backgrounds — dark center, color bleeds from edges, varied per slide */
  section.bg-glow { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.20) 100%), radial-gradient(ellipse at 0% 100%, rgba(34,197,94,0.14) 0%, transparent 50%); }
  section.bg-glow-orange { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(255,107,26,0.22) 100%); }
  section.bg-glow-green { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(34,197,94,0.18) 100%), radial-gradient(ellipse at 100% 0%, rgba(34,197,94,0.12) 0%, transparent 50%); }
  section.bg-glow-gold { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.18) 100%); }
  section.bg-dots { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(1,153,254,0.14) 100%), radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px); background-size: auto, 24px 24px; }
  section.bg-grid { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 25%, rgba(245,166,35,0.14) 100%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px); background-size: auto, 48px 48px, 48px 48px; }
  section.bg-hero { background-color: #0c0c0c; background-image: radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(1,153,254,0.25) 100%); }

  header { text-align: right; padding: 0; margin: 0; }
  header img { margin: 0; }

  .tag { font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; letter-spacing: 0.12em; text-transform: uppercase; padding: 3px 10px; border-radius: 4px; display: inline-block; }

  .row:hover { background: #161616; }
  .row { transition: background 0.2s; border-radius: 6px; padding: 0 8px; }
header: ''
footer: ''
---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

<div style="position: absolute; top: 32px; left: 40px;">
  <img src="./images/polymash-logo.png" style="width: 48px; border-radius: 8px; opacity: 0.7;" />
</div>

# The AI Interview Protocol

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: #aaa; margin-top: 12px; max-width: 620px;">How Vista Growth can turn its $7,500 audit into a self-service qualification engine — and why Jackie can build it in 8 weeks</div>

<div style="display: flex; gap: 8px; margin-top: 24px;">
  <span style="background: #ff6b1a15; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #ff6b1aaa; font-weight: 400;">Juergen Berkessel</span>
  <span style="background: #ff6b1a15; border: 1px solid #ff6b1a33; border-radius: 20px; padding: 4px 14px; font-family: 'Outfit'; font-size: 0.55em; color: #ff6b1aaa; font-weight: 400;">April 2026</span>
</div>

---

<!-- _class: bg-glow-orange -->

### The Problem

# Scaling Your Best Product

<div style="display: flex; gap: 24px; margin-top: 16px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.82em; color: var(--body); line-height: 1.7;">

The **AI Transformation Audit** is Vista Growth's entry product — $7,500, delivered over 2 weeks. Current state assessment, AI Opportunity Matrix, ROI projections, 90-day action plan.

It's good work. But it requires Steve or Jackie in a room for every engagement. That's a bottleneck, not a business.

What if prospects could **experience a taste of the audit before they buy** — and Vista Growth got qualified leads while they sleep?

</div>
  </div>
  <div style="width: 1px; background: var(--b);"></div>
  <div style="width: 280px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--r); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Current Model</div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--r)"/></svg>
        <span style="font-size: 0.7em; color: var(--body);">Manual discovery calls</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--r)"/></svg>
        <span style="font-size: 0.7em; color: var(--body);">1 client at a time</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--y)"/></svg>
        <span style="font-size: 0.7em; color: var(--body);">No pre-qualification</span>
      </div>
      <div style="display: flex; align-items: center; gap: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--y)"/></svg>
        <span style="font-size: 0.7em; color: var(--body);">Prospects learn nothing until they pay</span>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### The Opportunity

# AI Interviews Outperform Everything

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">Conversational AI interviews are a new category. Not chatbots. Not forms. Not surveys. They're **adaptive, voice-based conversations** that probe, follow up, and summarize — and the data on them is striking.</div>

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--g); line-height: 1;">95%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 6px;">COMPLETION</div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 4px;">Audio AI interviews</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--r); line-height: 1;">10-30%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 6px;">COMPLETION</div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 4px;">Traditional web forms</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--a); line-height: 1;">5x</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 6px;">RICHER DATA</div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 4px;">With AI probing follow-ups</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; text-align: center;">
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 2em; color: var(--t); line-height: 1;">78%</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; margin-top: 6px;">PREFER AI</div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 4px;">Over human interviewers</div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 12px; margin-top: 14px; text-align: center;">
  <div style="font-size: 0.68em; color: var(--body);">Anthropic's own study: 1,250 AI interviews — **97.6% satisfaction**, 99% would recommend. Participants valued the AI's ability to summarize and reflect back what they said.</div>
</div>

---

<!-- _class: bg-dots -->

### Why Audio

# Skip Video. Go Voice-Only.

<div style="display: flex; gap: 24px; margin-top: 16px;">
  <div style="flex: 1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7; margin-bottom: 14px;">

The research is clear: **audio-only beats video** on every metric that matters. No camera anxiety, no lighting hassles, no avatar uncanny valley. Just a conversation.

People are **more honest** when they're not being watched. No micro-reactions trigger response filtering. No demographic matching concerns. The absence of visual judgment signals is the feature.

</div>

<div style="display: flex; gap: 8px;">
  <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">95% completion</span>
  <span class="tag" style="background: #ef444412; color: var(--r); border: 1px solid #ef444422;">Video: 40-60%</span>
  <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">10-20x cheaper</span>
</div>
  </div>
  <div style="width: 340px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">What Makes AI Interviews Work</div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">AI summarizes and reflects back</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Adaptive follow-ups based on answers</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Transparent about AI nature (builds trust)</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 10px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">No judgment signals — greater candor</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Pause, reflect, resume on own schedule</span>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow -->

### The Product

# The Vista Growth AI Readiness Interview

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">A 15-minute audio conversation at **audit.vistagrowth.ai**. The prospect talks. The AI listens, probes, and scores. Vista Growth gets a qualified lead with structured data before anyone picks up the phone.</div>

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--a); margin-bottom: 8px;">WHAT THE PROSPECT GETS</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6;">
      <div style="margin-bottom: 6px;">15-min adaptive conversation covering their marketing ops, tech stack, team size, AI usage, and pain points</div>
      <div style="margin-bottom: 6px;">AI-scored **"transformation readiness"** across multiple dimensions</div>
      <div style="margin-bottom: 6px;">Personalized PDF report with Vista Growth branding</div>
      <div>Clear CTA to book the full $7,500 engagement</div>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--g); margin-bottom: 8px;">WHAT VISTA GROWTH GETS</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6;">
      <div style="margin-bottom: 6px;">Full transcript + AI-generated summary in Airtable</div>
      <div style="margin-bottom: 6px;">Qualification score — **know who's worth a call** before calling</div>
      <div style="margin-bottom: 6px;">Structured data on pain points, budget signals, urgency</div>
      <div>Prospects pre-sold on Vista Growth's expertise through the experience itself</div>
    </div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 12px; margin-top: 12px; text-align: center;">
  <div style="font-size: 0.68em; color: var(--body);">The interview IS the sales tool. Prospects experience firsthand what **well-designed AI interaction** feels like — which is exactly what Vista Growth promises to deliver.</div>
</div>

---

<!-- _class: bg-glow-gold -->

### Architecture

# How It Works

<div style="display: flex; gap: 12px; margin-top: 16px; align-items: center;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--t); margin-top: 6px;">Prospect Arrives</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 4px;">audit.vistagrowth.ai</div>
  </div>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--m)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="1.5"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--t); margin-top: 6px;">AI Interview</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 4px;">15 min, adaptive</div>
  </div>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--m)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--t); margin-top: 6px;">Score + Report</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 4px;">PDF emailed to prospect</div>
  </div>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--m)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; text-align: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--y)" stroke-width="1.5"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--t); margin-top: 6px;">Airtable CRM</div>
    <div style="font-size: 0.55em; color: var(--label); margin-top: 4px;">Transcript + scores</div>
  </div>
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--m)" stroke-width="1.5"><polyline points="9 18 15 12 9 6"/></svg>
  <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 14px; text-align: center;">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--g)" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72"/></svg>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.6em; color: var(--t); margin-top: 6px;">Steve Calls</div>
    <div style="font-size: 0.55em; color: var(--g); margin-top: 4px;">Pre-qualified lead</div>
  </div>
</div>

<div style="display: flex; gap: 14px; margin-top: 18px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--a); margin-bottom: 6px;">COST PER INTERVIEW</div>
    <div style="font-size: 0.65em; color: var(--body);">**$2-5 per 15-minute interview** using voice AI APIs like Retell.ai or Vapi.ai (varies by LLM and voice quality). At 50 interviews/month, that's **$100-250** — less than one hour of consulting time.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); margin-bottom: 6px;">CONVERSION MATH</div>
    <div style="font-size: 0.65em; color: var(--body);">50 interviews → 47 complete (95% rate) → ~10 qualified leads → 2-3 close at $7,500 = **$15,000-22,500** from ~$250 in AI costs.</div>
  </div>
</div>

---

<!-- _class: bg-glow-orange -->

### Beyond Qualification

# Three Strategic Plays

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">The interview protocol isn't just a lead gen tool. It's a platform that opens three distinct revenue and credibility strategies for Vista Growth.</div>

<div style="display: flex; gap: 14px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--a); line-height: 1;">01</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">Lead Qualification — Light Version</div>
    <div style="font-size: 0.62em; color: var(--body); margin-top: 6px; line-height: 1.5;">A short, open interview for new prospects. They self-qualify, get a free report, and **experience AI-powered consulting firsthand**. This is the entry point — the door opener.</div>
    <div style="display: flex; align-items: center; gap: 6px; margin-top: 8px;">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="var(--a)" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
      <span style="font-size: 0.55em; color: var(--a);">Evolves into deeper post-signup interviews</span>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--g); line-height: 1;">02</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">Multi-Stakeholder Deep Dive</div>
    <div style="font-size: 0.62em; color: var(--body); margin-top: 6px; line-height: 1.5;">Post-signup, multiple people from the same org take **role-specific interviews** — CMO gets strategy questions, ops gets workflow questions. The system generates an organizational rollup — where leaders agree, where they diverge. That divergence is a consultable finding itself.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 20px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 700; font-size: 1.5em; color: var(--y); line-height: 1;">03</div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t); margin-top: 10px;">White-Label for Clients</div>
    <div style="font-size: 0.62em; color: var(--body); margin-top: 6px; line-height: 1.5;">Once the protocol works for Vista Growth, **license the framework to clients.** Their own branded AI interviews for customer research, employee surveys, market assessments. New revenue stream from the same architecture.</div>
  </div>
</div>

---

<!-- _class: bg-glow-gold -->

### Platform Options

# Buy a Platform or Build Your Own

<div style="font-size: 0.78em; color: var(--body); margin-bottom: 14px;">Two real options. Each has trade-offs.</div>

<div style="display: flex; gap: 20px; margin-top: 8px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--y); margin-bottom: 10px;">BUY — Use an Existing Platform</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6; margin-bottom: 12px;">Platforms like **TheySaid** ($49-149/mo, free tier) or **Ribbon AI** ($499-999/mo) offer conversational AI interviews out of the box — adaptive questioning, built-in analysis, reporting.</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.6; margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg> Fast to launch — days, not weeks</div>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg> Good for validating the concept</div>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--r)"/></svg> Limited branding and customization</div>
      <div style="display: flex; align-items: center; gap: 6px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--r)"/></svg> No multi-stakeholder rollups</div>
    </div>
    <div style="display: flex; gap: 6px;">
      <span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">$49-999/mo</span>
      <span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">Days to launch</span>
    </div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 22px; position: relative; overflow: hidden;">
    <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.75em; color: var(--g); margin-bottom: 10px;">BUILD — Jackie Builds It with Retell.ai</div>
    <div style="font-size: 0.65em; color: var(--body); line-height: 1.6; margin-bottom: 12px;">Same boilerplate as PolyWiz. **Retell.ai** or **Vapi.ai** handle the voice AI (~$2-5 per interview depending on configuration). Jackie builds the branded UI, scoring engine, PDF reports, and multi-stakeholder rollups.</div>
    <div style="font-size: 0.62em; color: var(--body); line-height: 1.6; margin-bottom: 12px;">
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg> White-labeled at audit.vistagrowth.ai</div>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg> Full control — branding, scoring, rollups</div>
      <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg> **Proves Vista Growth builds AI tools**</div>
      <div style="display: flex; align-items: center; gap: 6px;"><svg width="8" height="8" viewBox="0 0 8 8"><circle cx="4" cy="4" r="4" fill="var(--y)"/></svg> 4-6 weeks development time</div>
    </div>
    <div style="display: flex; gap: 6px;">
      <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">~$2-5/interview</span>
      <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">~$150-300/mo</span>
    </div>
  </div>
</div>
</div>

---

<!-- _class: bg-grid -->

### The Build

# 8-Week Timeline

<div style="margin-top: 12px;">
  <div style="display: flex; gap: 14px; margin-bottom: 12px;">
    <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Weeks 1-2</span>
        <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t);">Design + Validate</span>
      </div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        <div style="margin-bottom: 4px;">Design the interview flow — 15-20 questions across marketing ops, tech stack, team structure, AI readiness</div>
        <div style="margin-bottom: 4px;">Deploy on TheySaid (free tier)</div>
        <div>Run 10-20 test interviews with friendly contacts. Iterate on question flow and scoring.</div>
      </div>
    </div>
    <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--a), transparent);"></div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Weeks 3-4</span>
        <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t);">Production + Integration</span>
      </div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        <div style="margin-bottom: 4px;">Move to Ribbon AI for real-time voice conversations</div>
        <div style="margin-bottom: 4px;">Connect to Airtable — transcripts, scores, lead qualification</div>
        <div>Design the branded PDF report template. Set up email delivery with CTA.</div>
      </div>
    </div>
  </div>
  <div style="display: flex; gap: 14px;">
    <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--y), transparent);"></div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span class="tag" style="background: #f5a62312; color: var(--y); border: 1px solid #f5a62322;">Weeks 5-6</span>
        <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t);">Custom Build</span>
      </div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        <div style="margin-bottom: 4px;">Jackie clones the boilerplate, integrates Retell.ai voice API</div>
        <div style="margin-bottom: 4px;">White-labeled at audit.vistagrowth.ai — full brand control</div>
        <div>Multi-stakeholder support: independent interviews per participant, organizational rollup view.</div>
      </div>
    </div>
    <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 16px; position: relative; overflow: hidden;">
      <div style="position: absolute; top: 0; left: 0; width: 100%; height: 2px; background: linear-gradient(90deg, var(--g), transparent);"></div>
      <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 8px;">
        <span class="tag" style="background: #22c55e12; color: var(--g); border: 1px solid #22c55e22;">Weeks 7-8</span>
        <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.7em; color: var(--t);">Launch + Optimize</span>
      </div>
      <div style="font-size: 0.62em; color: var(--body); line-height: 1.5;">
        <div style="margin-bottom: 4px;">Go live with real prospects. Monitor completion rates and qualification accuracy.</div>
        <div style="margin-bottom: 4px;">Tune scoring model based on which leads actually convert to audits</div>
        <div>Begin pitching multi-stakeholder assessments as a premium upsell.</div>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow -->

### Jackie's Build

# Same Boilerplate. Different Product.

<div style="display: flex; gap: 24px; margin-top: 16px; align-items: center;">
  <div style="flex: 1;">
    <div style="font-size: 0.8em; color: var(--body); line-height: 1.7; margin-bottom: 14px;">

The same **Next.js + Supabase boilerplate** that powered PolyWiz gives Jackie a running start. Authentication, database, dashboard, API routes — all solved. She focuses on the interview logic, the scoring model, and the report generation.

The voice AI is an API call. **Retell.ai** handles speech-to-text, the conversational AI, and the transcript. Jackie's app handles everything around it — the branded UI, the scoring, the PDF, the CRM flow.

</div>
    <div style="display: flex; gap: 8px;">
      <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Next.js</span>
      <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Supabase</span>
      <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Retell.ai</span>
      <span class="tag" style="background: #ff6b1a12; color: var(--a); border: 1px solid #ff6b1a22;">Claude Code</span>
    </div>
  </div>
  <div style="width: 340px;">
    <div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
      <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--m); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">What Jackie Builds</div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Landing page + interview embed</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Scoring engine (AI-scored dimensions)</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">PDF report generator</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px; margin-bottom: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--a)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Admin dashboard for Steve</span>
      </div>
      <div style="display: flex; align-items: flex-start; gap: 8px;">
        <svg width="8" height="8" viewBox="0 0 8 8" style="margin-top: 5px;"><circle cx="4" cy="4" r="4" fill="var(--g)"/></svg>
        <span style="font-size: 0.68em; color: var(--body);">Multi-stakeholder rollup view</span>
      </div>
    </div>
  </div>
</div>

---

<!-- _class: bg-glow-green -->

### The Numbers

# Buy vs. Build

<div style="display: flex; gap: 14px; margin-top: 16px;">
  <div style="flex: 1; background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--r); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Buy — Use a Platform</div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 0.68em; color: var(--body);">Ribbon AI (real-time voice)</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--y);">$499-999/mo</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 0.68em; color: var(--body);">TheySaid (text-based, simpler)</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--g);">$49-149/mo</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--b); padding-top: 8px; margin-top: 4px;">
      <span style="font-size: 0.68em; color: var(--t); font-weight: 400;">Year 1 cost</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--y);">$1,800-12,000</span>
    </div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 10px; line-height: 1.5;">Fast to start. Limited branding and customization. No multi-stakeholder rollup. You're renting someone else's infrastructure.</div>
  </div>
  <div style="flex: 1; background: var(--s); border: 1px solid #22c55e33; border-radius: 10px; padding: 18px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--g); letter-spacing: 0.1em; text-transform: uppercase; margin-bottom: 12px;">Build — Own It</div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 0.68em; color: var(--body);">Voice AI API (~50 interviews/mo @ $2-5 each)</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--g);">~$100-250/mo</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
      <span style="font-size: 0.68em; color: var(--body);">Vercel + Supabase + email</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--g);">~$50/mo</span>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; border-top: 1px solid var(--b); padding-top: 8px; margin-top: 4px;">
      <span style="font-size: 0.68em; color: var(--t); font-weight: 400;">Year 1 cost</span>
      <span style="font-family: 'Outfit'; font-weight: 600; font-size: 0.68em; color: var(--g);">~$2,000-3,600</span>
    </div>
    <div style="font-size: 0.58em; color: var(--label); margin-top: 10px; line-height: 1.5;">Jackie builds it with the boilerplate + Claude Code. Full brand control. Multi-stakeholder rollups. White-labeled at audit.vistagrowth.ai. <strong>And it proves Vista Growth's AI capabilities to every prospect who uses it.</strong></div>
  </div>
</div>

<div style="background: var(--s); border: 1px solid var(--b); border-radius: 10px; padding: 14px; margin-top: 14px;">
  <div style="font-size: 0.68em; color: var(--body); text-align: center;">Either path: <strong>1 closed audit ($7,500) covers a full year of operating costs.</strong> The build path costs the same to run — and doubles as a showcase of what Vista Growth can do with AI.</div>
</div>

---

<!-- _class: lead bg-hero -->
<!-- _paginate: false -->

# The Interview Is the Product

<div style="font-family: 'Raleway'; font-weight: 300; font-size: 0.85em; color: #aaa; margin-top: 12px; max-width: 620px;">Prospects don't read whitepapers. They don't sit through webinars. But they'll spend 15 minutes talking about their own problems — and walk away impressed that Vista Growth built the tool that listened.</div>

<div style="display: flex; gap: 14px; margin-top: 30px;">
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">TIMELINE</div>
    <div style="font-size: 0.65em; color: var(--a); margin-top: 2px;">8 weeks to launch</div>
  </div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">RUNNING COST</div>
    <div style="font-size: 0.65em; color: var(--a); margin-top: 2px;">~$150-300/mo</div>
  </div>
  <div style="background: var(--s); border: 1px solid var(--b); border-radius: 8px; padding: 10px 16px;">
    <div style="font-family: 'Outfit'; font-weight: 600; font-size: 0.55em; color: var(--label); letter-spacing: 0.08em;">BREAK-EVEN</div>
    <div style="font-size: 0.65em; color: var(--g); margin-top: 2px;">1 closed audit</div>
  </div>
</div>
