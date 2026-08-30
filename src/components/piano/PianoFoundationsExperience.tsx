"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, Check, Lightbulb, LockKeyhole, Piano, Usb, WifiOff } from "lucide-react";
import { PIANO_FOUNDATIONS_LESSONS, PIANO_PATTERN_EXERCISES } from "@/content/piano-foundations";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import { recordLearningEvent } from "@/lib/interactive-learning/telemetry";
import type { NoteEvent, PerformanceExercise } from "@/lib/interactive-learning/types";
import { useProgressStore } from "@/stores/progress-store";
import { Button } from "@/components/ui/Button";
import { VirtualKeyboard } from "./VirtualKeyboard";
import { PianoPatternIntro, PIANO_PATTERN_INTRO_STAGE_COUNT } from "./PianoPatternIntro";

const LESSON_ID = "piano-foundations-pattern";
const FIVE_NOTE_SEQUENCE = [60, 62, 64, 65, 67];
const PULSE_EXERCISE: PerformanceExercise = { id: "foundations-four-pulse", kind: "rhythm", prompt: "Tap four even pulses.", targetIntervalsMs: [500, 500, 500], toleranceMs: 170, competency: { id: "piano.rhythm.steady-pulse", label: "Steady pulse" }, evaluationMode: "objective" };
const NATURAL_NOTE_SEQUENCE = [60, 62, 64, 65, 67, 69, 71, 72];
const NOTE_LESSON_STAGES = [
  { title: "Find C again.", copy: "Use the group of two black keys as your landmark.", target: 60 },
  { title: "Meet D.", copy: "D is the white key immediately to the right of C.", target: 62 },
  { title: "Meet B.", copy: "B is the white key immediately to the left of C.", target: 59 },
  { title: "Find F.", copy: "F is the white key immediately to the left of a group of three black keys.", target: 65 },
  { title: "Walk through the natural notes.", copy: "Play C D E F G A B C. These are the white-key note names in order.", sequence: NATURAL_NOTE_SEQUENCE },
  { title: "The key between C and D has two useful names.", copy: "Play the black key between C and D. It can be C sharp—C raised—or D flat—D lowered.", target: 61 },
] as const;

const KEYBOARD_STAGE_BY_LESSON: Record<string, number> = { "one-white-key": 0, "white-key-field": 1, "black-key-groups": 3, "c-landmark": 4, "natural-family": 5, "octave-pattern": 6 };
const NOTE_STAGE_BY_LESSON: Record<string, number> = { "c-fluency": 0, "neighbors-of-c": 1, "f-landmark": 3, "natural-navigation": 4, "higher-lower": 4, "sharp-flat-neighbor": 5 };

export function PianoFoundationsExperience({ startUnitId, startLessonId }: { startUnitId?: string; startLessonId?: string }) {
  const directUnitNumber = startUnitId === "notes" ? 2 : startUnitId === "hands" ? 3 : startUnitId === "rhythm" ? 4 : 1;
  const [introStage, setIntroStage] = useState(() => startLessonId ? (KEYBOARD_STAGE_BY_LESSON[startLessonId] ?? 0) : 0);
  const [introComplete, setIntroComplete] = useState(() => Boolean(startUnitId && startUnitId !== "keyboard"));
  const [inputReady, setInputReady] = useState(() => Boolean(startUnitId && startUnitId !== "keyboard"));
  const [lessonNumber, setLessonNumber] = useState(directUnitNumber);
  const [noteLessonStage, setNoteLessonStage] = useState(() => startLessonId ? (NOTE_STAGE_BY_LESSON[startLessonId] ?? 0) : 0);
  const [noteSequenceIndex, setNoteSequenceIndex] = useState(0);
  const [handSequenceIndex, setHandSequenceIndex] = useState(0);
  const [exerciseIndex, setExerciseIndex] = useState(0);
  const [attempt, setAttempt] = useState(() => createAttemptState());
  const [rhythmAttempt, setRhythmAttempt] = useState(() => createAttemptState());
  const [activeNotes, setActiveNotes] = useState<Set<number>>(new Set());
  const [lastNote, setLastNote] = useState<NoteEvent | null>(null);
  const [feedback, setFeedback] = useState("Your first note will appear here.");
  const [completed, setCompleted] = useState(false);
  const [hintVisible, setHintVisible] = useState(false);
  const firstCRef = useRef<number | null>(null);
  const completedRef = useRef(false);
  const exerciseIdRef = useRef(PIANO_PATTERN_EXERCISES[0].id);
  const exercise = PIANO_PATTERN_EXERCISES[exerciseIndex];
  const recordCompetencyEvidence = useProgressStore((state) => state.recordCompetencyEvidence);

  useEffect(() => {
    completedRef.current = completed;
    exerciseIdRef.current = exercise.id;
  }, [completed, exercise.id]);

  const handleNote = useCallback((event: NoteEvent) => {
    setActiveNotes((current) => {
      const next = new Set(current);
      if (event.type === "note-on") next.add(event.note); else next.delete(event.note);
      return next;
    });
    if (event.type !== "note-on") return;
    setLastNote(event);

    if (lessonNumber === 2) {
      const stage = NOTE_LESSON_STAGES[noteLessonStage];
      const expectedNote = "sequence" in stage ? stage.sequence[noteSequenceIndex] : stage.target;
      if (event.note === expectedNote) {
        if ("sequence" in stage && noteSequenceIndex < stage.sequence.length - 1) {
          setNoteSequenceIndex((index) => index + 1);
          setFeedback(`${event.noteName} — ${noteSequenceIndex + 1} of ${stage.sequence.length}.`);
          return;
        }
        setFeedback(`${event.noteName} — landmark found.`);
        if (noteLessonStage === NOTE_LESSON_STAGES.length - 1) {
          recordLearningEvent({ name: "lesson_completed", lessonId: "piano-foundations-learn-notes" });
          setLessonNumber(3);
          setNoteLessonStage(0);
          setNoteSequenceIndex(0);
        } else {
          setNoteLessonStage((index) => index + 1);
          setNoteSequenceIndex(0);
        }
      } else {
        if ("sequence" in stage) setNoteSequenceIndex(event.note === stage.sequence[0] ? 1 : 0);
        setFeedback(`${event.noteName} was heard. Use the visual landmark and try this small step again.`);
      }
      return;
    }

    if (lessonNumber === 3) {
      const expectedNote = FIVE_NOTE_SEQUENCE[handSequenceIndex];
      if (event.note === expectedNote) {
        const nextIndex = handSequenceIndex + 1;
        setFeedback(`${event.noteName} — ${nextIndex} of ${FIVE_NOTE_SEQUENCE.length} deliberate notes.`);
        if (nextIndex === FIVE_NOTE_SEQUENCE.length) {
          recordLearningEvent({ name: "lesson_completed", lessonId: "piano-foundations-hands", properties: { verified: "notes-and-order-only" } });
          setLessonNumber(4);
          setHandSequenceIndex(0);
        } else setHandSequenceIndex(nextIndex);
      } else {
        setHandSequenceIndex(event.note === FIVE_NOTE_SEQUENCE[0] ? 1 : 0);
        setFeedback(event.note === FIVE_NOTE_SEQUENCE[0] ? "C — restart accepted. Continue to D." : `${event.noteName} was heard. Restart on C and move through C D E F G.`);
      }
      return;
    }

    if (lessonNumber === 4) {
      const result = evaluateNoteEvent(PULSE_EXERCISE, rhythmAttempt, event);
      setRhythmAttempt(result.nextState);
      setFeedback(result.feedback);
      if (result.success) {
        recordCompetencyEvidence({ competencyId: "piano.rhythm.steady-pulse", success: true, context: "course", responseMs: event.timestamp - result.nextState.startedAt });
        recordLearningEvent({ name: "lesson_completed", lessonId: "piano-foundations-pulse" });
        setLessonNumber(5);
      }
      return;
    }

    if (lessonNumber >= 5) return;

    if (exercise.id === "first-signal") {
      const nextState = { ...attempt, attempts: attempt.attempts + 1, playedNotes: [event.note], completedAt: event.timestamp };
      setAttempt(nextState);
      setFeedback(`${event.noteName} received. Your keyboard and ReLearn are talking.`);
      recordLearningEvent({ name: "exercise_attempted", lessonId: LESSON_ID, exerciseId: exercise.id, properties: { correct: true, attempts: nextState.attempts, responseMs: event.timestamp - nextState.startedAt } });
      setExerciseIndex(1);
      setAttempt(createAttemptState());
      setHintVisible(false);
      return;
    }

    if (exercise.id === "find-another-c" && firstCRef.current === event.note) {
      const nextState = { ...attempt, attempts: attempt.attempts + 1, playedNotes: [...attempt.playedNotes, event.note] };
      setAttempt(nextState);
      setFeedback(`${event.noteName} is C—but play a different C to reveal the repeating pattern.`);
      recordLearningEvent({ name: "exercise_attempted", lessonId: LESSON_ID, exerciseId: exercise.id, properties: { correct: false, repeatedNote: true, attempts: nextState.attempts } });
      return;
    }

    const result = evaluateNoteEvent(exercise, attempt, event);
    setAttempt(result.nextState);
    setFeedback(result.feedback);
    recordLearningEvent({ name: "exercise_attempted", lessonId: LESSON_ID, exerciseId: exercise.id, properties: { correct: result.success, attempts: result.nextState.attempts, responseMs: event.timestamp - result.nextState.startedAt } });
    if (!result.success) return;

    recordLearningEvent({ name: "exercise_completed", lessonId: LESSON_ID, exerciseId: exercise.id, properties: { attempts: result.nextState.attempts, successfulResponseMs: event.timestamp - result.nextState.startedAt } });
    if (exercise.id === "find-c") firstCRef.current = event.note;
    if (exerciseIndex === PIANO_PATTERN_EXERCISES.length - 1) {
      setCompleted(true);
      recordLearningEvent({ name: "lesson_completed", lessonId: LESSON_ID });
    } else {
      setExerciseIndex((index) => index + 1);
      setAttempt(createAttemptState());
      setHintVisible(false);
    }
  }, [attempt, exercise, exerciseIndex, handSequenceIndex, lessonNumber, noteLessonStage, noteSequenceIndex, recordCompetencyEvidence, rhythmAttempt]);

  const { status, inputCount, connect } = useMidiInput(handleNote);

  const connectMidi = async () => {
    recordLearningEvent({ name: "midi_connect_requested", lessonId: LESSON_ID });
    const allowed = await connect();
    recordLearningEvent({ name: allowed ? "midi_connected" : "midi_failed", lessonId: LESSON_ID });
    if (allowed) setInputReady(true);
  };

  const playVirtual = (note: number) => {
    handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 96, type: "note-on", timestamp: Date.now(), source: "virtual" });
    window.setTimeout(() => handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 180);
  };

  const playPulseExample = () => {
    const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) { setFeedback("Audio is unavailable here. Count 1, 2, 3, 4 evenly and tap any key."); return; }
    const context = new AudioContextClass();
    [0, 0.5, 1, 1.5].forEach((offset) => {
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = 880;
      gain.gain.setValueAtTime(0.0001, context.currentTime + offset);
      gain.gain.exponentialRampToValueAtTime(0.16, context.currentTime + offset + 0.005);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + offset + 0.08);
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(context.currentTime + offset);
      oscillator.stop(context.currentTime + offset + 0.09);
    });
    setRhythmAttempt(createAttemptState(Date.now() + 1900));
    setFeedback("Listen to four even clicks. When they finish, copy that spacing on any one key.");
    window.setTimeout(() => void context.close(), 2300);
  };

  useEffect(() => {
    if (!inputReady) return;
    recordLearningEvent({ name: "exercise_started", lessonId: LESSON_ID, exerciseId: exercise.id });
  }, [exercise.id, inputReady]);

  useEffect(() => {
    const recordExit = () => recordLearningEvent({ name: "lesson_exited", lessonId: LESSON_ID, exerciseId: exerciseIdRef.current, properties: { completed: completedRef.current } });
    window.addEventListener("pagehide", recordExit);
    return () => window.removeEventListener("pagehide", recordExit);
  }, []);

  const statusCopy = useMemo(() => ({
    idle: "Keyboard not connected yet",
    requesting: "Waiting for browser permission…",
    connected: `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready`,
    "no-device": "Permission granted—plug in or select a MIDI keyboard",
    unsupported: "Web MIDI is unavailable in this browser; use the on-screen keyboard",
    denied: "MIDI permission was not granted; use the on-screen keyboard or retry",
  })[status], [inputCount, status]);
  const returnHref = startLessonId ? `/learn/piano-foundations/course?lesson=${encodeURIComponent(startLessonId)}` : "/";

  return (
    <div className="mx-auto max-w-4xl pb-16">
      <Link href={returnHref} className="mb-8 inline-flex items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> {startLessonId ? "Return to this course lesson" : "Learning map"}</Link>
      <header className="mb-8 grid gap-6 border-b border-hairline pb-8 md:grid-cols-[1fr_auto] md:items-end">
        <div><p className="eyebrow mb-3">Piano Foundations · live prototype</p><h1 className="font-serif text-4xl leading-tight md:text-5xl">Learn the pattern by playing it.</h1><p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">No notation test. No setup maze. Play on screen right away—or connect a MIDI keyboard—and discover how twelve notes repeat.</p><div className="mt-4 flex flex-wrap gap-4"><Link href="/learn/piano-foundations/course" className="inline-flex items-center text-sm font-medium text-primary hover:text-foreground">Start or resume the full course →</Link><Link href="/learn/piano-foundations/curriculum" className="inline-flex items-center text-sm text-faint hover:text-foreground">See the curriculum map →</Link></div></div>
        <div className="rounded-2xl border border-hairline bg-surface p-4 text-sm"><p className="text-faint">Current loop</p><p className="mt-1 text-foreground">Play → notice → practice → prove</p></div>
      </header>

      <div className="grid gap-6 lg:grid-cols-[260px_1fr]">
        <aside className="rounded-2xl border border-hairline bg-surface p-4">
          <p className="eyebrow mb-4">What this unlocks</p>
          <ol className="space-y-1">{PIANO_FOUNDATIONS_LESSONS.map((lesson) => {
            const masteryLocked = lesson.state === "mastery-locked";
            const complete = !masteryLocked && lessonNumber > lesson.number;
            const active = !masteryLocked && lessonNumber === lesson.number;
            const planned = lesson.state === "planned";
            return <li key={lesson.id} className={`flex gap-3 rounded-xl border p-3 transition-colors ${masteryLocked ? "mt-4 border-dashed border-hairline bg-background/25 text-faint" : active ? "border-primary/30 bg-primary/10 text-foreground" : complete ? "border-transparent bg-surface-raised text-foreground" : "border-transparent text-faint"}`}><span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs ${active ? "border-primary text-primary" : "border-hairline"}`}>{masteryLocked ? <LockKeyhole className="h-3 w-3" /> : complete ? <Check className="h-3 w-3 text-accent" /> : lesson.number}</span><span className="min-w-0 text-sm leading-6"><span className="block">{lesson.title}</span>{planned && <span className="block text-[10px] uppercase tracking-wider text-faint">Ahead</span>}{masteryLocked && <span className="mt-1 block text-[11px] leading-4 text-faint">Mastery cannot be awarded. This key is yours to find.</span>}</span></li>;
          })}</ol>
          <div className="mt-5 border-t border-hairline pt-4"><p className="text-xs leading-relaxed text-faint">ReLearn can teach, challenge, and verify what you demonstrate. It cannot unlock mastery for you.</p></div>
        </aside>

        <main className="space-y-5">
          {introComplete && inputReady && <section className="rounded-2xl border border-hairline bg-surface px-5 py-3"><div className="flex flex-wrap items-center justify-between gap-3"><div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${status === "connected" ? "bg-accent" : "bg-primary"}`} /><p className="text-sm text-muted-foreground">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "On-screen piano ready · connect your MIDI keyboard when you want"}</p></div>{status !== "connected" && <Button variant="secondary" onClick={connectMidi}><Usb className="h-4 w-4" /> Connect MIDI</Button>}</div></section>}
          {!introComplete ? <PianoPatternIntro stage={introStage} onReplay={() => setIntroStage(0)} onNext={() => { if (introStage < PIANO_PATTERN_INTRO_STAGE_COUNT - 1) setIntroStage((stage) => stage + 1); else { setIntroComplete(true); setAttempt(createAttemptState()); } }} /> : !inputReady ? <section className="rounded-2xl border border-primary/30 bg-surface p-6 md:p-8">
            <p className="eyebrow mb-3">Choose how to play</p>
            <h2 className="font-serif text-3xl">Do you have a MIDI keyboard?</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">Connect it now and ReLearn will respond to the keys you physically play. If you do not have one—or just want to keep moving—the on-screen piano teaches the same lesson.</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <button type="button" onClick={connectMidi} disabled={status === "requesting"} className="flex min-h-28 items-center gap-4 rounded-2xl border border-primary/40 bg-primary/10 p-5 text-left transition-colors hover:border-primary disabled:opacity-60"><span className="rounded-xl bg-primary/15 p-3 text-primary"><Usb className="h-6 w-6" /></span><span><span className="block font-medium text-foreground">{status === "requesting" ? "Waiting for permission…" : "Yes—connect MIDI"}</span><span className="mt-1 block text-xs text-faint">USB or other browser MIDI input</span></span></button>
              <button type="button" onClick={() => setInputReady(true)} className="flex min-h-28 items-center gap-4 rounded-2xl border border-hairline bg-background/40 p-5 text-left transition-colors hover:border-primary"><span className="rounded-xl bg-muted p-3 text-foreground"><Piano className="h-6 w-6" /></span><span><span className="block font-medium text-foreground">No—play on screen</span><span className="mt-1 block text-xs text-faint">Click or tap the piano keys</span></span></button>
            </div>
            {(status === "unsupported" || status === "denied" || status === "no-device") && <div className="mt-4 flex gap-2 rounded-xl bg-muted p-3 text-sm text-muted-foreground"><WifiOff className="mt-0.5 h-4 w-4 shrink-0" />{statusCopy}. You can continue with the on-screen piano.</div>}
            <p className="mt-5 text-xs text-faint">MIDI is optional. Device identity is not stored; only note numbers and timing are evaluated.</p>
          </section> : lessonNumber === 2 ? <section className="rounded-2xl border border-primary/30 bg-surface p-6 md:p-8">
            <p className="eyebrow mb-3">Unit 2 · Learn the Notes · {noteLessonStage + 1} of {NOTE_LESSON_STAGES.length}</p>
            <h2 className="font-serif text-3xl">{NOTE_LESSON_STAGES[noteLessonStage].title}</h2>
            <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{NOTE_LESSON_STAGES[noteLessonStage].copy}</p>
            <div className="mt-6"><VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={59} endNote={72} labelNaturals /></div>
            <div className="mt-5 rounded-xl bg-background/50 p-4" aria-live="polite"><p className="text-sm text-foreground">{feedback}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full bg-accent transition-all" style={{ width: `${((noteLessonStage + (noteSequenceIndex / NATURAL_NOTE_SEQUENCE.length)) / NOTE_LESSON_STAGES.length) * 100}%` }} /></div></div>
            <Button className="mt-5" variant="secondary" onClick={() => { if (noteLessonStage === NOTE_LESSON_STAGES.length - 1) setLessonNumber(3); else setNoteLessonStage((stage) => stage + 1); setNoteSequenceIndex(0); }}>Continue without keyboard</Button>
          </section> : lessonNumber === 3 ? <section className="rounded-2xl border border-primary/30 bg-surface p-6 md:p-8"><p className="eyebrow mb-3">Unit 3 · Your Hands</p><h2 className="font-serif text-3xl">Small, relaxed movements come first.</h2><p className="mt-3 leading-relaxed text-muted-foreground">Let your hand rest naturally. Keep the wrist easy rather than forcing it high or low. Play C D E F G slowly, one note at a time. ReLearn can verify the notes and their order—not your fingers, posture, or tension.</p><div className="mt-5 rounded-xl bg-background/50 p-4 text-sm text-muted-foreground" aria-live="polite">{handSequenceIndex === 0 ? "Begin on C, then move right through the white keys." : feedback}</div><div className="mt-6"><VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={60} endNote={72} labelNaturals emphasizedNotes={new Set([60, 62, 64, 65, 67])} /></div><Button className="mt-5" variant="secondary" onClick={() => setLessonNumber(4)}>Continue to Pulse and Rhythm</Button></section> : lessonNumber === 4 ? <section className="rounded-2xl border border-primary/30 bg-surface p-6 md:p-8"><p className="eyebrow mb-3">Unit 4 · Pulse and Rhythm</p><h2 className="font-serif text-3xl">Music moves through time.</h2><p className="mt-3 leading-relaxed text-muted-foreground">Hear a steady pulse before naming any notation. Then copy the spacing on one key. ReLearn measures when the notes arrive—not how your hand looks.</p><div className="mt-5 flex flex-wrap gap-3"><Button onClick={playPulseExample}>Hear four even clicks</Button><Button variant="secondary" onClick={() => { setRhythmAttempt(createAttemptState()); setFeedback("Count 1, 2, 3, 4 evenly and tap any key four times."); }}>Try without audio</Button></div><div className="mt-5 rounded-xl bg-background/50 p-4 text-sm text-muted-foreground" aria-live="polite">{feedback}</div><div className="mt-6"><VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} startNote={60} endNote={72} /></div><Button className="mt-5" variant="secondary" onClick={() => setLessonNumber(5)}>Continue without timing verification</Button></section> : lessonNumber === 5 ? <section className="rounded-2xl border border-accent/40 bg-accent/10 p-6 md:p-8"><p className="eyebrow mb-3 text-accent">Playable batch complete</p><h2 className="font-serif text-3xl">The keyboard is no longer an unknown object.</h2><p className="mt-3 leading-relaxed text-muted-foreground">You met its pattern, navigated its notes, began deliberate control, and experienced pulse. The complete authored path continues through scales, melody, harmony, two-hand playing, reading, expression, and a complete piece.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/learn/piano-foundations/curriculum" className="inline-flex min-h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground">See the complete path</Link><Link href="/practice" className="inline-flex min-h-10 items-center rounded-lg border border-hairline px-4 text-sm font-medium text-foreground">Open Practice</Link><Button variant="secondary" onClick={() => { setLessonNumber(1); setCompleted(false); setExerciseIndex(0); setAttempt(createAttemptState()); }}>Replay</Button></div></section> : <><section className="rounded-2xl border border-hairline bg-surface px-5 py-3"><div className="flex items-center gap-3"><span className={`h-2.5 w-2.5 rounded-full ${status === "connected" ? "bg-accent" : "bg-primary"}`} /><p className="text-sm text-muted-foreground">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready` : "Playing with the on-screen piano"}</p></div></section><section className="rounded-2xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_45%)] p-5 md:p-7">
            {!completed ? <><div className="mb-6 flex items-start justify-between gap-4"><div><p className="eyebrow mb-2">Exercise {exerciseIndex + 1} of {PIANO_PATTERN_EXERCISES.length}</p><h2 className="font-serif text-2xl leading-snug">{exercise.prompt}</h2></div><Piano className="h-7 w-7 shrink-0 text-primary" /></div><div className="mb-5 flex min-h-24 items-center gap-5 rounded-2xl bg-background/60 p-5" aria-live="polite"><div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-primary/40 bg-primary/10 font-serif text-2xl text-primary">{lastNote?.noteName ?? "—"}</div><div><p className="text-sm text-foreground">{feedback}</p><p className="mt-1 text-xs text-faint">Attempt {attempt.attempts || 1} · input: {lastNote?.source ?? "waiting"}</p></div></div>{exercise.hint && <button type="button" onClick={() => { setHintVisible(true); recordLearningEvent({ name: "exercise_hint_requested", lessonId: LESSON_ID, exerciseId: exercise.id, properties: { attempts: attempt.attempts } }); }} className="mb-5 inline-flex items-center gap-2 text-sm text-primary"><Lightbulb className="h-4 w-4" />{hintVisible ? exercise.hint : "Show a landmark hint"}</button>}</> : <div className="mb-6 rounded-2xl bg-accent/10 p-6"><p className="eyebrow mb-2 text-accent">Pattern found</p><h2 className="font-serif text-3xl">C repeats every twelve notes.</h2><p className="mt-3 leading-relaxed text-muted-foreground">You played the same note identity in two places. That distance is an octave. The keyboard is not a long list to memorize—it is one small pattern repeating.</p><Link href="/learn/piano-foundations/course?lesson=c-fluency" className="mt-5 inline-flex min-h-10 items-center rounded-lg bg-primary px-4 text-sm font-medium text-primary-foreground">Continue to Learn the Notes</Link></div>}
            <VirtualKeyboard activeNotes={activeNotes} onPlay={playVirtual} />
            <p className="mt-2 text-center text-xs text-faint">On-screen and MIDI notes use the same exercise and feedback system.</p>
          </section></>}
        </main>
      </div>
    </div>
  );
}
