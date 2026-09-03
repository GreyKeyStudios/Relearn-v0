"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Lightbulb, Usb } from "lucide-react";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import type { NoteEvent, PerformanceExercise } from "@/lib/interactive-learning/types";
import { useProgressStore } from "@/stores/progress-store";
import { Button } from "@/components/ui/Button";
import { VirtualKeyboard } from "./VirtualKeyboard";

type Step = { unit: string; title: string; copy: string; exercise?: PerformanceExercise; creative?: true };
const steps: Step[] = [
  { unit: "5 · Scales", title: "A major scale is a route made from two distances.", copy: "A half step moves to the very next key. A whole step crosses two half steps. Experience the route before memorizing its formula." },
  { unit: "5 · Scales", title: "Build C major upward.", copy: "Play the natural-note family C D E F G A B C.", exercise: { id: "c-major-up", kind: "play-scale", prompt: "C D E F G A B C", hint: "Use the white keys from middle C to the next C.", targetNotes: [60,62,64,65,67,69,71,72], ordered: true, evaluationMode: "objective", competency: { id: "piano.scale.c-major.ascending", label: "C major ascending" } } },
  { unit: "5 · Scales", title: "Return through the same family.", copy: "Descending is a separate coordination skill. Play C B A G F E D C.", exercise: { id: "c-major-down", kind: "play-scale", prompt: "C B A G F E D C", hint: "Begin on the higher C and move left through the white keys.", targetNotes: [72,71,69,67,65,64,62,60], ordered: true, evaluationMode: "objective", competency: { id: "piano.scale.c-major.descending", label: "C major descending", prerequisites: ["piano.scale.c-major.ascending"] } } },
  { unit: "6 · Melodies", title: "Shape your own six-note idea.", copy: "Use any six natural notes. There is no single correct melody: ReLearn will describe and preserve your choices.", creative: true },
  { unit: "7 · Chords", title: "Build C major by skipping scale notes.", copy: "Play C, skip D to E, then skip F to G. On screen, collect the notes; on MIDI, you may hold them together.", exercise: { id: "c-major-chord", kind: "play-chord", prompt: "C E G", hint: "C is the root, E the third, G the fifth.", targetNotes: [60,64,67], evaluationMode: "objective", competency: { id: "piano.chord.c-major.construction", label: "C major chord construction" } } },
  { unit: "7 · Chords", title: "Move the idea to F.", copy: "Build F A C from the same alternating-scale-note principle.", exercise: { id: "f-major-chord", kind: "play-chord", prompt: "F A C", hint: "Begin on F, skip G, play A, skip B, play C.", targetNotes: [65,69,72], evaluationMode: "objective", competency: { id: "piano.chord.f-major.construction", label: "F major chord construction" } } },
];

const STEP_BY_LESSON: Record<string, number> = { "c-major-sound": 0, "whole-half": 0, "build-major": 1, "c-major-up-down": 1, "scale-degrees": 3, contour: 3, motif: 3, "echo-melody": 3, "change-one-thing": 3, "first-melody": 3, together: 4, thirds: 4, "c-triad": 4, "major-minor": 4, "three-triads": 5 };

export function FoundationsMusicalUnits({ startUnitId, startLessonId }: { startUnitId?: string; startLessonId?: string }) {
  const initialIndex = startLessonId ? (STEP_BY_LESSON[startLessonId] ?? (startUnitId === "melodies" ? 3 : startUnitId === "chords" ? 4 : 0)) : 0;
  const [index, setIndex] = useState(initialIndex), [attempt, setAttempt] = useState(() => createAttemptState());
  const [active, setActive] = useState<Set<number>>(new Set()), [feedback, setFeedback] = useState("Notice the idea, then continue."), [hint, setHint] = useState(false);
  const [creative, setCreative] = useState<number[]>([]), [complete, setComplete] = useState(false);
  const step = steps[index];
  const recordEvidence = useProgressStore((state) => state.recordCompetencyEvidence);
  const advance = useCallback(() => { if (index === steps.length - 1) setComplete(true); else { setIndex(index + 1); setAttempt(createAttemptState()); setCreative([]); setHint(false); setFeedback("Ready when you are."); } }, [index]);
  const onNote = useCallback((event: NoteEvent) => {
    setActive((current) => { const next = new Set(current); if (event.type === "note-on") next.add(event.note); else next.delete(event.note); return next; });
    if (event.type !== "note-on" || complete) return;
    if (step.creative) {
      if (![0,2,4,5,7,9,11].includes(event.pitchClass)) { setFeedback(`${event.noteName} is outside C major. That is not musically wrong; this particular exploration is constrained to natural notes.`); return; }
      const notes = [...creative, event.note]; setCreative(notes); setFeedback(`Your idea: ${notes.map(midiNoteToName).join(" – ")}`);
      if (notes.length === 6) { recordEvidence({ competencyId: "piano.melody.constrained-creation", success: true, context: "course" }); advance(); }
      return;
    }
    if (!step.exercise) return;
    const result = evaluateNoteEvent(step.exercise, attempt, event); setAttempt(result.nextState); setFeedback(result.feedback);
    if (result.success) { if (step.exercise.competency) recordEvidence({ competencyId: step.exercise.competency.id, success: true, context: "course" }); advance(); }
  }, [advance, attempt, complete, creative, recordEvidence, step]);
  const { status, inputCount, connect } = useMidiInput(onNote);
  const play = (note: number) => { onNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 96, type: "note-on", timestamp: Date.now(), source: "virtual" }); window.setTimeout(() => onNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 160); };

  const returnHref = startLessonId ? `/learn/piano-foundations/course?lesson=${encodeURIComponent(startLessonId)}` : "/learn/piano-foundations/course";
  return <div className="mx-auto max-w-4xl pb-16"><Link href={returnHref} className="mb-8 inline-flex items-center gap-2 text-sm text-faint"><ArrowLeft className="h-4 w-4" /> Return to this course lesson</Link><header className="mb-8 border-b border-hairline pb-8"><p className="eyebrow mb-3">Foundations · musical application</p><h1 className="font-serif text-4xl md:text-5xl">Turn the pattern into music.</h1></header>{complete ? <section className="rounded-2xl border border-accent/40 bg-accent/10 p-7"><Check className="h-6 w-6 text-accent" /><h2 className="mt-3 font-serif text-3xl">Scale, melody, and harmony are connected.</h2><p className="mt-3 text-muted-foreground">You performed a scale both ways, created a legitimate original melody, and constructed two chords.</p><div className="mt-5 flex gap-3"><Link href="/learn/piano-academy/developing-1/arpeggio" className="rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground">Try your first arpeggio</Link><Link href={returnHref} className="rounded-lg border border-hairline px-4 py-3 text-sm">Return to course</Link></div></section> : <section className="rounded-2xl border border-primary/30 bg-surface p-6"><div className="flex flex-wrap justify-between gap-4"><div><p className="eyebrow">Unit {step.unit} · {index + 1} of {steps.length}</p><h2 className="mt-2 font-serif text-3xl">{step.title}</h2><p className="mt-3 max-w-2xl text-muted-foreground">{step.copy}</p></div><Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> Connect MIDI</Button></div><p className="mt-3 text-xs text-faint">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen keyboard ready · MIDI optional"}</p>{step.exercise || step.creative ? <><div className="my-5 rounded-xl bg-background/50 p-4 text-sm text-muted-foreground" aria-live="polite">{feedback}</div><VirtualKeyboard activeNotes={active} onPlay={play} startNote={60} endNote={72} labelMode="naturals" emphasizedNotes={new Set(step.exercise?.targetNotes ?? [])} />{step.exercise?.hint && <button type="button" onClick={() => setHint(true)} className="mt-4 inline-flex items-center gap-2 text-sm text-primary"><Lightbulb className="h-4 w-4" />{hint ? step.exercise.hint : "Show hint"}</button>}<Button className="mt-4 ml-4" variant="secondary" onClick={advance}>Continue without keyboard</Button></> : <Button className="mt-6" onClick={advance}>Build the scale</Button>}</section>}</div>;
}
