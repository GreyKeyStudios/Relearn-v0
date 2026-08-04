# Recommended Content-Production Batch Sequence

**Rule:** Architecture and sources before mass lesson authoring.  
This sequence is a **recommendation for future tickets**, not work included in the production-architecture PR.

---

## Phase P0 — Architecture (this PR)

- [x] Production schemas and hierarchy
- [x] Prerequisite graph format + adapters
- [x] Exam blueprints (A+ verified provenance; CCNA pilot flagged)
- [x] Source catalog (honest records only)
- [x] Freshness classification
- [x] Misconception / remediation seed model
- [x] Validators + gap report commands
- [x] Agent research guide + templates

---

## Phase P1 — Provenance hardening (certs)

1. Retrieve current **Cisco CCNA** exam topics; upgrade `blueprint-ccna-pilot` to `verified` with version + date.
2. Register blueprints for Security+, Network+, CySA+, AWS CP, Azure Fundamentals, Linux+, ITIL (each with first-party docs).
3. Close `CERT_TRACKS_NEEDING_BLUEPRINT` gap-report items.
4. Reconcile uncovered objectives lists — map or explicitly defer (deferral manifest style).

---

## Phase P2 — Atomic objective pass (reference tracks)

Work **reference tracks first** (COURSE_ARCHITECTURE discipline):

| Order | Track | Template | Focus |
|------:|-------|----------|-------|
| 1 | CCNA | A | Atomic objectives for Domain 1–2; misconceptions for subnetting/OSI/VLANs |
| 2 | Git & GitHub | B | Skill atomics + Break/Fix remediation links |
| 3 | Computer Fundamentals | A/skills | Foundation atomics feeding A+ |
| 4 | A+ | A | Blueprint coverage completeness for 220-1201/1202 |
| 5 | VM Lab | C | Tool workflow atomics |
| 6 | Sound Synthesis | C | Creative + measurable atomics (no false universal taste scores) |

Do **not** expand every quiz bank in this phase — wire hierarchy + sources + prereqs.

---

## Phase P3 — LES / CES elevation by domain

For each cert domain with a verified blueprint:

1. Elevate CES-minimal topics to standard (objectives, mistakes, traps).
2. Add LES experiences for teaching-critical topics only.
3. Keep Definition of Done gates; owner walkthrough still required for Ready.

Suggested CCNA order remains Domain 1 → 2 → 3 → 4 → 5 → 6 (existing pilot).

---

## Phase P4 — Assessment integrity

1. Backfill `objectiveId` + `difficulty` on quiz/bank items.
2. Fix invalid `correctChoiceId` / duplicate ids (gap report).
3. Pair high-miss items with `MisconceptionRecord` + remediation.
4. Ensure SRS-facing quizzes remain teachable at 80% advance threshold.

---

## Phase P5 — Non-cert expansion

Only after subject onboarding:

1. SQL / Bash / Regex / JSON / REST (planned Type B)
2. Academic stubs (math, science, language, history, philosophy, music theory) — sources first
3. Career path compositions (Ethical Hacking) reuse atomics; do not duplicate

---

## Batch ticket template

```text
Title: curriculum-batch/<track>/<focus>
Scope: atomics | blueprint | LES | assessment | remediation
Out of scope: unrelated tracks, mastery engine changes, mass banks
Sources: list SourceRecord ids + retrieval dates
Verify: verify:production, curriculum:gap-report, verify:curriculum flags, tsc
```
