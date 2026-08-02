"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import type { SecurityScenario } from "@/content/scenarios/types";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import {
  scoreScenarioAttempt,
  scenarioScoreCategoryLabel,
  type ScenarioAttemptInput,
} from "@/lib/scenario-scoring";

interface ScenarioWalkthroughProps {
  scenario: SecurityScenario;
}

/**
 * Data-driven multi-phase walkthrough. Learners choose from predefined safe actions only.
 * Not a full simulation engine.
 */
export function ScenarioWalkthrough({ scenario }: ScenarioWalkthroughProps) {
  const [phaseIndex, setPhaseIndex] = useState(0);
  const [selectedActionIds, setSelectedActionIds] = useState<string[]>([]);
  const [completedObjectiveIds, setCompletedObjectiveIds] = useState<string[]>([]);
  const [collectedEvidenceIds, setCollectedEvidenceIds] = useState<string[]>([]);
  const [submittedReport, setSubmittedReport] = useState(false);
  const [showScore, setShowScore] = useState(false);
  const [lastOutcome, setLastOutcome] = useState<string | null>(null);

  const phase = scenario.phases[phaseIndex]!;
  const isLast = phaseIndex >= scenario.phases.length - 1;

  const attempt: ScenarioAttemptInput = useMemo(
    () => ({
      selectedActionIds,
      completedObjectiveIds,
      collectedEvidenceIds,
      submittedReport,
    }),
    [selectedActionIds, completedObjectiveIds, collectedEvidenceIds, submittedReport]
  );

  const score = useMemo(
    () => scoreScenarioAttempt(scenario, attempt),
    [scenario, attempt]
  );

  function chooseAction(actionId: string) {
    const action = phase.availableActions.find((a) => a.id === actionId);
    if (!action) return;
    setSelectedActionIds((prev) =>
      prev.includes(actionId) ? prev : [...prev, actionId]
    );
    if (action.advancesObjectiveIds?.length) {
      setCompletedObjectiveIds((prev) => {
        const next = new Set(prev);
        for (const id of action.advancesObjectiveIds!) next.add(id);
        return [...next];
      });
    }
    if (action.collectsEvidenceIds?.length) {
      setCollectedEvidenceIds((prev) => {
        const next = new Set(prev);
        for (const id of action.collectsEvidenceIds!) next.add(id);
        return [...next];
      });
    }
    if (actionId === "act-submit-report") {
      setSubmittedReport(true);
    }
    setLastOutcome(action.outcome);
  }

  function nextPhase() {
    if (isLast) {
      setShowScore(true);
      return;
    }
    setPhaseIndex((i) => i + 1);
    setLastOutcome(null);
  }

  const roleBadge =
    phase.role === "red" ? "warning" : phase.role === "blue" ? "info" : "default";

  return (
    <div className="space-y-6">
      <div className="rounded-xl border border-border bg-surface-raised/40 p-4">
        <p className="text-xs text-faint">{scenario.fictionalOrganization}</p>
        <p className="mt-2 text-sm text-muted-foreground">{scenario.environmentDescription}</p>
        <div className="mt-4">
          <h3 className="eyebrow mb-2">Rules of engagement</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {scenario.rulesOfEngagement.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="eyebrow mb-2">Prohibited</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {scenario.prohibitedActions.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        </div>
      </div>

      {!showScore ? (
        <div className="rounded-xl border border-border p-4 sm:p-5">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <Badge variant={roleBadge}>{phase.role.toUpperCase()}</Badge>
            <span className="text-xs text-faint">
              Phase {phaseIndex + 1} of {scenario.phases.length}
            </span>
          </div>
          <h2 className="font-serif text-xl font-medium text-foreground">{phase.title}</h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {phase.briefing}
          </p>
          <p className="mt-3 text-xs text-faint">{phase.completionHint}</p>

          <h3 className="eyebrow mt-5 mb-2">Objectives</h3>
          <ul className="space-y-1 text-sm">
            {phase.objectives.map((o) => {
              const done = completedObjectiveIds.includes(o.id);
              return (
                <li
                  key={o.id}
                  className={done ? "text-emerald-400" : "text-muted-foreground"}
                >
                  {done ? "✓ " : "○ "}
                  {o.title}
                  {o.required ? "" : " (optional)"}
                </li>
              );
            })}
          </ul>

          <h3 className="eyebrow mt-5 mb-2">Safe actions</h3>
          <div className="flex flex-col gap-2">
            {phase.availableActions.map((action) => {
              const used = selectedActionIds.includes(action.id);
              return (
                <Button
                  key={action.id}
                  type="button"
                  variant={used ? "secondary" : "ghost"}
                  className="h-auto min-h-12 justify-start whitespace-normal border border-border px-3 py-3 text-left"
                  onClick={() => chooseAction(action.id)}
                >
                  {action.label}
                  {used ? " · chosen" : ""}
                </Button>
              );
            })}
          </div>

          {lastOutcome && (
            <p
              className="mt-4 rounded-lg border border-hairline bg-surface px-3 py-2 text-sm text-muted-foreground"
              role="status"
            >
              {lastOutcome}
            </p>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Button type="button" onClick={nextPhase}>
              {isLast ? "Score attempt" : "Next phase"}
            </Button>
            <Link
              href="/career/ethical-hacking"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Back to path
            </Link>
          </div>
        </div>
      ) : (
        <div className="rounded-xl border border-border p-4 sm:p-5">
          <h2 className="font-serif text-xl font-medium text-foreground">Debrief & score</h2>
          <p className="mt-2 text-sm text-muted-foreground">{scenario.debrief.summary}</p>

          <div className="mt-4 flex flex-wrap items-center gap-2">
            <Badge variant={score.passed ? "success" : "warning"}>
              {score.passed ? "Pass" : "Needs work"} · {score.weightedTotal}%
            </Badge>
          </div>
          {score.failReasons.length > 0 && (
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-amber-200">
              {score.failReasons.map((r) => (
                <li key={r}>{r}</li>
              ))}
            </ul>
          )}

          <h3 className="eyebrow mt-5 mb-2">Categories</h3>
          <ul className="divide-y divide-hairline text-sm">
            {score.categories.map((c) => (
              <li key={c.category} className="flex justify-between gap-4 py-2">
                <span className="text-muted-foreground">
                  {scenarioScoreCategoryLabel(c.category)}
                </span>
                <span className="text-foreground">{c.score}</span>
              </li>
            ))}
          </ul>

          <h3 className="eyebrow mt-5 mb-2">Attack-path replay</h3>
          <ol className="list-decimal space-y-1 pl-5 text-sm text-muted-foreground">
            {scenario.debrief.attackPathReplay.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>

          <h3 className="eyebrow mt-5 mb-2">Defensive controls</h3>
          <ul className="list-disc space-y-1 pl-5 text-sm text-muted-foreground">
            {scenario.debrief.defensiveControls.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>

          <div className="mt-6">
            <Button
              type="button"
              variant="secondary"
              onClick={() => {
                setPhaseIndex(0);
                setSelectedActionIds([]);
                setCompletedObjectiveIds([]);
                setCollectedEvidenceIds([]);
                setSubmittedReport(false);
                setShowScore(false);
                setLastOutcome(null);
              }}
            >
              Reset demo
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
