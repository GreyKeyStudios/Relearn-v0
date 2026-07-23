import type { TopicExperience } from "@/content/types";

export const SS_FREQUENCY_AMPLITUDE_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 1,
      headline: "Two knobs every wave has.",
      body: "Frequency = how fast it repeats (pitch). Amplitude = how big the swing is (loudness). Master these before filters.",
    },
    {
      id: "freq",
      type: "teach",
      synthesisSignalPathStage: 1,
      headline: "Frequency is pitch.",
      body: "Higher frequency → higher pitch. In 3xOSC, raise the pitch of an oscillator and watch Wave Candy squeeze more cycles into the same window.",
      terms: [
        {
          id: "frequency",
          label: "Frequency",
          tier: "now",
          shortDefinition: "How many cycles per second — heard as pitch.",
        },
        {
          id: "amplitude",
          label: "Amplitude",
          tier: "now",
          shortDefinition: "How large the wave’s swing is — related to loudness.",
        },
      ],
    },
    {
      id: "amp",
      type: "teach",
      synthesisSignalPathStage: 4,
      headline: "Amplitude is how hard it hits.",
      body: "Turn channel volume down and the Wave Candy line shrinks. Pitch stays the same — only the swing got smaller.",
    },
    {
      id: "predict",
      type: "teach",
      synthesisSignalPathStage: 5,
      headline: "Predict before you twist.",
      body: "Before every change: say out loud what you expect to hear and see. Then change one thing. That habit is the whole course.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 1,
      headline: "Quick check",
      checkpointQuestionId: "ss-m0-frequency-amplitude-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 2,
      headline: "Next: the five shapes.",
      body: "Same pitch and loudness can still sound totally different — that is waveform shape.",
    },
  ],
};
