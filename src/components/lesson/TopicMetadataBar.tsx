import Link from "next/link";
import type { Topic, TopicDifficulty } from "@/content/types";
import { Badge } from "@/components/ui/Badge";
import { Clock, GitBranch } from "lucide-react";

interface TopicMetadataBarProps {
  certId: string;
  topic: Topic;
  prerequisiteNames?: Record<string, string>;
}

const difficultyVariant: Record<TopicDifficulty, "default" | "success" | "warning" | "info"> = {
  easy: "success",
  medium: "warning",
  hard: "info",
};

export function TopicMetadataBar({
  certId,
  topic,
  prerequisiteNames = {},
}: TopicMetadataBarProps) {
  const hasMeta =
    topic.difficulty != null ||
    topic.estimatedStudyMinutes != null ||
    (topic.prerequisites?.length ?? 0) > 0;

  if (!hasMeta) return null;

  return (
    <div className="mb-4 flex flex-wrap items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900/50 p-3">
      {topic.difficulty && (
        <Badge variant={difficultyVariant[topic.difficulty]}>
          {topic.difficulty.charAt(0).toUpperCase() + topic.difficulty.slice(1)}
        </Badge>
      )}
      {topic.estimatedStudyMinutes != null && (
        <span className="flex items-center gap-1 text-xs text-zinc-400">
          <Clock className="h-3.5 w-3.5" />
          ~{topic.estimatedStudyMinutes} min
        </span>
      )}
      {(topic.prerequisites?.length ?? 0) > 0 && (
        <div className="flex w-full flex-wrap items-center gap-1.5 pt-1">
          <GitBranch className="h-3.5 w-3.5 text-zinc-500" />
          <span className="text-xs text-zinc-500">Prerequisites:</span>
          {topic.prerequisites!.map((id) => (
            <Link
              key={id}
              href={`/cert/${certId}/lesson/${id}`}
              className="text-xs text-sky-400 hover:text-sky-300"
            >
              {prerequisiteNames[id] ?? id.replace(/-/g, " ")}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
