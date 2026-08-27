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
- The 12-unit/64-lesson Foundations curriculum remains the long-range map. Only Units 1–5 (27 lessons, first key through first scale) are exposed as learner-ready; Units 6–12 are visibly locked as development previews.
- The post-Foundations academy now includes six Shared Pianist Core stages, six Classical Pianist stages, six Jazz Pianist stages, explicit milestones, and a ten-stage arpeggio progression.
- Shared Pianist Core now has its first playable lesson: C-major arpeggio as chord tones in motion, ascending and descending, with on-screen/MIDI parity and persisted competency evidence.
- Foundations Units 5–7 now have a playable musical-application path: ascending/descending C major, a coached six-note original melody with multiple valid answers, and C/F chord construction. Ordered exercises recover after wrong notes rather than becoming stuck.
- The learner-ready course has automatic local resume, lesson/unit navigation, completion history, honest evidence labels, competency targets, and 27-lesson progress rather than counting unfinished outlines.
- Independent Practice now provides an eight-exercise first-session path covering C navigation, ascending/descending scales, steady pulse, five-note control, measured note duration, primary chord tones, and the first arpeggio. Pointer and MIDI note releases share the reusable duration evaluator.
- Foundations Units 8–12 now share a playable integration path: C–F–G–C harmonic motion, lower-register roots, symbol-to-keyboard reading transfer, measurable velocity contrast, and a complete original harmonic sketch.
- Ordinary objective activities now run directly inside the continuous course lesson and advance in place. A separate workspace is reserved for the final complete performance, where the larger uninterrupted task genuinely benefits from it.
- Exact-register activities state their MIDI note range and identify Middle C/C4 on the on-screen keyboard; pitch-class activities explicitly allow any octave. MIDI setup remembers a 25-, 49-, 61-, or 88-key instrument profile and communicates the resulting practice plan.
- Web MIDI access is session-level: moving between lessons and piano routes keeps the connected input alive while the active exercise subscribes to its note events.
- Units 1–5 include a lesson-authoring layer with explanations, guided actions, listening examples, physical self-checks, conceptual connections, inline practice, and deliberate success/continue moments. The strong keyboard-pattern prototype now hands off directly to Learn the Notes.
- The course fits narrow browser panels without document-level horizontal scrolling and presents the active lesson before the learning map on small screens.
- Telemetry hooks remain local-first and contain no learner identity or MIDI device name.
- The Grey Key is permanently locked and explicitly not product-awarded mastery.

## Known boundaries

- Competency evidence is persisted locally, but has not yet been unified with the older `KnowledgeDna` model or recommendation selectors.
- Simultaneous chord, pedal/controller, and coaching analyzers remain incomplete. Held-note duration and velocity contrast are implemented.
- Objective activities in learner-ready Units 1–5 play inline; physical technique remains an explicit self-check with concrete setup guidance and no false MIDI claim.
- Units 6–12 contain curriculum and prototype work but are not represented as learner-ready.
- Unit 3 verifies note order only. It does not claim to see fingering, posture, or tension.
- No remote telemetry/consent system has been approved.

## Exact next implementation batch

1. Author Unit 6 Melodies to the Units 1–5 readiness contract before unlocking it.
2. Calibrate the actual lowest and highest MIDI notes after setup so octave-shifted controllers refine the count-based keyboard profile.
3. Convert Shared Pianist Core I into the next playable course after Foundations; its first technical block includes one-octave tonic arpeggios.
4. Unify new competency evidence with `KnowledgeDna` selectors and surface prescribed Practice from weak evidence.
5. Add optional posture/hand illustrations to Unit 3 without implying visual verification.
6. Add a simultaneous chord-window evaluator; held-note duration now works with pointer and MIDI release events.
7. Add prerequisite-remediation return routing with a return-to-original-task contract.
8. Add audio-backed ear/reproduction prompts and coaching-result records without right/wrong scoring.
9. Test with the target learner and physical MIDI keyboard; record comprehension and friction, not punitive scores.
10. Add review/game renderers only after the shared evidence adapter is stable.

See [piano curriculum and Practice architecture](piano-curriculum-and-practice-architecture.md) for the full accepted direction.
