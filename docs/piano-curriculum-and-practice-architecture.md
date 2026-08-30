# Piano curriculum and Practice architecture

**Status:** Direction accepted; first Practice slice implemented
**Parent:** [Piano Foundations vertical slice](piano-foundations-vertical-slice.md)

## Pedagogical contract

Piano begins at genuine zero knowledge. No task may require a term, physical landmark, notation symbol, or playing behavior that the learner has not experienced or been allowed to discover. Authoring follows:

`Experience → Notice → Name → Explore → Practice → Prove → Connect`

Learner-facing language may compress this to `Play → Notice → Practice → Prove`. Musical wins—small riffs, melodies, play-alongs, accompaniment, and constrained improvisation—must occur throughout rather than after a theory prerequisite wall.

### Permanent execution constraints

1. Preserve the zero-knowledge depth of Meet the Keyboard. Never assume terminology, physical familiarity, or musical knowledge that has not been taught or discovered.
2. The academy map is the long-term target. Each implementation batch must prefer a polished coherent learner path over shallow coverage across many levels.
3. Practice remains independent of Courses and Review and may become a graduate learner's primary daily ReLearn surface.
4. Competency and evaluation remain separate from presentation so lessons, trainers, remediation, review, and games can share educational logic.
5. Never fake verification. MIDI evidence may update demonstrated competencies; posture, fingering, physical technique, interpretation, and taste require self-check or coaching unless another truthful evidence source exists.
6. Open musical exercises support multiple valid outcomes and distinguish descriptive analysis/coaching from objective correctness.
7. Early and frequent musical wins prevent the curriculum from becoming a prerequisite tunnel.
8. Generic exercise/evidence/renderer contracts must remain useful to non-piano ReLearn domains; music reasoning belongs behind the GK Theory boundary.

Piano is the reference implementation for ReLearn's generalized learning architecture because it exercises instruction, deliberate practice, objective verification, coaching, remediation, progression, external input, and optional game renderers in one inspectable domain. It must not become a piano-only architecture hidden behind generic names.

## Foundations graph

1. Meet the Keyboard — one white key; natural keys; black-key groups; C landmark; octave repetition; full instrument.
2. Learn the Notes — natural-note navigation; sharps/flats as neighboring keys; pitch direction; landmark fluency.
3. Your Hands — relaxed setup, deliberate motion, simple five-note travel, repeated notes, basic coordination. MIDI may verify notes/order/timing, never fingers, posture, or tension.
4. Pulse and Rhythm — experience steady pulse; copy it; then name beats, subdivisions, and simple durations.
5. Scales and Scale Degrees — hear/build patterns; major first; degrees as roles rather than isolated numbers.
6. Melodies — motives, contour, repetition/contrast, tiny riffs and ear-to-keyboard copying.
7. Chords — intervals experienced first, then triads, qualities, and chord-tone recognition.
8. Chord Progressions — harmonic motion, common functions, accompaniment, and multiple plausible continuations.
9. Two-Hand Coordination — shared pulse, melody plus support, independence in small increments.
10. Reading Music — notation introduced as a representation of sounds and gestures already understood.
11. Expression — dynamics, articulation, phrasing, velocity, duration, and pedal where controller data exists.
12. First Complete Piece — integrate navigation, pulse, two hands, reading, expression, recovery, and performance.

The Grey Key follows every authored module and remains permanently locked. ReLearn may teach, challenge, verify evidence, and recommend; it cannot award mastery. The Grey Key belongs to the learner.

## Continuation paths

Intermediate and advanced keyboard musicianship branches through all-key major/minor scales, inversions, arpeggios, extended chords, voicings, voice leading, transposition, sight-reading, ear-to-keyboard fluency, accompaniment, improvisation, modes, advanced harmony application, rhythmic independence, and odd meter. Difficulty does not move a skill out of ReLearn: ReLearn owns learning and practice; GK Theory supplies reusable musical reasoning; GK Studio supplies a creative environment and semantic performance evidence.

The learner-facing academy now makes this explicit as three interlocking programs: a six-stage Shared Pianist Core, a six-stage Classical Pianist path, and a six-stage Jazz Pianist path. Foundations is the entrance to those programs, not a claim of complete pianism.

Arpeggios are a required developmental strand: chord-as-sound and slow rolls → root-position major/minor shapes → guided fingering and thumb crossing → hands separately → two octaves/hands together → inversions → every key → dominant/diminished sevenths → four-octave and compound patterns → repertoire, accompaniment, and improvisational transfer.

## External curriculum anchors

These sources inform coverage and sequencing; ReLearn does not copy proprietary repertoire lists or claim equivalence with an examination board.

- Royal Conservatory of Music, *Piano Syllabus, 2022 Edition*: progressive technical requirements include scales, chords, tonic arpeggios, dominant-seventh and diminished-seventh work, inversions, multiple octaves, repertoire, etudes, ear tests, and sight-reading. https://teacherportal.rcmusic.com/getattachment/57f3734d-97e5-4777-b67e-4b1111ee31a3/piano-syllabus-2022-edition.pdf
- ABRSM, *Piano Practical Grades 2025 & 2026*: even at Initial Grade, assessment combines repertoire, scales/arpeggios, sight-reading, and aural skills; requirements expand by grade. https://www.abrsm.org/sites/default/files/2024-06/Piano%202025%20%26%202026%20Prac%20syllabus%2020240524_access.pdf
- Trinity College London, *Piano Syllabus*: balances repertoire with scales, arpeggios, exercises, and supporting tests. https://www.trinitycollege.com/resource?=&controller=resource&id=9079
- Berklee College of Music Ear Training Core: connects aural perception, singing, dictation, performance, improvisation, composition, theory, self-diagnosis, and lifelong learning. https://college.berklee.edu/ear-training/ear-training-core
- Berklee Online Jazz Piano and Advanced Jazz Piano: voicings, standards, blues, swing, bossa, groove, improvisation, solo/ensemble roles, intros/endings, reharmonization, historical language, and play-along work. https://online.berklee.edu/courses/jazz-piano and https://online.berklee.edu/courses/advanced-jazz-piano

Advanced physical technique and interpretation remain expert-review gates. Published syllabi establish coverage and progression, but an app and MIDI stream cannot independently validate healthy movement or settle subjective artistic choices.

## Courses, Practice, and Review

- **Courses teach:** sequence experiences, introduce language, scaffold transfer, and establish new competencies.
- **Practice trains:** learner-selected or prescribed repetition independent of course position.
- **Review maintains:** schedules knowledge or execution whose evidence is weakening.

All three consume the same competency and exercise definitions. Games are an optional renderer, never a second education engine.

Within Courses, the default is a continuous lesson: explanation, demonstration, playing, feedback, verification, and progression stay on one page. A separate activity workspace is used only when the activity is materially different in scale or interaction model—for example a full-piece performance, notation editor, ear lab, improvisation analysis, game, recording session, or large simulation. Learners should never have to open a second screen merely to play the exercise a lesson just taught.

```text
Competency + exercise definition
              │
       objective evaluator or coaching analyzer
              │
     ┌────────┼─────────┬────────┐
   course   practice   review   game
              │
       learner evidence / Knowledge DNA
```

An exercise declares its `evaluationMode`:

- `objective`: a bounded claim such as note, pitch class, sequence, chord membership, timing tolerance, duration, velocity, or controller state can be tested.
- `coaching`: creative work is described and connected to theory. Multiple valid answers remain valid; the system does not manufacture a single correct choice.

The reusable primitive roadmap includes notes, pitch classes, sets, ordered sequences, intervals, simultaneous-note windows, scales, chord sequences, timing, durations, velocity, pedal/controllers, and rhythm patterns. The engine should keep event/evidence interfaces domain-neutral even when GK Theory performs music reasoning.

## Adaptive evidence and remediation

Practice records evidence against granular competencies such as `piano.note-navigation.c`, `piano.scale.c-major.ascending`, pulse stability, chord construction, and progression execution. Repeated difficulty may launch a smaller prerequisite exercise, retain the original task, and return the learner afterward. A course percentage is not an adequate substitute for this graph.

## MIDI truthfulness

Standard MIDI can establish note identity, order, event timing, velocity, duration, and available controller messages. It normally cannot establish finger choice, posture, relaxation, or acoustic tone. ReLearn must state that boundary anywhere physical technique is discussed.

## Implementation batches

Implemented now: persistent `/practice`, global Practice navigation, reusable competency references and evaluation modes, working landmark, scale, pulse, five-note control, held-duration, velocity-contrast, chord-tone, and arpeggio trainers through both on-screen and MIDI input, persisted competency evidence, practice telemetry context, a 64-lesson long-range Foundations curriculum, a resumable continuous course player, three continuation paths, and a learner-ready 27-lesson path through the first complete scale.

Learner-ready lessons combine authored explanation, listening, guided action, conceptual connection, and an honest evaluator or self-check. Objective micro-lessons embed their playable renderer directly and pause on success before advancing. Units 6–12 remain visible as curriculum destinations but locked in the normal path until they meet this same contract; prototype destinations beyond Unit 5 do not constitute learner-ready coursework.

Next batch: author Unit 6 Melodies to the readiness contract; add simultaneous-note/chord windows before claiming chord simultaneity; add Unit 3 posture illustrations as unverified coaching; then implement remediation routing, accessibility review, and physical-device usability tests.

Later: coaching analysis backed by GK Theory for progression completion, harmonization, and improvisation; renderer adapters for review and games; prescribed practice from Knowledge DNA weakness.
