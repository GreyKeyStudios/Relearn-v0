import Link from "next/link";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import { PIANO_CONTINUATION_PATHS, PIANO_FOUNDATIONS_CURRICULUM } from "@/content/piano-curriculum";
import { ARPEGGIO_DEVELOPMENT, PIANO_ACADEMY_PROGRAMS } from "@/content/piano-academy";
import { CurriculumCarousel } from "@/components/piano/CurriculumCarousel";

const panelShell = "h-full rounded-2xl border border-hairline bg-surface p-5 md:p-6";

export default function PianoCurriculumPage() {
  const unitPanels = PIANO_FOUNDATIONS_CURRICULUM.map((unit) => (
    <div key={unit.id} className={panelShell}>
      <div className="flex gap-4">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-primary/40 text-sm text-primary">{unit.number}</span>
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-2xl">{unit.title}</h2>
          <p className="mt-1 text-sm text-muted-foreground">{unit.promise}</p>
          <ol className="mt-5 grid gap-2 md:grid-cols-2">{unit.lessons.map((item, index) => <li key={item.id} className="rounded-xl bg-background/45 p-3"><p className="text-sm text-foreground">{index + 1}. {item.title}</p><p className="mt-1 text-[11px] uppercase tracking-wider text-faint">{item.phase} · {item.verification === "midi" ? "performance verified" : item.verification}</p>{item.musicalWin && <p className="mt-2 text-xs text-accent">Musical win: {item.musicalWin}</p>}</li>)}</ol>
        </div>
      </div>
    </div>
  ));

  const appendixPanels = [
    <div key="after" className={panelShell}>
      <p className="eyebrow">After Foundations</p>
      <div className="mt-4 grid gap-4 md:grid-cols-3">{PIANO_CONTINUATION_PATHS.map((path) => <article key={path.id} className="rounded-2xl border border-hairline bg-background/40 p-4"><h2 className="font-serif text-xl">{path.title}</h2><ol className="mt-3 space-y-2 text-xs leading-relaxed text-muted-foreground">{path.stages.map((stage, index) => <li key={stage}>{index + 1}. {stage}</li>)}</ol></article>)}</div>
    </div>,
    ...PIANO_ACADEMY_PROGRAMS.map((program) => (
      <div key={program.id} className={panelShell}>
        <p className="eyebrow">The complete academy</p>
        <h2 className="mt-2 font-serif text-2xl">{program.title}</h2>
        <p className="mt-1 text-sm text-muted-foreground">{program.description}</p>
        <div className="mt-4 grid gap-4 md:grid-cols-2">{program.stages.map((stage) => <div key={stage.id} className="rounded-2xl border border-hairline bg-background/40 p-5"><p className="eyebrow">{stage.title}</p><p className="mt-2 text-sm text-foreground">{stage.promise}</p><div className="mt-4 space-y-3">{stage.strands.map((strand) => <div key={strand.title}><p className="text-xs font-medium text-primary">{strand.title}</p><ul className="mt-1 space-y-1 text-xs leading-relaxed text-muted-foreground">{strand.topics.map((topic) => <li key={topic}>• {topic}</li>)}</ul></div>)}</div><p className="mt-4 border-t border-hairline pt-3 text-xs text-accent">Milestone: {stage.milestone}</p></div>)}</div>
      </div>
    )),
    <div key="arpeggio" className="h-full rounded-2xl border border-primary/30 bg-primary/5 p-5 md:p-6">
      <p className="eyebrow">Required technical strand</p>
      <h2 className="mt-2 font-serif text-2xl">Arpeggios are a curriculum, not one lesson.</h2>
      <ol className="mt-5 grid gap-2 md:grid-cols-2">{ARPEGGIO_DEVELOPMENT.map((step, index) => <li key={step} className="rounded-xl bg-background/50 p-3 text-sm text-muted-foreground"><span className="mr-2 text-primary">{index + 1}</span>{step}</li>)}</ol>
      <Link href="/learn/piano-academy/developing-1/arpeggio" className="mt-5 inline-flex items-center gap-2 text-sm text-primary">Try the first playable arpeggio lesson <ArrowRight className="h-4 w-4" /></Link>
    </div>,
    <div key="grey-key" className="flex h-full flex-col items-center justify-center rounded-2xl border border-dashed border-hairline p-6 text-center">
      <LockKeyhole className="h-5 w-5 text-faint" />
      <h2 className="mt-3 font-serif text-2xl">The Grey Key</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm text-muted-foreground">No final lesson unlocks mastery. ReLearn can reveal the path and verify what you demonstrate. The Grey Key remains yours to find.</p>
      <Link href="/practice" className="mt-6 inline-flex items-center gap-2 text-sm text-primary">Train a competency in Practice <ArrowRight className="h-4 w-4" /></Link>
    </div>,
  ];

  const labels = [
    ...PIANO_FOUNDATIONS_CURRICULUM.map((unit) => `${unit.number}. ${unit.title}`),
    "After Foundations",
    ...PIANO_ACADEMY_PROGRAMS.map((program) => program.title),
    "Arpeggio strand",
    "The Grey Key",
  ];

  return <div className="mx-auto flex w-full max-w-5xl flex-col pb-20 md:h-[calc(100dvh-7rem)] md:pb-0 lg:h-[calc(100dvh-5rem)]">
    <header className="mb-3 flex shrink-0 flex-wrap items-center gap-x-4 gap-y-2 border-b border-hairline pb-3">
      <Link href="/learn/piano-foundations" className="inline-flex shrink-0 items-center gap-2 text-sm text-faint hover:text-foreground"><ArrowLeft className="h-4 w-4" /> <span className="hidden sm:inline">Piano Foundations</span></Link>
      <h1 className="hidden min-w-0 flex-1 truncate font-serif text-lg leading-tight sm:block md:text-xl">From the first key to independent musicianship.</h1>
      <span className="flex-1 sm:hidden" />
      <Link href="/learn/piano-foundations/course" className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-3 py-1.5 text-xs font-medium text-primary-foreground">Start or resume <ArrowRight className="h-3.5 w-3.5" /></Link>
    </header>

    <CurriculumCarousel labels={labels}>{[...unitPanels, ...appendixPanels]}</CurriculumCarousel>
  </div>;
}
