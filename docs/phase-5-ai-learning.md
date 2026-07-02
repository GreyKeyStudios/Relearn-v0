# Phase 5 — AI learning modes

**Status:** Planned (blocked until Phase 4.9 CCNA pilot + mastery signals are stable)  
**Parent:** [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) §2 Phase 5  
**Principle:** AI is an enhancement layer — Bridge must remain fully valuable without AI (§1).

---

## Why not "AI Tutor"?

**AI Tutor** says: *"I'll explain things."*

**Professor Mode** says: *"Let's see if you really understand."*

Those are different experiences. ReLearn should offer **multiple AI modes**, each with a distinct job — not one generic chat box.

---

## Learning progression (product philosophy)

Most systems stop at knowledge. ReLearn aims higher:

```text
Information
    ↓
Knowledge        (I know the facts.)
    ↓
Application      (I can use the facts.)
    ↓
Understanding    (I know why they work.)
    ↓
Wisdom           (I know when to use them.)
    ↓
Teaching         (I can build understanding in someone else.)
    ↓
Legacy           (They teach the next person.)
```

**Product sentence (philosophy section):**

> We believe learning isn't complete until you can guide someone else through it.

The goal is not *"Get 90%."* It is *"Could you help the next person reach 90%?"*

**Sankofa** — go back and fetch what is needed to move forward — describes both learner journey and architecture: fundamentals (Ethernet, IPv4, how you learn) are not failure; they are prerequisites for what comes next.

---

## AI mode catalog

| Mode | Learner state | AI behavior |
|------|---------------|-------------|
| **Study Mode** | "I'm confused." | Explains, draws diagrams, uses analogies. Never assumes prior knowledge. |
| **Professor Mode** | Ready to be tested | No notes. No hints unless asked. Follow-up questions. Challenges explanations. Hunts misconceptions. **Default for oral mastery checks** (see `docs/bridge-learning-standard.md`). |
| **Socratic Mode** | Has some foundation | Almost never explains. Asks: *"Why do you think that?"* *"What layer?"* *"What if it crossed a router?"* Goal: learner discovers the answer. |
| **Exam Mode** | Pre-exam drill | Timed. No hints. No explanations until the end. Question pools. Adaptive difficulty. Cisco mode. |
| **Review Mode** | Away for a week | *"Let's see what stuck."* Quiz built from weak areas, spaced repetition, mastery decay, time since last review. |
| **Teaching Mode** | Demonstrated understanding | AI becomes the student. Learner teaches; AI pushes back with beginner mistakes. **Graduation ceremony** — unlock after Professor Mode pass on a topic. |
| **Interview Mode** | Post-cert / job prep | Scenario roleplay: *"You're interviewing for a SOC Analyst… walk me through a phishing report."* Application beyond multiple choice. |

### Mode differentiation (one line each)

- **Study** = receive explanations  
- **Professor** = defend understanding  
- **Socratic** = discover through questions  
- **Exam** = perform under pressure  
- **Review** = retention check  
- **Teaching** = prove you can transfer knowledge  
- **Interview** = prove you can apply it in context  

---

## Professor Mode — design spec

### Core interaction pattern

Validated in Michael + ChatGPT "Professor Mode" sessions (subnetting, IP ranges, IPv6):

1. AI asks (often *"Why?"*)
2. Learner answers in plain language
3. AI interprets what the answer **reveals about the mental model** — not just right/wrong

This is office-hours / oral-exam behavior, not tutoring.

### Confidence rating (after every answer)

Do **not** immediately say "correct." Ask:

> **How confident are you?** (1–5 stars)

| Outcome | Confidence | AI response |
|---------|------------|-------------|
| Correct | High | Move on |
| Correct | Low | *"You got it right but weren't confident — two more examples before we continue."* |
| Wrong | High | *"You were very confident in an incorrect mental model — let's fix that before continuing."* |

Signals feed **Learner Confidence Score** (see `BRIDGE_MASTER.md` §13b) and adaptive review — separate from raw quiz score.

### Professor's Notes (end of every session)

No percentages. A human-readable assessment:

**Strengths** — what mental models are solid  
**Needs reinforcement** — specific gaps (e.g. why network address is reserved; 172.16–31 mnemonic)  
**Recommendation** — *"Ready to continue to VLANs"* or *"Another 15 minutes on this topic"*

### Curriculum Confidence (post-lesson, in-app — planned)

After a lesson or Professor Mode session, prompt:

1. **How prepared did this lesson make you for Professor Mode?** (1–5 stars)
2. **Which questions felt unfair?** (multi-select)
   - Not taught
   - Not enough examples
   - Poor explanation
   - Too advanced
   - Trick wording
   - Other (free text)

Feeds the learn-from-learners pipeline — e.g. wireless QA surfaced BSSID, roaming, and WEP-why gaps before content existed.

### Implementation order (Phase 5)

1. **Explain This Mistake** — contextual, post-quiz (never chat-first; per BRIDGE_MASTER roadmap)
2. **Professor Mode** — oral check script + confidence + Professor's Notes (export-friendly for external ChatGPT sessions until in-app)
3. **Review Mode** — wire to existing mastery + SRS (Phase 4 engine; minimal new AI)
4. **Study Mode** — lesson-adjacent help with LES guardrails (no spoilers before teach cards)
5. **Socratic / Exam / Teaching / Interview** — later tiers
6. **Curriculum feedback pipeline** — aggregate learner signals → propose diffs → human approval → ship; contributor perks (badge, attribution, free access window)

---

## Teaching Mode — graduation ceremony

Teaching Mode is not a beginner feature. It unlocks when Professor Mode confirms **understanding** on a topic (not just quiz recall).

**Flow:**

1. Professor Mode: *"Congratulations. You have demonstrated understanding."*
2. **Teaching Mode** unlocks for that topic.
3. AI plays the confused student:
   - *"I don't understand why we can't just give everyone a /24."*
   - *"But wouldn't that be easier?"*
   - *"Now explain it without using the word subnet."*
4. AI intentionally makes layer mistakes: *"So switches route packets, right?"* — learner must catch and correct.

**Why it matters:** Teaching is the deepest test of understanding. Pseudocode progression: knowledge → wisdom → understanding → **each one teach one**.

**Future:** Best community Teaching Mode explanations (reviewed) become **Community Insight** cards in curriculum — e.g. *"Think of subnetting like slicing a pie…"* See **Learn from learners** below for approval flow and contributor perks.

---

## Learn from learners → curriculum updates

ReLearn is not static. The platform **learns from learners** and can improve the curriculum as a result — with **human approval** before anything ships.

### What the system observes

Signals from all AI modes (especially Professor and Teaching):

| Signal | Example | Possible curriculum action |
|--------|---------|---------------------------|
| Repeated low confidence on correct answers | Gets 172.x right but stars = 1 | Add reinforcement card (e.g. 172.16–31 mnemonic) |
| High confidence + wrong | Sure 172.40 is private | Add misconception trap card |
| Professor's Notes patterns | Same gap across many learners | Prioritize content agent fix |
| Teaching Mode explanation | Clear analogy for subnetting | Candidate **Community Insight** |
| Study Mode confusion clusters | "What is TEST-NET?" spikes | Expand teach card or study tip |

Aggregate patterns — not one-off mistakes. Privacy: learner-identifiable data stays local or anonymized until explicit opt-in to contribute.

### Approval gate (required)

```text
Learner signals → AI/content pipeline proposes change → Human review (Michael / content agent) → Approve or reject → LES / quiz update
```

**Nothing auto-merges to `ccna.ts` or experience files without approval.** Cursor agents and content owners retain file ownership (see `BRIDGE_MASTER.md` §9). AI proposes; humans ship.

Proposal format (future UI or export):

- Topic + card ID (or "new card")
- Evidence (N learners, confidence pattern, sample quotes)
- Suggested copy diff
- Risk check (accuracy, LES-3 length, teach-before-test)

### Contributor recognition (when learner input is chosen)

If a learner's explanation, analogy, or flagged gap leads to an **approved** curriculum change:

| Perk | Purpose |
|------|---------|
| **Profile badge** | e.g. *Curriculum Contributor*, *Community Teacher* — visible on profile |
| **Attribution** | Optional credit on Community Insight card: *"Suggested by @learner"* |
| **Free access** | Time-limited premium / full cert unlock (e.g. 30–90 days) — TBD pricing model |
| **Early access** | Preview new modes or tracks before general release |

Rules TBD: one badge tier per accepted contribution; no pay-for-placement; quality bar same as content agent standards (SME + cognitive review).

**Principle:** Learners who help the next person learn are rewarded — aligns with *each one teach one* and Sankofa.

---

## Curriculum validation loop (already in practice)

Michael's Professor Mode sessions have been **de facto curriculum QA**:

- Quiz exposes gap → lesson card added (e.g. 172.40 trap, network-address-why, TEST-NET 555 analogy)
- Learner shifts from *"I don't understand"* to *"The curriculum needs more here"* — Teacher Mode mindset before the feature exists

Scale path: thousands of learners → weak-area patterns → **proposed** content fixes → **your approval** → LES cards updated. Contributors whose input ships earn profile recognition (badge, attribution, optional free-access period).

---

## Prediction (north star)

> *"I thought Professor Mode was a gimmick until it asked me one question and somehow figured out exactly what I didn't understand."*

If learners say that, Bridge is more than a study app — it feels like an instructor paying attention to **how you think**, not whether you picked B.

Highest achievement is not passing a cert. It is finishing confident enough to say:

> **"Come here. Let me show you how this works."**

---

## Related docs

| Doc | Relevance |
|-----|-----------|
| [`bridge-learning-standard.md`](bridge-learning-standard.md) | Oral mastery check format; Professor Mode as pilot |
| [`learning-experience-standard.md`](learning-experience-standard.md) | LES cards AI must not spoil |
| [`phase_4_learning_intelligence.plan.md`](../.cursor/plans/phase_4_learning_intelligence.plan.md) | Mastery + review engine Professor/Review modes plug into |
| [`src/types/readiness.ts`](../src/types/readiness.ts) | `LearnerConfidenceScore` stub |

---

*Captured from Michael + Professor Mode design session, 2026. Cursor agents refer to this pattern as "Professor Mode" because that is how oral mastery validation has been run in practice.*
