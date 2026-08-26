"use client";

import type { Activity, ActivityType } from "@/types/progress";
import { Card } from "@/components/ui/Card";
import { BookOpen, Brain, ClipboardCheck, Dumbbell, Layers, Target } from "lucide-react";

interface ActivityFeedProps {
  activities: Activity[];
  limit?: number;
}

const icons: Record<ActivityType, typeof BookOpen> = {
  lesson_complete: BookOpen,
  quiz: Brain,
  flashcards: Layers,
  simulator: Target,
  assignment_complete: ClipboardCheck,
  practice: Dumbbell,
};

export function ActivityFeed({ activities, limit = 5 }: ActivityFeedProps) {
  const items = activities.slice(0, limit);

  if (items.length === 0) {
    return (
      <Card>
        <p className="text-sm text-zinc-400">No activity yet. Start studying!</p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-2">
      {items.map((activity) => {
        const Icon = icons[activity.type];
        const time = new Date(activity.timestamp).toLocaleString(undefined, {
          month: "short",
          day: "numeric",
          hour: "numeric",
          minute: "2-digit",
        });
        return (
          <Card key={activity.id} className="flex items-center gap-3 py-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-zinc-800">
              <Icon className="h-4 w-4 text-zinc-400" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-zinc-200">{activity.label}</p>
              <p className="text-xs text-zinc-500">{time}</p>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
