# CCNA Dual-Version Progress-Safe Migration Plan

**Status:** Architecture only — no live remaps, no progress mutations  
**Preserves:** `objectiveScores`, `objectiveAttempts`, SRS state, mastery thresholds, study-loop behavior

---

## Goals

1. Keep the **v1.1 pathway** fully available until its last test date.
2. Add a **v2.0 pathway** without replacing or deleting v1.1.
3. Never break existing learner progress keyed on pilot `CCNA-*` IDs.
4. Keep cutover dates in one configurable module (`dates.ts`).

---

## Current operational model (unchanged by this batch)

```text
Persisted / live tags          Production truth
-------------------------      ------------------------------------------
CCNA-* (pilot aliases)    -->  200-301-v1.1/<n> via pilot-to-v1.1 map
                          -->  200-301-v2.0/<n> via dual map (derived)
topic.objectives = CCNA-* -->  unchanged
quiz.objectiveId = CCNA-* -->  unchanged
objectiveScores["CCNA-*"] -->  unchanged (still addressable)
```

Blueprints:

- `blueprint-ccna-200-301-v1.1` — official v1.1 parents only
- `blueprint-ccna-200-301-v2.0` — official v2.0 parents only

`getExamBlueprint("ccna", { asOf })` resolves the active version from configurable windows; both blueprints remain registered.

---

## What this batch does **not** change

- No lesson / quiz / simulation authoring or rewrites
- No store schema changes
- No SRS interval or mastery-threshold edits
- No deletion of v1.1 objectives, blueprint, or alias map
- No silent rename of pilot IDs

---

## Migration phases (future tickets)

### Phase T0 — Architecture (this PR)

- Dual objective manifests, comparison map, transition classifications
- Shared-core design units
- Pilot dual-version alias map
- Version-selection helpers + UI contract
- Gap report + production sequence
- Validators for version mix + cutover config

### Phase T1 — Learner version selection (UI only)

1. Collect intended exam date (`ccna.intendedExamDate`) as a UTC calendar `YYYY-MM-DD` date-of-record (convert learner-local civil dates before save).
2. If no date yet, call `buildCcnaVersionSelectionFromOptionalDate(null)` — do **not** invent a default pathway.
3. Recommend v1.1 or v2.0 via `buildCcnaVersionSelection()` / optional-date helper.
4. Allow manual override; store `ccna.preferredObjectivesVersion`.
5. **Do not** rewrite progress keys when switching pathways — only change which checklist/blueprint is emphasized. Mastery/SRS remain the single existing system keyed on pilot `CCNA-*` IDs (`preserveProgressOnPathwaySwitch: true`).

### Phase T2 — Dual-tag production annotations

1. New LES / production specs may list version-specific `examObjectiveIds`.
2. Shared lesson bodies may exist once; each association list stays version-namespaced.
3. Live Path A fields continue to use pilot IDs until T3.

### Phase T3 — Dual-write progress (optional, tested)

1. When recording mastery, write pilot key **and** derived official key(s) for the learner’s selected version.
2. Readers accept pilot or official keys.
3. Requires a dedicated, tested change in mastery helpers — out of scope here.

### Phase T4 — Post-cutover cleanup (after 2027-02-02)

1. Keep v1.1 artifacts for historical analytics / learners who tested early.
2. Default new enrollments to v2.0 via `dates.ts` (not hard-coded UI strings).
3. Only retire pilot writes after every live tag has a trustworthy official home.

---

## Progress handling rules (do not invent)

| Dual-map status | Progress action |
| --- | --- |
| exact / partial / narrower (single official id) | Eligible for dual-write copy in T3 |
| combines multiple official objectives | Dual-copy **or** hold for human split — never auto-average |
| unable to map | Keep pilot key only; do not fabricate official progress |
| v1.1 removed / undetermined with no v2.0 edge | Retain v1.1 pathway progress; do not force v2.0 credit |

---

## Shared-core lessons

Shared lesson **bodies** may satisfy both versions. Each lesson must carry **separate** association lists:

- `examObjectiveIdsV11: ["200-301-v1.1/..."]`
- `examObjectiveIdsV20: ["200-301-v2.0/..."]`

Never store a mixed-version ID list under a single undifferentiated field.

---

## Rollback

If cutover dates change on Cisco’s site:

1. Update `CCNA_VERSION_WINDOWS` in `dates.ts` only.
2. Re-run `npm run curriculum:ccna-transition-report`.
3. Re-check validators — no app-wide string hunt required.
