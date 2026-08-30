export type ExerciseKind =
  | "play-note"
  | "play-pitch-class"
  | "play-set"
  | "play-sequence"
  | "play-interval"
  | "play-chord"
  | "play-scale"
  | "hold-notes"
  | "rhythm"
  | "multiple-choice"
  | "listen"
  | "watch"
  | "read";

export type ExerciseContext = "course" | "practice" | "review" | "game";
export type EvaluationMode = "objective" | "coaching";

export interface CompetencyReference {
  id: string;
  label: string;
  prerequisites?: string[];
}

export interface NoteEvent {
  note: number;
  noteName: string;
  pitchClass: number;
  velocity: number;
  type: "note-on" | "note-off";
  timestamp: number;
  source: "midi" | "virtual";
}

export interface PerformanceExercise {
  id: string;
  kind: ExerciseKind;
  prompt: string;
  hint?: string;
  targetNotes?: number[];
  targetPitchClasses?: number[];
  ordered?: boolean;
  minimumHoldMs?: number;
  targetIntervalsMs?: number[];
  toleranceMs?: number;
  competency?: CompetencyReference;
  evaluationMode?: EvaluationMode;
}

export interface ExerciseAttemptState {
  startedAt: number;
  attempts: number;
  playedNotes: number[];
  playedAt: number[];
  noteOnAt: Record<number, number>;
  completedAt?: number;
}

export interface ExerciseEvaluation {
  success: boolean;
  accepted: boolean;
  feedback: string;
  nextState: ExerciseAttemptState;
}
