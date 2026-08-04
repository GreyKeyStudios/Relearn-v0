# Adversarial Review — PR #33 CCNA Dual-Version Transition Layer

**Branch:** `cursor/ccna-dual-version-transition-b8ad`  
**Base:** latest `dev` (includes merged PR #32 v1.1 ingestion)  
**Scope:** Dual-version transition architecture only — not a re-review of the v1.1 registry  
**Verdict:** Pass after defect fixes · **leave unmerged**

---

## Preconditions

- Merged `origin/dev` (PR #32) into this branch without recreating/duplicating `ccna-200-301-v1.1.ts`
- Single v1.1 registry + additive v2.0 registry retained

---

## Severity-ranked findings

### Critical — none remaining (after triage)

| ID | Finding | Resolution |
| --- | --- | --- |
| `v20-text-5.3` (audit false positive) | PDF wrap inserted a space in `controller- based` vs stored `controller-based` | **Not a defect** — stored text matches official wording; extract/`pdftotext` wrap artifact |
| PDF ↔ registry | Fresh PDF SHA `5f0bf00d…` matches; **59** numbered lines / **29** parents; order + hierarchy OK | Confirmed |

### High — fixed

| ID | Finding | Fix |
| --- | --- | --- |
| `no-exam-date` | Empty/missing exam date reused “outside windows” copy and had no explicit API | Added `buildCcnaVersionSelectionFromOptionalDate` + `recommendationState: "missing-exam-date"` |
| `hardcode-validators` | Cutover boundary tests used string literals instead of config constants | Validators now call `resolveActiveCcnaVersion(CCNA_V11_LAST_TEST_DATE / CCNA_V20_FIRST_TEST_DATE)` |
| `blueprint-default-dates` | Blueprint notes hard-coded Feb 2027 defaults | Notes interpolate from `dates.ts` constants |

### Medium — fixed / documented

| ID | Finding | Fix |
| --- | --- | --- |
| `learner-local-dates` | No explicit UTC calendar / learner-local contract | Added `isUtcCalendarDate` + UI contract `dateSemantics`; docs clarify conversion is caller-side |
| `pathway-switch-progress` | Progress preservation on pathway switch was implied only | UI contract `preserveProgressOnPathwaySwitch: true`; migration/version-selection docs updated |

### Low / info — verified OK

| ID | Finding |
| --- | --- |
| Namespaces | `200-301-v1.1/*` and `200-301-v2.0/*` never mixed in registries or blueprints |
| Granularity | 53 v1.1 parents vs 29 v2.0 parents; **35** comparison edges with **7** many-to-one v2.0 targets — one-to-one not assumed |
| Classifications | Every parent has a transition entry; allowed vocabulary only |
| Unable to determine (v1.1) | `2.6`, `2.8`, `3.2`, `4.8`, `6.1`, `6.3` |
| Newly added (v2.0) | `2.4` only |
| Shared-core | Separate `v11ObjectiveNumbers` / `v20ObjectiveNumbers`; newly added `2.4` excluded |
| Pilot→v2.0 | Derived only via medium/high-confidence edges; `CCNA-4.3` unable on both; 11 pilots unable on v2.0 |
| Cutover boundary | `2027-02-02` → v1.1; `2027-02-03` → v2.0; no overlap |
| Configurability | `CCNA_VERSION_WINDOWS` injectable; behavioral dates live in `dates.ts` |
| Hard-coded behavior | No cutover logic in React/study-loop; catalog/source notes remain provenance text |
| Mastery / SRS | Single `SRS_INTERVALS` ladder; production requirements alias live intervals |
| Live rewrites | No changes to lessons, quizzes, simulators, or progress keys vs `dev` |

---

## Classification snapshot (post-merge)

| Side | Classification | Count |
| --- | --- | ---: |
| v1.1 | removed | 14 |
| v1.1 | requires greater practical depth | 12 |
| v1.1 | expanded | 10 |
| v1.1 | moved | 8 |
| v1.1 | unable to determine | 6 |
| v1.1 | reduced | 2 |
| v1.1 | unchanged | 1 |
| v2.0 | requires greater practical depth | 11 |
| v2.0 | expanded | 11 |
| v2.0 | moved | 4 |
| v2.0 | newly added | 1 |
| v2.0 | reduced | 1 |
| v2.0 | unchanged | 1 |

---

## Verification suite (post-fix) — all passed

| Check | Result |
| --- | --- |
| Merged onto latest `dev` (PR #32) without duplicating v1.1 registry | OK |
| `npm run curriculum:ccna-transition-report` | OK |
| `npm run verify:production` | OK (0 errors) |
| `npm run curriculum:gap-report` | OK |
| `verify:curriculum --strict-ccna --strict-ccna-objectives` | OK |
| `verify:curriculum --strict-pedagogy` | OK |
| `verify:curriculum --strict-experience` | OK |
| `npx tsc --noEmit` | OK |
| `npm run build` | OK |
| Playwright `learner-loop` + `ccna-curriculum-audit` | 23 passed |

**Do not merge** — draft/open for human review of transition classifications.
