import type { TopicExperience } from "@/content/types";

export const SS_FILTER_RESONANCE_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 3,
      headline: "Cutoff chooses. Resonance emphasizes.",
      body: "Cutoff sets where the filter starts cutting. Resonance boosts energy near that edge — the whistle that makes 303-style sweeps.",
    },
    {
      id: "cutoff",
      type: "teach",
      synthesisSignalPathStage: 3,
      headline: "Close the low-pass slowly.",
      body: "Saw fully open → dark muted saw as cutoff falls. Predict the sound before you move the knob. Watch Wave Candy lose highs.",
      terms: [
        {
          id: "cutoff",
          label: "Cutoff",
          tier: "now",
          shortDefinition: "The frequency where the filter begins strongly affecting the signal.",
        },
        {
          id: "resonance",
          label: "Resonance",
          tier: "now",
          shortDefinition: "Emphasis near the cutoff — can whistle or scream when high.",
        },
      ],
    },
    {
      id: "demo",
      type: "teach",
      synthesisSignalPathStage: 3,
      headline: "Predict the resonance sweep.",
      body: "Teacher demo ladder (files may arrive later). Same sweep: low resonance vs high. Loudness-matched when assets ship.",
      media: {
        kind: "audio-ab",
        conceptId: "filter-resonance",
        plugin: "Fruity Filter",
        loudnessMatched: false,
        predictPrompt:
          "Before you listen: what will high resonance add to a closing low-pass on a saw?",
        clips: [
          {
            id: "a",
            label: "A · Baseline",
            src: "/media/sound-synthesis/m1/m1-filter-resonance-a-baseline.wav",
            stage: "baseline",
          },
          {
            id: "b",
            label: "B · One change",
            src: "/media/sound-synthesis/m1/m1-filter-resonance-b-one-change.wav",
            stage: "changed",
          },
          {
            id: "c",
            label: "C · Exaggerated",
            src: "/media/sound-synthesis/m1/m1-filter-resonance-c-exaggerated.wav",
            stage: "exaggerated",
          },
          {
            id: "d",
            label: "D · Musical",
            src: "/media/sound-synthesis/m1/m1-filter-resonance-d-musical.wav",
            stage: "musical",
          },
        ],
      },
    },
    {
      id: "misconception",
      type: "misconception",
      synthesisSignalPathStage: 3,
      headline: "Resonance is not “more volume.”",
      body: "It redistributes energy near the cutoff. Crank it and you get a peak — not a clean louder mix bus.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 3,
      headline: "Quick check",
      checkpointQuestionId: "ss-m1-filter-resonance-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 4,
      headline: "Tone is sculpted. Time is next.",
      body: "ADSR decides how that filtered tone appears and fades — the difference between a pluck and a pad.",
    },
  ],
};
