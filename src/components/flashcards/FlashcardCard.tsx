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
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-zinc-700 bg-zinc-900 p-6"
          style={{ backfaceVisibility: "hidden" }}
        >
          <p className="text-center text-lg font-medium text-zinc-100">{card.front}</p>
          <p className="absolute bottom-4 text-xs text-zinc-500">Tap to flip</p>
        </div>
        <div
          className="absolute inset-0 flex items-center justify-center rounded-2xl border border-emerald-700 bg-emerald-950/50 p-6"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="text-center text-base text-zinc-200">{card.back}</p>
        </div>
      </div>
    </button>
  );
}
