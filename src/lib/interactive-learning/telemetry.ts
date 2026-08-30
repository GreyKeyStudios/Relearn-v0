export type LearningEventName =
  | "midi_connect_requested"
  | "midi_connected"
  | "midi_disconnected"
  | "midi_failed"
  | "exercise_started"
  | "exercise_attempted"
  | "exercise_hint_requested"
  | "exercise_completed"
  | "lesson_exited"
  | "lesson_completed";

export interface LearningEvent {
  name: LearningEventName;
  occurredAt: string;
  lessonId: string;
  exerciseId?: string;
  properties?: Record<string, string | number | boolean>;
}

const STORAGE_KEY = "relearn-learning-events-v1";
const MAX_LOCAL_EVENTS = 200;

/**
 * Minimal, local-first usability instrumentation. It records interaction quality
 * signals, never MIDI device names, raw performance streams, or user identity.
 */
export function recordLearningEvent(
  event: Omit<LearningEvent, "occurredAt">
): LearningEvent | null {
  if (typeof window === "undefined") return null;
  const complete = { ...event, occurredAt: new Date().toISOString() };
  try {
    const existing = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]") as LearningEvent[];
    localStorage.setItem(STORAGE_KEY, JSON.stringify([...existing, complete].slice(-MAX_LOCAL_EVENTS)));
  } catch {
    return null;
  }
  window.dispatchEvent(new CustomEvent("relearn:learning-event", { detail: complete }));
  return complete;
}
