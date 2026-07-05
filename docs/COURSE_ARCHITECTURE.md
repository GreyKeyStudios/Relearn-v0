# Course Architecture — ReLearn Platform Constitution

**Version:** 1.0  
**Owner:** M0  
**Status:** Approved for agent and content planning  
**Parent:** ReLearn product vision (Bridge Study Companion = first implementation)

**Read order for agents:** This document first, then [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md), then template-specific masters ([`TYPE_B_MASTER.md`](TYPE_B_MASTER.md), [`TYPE_C_MASTER.md`](TYPE_C_MASTER.md)).

---

## 1. Product framing

Bridge Study Companion is not the destination. It is the **proof of concept** for **ReLearn** — a learning engine that ships **content packs** (tracks), not one-off courses.

```text
ReLearn Engine  +  Content Pack (Track)  =  What the learner sees
```

**Core insight:** Do not build courses. Build **course templates**. Subjects (CCNA, Git, SQL, French) are content that fills a template the engine already knows how to deliver.

Bridge owns curriculum. External tools (Packet Tracer, terminal, GitHub, Excel) appear as **assignments inside the path** — not random links.

---

## 2. Engine hierarchy

Target content model (Path B). Path A today maps Track → `Certification` in [`src/content/types.ts`](../src/content/types.ts).

```text
ReLearn Engine
  └── Course Template (A | B | C | D)
        └── Track (content pack — vendor cert or skills track)
              └── Module (domain)
                    └── Topic (lesson unit)
                          └── Activities (lesson, quiz, lab, drill, Professor, …)
```

**Career Paths** (future): compositions of existing tracks — e.g. Help Desk = Network+ + PowerShell + Git + Windows basics. No duplicated content; paths reference track IDs only. Not implemented in schema yet — document only.

---

## 3. Template taxonomy

| Type | Driver | Reference track | Primary loop | Repo examples |
|------|--------|-----------------|--------------|---------------|
| **A** — Concept | Mental models, exam recall | **CCNA** | Learn → Practice → Review → Master | `ccna.ts`, Linux+, Security+, Network+ |
| **B** — Skill | Syntax, commands, debugging | **Git** | Concept → Syntax → Try → **Break** → **Fix** → Quiz → Capstone | `git-github.ts`, `powershell.ts` (v1) |
| **C** — Tool | Application workflows, projects | TBD (Wireshark or Excel) | Walkthrough → Task → Project → Rubric | External-lab pattern today |
| **D** — Performance | Creation, speaking, playing | TBD (French or Music) | Listen → Perform → Reflect → Revise | Placeholder only |

### Type A vs Linux+ vs Bash

- **CompTIA Linux+** is **Type A** — operating-system concepts, permissions, services, networking, plus cert-style recall. Not a command cheat sheet course.
- **Bash** (future Type B track) is the **command language** for Linux shells — procedural, Break/Fix labs, pairs with Linux+ conceptually but uses the Type B template.

Do not teach Linux+ as Type B or Bash as Type A.

---

## 4. Reference track discipline

Each template has **one reference track** where new platform patterns are proven before spreading.

| Template | Reference track | Role |
|----------|-----------------|------|
| A | CCNA | CES, LES, BLS, deferral manifest, Professor oral gate |
| B | Git | TYPE_B_MASTER, Break/Fix labs, workflow LES anchor |
| C | TBD | Project rubric, tool task UI |
| D | TBD | Performance + feedback loop |

**Rule:** Invent features in the reference track first. After owner walkthrough sign-off, propagate to sibling tracks.

**PowerShell note:** Built as Type B **v1 proof** (5 modules, full CES) before TYPE_B_MASTER existed. Validate template with **Git**; iterate PowerShell after Git graduates.

---

## 5. Professor Mode by template

Full AI spec: [`phase-5-ai-learning.md`](phase-5-ai-learning.md). Template-specific emphasis:

| Template | Professor tests |
|----------|-----------------|
| **A** | Explain why, trace logic, spot misconceptions, defend exam-style reasoning |
| **B** | Predict command output, debug wrong command, fix the script, recover from error |
| **C** | Walk through solving the task; justify each step in the tool |
| **D** | Perform, reflect, revise (future) |

Same philosophy (defend understanding, no hidden knowledge). Different **question shapes** per template.

---

## 6. ReLearn product roadmap

Product phases (what we **prove**). Distinct from engineering phases in [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) §2.

| Product phase | Prove | Status |
|---------------|-------|--------|
| **1** | Type A template (CCNA) | In progress — Domain 1 QA |
| **2** | Type B template (Git reference) | Docs + Git Modules 2–7 |
| **3** | Type C template (tool tracks) | Planned |
| **4** | AI modes per template (Professor first) | Spec in phase-5-ai-learning.md |
| **5** | Additional certification packs | Planned |
| **6** | General education (Type D) | Future |
| **7** | Full ReLearn vision (multi-subject platform) | North star |

### Product phase ↔ engineering phase mapping

| Product phase | Primary engineering home |
|---------------|---------------------------|
| 1 Type A | Phases 1–4.9 (complete scaffold, CES, LES, CCNA pilot) |
| 2 Type B | Phase 4.9+ (Git track), TYPE_B_MASTER |
| 3 Type C | Phase 8+ (tool UI, project rubrics) |
| 4 AI Professor | Phase 5 (planned) |
| 5 More certs | Phase 3b pattern (CES rollout per cert) |
| 6 Type D | Post–Phase 7 (new interaction types) |
| 7 ReLearn | Path B tracks, career paths, native app |

---

## 7. Onboarding a new subject

Before writing curriculum:

1. **Which template?** (A / B / C / D) — see [`subject-onboarding-process.md`](subject-onboarding-process.md) Step 0
2. **Which reference track informs this?** Copy patterns, do not invent from scratch
3. Complete subject onboarding checklist
4. Write or extend `{subject}-learning-architecture.md` if the track is non-trivial
5. Register in [`src/content/registry.ts`](../src/content/registry.ts) (Path A: certifications array)

---

## 8. Related documents

| Document | Purpose |
|----------|---------|
| [`BRIDGE_MASTER.md`](../BRIDGE_MASTER.md) | Engineering phases, file ownership, commands |
| [`TYPE_B_MASTER.md`](TYPE_B_MASTER.md) | Skill-driven template spec |
| [`TYPE_C_MASTER.md`](TYPE_C_MASTER.md) | Tool-driven template stub |
| [`definition-of-done.md`](definition-of-done.md) | Topic complete gates (template variants) |
| [`subject-onboarding-process.md`](subject-onboarding-process.md) | New subject checklist |
| [`learning-experience-standard.md`](learning-experience-standard.md) | LES (all templates) |
| [`bridge-learning-standard.md`](bridge-learning-standard.md) | BLS pedagogy (Type A primary) |
| [`git-github-learning-architecture.md`](git-github-learning-architecture.md) | Type B reference track map |
