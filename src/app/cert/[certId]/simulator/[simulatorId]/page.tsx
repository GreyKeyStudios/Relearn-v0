"use client";

import { use, useCallback } from "react";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import {
  SimulatorPlaceholder,
  SimulatorRunner,
  SimulatorShell,
} from "@/components/simulators/SimulatorShell";
import { getSimulator } from "@/content/simulators/registry";
import { getAssignment, getCertification } from "@/lib/content-selectors";
import { meetsSimulatorCompletionCriteria } from "@/lib/assignment-completion";
import { topicKey } from "@/lib/ids";
import { useProgressStore } from "@/stores/progress-store";
import type { SimulatorResult } from "@/types/simulator";

interface SimulatorPageProps {
  params: Promise<{ certId: string; simulatorId: string }>;
  searchParams: Promise<{ topicId?: string; assignmentId?: string }>;
}

export default function SimulatorPage({ params, searchParams }: SimulatorPageProps) {
  const { certId, simulatorId } = use(params);
  const { topicId, assignmentId } = use(searchParams);

  const cert = getCertification(certId);
  if (!cert) notFound();

  const entry = getSimulator(simulatorId);
  const recordSimulatorAttempt = useProgressStore((s) => s.recordSimulatorAttempt);
  const completeAssignment = useProgressStore((s) => s.completeAssignment);

  const handleComplete = useCallback(
    (result: SimulatorResult) => {
      recordSimulatorAttempt({
        simulatorId,
        certId,
        topicKey: topicId ? topicKey(certId, topicId) : undefined,
        assignmentId,
        score: result.score,
        total: result.total,
        weakConcepts: result.weakConcepts,
        completed: result.completed,
        completedAt: new Date().toISOString(),
      });

      if (assignmentId && topicId) {
        const resolved = getAssignment(certId, assignmentId);
        if (
          resolved?.assignment.type === "simulator" &&
          meetsSimulatorCompletionCriteria(result, resolved.assignment.completionCriteria)
        ) {
          completeAssignment(
            certId,
            assignmentId,
            resolved.assignment.title,
            topicId
          );
        }
      }
    },
    [certId, simulatorId, topicId, assignmentId, recordSimulatorAttempt, completeAssignment]
  );

  const backHref = topicId
    ? `/cert/${certId}/lesson/${topicId}`
    : `/cert/${certId}`;

  const SimulatorComponent = entry?.component;

  return (
    <div>
      <PageHeader
        title={entry?.name ?? simulatorId}
        subtitle={`Simulator · ${cert.shortName}`}
        backHref={backHref}
      />
      <SimulatorShell
        simulatorId={simulatorId}
        title={entry?.name ?? simulatorId}
        description={
          entry
            ? undefined
            : "Not yet in registry — BSim agents will register this simulator."
        }
        onComplete={handleComplete}
      >
        {SimulatorComponent ? (
          <SimulatorRunner Component={SimulatorComponent} />
        ) : (
          <SimulatorPlaceholder />
        )}
      </SimulatorShell>
    </div>
  );
}
