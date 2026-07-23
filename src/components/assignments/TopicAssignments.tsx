"use client";

import Link from "next/link";
import {
  CheckCircle2,
  Clock,
  ExternalLink,
  FileText,
  Gamepad2,
  ChevronRight,
} from "lucide-react";
import type { Assignment } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { DisclosureSection } from "@/components/ui/DisclosureSection";
import { assignmentKey } from "@/lib/ids";
import { getAssignmentHref, getOrderedPracticeAssignments } from "@/lib/curriculum";
import { useProgressStore } from "@/stores/progress-store";

interface TopicAssignmentsProps {
  certId: string;
  assignments: Assignment[] | undefined;
}

const typeMeta: Record<
  Assignment["type"],
  { label: string; Icon: typeof Gamepad2 }
> = {
  simulator: { label: "Simulator", Icon: Gamepad2 },
  "external-lab": { label: "External lab", Icon: ExternalLink },
  "case-study": { label: "Case study", Icon: FileText },
  reading: { label: "Reading", Icon: FileText },
  quiz: { label: "Quiz", Icon: FileText },
  flashcard: { label: "Flashcards", Icon: FileText },
};

export function TopicAssignments({ certId, assignments }: TopicAssignmentsProps) {
  const completedAssignments = useProgressStore((s) => s.completedAssignments);
  const ordered = getOrderedPracticeAssignments(assignments);

  if (ordered.length === 0) return null;

  return (
    <section id="topic-assignments" className="mb-6 scroll-mt-6">
      <DisclosureSection title="Practice Assignments" titleClassName="text-zinc-400">
        <div className="flex flex-col gap-2">
          {ordered.map((assignment, index) => {
            const key = assignmentKey(certId, assignment.id);
            const isComplete = !!completedAssignments[key];
            const { label, Icon } = typeMeta[assignment.type];
            const href = getAssignmentHref(certId, assignment.id);

            return (
              <Link key={assignment.id} href={href}>
                <Card className="flex items-center gap-3 py-3">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-zinc-800 text-xs font-medium text-zinc-400">
                    {index + 1}
                  </span>
                  <Icon className="h-4 w-4 shrink-0 text-sky-400" />
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-zinc-200">{assignment.title}</p>
                    <div className="mt-1 flex flex-wrap items-center gap-2">
                      <Badge variant="default">{label}</Badge>
                      <span className="flex items-center gap-1 text-xs text-zinc-500">
                        <Clock className="h-3 w-3" />~{assignment.estimatedMinutes} min
                      </span>
                    </div>
                  </div>
                  {isComplete ? (
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                  ) : (
                    <ChevronRight className="h-5 w-5 shrink-0 text-zinc-600" />
                  )}
                </Card>
              </Link>
            );
          })}
        </div>
      </DisclosureSection>
    </section>
  );
}
