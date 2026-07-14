# Review board folder

Git-tracked operational state for the [Curriculum Review Board](../../../docs/CURRICULUM_REVIEW_BOARD.md).

| File | Purpose |
|------|---------|
| [`decision-log.md`](decision-log.md) | Durable finding decisions |
| [`ccna-scoreboard.md`](ccna-scoreboard.md) | Factual CCNA sign-off dashboard |

## Rules

1. **Same `findingId` on re-audit** → look up the ledger first. Do not open a duplicate row.
2. **Intentional Design** is not “wrong AI.” It is a conscious non-fix. Do not re-open without updating `reason`.
3. **Do not dump all MEDIUM/LOW** into the ledger. Seed HIGH (and promoted) findings only.
4. This folder is **committed**. Raw reports stay under gitignored `reports/`.

## Filling decisions

After ChatGPT triage (or Michael directly), set `decision`, `reason`, `approvedBy`, and `date`. When a **Ship Before Sign-off** fix merges, set `prOrCommit` and refresh the scoreboard blocker count.
