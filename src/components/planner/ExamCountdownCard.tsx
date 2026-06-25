"use client";

import type { ExamPaceSummary } from "@/lib/exam-pace";
import { Card } from "@/components/ui/Card";
import { Calendar, TrendingUp, AlertTriangle } from "lucide-react";

interface ExamCountdownCardProps {
  pace: ExamPaceSummary;
}

export function ExamCountdownCard({ pace }: ExamCountdownCardProps) {
  const Icon =
    pace.onTrack === false ? AlertTriangle : pace.onTrack === true ? TrendingUp : Calendar;

  const iconColor =
    pace.onTrack === false
      ? "text-amber-400"
      : pace.onTrack === true
        ? "text-emerald-400"
        : "text-sky-400";

  return (
    <Card className="mb-6 border-sky-500/20 bg-sky-500/5 p-4">
      <div className="flex items-start gap-3">
        <Icon className={`mt-0.5 h-5 w-5 shrink-0 ${iconColor}`} />
        <div className="min-w-0">
          <p className="text-lg font-semibold text-zinc-50">
            {pace.daysRemaining === 0
              ? "Exam day"
              : `${pace.daysRemaining} day${pace.daysRemaining === 1 ? "" : "s"} until exam`}
          </p>
          <p className="mt-1 text-sm text-zinc-400">{pace.paceMessage}</p>
          {pace.remainingSteps > 0 && (
            <p className="mt-2 text-xs text-zinc-500">
              {pace.remainingSteps} of {pace.totalSteps} curriculum steps remaining
            </p>
          )}
        </div>
      </div>
    </Card>
  );
}
