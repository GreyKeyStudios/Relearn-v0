# Curriculum Production Architecture

**Status:** Active (architecture + QC layer)  
**Owner:** Platform / M0 coordination  
**Does not:** Mass-produce lessons or change live mastery/SRS behavior

This package adds a **research-backed content production system** beside the live Path A curriculum (`Certification` → `Domain` → `Topic`).

```text
Live engine (unchanged)
  Certification / Domain / Topic / LES / quiz / mastery / SRS

Production layer (this package)
  Subject → Domain → Competency → Skill → Concept → AtomicLearningObjective
  + prerequisite graphs, exam blueprints, sources, freshness,
    misconceptions, remediation, validators, gap reports, templates
```

## Why a parallel layer?

Path A must stay stable for the running app. Production schemas are richer (explanation layers, atomic objectives, source provenance, freshness) and guide **future research agents** without forcing a runtime migration.

Adapters derive skeleton hierarchies and graphs from live tracks so gap analysis works immediately.

## Key paths

| Path | Role |
|------|------|
| [`src/content/production/types.ts`](../../src/content/production/types.ts) | Schemas |
| [`src/content/production/hierarchy.ts`](../../src/content/production/hierarchy.ts) | Subject hierarchy + live adapters |
| [`src/content/production/prerequisites/`](../../src/content/production/prerequisites/) | Prerequisite graph format |
| [`src/content/production/exam-blueprints/`](../../src/content/production/exam-blueprints/) | Exam objective version mapping |
| [`src/content/production/sources/`](../../src/content/production/sources/) | Source records |
| [`src/content/production/freshness.ts`](../../src/content/production/freshness.ts) | Timeless vs review-required |
| [`src/content/production/mastery-compatibility.ts`](../../src/content/production/mastery-compatibility.ts) | Ties to live thresholds/SRS |
| [`src/lib/production/validators.ts`](../../src/lib/production/validators.ts) | Automated QC |
| [`src/lib/production/gap-report.ts`](../../src/lib/production/gap-report.ts) | Track gap report |
| [`AGENT_RESEARCH_GUIDE.md`](AGENT_RESEARCH_GUIDE.md) | Rules for research agents |
| [`CONTENT_BATCH_SEQUENCE.md`](CONTENT_BATCH_SEQUENCE.md) | Recommended production batches |
| [`ZERO_TO_HERO_PLAN.md`](ZERO_TO_HERO_PLAN.md) | Spine order, depth-first sequencing, and deferrals |
| [`templates/`](templates/) | Authoring templates |

## Commands

```bash
npm run verify:production
npm run curriculum:gap-report
npm run curriculum:ccna-v11-report
npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives
npx tsc --noEmit
```

## CCNA v1.1 official ingestion

See [`ccna-v1.1/`](ccna-v1.1/) for the complete official blueprint, pilot→official mapping table/manifest, coverage report, and progress-safe migration plan. Live Path A still uses pilot `CCNA-*` aliases.

## Mastery / SRS contract

Production content **must** remain compatible with:

| Constant | Value | Source |
|----------|------:|--------|
| Quiz pass | 70% | `src/lib/mastery-thresholds.ts` |
| SRS advance | 80% | same |
| Weak clear | 90% | same |
| Objective weak | 70% (min 3 attempts) | same |
| SRS intervals (days) | 1, 3, 7, 14, 30 | `src/lib/mastery.ts` |
| Levels | new &lt;20, learning &lt;50, familiar &lt;70, proficient &lt;90, mastered ≥90 | `scoreToLevel` |

Do not invent a second progression system.

## Source integrity

- Use **Exa** for live retrieval (`SOURCE_RETRIEVAL_LOG.md`).
- Prefer current first-party exam objectives and official technical docs for certifications.
- For academic subjects: peer-reviewed → university → textbooks → standards orgs → government scientific agencies.
- Record **version**, **retrieval date**, and **`reviewBy`** when a fact will age (exam sunsets, skills-measured updates).
- Never mix exam versions without `mixedVersionWarning`.
- **Never invent** quotations, objective numbers, standards alignments, or citations.

## Related docs

- [`docs/COURSE_ARCHITECTURE.md`](../COURSE_ARCHITECTURE.md)
- [`docs/definition-of-done.md`](../definition-of-done.md)
- [`docs/subject-onboarding-process.md`](../subject-onboarding-process.md)
- [`docs/a-plus-objectives-source.md`](../a-plus-objectives-source.md)
