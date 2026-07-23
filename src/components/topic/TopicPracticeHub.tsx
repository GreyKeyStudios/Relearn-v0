"use client";

import Link from "next/link";
import type { Topic } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Brain, Layers, Library, Wrench, ChevronRight } from "lucide-react";

interface TopicPracticeHubProps {
  certId: string;
  topic: Topic;
  /** Prefer a single primary CTA at the top of the card (default true). */
  primaryCtaAtTop?: boolean;
}

export function getPracticeHubPrimaryAction(
  certId: string,
  topic: Topic
): { href: string; label: string } | null {
  if (topic.quiz.length > 0) {
    return {
      href: `/cert/${certId}/quiz/${topic.id}`,
      label: "Start with quiz",
    };
  }
  if (topic.flashcards.length > 0) {
    return {
      href: `/cert/${certId}/flashcards/${topic.id}`,
      label: "Start with flashcards",
    };
  }
  if ((topic.questionBank?.length ?? 0) > 0) {
    return {
      href: `/cert/${certId}/quiz/${topic.id}?bank=1`,
      label: "Start question bank drill",
    };
  }
  return null;
}

export function TopicPracticeHub({
  certId,
  topic,
  primaryCtaAtTop = true,
}: TopicPracticeHubProps) {
  const quizCount = topic.quiz.length;
  const flashcardCount = topic.flashcards.length;
  const bankCount = topic.questionBank?.length ?? 0;
  const assignmentCount = topic.assignments?.length ?? 0;

  if (quizCount === 0 && flashcardCount === 0 && bankCount === 0 && assignmentCount === 0) {
    return null;
  }

  const steps: {
    step: number;
    title: string;
    detail: string;
    href?: string;
    anchor?: string;
    icon: typeof Brain;
  }[] = [];

  let stepNum = 1;

  if (quizCount > 0) {
    steps.push({
      step: stepNum++,
      title: `Take the topic quiz (${quizCount} questions)`,
      detail: "Graded check — only what the lesson taught. Aim for 80%+ before moving on.",
      href: `/cert/${certId}/quiz/${topic.id}`,
      icon: Brain,
    });
  }

  if (flashcardCount > 0) {
    steps.push({
      step: stepNum++,
      title: `Run flashcards (${flashcardCount} cards)`,
      detail: "Spaced recall — reinforces key facts and mnemonics from the lesson.",
      href: `/cert/${certId}/flashcards/${topic.id}`,
      icon: Layers,
    });
  }

  if (assignmentCount > 0) {
    steps.push({
      step: stepNum++,
      title:
        assignmentCount === 1
          ? "Complete the practice assignment"
          : `Complete practice assignments (${assignmentCount})`,
      detail: "Hands-on drill or lab — scroll to Assignments below.",
      anchor: "topic-assignments",
      icon: Wrench,
    });
  }

  if (bankCount > 0) {
    steps.push({
      step: stepNum++,
      title: `Question bank drill (${bankCount} questions)`,
      detail: "Extra reps on what this lesson taught — not ahead-of-curriculum port trivia.",
      href: `/cert/${certId}/quiz/${topic.id}?bank=1`,
      icon: Library,
    });
  }

  const primary = getPracticeHubPrimaryAction(certId, topic);

  return (
    <Card className="mb-6 border-zinc-800 bg-zinc-900/60 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-sky-400">
        Practice path
      </h3>
      <p className="mt-1 text-sm text-zinc-400">
        Follow this order — teach first, then test, then drill deeper.
      </p>
      <p className="mt-1 text-xs text-zinc-500">Each step is clickable.</p>

      {primaryCtaAtTop && primary && (
        <div className="mt-4">
          <Link href={primary.href}>
            <Button className="w-full">
              <Brain className="mr-2 inline h-4 w-4" />
              {primary.label}
            </Button>
          </Link>
        </div>
      )}

      <ol className="mt-4 flex flex-col gap-3">
        {steps.map((item) => {
          const Icon = item.icon;
          const content = (
            <div className="group flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/50 p-3 transition-colors hover:border-zinc-700">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-sky-950 text-xs font-semibold text-sky-400">
                {item.step}
              </span>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 text-sm font-medium text-zinc-100">
                  <Icon className="h-4 w-4 shrink-0 text-zinc-500" />
                  {item.title}
                </div>
                <p className="mt-0.5 text-xs leading-relaxed text-zinc-500">{item.detail}</p>
              </div>
              <ChevronRight className="h-5 w-5 shrink-0 text-zinc-600 transition-colors group-hover:text-zinc-400" />
            </div>
          );

          if (item.href) {
            return (
              <li key={item.step}>
                <Link href={item.href} className="block">
                  {content}
                </Link>
              </li>
            );
          }

          if (item.anchor) {
            return (
              <li key={item.step}>
                <a href={`#${item.anchor}`} className="block">
                  {content}
                </a>
              </li>
            );
          }

          return <li key={item.step}>{content}</li>;
        })}
      </ol>

      {!primaryCtaAtTop && primary && (
        <div className="mt-4">
          <Link href={primary.href}>
            <Button className="w-full">
              <Brain className="mr-2 inline h-4 w-4" />
              {primary.label}
            </Button>
          </Link>
        </div>
      )}
    </Card>
  );
}
