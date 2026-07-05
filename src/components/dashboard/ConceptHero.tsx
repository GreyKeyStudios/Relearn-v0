"use client";

import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";
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
      <section className="mb-12 pt-4">
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
    <section className="mb-12 pt-4">
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

      <p className="eyebrow mb-3">
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

      <Link
        href={hero.href}
        className="group mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-md bg-primary px-5 text-base font-medium text-primary-foreground transition-all hover:opacity-90"
      >
        {hero.ctaLabel}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </Link>
    </section>
  );
}

function trimPeriod(s: string): string {
  return s.replace(/[.!?]+$/, "");
}
