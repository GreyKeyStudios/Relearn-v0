import type { PerformanceExercise } from "@/lib/interactive-learning/types";

export const PIANO_FOUNDATIONS_LESSONS = [
  { id: "keyboard", number: 1, title: "Meet the Keyboard", state: "active" },
  { id: "notes", number: 2, title: "Learn the Notes", state: "active" },
  { id: "hands", number: 3, title: "Your Hands", state: "active" },
  { id: "rhythm", number: 4, title: "Pulse and Rhythm", state: "planned" },
  { id: "scales", number: 5, title: "Scales and Scale Degrees", state: "planned" },
  { id: "melodies", number: 6, title: "Melodies", state: "planned" },
  { id: "chords", number: 7, title: "Chords", state: "planned" },
  { id: "progressions", number: 8, title: "Chord Progressions", state: "planned" },
  { id: "two-hands", number: 9, title: "Two-Hand Coordination", state: "planned" },
  { id: "reading", number: 10, title: "Reading Music", state: "planned" },
  { id: "expression", number: 11, title: "Expression", state: "planned" },
  { id: "piece", number: 12, title: "First Complete Piece", state: "planned" },
  { id: "grey-key", number: 13, title: "The Grey Key", state: "mastery-locked" },
] as const;

export const PIANO_PATTERN_EXERCISES: PerformanceExercise[] = [
  {
    id: "first-signal",
    kind: "play-set",
    prompt: "Play any key. ReLearn will show you what the keyboard sent.",
  },
  {
    id: "find-c",
    kind: "play-pitch-class",
    prompt: "Find a C. Play any C on your keyboard.",
    hint: "C is the white key immediately to the left of a group of two black keys.",
    targetPitchClasses: [0],
  },
  {
    id: "find-another-c",
    kind: "play-pitch-class",
    prompt: "Find another C—higher or lower than the first one.",
    hint: "Look for the same two-black-key landmark somewhere else.",
    targetPitchClasses: [0],
  },
];

export const PIANO_FOUNDATIONS_UNITS = [
  { id: "keyboard", title: "Meet the Keyboard", outcome: "See one repeating twelve-note pattern.", status: "playable" },
  { id: "notes", title: "Learn the Notes", outcome: "Navigate natural notes and nearby sharps or flats.", status: "playable" },
  { id: "hands", title: "Your Hands", outcome: "Develop relaxed, deliberate physical control.", status: "designed" },
  { id: "rhythm", title: "Pulse and Rhythm", outcome: "Feel, copy, and maintain a steady pulse.", status: "designed" },
  { id: "scales", title: "Scales and Scale Degrees", outcome: "Build and hear ordered note families.", status: "designed" },
  { id: "melodies", title: "Melodies", outcome: "Play and reshape short musical ideas.", status: "designed" },
  { id: "chords", title: "Chords", outcome: "Build and recognize useful triads.", status: "designed" },
  { id: "progressions", title: "Chord Progressions", outcome: "Connect chords into musical motion.", status: "designed" },
  { id: "two-hands", title: "Two-Hand Coordination", outcome: "Combine melody and support.", status: "designed" },
  { id: "reading", title: "Reading Music", outcome: "Connect sound and touch to notation.", status: "designed" },
  { id: "expression", title: "Expression", outcome: "Shape dynamics, articulation, and pedal.", status: "designed" },
  { id: "piece", title: "First Complete Piece", outcome: "Integrate the foundations into music.", status: "designed" },
] as const;

export const PRACTICE_EXERCISES: PerformanceExercise[] = [
  {
    id: "practice-find-c",
    kind: "play-pitch-class",
    prompt: "Find a C without using the note labels.",
    hint: "C sits immediately left of each group of two black keys.",
    targetPitchClasses: [0],
    competency: { id: "piano.note-navigation.c", label: "C landmark navigation" },
    evaluationMode: "objective",
  },
  {
    id: "practice-c-major-up",
    kind: "play-scale",
    prompt: "Play C major upward: C D E F G A B C.",
    hint: "Use only the white keys, beginning and ending on C.",
    targetNotes: [60, 62, 64, 65, 67, 69, 71, 72],
    ordered: true,
    competency: { id: "piano.scale.c-major.ascending", label: "C major ascending", prerequisites: ["piano.note-navigation.c"] },
    evaluationMode: "objective",
  },
  {
    id: "practice-steady-pulse",
    kind: "rhythm",
    prompt: "Tap any one key four times with an even pulse.",
    hint: "Count 1, 2, 3, 4 at about two counts per second. The key itself does not matter.",
    targetIntervalsMs: [500, 500, 500],
    toleranceMs: 170,
    competency: { id: "piano.rhythm.steady-pulse", label: "Steady pulse" },
    evaluationMode: "objective",
  },
];
