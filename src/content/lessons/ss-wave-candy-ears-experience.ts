import type { TopicExperience } from "@/content/types";

export const SS_WAVE_CANDY_EARS_EXPERIENCE: TopicExperience = {
  anchor: { type: "synthesis-signal-path" },
  screens: [
    {
      id: "hero",
      type: "hero",
      synthesisSignalPathStage: 5,
      headline: "See what you hear.",
      body: "Wave Candy is your truth serum. If your ears disagree with the screen, change one knob and watch again.",
    },
    {
      id: "setup",
      type: "teach",
      synthesisSignalPathStage: 5,
      headline: "Park Wave Candy on the mixer.",
      body: "Route 3xOSC into a mixer track. Open Wave Candy. Watch the oscilloscope while you flip sine → saw. Predict first.",
    },
    {
      id: "spectrum",
      type: "teach",
      synthesisSignalPathStage: 5,
      headline: "Spectrum shows harmonics.",
      body: "Switch Wave Candy to a spectrum view when available. Sine = one spike. Saw = a staircase of spikes. That is timbre made visible.",
    },
    {
      id: "misconception",
      type: "misconception",
      synthesisSignalPathStage: 5,
      headline: "Louder is not “better.”",
      body: "When comparing shapes, match loudness roughly. Otherwise your brain votes for whichever clip is louder.",
    },
    {
      id: "check",
      type: "checkpoint",
      synthesisSignalPathStage: 5,
      headline: "Quick check",
      checkpointQuestionId: "ss-m0-wave-candy-ears-q1",
    },
    {
      id: "summary",
      type: "summary",
      synthesisSignalPathStage: 3,
      headline: "Ready for subtractive.",
      body: "You know the shapes. Next module: remove frequencies with a filter — the heart of subtractive synthesis.",
    },
  ],
};
