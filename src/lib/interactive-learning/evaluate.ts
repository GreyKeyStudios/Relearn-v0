import type {
  ExerciseAttemptState,
  ExerciseEvaluation,
  NoteEvent,
  PerformanceExercise,
} from "./types";

export function createAttemptState(now = Date.now()): ExerciseAttemptState {
  return { startedAt: now, attempts: 0, playedNotes: [], playedAt: [] };
}

export function evaluateNoteEvent(
  exercise: PerformanceExercise,
  state: ExerciseAttemptState,
  event: NoteEvent
): ExerciseEvaluation {
  if (event.type !== "note-on") {
    return { success: false, accepted: false, feedback: "Keep exploring.", nextState: state };
  }

  const nextState = {
    ...state,
    attempts: state.attempts + 1,
    playedNotes: [...state.playedNotes, event.note],
    playedAt: [...state.playedAt, event.timestamp],
  };

  if (exercise.kind === "rhythm" && exercise.targetIntervalsMs) {
    const requiredTaps = exercise.targetIntervalsMs.length + 1;
    if (nextState.playedAt.length < requiredTaps) {
      return { success: false, accepted: true, feedback: `Pulse ${nextState.playedAt.length} of ${requiredTaps}. Keep the beat steady.`, nextState };
    }
    const recent = nextState.playedAt.slice(-requiredTaps);
    const intervals = recent.slice(1).map((time, index) => time - recent[index]);
    const tolerance = exercise.toleranceMs ?? 150;
    const success = intervals.every((interval, index) => Math.abs(interval - exercise.targetIntervalsMs![index]) <= tolerance);
    return {
      success,
      accepted: true,
      feedback: success ? "Steady pulse complete." : "Those taps were heard, but the spacing changed. Listen, breathe, and try four even taps again.",
      nextState: success ? { ...nextState, playedAt: recent, completedAt: event.timestamp } : { ...nextState, playedAt: recent.slice(-1) },
    };
  }

  const exactTarget = exercise.targetNotes?.includes(event.note) ?? false;
  const pitchClassTarget = exercise.targetPitchClasses?.includes(event.pitchClass) ?? false;

  if (exercise.kind === "play-note" || exercise.kind === "play-pitch-class") {
    const success = exactTarget || pitchClassTarget;
    return {
      success,
      accepted: success,
      feedback: success ? `${event.noteName} — that is it.` : `${event.noteName} is not the target yet.`,
      nextState: success ? { ...nextState, completedAt: event.timestamp } : nextState,
    };
  }

  const targets = exercise.targetNotes ?? exercise.targetPitchClasses ?? [];
  const played = exercise.targetNotes
    ? nextState.playedNotes
    : nextState.playedNotes.map((note) => ((note % 12) + 12) % 12);
  const ordered = exercise.ordered ?? ["play-sequence", "play-scale"].includes(exercise.kind);
  const matched = ordered
    ? targets.every((target, index) => played[index] === target)
    : targets.every((target) => played.includes(target));

  return {
    success: matched,
    accepted: exactTarget || pitchClassTarget || targets.includes(event.note),
    feedback: matched ? "Pattern complete." : `${event.noteName} recorded. Keep going.`,
    nextState: matched ? { ...nextState, completedAt: event.timestamp } : nextState,
  };
}
