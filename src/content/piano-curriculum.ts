export type PianoLessonPhase = "experience" | "notice" | "name" | "explore" | "practice" | "prove" | "connect";

export interface PianoCurriculumLesson {
  id: string;
  title: string;
  phase: PianoLessonPhase;
  competencyIds: string[];
  musicalWin?: string;
  verification: "midi" | "self-check" | "coaching" | "mixed";
}

export interface PianoCurriculumUnit {
  id: string;
  number: number;
  title: string;
  promise: string;
  prerequisites: string[];
  lessons: PianoCurriculumLesson[];
}

const lesson = (id: string, title: string, phase: PianoLessonPhase, competencyIds: string[], verification: PianoCurriculumLesson["verification"], musicalWin?: string): PianoCurriculumLesson => ({ id, title, phase, competencyIds, verification, musicalWin });

export const PIANO_FOUNDATIONS_CURRICULUM: PianoCurriculumUnit[] = [
  { id: "keyboard", number: 1, title: "Meet the Keyboard", promise: "Turn an unfamiliar instrument into one repeating pattern.", prerequisites: [], lessons: [
    lesson("one-white-key", "This Is a White Key", "experience", ["piano.keyboard.white-key"], "midi"),
    lesson("white-key-field", "The White Keys", "notice", ["piano.keyboard.white-key"], "midi"),
    lesson("black-key-groups", "Black Keys Come in Twos and Threes", "notice", ["piano.keyboard.black-key-groups"], "midi"),
    lesson("c-landmark", "Find C Beside the Two", "name", ["piano.note-navigation.c"], "midi"),
    lesson("natural-family", "C D E F G A B", "explore", ["piano.note-navigation.naturals"], "midi", "Play the natural-note family."),
    lesson("octave-pattern", "The Pattern Repeats", "connect", ["piano.keyboard.octave-pattern"], "midi"),
  ]},
  { id: "notes", number: 2, title: "Learn the Notes", promise: "Find notes by landmarks and relationships instead of counting blindly.", prerequisites: ["piano.note-navigation.c"], lessons: [
    lesson("c-fluency", "Find Every C", "practice", ["piano.note-navigation.c"], "midi"),
    lesson("neighbors-of-c", "B Is Left; D Is Right", "explore", ["piano.note-navigation.b", "piano.note-navigation.d"], "midi"),
    lesson("f-landmark", "F Sits Left of Three", "name", ["piano.note-navigation.f"], "midi"),
    lesson("natural-navigation", "Find Any Natural Note", "prove", ["piano.note-navigation.naturals"], "midi"),
    lesson("higher-lower", "Higher and Lower", "experience", ["piano.pitch.direction"], "midi", "Make a tiny rising and falling melody."),
    lesson("sharp-flat-neighbor", "The Key Between Two Names", "name", ["piano.note-navigation.accidentals"], "midi"),
  ]},
  { id: "hands", number: 3, title: "Your Hands", promise: "Make small, deliberate movements without pretending software can see technique.", prerequisites: ["piano.note-navigation.naturals"], lessons: [
    lesson("relaxed-setup", "Sit, Breathe, and Let the Hand Rest", "experience", ["piano.physical.setup-awareness"], "self-check"),
    lesson("one-finger-control", "Press and Release One Key", "notice", ["piano.control.note-release"], "mixed"),
    lesson("five-note-walk", "C D E F G", "practice", ["piano.control.five-note-ascending"], "midi"),
    lesson("return-home", "G F E D C", "practice", ["piano.control.five-note-descending"], "midi"),
    lesson("five-note-riff", "Your First Five-Note Riff", "connect", ["piano.control.five-note-pattern"], "midi", "Play a short call-and-response riff."),
  ]},
  { id: "rhythm", number: 4, title: "Pulse and Rhythm", promise: "Feel time first, then give its patterns names.", prerequisites: ["piano.control.note-release"], lessons: [
    lesson("feel-pulse", "Hear and Tap a Steady Pulse", "experience", ["piano.rhythm.steady-pulse"], "midi"),
    lesson("four-beat-groups", "Count Four Together", "notice", ["piano.rhythm.four-beat-group"], "midi"),
    lesson("long-short", "Long and Short Sounds", "experience", ["piano.rhythm.duration-contrast"], "midi"),
    lesson("quarter-half", "Now Name the Durations", "name", ["piano.rhythm.quarter-half"], "midi"),
    lesson("copy-rhythm", "Hear It, Then Copy It", "prove", ["piano.rhythm.reproduction"], "midi", "Perform a one-note rhythm groove."),
  ]},
  { id: "scales", number: 5, title: "Scales and Scale Degrees", promise: "Build a note family and hear how each member behaves.", prerequisites: ["piano.note-navigation.naturals", "piano.rhythm.steady-pulse"], lessons: [
    lesson("c-major-sound", "Hear the C Major Family", "experience", ["piano.scale.c-major.hearing"], "coaching"),
    lesson("whole-half", "Skip a Key or Take the Next", "notice", ["piano.interval.whole-half-step"], "midi"),
    lesson("build-major", "Build the Major Pattern", "explore", ["piano.scale.major-construction"], "midi"),
    lesson("c-major-up-down", "C Major Up and Down", "practice", ["piano.scale.c-major.ascending", "piano.scale.c-major.descending"], "midi"),
    lesson("scale-degrees", "Home, Tension, and Return", "connect", ["piano.scale.degree-function"], "coaching", "Improvise using 1, 2, 3, and 5."),
  ]},
  { id: "melodies", number: 6, title: "Melodies", promise: "Turn ordered pitches and rhythm into memorable ideas.", prerequisites: ["piano.scale.c-major.ascending", "piano.rhythm.reproduction"], lessons: [
    lesson("contour", "Melodies Rise, Fall, and Repeat", "notice", ["piano.melody.contour"], "coaching"),
    lesson("motif", "A Small Idea Can Be Enough", "name", ["piano.melody.motif"], "coaching"),
    lesson("echo-melody", "Echo a Three-Note Idea", "practice", ["piano.melody.ear-reproduction"], "midi"),
    lesson("change-one-thing", "Repeat It, Change One Thing", "explore", ["piano.melody.variation"], "coaching"),
    lesson("first-melody", "Make an Eight-Beat Melody", "connect", ["piano.melody.constrained-creation"], "coaching", "Create and replay an original melody."),
  ]},
  { id: "chords", number: 7, title: "Chords", promise: "Hear and build several notes acting as one sound.", prerequisites: ["piano.scale.degree-function"], lessons: [
    lesson("together", "More Than One Note at Once", "experience", ["piano.chord.simultaneity"], "midi"),
    lesson("thirds", "Build by Skipping Scale Notes", "notice", ["piano.chord.stacked-thirds"], "midi"),
    lesson("c-triad", "Build C Major", "practice", ["piano.chord.c-major.root"], "midi", "Play a full C major chord."),
    lesson("major-minor", "Bright and Darker Chord Color", "name", ["piano.chord.major-minor-quality"], "midi"),
    lesson("three-triads", "C, F, and G", "prove", ["piano.chord.primary-triads-c"], "midi"),
  ]},
  { id: "progressions", number: 8, title: "Chord Progressions", promise: "Make harmony leave home, travel, and return.", prerequisites: ["piano.chord.primary-triads-c", "piano.rhythm.four-beat-group"], lessons: [
    lesson("harmonic-motion", "One Chord Changes the Meaning of the Next", "experience", ["piano.harmony.progression-hearing"], "coaching"),
    lesson("one-four-five", "Home, Away, and Pulling Back", "name", ["piano.harmony.primary-function"], "coaching"),
    lesson("c-f-g-c", "Play C–F–G–C", "practice", ["piano.progression.c-f-g-c"], "midi", "Play a complete four-chord loop."),
    lesson("steady-changes", "Change Chords Without Losing the Pulse", "practice", ["piano.progression.timed-changes"], "midi"),
    lesson("choose-a-chord", "Which Chord Could Come Next?", "explore", ["piano.harmony.multiple-valid-continuations"], "coaching", "Choose and hear your own ending."),
  ]},
  { id: "two-hands", number: 9, title: "Two-Hand Coordination", promise: "Give one hand a role, then let both roles coexist.", prerequisites: ["piano.progression.timed-changes", "piano.melody.ear-reproduction"], lessons: [
    lesson("left-hand-roots", "Left Hand Plays the Home Notes", "experience", ["piano.two-hands.left-roots"], "midi"),
    lesson("shared-pulse", "Both Hands Share One Clock", "practice", ["piano.two-hands.shared-pulse"], "midi"),
    lesson("hold-and-move", "Hold Support While Melody Moves", "practice", ["piano.two-hands.hold-and-move"], "midi"),
    lesson("simple-accompaniment", "A Repeating Left-Hand Pattern", "explore", ["piano.accompaniment.basic-pattern"], "midi"),
    lesson("melody-and-support", "Play Melody over Support", "prove", ["piano.two-hands.melody-support"], "mixed", "Perform a two-hand eight-bar sketch."),
  ]},
  { id: "reading", number: 10, title: "Reading Music", promise: "Recognize notation as a map of sounds and motions you already know.", prerequisites: ["piano.note-navigation.naturals", "piano.rhythm.quarter-half"], lessons: [
    lesson("notation-purpose", "A Picture of Pitch and Time", "connect", ["piano.reading.notation-concept"], "self-check"),
    lesson("staff-direction", "Higher Marks, Higher Sounds", "notice", ["piano.reading.staff-direction"], "midi"),
    lesson("landmark-notes", "Middle C and Nearby Landmarks", "name", ["piano.reading.landmark-notes"], "midi"),
    lesson("rhythm-on-page", "Durations You Already Played", "connect", ["piano.reading.basic-durations"], "midi"),
    lesson("first-sight-read", "Read a Four-Measure Melody", "prove", ["piano.reading.beginner-sight-reading"], "mixed", "Sight-read a new short melody."),
  ]},
  { id: "expression", number: 11, title: "Expression", promise: "Shape when and how notes speak, not only which notes occur.", prerequisites: ["piano.two-hands.shared-pulse", "piano.reading.basic-durations"], lessons: [
    lesson("loud-soft", "Play the Same Note Two Ways", "experience", ["piano.expression.velocity-contrast"], "midi"),
    lesson("connected-detached", "Connected and Detached", "notice", ["piano.expression.articulation"], "midi"),
    lesson("phrase-shape", "Give a Phrase a Destination", "explore", ["piano.expression.phrasing"], "coaching"),
    lesson("pedal", "Let Sound Continue", "experience", ["piano.expression.sustain-pedal"], "mixed"),
    lesson("expressive-replay", "Make the Melody Say Something", "connect", ["piano.expression.intentional-performance"], "coaching", "Replay an earlier melody with a chosen character."),
  ]},
  { id: "piece", number: 12, title: "First Complete Piece", promise: "Bring navigation, rhythm, harmony, reading, and expression into one performance.", prerequisites: ["piano.two-hands.melody-support", "piano.reading.beginner-sight-reading", "piano.expression.intentional-performance"], lessons: [
    lesson("preview-piece", "Listen and Find the Familiar Parts", "notice", ["piano.piece.structure-recognition"], "self-check"),
    lesson("right-hand-section", "Learn the Melody in Phrases", "practice", ["piano.piece.right-hand"], "midi"),
    lesson("left-hand-section", "Learn the Support", "practice", ["piano.piece.left-hand"], "midi"),
    lesson("assemble", "Join Small Sections", "practice", ["piano.piece.assembly"], "mixed"),
    lesson("recover", "Keep Going after a Miss", "practice", ["piano.performance.recovery"], "coaching"),
    lesson("perform", "Play the Complete Piece", "prove", ["piano.performance.first-piece"], "mixed", "Perform and save the evidence from a complete piece."),
    lesson("reflect", "What Changed in Your Playing?", "connect", ["piano.learning.reflection"], "self-check"),
  ]},
];

export const PIANO_CONTINUATION_PATHS = [
  { id: "keyboard-fluency", title: "Keyboard Fluency", stages: ["Major and minor scales in all keys", "Arpeggios and inversions", "Transposition", "Sight-reading fluency", "Rhythmic independence and odd meter"] },
  { id: "harmony-accompaniment", title: "Harmony and Accompaniment", stages: ["Triads in every key", "Seventh and extended chords", "Voicings and voice leading", "Accompaniment styles", "Reharmonization and advanced harmony application"] },
  { id: "ear-creativity", title: "Ear and Creative Musicianship", stages: ["Interval and chord recognition", "Ear-to-keyboard reproduction", "Improvisation over changes", "Modes and melodic language", "Harmonization, composition, and performance projects"] },
] as const;
