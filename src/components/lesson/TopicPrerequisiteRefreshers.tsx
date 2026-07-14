import Link from "next/link";
import { BookOpen } from "lucide-react";
import { DisclosureSection } from "@/components/ui/DisclosureSection";
import {
  getPrerequisiteRefreshers,
  type PrerequisiteRefresherItem,
} from "@/lib/prerequisite-refreshers";

interface TopicPrerequisiteRefreshersProps {
  certId: string;
  topicId: string;
  prerequisiteIds: string[];
  prerequisiteNames: Record<string, string>;
}

/**
 * Collapsed-by-default “Need a refresher?” before the lesson player.
 * Combines optional quick concept tips with curriculum prerequisite links.
 */
export function TopicPrerequisiteRefreshers({
  certId,
  topicId,
  prerequisiteIds,
  prerequisiteNames,
}: TopicPrerequisiteRefreshersProps) {
  const tips = getPrerequisiteRefreshers(topicId);
  const fromPrereqs: PrerequisiteRefresherItem[] = prerequisiteIds.map((id) => ({
    id: `prereq-${id}`,
    title: prerequisiteNames[id] ?? id.replace(/-/g, " "),
    tip: "Open the lesson, skim the lightbulb moment, then come back here (~30–60s).",
    topicId: id,
  }));

  const items: PrerequisiteRefresherItem[] = [...tips];
  for (const row of fromPrereqs) {
    if (!items.some((i) => i.topicId === row.topicId)) {
      items.push(row);
    }
  }

  if (items.length === 0) return null;

  return (
    <div className="mb-4">
      <DisclosureSection
        title="Need a refresher?"
        titleClassName="text-amber-400"
        className="mb-0 border-amber-900/30"
      >
        <p className="mb-3 flex items-start gap-2 text-xs text-zinc-500">
          <BookOpen className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden />
          <span>
            Shaky on the foundations? Spend half a minute here before you dig into this
            lesson — understanding beats guessing.
          </span>
        </p>
        <ul className="flex flex-col gap-3">
          {items.map((item) => (
            <li key={item.id} className="text-sm">
              {item.topicId ? (
                <Link
                  href={`/cert/${certId}/lesson/${item.topicId}`}
                  className="font-medium text-sky-400 hover:text-sky-300"
                >
                  {item.title}
                </Link>
              ) : (
                <span className="font-medium text-zinc-100">{item.title}</span>
              )}
              <p className="mt-0.5 text-xs leading-relaxed text-zinc-400">{item.tip}</p>
            </li>
          ))}
        </ul>
      </DisclosureSection>
    </div>
  );
}
