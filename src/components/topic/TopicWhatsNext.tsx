"use client";

import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { DisclosureSection } from "@/components/ui/DisclosureSection";

export interface NextTopicInfo {
  topicId: string;
  topicName: string;
  href: string;
}

interface TopicWhatsNextProps {
  certId: string;
  topicId: string;
  topicName: string;
  nextTopic: NextTopicInfo | null;
  /** quiz = after graded quiz; flashcards = after deck; hub = topic practice menu */
  variant?: "quiz" | "flashcards" | "hub";
  onBackToTopic?: () => void;
}

export function TopicWhatsNext({
  certId,
  topicId,
  topicName,
  nextTopic,
  variant = "hub",
  onBackToTopic,
}: TopicWhatsNextProps) {
  const lessonHref = `/cert/${certId}/lesson/${topicId}`;

  const subtitle =
    variant === "quiz"
      ? "Review your answers below, or keep studying this topic."
      : variant === "flashcards"
        ? "Run the deck again or return to practice on this topic."
        : "Quiz, flashcards, and drills stay available on this topic.";

  const body = (
    <>
      <p className="text-sm text-zinc-400">{subtitle}</p>
      <div className={`${variant === "hub" ? "mt-3" : "mt-4"} flex flex-col gap-2`}>
        {nextTopic && (
          <Link href={nextTopic.href}>
            <Button className="w-full">
              Continue to {nextTopic.topicName}
              <ArrowRight className="ml-2 inline h-4 w-4" />
            </Button>
          </Link>
        )}
        {onBackToTopic ? (
          <Button variant="secondary" className="w-full" onClick={onBackToTopic}>
            <BookOpen className="mr-2 inline h-4 w-4" />
            More practice on {topicName}
          </Button>
        ) : (
          <Link href={lessonHref}>
            <Button variant="secondary" className="w-full">
              <BookOpen className="mr-2 inline h-4 w-4" />
              More practice on {topicName}
            </Button>
          </Link>
        )}
      </div>
    </>
  );

  if (variant === "hub") {
    return (
      <DisclosureSection
        title="What's next?"
        titleClassName="text-sky-300"
        className="border-sky-900/40 bg-sky-950/20"
      >
        {body}
      </DisclosureSection>
    );
  }

  return (
    <Card className="border-sky-900/40 bg-sky-950/20 p-4">
      <p className="text-sm font-medium text-zinc-200">What&apos;s next?</p>
      {body}
    </Card>
  );
}
