"use client";

import {
  createContext,
  type ComponentType,
  type ReactNode,
  useContext,
  useState,
} from "react";
import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { CheckCircle2, Target } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import type { SimulatorResult } from "@/types/simulator";

const SimulatorCompleteContext = createContext<
  ((result: SimulatorResult) => void) | null
>(null);

export function useSimulatorComplete(): (result: SimulatorResult) => void {
  const complete = useContext(SimulatorCompleteContext);
  if (!complete) {
    throw new Error("useSimulatorComplete must be used within SimulatorShell");
  }
  return complete;
}

interface SimulatorShellProps {
  simulatorId: string;
  title: string;
  description?: string;
  children: ReactNode;
  onComplete: (result: SimulatorResult) => void;
}

export function SimulatorShell({
  simulatorId,
  title,
  description,
  children,
  onComplete,
}: SimulatorShellProps) {
  const [result, setResult] = useState<SimulatorResult | null>(null);

  function handleComplete(next: SimulatorResult) {
    setResult(next);
    onComplete(next);
  }

  const scorePercent =
    result && result.total > 0 ? Math.round((result.score / result.total) * 100) : 0;

  return (
    <SimulatorCompleteContext.Provider value={handleComplete}>
      <div className="flex flex-col gap-4" data-simulator-id={simulatorId}>
        <Card className="p-4">
          <div className="mb-2 flex items-center gap-2 text-accent">
            <Target className="h-4 w-4" />
            <span className="text-xs font-medium uppercase tracking-wide">Simulator</span>
          </div>
          <h2 className="font-serif text-xl font-medium text-foreground">{title}</h2>
          {description && <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>}
        </Card>

        {!result?.completed ? (
          <div className="simulator-content">{children}</div>
        ) : (
          <Card className="p-4">
            <div className="mb-3 flex items-center gap-2 text-accent">
              <CheckCircle2 className="h-5 w-5" />
              <span className="font-semibold">Session complete</span>
            </div>
            <p className="mb-3 font-serif text-3xl font-medium text-foreground">
              {result.score} / {result.total}
            </p>
            <ProgressBar value={scorePercent} className="mb-4" />
            {result.weakConcepts.length > 0 && (
              <div>
                <p className="mb-2 text-sm font-medium text-primary">Review these concepts:</p>
                <ul className="list-inside list-disc space-y-1 text-sm text-muted-foreground marker:text-primary">
                  {result.weakConcepts.map((concept) => (
                    <li key={concept}>{concept}</li>
                  ))}
                </ul>
              </div>
            )}
          </Card>
        )}
      </div>
    </SimulatorCompleteContext.Provider>
  );
}

/** Routes simulator completion through SimulatorShell so the session summary appears. */
export function SimulatorRunner({
  Component,
  certId,
  topicId,
  assignmentId,
  simulatorId,
}: {
  Component: ComponentType<SimulatorComponentProps>;
  certId: string;
  topicId?: string;
  assignmentId?: string;
  simulatorId: string;
}) {
  const onComplete = useSimulatorComplete();
  return (
    <Component
      onComplete={onComplete}
      certId={certId}
      topicId={topicId}
      assignmentId={assignmentId}
      simulatorId={simulatorId}
    />
  );
}

export function SimulatorPlaceholder() {
  const onComplete = useSimulatorComplete();

  return (
    <Card className="p-4">
      <p className="mb-4 text-sm text-muted-foreground">
        This simulator is not yet in the registry. BSim agents will register and implement it.
      </p>
      <button
        type="button"
        onClick={() =>
          onComplete({ score: 0, total: 0, weakConcepts: [], completed: true })
        }
        className="text-sm text-accent hover:text-foreground"
      >
        Return without scoring
      </button>
    </Card>
  );
}
