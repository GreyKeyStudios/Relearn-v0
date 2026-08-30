"use client";

import { useState } from "react";
import type { Flashcard } from "@/content/types";

interface FlashcardCardProps {
  card: Flashcard;
  flipped: boolean;
  onFlip: () => void;
}

export function FlashcardCard({ card, flipped, onFlip }: FlashcardCardProps) {
  return (
    <button
      type="button"
      onClick={onFlip}
      className="perspective-1000 h-56 w-full"
      style={{ perspective: "1000px" }}
    >
      <div
        className="relative h-full w-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        <div
          className="relearn-card draft-grid absolute inset-0 flex items-center justify-center overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-6"
          style={{ backfaceVisibility: "hidden", WebkitBackfaceVisibility: "hidden" }}
        >
          <p className="text-center font-serif text-xl font-medium text-foreground">{card.front}</p>
          <p className="absolute bottom-4 text-xs text-faint">Tap to flip</p>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center overflow-hidden rounded-[var(--radius)] border border-accent/45 bg-accent/10 p-6"
          style={{
            backfaceVisibility: "hidden",
            WebkitBackfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <p className="text-center text-base leading-relaxed text-foreground">{card.back}</p>
        </div>
      </div>
    </button>
  );
}
