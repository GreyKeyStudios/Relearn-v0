# Verification Report — Curriculum Production Architecture

**Branch:** `cursor/curriculum-production-architecture-b6be`  
**Base:** `dev`  
**Date:** 2026-08-04

## Scope

Native ReLearn implementation of the curriculum production system (schemas, prerequisite graphs, exam blueprints, sources, freshness, validators, gap report, templates, agent research guide).  
**No mass lesson production.** Live Path A runtime types, mastery scoring, and SRS intervals were not changed.

## Commands run

| Command | Result |
|---------|--------|
| `npx tsc --noEmit` | Pass |
| `npm run verify:production` | Pass (0 errors; warnings/info are intentional QC signals) |
| `npm run curriculum:gap-report` | Pass — wrote `gap-report-latest.md` |
| `npm run verify:curriculum -- --strict-ccna --strict-ccna-objectives` | Pass |
| `npm run verify:curriculum -- --strict-pedagogy` | Pass |
| `npm run verify:curriculum -- --strict-experience` | Pass |
| `npm run build` | Pass |
| `eslint` on new production paths | Pass |
| `npm run lint` (repo-wide) | Failures are **pre-existing** in unrelated UI/hooks files; none in production layer |

## Mastery / SRS compatibility

Asserted via `src/content/production/mastery-compatibility.ts` against live constants:

| Contract | Value | Status |
|----------|------:|--------|
| Quiz pass | 70% | OK |
| SRS advance | 80% | OK |
| Weak clear | 90% | OK |
| Objective weak / min attempts | 70% / 3 | OK |
| SRS intervals (days) | 1, 3, 7, 14, 30 | OK |
| `scoreToLevel` breakpoints | 20 / 50 / 70 / 90 | OK |

## Inventory (verify:production)

- 30 subjects (live + planned + future academic stubs)
- First-party + academic `SourceRecord`s from Exa live retrieval (2026-08-04) — see [`SOURCE_RETRIEVAL_LOG.md`](SOURCE_RETRIEVAL_LOG.md)
- Exam blueprints for all certification tracks (domain weights); A+ has objective lines; CCNA still on pilot IDs with `mixedVersionWarning`
- Future-review flags for CCNA v2.0 cutover, CySA+ retirement, Security+ estimated retirement, AZ-900 skills-measured drift
- 14 live-track prerequisite graphs + Knowledge DNA graph validation
- 5 freshness classes

## Gap report snapshot (high level)

- Live tracks: 14 · Live topics: 286 · Full CES topics: 182
- Uncovered **pilot** blueprint objectives currently reported: CCNA-2.1, CCNA-2.2 (pilot catalog — not official v1.1 lines)
- Certification tracks needing official objective-line mapping: ccna, security-plus, network-plus, cysa-plus, aws-cloud-practitioner, azure-fundamentals, linux-plus, itil-foundation
- Full details: [`gap-report-latest.md`](gap-report-latest.md)

## Recommended next batches

See [`CONTENT_BATCH_SEQUENCE.md`](CONTENT_BATCH_SEQUENCE.md) — provenance hardening, then atomic objectives on reference tracks, then LES/CES elevation. Do not mass-produce banks in the architecture phase.

## Diaspora Atlas PR #2

The original architecture prompt was executed in the wrong repository. This PR is the native ReLearn landing.

**Close status:** This agent could not access `GreyKeyStudios/diaspora-atlas-app` (repository not visible to the ReLearn GitHub token / returns 404). Please close Diaspora Atlas PR #2 **without merging** from an account that has access now that the native ReLearn PR exists:

https://github.com/GreyKeyStudios/Relearn-v0/pull/31
