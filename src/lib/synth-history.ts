import type { SynthPatch } from "@/lib/relearn-synth";

export interface SynthHistory {
  past: SynthPatch[];
  future: SynthPatch[];
}

export const EMPTY_SYNTH_HISTORY: SynthHistory = { past: [], future: [] };

export function recordSynthChange(history: SynthHistory, current: SynthPatch, limit = 25): SynthHistory {
  return { past: [...history.past, { ...current }].slice(-limit), future: [] };
}

export function undoSynthChange(history: SynthHistory, current: SynthPatch, limit = 25) {
  const patch = history.past.at(-1);
  if (!patch) return { patch: null, history };
  return {
    patch: { ...patch },
    history: {
      past: history.past.slice(0, -1),
      future: [{ ...current }, ...history.future].slice(0, limit),
    },
  };
}

export function redoSynthChange(history: SynthHistory, current: SynthPatch, limit = 25) {
  const patch = history.future[0];
  if (!patch) return { patch: null, history };
  return {
    patch: { ...patch },
    history: {
      past: [...history.past, { ...current }].slice(-limit),
      future: history.future.slice(1),
    },
  };
}
