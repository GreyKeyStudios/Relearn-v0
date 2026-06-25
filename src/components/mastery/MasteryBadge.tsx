import type { MasteryLevel } from "@/types/mastery";
import { Badge } from "@/components/ui/Badge";

const labels: Record<MasteryLevel, string> = {
  new: "New",
  learning: "Learning",
  familiar: "Familiar",
  proficient: "Proficient",
  mastered: "Mastered",
};

const variants: Record<MasteryLevel, "default" | "success" | "warning" | "info"> = {
  new: "default",
  learning: "warning",
  familiar: "info",
  proficient: "success",
  mastered: "success",
};

interface MasteryBadgeProps {
  level: MasteryLevel;
  score?: number;
  showScore?: boolean;
}

export function MasteryBadge({ level, score, showScore }: MasteryBadgeProps) {
  return (
    <Badge variant={variants[level]}>
      {labels[level]}
      {showScore && score !== undefined ? ` · ${score}%` : ""}
    </Badge>
  );
}
