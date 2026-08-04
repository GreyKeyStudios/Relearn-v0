# CCNA v2.0 Production Batch 1

**Batch id:** `ccna-v20-batch1-p0-depth`  
**Mode:** Complete production specifications (not mass-generated live lessons)  
**Parents (8):** 2.4, 1.3, 1.4, 1.7, 2.5, 3.2, 3.3, 5.2

## Artifacts

| Path | Role |
| --- | --- |
| [`BATCH_REPORT.md`](./BATCH_REPORT.md) | Why each objective was selected + remaining work |
| [`batch1.manifest.json`](./batch1.manifest.json) | Machine-readable unit index |
| `src/content/production/batches/ccna-v20-batch1/` | Specs (atomics, lessons, quizzes, sims, misconceptions) |

## Regenerate

```bash
npm run curriculum:ccna-v20-batch1-report
```

## Rules

- v2.0 IDs only (`200-301-v2.0/*`)
- Shared-core lessons may share bodies later; associations stay version-specific
- Pilot `CCNA-*` progress keys unchanged
- Single mastery/SRS engine via `PRODUCTION_MASTERY_REQUIREMENTS`
