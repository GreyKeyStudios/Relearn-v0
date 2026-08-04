# Agent Research Guide — Curriculum Production

**Audience:** Future research / content agents  
**Prerequisite reading:** [`README.md`](README.md), [`../COURSE_ARCHITECTURE.md`](../COURSE_ARCHITECTURE.md), [`../subject-onboarding-process.md`](../subject-onboarding-process.md), [`../definition-of-done.md`](../definition-of-done.md)

---

## Mission

Improve ReLearn curriculum integrity through research, schemas, sources, and quality control.  
**Do not mass-produce lessons** unless a batch ticket explicitly says so.

---

## Hard rules

1. **Preserve live app behavior.** Do not change mastery scoring, SRS intervals, or progress store shape unless the ticket is a platform change with tests.
2. **Never invent** quotations, objective numbers, standards alignments, or citations.
3. **One exam version per blueprint.** If you must compare versions, set `mixedVersionWarning` and keep IDs namespaced.
4. **Record provenance:** `version`, `retrievedAt`, `url` (when public), `confidence`, and `retrievalMethod` (`exa` preferred for live web checks).
5. **Source priority**
   - **Certification:** current first-party exam objectives and official vendor documentation only.
   - **Academic:** peer-reviewed papers → university materials → recognized textbooks → standards organizations → government scientific agencies.
6. **Flag future review:** set `reviewBy` + `futureReviewReason` on sources, and add `FutureReviewFlag` entries for sunsets / estimated retirements.
7. **Map to atomic objectives** before writing large lesson bodies.
8. **Keep explanation layers honest:** only fill `mathematical` / `technical` layers when you have a real derivation or protocol detail — do not pad.
9. **Misconceptions need diagnostics + remediation**, not just a wrong-statement list.
10. **Run validators** before opening a PR:
   ```bash
   npm run verify:production
   npm run curriculum:gap-report
   npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
   npx tsc --noEmit
   ```
11. **Respect file ownership** in `BRIDGE_MASTER.md`. Production schemas live under `src/content/production/` and `src/lib/production/`.

---

## Live research with Exa

Use Exa for source retrieval before claiming official alignment:

1. `web_search_exa` — find the current first-party objectives / standards page  
2. `web_fetch_exa` — read the canonical URL  
3. Update `src/content/production/sources/catalog.ts` and the retrieval log  
4. Do **not** paste partial SERP highlights as complete objective lists  

See [`SOURCE_RETRIEVAL_LOG.md`](SOURCE_RETRIEVAL_LOG.md) for the 2026-08-04 Exa pass.
---

## Research workflow

```text
1. Identify track + template (A/B/C/D)
2. Confirm or create ExamBlueprint / SourceRecords
3. Draft hierarchy: Domain → Competency → Skill → Concept → AtomicLearningObjective
4. Wire prerequisite edges (required vs recommended)
5. Classify freshness per concept / atomic
6. Author misconception + remediation pairs for high-error concepts
7. Only then expand live Topic / LES content (separate content batch)
8. Re-run gap report; update uncovered objectives list
```

---

## Schema checklist (per atomic objective)

| Field | Required |
|-------|----------|
| `statement` + `verb` | Yes |
| `difficulty`, `cognitiveLoad`, `assumedBackground` | Yes |
| `freshness` | Yes |
| `prerequisiteAtomicIds` | Yes (may be `[]`) |
| `examObjectiveIds` | Yes for cert tracks when blueprint exists |
| `sourceIds` | Yes when making factual claims beyond common knowledge |
| Explanation layers on parent concept | At least `intuitive` + `practical` before lesson expansion |

---

## Certification-specific rules

- Open the **current** vendor objectives PDF/page; update retrieval date in the same PR as any renumbering.
- A+: only V15 `220-1201` / `220-1202` — see [`../a-plus-objectives-source.md`](../a-plus-objectives-source.md).
- CCNA: `src/content/objectives/ccna.ts` is a **pilot catalog** (`needs-retrieval`) until first-party Cisco topics are recorded.
- Tag quiz/bank items with `objectiveId` consistent with `topic.objectives`.

---

## Academic / non-cert rules

- Complete [`../subject-onboarding-process.md`](../subject-onboarding-process.md) before content.
- Prefer citable textbooks, university course notes, standards bodies, peer-reviewed surveys.
- Mark `confidence: "needs-retrieval"` until a real `SourceRecord` exists.
- Future family stubs (`mathematics`, `science`, `language`, `history`, `philosophy`, `music`) are placeholders — do not fill with invented curricula.

---

## Compatibility with the learning engine

Assessments you design must be answerable by learners who completed the lesson (Definition of Done).  
Scores feed the **existing** engine:

- Topic mastery levels via `scoreToLevel`
- SRS ladder `1 → 3 → 7 → 14 → 30` days on ≥80% session pass
- Objective weakness at &lt;70% after ≥3 attempts

See `src/content/production/mastery-compatibility.ts`.

---

## Templates

Copy from [`templates/`](templates/) when starting a research note or PR appendix:

- `subject-hierarchy.template.md`
- `lesson-spec.template.md`
- `source-record.template.md`
- `misconception.template.md`
- `exam-blueprint.template.md`
