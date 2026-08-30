"use client";

import { useCallback, useState } from "react";
import { Check, Lightbulb, Usb } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useMidiInput } from "@/hooks/use-midi-input";
import { createAttemptState, evaluateNoteEvent } from "@/lib/interactive-learning/evaluate";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import type { NoteEvent, PerformanceExercise } from "@/lib/interactive-learning/types";
import { useProgressStore } from "@/stores/progress-store";
import { VirtualKeyboard } from "./VirtualKeyboard";

type InlineActivity = {
  exercise?: PerformanceExercise;
  prompt: string;
  hint?: string;
  start?: number;
  end?: number;
  visible?: number[];
  emphasized?: number[];
  creativeCount?: number;
  allowedPitchClasses?: number[];
  velocityContrast?: number;
};

const naturals = [0, 2, 4, 5, 7, 9, 11];
const blacks = [1, 3, 6, 8, 10];
const KEYBOARD_PROFILE_KEY = "relearn:piano-keyboard-profile:v1";
const keyboardSizes = [25, 49, 61, 88] as const;
const keyboardPlan = (size: number) => size === 25
  ? "Compact plan: one-octave scales, hands separately, and shorter arpeggio shapes unless you change the controller octave."
  : size === 49
    ? "Four-octave plan: compact two-hand arrangements and arpeggios sized to the available span."
    : size === 61
      ? "Five-octave plan: most two-hand study fits, with long concert-range gestures adapted when necessary."
      : "Concert-range plan: full-span scales, two-hand octave work, and long arpeggio gestures are available.";
const ex = (id: string, kind: PerformanceExercise["kind"], prompt: string, targetNotes: number[], competencyId: string, hint?: string): InlineActivity => ({
  prompt,
  hint,
  exercise: { id: `course-${id}`, kind, prompt, targetNotes, ordered: ["play-sequence", "play-scale"].includes(kind), hint, evaluationMode: "objective", competency: { id: competencyId, label: competencyId } },
});
const pc = (id: string, prompt: string, targetPitchClasses: number[], competencyId: string, hint?: string): InlineActivity => ({
  prompt,
  hint,
  exercise: { id: `course-${id}`, kind: "play-pitch-class", prompt, targetPitchClasses, hint, evaluationMode: "objective", competency: { id: competencyId, label: competencyId } },
});
const rhythm = (id: string, prompt: string, intervals: number[], competencyId: string): InlineActivity => ({
  prompt,
  hint: "Count evenly and restart whenever the spacing changes.",
  exercise: { id: `course-${id}`, kind: "rhythm", prompt, targetIntervalsMs: intervals, toleranceMs: 180, evaluationMode: "objective", competency: { id: competencyId, label: competencyId } },
});

const ACTIVITIES: Record<string, InlineActivity> = {
  "one-white-key": { ...pc("one-white-key", "Play the single visible white key.", [2], "piano.keyboard.white-key"), start: 60, end: 72, visible: [62], emphasized: [62] },
  "white-key-field": { ...pc("white-key-field", "Play any white key.", naturals, "piano.keyboard.white-key"), start: 60, end: 72, visible: [60,62,64,65,67,69,71,72] },
  "black-key-groups": { ...pc("black-key-groups", "Play any black key, then notice whether it belongs to a group of two or three.", blacks, "piano.keyboard.black-key-groups"), start: 60, end: 72 },
  "c-landmark": { ...pc("c-landmark", "Find and play C beside a group of two black keys.", [0], "piano.note-navigation.c", "Find two black keys; C is immediately to their left."), start: 48, end: 72, emphasized: [48,60,72] },
  "natural-family": ex("natural-family", "play-scale", "Play C D E F G A B C.", [60,62,64,65,67,69,71,72], "piano.note-navigation.naturals", "Use the white keys from one C to the next."),
  "octave-pattern": ex("octave-pattern", "play-sequence", "Play middle C, then the next C higher.", [60,72], "piano.keyboard.octave-pattern", "Find the same two-black-key landmark twice."),
  "c-fluency": pc("c-fluency", "Find any C without using a note label.", [0], "piano.note-navigation.c", "Look immediately left of a group of two black keys."),
  "neighbors-of-c": ex("neighbors-of-c", "play-sequence", "Play B, C, D around middle C.", [59,60,62], "piano.note-navigation.b-d", "B is left of C; D is right."),
  "f-landmark": pc("f-landmark", "Find F and play it.", [5], "piano.note-navigation.f", "F is immediately left of a group of three black keys."),
  "natural-navigation": ex("natural-navigation", "play-sequence", "Play F A D B, using landmarks rather than counting from C.", [65,69,62,71], "piano.note-navigation.naturals"),
  "higher-lower": ex("higher-lower", "play-sequence", "Play C E G, then E D C to rise and fall.", [60,64,67,64,62,60], "piano.pitch.direction"),
  "sharp-flat-neighbor": pc("sharp-flat-neighbor", "Play the black key between C and D.", [1], "piano.note-navigation.accidentals", "The same key may be called C sharp or D flat."),
  "one-finger-control": { prompt: "Press middle C, hold it briefly, then release.", hint: "Keep the movement small and notice whether your hand feels free.", exercise: { id: "course-one-finger-control", kind: "hold-notes", prompt: "Hold middle C.", targetNotes: [60], minimumHoldMs: 700, evaluationMode: "objective", competency: { id: "piano.control.note-release", label: "Controlled press and release" } } },
  "five-note-walk": ex("five-note-walk", "play-sequence", "Walk upward: C D E F G.", [60,62,64,65,67], "piano.control.five-note-ascending"),
  "return-home": ex("return-home", "play-sequence", "Return home: G F E D C.", [67,65,64,62,60], "piano.control.five-note-descending"),
  "five-note-riff": ex("five-note-riff", "play-sequence", "Play the riff C D E G E D C.", [60,62,64,67,64,62,60], "piano.control.five-note-pattern"),
  "feel-pulse": rhythm("feel-pulse", "Tap one key four times at an even pulse.", [500,500,500], "piano.rhythm.steady-pulse"),
  "four-beat-groups": rhythm("four-beat-groups", "Play two groups of four even beats.", [500,500,500,850,500,500,500], "piano.rhythm.four-beat-group"),
  "long-short": { prompt: "Hold C long enough to hear its duration, then release it cleanly.", hint: "Let C last for about two seconds.", exercise: { id: "course-long-short", kind: "hold-notes", prompt: "Hold C.", targetNotes: [60], minimumHoldMs: 1600, evaluationMode: "objective", competency: { id: "piano.rhythm.duration-control", label: "Note duration control" } } },
  "quarter-half": rhythm("quarter-half", "Play four beats: C, C, then hold C across the last two counts.", [500,1000], "piano.rhythm.quarter-half"),
  "copy-rhythm": rhythm("copy-rhythm", "Copy this spacing: short, short, long.", [350,700], "piano.rhythm.reproduction"),
  "whole-half": ex("whole-half", "play-sequence", "Play C to C sharp (half step), then C to D (whole step).", [60,61,60,62], "piano.interval.whole-half-step"),
  "c-major-sound": { prompt: "Explore C, D, E, and G, then return to C.", creativeCount: 5, allowedPitchClasses: [0,2,4,7], start: 60, end: 72, emphasized: [60,62,64,67,72] },
  "build-major": ex("build-major", "play-scale", "Build C major: C D E F G A B C.", [60,62,64,65,67,69,71,72], "piano.scale.major-construction"),
  "c-major-up-down": ex("c-major-up-down", "play-scale", "Play C major upward and downward.", [60,62,64,65,67,69,71,72,71,69,67,65,64,62,60], "piano.scale.c-major.complete"),
  "scale-degrees": { prompt: "Create a short idea with C, D, E, and G. Try ending on C.", creativeCount: 6, allowedPitchClasses: [0,2,4,7], start: 60, end: 72, emphasized: [60,62,64,67,72] },
  "echo-melody": ex("echo-melody", "play-sequence", "Echo this idea: C E G E.", [60,64,67,64], "piano.melody.ear-reproduction"),
  "together": ex("together", "play-sequence", "Collect C, E, and G as one chord shape.", [60,64,67], "piano.chord.simultaneity"),
  "thirds": ex("thirds", "play-sequence", "Build by skipping: C E G, then D F A.", [60,64,67,62,65,69], "piano.chord.stacked-thirds"),
  "c-triad": ex("c-triad", "play-chord", "Build C major: C E G.", [60,64,67], "piano.chord.c-major.root"),
  "major-minor": ex("major-minor", "play-sequence", "Compare C major and C minor: C E G, then C E-flat G.", [60,64,67,60,63,67], "piano.chord.major-minor-quality"),
  "three-triads": ex("three-triads", "play-sequence", "Play C major, F major, and G major as broken chords.", [60,64,67,65,69,72,67,71,74], "piano.chord.primary-triads-c"),
  "c-f-g-c": ex("c-f-g-c", "play-sequence", "Play C–F–G–C as broken chords.", [60,64,67,65,69,72,67,71,74,60,64,67], "piano.progression.c-f-g-c"),
  "steady-changes": rhythm("steady-changes", "Play the roots C F G C with an even count between changes.", [1000,1000,1000], "piano.progression.timed-changes"),
  "left-hand-roots": ex("left-hand-roots", "play-sequence", "In the lower register, play C F G C.", [48,53,55,48], "piano.two-hands.left-roots"),
  "shared-pulse": ex("shared-pulse", "play-sequence", "Alternate low C and middle C four times.", [48,60,48,60,48,60,48,60], "piano.two-hands.shared-pulse"),
  "hold-and-move": ex("hold-and-move", "play-sequence", "Play low C, then the upper melody C D E G.", [48,60,62,64,67], "piano.two-hands.hold-and-move"),
  "simple-accompaniment": ex("simple-accompaniment", "play-sequence", "Play the repeating support C G C G.", [48,55,48,55], "piano.accompaniment.basic-pattern"),
  "melody-and-support": ex("melody-and-support", "play-sequence", "Combine a low C with the upper answer C E G E D C.", [48,60,64,67,64,62,60], "piano.two-hands.melody-support"),
  "staff-direction": ex("staff-direction", "play-sequence", "Follow the rising route C D E G, then fall E D C.", [60,62,64,67,64,62,60], "piano.reading.staff-direction"),
  "landmark-notes": ex("landmark-notes", "play-sequence", "Play the landmark route middle C, F, G, C.", [60,65,67,72], "piano.reading.landmark-notes"),
  "rhythm-on-page": rhythm("rhythm-on-page", "Read and perform: short, short, long.", [500,1000], "piano.reading.basic-durations"),
  "first-sight-read": ex("first-sight-read", "play-sequence", "Sight-read this new route: C D F E | G E D C.", [60,62,65,64,67,64,62,60], "piano.reading.beginner-sight-reading"),
  "loud-soft": { prompt: "Play middle C softly, then strongly.", velocityContrast: 25 },
  "connected-detached": { prompt: "Hold C for one second, then release it cleanly.", exercise: { id: "course-connected-detached", kind: "hold-notes", prompt: "Hold C.", targetNotes: [60], minimumHoldMs: 900, evaluationMode: "objective", competency: { id: "piano.expression.articulation", label: "Duration control" } } },
  "right-hand-section": ex("right-hand-section", "play-sequence", "Learn the melody phrase C D E G | E D C.", [60,62,64,67,64,62,60], "piano.piece.right-hand"),
  "left-hand-section": ex("left-hand-section", "play-sequence", "Learn the support C F G C in the lower register.", [48,53,55,48], "piano.piece.left-hand"),
  assemble: ex("assemble", "play-sequence", "Join the opening: low C, then C E G; low F, then C F A.", [48,60,64,67,53,60,65,69], "piano.piece.assembly"),
};

export function hasInlinePianoActivity(lessonId: string) {
  return Boolean(ACTIVITIES[lessonId]);
}

export function InlinePianoLessonActivity({ lessonId, onComplete }: { lessonId: string; onComplete: () => void }) {
  const activity = ACTIVITIES[lessonId];
  const [attempt, setAttempt] = useState(() => createAttemptState());
  const [active, setActive] = useState<Set<number>>(new Set());
  const [feedback, setFeedback] = useState("Play when you are ready.");
  const [hint, setHint] = useState(false);
  const [success, setSuccess] = useState(false);
  const [creative, setCreative] = useState<number[]>([]);
  const [velocities, setVelocities] = useState<number[]>([]);
  const [keyboardSize, setKeyboardSize] = useState<number | null>(() => {
    if (typeof window === "undefined") return null;
    const saved = Number(window.localStorage.getItem(KEYBOARD_PROFILE_KEY));
    return keyboardSizes.includes(saved as (typeof keyboardSizes)[number]) ? saved : null;
  });
  const recordEvidence = useProgressStore((state) => state.recordCompetencyEvidence);

  const handleNote = useCallback((event: NoteEvent) => {
    setActive((current) => { const next = new Set(current); if (event.type === "note-on") next.add(event.note); else next.delete(event.note); return next; });
    if (success || !activity) return;
    if (activity.velocityContrast && event.type === "note-on") {
      if (event.note !== 60) { setFeedback(`${event.noteName} was heard. Use middle C so only the attack changes.`); return; }
      const next = [...velocities, event.velocity];
      if (next.length === 1) { setVelocities(next); setFeedback(`First attack: ${event.velocity}. Now make the second clearly different.`); return; }
      const difference = Math.abs(next[1] - next[0]);
      if (difference < activity.velocityContrast) { setVelocities([event.velocity]); setFeedback("The attacks were close together. Try a clearer soft/strong difference."); return; }
      recordEvidence({ competencyId: "piano.expression.velocity-contrast", success: true, context: "course" });
      setFeedback(`A ${difference}-point velocity contrast was detected.`); setSuccess(true); return;
    }
    if (activity.creativeCount && event.type === "note-on") {
      if (activity.allowedPitchClasses && !activity.allowedPitchClasses.includes(event.pitchClass)) { setFeedback(`${event.noteName} is outside this exercise's note set. Try another musical choice.`); return; }
      const next = [...creative, event.note]; setCreative(next); setFeedback(`Your notes: ${next.map(midiNoteToName).join(" – ")}`);
      if (next.length >= activity.creativeCount) setSuccess(true);
      return;
    }
    if (!activity.exercise) return;
    if (event.type === "note-off" && activity.exercise.kind !== "hold-notes") return;
    const result = evaluateNoteEvent(activity.exercise, attempt, event); setAttempt(result.nextState); setFeedback(result.feedback);
    if (result.success) { if (activity.exercise.competency) recordEvidence({ competencyId: activity.exercise.competency.id, success: true, context: "course" }); setSuccess(true); }
  }, [activity, attempt, creative, recordEvidence, success, velocities]);

  const { status, inputCount, connect } = useMidiInput(handleNote);
  if (!activity) return null;
  const exactNotes = activity.exercise?.targetNotes;
  const registerGuidance = exactNotes?.length
    ? `Register required: ${midiNoteToName(exactNotes[0])}${exactNotes[0] === 60 ? " (Middle C)" : ""} through ${midiNoteToName(Math.max(...exactNotes))}.`
    : activity.exercise?.targetPitchClasses?.length
      ? "Register: any octave is accepted."
      : null;
  const saveKeyboardSize = (size: number) => {
    window.localStorage.setItem(KEYBOARD_PROFILE_KEY, String(size));
    setKeyboardSize(size);
  };
  const play = (note: number, velocity = 96) => {
    if (activity.exercise?.kind === "hold-notes" && active.has(note)) { handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }); return; }
    handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity, type: "note-on", timestamp: Date.now(), source: "virtual" });
    if (activity.exercise?.kind !== "hold-notes") window.setTimeout(() => handleNote({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity: 0, type: "note-off", timestamp: Date.now(), source: "virtual" }), 140);
  };

  return <div className="mt-6 rounded-2xl border border-primary/30 bg-background/35 p-5">
    <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">Play it here</p><h3 className="mt-2 font-serif text-2xl">{activity.prompt}</h3>{registerGuidance && <p className="mt-2 text-sm font-medium text-foreground">{registerGuidance}</p>}<p className="mt-2 text-xs text-faint">{status === "connected" ? `${inputCount} MIDI input${inputCount === 1 ? "" : "s"} ready${keyboardSize ? ` · ${keyboardSize}-key profile` : ""}` : "On-screen keyboard ready · MIDI optional"}</p></div><Button variant="secondary" onClick={() => void connect()}><Usb className="h-4 w-4" /> {status === "connected" ? "MIDI connected" : "Connect MIDI"}</Button></div>
    {status === "connected" && !keyboardSize && <div className="mt-4 rounded-xl border border-primary/30 bg-primary/5 p-4"><p className="font-medium text-foreground">How many keys does your MIDI keyboard have?</p><p className="mt-1 text-sm text-muted-foreground">ReLearn will use this to keep scales, two-hand work, and arpeggios inside your instrument’s practical range.</p><div className="mt-3 flex flex-wrap gap-2">{keyboardSizes.map((size) => <button key={size} type="button" onClick={() => saveKeyboardSize(size)} className="rounded-lg border border-hairline bg-surface px-4 py-2 text-sm hover:border-primary">{size} keys</button>)}</div></div>}
    {keyboardSize && <div className="mt-3 rounded-lg bg-surface px-3 py-2 text-xs text-faint"><span>{keyboardPlan(keyboardSize)}</span> <button type="button" className="text-primary underline-offset-2 hover:underline" onClick={() => setKeyboardSize(null)}>Change size</button></div>}
    <div className={`my-4 rounded-xl p-4 text-sm ${success ? "bg-accent/10 text-foreground" : "bg-surface text-muted-foreground"}`} aria-live="polite">{success && <Check className="mr-2 inline h-4 w-4 text-accent" />}{feedback}</div>
    {activity.velocityContrast ? <div className="grid gap-3 sm:grid-cols-2"><button type="button" onClick={() => play(60, 32)} className="rounded-xl border border-hairline p-4 text-left">Play C softly</button><button type="button" onClick={() => play(60, 108)} className="rounded-xl border border-primary/40 bg-primary/10 p-4 text-left">Play C strongly</button></div> : <VirtualKeyboard activeNotes={active} onPlay={play} startNote={activity.start ?? 48} endNote={activity.end ?? 76} visibleNotes={activity.visible ? new Set(activity.visible) : undefined} emphasizedNotes={activity.emphasized ? new Set(activity.emphasized) : new Set(activity.exercise?.targetNotes ?? [])} labelNaturals />}
    <div className="mt-4 flex flex-wrap items-center justify-between gap-3">{activity.hint ? <button type="button" onClick={() => setHint(true)} className="inline-flex items-center gap-2 text-sm text-primary"><Lightbulb className="h-4 w-4" />{hint ? activity.hint : "Show hint"}</button> : <span />}{success && <Button onClick={onComplete}>Continue to the next lesson</Button>}</div>
  </div>;
}
