import type { ExternalResource, Topic } from "../../types";
import { SS_WHAT_IS_SOUND_EXPERIENCE } from "@/content/lessons/ss-what-is-sound-experience";
import { SS_FREQUENCY_AMPLITUDE_EXPERIENCE } from "@/content/lessons/ss-frequency-amplitude-experience";
import { SS_WAVEFORMS_EXPERIENCE } from "@/content/lessons/ss-waveforms-experience";
import { SS_HARMONICS_NOISE_EXPERIENCE } from "@/content/lessons/ss-harmonics-noise-experience";
import { SS_WAVE_CANDY_EARS_EXPERIENCE } from "@/content/lessons/ss-wave-candy-ears-experience";

export const FL_STUDIO_STOCK_RESOURCE: ExternalResource = {
  id: "fl-studio-stock",
  name: "FL Studio (stock plugins)",
  url: "https://www.image-line.com/fl-studio/",
  cost: "free",
  platform: "any",
  installNotes:
    "Use any modern FL Studio edition with stock synths. Pilot lock: 3xOSC + Wave Candy only in Module 0. No third-party plugins required.",
};

/** Sound Synthesis — Module 0 pilot (fundamentals). Learner sequence step 1. */
export const ssM0PilotTopics: Topic[] = [
  {
    id: "ss-m0-what-is-sound",
    name: "What Is Sound?",
    objectives: ["SS-M0-O1"],
    estimatedStudyMinutes: 25,
    difficulty: "easy",
    practiceType: ["reading", "quiz", "flashcard"],
    lesson: {
      title: "What Is Sound?",
      content: `Sound is organized vibration in a medium — usually air. A speaker cone pushes molecules together (compression) and pulls them apart (rarefaction). Those pressure changes reach your eardrum. A synthesizer does not “make magic.” It decides a precise pattern of voltages and numbers that become cone motion that becomes pressure that becomes hearing.

Wave Candy in FL Studio draws that pressure pattern as a line. When the line wiggles faster, pitch rises. When the line gets taller, loudness rises. Keep Wave Candy open for the entire Module 0.

This track teaches concepts, not plugin tourism. Module 0 locks you to 3xOSC Init patches only. No presets. No Sytrus yet. If you cannot explain what the air is doing, the knobs will stay mysterious forever.`,
      experience: SS_WHAT_IS_SOUND_EXPERIENCE,
    },
    lightbulbMoment:
      "Wave Candy is not decoration — it is air pressure drawn on a screen.",
    keyFacts: [
      "Sound is pressure waves in air (or another medium)",
      "Speakers convert electricity into cone motion into air motion",
      "Oscillators generate repeating patterns that become those motions",
      "Module 0 uses 3xOSC Init only — no presets",
    ],
    teacherReflectionPrompt:
      "Explain sound to a friend without using the word “plugin.” Use speaker, air, and ear only.",
    goDeeper: [
      {
        id: "ss-m0-sound-physics",
        title: "Compression and rarefaction",
        kind: "physics",
        body: "Molecules do not travel from the speaker to your ear like thrown balls. They bump neighbors. Regions of higher pressure (compression) and lower pressure (rarefaction) travel as a wave. Your eardrum follows that pressure.",
        flReconnect:
          "Load 3xOSC Init, sine only, open Wave Candy — watch the line as pressure, not as “a pretty graph.”",
      },
    ],
    commonMistakes: [
      "Thinking the synth invents sound without a speaker or headphones",
      "Skipping Wave Candy and guessing from memory of presets",
    ],
    realWorldTraps: [
      "YouTube tutorials jump to Serum — ignore them for Module 0",
    ],
    quiz: [
      {
        id: "ss-m0-what-is-sound-q1",
        prompt: "What does a speaker primarily convert into air motion?",
        choices: [
          { id: "a", text: "MIDI notes into sheet music" },
          { id: "b", text: "Electrical signals into cone motion that moves air" },
          { id: "c", text: "Wi-Fi packets into headphones" },
          { id: "d", text: "Presets into emotions" },
        ],
        correctChoiceId: "b",
        explanation:
          "The cone moves because of electromagnetic force from the electrical signal — that motion pushes air.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-what-is-sound-q2",
        prompt: "In this course, Wave Candy is mainly used to…",
        choices: [
          { id: "a", text: "Master tracks automatically" },
          { id: "b", text: "Make the GUI look expensive" },
          { id: "c", text: "See the pressure/waveform pattern you are hearing" },
          { id: "d", text: "Replace your monitors" },
        ],
        correctChoiceId: "c",
        explanation: "Wave Candy is a visual ear — connect eyes to what you hear.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-what-is-sound-q3",
        prompt: "Module 0 plugin lock is…",
        choices: [
          { id: "a", text: "Serum only" },
          { id: "b", text: "3xOSC Init (+ Wave Candy) — no presets" },
          { id: "c", text: "Any stock preset bank" },
          { id: "d", text: "Sytrus FM only" },
        ],
        correctChoiceId: "b",
        explanation: "Fundamentals first. Sytrus and friends come later.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m0-what-is-sound-f1",
        front: "What is sound, in one sentence?",
        back: "Organized pressure waves (usually in air) that reach the ear.",
      },
      {
        id: "ss-m0-what-is-sound-f2",
        front: "What is an oscillator?",
        back: "Something that repeats — in a synth, a waveform generator.",
      },
    ],
  },
  {
    id: "ss-m0-frequency-amplitude",
    name: "Frequency & Amplitude",
    objectives: ["SS-M0-O2"],
    prerequisites: ["ss-m0-what-is-sound"],
    estimatedStudyMinutes: 25,
    difficulty: "easy",
    practiceType: ["reading", "quiz", "flashcard"],
    lesson: {
      title: "Frequency & Amplitude",
      content: `Every repeating wave has frequency and amplitude. Frequency is how many cycles happen per second — you hear it as pitch. Amplitude is how large the swing is — related to loudness.

In 3xOSC, change pitch and watch Wave Candy pack more cycles into the same window. Change channel volume and watch the line get shorter without changing how fast it wiggles.

Habit: before every knob turn, predict pitch and loudness separately. If both change when you meant to change one, you moved the wrong control.`,
      experience: SS_FREQUENCY_AMPLITUDE_EXPERIENCE,
    },
    lightbulbMoment:
      "Pitch and loudness are independent — train yourself to change one at a time.",
    keyFacts: [
      "Frequency ↔ pitch",
      "Amplitude ↔ loudness (related, not identical to perceived volume)",
      "Predict, then change one parameter",
      "Wave Candy confirms what your ears report",
    ],
    teacherReflectionPrompt:
      "Describe a time you confused “brighter” with “louder.” How would Wave Candy settle the argument?",
    goDeeper: [
      {
        id: "ss-m0-freq-math",
        title: "Cycles per second",
        kind: "math",
        body: "Frequency is counted in hertz (Hz) — cycles per second. 440 Hz is the A many orchestras tune to. You do not need to memorize tables; you need to feel that faster wiggles = higher pitch.",
        flReconnect:
          "In 3xOSC, play a note, raise coarse pitch one octave, and count how the Wave Candy cycles densify.",
      },
    ],
    quiz: [
      {
        id: "ss-m0-frequency-amplitude-q1",
        prompt: "Raising frequency while keeping amplitude the same primarily changes…",
        choices: [
          { id: "a", text: "Loudness only" },
          { id: "b", text: "Pitch" },
          { id: "c", text: "Stereo width" },
          { id: "d", text: "BPM" },
        ],
        correctChoiceId: "b",
        explanation: "Frequency maps to pitch when amplitude is unchanged.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-frequency-amplitude-q2",
        prompt: "On Wave Candy, a taller waveform (same shape) usually means…",
        choices: [
          { id: "a", text: "Higher pitch" },
          { id: "b", text: "Larger amplitude / louder signal" },
          { id: "c", text: "More reverb" },
          { id: "d", text: "A different key signature" },
        ],
        correctChoiceId: "b",
        explanation: "Height tracks amplitude. Spacing of cycles tracks frequency.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-frequency-amplitude-q3",
        prompt: "Best practice before turning a knob?",
        choices: [
          { id: "a", text: "Load a preset first" },
          { id: "b", text: "Change three knobs at once" },
          { id: "c", text: "Predict the result, then change one thing" },
          { id: "d", text: "Close Wave Candy so you are not biased" },
        ],
        correctChoiceId: "c",
        explanation: "Predict → one change → verify. That is the course loop.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m0-frequency-amplitude-f1",
        front: "Frequency ↔ ?",
        back: "Pitch (how fast the wave repeats).",
      },
      {
        id: "ss-m0-frequency-amplitude-f2",
        front: "Amplitude ↔ ?",
        back: "Size of the swing — related to loudness.",
      },
    ],
  },
  {
    id: "ss-m0-waveforms",
    name: "Five Shapes: Sine → Noise",
    objectives: ["SS-M0-O3"],
    prerequisites: ["ss-m0-frequency-amplitude"],
    estimatedStudyMinutes: 35,
    difficulty: "easy",
    practiceType: ["reading", "quiz", "flashcard"],
    lesson: {
      title: "Five Shapes: Sine → Noise",
      content: `Sine, triangle, saw, square, and noise are the alphabet of synthesis. Same pitch and loudness can still sound totally different because the shape encodes different harmonics.

Drill in 3xOSC: solo one oscillator, flip shapes, keep pitch fixed, match loudness roughly, and name each shape with your eyes closed. If you need Wave Candy as training wheels, use it — then cover it and retest.

No presets. If a tutorial tells you to open Serum this week, close the tab.`,
      experience: SS_WAVEFORMS_EXPERIENCE,
    },
    lightbulbMoment:
      "If you cannot name sine vs saw by ear, you are not ready for fancy synths.",
    keyFacts: [
      "Sine = pure / soft",
      "Saw = bright / buzzy (many harmonics)",
      "Square = hollow (odd harmonics)",
      "Triangle = softer than square",
      "Noise = no stable musical pitch",
    ],
    teacherReflectionPrompt:
      "Record yourself naming five shapes from Init 3xOSC with eyes closed. Where did you hesitate?",
    goDeeper: [
      {
        id: "ss-m0-wave-history",
        title: "Why analog synths loved saws",
        kind: "history",
        body: "Classic subtractive synths started with rich waves (often saw or pulse) because filters need something to carve. A pure sine has almost nothing to remove.",
        flReconnect:
          "Compare sine vs saw through a closing low-pass later in M1 — for now just A/B the raw shapes in 3xOSC.",
      },
    ],
    quiz: [
      {
        id: "ss-m0-waveforms-q1",
        prompt: "Which waveform is typically the brightest / buzziest?",
        choices: [
          { id: "a", text: "Sine" },
          { id: "b", text: "Saw" },
          { id: "c", text: "Triangle" },
          { id: "d", text: "Silence" },
        ],
        correctChoiceId: "b",
        explanation: "Saw carries many harmonics — lots of high-frequency energy.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-waveforms-q2",
        prompt: "Noise is best described as…",
        choices: [
          { id: "a", text: "A pure musical pitch" },
          { id: "b", text: "Random energy across many frequencies" },
          { id: "c", text: "Only odd harmonics" },
          { id: "d", text: "A type of reverb" },
        ],
        correctChoiceId: "b",
        explanation: "Noise has no stable fundamental the way a saw does.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-waveforms-q3",
        prompt: "Module 0 forbids…",
        choices: [
          { id: "a", text: "Wave Candy" },
          { id: "b", text: "Headphones" },
          { id: "c", text: "Preset browsing / third-party synth tourism" },
          { id: "d", text: "Sine waves" },
        ],
        correctChoiceId: "c",
        explanation: "Concepts first. Presets hide the shapes.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m0-waveforms-f1",
        front: "Sine vs saw in one contrast?",
        back: "Sine = pure; saw = bright with many harmonics.",
      },
      {
        id: "ss-m0-waveforms-f2",
        front: "Square wave character?",
        back: "Hollow / woody — mainly odd harmonics.",
      },
    ],
  },
  {
    id: "ss-m0-harmonics-noise",
    name: "Harmonics & Noise",
    objectives: ["SS-M0-O4"],
    prerequisites: ["ss-m0-waveforms"],
    estimatedStudyMinutes: 30,
    difficulty: "medium",
    practiceType: ["reading", "quiz", "flashcard"],
    lesson: {
      title: "Harmonics & Noise",
      content: `Timbre is mostly harmonic recipe. The fundamental is the pitch you name. Harmonics (overtones) ride above it and make a saw sound different from a sine even at the same note.

Subtractive synthesis starts with a rich recipe and erases parts with a filter. Additive synthesis builds the recipe from sines. Same physics, opposite workflows — you will meet additive formally later.

Noise is the odd one out: energy without a clear pitch. Use it on purpose, not by accident.`,
      experience: SS_HARMONICS_NOISE_EXPERIENCE,
    },
    lightbulbMoment:
      "A saw is not a different species — it is a pile of quieter sines.",
    keyFacts: [
      "Fundamental = named pitch",
      "Harmonics shape timbre",
      "Rich waves give filters something to carve",
      "Noise ≠ pitched oscillator",
    ],
    teacherReflectionPrompt:
      "Explain “timbre” using only the words fundamental, harmonic, and filter.",
    goDeeper: [
      {
        id: "ss-m0-fourier-seed",
        title: "Fourier intuition (no homework)",
        kind: "math",
        body: "Any steady pitched sound can be built from sine waves at related frequencies. You do not need the integral. You need the LEGO picture — and ears.",
        flReconnect:
          "In 3xOSC, A/B sine vs saw at the same pitch and imagine the missing partials appearing when you switch to saw.",
      },
    ],
    quiz: [
      {
        id: "ss-m0-harmonics-noise-q1",
        prompt: "The fundamental is…",
        choices: [
          { id: "a", text: "Always noise" },
          { id: "b", text: "The lowest main frequency — the pitch you name" },
          { id: "c", text: "Only present in square waves" },
          { id: "d", text: "A type of compressor" },
        ],
        correctChoiceId: "b",
        explanation: "Fundamental = the pitch label; harmonics color it.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-harmonics-noise-q2",
        prompt: "Why do subtractive synths like rich waves?",
        choices: [
          { id: "a", text: "Filters need harmonics to remove" },
          { id: "b", text: "Sines cannot be pitched" },
          { id: "c", text: "Noise is illegal" },
          { id: "d", text: "MIDI requires saws" },
        ],
        correctChoiceId: "a",
        explanation: "A filter carving a sine has almost nothing to sculpt.",
        difficulty: "medium",
      },
      {
        id: "ss-m0-harmonics-noise-q3",
        prompt: "Noise is useful when you want…",
        choices: [
          { id: "a", text: "A perfect lead melody pitch" },
          { id: "b", text: "Texture, breath, dirt, or unpitched energy" },
          { id: "c", text: "Only odd harmonics" },
          { id: "d", text: "Lower latency" },
        ],
        correctChoiceId: "b",
        explanation: "Noise spreads energy — great for texture, not tuneful leads.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m0-harmonics-noise-f1",
        front: "Fundamental vs harmonic?",
        back: "Fundamental = pitch you name; harmonics = higher partials that color timbre.",
      },
      {
        id: "ss-m0-harmonics-noise-f2",
        front: "Subtractive vs additive (one line)?",
        back: "Subtractive erases from a rich wave; additive builds from sines.",
      },
    ],
  },
  {
    id: "ss-m0-wave-candy-ears",
    name: "See What You Hear",
    objectives: ["SS-M0-O5"],
    prerequisites: ["ss-m0-harmonics-noise"],
    estimatedStudyMinutes: 35,
    difficulty: "easy",
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    externalResources: [FL_STUDIO_STOCK_RESOURCE],
    lesson: {
      title: "See What You Hear",
      content: `Park Wave Candy on the mixer track fed by 3xOSC. Flip shapes. Match loudness. Predict spectrum spikes before you look.

This topic ends Module 0 with paired challenges: Recreate a simple ear-training target, and Interpret a creative prompt using only waveforms and volume — still no filters required, but you may peek at M1 if you finish early.

When teacher audio files arrive, they will live under /media/sound-synthesis/m0/. Until then, your renders and Wave Candy are the source of truth.`,
      experience: SS_WAVE_CANDY_EARS_EXPERIENCE,
    },
    lightbulbMoment:
      "If loudness is unmatched, your brain will lie about which shape “sounds better.”",
    keyFacts: [
      "Always pair ears with Wave Candy in this track",
      "Match loudness when comparing",
      "Spectrum view shows harmonic piles",
      "Recreate = craft; Interpret = imagination",
    ],
    teacherReflectionPrompt:
      "What did Wave Candy show you that your ears missed the first time?",
    goDeeper: [
      {
        id: "ss-m0-loudness-psycho",
        title: "Louder is not better",
        kind: "philosophy",
        body: "Humans rate louder clips as “better” even when the only change is gain. Sound design comparisons demand honesty about level.",
        flReconnect:
          "A/B sine vs saw twice: once with saw much louder, once level-matched. Notice how your preference flips.",
      },
    ],
    assignments: [
      {
        id: "ss-lab-recreate-sine-vs-saw",
        title: "Recreate: Sine vs saw identity",
        type: "external-lab",
        challengeKind: "recreate",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 20,
        order: 1,
        relatedTopicIds: ["ss-m0-wave-candy-ears"],
        referenceAudioId: "m0-sine-vs-saw-reference",
        audibleTraitRubric: [
          "One clip is clearly a pure sine (soft, no buzz)",
          "One clip is clearly a saw (bright buzz) at the same pitch",
          "Loudness is roughly matched between clips",
          "Wave Candy confirms one spike vs many",
        ],
        instructions: `In FL Studio (3xOSC Init only):

1. Render a short sine note and a short saw note at the same MIDI note.
2. Match loudness roughly.
3. Self-check against the audible traits list.
4. Optional: screenshot Wave Candy for each.

No upload. No presets. Save locally for your records.`,
        completionCriteria: [
          "Rendered sine and saw at the same pitch",
          "Checked all audible traits (self-eval)",
          "Noted one thing that still felt unclear",
        ],
      },
      {
        id: "ss-lab-interpret-electricity",
        title: "Interpret: Electricity",
        type: "external-lab",
        challengeKind: "interpret",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 25,
        order: 2,
        relatedTopicIds: ["ss-m0-wave-candy-ears"],
        creativePrompt: "Electricity",
        reflectionRubric: [
          "Named which waveform(s) you chose and why",
          "Explained amplitude / pitch gesture (if any)",
          "Said what “electricity” meant to you in sound",
        ],
        instructions: `Design a short sound that feels like electricity using only 3xOSC shapes, pitch, and volume (Module 0 lock).

No correct answer. Justify every choice in a short note to yourself.

Render locally. No upload.`,
        completionCriteria: [
          "Saved a local render from Init (no preset)",
          "Wrote justification covering waveform and gesture",
        ],
      },
    ],
    quiz: [
      {
        id: "ss-m0-wave-candy-ears-q1",
        prompt: "When comparing two waveforms, you should…",
        choices: [
          { id: "a", text: "Make one much louder so the difference is obvious" },
          { id: "b", text: "Roughly match loudness so timbre is the variable" },
          { id: "c", text: "Always add reverb" },
          { id: "d", text: "Close your eyes and never use Wave Candy" },
        ],
        correctChoiceId: "b",
        explanation: "Unmatched loudness confuses preference with level.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-wave-candy-ears-q2",
        prompt: "Recreate challenges train…",
        choices: [
          { id: "a", text: "Only poetry skills" },
          { id: "b", text: "Matching recognizable audible traits (craft)" },
          { id: "c", text: "Buying plugins" },
          { id: "d", text: "Ignoring Wave Candy" },
        ],
        correctChoiceId: "b",
        explanation: "Recreate = craft against a trait checklist.",
        difficulty: "easy",
      },
      {
        id: "ss-m0-wave-candy-ears-q3",
        prompt: "A sine on a spectrum view ideally shows…",
        choices: [
          { id: "a", text: "A staircase of many strong partials" },
          { id: "b", text: "Mostly one main spike" },
          { id: "c", text: "Only stereo width meters" },
          { id: "d", text: "Nothing — sines are invisible" },
        ],
        correctChoiceId: "b",
        explanation: "Sine ≈ one frequency → one spectral spike.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m0-wave-candy-ears-f1",
        front: "Recreate vs Interpret?",
        back: "Recreate = match traits (craft). Interpret = express a prompt (imagination).",
      },
      {
        id: "ss-m0-wave-candy-ears-f2",
        front: "Why match loudness when A/B-ing?",
        back: "So your brain compares timbre, not level.",
      },
    ],
  },
];
