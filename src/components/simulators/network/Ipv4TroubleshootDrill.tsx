"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buildSimulatorResult, pickDrillItems } from "@/lib/simulator-scoring";
import type { SimulatorComponentProps } from "@/content/simulators/registry";
import {
  IPV4_TROUBLESHOOT_SCENARIOS,
  type Ipv4TroubleshootScenario,
} from "@/content/simulators/drills/network/ipv4-troubleshoot";

/**
 * Evidence-panel IPv4 troubleshoot drill (CCNA v2.0 1.3).
 * All evidence is visible before diagnosis — rewards reading, not clicking.
 */
export function Ipv4TroubleshootDrill({ onComplete }: SimulatorComponentProps) {
  const session = useMemo(
    () =>
      pickDrillItems(IPV4_TROUBLESHOOT_SCENARIOS, 5, 6) as Ipv4TroubleshootScenario[],
    []
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [weakConcepts, setWeakConcepts] = useState<string[]>([]);
  const [openedEvidence, setOpenedEvidence] = useState<Record<string, true>>({});

  const current = session[index];
  const progress = ((index + (showResult ? 1 : 0)) / session.length) * 100;
  const evidenceOpenedCount = current.evidence.filter((e) => openedEvidence[e.id]).length;
  const canDiagnose = evidenceOpenedCount >= 2;

  function toggleEvidence(id: string) {
    setOpenedEvidence((prev) => ({ ...prev, [id]: true }));
  }

  function handleNext() {
    if (!selected || !canDiagnose) return;
    if (!showResult) {
      const correct = selected === current.correctChoiceId;
      if (correct) setScore((s) => s + 1);
      else setWeakConcepts((w) => [...w, current.weakConcept]);
      setShowResult(true);
      return;
    }
    if (index < session.length - 1) {
      setIndex((i) => i + 1);
      setSelected(null);
      setShowResult(false);
      setOpenedEvidence({});
    } else {
      onComplete(buildSimulatorResult(score, session.length, weakConcepts));
    }
  }

  const isMisconception =
    showResult &&
    selected != null &&
    selected === current.misconceptionChoiceId &&
    selected !== current.correctChoiceId;

  return (
    <div className="flex flex-col gap-4" data-testid="ipv4-troubleshoot-drill">
      <ProgressBar value={progress} />
      <p className="text-xs text-faint">
        Scenario {index + 1} of {session.length} · Open ≥2 evidence panels before diagnosing
      </p>

      <Card className="space-y-2 p-4">
        <p className="text-xs font-medium text-primary">{current.ticket}</p>
        <p className="text-sm text-foreground">{current.symptom}</p>
      </Card>

      <div className="space-y-2" data-testid="evidence-panels">
        <p className="text-xs font-medium text-muted-foreground">Observable evidence</p>
        {current.evidence.map((panel) => {
          const open = !!openedEvidence[panel.id];
          return (
            <button
              key={panel.id}
              type="button"
              data-testid={`evidence-${panel.id}`}
              onClick={() => toggleEvidence(panel.id)}
              className="w-full rounded-xl border border-hairline bg-surface/80 p-3 text-left"
            >
              <p className="text-xs font-medium text-muted-foreground">{panel.title}</p>
              {open ? (
                <pre className="mt-2 whitespace-pre-wrap font-mono text-xs text-muted-foreground">
                  {panel.body}
                </pre>
              ) : (
                <p className="mt-1 text-xs text-primary">Click to reveal evidence</p>
              )}
            </button>
          );
        })}
      </div>

      {!canDiagnose && (
        <p className="text-xs text-primary" data-testid="evidence-gate">
          Reveal at least two evidence panels before selecting a root cause.
        </p>
      )}

      <div className="flex flex-col gap-2" data-testid="diagnosis-choices">
        {current.choices.map((choice) => {
          const isSelected = selected === choice.id;
          const isCorrect = choice.id === current.correctChoiceId;
          let style = "border-hairline bg-surface";
          if (showResult) {
            if (isCorrect) style = "border-accent bg-accent/10";
            else if (isSelected) style = "border-risk bg-risk/10";
          } else if (isSelected) {
            style = "border-accent bg-accent/10";
          }
          return (
            <button
              key={choice.id}
              type="button"
              disabled={!canDiagnose || showResult}
              data-testid={`choice-${choice.id}`}
              onClick={() => setSelected(choice.id)}
              className={`min-h-12 rounded-xl border p-3 text-left text-sm text-foreground ${style}`}
            >
              {choice.text}
            </button>
          );
        })}
      </div>

      {showResult && (
        <Card
          className="space-y-2 border-hairline bg-muted p-4"
          data-testid="scenario-result"
        >
          <p className="text-xs font-medium text-primary">Explanation</p>
          <p className="text-sm text-muted-foreground">{current.explanation}</p>
          {isMisconception && (
            <div
              className="rounded-lg border border-primary/30 bg-primary/10 p-3"
              data-testid="misconception-remediation"
            >
              <p className="text-xs font-medium text-primary">
                Misconception remediation
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                {current.remediationHint ??
                  "Private IPv4 ranges are valid on internal networks — troubleshoot assignment/subnetting, not 'private = broken.'"}
              </p>
            </div>
          )}
        </Card>
      )}

      <Button
        className="w-full"
        disabled={!selected || !canDiagnose}
        data-testid="drill-next"
        onClick={handleNext}
      >
        {showResult
          ? index < session.length - 1
            ? "Next scenario"
            : "Finish"
          : "Check diagnosis"}
      </Button>
    </div>
  );
}
