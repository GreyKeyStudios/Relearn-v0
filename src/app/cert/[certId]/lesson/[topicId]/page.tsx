import { notFound } from "next/navigation";
import { getTopic, flattenTopics } from "@/lib/content-selectors";
import { LessonPageClient } from "./LessonPageClient";

interface LessonPageProps {
  params: Promise<{ certId: string; topicId: string }>;
}

export default async function LessonPage({ params }: LessonPageProps) {
  const { certId, topicId } = await params;
  const resolved = getTopic(certId, topicId);
  if (!resolved) notFound();

  const { cert, domain, topic } = resolved;

  const prerequisiteNames = Object.fromEntries(
    flattenTopics(cert).map((t) => [t.id, t.name])
  );

  return (
    <LessonPageClient
      certId={certId}
      topicId={topicId}
      cert={cert}
      domain={domain}
      topic={topic}
      prerequisiteNames={prerequisiteNames}
    />
  );
}
