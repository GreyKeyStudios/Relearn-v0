# Learner-Facing CCNA Version Selection

Architecture-only design. No UI rewrite ships in this batch.

## Principle

Ask for the learner’s **intended exam date**, then recommend the official pathway from configurable windows — not from hard-coded marketing copy scattered through the app.

## Windows (defaults)

- **v1.1** available through `2027-02-02`
- **v2.0** available from `2027-02-03`

Source of truth: `src/content/production/ccna-transition/dates.ts`

## Helpers

```ts
import {
  buildCcnaVersionSelection,
  buildCcnaVersionSelectionFromOptionalDate,
} from "@/content/production/ccna-transition";

const result = buildCcnaVersionSelection("2027-01-15");
// result.recommendedVersion === "v1.1"

const undecided = buildCcnaVersionSelectionFromOptionalDate(null);
// undecided.recommendationState === "missing-exam-date"
// undecided.recommendedVersion === null  // do not invent a default pathway
```

## Date semantics

- Store **UTC calendar** `YYYY-MM-DD` date-of-record (`isUtcCalendarDate`).
- Convert learner-local civil dates **before** calling selection helpers — `dates.ts` does not apply timezone offsets.
- Boundary: `2027-02-02` → v1.1; `2027-02-03` → v2.0 (inclusive; configurable).

## UI contract

| Field | Storage key | Notes |
| --- | --- | --- |
| Intended exam date | `ccna.intendedExamDate` | UTC calendar `YYYY-MM-DD` |
| Preferred version override | `ccna.preferredObjectivesVersion` | `v1.1` \| `v2.0` |
| Manual override allowed | yes | Override never deletes the other pathway |
| Show both during overlap | no | Current Cisco windows do not overlap |
| Preserve progress on switch | yes | No duplicate mastery/SRS; pilot keys unchanged |

`CCNA_VERSION_SELECTION_UI_CONTRACT` in `version-selection.ts` documents these fields for a future screen.

## Learner copy (default)

- Headline: “Which CCNA exam date are you targeting?”
- Body branches on recommended version (v1.1 vs v2.0).
- Footnote points to configurable cutover + progress-key stability.

## Non-goals for this batch

- No React page or route changes
- No change to study-loop routing
- No progress migration when the learner switches version preference
