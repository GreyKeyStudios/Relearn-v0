"use client";

import { useCallback, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Lightbulb, Music2, Usb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VirtualKeyboard } from "./VirtualKeyboard";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import type { NoteEvent, PerformanceExercise } from "@/lib/interactive-learning/types";
import { useProgressStore } from "@/stores/progress-store";

type IntegrationStep = {
  unit: string;
  title: string;
  copy: string;
  why: string;
  exercise?: PerformanceExercise;
  expression?: true;
};

const STEPS: IntegrationStep[] = [
  {
    unit: "8 · Chord Progressions",
    title: "Let harmony leave home and return.",
    copy: "Play each chord as three notes in motion: C–E–G, F–A–C, G–B–D, then C–E–G. First hear the route clearly; simultaneous chord changes come after the shapes are dependable.",
    why: "C feels like home. F moves away. G creates a strong pull back toward C.",
    exercise: { id: "integration-c-f-g-c", kind: "play-sequence", prompt: "C E G · F A C · G B D · C E G", hint: "Restart on middle C whenever the route gets lost.", targetNotes: [60,64,67,65,69,72,67,71,74,60,64,67], ordered: true, evaluationMode: "objective", competency: { id: "piano.progression.c-f-g-c.broken", label: "C–F–G–C harmonic route" } },
  },
  {
    unit: "9 · Two-Hand Coordination",
    title: "Give the left hand one simple job.",
    copy: "Use a lower register to play only the roots C, F, G, C. If you use your physical keyboard, choose your left hand. ReLearn verifies the notes and register—not which hand or finger played them.",
    why: "Separating roles reduces the mental load: the left hand establishes harmony while the right hand will eventually shape melody.",
    exercise: { id: "integration-left-roots", kind: "play-sequence", prompt: "Low C · low F · low G · low C", hint: "Use C3, F3, G3, then C3.", targetNotes: [48,53,55,48], ordered: true, evaluationMode: "objective", competency: { id: "piano.two-hands.left-roots", label: "Left-register harmonic roots" } },
  },
  {
    unit: "10 · Reading Music",
    title: "Read a musical route you already understand.",
    copy: "The symbols below represent pitch moving from left to right. Play C D E G | E D C. A future visual pass will deepen staff animation; this lesson establishes the essential contract between symbol, sound, and motion.",
    why: "Reading is recognition, not decoding every mark from scratch. Look for direction, repetition, and landmarks first.",
    exercise: { id: "integration-first-reading", kind: "play-sequence", prompt: "C D E G | E D C", hint: "Begin on middle C. Move right to D and E, skip to G, then return E D C.", targetNotes: [60,62,64,67,64,62,60], ordered: true, evaluationMode: "objective", competency: { id: "piano.reading.first-symbol-route", label: "First symbol-to-keyboard route" } },
  },
  {
    unit: "11 · Expression",
    title: "The same note can speak in different ways.",
    copy: "Play middle C softly, then play it more strongly. MIDI velocity can detect the contrast; the on-screen choices model it directly. Loudness is not a score—this is evidence that you can intentionally create a difference.",
    why: "Expression begins with intention: choosing how a sound enters, continues, and releases.",
    expression: true,
  },
  {
    unit: "12 · First Complete Piece",
    title: "Perform your first harmonic sketch.",
    copy: "Play four small phrases. Each begins with a low harmony note and answers above it. It is intentionally compact enough to recover after a miss and musical enough to repeat as a daily warm-up.",
    why: "A complete piece integrates roles and continuity. A missed note restarts only the current route—not your identity as a musician.",
    exercise: { id: "integration-first-piece", kind: "play-sequence", prompt: "C3 C4 E4 G4 · F3 C4 F4 A4 · G3 B3 D4 G4 · C3 C4 E4 G4 C5", hint: "Treat each group as a phrase. Low note first, then its upper answer.", targetNotes: [48,60,64,67,53,60,65,69,55,59,62,67,48,60,64,67,72], ordered: true, evaluationMode: "objective", competency: { id: "piano.performance.first-harmonic-sketch", label: "First complete harmonic sketch" } },
  },
];

export function FoundationsIntegration() {
  const [index, setIndex] = useState(0);
  const [attempt, setAttempt] = useState(() => createAttemptState());
  const [active, setActive] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState("Begin slowly. Accuracy and awareness come before speed.");
  const [hint, setHint] = useState(false);
  const [expressionNotes, setExpressionNotes] = useState<number[]>([]);
  const [complete, setComplete] = useState(false);
  const step = STEPS[index];
  const recordEvidence = useProgressStore((state) => state.recordCompetencyEvidence);

  const advance = useCallback(() => {
    if (index === STEPS.length - 1) setComplete(true);
    else { setIndex((value) => value + 1); setAttempt(createAttemptState()); setExpressionNotes([]); setHint(false); setFeedback("New role, same patient tempo."); }
  }, [index]);

  const onNote = useCallback((event: NoteEvent) => {
    setActive((current) => { const next = new Set(current); if (event.type === "note-on") next.add(event.note); else next.delete(event.note); return next; });
    if (event.type !== "note-on" || complete) return;
    if (step.expression) {
      if (event.note !== 60) { setFeedback(`${event.noteName} was heard. Use middle C so only the strength changes.`); return; }
      const values = [...expressionNotes, event.velocity];
      setExpressionNotes(values);
      if (values.length === 1) { setFeedback(`First C received at velocity ${event.velocity}. Now create a clearly different second C.`); return; }
      const contrast = Math.abs(values[1] - values[0]);
      if (contrast < 25) { setExpressionNotes([event.velocity]); setFeedback(`Those attacks were close together. Try a much clearer soft/strong contrast.`); return; }
      recordEvidence({ competencyId: "piano.expression.velocity-contrast", success: true, context: "course" });
      setFeedback(`A ${contrast}-point velocity contrast was detected. The difference was intentional and measurable.`);
      advance();
      return;
    }
    if (!step.exercise) return;
    const result = evaluateNoteEvent(step.exercise, attempt, event);
    setAttempt(result.nextState);
    setFeedback(result.feedback);
    if (result.success) { if (step.exercise.competency) recordEvidence({ competencyId: step.exercise.competency.id, success: true, context: "course" }); advance(); }
  }, [advance, attempt, complete, expressionNotes, recordEvidence, step]);

  const { status, inputCount, connect } = useMidiInput(onNote);
  const play = (note: number, velocity = 96) => {
    onNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity, type: "note-on", timestamp: Date.now(), source: "virtual" });
    window.setTimeout(() => onNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 150);
  };

  return <div className="mx-auto max-w-5xl pb-20">
    <Link href="/learn/piano-foundations/course" className="mb-8 inline-flex items-center gap-2 text-sm text-faint"><ArrowLeft className="h-4 w-4" /> Continuous course</Link>
    <header className="mb-8 border-b border-hairline pb-8"><p className="eyebrow">Foundations · integration</p><h1 className="mt-2 font-serif text-4xl md:text-5xl">Make the pieces work together.</h1><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Harmony, hand roles, symbolic reading, expression, and performance become one connected musical act.</p></header>
    {complete ? <section className="rounded-3xl border border-accent/40 bg-accent/10 p-8"><Check className="h-7 w-7 text-accent" /><p className="eyebrow mt-4 text-accent">Foundations performance complete</p><h2 className="mt-2 font-serif text-4xl">You finished a complete musical sketch.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">That is evidence of navigation, ordered harmony, register roles, reading transfer, expressive contrast, recovery, and continuity. It is a beginning—not a declaration of mastery.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/practice" className="rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground">Practice the ingredients</Link><Link href="/learn/piano-academy/developing-1/arpeggio" className="rounded-lg border border-hairline px-4 py-3 text-sm">Continue to Shared Pianist Core</Link></div></section> : <section className="rounded-3xl border border-primary/30 bg-surface p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">Unit {step.unit} · {index + 1} of {STEPS.length}</p><h2 className="mt-2 font-serif text-3xl md:text-4xl">{step.title}</h2></div><Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> Connect MIDI</Button></div>
      <p className="mt-4 max-w-3xl leading-relaxed text-muted-foreground">{step.copy}</p>
      <div className="mt-5 flex gap-3 rounded-2xl bg-background/50 p-4"><Music2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" /><p className="text-sm leading-relaxed text-foreground">{step.why}</p></div>
      {step.unit.startsWith("10") && <div className="mt-5 flex flex-wrap items-center justify-center gap-3 rounded-2xl border border-hairline bg-white p-6 text-zinc-900"><span className="font-serif text-2xl">C</span><span>→</span><span className="font-serif text-2xl">D</span><span>→</span><span className="font-serif text-2xl">E</span><span>↗</span><span className="font-serif text-2xl">G</span><span className="mx-2 h-10 border-l border-zinc-400" /><span className="font-serif text-2xl">E</span><span>→</span><span className="font-serif text-2xl">D</span><span>→</span><span className="font-serif text-2xl">C</span></div>}
      <div className="my-5 rounded-xl bg-background/60 p-4 text-sm text-muted-foreground" aria-live="polite">{feedback}</div>
      {step.expression ? <div className="grid gap-3 sm:grid-cols-2"><button type="button" onClick={() => play(60, 32)} className="rounded-2xl border border-hairline bg-background/40 p-6 text-left"><span className="eyebrow">First sound</span><span className="mt-2 block font-serif text-2xl">Play C softly</span></button><button type="button" onClick={() => play(60, 108)} className="rounded-2xl border border-primary/40 bg-primary/10 p-6 text-left"><span className="eyebrow">Second sound</span><span className="mt-2 block font-serif text-2xl">Play C strongly</span></button></div> : <VirtualKeyboard activeNotes={active} onPlay={play} startNote={48} endNote={76} labelNaturals emphasizedNotes={new Set(step.exercise?.targetNotes ?? [])} />}
      {step.exercise?.hint && <button type="button" onClick={() => setHint(true)} className="mt-4 inline-flex items-center gap-2 text-sm text-primary"><Lightbulb className="h-4 w-4" />{hint ? step.exercise.hint : "Show a route hint"}</button>}
      <p className="mt-4 text-xs text-faint">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen input ready · MIDI optional"}</p>
    </section>}
  </div>;
}
