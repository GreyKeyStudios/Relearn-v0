interface DeferredTermProps {
  term: string;
}

/** Gray pill for vocabulary taught on a later screen (LES-5). */
export function DeferredTerm({ term }: DeferredTermProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-zinc-600/60 bg-zinc-800/50 px-1.5 py-0.5 text-xs text-zinc-400">
      {term}
      <span className="ml-1 text-[10px] text-zinc-500">(soon)</span>
    </span>
  );
}
