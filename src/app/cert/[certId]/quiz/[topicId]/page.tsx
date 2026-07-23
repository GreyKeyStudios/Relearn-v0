import { notFound } from "next/navigation";
import { getTopic } from "@/lib/content-selectors";
import { allTopicParams } from "@/lib/static-params";
import { QuizPageClient } from "./QuizPageClient";

interface QuizPageProps {
  params: Promise<{ certId: string; topicId: string }>;
}

export function generateStaticParams() {
  return allTopicParams();
}

export default async function QuizPage({ params }: QuizPageProps) {
  const { certId, topicId } = await params;
  const resolved = getTopic(certId, topicId);
  if (!resolved) notFound();

  const { cert, topic } = resolved;
  const hasQuestions =
    topic.quiz.length > 0 || (topic.questionBank?.length ?? 0) > 0;
  if (!hasQuestions) notFound();

  return (
    <QuizPageClient
      certId={certId}
      topicId={topicId}
      cert={cert}
      topic={topic}
    />
  );
}
