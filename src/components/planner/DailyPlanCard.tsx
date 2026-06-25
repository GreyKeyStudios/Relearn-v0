"use client";

import Link from "next/link";
import type { DailyPlan } from "@/lib/study-planner";
import { getAllCertifications } from "@/lib/content-selectors";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Clock } from "lucide-react";

interface DailyPlanCardProps {
  plan: DailyPlan;
  highlightHref?: string;
}

const typeIcon: Record<string, string> = {
  review: "Review",
  curriculum: "Learn",
  weak: "Weak area",
  objective_review: "Objective",
};

export function DailyPlanCard({ plan, highlightHref }: DailyPlanCardProps) {
  const certIds = new Set(plan.items.map((i) => i.certId));
  const showCertName = certIds.size > 1;
  const certNames = new Map(
    getAllCertifications().map((c) => [c.id, c.shortName])
  );

  if (plan.items.length === 0) {
    return (
      <Card>
        <p className="text-sm text-zinc-400">No plan items for today. Explore a certification to continue.</p>
        <Link href="/certifications">
          <Button className="mt-3 w-full" variant="secondary">
            Browse certifications
          </Button>
        </Link>
      </Card>
    );
  }

  return (
    <Card>
      <div className="mb-3 flex items-center justify-between text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <Clock className="h-3.5 w-3.5" />
          {plan.usedMinutes} / {plan.dailyBudgetMinutes} min
        </span>
        {plan.items.some((i) => i.type === "review") && (
          <span className="text-sky-400">Includes spaced review</span>
        )}
      </div>
      <ul className="flex flex-col gap-3">
        {plan.items.map((item) => (
          <li
            key={item.id}
            className={`rounded-lg border p-3 ${
              highlightHref === item.href
                ? "border-emerald-500/30 bg-emerald-500/5"
                : "border-zinc-800"
            }`}
          >
            <div className="mb-1 flex items-center justify-between gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-500">
                {typeIcon[item.type] ?? item.type}
              </span>
              <span className="text-xs text-zinc-500">~{item.estimatedMinutes} min</span>
            </div>
            <p className="font-medium text-zinc-100">{item.label}</p>
            <p className="text-xs text-zinc-500">
              {item.reason}
              {showCertName && ` · ${certNames.get(item.certId) ?? item.certId}`}
            </p>
            <Link href={item.href}>
              <Button className="mt-2 w-full">
                Start
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </Card>
  );
}
