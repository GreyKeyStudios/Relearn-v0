import { DisclosureSection } from "@/components/ui/DisclosureSection";

interface KeyFactsListProps {
  facts: string[];
  subtitle?: string;
  /** When true, wrap in a collapsed-by-default disclosure (hub progressive disclosure). */
  collapsible?: boolean;
}

export function KeyFactsList({
  facts,
  subtitle,
  collapsible = false,
}: KeyFactsListProps) {
  if (facts.length === 0) return null;

  const body = (
    <>
      {subtitle && !collapsible && (
        <p className="mt-1 text-xs text-zinc-500">{subtitle}</p>
      )}
      {subtitle && collapsible && (
        <p className="mb-3 text-xs text-zinc-500">{subtitle}</p>
      )}
      <ul className="flex flex-col gap-2">
        {facts.map((fact, i) => (
          <li key={i} className="flex gap-2 text-sm text-zinc-300">
            <span className="text-emerald-500">•</span>
            <span>{fact}</span>
          </li>
        ))}
      </ul>
    </>
  );

  if (collapsible) {
    return (
      <DisclosureSection title="Key Facts" titleClassName="text-emerald-400">
        {body}
      </DisclosureSection>
    );
  }

  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-4">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">
        Key Facts
      </h3>
      {body}
    </div>
  );
}
