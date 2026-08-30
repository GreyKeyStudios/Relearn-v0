# Piano Foundations — interactive learning vertical slice

**Status:** First usable slice implemented and expanded with persistent Practice
**Parent:** [`COURSE_ARCHITECTURE.md`](COURSE_ARCHITECTURE.md)
**Purpose:** Extend ReLearn from certification study into generalized interactive learning without weakening the existing backbone.

## 1. Source inventory and architecture found

The canonical repository already contains more of the intended product than the prior UI makes visible:

- `Certification → Domain → Topic → Activities` content hierarchy, with Type A/B/C template rules.
- Lessons, quizzes, flashcards, assignments, simulators, case studies, domain review, and interactive `ExperiencePlayer` screens.
- Topic and production prerequisite graphs, cross-track `KnowledgeNode` records, `KnowledgeDna`, mastery, weak-objective detection, study planning, and recommendations.
- Zustand/localStorage progress with migrations, completion, attempts, SRS, weak topics, recent activity, and study-plan state.
- A locked `SimulatorResult` contract and registry; reusable Web Audio work in Sound Synthesis.
- Curriculum validators, production validators, Playwright support, and build/type gates.

Recovered handoff context reviewed before implementation:

- The prior ReLearn rollout identifies `GreyKeyStudios/Relearn-v0` as canonical and records the transfer standard: explain → demonstrate → guided practice → break/fix → reduced guidance → unfamiliar task → independent proof.
- `041_ReLearn Curriculum Planning.md` preserves the hybrid “curate + create” origin: ReLearn owns the path while excellent external tools can remain assignments.
- `GK_STUDIO_EDUCATIONAL_DAW_ARCHITECTURE_BRIEF.md` establishes that ReLearn owns durable curriculum progress and GK Studio emits semantic evidence; the native engine owns audio/session truth.
- The handoff README says source code was excluded and destination code/newer plans are authoritative. No missing handoff file was copied wholesale.

## 2. Context preserved and conflict recorded

Still valid: content packs over one-off courses, curriculum ownership, external tools inside guided paths, reusable simulators, learning engine before AI, prerequisite/mastery-driven recommendations, mobile usability, and transfer outside ReLearn.

Conflict: the older constitution treats Type D/general education as a future Phase 7 concern and lists track abstraction as gated. The current brief makes interactive practice first-class and chooses Piano Foundations as its first test. This slice therefore adds a bounded `/learn/piano-foundations` route and shared interaction primitives, but does not introduce a second generic track system, alter certification schemas, or claim the whole Type D template is graduated.

## 3. Product boundary decision

| Product | Owns | Does not own |
|---|---|---|
| ReLearn | learning mode selection, prompts, hints, attempts, evaluation policy, mastery/progress, prerequisite/learner graph, recommendations | DAW/audio-session truth |
| GK Theory | deterministic pitch, interval, scale, chord and music-exercise intelligence | learner history or course delivery |
| GK Studio | creative project, audio/MIDI engine, transport, devices, semantic evidence emission | ReLearn curriculum or mastery policy |

The browser MIDI adapter is a ReLearn input adapter, not a GK Studio dependency. Music-specific evaluators can later move behind a GK Theory boundary without changing the lesson UI contract.

## 4. Updated learning loop and redesign direction

```text
diagnose → choose mode → teach / simulate / route → practice → verify
→ update learner graph → recommend next step
```

The dashboard now leads with a connected learning map and a concrete next move. It names learning, next, and locked nodes and explains what the recommendation unlocks. Existing certification coaching remains below it. The first-run screen offers Piano Foundations before exam-oriented setup, so an absolute beginner does not need to pretend they are studying for a certification.

This is a foundation, not the final information architecture. The generalized map should next derive from `KnowledgeNode` plus learner mastery rather than the bounded music example displayed today.

## 5. Vertical-slice architecture implemented

```text
Web MIDI input ─┐
                ├─ NoteEvent ─ exercise evaluator ─ feedback/completion
Virtual keys ───┘                        │
                                        ├─ minimal local telemetry
                                        └─ future progress/knowledge evidence adapter
```

Implemented:

- `/learn/piano-foundations` with the five-course-step roadmap.
- Explicit MIDI idle/requesting/connected/no-device/unsupported/denied states.
- Connected-input detection, hot-plug refresh, note-on/note-off parsing, live note name, and keyboard highlighting.
- On-screen keyboard using the same `NoteEvent` path as hardware.
- First-run sequence: play any note → find any C → find a different C → explain octave repetition.
- `PerformanceExercise` schema covering note, pitch class, set, sequence, interval, chord, scale, hold, rhythm, multiple choice, listen, watch, and read activity families.
- Pure note naming/pitch helpers and a reusable evaluator for exact notes, pitch classes, ordered sequences, and unordered sets.
- Local-first usability events capped at 200, with no user identity, device name, or raw MIDI stream stored.

## 6. Telemetry and first usability test

Event hooks cover MIDI request/connect/failure, exercise start/attempt/hint/completion, lesson exit, and lesson completion. Attempt events include correctness, attempt count, and response latency; completions include successful-response latency. Reusing the same C in the second octave task is recorded as an instructional failure signal.

For the friend test, observe MIDI permission success, time to first note, incorrect notes/hints before each C, whether “different C” communicates octave repetition, and where the learner exits or hesitates. Events stay local and explainable. Do not add remote analytics until consent, retention, access, deletion, and payload review are decided.

## 7. Remaining work and exact continuation steps

The expanded curriculum and Practice decisions now live in [`piano-curriculum-and-practice-architecture.md`](piano-curriculum-and-practice-architecture.md); exact current state lives in [`PROJECT_STATE.md`](PROJECT_STATE.md). Those documents supersede the older four-lesson continuation outline below where they differ.

1. Test with the target physical keyboard in a Web MIDI-capable desktop browser; capture browser, OS, device behavior, and learner notes.
2. Add deterministic unit coverage once the repository selects a unit-test runner; today only Playwright and scripted validators are configured.
3. Persist Piano lesson/exercise completion through an adapter into the existing progress store, then expose music nodes in the real learner graph.
4. Move pitch/interval/chord/scale definitions into a bounded GK Theory package/service boundary with shared fixtures.
5. Implement lessons 2–4 using the same primitives: twelve-note discovery, major-scale construction, triads, and a simple progression.
6. Add sequence reset/recovery, held-note duration, simultaneous chord windows, rhythm tolerance, velocity filtering, sustain-pedal handling, and multi-input selection.
7. Derive the dashboard map from actual prerequisite/mastery state across IT and music; do not retain hard-coded display nodes long term.
8. Run accessibility and target-learner usability passes.
9. Decide telemetry consent/export/deletion before any remote sink.
10. Validate the learning-mode decision model before automating recommendations across every track.

## 8. Historical gaps not invented

- No prior Piano Foundations schema, authored lesson copy, MIDI decision record, or finished GK Theory package was present locally or in the handoff.
- No remote telemetry vendor, privacy policy, consent model, or account-backed learner graph is approved.
- The repo says authentication/database/cloud sync are non-goals without approval; this slice stays local-first.
- The handoff mentions Supabase progress in an inspected archive, but the canonical current repo uses Zustand/localStorage. This implementation follows the canonical repo.
