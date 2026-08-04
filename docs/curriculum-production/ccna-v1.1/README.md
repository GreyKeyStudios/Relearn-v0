# CCNA 200-301 v1.1 Official Objective Ingestion

**Batch:** first official objective-ingestion using the curriculum-production system  
**Scope:** Cisco CCNA **200-301 v1.1** only  
**Out of scope:** lesson/quiz/sim rewrites, study-loop changes, v2.0 topics

## Artifacts

| Path | Description |
|------|-------------|
| [`200-301-CCNA-v1.1.extracted.txt`](./200-301-CCNA-v1.1.extracted.txt) | Full text extracted from the official PDF |
| [`MAPPING_REPORT.md`](./MAPPING_REPORT.md) | Human-readable pilot → official table |
| [`pilot-to-v1.1.mapping.json`](./pilot-to-v1.1.mapping.json) | Machine-readable mapping manifest |
| [`COVERAGE_REPORT.md`](./COVERAGE_REPORT.md) | Official parents lacking live alias coverage |
| [`MIGRATION_PLAN.md`](./MIGRATION_PLAN.md) | Progress-preserving migration plan |

## Code

| Path | Description |
|------|-------------|
| `src/content/production/objectives/ccna-200-301-v1.1.ts` | Official lines + atomic records |
| `src/content/production/mappings/ccna-pilot-to-v1.1.ts` | Alias / migration layer |
| `src/content/production/exam-blueprints/index.ts` | Blueprint uses official parent IDs |

## Regenerate reports

```bash
npm run curriculum:ccna-v11-report
```

## Provenance

- PDF: https://learningcontent.cisco.com/documents/marketing/exam-topics/200-301-CCNA-v1.1.pdf
- SHA-256: `da15a22dda1afb61af1a14a53264eea6b87d81e8a3036dbaa69cb1b6260bebd5`
- Retrieved: 2026-08-04 (UTC calendar date-of-record)
- Future review: v1.1 last test 2027-02-02; v2.0 starts 2027-02-03
