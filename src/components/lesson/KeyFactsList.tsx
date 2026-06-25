interface KeyFactsListProps {
  facts: string[];
}

export function KeyFactsList({ facts }: KeyFactsListProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-emerald-400">
        Key Facts
      </h3>
      <ul className="flex flex-col gap-2">
        {facts.map((fact, i) => (
          <li key={i} className="flex gap-2 text-sm text-zinc-300">
            <span className="text-emerald-500">•</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
