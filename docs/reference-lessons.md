# Reference Lessons

> **Superseded for interactive topics:** See [`reference-experiences.md`](reference-experiences.md) (Phase 4.9). This doc remains for legacy `lesson.steps[]` patterns.

**Purpose:** Canonical examples of Bridge-quality teaching. New and revised lessons ask:

> **Does this feel as good as the reference lesson?**

Do not reinvent pedagogy per topic — match the bar, then specialize.

---

## Active references

| ID | Topic | Cert | Status | Why this reference |
|----|-------|------|--------|-------------------|
| `ccna:osi-model` | OSI Model | CCNA | **In progress (Wave 1)** | Visual stack + 14 authored steps; study tips; per-layer screens |

## Pattern for future topics

When a topic benefits from visuals or slow pacing, use `lesson.steps[]` + `lesson.visual` (see OSI). Include `studyTip` on steps where mnemonics or exam tricks exist.

## Planned references (post-pilot)

| ID | Topic | Learning style |
|----|-------|----------------|
| `ccna:subnetting` | Subnetting | Calculation / worked examples |
| `ccna:vlans` | VLANs | Concept + configuration |

---

## Reference lesson checklist (`ccna:osi-model`)

Use this when elevating OSI to reference quality:

- [x] **BLS-10:** Opens with why OSI matters for CCNA troubleshooting and exams
- [x] **BLS-2:** Layer names taught before layer functions; functions split across steps
- [x] **BLS-2:** Encapsulation taught in its own step before PDU names
- [x] **BLS-1:** Checkpoints on same step as taught concept (`checkpointQuestionId` per step)
- [x] **BLS-5:** Layer order, L3, L2, encapsulation, PDU checkpoints after those steps
- [x] **BLS-11:** APSTNDP, PDNTSPA, PDU, and quick-check study tips in lesson
- [x] **Visual:** `OsiStackDiagram` on every step; active layer highlighted
- [ ] Michael novice walkthrough: pacing feels graspable without prior study

---

## How other topics use references

When auditing topic `X`:

1. Read reference lesson structure (step count, concept pacing, checkpoint placement).
2. Score topic `X` on Reference quality column in domain audit sheet.
3. List specific gaps (e.g. "Step 2 introduces 4 protocols — reference OSI splits protocols to step 6").

---

*Owner: P4.8-Lesson + Michael sign-off*
