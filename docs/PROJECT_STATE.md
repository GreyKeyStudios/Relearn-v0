# ReLearn project state

**Branch:** `feature/codex-piano-foundations`  
**Current focus:** Piano curriculum expansion and first-class Practice

**Reference-implementation decision:** Piano is the proving ground for ReLearn's reusable exercise, evidence, remediation, coaching, hardware-input, and renderer architecture. Piano-specific theory stays separable through the GK Theory boundary.

## Working now

- Connected-learning dashboard direction and independently usable Piano Foundations route.
- Optional Web MIDI plus on-screen keyboard through one note-event path.
- Eight-stage keyboard-pattern introduction, six-step natural-note/landmark unit, and introductory five-note hand-control task.
- Persistent Practice route with C-landmark, ascending C-major, and four-beat steady-pulse trainers.
- Objective-versus-coaching evaluation contract and granular competency identifiers.
- Competency evidence persists in the existing progress store with a versioned migration and appears as Knowledge DNA strength in Practice.
- The full 12-unit Foundations path is authored as 64 small lessons, with explicit phase, verification mode, competency links, early musical wins, and three post-Foundations paths.
- The post-Foundations academy now includes six Shared Pianist Core stages, six Classical Pianist stages, six Jazz Pianist stages, explicit milestones, and a ten-stage arpeggio progression.
- Shared Pianist Core now has its first playable lesson: C-major arpeggio as chord tones in motion, ascending and descending, with on-screen/MIDI parity and persisted competency evidence.
- Foundations Units 5–7 now have a playable musical-application path: ascending/descending C major, a coached six-note original melody with multiple valid answers, and C/F chord construction. Ordered exercises recover after wrong notes rather than becoming stuck.
- Telemetry hooks remain local-first and contain no learner identity or MIDI device name.
- The Grey Key is permanently locked and explicitly not product-awarded mastery.

## Known boundaries

- Competency evidence is persisted locally, but has not yet been unified with the older `KnowledgeDna` model or recommendation selectors.
- Held-note, simultaneous chord, pedal, velocity, and coaching analyzers are designed but not implemented.
- Unit 4 now has a playable steady-pulse exercise; Units 5–12 are fully authored but not yet playable.
- Unit 3 verifies note order only. It does not claim to see fingering, posture, or tension.
- No remote telemetry/consent system has been approved.

## Exact next implementation batch

1. Convert Shared Pianist Core I into the next playable course after Foundations; its first technical block includes one-octave tonic arpeggios.
2. Unify new competency evidence with `KnowledgeDna` selectors and surface prescribed Practice from weak evidence.
3. Split Unit 3 into physical setup self-checks and additional MIDI-verifiable deliberate-motion exercises.
4. Add held-note duration and simultaneous chord-window evaluators, then implement the first playable Scale, Chord, and Arpeggio lessons.
5. Add prerequisite-remediation return routing with a return-to-original-task contract.
6. Add audio-backed ear/reproduction prompts and coaching-result records without right/wrong scoring.
6. Test with the target learner and physical MIDI keyboard; record comprehension and friction, not punitive scores.
7. Add review/game renderers only after the shared evidence adapter is stable.

See [piano curriculum and Practice architecture](piano-curriculum-and-practice-architecture.md) for the full accepted direction.
