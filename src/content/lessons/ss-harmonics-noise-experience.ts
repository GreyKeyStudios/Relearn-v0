import type { TopicExperience } from "@/content/types";

export const SS_HARMONICS_NOISE_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 2,
      headline: "Rich sounds are stacks of sines.",
      body: "A saw is not “a different animal.” It is many sine partials stacked. That idea unlocks Fourier later — and subtractive now.",
    },
    {
      id: "harmonics",
      type: "teach",
      synthesisSignalPathStage: 2,
      headline: "Harmonics = overtones.",
      body: "The fundamental is the pitch you hum. Harmonics are quieter higher frequencies that ride along and give timbre.",
      terms: [
        {
          id: "harmonic",
          label: "Harmonic",
          tier: "now",
          shortDefinition: "A higher frequency related to the fundamental that shapes timbre.",
        },
        {
          id: "fundamental",
          label: "Fundamental",
          tier: "now",
          shortDefinition: "The lowest, strongest frequency — the pitch you name.",
        },
      ],
    },
    {
      id: "noise",
      type: "teach",
      synthesisSignalPathStage: 2,
      headline: "Noise has no musical pitch.",
      body: "Noise spreads energy across many frequencies at once. Great for texture. Terrible if you expected a clean note.",
    },
    {
      id: "analogy",
      type: "analogy",
      synthesisSignalPathStage: 2,
      headline: "LEGO vs eraser.",
      body: "Additive builds with sine bricks. Subtractive starts with a rich brick and erases highs with a filter. Same harmonics, opposite strategies.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 2,
      headline: "Quick check",
      checkpointQuestionId: "ss-m0-harmonics-noise-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 5,
      headline: "See the spectrum next.",
      body: "Wave Candy turns these ideas into pictures. Train your eyes and ears together.",
    },
  ],
};
