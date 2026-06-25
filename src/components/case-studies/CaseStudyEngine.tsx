"use client";

import { useMemo, useState } from "react";
import type { CaseStudyDefinition, CaseStudyNode } from "@/content/types";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useProgressStore } from "@/stores/progress-store";
import type { CaseStudyAttempt } from "@/types/case-study";

interface CaseStudyEngineProps {
  caseStudy: CaseStudyDefinition;
  certId: string;
  topicId: string;
  assignmentId: string;
  onComplete?: () => void;
}

interface PathStep {
  nodeId: string;
  choiceId?: string;
  optimal: boolean;
  weakConcept?: string;
}

function scorePath(steps: PathStep[], successIds: string[]): {
  score: number;
  maxScore: number;
  weakConcepts: string[];
} {
  const optimalChoices = steps.filter((s) => s.choiceId && s.optimal).length;
  const totalChoices = steps.filter((s) => s.choiceId).length;
  const reachedSuccess = steps.some((s) => successIds.includes(s.nodeId));
  const detours = steps.filter((s) => s.choiceId && !s.optimal).length;
  const weakConcepts = [
    ...new Set(steps.map((s) => s.weakConcept).filter(Boolean) as string[]),
  ];

  let score = reachedSuccess ? 70 : 30;
  if (totalChoices > 0) {
    score += Math.round((optimalChoices / totalChoices) * 30);
  }
  score -= detours * 10;
  score = Math.max(0, Math.min(100, score));

  return { score, maxScore: 100, weakConcepts };
}

export function CaseStudyEngine({
  caseStudy,
  certId,
  topicId,
  assignmentId,
  onComplete,
}: CaseStudyEngineProps) {
  const recordCaseStudyAttempt = useProgressStore((s) => s.recordCaseStudyAttempt);
  const completeAssignment = useProgressStore((s) => s.completeAssignment);

  const [currentNodeId, setCurrentNodeId] = useState(caseStudy.startNodeId);
  const [path, setPath] = useState<PathStep[]>([
    { nodeId: caseStudy.startNodeId, optimal: true },
  ]);
  const [finished, setFinished] = useState(false);
  const [result, setResult] = useState<ReturnType<typeof scorePath> | null>(null);

  const currentNode: CaseStudyNode | undefined = caseStudy.nodes[currentNodeId];

  const terminal = useMemo(() => {
    if (!currentNode) return true;
    return currentNode.choices.length === 0;
  }, [currentNode]);

  function handleChoice(choiceId: string, nextNodeId: string | null, isOptimal?: boolean, weakConcept?: string) {
    const step: PathStep = {
      nodeId: currentNodeId,
      choiceId,
      optimal: !!isOptimal,
      weakConcept,
    };
    const newPath = [...path, step];
    setPath(newPath);

    if (!nextNodeId) return;

    const nextNode = caseStudy.nodes[nextNodeId];
    setCurrentNodeId(nextNodeId);
    const extendedPath = [...newPath, { nodeId: nextNodeId, optimal: true }];

    if (nextNode.choices.length === 0) {
      const scored = scorePath(extendedPath, caseStudy.successNodeIds);
      setResult(scored);
      setFinished(true);

      const attempt: CaseStudyAttempt = {
        caseStudyId: caseStudy.id,
        certId,
        topicId,
        score: scored.score,
        maxScore: scored.maxScore,
        decisionPath: extendedPath.map((p) => p.nodeId),
        weakConcepts: scored.weakConcepts,
        completedAt: new Date().toISOString(),
      };
      recordCaseStudyAttempt(attempt, caseStudy.title);
      completeAssignment(certId, assignmentId, caseStudy.title, topicId);
      onComplete?.();
    }
  }

  if (!currentNode) {
    return <p className="text-sm text-zinc-400">Case study node not found.</p>;
  }

  if (finished && result) {
    return (
      <Card className="p-4">
        <h3 className="mb-2 text-lg font-semibold text-zinc-100">Case complete</h3>
        <p className="mb-4 text-2xl font-bold text-emerald-400">
          {result.score}/{result.maxScore}
        </p>
        {result.weakConcepts.length > 0 && (
          <div className="mb-4">
            <p className="mb-2 text-xs text-zinc-500">Concepts to review</p>
            <div className="flex flex-wrap gap-2">
              {result.weakConcepts.map((c) => (
                <Badge key={c} variant="warning">
                  {c}
                </Badge>
              ))}
            </div>
          </div>
        )}
        <p className="text-sm text-zinc-400">{currentNode.prompt}</p>
      </Card>
    );
  }

  return (
    <div className="flex flex-col gap-4">
      <Card className="p-4">
        <p className="whitespace-pre-wrap text-sm leading-relaxed text-zinc-200">
          {currentNode.prompt}
        </p>
      </Card>

      {currentNode.evidence && (
        <Card className="border-zinc-700 bg-zinc-900 p-4">
          <p className="mb-1 text-xs font-medium uppercase text-zinc-500">Evidence</p>
          <pre className="whitespace-pre-wrap font-mono text-xs text-zinc-300">
            {currentNode.evidence}
          </pre>
        </Card>
      )}

      {currentNode.choices.length > 0 && (
        <div className="flex flex-col gap-2">
          {currentNode.choices.map((choice) => (
            <Button
              key={choice.id}
              variant="secondary"
              className="h-auto min-h-12 whitespace-normal py-3 text-left"
              onClick={() =>
                handleChoice(
                  choice.id,
                  choice.nextNodeId,
                  choice.isOptimal,
                  choice.weakConcept
                )
              }
            >
              {choice.label}
            </Button>
          ))}
        </div>
      )}

      {terminal && !finished && (
        <Button
          onClick={() => {
            const scored = scorePath(path, caseStudy.successNodeIds);
            setResult(scored);
            setFinished(true);
            recordCaseStudyAttempt(
              {
                caseStudyId: caseStudy.id,
                certId,
                topicId,
                score: scored.score,
                maxScore: scored.maxScore,
                decisionPath: path.map((p) => p.nodeId),
                weakConcepts: scored.weakConcepts,
                completedAt: new Date().toISOString(),
              },
              caseStudy.title
            );
            completeAssignment(certId, assignmentId, caseStudy.title, topicId);
            onComplete?.();
          }}
        >
          Finish case study
        </Button>
      )}
    </div>
  );
}
