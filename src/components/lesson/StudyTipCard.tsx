import { Lightbulb } from "lucide-react";
import type { StudyTip } from "@/content/types";

interface StudyTipCardProps {
  tip: StudyTip;
}

export function StudyTipCard({ tip }: StudyTipCardProps) {
  return (
    <div className="rounded-xl border border-amber-800/50 bg-amber-950/25 p-3">
      <div className="mb-1.5 flex items-center gap-2 text-amber-400">
        <Lightbulb className="h-4 w-4 shrink-0" />
        <span className="text-xs font-semibold uppercase tracking-wide">
          {tip.title}
        </span>
      </div>
      <p className="text-sm leading-relaxed text-amber-100/90">{tip.body}</p>
    </div>
  );
}
