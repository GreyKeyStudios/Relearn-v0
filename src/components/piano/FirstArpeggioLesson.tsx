"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Lightbulb, Usb } from "lucide-react";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import { recordLearningEvent } from "@/lib/interactive-learning/telemetry";
import type { NoteEvent, PerformanceExercise } from "@/lib/interactive-learning/types";
import { useProgressStore } from "@/stores/progress-store";
import { Button } from "@/components/ui/Button";
import { VirtualKeyboard } from "./VirtualKeyboard";

const EXERCISES: PerformanceExercise[] = [
  { id: "c-major-arpeggio-up", kind: "play-sequence", prompt: "Roll the chord upward: C E G C.", hint: "Play one note at a time. Start on middle C, skip to E, skip to G, then finish on the next C.", targetNotes: [60, 64, 67, 72], ordered: true, evaluationMode: "objective", competency: { id: "piano.arpeggio.c-major.one-octave.ascending", label: "C major arpeggio ascending", prerequisites: ["piano.chord.c-major.root"] } },
  { id: "c-major-arpeggio-down", kind: "play-sequence", prompt: "Bring the same shape home: C G E C.", hint: "Begin on the higher C and visit the same chord tones in reverse.", targetNotes: [72, 67, 64, 60], ordered: true, evaluationMode: "objective", competency: { id: "piano.arpeggio.c-major.one-octave.descending", label: "C major arpeggio descending", prerequisites: ["piano.arpeggio.c-major.one-octave.ascending"] } },
];

export function FirstArpeggioLesson() {
  const [started, setStarted] = useState(false);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [attempt, setAttempt] = useState(() => createAttemptState());
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState("The same notes that form a chord can travel one after another.");
  const [complete, setComplete] = useState(false);
  const [hint, setHint] = useState(false);
  const exercise = EXERCISES[exerciseIndex];
  const recordEvidence = useProgressStore((state) => state.recordCompetencyEvidence);

  const handleNote = useCallback((event: NoteEvent) => {
    setActiveNotes((current) => {
      const next = new Set(current);
      if (event.type === "note-on") next.add(event.note); else next.delete(event.note);
      return next;
    });
    if (!started || complete || event.type !== "note-on") return;
    const result = evaluateNoteEvent(exercise, attempt, event);
    setAttempt(result.nextState);
    setFeedback(result.feedback);
    if (!result.success) return;
    if (exercise.competency) recordEvidence({ competencyId: exercise.competency.id, success: true, context: "course", responseMs: event.timestamp - result.nextState.startedAt });
    recordLearningEvent({ name: "exercise_completed", lessonId: "developing-pianist-1-arpeggio", exerciseId: exercise.id });
    if (exerciseIndex === EXERCISES.length - 1) {
      setComplete(true);
      recordLearningEvent({ name: "lesson_completed", lessonId: "developing-pianist-1-arpeggio" });
    } else {
      setExerciseIndex(1);
      setAttempt(createAttemptState());
      setHint(false);
      setFeedback("You climbed through a chord. Now reverse the motion.");
    }
  }, [attempt, complete, exercise, exerciseIndex, recordEvidence, started]);

  const { status, inputCount, connect } = useMidiInput(handleNote);
  const playVirtual = (note: number) => {
    handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 96, type: "note-on", timestamp: Date.now(), source: "virtual" });
    window.setTimeout(() => handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 160);
  };

  return <div className="mx-auto max-w-4xl pb-16">
    <Link href="/learn/piano-foundations/curriculum" className="mb-8 inline-flex items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Complete piano path</Link>
    <header className="mb-8 border-b border-hairline pb-8"><p className="eyebrow mb-3">Shared Pianist Core · Developing Pianist I</p><h1 className="font-serif text-4xl md:text-5xl">Your first arpeggio.</h1><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">A chord sounds several notes as one harmony. An arpeggio lets those chord tones travel—one after another—so harmony becomes motion.</p></header>
    <section className="rounded-2xl border border-primary/30 bg-surface p-5 md:p-7">
      {!started ? <><p className="eyebrow">Experience before terminology</p><h2 className="mt-2 font-serif text-3xl">C, E, and G belong to one sound.</h2><p className="mt-3 leading-relaxed text-muted-foreground">You already met C major as a chord shape. Now imagine opening that shape across time. No speed target yet; first learn the route and hear the connection.</p><div className="mt-6"><VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={60} endNote={72} labelMode="naturals" emphasizedNotes={new Set([60, 64, 67, 72])} /></div><Button className="mt-5" onClick={() => { setStarted(true); setAttempt(createAttemptState()); setFeedback("Begin on middle C."); }}>Explore the motion</Button></> : complete ? <div className="rounded-2xl bg-accent/10 p-6"><Check className="h-6 w-6 text-accent" /><h2 className="mt-3 font-serif text-3xl">You played an arpeggio in both directions.</h2><p className="mt-3 leading-relaxed text-muted-foreground">This is the first rung only. The path continues through fingering and thumb crossings, hands separately, two octaves, hands together, inversions, every key, seventh-chord arpeggios, compound patterns, and musical application.</p><Link href="/learn/piano-foundations/curriculum" className="mt-5 inline-flex text-sm text-primary">See the full arpeggio progression →</Link></div> : <><div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">Motion {exerciseIndex + 1} of {EXERCISES.length}</p><h2 className="mt-2 font-serif text-3xl">{exercise.prompt}</h2><p className="mt-2 text-sm text-faint">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen keyboard ready · MIDI optional"}</p></div><Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> Connect MIDI</Button></div><div className="my-5 rounded-xl bg-background/50 p-4 text-sm text-muted-foreground" aria-live="polite">{feedback}</div><VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={60} endNote={72} labelMode="naturals" emphasizedNotes={new Set(exercise.targetNotes)} /><button type="button" onClick={() => setHint(true)} className="mt-4 inline-flex items-center gap-2 text-sm text-primary"><Lightbulb className="h-4 w-4" />{hint ? exercise.hint : "Show the route"}</button></>}
    </section>
  </div>;
}
