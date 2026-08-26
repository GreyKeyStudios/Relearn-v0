"use client";

import { useCallback, useMemo, useState } from "react";
import { Check, Lightbulb, RotateCcw, Usb } from "lucide-react";
import { PRACTICE_EXERCISES } from "@/content/piano-foundations";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import { recordLearningEvent } from "@/lib/interactive-learning/telemetry";
import type { NoteEvent } from "@/lib/interactive-learning/types";
import { VirtualKeyboard } from "@/components/piano/VirtualKeyboard";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/stores/progress-store";

export function PianoPracticeTrainer() {
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [attempt, setAttempt] = useState(() => createAttemptState());
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState("Play on screen now, or connect MIDI when you want.");
  const [complete, setComplete] = useState(false);
  const [hint, setHint] = useState(false);
  const exercise = PRACTICE_EXERCISES[exerciseIndex];
  const evidence = useProgressStore((state) => state.competencyEvidence[exercise.competency?.id ?? ""]);
  const recordCompetencyEvidence = useProgressStore((state) => state.recordCompetencyEvidence);

  const reset = useCallback(() => {
    setAttempt(createAttemptState());
    setComplete(false);
    setHint(false);
    setFeedback("Ready when you are.");
  }, []);

  const handleNote = useCallback((event: NoteEvent) => {
    setActiveNotes((current) => {
      const next = new Set(current);
      if (event.type === "note-on") next.add(event.note); else next.delete(event.note);
      return next;
    });
    if (event.type !== "note-on" || complete) return;
    const result = evaluateNoteEvent(exercise, attempt, event);
    setAttempt(result.nextState);
    setFeedback(result.feedback);
    recordLearningEvent({ name: "exercise_attempted", lessonId: "practice", exerciseId: exercise.id, properties: { context: "practice", competencyId: exercise.competency?.id ?? "unmapped", correct: result.success, attempts: result.nextState.attempts } });
    if (result.success) {
      if (exercise.competency) recordCompetencyEvidence({ competencyId: exercise.competency.id, success: true, context: "practice", responseMs: event.timestamp - result.nextState.startedAt });
      setComplete(true);
      setFeedback(`${exercise.competency?.label ?? "Practice"} complete. That performance is evidence for this competency.`);
      recordLearningEvent({ name: "exercise_completed", lessonId: "practice", exerciseId: exercise.id, properties: { context: "practice", competencyId: exercise.competency?.id ?? "unmapped" } });
    }
  }, [attempt, complete, exercise, recordCompetencyEvidence]);

  const { status, inputCount, connect } = useMidiInput(handleNote);
  const playVirtual = (note: number) => {
    handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 96, type: "note-on", timestamp: Date.now(), source: "virtual" });
    window.setTimeout(() => handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 160);
  };
  const statusText = useMemo(() => status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen piano ready · MIDI optional", [inputCount, status]);

  return <div className="space-y-5">
    <div className="grid gap-3 sm:grid-cols-3">{PRACTICE_EXERCISES.map((item, index) => <button key={item.id} type="button" onClick={() => { setExerciseIndex(index); setAttempt(createAttemptState()); setComplete(false); setHint(false); setFeedback("Ready when you are."); }} className={`rounded-2xl border p-4 text-left ${index === exerciseIndex ? "border-primary bg-primary/10" : "border-hairline bg-surface"}`}><span className="eyebrow">{item.evaluationMode} evaluation</span><span className="mt-2 block font-medium text-foreground">{item.competency?.label}</span><span className="mt-1 block text-xs text-faint">{index === 0 ? "Keyboard geography" : index === 1 ? "Scale execution" : "Rhythm and timing"}</span></button>)}</div>
    <section className="rounded-2xl border border-primary/30 bg-surface p-5 md:p-7">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow mb-2">Free Practice · no course gate</p><h2 className="font-serif text-2xl">{exercise.prompt}</h2><p className="mt-2 text-sm text-muted-foreground">{statusText}</p></div><Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> Connect MIDI</Button></div>
      <div className={`my-5 rounded-xl p-4 text-sm ${complete ? "bg-accent/10 text-foreground" : "bg-background/50 text-muted-foreground"}`} aria-live="polite">{complete && <Check className="mr-2 inline h-4 w-4 text-accent" />}{feedback}{evidence && <span className="mt-2 block text-xs text-faint">Knowledge DNA evidence · {evidence.attempts} attempts · {Math.round(evidence.mastery)}% observed strength</span>}</div>
      <VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={48} endNote={72} labelNaturals />
      <div className="mt-4 flex flex-wrap gap-4"><button type="button" className="inline-flex items-center gap-2 text-sm text-primary" onClick={() => setHint(true)}><Lightbulb className="h-4 w-4" />{hint ? exercise.hint : "Show hint"}</button><button type="button" className="inline-flex items-center gap-2 text-sm text-faint hover:text-foreground" onClick={reset}><RotateCcw className="h-4 w-4" />Reset attempt</button></div>
    </section>
  </div>;
}
