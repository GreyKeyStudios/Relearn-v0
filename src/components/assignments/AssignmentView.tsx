"use client";

import { useState } from "react";
import Link from "next/link";
import { ExternalLink, CheckCircle2, Clock, ListChecks } from "lucide-react";
import type { Assignment, ExternalResource } from "@/content/types";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { CaseStudyEngine } from "@/components/case-studies/CaseStudyEngine";
import { assignmentKey } from "@/lib/ids";
import { getCaseStudy } from "@/lib/case-study-selectors";
import { useProgressStore } from "@/stores/progress-store";

interface AssignmentViewProps {
  certId: string;
  certShortName: string;
  topicName: string;
  topicId: string;
  assignment: Assignment;
  externalResource?: ExternalResource;
}

const typeLabels: Record<Assignment["type"], string> = {
  reading: "Reading",
  quiz: "Quiz",
  flashcard: "Flashcards",
  simulator: "Simulator",
  "external-lab": "External lab",
  "case-study": "Case study",
};

export function AssignmentView({
  certId,
  certShortName,
  topicName,
  topicId,
  assignment,
  externalResource,
}: AssignmentViewProps) {
  const key = assignmentKey(certId, assignment.id);
  const isComplete = useProgressStore((s) => !!s.completedAssignments[key]);
  const completeAssignment = useProgressStore((s) => s.completeAssignment);
  const [checked, setChecked] = useState<Record<number, boolean>>({});
  const caseStudy =
    assignment.caseStudyId ? getCaseStudy(assignment.caseStudyId) : undefined;

  const allChecked =
    assignment.completionCriteria.length === 0 ||
    assignment.completionCriteria.every((_, i) => checked[i]);

  function toggleCheck(index: number) {
    setChecked((prev) => ({ ...prev, [index]: !prev[index] }));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-2">
        <Badge variant="default">{typeLabels[assignment.type]}</Badge>
        {assignment.challengeKind === "recreate" && (
          <Badge variant="info">Recreate</Badge>
        )}
        {assignment.challengeKind === "interpret" && (
          <Badge variant="info">Interpret</Badge>
        )}
        <Badge variant="default">
          <Clock className="mr-1 inline h-3 w-3" />~{assignment.estimatedMinutes} min
        </Badge>
        {isComplete && (
          <Badge variant="success">
            <CheckCircle2 className="mr-1 inline h-3 w-3" />
            Complete
          </Badge>
        )}
      </div>

      <Card className="p-4">
        <p className="mb-1 text-xs text-zinc-500">
          {certShortName} · {topicName}
        </p>
        {assignment.creativePrompt && (
          <p className="mb-3 rounded-lg border border-violet-800/40 bg-violet-950/30 px-3 py-2 text-sm text-violet-200">
            <span className="font-medium">Prompt: </span>
            {assignment.creativePrompt}
          </p>
        )}
        {!caseStudy && (
          <div className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-300">
            {assignment.instructions}
          </div>
        )}
      </Card>

      {!caseStudy && (assignment.audibleTraitRubric?.length ?? 0) > 0 && (
        <Card className="p-4">
          <p className="mb-2 text-sm font-medium text-zinc-200">
            Audible traits to match
          </p>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {assignment.audibleTraitRubric!.map((trait) => (
              <li key={trait}>{trait}</li>
            ))}
          </ul>
        </Card>
      )}

      {!caseStudy && (assignment.reflectionRubric?.length ?? 0) > 0 && (
        <Card className="p-4">
          <p className="mb-2 text-sm font-medium text-zinc-200">
            Design reflection
          </p>
          <ul className="list-inside list-disc space-y-1.5 text-sm text-zinc-300">
            {assignment.reflectionRubric!.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Card>
      )}

      {caseStudy && (
        <CaseStudyEngine
          caseStudy={caseStudy}
          certId={certId}
          topicId={topicId}
          assignmentId={assignment.id}
        />
      )}

      {!caseStudy && externalResource && (
        <Card className="p-4">
          <p className="mb-2 text-sm font-medium text-zinc-200">{externalResource.name}</p>
          {externalResource.id === "packet-tracer" && (
            <Link
              href={`/cert/${certId}/tool/packet-tracer`}
              className="mb-3 block rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-3 py-2 text-sm text-emerald-400 hover:bg-emerald-500/10"
            >
              First time? Read the Packet Tracer getting-started guide →
            </Link>
          )}
          {externalResource.installNotes && (
            <p className="mb-3 text-sm text-zinc-400">{externalResource.installNotes}</p>
          )}
          <a
            href={externalResource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-2 text-sm font-medium text-sky-400 hover:bg-zinc-700"
          >
            <ExternalLink className="h-4 w-4" />
            Open {externalResource.name}
          </a>
        </Card>
      )}

      {!caseStudy && assignment.type === "simulator" && assignment.simulatorId && (
        <Link href={`/cert/${certId}/simulator/${assignment.simulatorId}?topicId=${topicId}&assignmentId=${assignment.id}`}>
          <Button className="w-full">Start simulator drill</Button>
        </Link>
      )}

      {!caseStudy && assignment.completionCriteria.length > 0 && (
        <Card className="p-4">
          <div className="mb-3 flex items-center gap-2 text-zinc-200">
            <ListChecks className="h-4 w-4" />
            <span className="text-sm font-medium">Completion checklist</span>
          </div>
          <ul className="space-y-3">
            {assignment.completionCriteria.map((criterion, index) => (
              <li key={criterion}>
                <label className="flex min-h-12 cursor-pointer items-start gap-3 rounded-lg border border-zinc-800 p-3 hover:bg-zinc-900">
                  <input
                    type="checkbox"
                    checked={!!checked[index]}
                    onChange={() => toggleCheck(index)}
                    className="mt-1 h-4 w-4 rounded border-zinc-600"
                  />
                  <span className="text-sm text-zinc-300">{criterion}</span>
                </label>
              </li>
            ))}
          </ul>
        </Card>
      )}

      {!caseStudy && !isComplete && (
        <Button
          className="w-full"
          disabled={!allChecked}
          onClick={() =>
            completeAssignment(certId, assignment.id, assignment.title, topicId)
          }
        >
          Mark assignment complete
        </Button>
      )}
    </div>
  );
}
