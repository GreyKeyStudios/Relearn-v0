"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Circle, LockKeyhole, Piano, RotateCcw } from "lucide-react";
import { PIANO_FOUNDATIONS_CURRICULUM, type PianoCurriculumLesson } from "@/content/piano-curriculum";
import { Button } from "@/components/ui/Button";
import { hasInlinePianoActivity, InlinePianoLessonActivity } from "./InlinePianoLessonActivity";
import { PianoLessonTeaching } from "./PianoLessonTeaching";

const STORAGE_KEY = "relearn:piano-foundations-course:v1";
const READY_UNIT_MAX = 5;

type SavedCourse = { currentLessonId: string; completedLessonIds: string[] };

const PHASE_COPY = {
  experience: "Try the musical idea before worrying about its name.",
  notice: "Pay attention to what changes, what repeats, and what your ear or hand can recognize.",
  name: "Now attach a useful name to something you have already experienced.",
  explore: "Change one part at a time and notice what remains true.",
  practice: "Repeat this slowly enough that every attempt stays deliberate.",
  prove: "Demonstrate the skill without relying on the teaching prompt.",
  connect: "Use this idea inside music and connect it to what comes next.",
} as const;

const UNIT_GUIDANCE: Record<string, string> = {
  keyboard: "The keyboard is not 88 unrelated objects. It is one twelve-note pattern repeating from low to high.",
  notes: "Use groups of two and three black keys as landmarks. Relationships are faster and more reliable than counting from the end.",
  hands: "Comfort and control matter more than speed. ReLearn can hear notes, but only you can notice strain, posture, and tension.",
  rhythm: "Time is part of every note. Feel a shared pulse first; notation will describe that experience later.",
  scales: "A scale is an ordered family of notes. Its pattern creates both a physical route and a recognizable sound.",
  melodies: "Melody grows from direction, rhythm, repetition, and change—not from playing as many notes as possible.",
  chords: "A chord lets several notes behave as one sound. Build the shape, hear its color, then recognize its ingredients.",
  progressions: "Chords gain meaning from where they came from and where they seem to want to go.",
  "two-hands": "Give each hand one small role before combining them. Coordination is built in layers, not forced all at once.",
  reading: "Notation is a map of sounds, distances, and durations you have already experienced at the keyboard.",
  expression: "Correct notes are only the material. Dynamics, articulation, timing, and phrase shape turn them into communication.",
  piece: "A performance is not one giant attempt. Learn small sections, connect them, recover from misses, and preserve the musical line.",
};

function evidenceLabel(lesson: PianoCurriculumLesson) {
  if (lesson.verification === "midi") return "Performance evidence";
  if (lesson.verification === "self-check") return "Learner self-check";
  if (lesson.verification === "coaching") return "Open musical coaching";
  return "Performance evidence + self-check";
}

function workspaceHref(lessonId: string) {
  return lessonId === "perform" ? "/learn/piano-foundations/integration?unit=piece&lesson=perform" : null;
}

export function PianoFoundationsCourse({ initialLessonId }: { initialLessonId?: string }) {
  const flatLessons = useMemo(() => PIANO_FOUNDATIONS_CURRICULUM.flatMap((unit) => unit.lessons.map((lesson) => ({ unit, lesson }))), []);
  const readyLessons = useMemo(() => flatLessons.filter(({ unit }) => unit.number <= READY_UNIT_MAX), [flatLessons]);
  const [ready, setReady] = useState(false);
  const [currentLessonId, setCurrentLessonId] = useState(flatLessons[0].lesson.id);
  const [completed, setCompleted] = useState<Set<string>>(new Set());

  useEffect(() => {
    const hydration = window.setTimeout(() => {
      try {
        const saved = JSON.parse(window.localStorage.getItem(STORAGE_KEY) ?? "null") as SavedCourse | null;
      if (initialLessonId && readyLessons.some(({ lesson }) => lesson.id === initialLessonId)) {
        setCurrentLessonId(initialLessonId);
        setCompleted(new Set(saved?.completedLessonIds ?? []));
      } else if (saved && readyLessons.some(({ lesson }) => lesson.id === saved.currentLessonId)) {
          setCurrentLessonId(saved.currentLessonId);
          setCompleted(new Set(saved.completedLessonIds));
        }
      } catch { /* A damaged local checkpoint should never block learning. */ }
      setReady(true);
    }, 0);
    return () => window.clearTimeout(hydration);
  }, [flatLessons, initialLessonId, readyLessons]);

  useEffect(() => {
    if (!ready) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify({ currentLessonId, completedLessonIds: [...completed] } satisfies SavedCourse));
  }, [completed, currentLessonId, ready]);

  const currentIndex = Math.max(0, flatLessons.findIndex(({ lesson }) => lesson.id === currentLessonId));
  const current = flatLessons[currentIndex];
  const unitLessonIndex = current.unit.lessons.findIndex((lesson) => lesson.id === current.lesson.id);
  const activity = workspaceHref(current.lesson.id);
  const hasInlineActivity = hasInlinePianoActivity(current.lesson.id);
  const completedReadyCount = readyLessons.filter(({ lesson }) => completed.has(lesson.id)).length;
  const courseComplete = completedReadyCount === readyLessons.length;
  const percent = Math.round((completedReadyCount / readyLessons.length) * 100);

  const choose = (id: string) => { setCurrentLessonId(id); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const completeAndContinue = () => {
    setCompleted((items) => new Set(items).add(current.lesson.id));
    const next = flatLessons[currentIndex + 1];
    if (next && next.unit.number <= READY_UNIT_MAX) choose(next.lesson.id);
  };

  if (!ready) return <div className="mx-auto max-w-5xl py-16 text-sm text-faint">Restoring your place…</div>;

  return <div className="mx-auto max-w-6xl pb-20">
    <Link href="/learn/piano-foundations/curriculum" className="mb-7 inline-flex items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> Curriculum map</Link>
    <header className="mb-7 border-b border-hairline pb-7">
      <div className="flex flex-wrap items-end justify-between gap-5">
        <div><p className="eyebrow">Piano Foundations · learner-ready path</p><h1 className="mt-2 font-serif text-4xl md:text-5xl">From first key to first scale.</h1><p className="mt-3 max-w-2xl text-muted-foreground">Your place saves automatically. Units appear in this path only after they contain real teaching, guided playing, feedback, and an honest completion check.</p></div>
        <div className="min-w-44 rounded-2xl border border-hairline bg-surface p-4"><p className="text-xs text-faint">Ready-path progress</p><p className="mt-1 font-serif text-3xl">{percent}%</p><div className="mt-2 h-1.5 overflow-hidden rounded-full bg-muted"><div className="h-full bg-accent transition-all" style={{ width: `${percent}%` }} /></div><p className="mt-2 text-xs text-faint">{completedReadyCount} of {readyLessons.length} ready lessons</p></div>
      </div>
    </header>

    <div className="grid min-w-0 gap-6 lg:grid-cols-[300px_minmax(0,1fr)]">
      <aside className="order-2 min-w-0 self-start rounded-2xl border border-hairline bg-surface p-3 lg:order-1 lg:sticky lg:top-6">
        <p className="eyebrow px-3 py-2">Learning path</p>
        <div className="max-h-[68vh] space-y-1 overflow-y-auto pr-1">{PIANO_FOUNDATIONS_CURRICULUM.map((unit) => {
          const unitDone = unit.lessons.every((lesson) => completed.has(lesson.id));
          const unitActive = unit.id === current.unit.id;
          if (unit.number > READY_UNIT_MAX) return <div key={unit.id} className="flex items-center gap-3 rounded-xl p-3 text-faint"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-xs"><LockKeyhole className="h-3.5 w-3.5" /></span><span><span className="block text-sm font-medium">{unit.title}</span><span className="block text-[10px] uppercase tracking-wider">In development · curriculum preview only</span></span></div>;
          return <details key={unit.id} open={unitActive} className="rounded-xl border border-transparent open:border-hairline open:bg-background/30">
            <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl p-3 text-sm"><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${unitDone ? "border-accent/50 text-accent" : unitActive ? "border-primary/50 text-primary" : "border-hairline text-faint"}`}>{unitDone ? <Check className="h-3.5 w-3.5" /> : unit.number}</span><span className="font-medium">{unit.title}</span></summary>
            <ol className="space-y-1 px-2 pb-2">{unit.lessons.map((lesson, index) => <li key={lesson.id}><button type="button" onClick={() => choose(lesson.id)} className={`flex w-full gap-2 rounded-lg px-3 py-2 text-left text-xs leading-5 ${lesson.id === current.lesson.id ? "bg-primary/10 text-foreground" : "text-faint hover:bg-muted hover:text-foreground"}`}>{completed.has(lesson.id) ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> : <Circle className="mt-0.5 h-3.5 w-3.5 shrink-0" />}<span>{index + 1}. {lesson.title}</span></button></li>)}</ol>
          </details>;
        })}</div>
        <div className="mt-3 rounded-xl border border-dashed border-hairline p-3 text-center text-faint"><LockKeyhole className="mx-auto h-4 w-4" /><p className="mt-1 text-xs">The Grey Key remains locked.</p></div>
      </aside>

      <main className="order-1 min-w-0 lg:order-2">
        {courseComplete ? <section className="rounded-3xl border border-accent/40 bg-accent/10 p-7 md:p-10"><Check className="h-7 w-7 text-accent" /><p className="eyebrow mt-5 text-accent">First ready path complete</p><h2 className="mt-2 font-serif text-4xl">You reached your first complete scale.</h2><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">You now have a real foundation in keyboard geography, natural notes, basic movement, pulse, and C major. Later Foundations units remain in development until they meet this same teaching standard.</p><div className="mt-6 flex flex-wrap gap-3"><Link href="/practice" className="rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground">Practice what you learned</Link><Link href="/learn/piano-foundations/curriculum" className="rounded-lg border border-hairline px-4 py-3 text-sm">Preview what comes next</Link></div></section> : <section className="rounded-3xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_45%)] p-6 md:p-9">
          <div className="flex flex-wrap items-start justify-between gap-4"><div><p className="eyebrow">Unit {current.unit.number} · Lesson {unitLessonIndex + 1} of {current.unit.lessons.length} · {current.lesson.phase}</p><h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight md:text-4xl">{current.lesson.title}</h2></div><span className="rounded-full border border-hairline px-3 py-1 text-xs text-faint">{evidenceLabel(current.lesson)}</span></div>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">{current.unit.promise}</p>
          <div className="mt-7 rounded-2xl bg-background/50 p-5"><p className="text-sm leading-relaxed text-foreground">{UNIT_GUIDANCE[current.unit.id]}</p><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{PHASE_COPY[current.lesson.phase]}</p></div>
          <PianoLessonTeaching lessonId={current.lesson.id} />
          {current.lesson.musicalWin && <div className="mt-5 flex gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4"><Piano className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="text-sm font-medium text-foreground">Musical destination</p><p className="mt-1 text-sm text-muted-foreground">{current.lesson.musicalWin}</p></div></div>}
          <div className="mt-6 rounded-2xl border border-hairline p-5"><p className="eyebrow">What counts here</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.lesson.verification === "midi" ? "Play directly in this lesson. Note and timing evidence can demonstrate the bounded skill; it cannot verify fingering or physical comfort." : current.lesson.verification === "coaching" ? "Explore more than one musical answer. Completion means you made and considered a choice; ReLearn does not invent one objectively correct result." : current.lesson.verification === "self-check" ? "Pause and assess the prompt yourself. Continue only after you have genuinely performed the check; the app will not pretend it observed you." : "Combine the inline performance evidence with an honest physical or musical self-check."}</p>{current.lesson.competencyIds.length > 0 && <p className="mt-3 text-xs text-faint">Knowledge DNA: {current.lesson.competencyIds.join(" · ")}</p>}</div>
          {hasInlineActivity && <InlinePianoLessonActivity key={current.lesson.id} lessonId={current.lesson.id} onComplete={completeAndContinue} />}
          <div className="mt-7 flex flex-wrap items-center justify-between gap-3"><div className="flex gap-2"><Button variant="secondary" disabled={currentIndex === 0} onClick={() => choose(flatLessons[currentIndex - 1].lesson.id)}>Previous</Button>{activity && <Link href={activity} className="inline-flex min-h-10 items-center rounded-lg border border-primary/40 px-4 text-sm font-medium text-primary">Open performance workspace</Link>}</div>{!hasInlineActivity && <Button onClick={completeAndContinue}>{current.lesson.verification === "self-check" ? "I completed the self-check" : current.lesson.verification === "coaching" ? "I explored this idea" : "Complete and continue"}<ArrowRight className="h-4 w-4" /></Button>}</div>
        </section>}
        <button type="button" onClick={() => { setCompleted(new Set()); setCurrentLessonId(flatLessons[0].lesson.id); }} className="mt-4 inline-flex items-center gap-2 text-xs text-faint hover:text-foreground"><RotateCcw className="h-3.5 w-3.5" /> Reset this course checkpoint</button>
      </main>
    </div>
  </div>;
}
