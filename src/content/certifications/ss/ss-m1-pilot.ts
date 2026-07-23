import type { Topic } from "../../types";
import { FL_STUDIO_STOCK_RESOURCE } from "./ss-m0-pilot";
import { SS_SIGNAL_PATH_EXPERIENCE } from "@/content/lessons/ss-signal-path-experience";
import { SS_FILTER_RESONANCE_EXPERIENCE } from "@/content/lessons/ss-filter-resonance-experience";
import { SS_ADSR_ENVELOPE_EXPERIENCE } from "@/content/lessons/ss-adsr-envelope-experience";

/** Sound Synthesis — Module 1 pilot (subtractive). Learner sequence step 2. */
export const ssM1PilotTopics: Topic[] = [
  {
    id: "ss-m1-signal-path",
    name: "Osc → Filter → Amp",
    objectives: ["SS-M1-O1"],
    prerequisites: ["ss-m0-wave-candy-ears"],
    estimatedStudyMinutes: 30,
    difficulty: "easy",
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    externalResources: [FL_STUDIO_STOCK_RESOURCE],
    lesson: {
      title: "Osc → Filter → Amp",
      content: `Subtractive synthesis is a pipeline. Start with a rich oscillator (usually saw or square). Remove frequencies with a filter. Shape loudness over time with an amplifier envelope.

In FL Studio for this pilot: 3xOSC Init into Fruity Filter (or a channel filter), Wave Candy on the mixer. Still no presets. Still no Sytrus.

If you skip the pipeline picture, every knob feels random. If you keep Source → Shape → Filter → Amp → Hear in mind, each control has a job.`,
      experience: SS_SIGNAL_PATH_EXPERIENCE,
    },
    lightbulbMoment:
      "Bass is not a preset category — it is a rich wave, carved and enveloped.",
    keyFacts: [
      "Subtractive = remove frequencies from a rich source",
      "Order matters: osc → filter → amp",
      "Init patches only — no preset tourism",
      "Wave Candy stays on the chain",
    ],
    teacherReflectionPrompt:
      "Draw the signal path from memory, then open your FL project and point to each stage.",
    goDeeper: [
      {
        id: "ss-m1-path-history",
        title: "Why Moog-style synths felt powerful",
        kind: "history",
        body: "Classic analog subtractive synths made the pipeline tactile: oscillators, filter with resonance, envelopes. Producers learned by patching the path, not by browsing folders of presets.",
        flReconnect:
          "Build the path once from Init: 3xOSC saw → Fruity Filter low-pass → hear. Label the stages out loud.",
      },
    ],
    assignments: [
      {
        id: "ss-lab-recreate-muted-saw",
        title: "Recreate: Open saw → muted saw",
        type: "external-lab",
        challengeKind: "recreate",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 20,
        order: 1,
        relatedTopicIds: ["ss-m1-signal-path"],
        audibleTraitRubric: [
          "Starts as a bright saw",
          "Ends darker after low-pass closes (same pitch)",
          "No preset used — Init path only",
        ],
        instructions: `Build osc → filter from Init. Record/render a short phrase that starts open and becomes muted via cutoff only.

Self-eval against traits. No upload.`,
        completionCriteria: [
          "Demonstrated open vs closed low-pass on a saw",
          "Checked audible traits",
        ],
      },
      {
        id: "ss-lab-interpret-rust",
        title: "Interpret: Rust",
        type: "external-lab",
        challengeKind: "interpret",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 25,
        order: 2,
        relatedTopicIds: ["ss-m1-signal-path"],
        creativePrompt: "Rust",
        reflectionRubric: [
          "Justified oscillator choice",
          "Justified filter position / movement",
          "Explained what “rust” meant sonically",
        ],
        instructions: `Design a sound that feels like rust using the subtractive path (osc → filter → amp as available).

No correct spectrum. Justify choices. Render locally.`,
        completionCriteria: [
          "Local render from Init",
          "Written justification for osc + filter choices",
        ],
      },
    ],
    quiz: [
      {
        id: "ss-m1-signal-path-q1",
        prompt: "In subtractive synthesis, the filter’s job is to…",
        choices: [
          { id: "a", text: "Add brand-new random MIDI notes" },
          { id: "b", text: "Remove (or reduce) some frequencies from a richer source" },
          { id: "c", text: "Replace the oscillator entirely" },
          { id: "d", text: "Set the project BPM" },
        ],
        correctChoiceId: "b",
        explanation: "Subtractive = carve. The osc provides the clay.",
        difficulty: "easy",
      },
      {
        id: "ss-m1-signal-path-q2",
        prompt: "Recommended pilot order of stages?",
        choices: [
          { id: "a", text: "Amp → Osc → Filter" },
          { id: "b", text: "Osc → Filter → Amp" },
          { id: "c", text: "Reverb → Osc → Delay" },
          { id: "d", text: "Preset → Mastering chain" },
        ],
        correctChoiceId: "b",
        explanation: "Source, then sculpt, then shape loudness over time.",
        difficulty: "easy",
      },
      {
        id: "ss-m1-signal-path-q3",
        prompt: "Why start from Init?",
        choices: [
          { id: "a", text: "So every sound change is a choice you understand" },
          { id: "b", text: "Init patches sound better than presets always" },
          { id: "c", text: "FL Studio requires it legally" },
          { id: "d", text: "Wave Candy only works on Init" },
        ],
        correctChoiceId: "a",
        explanation: "Presets hide causality. Init keeps learning honest.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m1-signal-path-f1",
        front: "Subtractive one-liner?",
        back: "Start rich, remove frequencies, shape amp over time.",
      },
      {
        id: "ss-m1-signal-path-f2",
        front: "Signal path stages?",
        back: "Source → Shape → Filter → Amp → Hear.",
      },
    ],
  },
  {
    id: "ss-m1-filter-resonance",
    name: "Filters & Resonance",
    objectives: ["SS-M1-O2"],
    prerequisites: ["ss-m1-signal-path"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    externalResources: [FL_STUDIO_STOCK_RESOURCE],
    lesson: {
      title: "Filters & Resonance",
      content: `Cutoff chooses where a filter bites. On a low-pass, lowering cutoff darkens a saw. Resonance boosts energy near the cutoff — the whistle that makes classic sweeps addictive.

Teacher demo clips for this concept use the locked naming scheme under /media/sound-synthesis/m1/. Until WAVs exist, the in-app player soft-fails and you perform the ladder yourself in FL: baseline open saw → closing low-pass → same sweep with high resonance → short musical phrase.

Match loudness across comparisons. Resonance is not “make it louder.”`,
      experience: SS_FILTER_RESONANCE_EXPERIENCE,
    },
    lightbulbMoment:
      "Resonance is a spotlight on the cutoff edge — not a volume knob.",
    keyFacts: [
      "Low-pass removes highs as cutoff falls",
      "Resonance emphasizes near cutoff",
      "Predict before sweeping",
      "Loudness-match A/B comparisons",
    ],
    teacherReflectionPrompt:
      "Describe resonance without saying the word “resonance.” Use coffee filter + whistle.",
    goDeeper: [
      {
        id: "ss-m1-res-physics",
        title: "What resonance is physically",
        kind: "physics",
        body: "Systems like to ring at certain frequencies. Turning up resonance pushes the filter toward that ringing behavior near cutoff — useful musically, unstable if extreme.",
        flReconnect:
          "On Fruity Filter, raise Res carefully on a closing saw sweep and stop before it screams into self-oscillation chaos.",
      },
      {
        id: "ss-m1-303-history",
        title: "The TB-303 accident",
        kind: "history",
        body: "The TB-303 failed as a bass guitar replacement, then its squelchy resonant filter helped invent acid house. Failure became a genre.",
        flReconnect:
          "Imitate the idea (not a perfect clone): saw → low-pass → high resonance → slow cutoff move on a simple riff.",
      },
    ],
    assignments: [
      {
        id: "ss-lab-recreate-resonant-sweep",
        title: "Recreate: Resonant low-pass sweep",
        type: "external-lab",
        challengeKind: "recreate",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 25,
        order: 1,
        relatedTopicIds: ["ss-m1-filter-resonance"],
        referenceAudioId: "m1-filter-resonance-d-musical",
        audibleTraitRubric: [
          "Clear darkening as cutoff falls",
          "Audible resonant peak / whistle when Res is high",
          "Not just a volume swell — timbre changes",
          "Roughly controlled (not accidental clipping chaos)",
        ],
        instructions: `Perform the A/B/C/D ladder yourself in FL if demos are missing:

A open saw · B closing LPF low Res · C same with high Res · D short musical use.

Self-eval traits. No upload.`,
        completionCriteria: [
          "Completed a resonant sweep from Init",
          "Checked audible traits",
          "Noted one trait still weak",
        ],
      },
      {
        id: "ss-lab-interpret-alien-language",
        title: "Interpret: Alien language",
        type: "external-lab",
        challengeKind: "interpret",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 25,
        order: 2,
        relatedTopicIds: ["ss-m1-filter-resonance"],
        creativePrompt: "An alien language",
        reflectionRubric: [
          "Explained filter/resonance choices",
          "Explained rhythmic or gestural idea",
          "Stated what “language” meant in sound",
        ],
        instructions: `Use filter and resonance as “mouth shapes” for a non-verbal alien phrase.

Justify design choices. Render locally. No correct answer.`,
        completionCriteria: [
          "Local render",
          "Reflection covers filter + intent",
        ],
      },
    ],
    quiz: [
      {
        id: "ss-m1-filter-resonance-q1",
        prompt: "On a low-pass, lowering cutoff typically makes a saw…",
        choices: [
          { id: "a", text: "Brighter" },
          { id: "b", text: "Darker / duller" },
          { id: "c", text: "Wider in stereo automatically" },
          { id: "d", text: "Turn into noise" },
        ],
        correctChoiceId: "b",
        explanation: "Low-pass removes highs — the sound darkens.",
        difficulty: "easy",
      },
      {
        id: "ss-m1-filter-resonance-q2",
        prompt: "Resonance primarily…",
        choices: [
          { id: "a", text: "Boosts energy near the cutoff" },
          { id: "b", text: "Sets project sample rate" },
          { id: "c", text: "Replaces the oscillator waveform" },
          { id: "d", text: "Exports stems" },
        ],
        correctChoiceId: "a",
        explanation: "Res peaks near cutoff — the classic whistle.",
        difficulty: "easy",
      },
      {
        id: "ss-m1-filter-resonance-q3",
        prompt: "Before listening to a demo ladder you should…",
        choices: [
          { id: "a", text: "Skip to the exaggerated clip" },
          { id: "b", text: "Predict what will change" },
          { id: "c", text: "Disable Wave Candy forever" },
          { id: "d", text: "Load a factory preset" },
        ],
        correctChoiceId: "b",
        explanation: "Predict-before-hear is mandatory pedagogy here.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m1-filter-resonance-f1",
        front: "Cutoff vs resonance?",
        back: "Cutoff = where it bites; resonance = emphasis near that edge.",
      },
      {
        id: "ss-m1-filter-resonance-f2",
        front: "Low-pass does what?",
        back: "Lets lows through; reduces highs.",
      },
    ],
  },
  {
    id: "ss-m1-adsr-envelope",
    name: "ADSR Envelopes",
    objectives: ["SS-M1-O3"],
    prerequisites: ["ss-m1-filter-resonance"],
    estimatedStudyMinutes: 40,
    difficulty: "medium",
    practiceType: ["reading", "quiz", "flashcard", "external-lab"],
    externalResources: [FL_STUDIO_STOCK_RESOURCE],
    lesson: {
      title: "ADSR Envelopes",
      content: `ADSR is a volume story: Attack, Decay, Sustain, Release. The same filtered saw becomes a pluck, stab, or pad when the envelope changes.

Dial one stage at a time. Predict a pluck (fast attack, short decay, low sustain, short release) before you touch the amp envelope.

Filter envelopes (moving cutoff over time) are the next power-up — try them after amp ADSR feels obvious. LFO and deeper modulation wait for post-pilot topics.`,
      experience: SS_ADSR_ENVELOPE_EXPERIENCE,
    },
    lightbulbMoment:
      "If two basses use the same filter but different ADSR, they are different instruments.",
    keyFacts: [
      "Attack = fade in",
      "Decay = fall to sustain",
      "Sustain = level while held",
      "Release = fade after note-off",
      "Change one stage at a time",
    ],
    teacherReflectionPrompt:
      "Teach ADSR using a door: how fast it opens, how it settles, how long it stays, how it closes.",
    goDeeper: [
      {
        id: "ss-m1-adsr-dsp",
        title: "Envelopes are control signals",
        kind: "dsp",
        body: "An envelope is a slow control voltage (or its digital cousin) that morphs another parameter over time. Amp envelopes ride loudness. Filter envelopes ride cutoff. Same idea, different destination.",
        flReconnect:
          "After amp ADSR clicks, route or enable a filter envelope on cutoff for a closing “dowww” after the hit.",
      },
    ],
    whenThisFails: [
      "If notes click: lengthen attack slightly or check for DC/noise at note start",
      "If notes never die: shorten release / lower sustain",
    ],
    assignments: [
      {
        id: "ss-lab-recreate-pluck-vs-pad",
        title: "Recreate: Pluck vs pad",
        type: "external-lab",
        challengeKind: "recreate",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 25,
        order: 1,
        relatedTopicIds: ["ss-m1-adsr-envelope"],
        audibleTraitRubric: [
          "Pluck: fast attack, little sustain, short release",
          "Pad: slower attack and/or longer release, audible sustain body",
          "Same oscillator/filter family — envelope is the main difference",
        ],
        instructions: `From Init subtractive path, create two versions of the same tone: pluck and pad — envelope only as the intended difference.

Self-eval traits. No upload.`,
        completionCriteria: [
          "Rendered or demonstrated both envelopes",
          "Checked audible traits",
        ],
      },
      {
        id: "ss-lab-interpret-loneliness",
        title: "Interpret: Loneliness",
        type: "external-lab",
        challengeKind: "interpret",
        externalResourceId: "fl-studio-stock",
        estimatedMinutes: 30,
        order: 2,
        relatedTopicIds: ["ss-m1-adsr-envelope"],
        creativePrompt: "Loneliness",
        reflectionRubric: [
          "Linked envelope choices to the feeling",
          "Linked filter/tone choices to the feeling",
          "Avoided claiming there is one correct loneliness sound",
        ],
        instructions: `Design a sound that feels like loneliness. Envelopes matter here — space, absence, slow fades.

Justify choices. Render locally. No correct answer.`,
        completionCriteria: [
          "Local render",
          "Reflection connects ADSR (and tone) to intent",
        ],
      },
    ],
    quiz: [
      {
        id: "ss-m1-adsr-envelope-q1",
        prompt: "Which ADSR stage is the level while the key is held?",
        choices: [
          { id: "a", text: "Attack" },
          { id: "b", text: "Decay" },
          { id: "c", text: "Sustain" },
          { id: "d", text: "Release" },
        ],
        correctChoiceId: "c",
        explanation: "Sustain is the held level; release happens after note-off.",
        difficulty: "easy",
      },
      {
        id: "ss-m1-adsr-envelope-q2",
        prompt: "A classic pluck envelope tends to have…",
        choices: [
          { id: "a", text: "Very slow attack and infinite release" },
          { id: "b", text: "Fast attack, short decay, low sustain, short release" },
          { id: "c", text: "No attack stage ever" },
          { id: "d", text: "Only noise oscillators" },
        ],
        correctChoiceId: "b",
        explanation: "Plucks hit quickly and die — little sustained body.",
        difficulty: "medium",
      },
      {
        id: "ss-m1-adsr-envelope-q3",
        prompt: "Filter envelopes move…",
        choices: [
          { id: "a", text: "Usually cutoff (or similar) over time" },
          { id: "b", text: "The FL install folder" },
          { id: "c", text: "Only the metronome" },
          { id: "d", text: "Sample rate exclusively" },
        ],
        correctChoiceId: "a",
        explanation: "Same envelope idea, different destination parameter.",
        difficulty: "easy",
      },
    ],
    flashcards: [
      {
        id: "ss-m1-adsr-envelope-f1",
        front: "ADSR stands for?",
        back: "Attack, Decay, Sustain, Release.",
      },
      {
        id: "ss-m1-adsr-envelope-f2",
        front: "Attack vs release?",
        back: "Attack = how a note starts; release = how it fades after note-off.",
      },
    ],
  },
];
