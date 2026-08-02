export type SynthWaveform = "sine" | "triangle" | "sawtooth" | "square";

export interface SynthPatch {
  waveform: SynthWaveform;
  frequency: number;
  masterGain: number;
  cutoff: number;
  resonance: number;
  attack: number;
  decay: number;
  sustain: number;
  release: number;
  lfoEnabled: boolean;
  lfoTarget: "filter" | "pitch";
  lfoRate: number;
  lfoDepth: number;
}

export interface SynthPatchSlots {
  version: 2;
  activeSlot: "A" | "B";
  A: SynthPatch;
  B: SynthPatch;
}

export const INIT_PATCH: SynthPatch = {
  waveform: "sawtooth",
  frequency: 220,
  masterGain: 0.16,
  cutoff: 8000,
  resonance: 1,
  attack: 0.02,
  decay: 0.2,
  sustain: 0.7,
  release: 0.25,
  lfoEnabled: false,
  lfoTarget: "filter",
  lfoRate: 2,
  lfoDepth: 0.25,
};

export const MUTED_PLUCK_PATCH: SynthPatch = {
  ...INIT_PATCH,
  cutoff: 900,
  resonance: 5,
  attack: 0.01,
  decay: 0.18,
  sustain: 0.25,
  release: 0.18,
};

export const DEFAULT_PATCH_SLOTS: SynthPatchSlots = {
  version: 2,
  activeSlot: "A",
  A: INIT_PATCH,
  B: MUTED_PLUCK_PATCH,
};

const WAVEFORMS = new Set<SynthWaveform>([
  "sine",
  "triangle",
  "sawtooth",
  "square",
]);

function inRange(value: unknown, min: number, max: number): value is number {
  return typeof value === "number" && Number.isFinite(value) && value >= min && value <= max;
}

export function isSynthPatch(value: unknown): value is SynthPatch {
  if (!value || typeof value !== "object") return false;
  const patch = value as Partial<SynthPatch>;
  return (
    WAVEFORMS.has(patch.waveform as SynthWaveform) &&
    inRange(patch.frequency, 55, 880) &&
    inRange(patch.masterGain, 0, 0.25) &&
    inRange(patch.cutoff, 120, 12000) &&
    inRange(patch.resonance, 0.1, 15) &&
    inRange(patch.attack, 0.005, 2) &&
    inRange(patch.decay, 0.02, 2) &&
    inRange(patch.sustain, 0, 1) &&
    inRange(patch.release, 0.02, 3) &&
    typeof patch.lfoEnabled === "boolean" &&
    (patch.lfoTarget === "filter" || patch.lfoTarget === "pitch") &&
    inRange(patch.lfoRate, 0.1, 20) &&
    inRange(patch.lfoDepth, 0, 1)
  );
}

type LegacySynthPatch = Omit<
  SynthPatch,
  "lfoEnabled" | "lfoTarget" | "lfoRate" | "lfoDepth"
>;

function isLegacySynthPatch(value: unknown): value is LegacySynthPatch {
  if (!value || typeof value !== "object") return false;
  const patch = value as Partial<LegacySynthPatch>;
  return (
    WAVEFORMS.has(patch.waveform as SynthWaveform) &&
    inRange(patch.frequency, 55, 880) &&
    inRange(patch.masterGain, 0, 0.25) &&
    inRange(patch.cutoff, 120, 12000) &&
    inRange(patch.resonance, 0.1, 15) &&
    inRange(patch.attack, 0.005, 2) &&
    inRange(patch.decay, 0.02, 2) &&
    inRange(patch.sustain, 0, 1) &&
    inRange(patch.release, 0.02, 3)
  );
}

function migrateLegacyPatch(patch: LegacySynthPatch): SynthPatch {
  return {
    ...patch,
    lfoEnabled: false,
    lfoTarget: "filter",
    lfoRate: 2,
    lfoDepth: 0.25,
  };
}

export function parsePatchSlots(
  value: string | null,
  fallback: SynthPatchSlots = DEFAULT_PATCH_SLOTS
): SynthPatchSlots {
  if (!value) return fallback;
  try {
    const parsed = JSON.parse(value) as {
      version?: number;
      activeSlot?: "A" | "B";
      A?: unknown;
      B?: unknown;
    };
    if (
      parsed.version === 2 &&
      (parsed.activeSlot === "A" || parsed.activeSlot === "B") &&
      isSynthPatch(parsed.A) &&
      isSynthPatch(parsed.B)
    ) {
      return parsed as SynthPatchSlots;
    }
    if (
      parsed.version === 1 &&
      (parsed.activeSlot === "A" || parsed.activeSlot === "B") &&
      isLegacySynthPatch(parsed.A) &&
      isLegacySynthPatch(parsed.B)
    ) {
      return {
        version: 2,
        activeSlot: parsed.activeSlot,
        A: migrateLegacyPatch(parsed.A),
        B: migrateLegacyPatch(parsed.B),
      };
    }
  } catch {
    // A damaged local patch should never prevent the instrument from opening.
  }
  return fallback;
}

export interface PatchCriterion {
  id: string;
  label: string;
  passed: boolean;
  weakConcept: string;
  parameter: keyof SynthPatch;
  feedback: string;
}

export type SynthCriterionTarget =
  | { kind: "equals"; value: SynthPatch[keyof SynthPatch] }
  | { kind: "maximum"; value: number }
  | { kind: "minimum"; value: number }
  | { kind: "range"; min: number; max: number };

export interface SynthChallengeCriterion {
  id: string;
  parameter: keyof SynthPatch;
  label: string;
  weakConcept: string;
  target: SynthCriterionTarget;
  coach: {
    pass: string;
    raise?: string;
    lower?: string;
    change?: string;
  };
}

export interface SynthChallengeDefinition {
  id: string;
  assignmentId: string;
  title: string;
  brief: string;
  compareLabel: string;
  starterPatch: SynthPatch;
  comparisonPatch: SynthPatch;
  criteria: SynthChallengeCriterion[];
  visiblePanels: SynthPanelId[];
}

export type SynthPanelId = "oscillator" | "filter" | "envelope" | "modulation";

interface SynthPatchExport {
  format: "relearn-synth-patch";
  version: 2;
  patch: SynthPatch;
}

export function serializeSynthPatch(patch: SynthPatch): string {
  const payload: SynthPatchExport = {
    format: "relearn-synth-patch",
    version: 2,
    patch,
  };
  return JSON.stringify(payload, null, 2);
}

export function parseSynthPatchExport(
  text: string
): { ok: true; patch: SynthPatch } | { ok: false; error: string } {
  if (!text.trim()) return { ok: false, error: "Paste a ReLearn Synth patch first." };
  if (text.length > 20_000) return { ok: false, error: "That patch text is unexpectedly large." };
  try {
    const payload = JSON.parse(text) as Partial<SynthPatchExport>;
    if (payload.format !== "relearn-synth-patch" || payload.version !== 2) {
      return { ok: false, error: "This is not a supported ReLearn Synth v2 patch." };
    }
    if (!isSynthPatch(payload.patch)) {
      return { ok: false, error: "The patch contains missing or out-of-range parameters." };
    }
    return { ok: true, patch: { ...payload.patch } };
  } catch {
    return { ok: false, error: "The patch text is not valid JSON." };
  }
}

function evaluateTarget(value: SynthPatch[keyof SynthPatch], target: SynthCriterionTarget): boolean {
  if (target.kind === "equals") return value === target.value;
  if (typeof value !== "number") return false;
  if (target.kind === "maximum") return value <= target.value;
  if (target.kind === "minimum") return value >= target.value;
  return value >= target.min && value <= target.max;
}

function coachingFor(value: SynthPatch[keyof SynthPatch], criterion: SynthChallengeCriterion, passed: boolean): string {
  if (passed) return criterion.coach.pass;
  if (typeof value !== "number") return criterion.coach.change ?? "Choose the requested setting.";
  const { target } = criterion;
  if (target.kind === "maximum") return criterion.coach.lower ?? "Move this parameter lower.";
  if (target.kind === "minimum") return criterion.coach.raise ?? "Move this parameter higher.";
  if (target.kind === "range") {
    return value < target.min
      ? criterion.coach.raise ?? "Move this parameter higher."
      : criterion.coach.lower ?? "Move this parameter lower.";
  }
  return criterion.coach.change ?? "Choose the requested setting.";
}

export function gradeSynthChallenge(patch: SynthPatch, challenge: SynthChallengeDefinition): PatchCriterion[] {
  return challenge.criteria.map((criterion) => {
    const value = patch[criterion.parameter];
    const passed = evaluateTarget(value, criterion.target);
    return {
      id: criterion.id,
      label: criterion.label,
      passed,
      weakConcept: criterion.weakConcept,
      parameter: criterion.parameter,
      feedback: coachingFor(value, criterion, passed),
    };
  });
}

export function gradeMutedSawPluck(patch: SynthPatch): PatchCriterion[] {
  return gradeSynthChallenge(patch, {
    id: "legacy-muted-saw-pluck",
    assignmentId: "ss-sim-muted-saw-pluck",
    title: "Muted saw pluck",
    brief: "Build a dark, short saw pluck.",
    compareLabel: "Muted pluck reference",
    starterPatch: INIT_PATCH,
    comparisonPatch: MUTED_PLUCK_PATCH,
    visiblePanels: ["oscillator", "filter", "envelope"],
    criteria: [
      { id: "waveform", parameter: "waveform", label: "Source is a saw wave", weakConcept: "oscillator waveform", target: { kind: "equals", value: "sawtooth" }, coach: { pass: "Saw supplies rich harmonics to filter.", change: "Choose Saw in the waveform group." } },
      { id: "cutoff", parameter: "cutoff", label: "Low-pass cutoff is 1,200 Hz or lower", weakConcept: "low-pass filtering", target: { kind: "maximum", value: 1200 }, coach: { pass: "The low cutoff removes upper harmonics.", lower: "Lower Cutoff until it is 1,200 Hz or less." } },
      { id: "attack", parameter: "attack", label: "Attack is 50 ms or faster", weakConcept: "attack stage", target: { kind: "maximum", value: 0.05 }, coach: { pass: "Fast attack gives the pluck an immediate start.", lower: "Shorten Attack to 50 ms or less." } },
      { id: "sustain", parameter: "sustain", label: "Sustain is 40% or lower", weakConcept: "sustain level", target: { kind: "maximum", value: 0.4 }, coach: { pass: "Low sustain prevents a long held body.", lower: "Lower Sustain to 40% or less." } },
      { id: "release", parameter: "release", label: "Release is 400 ms or shorter", weakConcept: "release stage", target: { kind: "maximum", value: 0.4 }, coach: { pass: "Short release keeps note-off tight.", lower: "Shorten Release to 400 ms or less." } },
    ],
  });
}
