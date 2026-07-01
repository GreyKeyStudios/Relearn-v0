import type { ExperienceTerm } from "@/content/types";
import { BookOpen } from "lucide-react";

interface LaterLearnBlockProps {
  items: string[];
  topicLabel?: string;
}

/** Breadcrumb block — tells learner what can wait (LES-11). */
export function LaterLearnBlock({ items, topicLabel }: LaterLearnBlockProps) {
  if (items.length === 0) return null;

  return (
    <div className="mt-4 rounded-xl border border-sky-900/40 bg-sky-950/20 p-3">
      <div className="mb-2 flex items-center gap-2 text-sky-400">
        <BookOpen className="h-3.5 w-3.5 shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          {topicLabel ? `You'll learn this in: ${topicLabel}` : "Later you'll learn"}
        </span>
      </div>
      <ul className="flex flex-col gap-1">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-sm text-sky-100/80">
            <span className="text-sky-500" aria-hidden>
              ✓
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export function laterTopicLabelFromTerms(terms: ExperienceTerm[]): string | undefined {
  const later = terms.find((t) => t.tier === "later" && t.laterTopicLabel);
  return later?.laterTopicLabel;
}
