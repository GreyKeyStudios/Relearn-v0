import { Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/Card";

interface TopicLightbulbMomentProps {
  moment: string;
}

export function TopicLightbulbMoment({ moment }: TopicLightbulbMomentProps) {
  return (
    <Card className="mb-6 border-amber-900/40 bg-amber-950/20 p-4">
      <div className="mb-2 flex items-center gap-2 text-amber-400">
        <Lightbulb className="h-4 w-4" />
        <h3 className="text-sm font-semibold uppercase tracking-wide">
          Lightbulb moment
        </h3>
      </div>
      <p className="text-base font-medium leading-relaxed text-zinc-100">{moment}</p>
      <p className="mt-2 text-xs text-zinc-500">
        If you remember one thing from this lesson, remember this.
      </p>
    </Card>
  );
}
