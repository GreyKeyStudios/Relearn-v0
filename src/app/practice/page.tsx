import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PianoPracticeTrainer } from "@/components/practice/PianoPracticeTrainer";

export default function PracticePage() {
  return <div className="mx-auto max-w-4xl pb-16">
    <header className="mb-8 border-b border-hairline pb-8"><p className="eyebrow mb-3">Practice</p><h1 className="font-serif text-4xl md:text-5xl">Train what needs repetition.</h1><p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">Courses teach. Practice trains. Review maintains knowledge that is beginning to weaken. Practice is available without changing your place in a course.</p></header>
    <PianoPracticeTrainer />
    <section className="mt-8 rounded-2xl border border-dashed border-hairline p-5"><p className="eyebrow">Creative practice · architecture ready</p><h2 className="mt-2 font-serif text-2xl">Musical choices need coaching, not arbitrary right or wrong marks.</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Future progression completion, harmonization, and improvisation prompts will describe what was played and connect it to theory. They may accept several valid answers.</p><Link href="/learn/piano-foundations" className="mt-4 inline-flex items-center gap-2 text-sm text-primary">Return to Piano Foundations <ArrowRight className="h-4 w-4" /></Link></section>
  </div>;
}
