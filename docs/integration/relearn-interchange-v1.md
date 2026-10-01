# ReLearn interchange v1 — engine boundary for Bridge Academy

**Status:** Implemented (v1). Static, read-only course data plus a learner-exported, **learner-controlled** (unverified) record.
**Contract source:** [`src/integration/contract.ts`](../../src/integration/contract.ts) — dependency-free; consumers vendor it verbatim.
**Verify:** `npm run verify:integration` · E2E: `npx playwright test e2e/integration-boundary.spec.ts`

## 1. System boundary

Four layers, each with its own repository or module. Upper layers consume lower ones through a published contract and never import their source.

| Layer | What it is | Where | Status |
|-------|-----------|-------|--------|
| **Public institutional site** | Explains Bridge Academy, publishes honest status, shows the course catalog it can actually point to | `GreyKeyStudios/bridge-academy` | Existing (public site) |
| **Bridge Academy product / school system** | Learners, cohorts, enrollment, educator workflows, institutional records ("My Bridge") | Not built | Planned |
| **ReLearn learning engine** | Delivery, practice, assessment, mastery, adaptive review, progress, evidence | This repository (`src/lib`, `src/stores`, `src/app`, `src/integration`) | Existing (single-device, no accounts) |
| **Individual curricula / modules** | Content packs: CCNA, Git, PowerShell, Computer Fundamentals, Piano, … | `src/content/**` | Mixed — see each course's `maturity` |

The interchange contract sits between the engine and anything above it. Bridge Academy (either layer) reads ReLearn course definitions and learner records; it does not read ReLearn's `Certification`/`Topic` types or `localStorage`.

## 2. What the contract defines

| Document | Schema id | Produced by | Published as |
|----------|-----------|-------------|--------------|
| Course catalog | `relearn.course-catalog` v1 | `buildCourseCatalog()` | `/integration/v1/catalog.json` (static) |
| Course manifest | `relearn.course-manifest` v1 | `buildCourseManifest(cert)` | `/integration/v1/courses/{courseId}/manifest.json` (static) |
| Learner record | `relearn.learner-record` v1 | `buildLearnerRecord(state)` | Downloaded by the learner from **Progress → Export learning record** |

All three are prerendered or generated client-side; this works in the static export (`npm run build:pages`) with no server.

### Generic engine primitives vs. course-specific data

| Generic (in the contract) | Course-specific (stays in content packs) |
|---------------------------|-------------------------------------------|
| Course → Module → Lesson → Activity hierarchy | CCNA domains, topic prose, LES experience screens |
| Activity kinds: lesson, quiz, question-bank, flashcards, simulator, external-lab, case-study, reading | Which simulator; subnet visuals; OSI anchors |
| Evidence modes: self-reported, auto-graded, external-attested | CES / BLS / LES authoring standards |
| Objectives as `{id, text, moduleId?}` | Cisco/CompTIA numbering, v1.1 ↔ v2.0 mapping |
| Lesson `variant` gate (opaque string) | CCNA objectives-pathway semantics |
| Mastery score 0–100 + level | Mastery thresholds, SRS intervals (unchanged) |
| Course maturity ladder | Track status internals (`track-status.ts`) |

### Shared identifiers

Interchange ids **are** ReLearn's existing persistence keys (BRIDGE_MASTER §7), so a learner record resolves against a manifest without a mapping table:

| Entity | Format | Example |
|--------|--------|---------|
| course | `{certId}` | `ccna` |
| module | `{certId}:module:{domainId}` | `ccna:module:network-fundamentals` |
| lesson | `{certId}:{topicId}` (= `topicKey`) | `ccna:subnetting` |
| lesson activity | `{lessonId}#{lesson\|quiz\|question-bank\|flashcards}` | `ccna:subnetting#quiz` |
| assignment activity | `{certId}:{assignmentId}` (= `assignmentKey`) | `ccna:subnet-cidr-sim` |
| domain review | `{certId}:domain-review:{domainId}` | `ccna:domain-review:network-fundamentals` |

Renaming a topic or assignment id therefore breaks learner records **and** learner progress — this was already true; the contract makes it explicit.

### Maturity mapping

`track-status.ts` → contract `maturity`: `flagship → pilot`, `stable/gold-standard → stable`, `learner-qa`, `internal-review`, `first-pass` unchanged, legacy `reference/skill → first-pass` (conservative), `early`, `planned`. Consumers must display `maturity`, `maturityLabel`, and `notices` alongside a course.

## 3. Trust model — learner records are learner-controlled

A `relearn.learner-record` is **the learner's own copy of their study history**. It is not a transcript, grade report, certificate, or verified evidence.

| Fact | Consequence |
|------|-------------|
| Exported from browser storage by the learner (`provenance: "device"`) | Anyone holding the file can edit it; nothing proves it came from ReLearn |
| `trust: "learner-controlled"` is the only value v1 allows (validators reject anything else; a missing value means the same) | A "verified" record is a **new schema version**, not a flag on v1 |
| `evidenceMode: "auto-graded"` | ReLearn scored the activity when it happened — the *exported* score is still unverified |
| `provenance: "demo"` | Generated from fixed sample data; never a real learner |
| No learner PII in the schema | Records identify no one |

Every surface that displays a record must show `LEARNER_RECORD_TRUST_NOTICE` (exported from the contract) or equivalent wording. Current surfaces: ReLearn **Progress → Export learning record** card; Bridge Academy `/courses/[courseId]/record`.

`resolveProgressAgainstManifest()` reports `unknownRefs` for ids the manifest does not know (stale export or hand-edited file). That catches mistakes, not forgery.

## 4. Known v1 limitations (future contract cases)

v1 evidence must reference a manifest id. Two kinds of real engine data have no such anchor and are **deliberately not exported** rather than forced into the schema:

| Data | Why it does not fit v1 | Where its effect still shows | Likely future shape |
|------|------------------------|------------------------------|---------------------|
| Competency practice (`competencyEvidence`, today produced by Piano Practice) | Competency ids are not part of any published course manifest; Piano is not a `Certification` course | Nowhere in the record | Publish competencies as manifest entities (course- or framework-level), then add competency evidence that references them — additive optional fields in v1, or v2 if competencies need their own document |
| Adaptive-review sessions (`adaptive-review:*` quiz attempts) | One session spans several lessons; there is no single activity id | Each lesson's `masteryScore` / `masteryLevel` (review updates topic mastery) | Per-question or per-lesson results with a `session` grouping id — additive optional field |

The draft `competency-practice` evidence type was removed before v1 shipped, so the published v1 types contain no unused values.

## 5. Versioning

- v1 accepts **additive optional fields only**. Removing/renaming a field, adding a required field, or changing meaning (including any trust level other than `learner-controlled`) → `schemaVersion: 2`, new `/integration/v2/` paths, and v1 kept until consumers move.
- `engine.version` is `package.json` version; bump it when published course structure changes meaningfully.
- Consumers vendor `contract.ts` verbatim. A consumer's build should fail on an unknown `schemaVersion` (Bridge's does).

## 6. Source of truth and consumer sync (Bridge Academy)

- **Contract source of truth:** `src/integration/contract.ts` on ReLearn `dev` (integration branch; repository policy routes all PRs through `dev`, and `main` receives `dev` releases).
- **Live deployment Bridge links to:** `https://rltest.greykeystudios.dev` (owner-configured as Bridge's `NEXT_PUBLIC_RELEARN_URL`). `/integration/v1/*.json` is served there once this contract is merged and deployed.
- **Data source of truth for a consumer:** the ReLearn commit that is deployed at the URL the consumer links to (Bridge: `NEXT_PUBLIC_RELEARN_URL`). Bridge's vendored snapshot records that branch and commit in `lib/relearn/snapshot/source.json`.
- **Refresh Bridge's snapshot when** the contract changes, a course in Bridge's catalog changes structure (topics, assignments, objectives, maturity, notices), or the deployed ReLearn commit moves past the snapshot commit with such changes.
- **Procedure:** see Bridge `docs/RELEARN_INTEGRATION.md` (`pnpm relearn:sync ../Relearn-v0`, `--check` to detect drift).

## 7. Not built (deliberately)

| Capability | Why not now | What would unblock it |
|------------|-------------|-----------------------|
| Authentication / learner identity | BRIDGE_MASTER §14 non-goal; no school system to own identity | My Bridge requirements + privacy decision |
| Server-side progress / sync | Same | Identity + storage decision; then POST `relearn.learner-record` to a Bridge endpoint |
| Verified / signed records | Records are device exports | Server-side attempt logging; would be a v2 trust level |
| Competency and adaptive-review evidence | See §4 | See §4 |
