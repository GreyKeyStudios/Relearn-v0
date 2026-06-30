# BRIDGE_MASTER.md — Bridge Study Companion / ReLearn

**Source of truth** for all agents. Read this before touching code.

Bridge Study Companion is the **first implementation** of the broader **ReLearn** platform — a mobile-first learning engine for structured curriculum, practice, weakness tracking, and (eventually) mastery-driven study planning.

---

## 0. Agent command block

```text
Read BRIDGE_MASTER.md.
For Phase 7 (Python): also read docs/python-learning-architecture.md.
Execute only the agent ID assigned to you (M0, P3-*, P4-*, P7-*, etc.).
Only edit files assigned to that agent.
When finished, summarize: files changed, what works, blockers.
```

---

## 1. ReLearn vision

**Bridge owns the curriculum.** External resources (Packet Tracer, Wireshark, AWS console, VMs) are **assignments** inside the learning path — not standalone links. In-app simulators are **learning accelerators**.

Future ReLearn may add: AI tutors, additional subjects, community content, instructor tools, cloud sync, native mobile apps. The **learning engine always comes before AI**.

### Core principles

1. Bridge owns the curriculum — learners feel guided, not handed random content
2. Content before features — improve learning outcomes before flashy UI
3. Simulators are reusable educational tools (mobile, auto-grade, weak concepts, progress integration)
4. AI is an enhancement layer — platform must remain valuable without AI
5. Prefer maintainability, content quality, reusable systems, simple architecture, mobile usability

### Development workflow

```text
Plan → Architecture → Standards → Completion criteria → Delegate → Integrate → Verify → Refine
```

---

## 2. Phase roadmap

| Phase | Status | Focus |
|---|---|---|
| **Phase 1** | Complete | Scaffold, 114 topics, study loop, weakness tracking |
| **Phase 2** | Complete | 30 simulators, assignments, external labs, case studies, domain review |
| **Phase 3** | Complete | CES + CCNA pilot |
| **Phase 3b** | Complete | CES rollout to all 8 certs |
| **Phase 4** | Complete | Mastery, adaptive review, study planner — see `.cursor/plans/phase_4_learning_intelligence.plan.md` |
| **Phase 4.5** | Complete | Objective/domain mastery, difficulty tags, interactive case studies (CCNA pilot) |
| **Phase 4.75** | Complete | Coach UX polish — Study Now card, weak objectives UX, planner tuning |
| **Phase 4.8** | Complete | Bridge Learning Standard, CCNA pedagogy sprint — see `docs/bridge-learning-standard.md` |
| **Phase 4.9** | In progress | Learning Experience Standard (B+), ExperiencePlayer, OSI reference experience — see `docs/learning-experience-standard.md` |
| **Phase 5** | Planned | AI-assisted learning — Explain This Mistake first (never chat-first) |
| **Phase 6** | Planned | Native app (Capacitor/Expo after Phase 4 gates) |
| **Phase 7** | Planned (blocked) | Python Foundations — Code Lab engine + curriculum informed by learner research |

### Mobile app gate (Phase 6)

Do not prioritize native apps until: curriculum mature, mastery system exists, adaptive review exists, study planner exists, CES rollout complete.

---

## 2b. ReLearn expansion tiers

Bridge Study Companion implements **Tier 1** today. Future subjects follow a tiered expansion model:

| Tier | Name | Subjects | Bridge phase |
|---|---|---|---|
| **1** | IT Foundations | CCNA, Network+, Security+, CySA+, AWS CP, Azure, Linux+, ITIL | Phase 1–4.75 (complete) |
| **2** | IT Automation | Python Foundations | Phase 7 (planned, blocked) |
| **3** | Applied Technology | APIs, Automation, DevOps, Cloud Projects | Phase 8+ (future) |
| **4** | ReLearn Labs | Robotics, IoT, Physical Computing | Future |

```text
Tier 1  IT Foundations      → certifications (Bridge today)
Tier 2  IT Automation       → Python (first creation subject)
Tier 3  Applied Technology  → APIs, DevOps, cloud projects
Tier 4  ReLearn Labs        → robotics, IoT, physical computing
```

**Key insight:** Tier 1 optimizes **recognition and recall**. Tier 2+ optimizes **construction and debugging**. Python is the first subject where learners write, break, fix, and build — not only understand.

Full Python architecture: [`docs/python-learning-architecture.md`](docs/python-learning-architecture.md)

---

## 3. Master Agent (M0)

The Master Agent **does not write application code**. Responsibilities:

- Design phases and dependencies
- Maintain BRIDGE_MASTER.md
- Define Content Expansion Standard and completion criteria
- Assign file ownership to specialized agents
- Prevent duplicate work and architectural drift
- Verify integration before marking phases complete

Implementation agents execute; M0 coordinates.

---

## 4. Stack + commands

| Item | Value |
|---|---|
| Framework | Next.js 16 (App Router) + React 19 + TypeScript |
| Styling | Tailwind CSS v4, dark mode default |
| State | Zustand + persist → `bridge-study-progress-v2` |
| Icons | lucide-react |
| Layout | `max-w-lg mx-auto`, bottom nav, `pb-24` |

```bash
npm run dev
npm run build
npm run verify:curriculum
npm run verify:curriculum -- --strict-ccna   # CES warnings for CCNA
npm run verify:curriculum -- --strict-all     # CES warnings for all certs
npx tsc --noEmit
```

---

## 5. Content Expansion Standard (CES)

Every topic should **eventually** meet this standard. All new fields are **optional** in schema until populated.

### Learning content fields

| Field | Purpose |
|---|---|
| `objectives` | Exam objective IDs |
| `lesson.content` | Plain-English explanation (500–900 words for full CES) |
| `keyFacts` | 4–6 bullets |
| `guidedExample` | Worked step-by-step example `{ title, steps[] }` |
| `commonMistakes` | 3–5 bullets |
| `examTraps` | 3–5 trick patterns |
| `realWorldScenario` | Short workplace scenario string |
| `quiz` | 5 graded questions |
| `questionBank` | 8–15+ drill questions (long-term: 50–120+ for high-weight topics) |
| `flashcards` | 5–6 cards |
| `assignments` | simulator / external-lab / case-study as appropriate |

### Scheduling metadata (Phase 4 study planner consumes these)

| Field | Type | Purpose |
|---|---|---|
| `estimatedStudyMinutes` | `number` | Lesson + quiz + flashcards time estimate |
| `difficulty` | `"easy" \| "medium" \| "hard"` | Planner prioritization |
| `prerequisites` | `string[]` | Topic IDs within same cert |

### CES levels

| Level | Criteria |
|---|---|
| `minimal` | lesson + keyFacts + quiz + flashcards |
| `standard` | + objectives, commonMistakes, examTraps |
| `full` | + guidedExample, realWorldScenario, scheduling metadata, questionBank 8+ |

### CCNA pilot anchor topics (full CES template)

| Topic ID | Learning style |
|---|---|
| `subnetting` | Calculation |
| `vlans` | Conceptual + configuration |
| `acls` | Logic / rule ordering |
| `ospf-basics` | Process flow |
| `network-security` | Memorization + application |

**Canonical CES reference:** `src/content/certifications/ccna.ts` → topic `subnetting`

### questionBank long-term vision

Phase 3 target: 8–15+ bank questions per topic.

Phase 4+: high-weight topics (e.g. subnetting) carry 50–120+ bank questions tagged by difficulty. Mastery engine pulls easy/medium/hard dynamically — this is when the app feels like a real certification platform.

### CES validation rollout

```text
Warn → Pilot → Validate → Enforce later
```

- `--strict-ccna`: warnings for missing CES fields (Phase 3)
- After pilot validated: errors for CCNA only
- After CES rollout: extend per cert

---

## 6. TypeScript schemas

Located in `src/content/types.ts`. Phase 1/2 fields unchanged; CES fields optional:

```typescript
export interface Topic {
  id: string;
  name: string;
  lesson: { title: string; content: string };
  keyFacts: string[];
  quiz: QuizQuestion[];
  flashcards: Flashcard[];
  // Phase 2
  objectives?: string[];
  assignments?: Assignment[];
  externalResources?: ExternalResource[];
  practiceType?: PracticeType[];
  questionBank?: QuizQuestion[];
  // Phase 3 CES
  guidedExample?: { title: string; steps: string[] };
  commonMistakes?: string[];
  examTraps?: string[];
  realWorldScenario?: string;
  estimatedStudyMinutes?: number;
  difficulty?: "easy" | "medium" | "hard";
  prerequisites?: string[];
}
```

**Schema changes:** only Platform agents (P3-Platform, P4-Platform). Content agents must NOT edit `types.ts`.

---

## 7. ID conventions

| Key | Format | Example |
|---|---|---|
| Topic key | `{certId}:{topicId}` | `ccna:subnetting` |
| Assignment key | `{certId}:{assignmentId}` | `ccna:subnet-cidr-sim` |
| Domain review key | `{certId}:domain-review:{domainId}` | `ccna:domain-review:network-fundamentals` |
| Question IDs | `{topicId}-q{N}` or `{topicId}-b{N}` | `subnetting-q1` |
| Flashcard IDs | `{topicId}-f{N}` | `subnetting-f1` |

---

## 8. Phase 3 agent roster

```text
M0 → P3-Platform → P3-UI + P3-CCNA (parallel) → P3-Verify
```

| Agent | Owns |
|---|---|
| **M0** | `BRIDGE_MASTER.md` only |
| **P3-Platform** | `types.ts`, `content-expansion.ts`, `verify-curriculum.ts`, `scripts/verify-curriculum.ts` |
| **P3-UI** | `src/components/lesson/`, lesson page |
| **P3-CCNA** | `src/content/certifications/ccna.ts` only |
| **P3-Verify** | Integration fixes, build verification |

Legacy Phase 1/2 agents (A0–A9, B0–B9) are complete. New work uses M0 / P3-* naming.

### Phase 4.9 learning experience roster (CCNA pilot)

```text
M0 → P4.9-LXA (storyboard) + P4.8-Cognitive + P4.8-SME (audit) → P3-CCNA → P3-Verify → Michael walkthrough + reflection
```

| Agent | Owns |
|---|---|
| **P4.9-LXA** | `docs/learning-experience-standard.md`, `docs/reference-experiences.md`, experience storyboards |
| **P4.8-Path** | `docs/ccna-learning-path.md`, audit path/prerequisite columns |
| **P4.8-Cognitive** | Cognitive load audits per experience storyboard |
| **P4.8-SME** | Accuracy / exam realism audits |
| **P4.9-Platform** | `ExperiencePlayer`, `verify-experience.ts`, `experience` schema in `types.ts` |
| **P3-CCNA** | `ccna.ts` experience content after audits |

**Skills:** `.cursor/skills/p49-learning-experience-architect/` — LXA storyboard design. Legacy `.cursor/skills/p48-lesson-designer/` for BLS-only audits.

**Standard:** [`docs/learning-experience-standard.md`](docs/learning-experience-standard.md) (LES-0–10). **Verify:** `npm run verify:curriculum -- --strict-experience`

### Phase 4.8 pedagogy roster (CCNA pilot)

```text
M0 → P4.8-Path + P4.8-Lesson + P4.8-Cognitive + P4.8-SME (audit) → P3-CCNA → P3-Verify → Michael walkthrough + reflection
```

| Agent | Owns |
|---|---|
| **P4.8-Path** | `docs/ccna-learning-path.md`, audit path/prerequisite columns |
| **P4.8-Lesson** | Teach-before-test audits, `docs/reference-lessons.md` |
| **P4.8-Cognitive** | Cognitive load audits per topic |
| **P4.8-SME** | Accuracy / exam realism audits |
| **P4.8-Platform** | `lessonCheckpoints` in `types.ts`, `verify-pedagogy.ts`, `lesson-steps.ts` |
| **P3-CCNA** | `ccna.ts` content fixes after audits |

**Skills:** `.cursor/skills/p48-*` — one Cursor chat per reviewer role.

**Standard:** [`docs/bridge-learning-standard.md`](docs/bridge-learning-standard.md) (10 rules). **Verify:** `npm run verify:curriculum -- --strict-pedagogy`

---

## 9. File ownership (content agents)

| Cert | File | Agent |
|---|---|---|
| CCNA | `ccna.ts` | P3-CCNA / P3b-* |
| Security+ | `security-plus.ts` | P3b-Security+ |
| Network+ | `network-plus.ts` | P3b-Network+ |
| CySA+ | `cysa-plus.ts` | P3b-CySA+ |
| AWS CP | `aws-cloud-practitioner.ts` | P3b-AWS |
| Azure | `azure-fundamentals.ts` | P3b-Azure |
| Linux+ | `linux-plus.ts` | P3b-Linux+ |
| ITIL | `itil-foundation.ts` | P3b-ITIL |

Content agents must NOT touch: `types.ts`, `registry.ts`, `src/app/**`, `src/components/**`, `src/stores/**`, `src/lib/**` (except assigned), other cert files.

---

## 10. Per-cert topic checklist (114 topics)

### CCNA (21) — `ccna.ts`

`osi-model`, `tcp-ip-model`, `ethernet`, `switching`, `vlans`, `trunking`, `stp`, `ipv4-addressing`, `subnetting`, `ip-ranges`, `ipv6-basics`, `routing-fundamentals`, `static-routes`, `ospf-basics`, `acls`, `nat`, `dhcp`, `dns`, `wireless-basics`, `network-security`, `automation-basics`

### Security+ (16) — `security-plus.ts`

`threat-actors`, `malware`, `social-engineering`, `cryptography-basics`, `authentication`, `authorization`, `identity-access-management`, `secure-network-design`, `firewalls`, `vpns`, `wireless-security`, `risk-management`, `incident-response`, `vulnerability-management`, `security-policies`, `cloud-security-basics`

### Network+ (15), CySA+ (12), AWS (13), Azure (13), Linux+ (13), ITIL (11)

See Phase 1 plan or cert files for full topic ID lists.

---

## 11. Simulator contract (LOCKED)

```typescript
export interface SimulatorResult {
  score: number;
  total: number;
  weakConcepts: string[];
  completed: boolean;
}
```

Every simulator: mobile-friendly, self-contained, auto-grade, registered ID, integrates with `simulatorAttempts` and assignment auto-complete when criteria met.

**Shared UI:** `SimulatorShell` — do not invent per-simulator chrome.

### Canonical simulator IDs (30 total — exact strings)

**Core:** `subnet-cidr-drill`, `vlsm-drill`, `port-protocol-drill`, `osi-layer-sorter`, `tcpip-layer-map`, `log-line-triage`, `crypto-matcher`, `linux-chmod-drill`, `aws-service-picker`, `azure-rbac-drill`

**Network:** `vlan-trunk-drill`, `nat-type-drill`, `static-route-drill`, `acl-rule-order`, `dhcp-dora-drill`, `dns-record-drill`, `wireless-standard-drill`, `cable-type-drill`, `ipv6-compress-drill`, `binary-ip-converter`

**Security:** `firewall-rule-drill`, `malware-classifier`, `mitre-tactic-drill`, `siem-alert-priority`, `risk-prioritization-drill`, `auth-flow-drill`, `cert-chain-order`, `linux-systemd-drill`, `linux-package-drill`, `itil-incident-order`

### Future: Code Lab contract (Phase 7 — not built)

Code Labs are a new interaction family for Python and future programming subjects. They extend the locked `SimulatorResult` contract:

```typescript
// Grading output — same as existing simulators
interface SimulatorResult {
  score: number;
  total: number;
  weakConcepts: string[];
  completed: boolean;
}
```

**Planned Code Lab types:** `predict-output`, `fix-the-bug`, `drag-order`, `complete-lines`, `function-builder`, `loop-builder`, `dict-practice`, `regex-playground`, `api-explorer`.

**Phase 7 additions (design only — see `docs/python-learning-architecture.md` Appendix A):**
- `Assignment.type` → `"code-lab"`
- `CodeLabDefinition`, `CodeLabAttempt`, `LearningTrack` interfaces
- Routes under `/track/python/` (not `/cert/`)

Do not implement Code Lab UI, code runner, or Python content until the learner-research gate passes (§17).

---

## 12. Routes

| Route | Purpose |
|---|---|
| `/` | Dashboard |
| `/certifications` | Cert grid |
| `/cert/[certId]` | Cert detail + domain review links |
| `/cert/[certId]/lesson/[topicId]` | Lesson + CES sections |
| `/cert/[certId]/quiz/[topicId]` | Quiz (`?bank=1` for question bank) |
| `/cert/[certId]/flashcards/[topicId]` | Flashcards |
| `/cert/[certId]/assignment/[assignmentId]` | Assignment view |
| `/cert/[certId]/simulator/[simulatorId]` | Simulator (`?topicId=&assignmentId=`) |
| `/cert/[certId]/domain-review/[domainId]` | Shuffled domain question bank |
| `/review` | Weak areas + adaptive review CTA |
| `/review/session` | Spaced repetition question bank session |
| `/progress` | Stats + domain review history |

---

## 13. Progress model

**localStorage key:** `bridge-study-progress-v2` (migrates from v1 automatically)

| Field | Purpose |
|---|---|
| `topicMastery` | Per-topic scores, levels, `objectiveScores`, `objectiveAttempts`, SRS |
| `questionStats` | Per-question attempt/correct counts (empirical difficulty foundation) |
| `caseStudyAttempts` | Interactive case study scores and decision paths |
| `studyPlan` | `examDate`, `weeklyMinutes`, `activeCertIds`, `sessionMinutes` |
| `onboardingComplete` | First-run wizard completed |
| `completedLessons` | Topic keys |
| `completedAssignments` | Assignment keys |
| `quizAttempts` | Including domain review (`:domain-review:`) |
| `simulatorAttempts` | Score + weakConcepts |
| `weakTopics` | Severity 1–3 from quiz/flashcard/sim misses |
| `streak`, `recentActivity` | Engagement |

**Progress %** = completed curriculum steps (lessons + practice assignments) / total steps.

**Weak-area links** route to next incomplete assignment for topic, else lesson.

---

## 13b. Learner Confidence Score (future — Phase 5/6)

Not computed in Phase 4.5. Placeholder for: **does the learner feel ready for the exam?**

Future composite inputs (weights TBD):

| Signal | Role |
|---|---|
| Cert/domain mastery % | What you know |
| Weak objective count + severity | Gaps to close |
| SRS review queue clearance | Retention on track |
| Case study judgment scores | Troubleshooting readiness |
| Self-reported readiness (optional) | Learner sentiment |
| Days until exam vs. plan pace | Time pressure |

Type stub: `LearnerConfidenceScore` in [`src/types/readiness.ts`](src/types/readiness.ts). Phase 5e may use for coaching; no UI until signals are proven.

---

## 14. Non-goals (DO NOT BUILD without Master Agent approval)

- AI tutor, chat UI, `/api/ai/*` (Phase 5+)
- Authentication, database, cloud sync
- Native mobile apps (Phase 6)
- Generic external resources page (tools live inside assignments only)
- **Python content, Code Lab UI, code runner** — until learner-research gate passes (§17)
- **Track abstraction / `/track/*` routes** — until Phase 7-Platform is assigned and gate is open

---

## 15. Quality bar

- No filler — optimize for learning and exam readiness
- Accurate, plain-English explanations
- Plausible quiz distractors with explanations
- Mobile-first simulator UX
- Free external resources only (`cost: "free"`)

---

## 16. Handoff checklists

### After P3-Platform
- [ ] CES fields in `types.ts`
- [ ] `getContentExpansionLevel()` helper
- [ ] `--strict-ccna` warnings in verify script
- [ ] `npx tsc --noEmit` passes

### After P3-CCNA
- [ ] 5 anchor topics at full CES
- [ ] All 21 topics have `commonMistakes` + `examTraps`
- [ ] `npm run verify:curriculum` passes

### After P3-Verify
- [ ] `npm run build` passes
- [ ] Subnetting lesson renders CES + metadata bar
- [ ] Study loop intact (lesson → quiz → sim auto-complete)

### After Phase 4.8 (per CCNA domain wave)
- [ ] Domain audit sheet complete (4 reviewers)
- [ ] P3-CCNA fixes applied
- [ ] `npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives --strict-pedagogy`
- [ ] Michael learner walkthrough PASS
- [ ] Reflection notes in `.cursor/plans/ccna-pedagogy-audits/reflections/`
- [ ] Reference lesson `ccna:osi-model` approved before other topics compared to it

---

## 17. Future track: Python Foundations (Phase 7)

**Status:** Planned — **blocked**

**Gate:**

```text
Blocked until Michael completes external Python course.
Curriculum must be informed by direct learner experience.
Artifact: docs/python-learner-research.md
```

**Why Python:** First ReLearn subject where learners **create** (write, break, fix, build) instead of only **understand**. Scripting glue for all Tier 1 cert tracks.

**Learning loop:**

```text
Learn → Write Code → Break Code → Fix Code → Build Something
```

**Cert bridge projects:** subnet calculator (CCNA), log parser (Security+), file inventory (Linux+), boto3 automation (AWS), IOC extractor (CySA+).

**Requirements before implementation:**
- Learning engine proven (Phase 4.75 complete)
- Mastery system proven
- Adaptive review proven
- Case study engine proven
- Learner research complete (`docs/python-learner-research.md`) — includes moments of delight (what clicked + why), not only frustrations
- CCNA exam passed (product benchmark gate)
- Code runner security model decided

**Future components:** code editor, challenge runner, auto-grading, debugging exercises, projects.

**Full architecture:** [`docs/python-learning-architecture.md`](docs/python-learning-architecture.md)

---

## 18. Subject adoption process

Every new ReLearn subject (Python, French, music theory, algebra, etc.) must complete the subject onboarding checklist before content or platform agents start work.

**Process doc:** [`docs/subject-onboarding-process.md`](docs/subject-onboarding-process.md)

**Python is worked example #1.** All future subjects answer the same questions: why teach it, who is it for, success criteria, activity types, tier placement, gate/blocker.

---

*Phase 1–4.75 complete. Phase 4.8 complete. Phase 4.9 in progress: Learning Experience Standard + OSI reference experience. Phase 5: AI-assisted learning. Phase 7: Python — blocked until learner research.*
