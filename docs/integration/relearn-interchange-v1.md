# ReLearn interchange v1 — engine boundary for Bridge Academy

**Status:** Implemented (v1). Static, read-only course data plus a learner-exported record.
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

## 3. Honesty constraints built into the contract

- Learner records carry `provenance: "device"`: they are exported by the learner from browser storage and are editable. They are evidence of practice, **not** an institutional transcript. ReLearn has no accounts, sync, or server-side records (BRIDGE_MASTER §14 non-goals stand).
- `evidenceMode` distinguishes auto-graded work from self-reported completion and external-tool attestation.
- `resolveProgressAgainstManifest()` reports `unknownRefs` for any id the manifest does not know (stale export or hand-edited file).
- No learner PII is in the schema.

## 4. Versioning

- v1 accepts **additive optional fields only**. Removing/renaming a field or changing meaning → `schemaVersion: 2`, new `/integration/v2/` paths, and v1 kept until consumers move.
- `engine.version` is `package.json` version; bump it when published course structure changes meaningfully.

## 5. Consumer sync (Bridge Academy)

Bridge Academy vendors a snapshot instead of fetching at runtime (there is no confirmed public ReLearn deployment URL yet):

```bash
# from Relearn-v0
npm run integration:export -- --out ../bridge-academy/lib/relearn/snapshot --course ccna
cp src/integration/contract.ts ../bridge-academy/lib/relearn/contract.ts
```

The Bridge site validates the snapshot at build time with the vendored validators; a schema mismatch fails its build.

## 6. Not built (deliberately)

| Capability | Why not now | What would unblock it |
|------------|-------------|-----------------------|
| Authentication / learner identity | BRIDGE_MASTER §14 non-goal; no school system to own identity | My Bridge requirements + privacy decision |
| Server-side progress / sync | Same | Identity + storage decision; then POST `relearn.learner-record` to a Bridge endpoint |
| Signed / verified records | Records are device exports | Server-side attempt logging |
| Piano / practice competency evidence in records | `competencyEvidence` is not course-scoped yet (see PROJECT_STATE known boundaries) | Unify with `KnowledgeDna`; add `competency-practice` items per course |
| Adaptive-review attempts in records | Mixed-topic sessions have no single activity id | Per-question evidence items (additive v1 field) |
| Runtime catalog fetch from Bridge | No confirmed public ReLearn URL | Configure Cloudflare Pages per `docs/preview-deploy.md` |
