import type { TopicExperience } from "@/content/types";

export const SS_WHAT_IS_SOUND_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 5,
      headline: "Sound is organized vibration.",
      body: "Your speakers push air. That moving air hits your eardrum. A synth is just a precise way to decide how that air should move.",
    },
    {
      id: "pressure",
      type: "teach",
      synthesisSignalPathStage: 5,
      headline: "Pressure waves, not magic.",
      body: "Compression and rarefaction in air become what you hear. Wave Candy draws that pressure as a line — the same motion, made visible.",
      terms: [
        {
          id: "oscillator",
          label: "Oscillator",
          tier: "now",
          shortDefinition: "Something that repeats — in a synth, a waveform generator.",
        },
      ],
    },
    {
      id: "analogy",
      type: "analogy",
      synthesisSignalPathStage: 1,
      headline: "Speaker cone = tiny drum.",
      body: "An electromagnet pulls a cone back and forth. Air moves. Ears convert that motion into nerve signals. Synths decide the pattern the cone follows.",
    },
    {
      id: "misconception",
      type: "misconception",
      synthesisSignalPathStage: 1,
      headline: "Plugins do not invent sound from nowhere.",
      body: "They invent voltages and numbers that become motion that becomes pressure. The “magic” is math becoming electricity becoming air.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 5,
      headline: "Quick check",
      checkpointQuestionId: "ss-m0-what-is-sound-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 1,
      headline: "Vibration first. Knobs later.",
      body: "Next: frequency and amplitude — how fast and how hard the air moves. Stay in 3xOSC. No presets.",
    },
  ],
};
