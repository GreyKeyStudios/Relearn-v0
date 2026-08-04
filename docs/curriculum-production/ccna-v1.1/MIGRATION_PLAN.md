# CCNA Objective Migration Plan (progress-safe)

**Status:** Alias layer landed; live content remap **not** executed  
**Exam version in scope:** 200-301 **v1.1** only (no v2.0 mix)  
**Cutover reminder:** v1.1 last test **2027-02-02**; v2.0 starts **2027-02-03** (future-review flag only)

---

## Goals

1. Make official Cisco numbering the production source of truth.
2. Keep every existing learner’s `objectiveScores` / `objectiveAttempts` keys valid.
3. Avoid rewriting lessons, quizzes, simulations, or the study loop in this batch.

---

## What this batch does

| Artifact | Role |
|----------|------|
| `src/content/production/objectives/ccna-200-301-v1.1.ts` | Complete official v1.1 lines + atomic records |
| `src/content/production/mappings/ccna-pilot-to-v1.1.ts` | Explicit pilot → official alias mapping |
| `docs/curriculum-production/ccna-v1.1/pilot-to-v1.1.mapping.json` | Machine-readable manifest |
| `blueprint-ccna-200-301-v1.1` | Blueprint rows use official IDs; coverage via aliases |

## What this batch does **not** do

- Does not rename `topic.objectives` or `quiz.objectiveId` values in `src/content/certifications/ccna.ts`
- Does not mutate persisted progress documents
- Does not author/rewrite CCNA lessons
- Does not ingest v2.0 exam topics

---

## Operational model (aliases)

```text
Live / persisted key          Production truth
-------------------------     ---------------------------------
CCNA-1.9  (pilot alias)  -->  200-301-v1.1/1.6  (via mapping status)
quiz.objectiveId=CCNA-*  -->  unchanged until content-remap batch
objectiveScores["CCNA-*"]-->  unchanged (still addressable)
```

`resolveOfficialIdsForPilot(pilotId)` is the only supported bridge for analytics/gap reports.

---

## Future content-remap phases (separate tickets)

### Phase M1 — Dual-tag (recommended first)

1. Keep pilot IDs on all live questions/topics.
2. Optionally add a non-persisted production annotation (`examObjectiveIds` on LES/production specs only).
3. Teach authors to prefer official numbers in new content while still writing pilot IDs into live Path A fields until M2.

### Phase M2 — Dual-write progress keys

1. When recording objective mastery, write **both** pilot and official keys (official derived from mapping).
2. Readers accept either key; UI labels prefer official number + text when available.
3. Requires a small, tested change in `src/lib/mastery.ts` / objective score helpers — **out of scope here**.

### Phase M3 — Cutover + freeze pilot writes

1. New quiz tags use official IDs only.
2. One-time progress migration copies pilot keys → official keys using the manifest.
3. For statuses:
   - `exact match` / `narrower` / `partial` → copy score into listed official id(s) with documented merge rules
   - `combines multiple` → split or duplicate per product decision (do not invent)
   - `unable to map` → keep pilot key; do not fabricate official progress
4. Retire pilot catalog only after verification that no live tags remain.

### Merge rules (to decide in M2/M3, not now)

| Mapping status | Suggested progress handling |
|----------------|-----------------------------|
| exact match | Copy score/attempts 1:1 to the single official id |
| narrower / partial | Copy to official id; mark confidence “inherited from narrower pilot tag” |
| combines multiple | Dual-copy to each official id **or** hold until human split — do not auto-average without a ticket |
| broader | Same caution as combines |
| obsolete | Keep pilot history; do not map forward |
| unable to map | Keep pilot key forever or until content rewrite defines a real official home |

---

## Learner-visible compatibility

- Study loop thresholds (70 / 80 / 90) and SRS ladder stay unchanged.
- Weak-objective recommendations that key on `CCNA-*` continue to work.
- Gap/coverage reports should cite official numbers while still listing pilot aliases.

---

## Exit criteria for “live remap complete”

- [ ] Every live `topic.objectives` / `quiz.objectiveId` is an official `200-301-v1.1/*` id **or** an explicitly retained pilot alias with ticketed reason
- [ ] Progress migration script dry-run + applied with backup
- [ ] `mixedVersionWarning` on the CCNA blueprint removed only after live tags no longer rely on pilot numbering
- [ ] v2.0 still absent until a dedicated v2.0 ingestion batch
