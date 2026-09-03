"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Lightbulb, RotateCcw, Usb } from "lucide-react";
import { PRACTICE_EXERCISES } from "@/content/piano-foundations";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import { recordLearningEvent } from "@/lib/interactive-learning/telemetry";
import type { NoteEvent } from "@/lib/interactive-learning/types";
import { VirtualKeyboard } from "@/components/piano/VirtualKeyboard";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/stores/progress-store";

// Drills where locating the key IS the skill, so the keys must stay unnamed.
const UNLABELLED_DRILLS = new Set(["practice-find-c"]);

function drillCategory(item: (typeof PRACTICE_EXERCISES)[number]) {
  if (item.kind === "rhythm") return "Rhythm and timing";
  if (item.kind === "play-scale") return "Scale execution";
  if (item.id.includes("chord")) return "Harmony";
  if (item.id.includes("arpeggio")) return "Arpeggio motion";
  if (item.id.includes("five-note")) return "Keyboard control";
  return "Keyboard geography";
}

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
    if ((event.type !== "note-on" && exercise.kind !== "hold-notes") || complete) return;
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
    if (exercise.kind === "hold-notes" && activeNotes.has(note)) { releaseVirtual(note); return; }
    // This runs only from a pointer event; wall-clock time is the exercise evidence.
    // eslint-disable-next-line react-hooks/purity
    handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 96, type: "note-on", timestamp: Date.now(), source: "virtual" });
    if (exercise.kind !== "hold-notes") window.setTimeout(() => handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 160);
  };
  const releaseVirtual = (note: number) => {
    // This runs only from a release event; wall-clock time is the exercise evidence.
    if (exercise.kind === "hold-notes") handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" });
  };
  const statusText = useMemo(() => status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen piano ready · MIDI optional", [inputCount, status]);

  const choose = (index: number) => {
    setExerciseIndex(index);
    setAttempt(createAttemptState());
    setComplete(false);
    setHint(false);
    setFeedback("Ready when you are.");
  };

  // The drill list appears twice: a one-row dropdown on tablets, and a permanent
  // column once the viewport can spare 280px for it.
  const drillList = <>{PRACTICE_EXERCISES.map((item, index) => <button key={item.id} type="button" onClick={() => choose(index)} className={`flex w-full flex-col gap-0.5 rounded-lg px-3 py-2 text-left ${index === exerciseIndex ? "bg-primary/10 text-foreground" : "text-faint hover:bg-muted hover:text-foreground"}`}><span className="text-xs font-medium leading-5">{item.competency?.label}</span><span className="text-[10px] uppercase tracking-wider">{drillCategory(item)}</span></button>)}</>;

  // From md up the page itself stops scrolling: only the guidance column moves,
  // so the keyboard and its feedback never leave the screen.
  return <div className="mx-auto flex w-full max-w-6xl flex-col pb-20 md:h-[calc(100dvh-7rem)] md:pb-0 lg:h-[calc(100dvh-5rem)]">
    <header className="mb-2.5 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline pb-2.5">
      <Link href="/learn/piano-foundations/course" className="inline-flex shrink-0 items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Course</span></Link>
      <h1 className="hidden min-w-0 flex-1 truncate font-serif text-lg leading-tight sm:block md:text-xl">Train what needs repetition.</h1>
      <span className="flex-1 sm:hidden" />
      <details className="relative shrink-0 xl:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs"><ChevronDown className="h-3.5 w-3.5 text-faint" />Drill {exerciseIndex + 1} of {PRACTICE_EXERCISES.length}</summary>
        <div className="absolute right-0 z-30 mt-2 max-h-[60vh] w-80 max-w-[80vw] overflow-y-auto rounded-xl border border-hairline bg-surface p-2 shadow-lg">{drillList}</div>
      </details>
      {evidence && <p className="shrink-0 whitespace-nowrap text-xs text-faint">{Math.round(evidence.mastery)}% strength</p>}
    </header>

    <div className="grid min-h-0 min-w-0 flex-1 gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="hidden min-h-0 min-w-0 flex-col rounded-2xl border border-hairline bg-surface p-3 xl:flex">
        <p className="eyebrow shrink-0 px-3 py-2">Practice drills</p>
        <div className="min-h-0 flex-1 space-y-0.5 overflow-y-auto pr-1">{drillList}</div>
      </aside>

      <main className="flex min-h-0 min-w-0 flex-col">
        <section className="flex min-h-0 flex-1 flex-col rounded-3xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_45%)] p-4 md:p-5 [@media(min-height:900px)]:md:p-6">
          <div className="flex shrink-0 flex-wrap items-start justify-between gap-x-3 gap-y-2">
            <div className="min-w-0">
              <p className="eyebrow">Free practice · no course gate</p>
              <h2 className="mt-1.5 font-serif text-xl leading-tight md:text-2xl">{exercise.prompt}</h2>
              <p className="mt-1 text-xs text-faint">{statusText}</p>
            </div>
            <Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> Connect MIDI</Button>
          </div>

          <div className="mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">Courses teach. Practice trains. Review maintains knowledge that is beginning to weaken. Practice is available without changing your place in a course.</p>
            <div className="rounded-2xl bg-background/50 p-4"><p className="text-sm font-medium text-foreground">A useful first session</p><p className="mt-1 text-sm leading-relaxed text-muted-foreground">Find C → five-note control → steady pulse → C major up and down → primary chord tones → first arpeggio. Move slowly and reset whenever an attempt stops feeling deliberate.</p></div>
            <details className="rounded-2xl border border-dashed border-hairline p-4"><summary className="eyebrow cursor-pointer list-none">Creative practice · coaching boundary ›</summary><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Musical choices need coaching, not arbitrary right or wrong marks. Progression completion, harmonization, and improvisation prompts will describe what was played and connect it to theory. They may accept several valid answers; they will not manufacture a single “correct” musical choice.</p><Link href="/learn/piano-foundations/course" className="mt-3 inline-flex items-center gap-2 text-sm text-primary">Return to the continuous course <ArrowRight className="h-4 w-4" /></Link></details>
          </div>

          <div className="mt-2.5 shrink-0 space-y-2.5 border-t border-hairline pt-2.5">
            <div className={`rounded-xl p-3 text-sm ${complete ? "bg-accent/10 text-foreground" : "bg-surface text-muted-foreground"}`} aria-live="polite">{complete && <Check className="mr-2 inline h-4 w-4 text-accent" />}{feedback}{evidence && <span className="mt-1 block text-xs text-faint">Knowledge DNA evidence · {evidence.attempts} attempts · {Math.round(evidence.mastery)}% observed strength</span>}</div>
            <VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} onRelease={exercise.kind === "hold-notes" ? undefined : releaseVirtual} startNote={48} endNote={76} labelMode={UNLABELLED_DRILLS.has(exercise.id) ? "none" : "naturals"} showCaption={false} />
            <div className="flex flex-wrap items-center gap-4">
              <button type="button" className="inline-flex items-center gap-2 text-sm text-primary" onClick={() => setHint(true)}><Lightbulb className="h-4 w-4" />{hint ? exercise.hint : "Show hint"}</button>
              <button type="button" className="inline-flex items-center gap-2 text-sm text-faint hover:text-foreground" onClick={reset}><RotateCcw className="h-4 w-4" />Reset attempt</button>
              {exercise.kind === "hold-notes" && activeNotes.size > 0 && <Button variant="secondary" onClick={() => activeNotes.forEach(releaseVirtual)}>Release held note</Button>}
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>;
}
