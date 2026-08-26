import Link from "next/link";
import { ArrowRight, Check, Circle, Lock, Piano, Sparkles } from "lucide-react";

const nodes = [
  { label: "Keyboard pattern", state: "learning" },
  { label: "Intervals", state: "next" },
  { label: "Scales", state: "locked" },
  { label: "Chords", state: "locked" },
];

export function LearningSystemHero() {
  return (
    <section className="relative mb-10 overflow-hidden rounded-3xl border border-hairline bg-surface p-5 md:p-7">
      <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />
      <div className="relative">
        <p className="eyebrow mb-3">Your connected learning system</p>
        <h1 className="max-w-xl font-serif text-3xl leading-tight text-foreground">See what you know, what is missing, and what one step unlocks next.</h1>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">ReLearn diagnoses the gap, chooses how you should learn it, gives you practice, verifies mastery, and updates your map.</p>
        <div className="my-6 overflow-x-auto pb-2"><div className="flex min-w-[560px] items-center">{nodes.map((node, index) => <div key={node.label} className="contents"><div className={`min-w-28 rounded-xl border p-3 ${node.state === "learning" ? "border-primary/60 bg-primary/10" : "border-hairline bg-background/40"}`}><div className="mb-2 flex items-center gap-2">{node.state === "learning" ? <Sparkles className="h-4 w-4 text-primary" /> : node.state === "locked" ? <Lock className="h-4 w-4 text-faint" /> : <Circle className="h-4 w-4 text-accent" />}<span className="text-[10px] uppercase tracking-wider text-faint">{node.state}</span></div><p className="text-sm text-foreground">{node.label}</p></div>{index < nodes.length - 1 && <div className="h-px w-8 bg-hairline" />}</div>)}</div></div>
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-center"><div className="flex items-start gap-3 rounded-xl bg-background/45 p-3"><Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" /><p className="text-sm"><span className="text-foreground">Best next move:</span> use physical discovery to learn the keyboard pattern before notation.</p></div><Link href="/learn/piano-foundations" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-medium text-primary-foreground"><Piano className="h-4 w-4" /> Start Piano Foundations <ArrowRight className="h-4 w-4" /></Link></div>
      </div>
    </section>
  );
}
