"use client";

import Link from "next/link";
import { ArrowRight, Clock, Network } from "lucide-react";
import type { ConceptHero as ConceptHeroData } from "@/lib/concept-hero";

interface ConceptHeroProps {
  hero: ConceptHeroData | null;
  emptyHref?: string;
}

/**
 * The front door of ReLearn. Instead of a stats dashboard, the learner lands
 * on the *idea* they're about to understand — curiosity as navigation.
 * The course, the timing, and progress are all quiet context around it.
 */
export function ConceptHero({ hero, emptyHref = "/certifications" }: ConceptHeroProps) {
  if (!hero) {
    return (
      <section className="relearn-card mb-6 rounded-[var(--radius)] border border-border bg-surface p-6 sm:p-8">
        <p className="eyebrow mb-4">Welcome back</p>
        <h1 className="text-balance font-serif text-3xl font-medium leading-tight text-foreground">
          Every expert was once a beginner with one question.
        </h1>
        <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
          Choose a track and your coach will line up the first idea worth
          understanding.
        </p>
        <Link
          href={emptyHref}
          className="group mt-6 inline-flex min-h-11 items-center gap-2 rounded-md bg-primary px-5 text-sm font-medium text-primary-foreground transition-all hover:opacity-90"
        >
          Choose a track
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </Link>
      </section>
    );
  }

  return (
    <section className="relearn-card relative mb-6 overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-6 sm:p-8">
      <div className="draft-grid pointer-events-none absolute inset-y-0 right-0 hidden w-[42%] border-l border-hairline opacity-70 sm:block" />
      <div className="pointer-events-none absolute right-[9%] top-1/2 hidden h-36 w-36 -translate-y-1/2 rotate-45 rounded-2xl border border-accent/35 bg-accent/10 shadow-[8px_8px_0_rgb(37_138_132_/_0.08),16px_16px_0_rgb(197_148_50_/_0.06)] sm:grid sm:place-items-center">
        <Network className="h-12 w-12 -rotate-45 text-accent" strokeWidth={1.4} />
      </div>
      <div className="relative z-10 sm:max-w-[58%]">
        {/* Continuity thread — reconnect understanding across sessions */}
        {hero.lastLearned && (
          <p className="mb-6 text-pretty text-sm leading-relaxed text-faint">
            <span className="text-muted-foreground">Welcome back.</span>{" "}
            {hero.lastLearned.when} you learned{" "}
            <span className="text-muted-foreground">
              {hero.lastLearned.hook
                ? trimPeriod(hero.lastLearned.hook).toLowerCase()
                : hero.lastLearned.conceptName}
            </span>
            .
          </p>
        )}

        <p className="eyebrow mb-3 inline-flex rounded-full bg-primary px-3 py-1 text-primary-foreground">
          {hero.lead} · {hero.certName}
        </p>

        <h1 className="text-balance font-serif text-4xl font-medium leading-[1.1] tracking-tight text-foreground">
          {hero.conceptName}
        </h1>

        {hero.hook && (
          <p className="mt-4 text-pretty font-serif text-xl italic leading-relaxed text-muted-foreground">
            {hero.hook}
          </p>
        )}

        <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-faint">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" aria-hidden />~{hero.estimatedMinutes} min
          </span>
          {hero.score !== undefined && (
            <span className="text-primary">{hero.score}% mastery</span>
          )}
        </div>

        <div className="mt-7 flex items-center gap-1" aria-label="Learning cycle progress">
          {["Understand", "Practice", "Apply", "Prove", "Retain"].map(
            (stage, index) => (
              <div key={stage} className="min-w-0 flex-1">
                <div
                  className={`h-1 rounded-full ${index < 2 ? "bg-accent" : "bg-muted"}`}
                />
                <span
                  className={`mt-1.5 hidden text-[9px] sm:block ${
                    index < 2 ? "text-accent" : "text-faint"
                  }`}
                >
                  {stage}
                </span>
              </div>
            )
          )}
        </div>

        <Link
          href={hero.href}
          className="group mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-[#ae7f27] bg-primary px-5 text-sm font-semibold text-primary-foreground transition-all hover:bg-[#b9872c]"
        >
          {hero.ctaLabel}
          <ArrowRight
            className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
            aria-hidden
          />
        </Link>
      </div>
    </section>
  );
}

function trimPeriod(s: string): string {
  return s.replace(/[.!?]+$/, "");
}
