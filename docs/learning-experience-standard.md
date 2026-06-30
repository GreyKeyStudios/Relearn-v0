# Learning Experience Standard (LES)

**Version:** 1.0 (Phase 4.9)  
**Owner:** M0  
**Applies to:** All ReLearn subjects — CCNA pilot first

## Philosophy

> **Content correctness ≠ Teaching quality ≠ Learning experience.**

| Layer | Question | Document |
|-------|----------|----------|
| CES | Does content exist? | `BRIDGE_MASTER` §5 |
| BLS | Does it teach correctly? | [`bridge-learning-standard.md`](bridge-learning-standard.md) |
| LES | How should it **feel**? | This document |

LES is not about prettier animations. It is about **continuity** — the learner never has to relocate mentally.

---

## Foundational rule: LES-0 — Anchor Before Detail

Every topic experience follows this sequence:

1. **Persistent visual anchor** — learner always knows where they are
2. **Highlight current focus** — glow moves; anchor stays
3. **Teach one idea** — one card, minimal text
4. **Let learner interact** — swipe, icon fade-in, flow diagram
5. **Reinforce** — memory trick, analogy, misconception
6. **Assess** — mini checkpoint only after steps 1–5 for that idea

### Bridge design principle

Before storyboarding any topic, ask:

> **"What's the learner's anchor?"**

| Topic | Anchor |
|-------|--------|
| OSI | 7-layer stack |
| TCP/IP | 4-layer stack |
| Subnetting | Network diagram with subnets |
| VLANs | Switch with colored ports |
| Routing | Network map |
| ACLs | Packet through rule list |
| Linux | Terminal prompt |
| AWS | Cloud architecture diagram |
| Python | Code editor |
| French | Conversation thread |
| Music theory | Staff or keyboard |

Same card rhythm everywhere; only the anchor and subject change. That is ReLearn's **learning language**.

---

## The five-minute loop

```text
Look        → anchor visible, focus highlighted
Understand  → one sentence + optional visual
Interact    → swipe card, icon fades in, flow diagram
Remember    → memory trick, analogy
Answer      → mini checkpoint
```

Contrast with digital textbook:

```text
Paragraph → Paragraph → Paragraph → Question   (avoid)
```

---

## LES rules

| ID | Rule | Pass criteria |
|----|------|---------------|
| **LES-0** | Anchor Before Detail | Persistent anchor + highlight progression |
| **LES-1** | Anchor never unmounts | Pin/shrink ok; never full page replace without anchor |
| **LES-2** | Progressive highlight | Same diagram; glow moves between ideas |
| **LES-3** | One idea per card | Headline ≤ 80 chars; body ≤ 280 chars |
| **LES-4** | Terms attach to visuals | Frame, packet, segment appear on diagram/icon |
| **LES-5** | Unknown Word Rule | Define or defer with gray pill (see BLS-12) |
| **LES-6** | Memory trick when exists | Mnemonic on its own card |
| **LES-7** | Real-world analogy | Concrete hook before abstract label |
| **LES-8** | Mini checkpoint = quick win | 1 question right after teach block |
| **LES-9** | Misconception card | Common confusion addressed explicitly |
| **LES-10** | Why + summary | Open with relevance; close before graded quiz |
| **LES-11** | Permission To Defer | Tell learner what to master today vs. what waits; use term tiers + `laterLearn` |

**B+ interaction stack (v1):** Static SVG / Lucide icons + light CSS transitions. No Lottie, video, 3D, or canvas.

---

## LES-11 — Permission To Defer

Every lesson answers two questions:

1. **What must I master today?**
2. **What can I safely ignore until later?**

### Term tiers (`ExperienceTerm`)

| Tier | Meaning | UI |
|------|---------|-----|
| `now` | Must know on this card | Bold in body; optional chip |
| `basics` | Basic idea today; details later | Tappable chip → popover + "That's enough for today." |
| `later` | Future topic | Chip with "→ Ethernet" + `laterLearn` breadcrumb |

### `laterLearn` breadcrumb block

Bottom of teach cards — lists depth coming in later topics (not documentation links).

---

## Screen types

| Type | Purpose |
|------|---------|
| `hero` | Orient — one sentence, layer glows |
| `teach` | Core idea + optional media |
| `flow` | Vertical icon flow (computer → cable → switch) |
| `analogy` | Real-world hook |
| `memory` | Mnemonic card |
| `misconception` | "Session is not TCP" |
| `checkpoint` | Inline mini quiz |
| `summary` | Close before graded quiz |

---

## Agent ownership

| Role | Agent ID | Core question |
|------|----------|---------------|
| Learning Experience Architect | P4.9-LXA | What should they see, think, click, remember, feel in 5 minutes? |
| Path designer | P4.8-Path | What order? Prerequisites? |
| Cognitive reviewer | P4.8-Cognitive | Audit storyboard for load |
| CCNA SME | P4.8-SME | Facts correct? |
| Human QA | Michael | Did I feel lost? |

LXA outputs **storyboards** (`experience.screens[]`), not prose paragraphs.

---

## Automation

```bash
npm run verify:curriculum -- --strict-experience
```

Warns on: missing anchor, screen length caps, checkpoint before teach, jargon without `terms[]`, invalid `laterTopicId`, missing memory screen (OSI).

Reference experience: [`reference-experiences.md`](reference-experiences.md) — `ccna:osi-model`.
