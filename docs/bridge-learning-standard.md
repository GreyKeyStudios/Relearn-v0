# Bridge Learning Standard (BLS)

**Version:** 1.0 (Phase 4.8)  
**Owner:** M0  
**Applies to:** All ReLearn subjects — CCNA pilot first, then every cert and future track (Python, etc.)

## Philosophy

> **Content correctness ≠ Teaching quality.**

CES (Content Expansion Standard) checks whether content *exists*. BLS checks whether content *teaches*.

Every topic must pass all 13 rules before a domain is declared exam-ready.

**Topic complete gate:** [`definition-of-done.md`](definition-of-done.md) — lesson complete is not sufficient. **Relocations:** [`ccna-deferral-manifest.md`](ccna-deferral-manifest.md).

---

## The 13 rules

| ID | Rule | Pass criteria | Fail example |
|----|------|---------------|--------------|
| **BLS-1** | Teach before test | Every checkpoint, quiz, and graded item references material taught earlier in the same topic or a declared prerequisite | PDU question before encapsulation paragraph |
| **BLS-2** | One major concept at a time | Each lesson step introduces at most one new major idea | Seven layers + PDUs + encapsulation in one step |
| **BLS-3** | Connect to previous | Each new concept explicitly links to something the learner already knows | Subnetting without referencing IPv4 octets |
| **BLS-4** | Examples before definitions | Prefer concrete example → then label/name when possible | "A PDU is…" before showing a frame on the wire |
| **BLS-5** | Checkpoint after explanation | Inline checkpoints appear immediately after the step that teaches the tested concept | Checkpoint on step 2 testing step 7 content |
| **BLS-6** | Flashcards reinforce only | Flashcard backs contain no facts absent from lesson or keyFacts | Flashcard introduces CRC before lesson mentions it |
| **BLS-7** | Simulator after understanding | Simulator/case-study assignments have `order` after lesson path; learner completes lesson first | Simulator before lesson in curriculum step |
| **BLS-8** | Case study integrates prior topics | Case studies test judgment across topics already taught; no brand-new concepts | Case study introduces OSPF areas never covered |
| **BLS-9** | Quiz difficulty ramps | `quiz[]` ordered easy → medium → hard; first question is never `hard` | `osi-q5` (medium) before layer-order recall |
| **BLS-10** | Learner knows why | Topic opens or closes with relevance — why CCNA (or the subject) cares | Lesson jumps into jargon with no motivation |
| **BLS-11** | Study tips in lesson | Mnemonics and exam tricks appear as `studyTip` on the step where they help — not only in key facts | APSTNDP mnemonic missing from lesson screens |
| **BLS-12** | Unknown Word Rule | No mystery vocabulary — define inline, attach to visual, or defer with term tier + popover (LES-11) | "Frame" appears in text before Layer 2 is taught |
| **BLS-13** | Spell out acronyms | First use of PDU, TLS, ICMP, NIC, TCP, UDP, LAN includes expansion | "PDU" with no "Protocol Data Unit" |

---

## Per-topic activity order

Default flow inside every topic:

```text
Lesson (stepped)
  → inline checkpoints (max 2, on taught content only)
  → key facts + deep dive (after lesson unlock)
  → graded quiz
  → flashcards
  → simulator / case study / external lab (by assignment order)
```

Question bank is for **drill mode** (`?bank=1`), not inline lesson surprises.

---

## Scoring on audit sheets

- **PASS** — all 10 rules satisfied  
- **PARTIAL** — list failing rule IDs (e.g. `FAIL BLS-2, BLS-5`)  
- **FAIL** — multiple blockers; do not implement until audits agree on fixes  

Reference lesson comparison: *"Does this feel as good as the reference lesson?"* — see [`reference-lessons.md`](reference-lessons.md).

---

## Reviewer ownership

| Rule focus | Primary reviewer |
|------------|------------------|
| BLS-1, BLS-5, BLS-9, activity order | P4.8-Lesson (lesson designer) |
| BLS-2, BLS-3, BLS-4 | P4.8-Cognitive |
| BLS-6–BLS-8 | P4.8-Lesson + P4.8-SME |
| BLS-10, prerequisites, topic order | P4.8-Path |
| Factual accuracy | P4.8-SME |
| Human felt experience | Michael (learner walkthrough) |

---

## Oral Mastery Gate

Before a topic is marked **pedagogically complete** (especially reference experiences), the project owner runs an oral-style mastery check — no cramming, no Googling.

| Step | Detail |
|------|--------|
| **When** | After in-app walkthrough (lesson + quiz + drill) and before audit sign-off |
| **Who** | Project owner (Michael) |
| **Format** | ~10 questions ramping recall → understanding → application (tutor, peer, or self-check script) |
| **Pass bar** | ~8/10 comfortable; conceptual misses = **lesson feedback**, not learner failure |
| **Priority probes** | Story questions (e.g. journey down the stack) and plain-language explainers (e.g. explain the topic in three sentences without jargon) |

Struggling on the same concept across oral checks → content revision (see learner reflection **Oral mastery check** section). First pilot: `ccna:osi-model` Phase 4.9.3.

---

## Automation (verify script)

`npm run verify:curriculum -- --strict-pedagogy` warns on:

- First quiz question tagged `hard`
- Invalid `prerequisites` topic IDs
- `lessonCheckpoints` IDs not found in topic `quiz`
- Assignment `order` gaps on practice assignments

Full teach-before-test requires human/AI audit — not fully automatable.

---

*See also: [`ccna-learning-path.md`](ccna-learning-path.md), [`reference-experiences.md`](reference-experiences.md), [`learning-experience-standard.md`](learning-experience-standard.md), [`learner-reflection-template.md`](learner-reflection-template.md)*
