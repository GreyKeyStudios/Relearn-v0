"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, ChevronDown, Circle, LockKeyhole, Piano, RotateCcw } from "lucide-react";
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
  const teachingRef = useRef<HTMLDivElement>(null);

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

  // The lesson body is its own scroll container now, so resetting the window is
  // not enough — the explanatory column has to return to the top as well.
  const choose = (id: string) => { setCurrentLessonId(id); teachingRef.current?.scrollTo({ top: 0 }); window.scrollTo({ top: 0, behavior: "smooth" }); };
  const completeAndContinue = () => {
    setCompleted((items) => new Set(items).add(current.lesson.id));
    const next = flatLessons[currentIndex + 1];
    if (next && next.unit.number <= READY_UNIT_MAX) choose(next.lesson.id);
  };

  if (!ready) return <div className="mx-auto max-w-5xl py-16 text-sm text-faint">Restoring your place…</div>;

  // The unit/lesson tree appears in two places: a one-line drawer on tablets, and
  // a permanent column once the viewport is wide enough to spare 280px for it.
  const pathTree = <>
    {PIANO_FOUNDATIONS_CURRICULUM.map((unit) => {
      const unitDone = unit.lessons.every((lesson) => completed.has(lesson.id));
      const unitActive = unit.id === current.unit.id;
      if (unit.number > READY_UNIT_MAX) return <div key={unit.id} className="flex items-center gap-3 rounded-xl p-3 text-faint"><span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-hairline text-xs"><LockKeyhole className="h-3.5 w-3.5" /></span><span><span className="block text-sm font-medium">{unit.title}</span><span className="block text-[10px] uppercase tracking-wider">In development · curriculum preview only</span></span></div>;
      return <details key={unit.id} open={unitActive} className="rounded-xl border border-transparent open:border-hairline open:bg-background/30">
        <summary className="flex cursor-pointer list-none items-center gap-3 rounded-xl p-2.5 text-sm"><span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs ${unitDone ? "border-accent/50 text-accent" : unitActive ? "border-primary/50 text-primary" : "border-hairline text-faint"}`}>{unitDone ? <Check className="h-3.5 w-3.5" /> : unit.number}</span><span className="font-medium">{unit.title}</span></summary>
        <ol className="space-y-0.5 px-2 pb-2">{unit.lessons.map((lesson, index) => <li key={lesson.id}><button type="button" onClick={() => choose(lesson.id)} className={`flex w-full gap-2 rounded-lg px-3 py-1.5 text-left text-xs leading-5 ${lesson.id === current.lesson.id ? "bg-primary/10 text-foreground" : "text-faint hover:bg-muted hover:text-foreground"}`}>{completed.has(lesson.id) ? <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" /> : <Circle className="mt-0.5 h-3.5 w-3.5 shrink-0" />}<span>{index + 1}. {lesson.title}</span></button></li>)}</ol>
      </details>;
    })}
    <button type="button" onClick={() => { setCompleted(new Set()); setCurrentLessonId(flatLessons[0].lesson.id); }} className="mt-2 inline-flex items-center gap-2 px-3 py-2 text-xs text-faint hover:text-foreground"><RotateCcw className="h-3.5 w-3.5" /> Reset this course checkpoint</button>
  </>;

  // From md up the page itself stops scrolling: the lesson fills the viewport and
  // only the explanatory column moves, so the keyboard never leaves the screen.
  return <div className="mx-auto flex w-full max-w-6xl flex-col pb-20 md:h-[calc(100dvh-7rem)] md:pb-0 lg:h-[calc(100dvh-5rem)]">
    <header className="mb-2.5 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline pb-2.5">
      <Link href="/learn/piano-foundations/curriculum" className="inline-flex shrink-0 items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Curriculum map</span></Link>
      <h1 className="hidden min-w-0 flex-1 truncate font-serif text-lg leading-tight sm:block md:text-xl">From first key to first scale.</h1>
      <span className="flex-1 sm:hidden" />
      {/* Below xl the path is a dropdown overlay, so it costs one row instead of a column. */}
      <details className="relative shrink-0 xl:hidden">
        <summary className="flex cursor-pointer list-none items-center gap-1.5 rounded-lg border border-hairline bg-surface px-3 py-1.5 text-xs"><ChevronDown className="h-3.5 w-3.5 text-faint" />Unit {current.unit.number} · Lesson {unitLessonIndex + 1}</summary>
        <div className="absolute right-0 z-30 mt-2 max-h-[60vh] w-80 max-w-[80vw] overflow-y-auto rounded-xl border border-hairline bg-surface p-2 shadow-lg">{pathTree}</div>
      </details>
      <div className="flex shrink-0 items-center gap-2" title={`${completedReadyCount} of ${readyLessons.length} ready lessons complete`}>
        <div className="hidden h-1.5 w-24 overflow-hidden rounded-full bg-muted sm:block sm:w-28"><div className="h-full bg-accent transition-all" style={{ width: `${percent}%` }} /></div>
        <p className="whitespace-nowrap text-xs text-faint">{completedReadyCount}/{readyLessons.length}</p>
      </div>
    </header>

    <div className="grid min-h-0 min-w-0 flex-1 gap-5 xl:grid-cols-[280px_minmax(0,1fr)]">
      <aside className="hidden min-h-0 min-w-0 flex-col rounded-2xl border border-hairline bg-surface p-3 xl:flex">
        <p className="eyebrow shrink-0 px-3 py-2">Learning path</p>
        <div className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">{pathTree}</div>
        <div className="mt-3 shrink-0 rounded-xl border border-dashed border-hairline p-3 text-center text-faint"><LockKeyhole className="mx-auto h-4 w-4" /><p className="mt-1 text-xs">The Grey Key remains locked.</p></div>
      </aside>

      <main className="flex min-h-0 min-w-0 flex-col">
        {courseComplete ? <section className="overflow-y-auto rounded-3xl border border-accent/40 bg-accent/10 p-6 md:p-8"><Check className="h-7 w-7 text-accent" /><p className="eyebrow mt-4 text-accent">First ready path complete</p><h2 className="mt-2 font-serif text-3xl md:text-4xl">You reached your first complete scale.</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">You now have a real foundation in keyboard geography, natural notes, basic movement, pulse, and C major. Later Foundations units remain in development until they meet this same teaching standard.</p><div className="mt-5 flex flex-wrap gap-3"><Link href="/practice" className="rounded-lg bg-primary px-4 py-3 text-sm text-primary-foreground">Practice what you learned</Link><Link href="/learn/piano-foundations/curriculum" className="rounded-lg border border-hairline px-4 py-3 text-sm">Preview what comes next</Link></div></section> : <section className="flex min-h-0 flex-1 flex-col rounded-3xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_10%,transparent),transparent_45%)] p-4 md:p-5 [@media(min-height:900px)]:md:p-6">
          {/* "Previous" rides in the lesson head so the play dock needs no nav row of its own. */}
          <div className="shrink-0">
            <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-1">
              <div className="flex min-w-0 items-center gap-2.5">
                <button type="button" disabled={currentIndex === 0} onClick={() => choose(flatLessons[currentIndex - 1].lesson.id)} className="inline-flex shrink-0 items-center gap-1 rounded-lg border border-hairline px-2 py-1 text-xs text-faint transition-colors hover:text-foreground disabled:opacity-40 disabled:hover:text-faint"><ArrowLeft className="h-3.5 w-3.5" /> Previous</button>
                <p className="eyebrow truncate">Unit {current.unit.number} · Lesson {unitLessonIndex + 1} of {current.unit.lessons.length} · {current.lesson.phase}</p>
              </div>
              <span className="shrink-0 rounded-full border border-hairline px-3 py-1 text-xs text-faint">{evidenceLabel(current.lesson)}</span>
            </div>
            <h2 className="mt-1.5 max-w-2xl font-serif text-xl leading-tight md:text-2xl [@media(min-height:900px)]:text-3xl">{current.lesson.title}</h2>
          </div>

          <div ref={teachingRef} className="mt-3 min-h-0 flex-1 space-y-4 overflow-y-auto pr-1">
            <p className="max-w-2xl leading-relaxed text-muted-foreground">{current.unit.promise}</p>
            <div className="rounded-2xl bg-background/50 p-4"><p className="text-sm leading-relaxed text-foreground">{UNIT_GUIDANCE[current.unit.id]}</p><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{PHASE_COPY[current.lesson.phase]}</p></div>
            <PianoLessonTeaching lessonId={current.lesson.id} />
            {current.lesson.musicalWin && <div className="flex gap-3 rounded-2xl border border-accent/30 bg-accent/10 p-4"><Piano className="mt-0.5 h-5 w-5 shrink-0 text-accent" /><div><p className="text-sm font-medium text-foreground">Musical destination</p><p className="mt-1 text-sm text-muted-foreground">{current.lesson.musicalWin}</p></div></div>}
            <details className="rounded-2xl border border-hairline p-4"><summary className="eyebrow cursor-pointer list-none">What counts here ›</summary><p className="mt-2 text-sm leading-relaxed text-muted-foreground">{current.lesson.verification === "midi" ? "Play directly in this lesson. Note and timing evidence can demonstrate the bounded skill; it cannot verify fingering or physical comfort." : current.lesson.verification === "coaching" ? "Explore more than one musical answer. Completion means you made and considered a choice; ReLearn does not invent one objectively correct result." : current.lesson.verification === "self-check" ? "Pause and assess the prompt yourself. Continue only after you have genuinely performed the check; the app will not pretend it observed you." : "Combine the inline performance evidence with an honest physical or musical self-check."}</p>{current.lesson.competencyIds.length > 0 && <p className="mt-3 text-xs text-faint">Knowledge DNA: {current.lesson.competencyIds.join(" · ")}</p>}</details>
          </div>

          <div className="mt-2.5 shrink-0 border-t border-hairline pt-2.5">
            {hasInlineActivity ? <InlinePianoLessonActivity key={current.lesson.id} lessonId={current.lesson.id} onComplete={completeAndContinue} /> : <div className="flex flex-wrap items-center justify-end gap-3">{activity && <Link href={activity} className="mr-auto inline-flex min-h-10 items-center rounded-lg border border-primary/40 px-4 text-sm font-medium text-primary">Open performance workspace</Link>}<Button onClick={completeAndContinue}>{current.lesson.verification === "self-check" ? "I completed the self-check" : current.lesson.verification === "coaching" ? "I explored this idea" : "Complete and continue"}<ArrowRight className="h-4 w-4" /></Button></div>}
          </div>
        </section>}
      </main>
    </div>
  </div>;
}

