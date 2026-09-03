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

1. ~~Retrieve current Cisco CCNA exam topics~~ — **done (Exa 2026-08-04):** official **200-301 v1.1** recorded.
2. ~~Register domain-level blueprints~~ for Security+, Network+, CySA+, AWS CP, Azure, Linux+, ITIL — **done** with first-party domain weights; objective **line-items** still empty.
3. ~~Ingest complete CCNA v1.1 PDF lines + pilot alias mapping~~ — **done** (`docs/curriculum-production/ccna-v1.1/`). Live `CCNA-*` tags remain operational aliases; content remap is a later progress-safe batch. v2.0 cutover stays future-review (**2027-02-03**).
4. ~~CCNA dual-version transition architecture (v1.1 + v2.0)~~ — **done**.
5. ~~CCNA v2.0 bounded production batch-1 (specs)~~ — **done** (`docs/curriculum-production/ccna-v20-batch1/`) for parents 2.4, 1.3, 1.4, 1.7, 2.5, 3.2, 3.3, 5.2. Specs only; no live lesson mass-authoring.
6. **Next:** Download full objective PDFs and populate `objectives[]` for N10-009 first (Network+ is Stage 1c of the zero-to-hero spine), then SY0-701, XK0-005, CLF-C02, AZ-900, ITIL 4. **CS0-003 is dropped from this list** — the English exam retires **2026-12-22** and CySA+ is deferred to its successor (see [`ZERO_TO_HERO_PLAN.md`](ZERO_TO_HERO_PLAN.md) § Deferred).
7. Reconcile uncovered objectives — map or explicitly defer (deferral manifest style). 21 remain as of 2026-09-03.

---

## Phase P2 — Atomic objective pass

**Ordering principle changed 2026-09-03** — see [`ZERO_TO_HERO_PLAN.md`](ZERO_TO_HERO_PLAN.md).

The original order below worked by **reference quality**, and it succeeded: Git & GitHub and PowerShell are now fully taught (18/18 and 15/15 CES with complete LES). From here the order is **learner sequence**, so a beginner meets fully-taught material in the order they would actually study it.

| Order | Track | Template | Focus |
|------:|-------|----------|-------|
| 1 | Computer Fundamentals | A/skills | Teaching layer — 43 of 49 topics lack LES; content already full CES |
| 2 | A+ | A | Teaching layer — 72 topics, 0 LES, 0 misconception screens; LES by BLS triage, not all 72 |
| 3 | Network+ | A | Objectives (N10-009) → CES elevation on 11 thin topics → LES triage |
| 4 | Piano Foundations | interactive | Units 6–12, extending the units 1–5 phase model |
| 5 | CCNA | A | CES elevation on 16 topics + progress-safe remap onto official v1.1 IDs |
| — | VM Lab, Sound Synthesis | C | Unscheduled — see plan § Deferred |

Superseded order (kept for provenance): CCNA → Git & GitHub → Computer Fundamentals → A+ → VM Lab → Sound Synthesis.

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
