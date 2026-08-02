import {
  INIT_PATCH,
  MUTED_PLUCK_PATCH,
  type SynthChallengeDefinition,
} from "@/lib/relearn-synth";

const MUTED_SAW_PLUCK: SynthChallengeDefinition = {
  id: "muted-saw-pluck",
  assignmentId: "ss-sim-muted-saw-pluck",
  title: "Muted saw pluck",
  brief:
    "Make a rich saw start immediately, then keep it dark and short. The target checks configuration; your ears decide whether it feels musical.",
  compareLabel: "B is a guided target patch; A is your workspace",
  starterPatch: INIT_PATCH,
  comparisonPatch: MUTED_PLUCK_PATCH,
  visiblePanels: ["oscillator", "filter", "envelope"],
  criteria: [
    {
      id: "waveform",
      parameter: "waveform",
      label: "Source is a saw wave",
      weakConcept: "oscillator waveform",
      target: { kind: "equals", value: "sawtooth" },
      coach: {
        pass: "Saw supplies the rich upper harmonics a low-pass filter can remove.",
        change: "Choose Saw in the waveform group; a sine has almost nothing for this filter exercise to carve.",
      },
    },
    {
      id: "cutoff",
      parameter: "cutoff",
      label: "Low-pass cutoff is 600–1,200 Hz",
      weakConcept: "low-pass filtering",
      target: { kind: "range", min: 600, max: 1200 },
      coach: {
        pass: "This range removes much of the saw's brightness without erasing its pitch.",
        raise: "Raise Cutoff toward 600 Hz so the note keeps enough body to identify.",
        lower: "Lower Cutoff toward 1,200 Hz so the saw becomes clearly muted.",
      },
    },
    {
      id: "attack",
      parameter: "attack",
      label: "Attack is 5–50 ms",
      weakConcept: "attack stage",
      target: { kind: "range", min: 0.005, max: 0.05 },
      coach: {
        pass: "Fast attack gives the pluck an immediate front edge.",
        lower: "Shorten Attack to 50 ms or less.",
      },
    },
    {
      id: "sustain",
      parameter: "sustain",
      label: "Sustain is 10–40%",
      weakConcept: "sustain level",
      target: { kind: "range", min: 0.1, max: 0.4 },
      coach: {
        pass: "Low sustain keeps the held note from becoming a continuous organ-like tone.",
        raise: "Raise Sustain to at least 10% so a quiet body remains while held.",
        lower: "Lower Sustain to 40% or less so the sound behaves like a pluck.",
      },
    },
    {
      id: "release",
      parameter: "release",
      label: "Release is 50–400 ms",
      weakConcept: "release stage",
      target: { kind: "range", min: 0.05, max: 0.4 },
      coach: {
        pass: "The note ends quickly without an unnatural hard cut.",
        raise: "Raise Release to at least 50 ms to avoid an abrupt cutoff.",
        lower: "Shorten Release to 400 ms or less to keep the pluck tight.",
      },
    },
  ],
};

const RESONANT_DARK_SAW: SynthChallengeDefinition = {
  id: "resonant-dark-saw",
  assignmentId: "ss-sim-resonant-dark-saw",
  title: "Resonant dark saw",
  brief:
    "Darken a saw while making the cutoff edge audible. Resonance should spotlight the edge, not become a substitute for master volume.",
  compareLabel: "B demonstrates the target region; A is your workspace",
  starterPatch: INIT_PATCH,
  comparisonPatch: {
    ...INIT_PATCH,
    cutoff: 1100,
    resonance: 9,
  },
  visiblePanels: ["oscillator", "filter"],
  criteria: [
    {
      id: "waveform",
      parameter: "waveform",
      label: "Source is a saw wave",
      weakConcept: "oscillator waveform",
      target: { kind: "equals", value: "sawtooth" },
      coach: {
        pass: "Saw makes the filter movement easy to hear.",
        change: "Choose Saw so the filter has many upper harmonics to remove.",
      },
    },
    {
      id: "cutoff",
      parameter: "cutoff",
      label: "Cutoff is 700–1,500 Hz",
      weakConcept: "filter cutoff",
      target: { kind: "range", min: 700, max: 1500 },
      coach: {
        pass: "The filter is low enough to darken the saw while leaving an audible edge.",
        raise: "Raise Cutoff toward 700 Hz; the current setting may hide the pitched body.",
        lower: "Lower Cutoff toward 1,500 Hz so the saw becomes clearly darker.",
      },
    },
    {
      id: "resonance",
      parameter: "resonance",
      label: "Resonance is 7–11 Q",
      weakConcept: "filter resonance",
      target: { kind: "range", min: 7, max: 11 },
      coach: {
        pass: "This range emphasizes the cutoff edge without using the most extreme setting.",
        raise: "Raise Resonance toward 7 Q until the cutoff edge becomes easier to hear.",
        lower: "Lower Resonance toward 11 Q to keep the peak controlled and safer to monitor.",
      },
    },
  ],
};

const SLOW_PAD_ENVELOPE: SynthChallengeDefinition = {
  id: "slow-pad-envelope",
  assignmentId: "ss-sim-slow-pad-envelope",
  title: "Slow pad envelope",
  brief:
    "Turn the same oscillator into a pad by shaping how its loudness begins, settles, holds, and ends. The envelope is the assessed variable.",
  compareLabel: "B demonstrates a slow pad envelope; A is your workspace",
  starterPatch: INIT_PATCH,
  comparisonPatch: {
    ...INIT_PATCH,
    attack: 0.8,
    decay: 0.6,
    sustain: 0.72,
    release: 1.2,
  },
  visiblePanels: ["oscillator", "envelope"],
  criteria: [
    {
      id: "attack",
      parameter: "attack",
      label: "Attack is 500–1,200 ms",
      weakConcept: "attack stage",
      target: { kind: "range", min: 0.5, max: 1.2 },
      coach: {
        pass: "The slower attack fades the pad in instead of striking immediately.",
        raise: "Lengthen Attack toward 500 ms so the note fades in.",
        lower: "Shorten Attack toward 1,200 ms so the note becomes audible before it feels disconnected.",
      },
    },
    {
      id: "decay",
      parameter: "decay",
      label: "Decay is 300–1,000 ms",
      weakConcept: "decay stage",
      target: { kind: "range", min: 0.3, max: 1 },
      coach: {
        pass: "The decay settles gradually from the initial peak to the held level.",
        raise: "Lengthen Decay toward 300 ms so the level settles smoothly.",
        lower: "Shorten Decay toward 1,000 ms so the envelope reaches its held level in useful time.",
      },
    },
    {
      id: "sustain",
      parameter: "sustain",
      label: "Sustain is 60–85%",
      weakConcept: "sustain level",
      target: { kind: "range", min: 0.6, max: 0.85 },
      coach: {
        pass: "The high sustain keeps a stable body while the note is held.",
        raise: "Raise Sustain toward 60% so the pad keeps its body while held.",
        lower: "Lower Sustain toward 85% so the initial peak can still settle audibly.",
      },
    },
    {
      id: "release",
      parameter: "release",
      label: "Release is 800–1,800 ms",
      weakConcept: "release stage",
      target: { kind: "range", min: 0.8, max: 1.8 },
      coach: {
        pass: "The longer release lets the pad fade after note-off.",
        raise: "Lengthen Release toward 800 ms so the note does not stop abruptly.",
        lower: "Shorten Release toward 1,800 ms so notes do not overlap indefinitely.",
      },
    },
  ],
};

export const SYNTH_CHALLENGES: SynthChallengeDefinition[] = [
  MUTED_SAW_PLUCK,
  RESONANT_DARK_SAW,
  SLOW_PAD_ENVELOPE,
];

export function getSynthChallenge(assignmentId?: string): SynthChallengeDefinition {
  return (
    SYNTH_CHALLENGES.find((challenge) => challenge.assignmentId === assignmentId) ??
    MUTED_SAW_PLUCK
  );
}
