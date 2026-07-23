import type { TopicExperience } from "@/content/types";

export const SS_WAVEFORMS_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 2,
      headline: "Five shapes. Everything else is manipulation.",
      body: "Sine, triangle, saw, square, noise. Know them by ear and by Wave Candy before you touch a filter.",
      media: {
        kind: "icons",
        items: [
          { icon: "activity", label: "Sine" },
          { icon: "layers", label: "Saw" },
          { icon: "radio", label: "Noise" },
        ],
      },
    },
    {
      id: "sine",
      type: "teach",
      synthesisSignalPathStage: 2,
      headline: "Sine — the simplest tone.",
      body: "One pure pitch. Soft. Hollow. No bite. In 3xOSC set a single oscillator to sine and solo it.",
      terms: [
        {
          id: "sine",
          label: "Sine",
          tier: "now",
          shortDefinition: "The simplest repeating wave — one pure frequency.",
        },
      ],
    },
    {
      id: "saw-square",
      type: "teach",
      synthesisSignalPathStage: 2,
      headline: "Saw and square — rich and hollow.",
      body: "Saw is bright and buzzy (lots of harmonics). Square is hollow/woody (odd harmonics). Flip shapes in 3xOSC without changing pitch.",
      terms: [
        {
          id: "saw",
          label: "Saw",
          tier: "now",
          shortDefinition: "Bright, buzzy waveform with many harmonics.",
        },
        {
          id: "square",
          label: "Square",
          tier: "now",
          shortDefinition: "Hollow waveform — mainly odd harmonics.",
        },
      ],
    },
    {
      id: "tri-noise",
      type: "teach",
      synthesisSignalPathStage: 2,
      headline: "Triangle and noise.",
      body: "Triangle is softer than square, still not pure. Noise is not a pitch — it is random energy. Perfect for hats, breath, dirt.",
    },
    {
      id: "misconception",
      type: "misconception",
      synthesisSignalPathStage: 2,
      headline: "Presets hide the shapes.",
      body: "This week: Init 3xOSC only. If you cannot name the shape with your eyes closed, you are not ready for Sytrus.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 2,
      headline: "Quick check",
      checkpointQuestionId: "ss-m0-waveforms-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 2,
      headline: "Shapes are recipes of harmonics.",
      body: "Next: what harmonics actually are — and why a saw sounds richer than a sine.",
    },
  ],
};
