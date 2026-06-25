import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { FlashcardDeck } from "@/components/flashcards/FlashcardDeck";
import { getTopic } from "@/lib/content-selectors";

interface FlashcardsPageProps {
  params: Promise<{ certId: string; topicId: string }>;
}

export default async function FlashcardsPage({ params }: FlashcardsPageProps) {
  const { certId, topicId } = await params;
  const resolved = getTopic(certId, topicId);
  if (!resolved) notFound();

  const { cert, topic } = resolved;

  return (
    <div>
      <PageHeader
        title="Flashcards"
        subtitle={`${topic.name} · ${cert.shortName}`}
        backHref={`/cert/${certId}/lesson/${topicId}`}
      />
      <FlashcardDeck certId={certId} topic={topic} cards={topic.flashcards} />
    </div>
  );
}
