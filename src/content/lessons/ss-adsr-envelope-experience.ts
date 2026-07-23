import type { TopicExperience } from "@/content/types";

export const SS_ADSR_ENVELOPE_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 4,
      headline: "ADSR is a volume story.",
      body: "Attack, Decay, Sustain, Release. Same filtered saw can be a pluck, a stab, or a pad — envelopes decide which.",
    },
    {
      id: "adsr",
      type: "teach",
      synthesisSignalPathStage: 4,
      headline: "Four stages, one breath.",
      body: "Attack = fade in. Decay = fall to sustain. Sustain = level while held. Release = fade after note-off. Change one stage at a time.",
      terms: [
        {
          id: "adsr",
          label: "ADSR",
          tier: "now",
          shortDefinition: "Attack, Decay, Sustain, Release — classic envelope stages.",
        },
      ],
    },
    {
      id: "predict",
      type: "teach",
      synthesisSignalPathStage: 4,
      headline: "Predict a pluck.",
      body: "Fast attack, short decay, low sustain, short release. Say it. Then dial it on the amp envelope. Ears first.",
    },
    {
      id: "filter-env",
      type: "teach",
      synthesisSignalPathStage: 3,
      headline: "Envelopes can move filters too.",
      body: "Many synths envelope cutoff as well as amp. A closing filter after the hit is classic bass behavior — try it after you nail amp ADSR.",
      laterLearn: [
        "LFO modulation (post-pilot)",
        "Sytrus / Harmless envelopes (later modules)",
      ],
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 4,
      headline: "Quick check",
      checkpointQuestionId: "ss-m1-adsr-envelope-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 5,
      headline: "Pilot subtractive toolkit complete.",
      body: "Oscillator + filter + ADSR. Recreate known traits. Interpret creative prompts. That is sound design craft.",
    },
  ],
};
