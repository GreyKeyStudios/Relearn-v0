import { notFound } from "next/navigation";
import { getObjectiveLabel, getTopic } from "@/lib/content-selectors";
import { filterQuestionsByObjective } from "@/lib/objective-mastery";
import { QuizPageClient } from "./QuizPageClient";

interface QuizPageProps {
  params: Promise<{ certId: string; topicId: string }>;
  searchParams: Promise<{ bank?: string; objective?: string; retry?: string }>;
}

export default async function QuizPage({ params, searchParams }: QuizPageProps) {
  const { certId, topicId } = await params;
  const { bank, objective, retry } = await searchParams;
  const resolved = getTopic(certId, topicId);
  if (!resolved) notFound();

  const { cert, topic } = resolved;
  const isBank = bank === "1";
  const isRetryMissed = retry === "missed";
  const baseQuestions = isBank ? (topic.questionBank ?? []) : topic.quiz;
  let questions = baseQuestions;
  let objectiveUnavailable = false;

  if (objective) {
    const filtered = filterQuestionsByObjective(baseQuestions, objective);
    if (filtered.length > 0) {
      questions = filtered;
    } else {
      objectiveUnavailable = true;
    }
  }

  if (questions.length === 0) notFound();

  const subtitle = objective
    ? `${getObjectiveLabel(certId, objective)} · ${cert.shortName}`
    : `${topic.name} · ${cert.shortName}`;

  const title = isRetryMissed
    ? "Retry Missed"
    : isBank
      ? "Question Bank Drill"
      : objective
        ? "Objective Practice"
        : "Quiz";

  return (
    <QuizPageClient
      certId={certId}
      topicId={topicId}
      topic={topic}
      questions={questions}
      isBank={isBank}
      isRetryMissed={isRetryMissed}
      objective={objective}
      objectiveUnavailable={objectiveUnavailable}
      subtitle={subtitle}
      title={title}
    />
  );
}
