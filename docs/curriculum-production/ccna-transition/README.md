# CCNA 200-301 Dual-Version Transition Architecture

**Scope:** Additive v1.1 + v2.0 architecture — no lesson rewrites, no progress-key renames  
**Status:** Architecture + manifests landed; content production sequenced but not authored

## Version windows (configurable)

| Version | Window | Config |
| --- | --- | --- |
| **v1.1** | Active through **2027-02-02** (inclusive) | `src/content/production/ccna-transition/dates.ts` |
| **v2.0** | Begins **2027-02-03** (inclusive) | same module |

Do not hard-code February 2027 cutover strings in UI or study-loop code — import from `dates.ts`.

## Official sources (inspected in full)

| Version | PDF | SHA-256 | Pages | Parents |
| --- | --- | --- | ---: | ---: |
| v1.1 | [200-301-CCNA-v1.1.pdf](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf) | `da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5` | 4 | 53 |
| v2.0 | [200-301_CCNA_v2.0_Exam_Topics_PDF.pdf](https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301_CCNA_v2.0_Exam_Topics_PDF.pdf) | `5f0bf00d2d459c1f2b52c54c9680fd7c5bb261b6842641a1f445fb0a0ca9923e` | 3 | 29 |

Retrieved: **2026-08-04**. Extracted text: [`200-301_CCNA_v2.0.extracted.txt`](./200-301_CCNA_v2.0.extracted.txt) · v1.1 extract under `../ccna-v1.1/`.

## Deliverables

| Artifact | Path |
| --- | --- |
| Human comparison report | [`COMPARISON_REPORT.md`](./COMPARISON_REPORT.md) |
| Machine-readable transition manifest | [`transition-manifest.json`](./transition-manifest.json) |
| Pilot → both versions map | [`pilot-dual-version.mapping.json`](./pilot-dual-version.mapping.json) |
| v2.0 content + simulator gaps | [`V20_GAP_REPORT.md`](./V20_GAP_REPORT.md) |
| Progress-safe migration plan | [`MIGRATION_PLAN.md`](./MIGRATION_PLAN.md) |
| Shared-core design | [`SHARED_CORE.md`](./SHARED_CORE.md) |
| Version-selection design | [`VERSION_SELECTION.md`](./VERSION_SELECTION.md) |
| Production sequence | [`PRODUCTION_SEQUENCE.md`](./PRODUCTION_SEQUENCE.md) |
| Adversarial review | [`ADVERSARIAL_REVIEW.md`](./ADVERSARIAL_REVIEW.md) |

## Code modules

| Module | Role |
| --- | --- |
| `src/content/production/objectives/ccna-200-301-v1.1.ts` | Official v1.1 lines (retained) |
| `src/content/production/objectives/ccna-200-301-v2.0.ts` | Official v2.0 lines (additive) |
| `src/content/production/ccna-transition/dates.ts` | Cutover configuration |
| `src/content/production/ccna-transition/comparison.ts` | Comparison edges + transition classifications |
| `src/content/production/ccna-transition/shared-core.ts` | Shared-core clusters |
| `src/content/production/ccna-transition/pilot-dual-map.ts` | Pilot → v1.1 + v2.0 aliases |
| `src/content/production/ccna-transition/version-selection.ts` | Learner date → version design |
| `src/content/production/ccna-transition/gaps.ts` | Gap report + production sequence |
| `blueprint-ccna-200-301-v1.1` / `blueprint-ccna-200-301-v2.0` | Separate versioned blueprints |

## Rules

1. **Do not mix** `200-301-v1.1/*` and `200-301-v2.0/*` IDs.
2. Every objective retains source document, version, locator, and retrieval date.
3. Do **not** invent equivalence from similar wording — use `unable to determine`.
4. Shared lessons may satisfy both versions; objective associations stay version-specific.
5. Preserve study-loop, mastery, SRS, and progress behavior (pilot keys remain live).
6. Do **not** mass-produce lessons, quizzes, or labs in this architecture batch.

## Regenerate reports

```bash
npm run curriculum:ccna-transition-report
```
