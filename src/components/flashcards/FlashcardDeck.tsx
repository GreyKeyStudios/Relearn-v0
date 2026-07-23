"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import type { Topic, Flashcard } from "@/content/types";
import type { FlashcardResult } from "@/types/progress";
import { topicKey } from "@/lib/ids";
import { useProgressStore } from "@/stores/progress-store";
import { useStoreHydration } from "@/hooks/use-store-hydration";
import { FlashcardCard } from "./FlashcardCard";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { TopicWhatsNext, type NextTopicInfo } from "@/components/topic/TopicWhatsNext";

function shuffle<T>(array: T[]): T[] {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function orderDeck(cards: Flashcard[], deckOrder: string[]): Flashcard[] {
  const byId = new Map(cards.map((c) => [c.id, c]));
  return deckOrder.map((id) => byId.get(id)).filter((c): c is Flashcard => !!c);
}

interface FlashcardDeckProps {
  certId: string;
  topic: Topic;
  cards: Flashcard[];
  nextTopic?: NextTopicInfo | null;
}

export function FlashcardDeck({ certId, topic, cards, nextTopic = null }: FlashcardDeckProps) {
  const router = useRouter();
  const hydrated = useStoreHydration();
  const recordFlashcardSession = useProgressStore((s) => s.recordFlashcardSession);
  const saveFlashcardProgress = useProgressStore((s) => s.saveFlashcardProgress);
  const clearFlashcardProgress = useProgressStore((s) => s.clearFlashcardProgress);
  const key = topicKey(certId, topic.id);

  const [deck, setDeck] = useState<Flashcard[]>(cards);
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [results, setResults] = useState<FlashcardResult[]>([]);
  const [finished, setFinished] = useState(false);
  const restoredRef = useRef(false);

  const deckOrder = useMemo(() => deck.map((c) => c.id), [deck]);

  useEffect(() => {
    if (!hydrated || restoredRef.current) return;

    const saved = useProgressStore.getState().flashcardInProgress;
    if (saved?.topicKey === key) {
      setDeck(orderDeck(cards, saved.deckOrder));
      setIndex(saved.index);
      setResults(saved.results);
      setFlipped(saved.flipped);
    } else if (saved?.topicKey) {
      clearFlashcardProgress();
      setDeck(shuffle(cards));
    } else {
      setDeck(shuffle(cards));
    }

    restoredRef.current = true;
  }, [hydrated, key, cards, clearFlashcardProgress]);

  useEffect(() => {
    if (!hydrated || !restoredRef.current || finished) return;

    saveFlashcardProgress({
      topicKey: key,
      certId,
      deckOrder,
      index,
      results,
      flipped,
    });
  }, [
    hydrated,
    key,
    certId,
    deckOrder,
    index,
    results,
    flipped,
    finished,
    saveFlashcardProgress,
  ]);

  const current = deck[index];
  const gotItCount = results.filter((r) => r.gotIt).length;
  const missedCount = results.filter((r) => !r.gotIt).length;

  const handleResponse = (gotIt: boolean) => {
    if (!current) return;
    const newResults = [...results, { cardId: current.id, gotIt }];
    setResults(newResults);
    setFlipped(false);

    if (index < deck.length - 1) {
      setIndex((i) => i + 1);
    } else {
      recordFlashcardSession(
        {
          topicKey: key,
          certId,
          results: newResults,
          completedAt: new Date().toISOString(),
        },
        topic.name
      );
      setFinished(true);
    }
  };

  if (!hydrated || !restoredRef.current) {
    return <p className="text-center text-sm text-zinc-500">Loading flashcards…</p>;
  }

  if (finished) {
    return (
      <div className="flex flex-col gap-6">
        <Card className="text-center">
          <p className="text-sm text-zinc-400">Session Complete</p>
          <div className="mt-4 flex justify-center gap-8">
            <div>
              <p className="text-2xl font-bold text-emerald-400">{gotItCount}</p>
              <p className="text-xs text-zinc-500">Got it</p>
            </div>
            <div>
              <p className="text-2xl font-bold text-amber-400">{missedCount}</p>
              <p className="text-xs text-zinc-500">Missed</p>
            </div>
          </div>
        </Card>
        <TopicWhatsNext
          certId={certId}
          topicId={topic.id}
          topicName={topic.name}
          nextTopic={nextTopic}
          variant="flashcards"
          onBackToTopic={() => router.push(`/cert/${certId}/lesson/${topic.id}`)}
        />
      </div>
    );
  }

  if (!current) {
    return <p className="text-center text-sm text-zinc-500">No flashcards available.</p>;
  }

  return (
    <div className="flex flex-col gap-6">
      <p className="text-center text-sm text-zinc-400">
        {index + 1} / {deck.length}
      </p>
      <FlashcardCard
        card={current}
        flipped={flipped}
        onFlip={() => setFlipped((f) => !f)}
      />
      <div className="flex gap-3">
        <Button
          variant="danger"
          className="flex-1"
          onClick={() => handleResponse(false)}
          disabled={!flipped}
        >
          Missed it
        </Button>
        <Button
          variant="primary"
          className="flex-1"
          onClick={() => handleResponse(true)}
          disabled={!flipped}
        >
          Got it
        </Button>
      </div>
      {!flipped && (
        <p className="text-center text-xs text-zinc-500">Flip the card before rating</p>
      )}
    </div>
  );
}
