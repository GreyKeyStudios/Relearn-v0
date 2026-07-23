import type { TopicExperience } from "@/content/types";

export const SS_SIGNAL_PATH_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 1,
      headline: "Osc → Filter → Amp.",
      body: "Subtractive synthesis is a pipeline. Rich wave in. Frequencies removed. Loudness shaped over time. Bass comes from that order.",
      media: {
        kind: "flow",
        items: [
          { icon: "radio", label: "Osc" },
          { icon: "layers", label: "Filter" },
          { icon: "monitor", label: "Amp" },
        ],
      },
    },
    {
      id: "osc",
      type: "teach",
      synthesisSignalPathStage: 1,
      headline: "Start from Init.",
      body: "Load 3xOSC Init. One saw. No chorus, no preset tourism. Everything you hear should be a knob you chose.",
    },
    {
      id: "filter",
      type: "teach",
      synthesisSignalPathStage: 3,
      headline: "Filter removes frequencies.",
      body: "Put Fruity Filter after 3xOSC (or use a channel filter). Low-pass lets lows through and erases highs — like a coffee filter for sound.",
      terms: [
        {
          id: "lowpass",
          label: "Low-pass",
          tier: "now",
          shortDefinition: "Lets low frequencies through; reduces highs.",
        },
      ],
    },
    {
      id: "amp",
      type: "teach",
      synthesisSignalPathStage: 4,
      headline: "Amp shapes loudness over time.",
      body: "Even a static saw needs an envelope so notes start and stop. That is the Amp stage — we deepen it with ADSR next topics.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 3,
      headline: "Quick check",
      checkpointQuestionId: "ss-m1-signal-path-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 3,
      headline: "Pipeline locked.",
      body: "Next: filter cutoff and resonance — where subtractive gets its personality.",
    },
  ],
};
