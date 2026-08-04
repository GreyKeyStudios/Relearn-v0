"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { ProgressBar } from "@/components/ui/ProgressBar";
import { buildSimulatorResult, pickDrillItems } from "@/lib/simulator-scoring";
import type { SimulatorComponentProps } from "@/content/simulators/registry";
import {
  AI_PROMPTS_NETOPS_SCENARIOS,
  type AiPromptScenario,
} from "@/content/simulators/drills/network/ai-prompts-netops";

/**
 * Generative-AI prompt selection for Cisco network operations (CCNA v2.0 5.2).
 */
export function AiPromptsNetopsDrill({ onComplete }: SimulatorComponentProps) {
  const session = useMemo(
    () =>
      pickDrillItems(AI_PROMPTS_NETOPS_SCENARIOS, 4, 5) as AiPromptScenario[],
    []
  );
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [weakConcepts, setWeakConcepts] = useState<string[]>([]);

  const current = session[index];
  const progress = ((index + (showResult ? 1 : 0)) / session.length) * 100;

  function handleNext() {
    if (!selected) return;
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
    } else {
      onComplete(buildSimulatorResult(score, session.length, weakConcepts));
    }
  }

  const picked = current.prompts.find((p) => p.id === selected);
  const isMisconception =
    showResult &&
    selected != null &&
    current.misconceptionChoiceIds.includes(selected);

  return (
    <div className="flex flex-col gap-4" data-testid="ai-prompts-netops-drill">
      <ProgressBar value={progress} />
      <p className="text-xs text-zinc-500">
        Scenario {index + 1} of {session.length} · Select the prompt that fits official v2.0 5.2
      </p>

      <Card className="space-y-2 p-4">
        <p className="text-xs font-medium text-sky-400">{current.task}</p>
        <p className="text-sm text-zinc-200">{current.context}</p>
        <p className="text-xs text-zinc-500">
          Required components: data classification · output format · persona · instructions
        </p>
      </Card>

      <div className="flex flex-col gap-2" data-testid="prompt-choices">
        {current.prompts.map((prompt) => {
          const isSelected = selected === prompt.id;
          const isCorrect = prompt.id === current.correctChoiceId;
          let style = "border-zinc-700 bg-zinc-900";
          if (showResult) {
            if (isCorrect) style = "border-emerald-500 bg-emerald-500/10";
            else if (isSelected) style = "border-red-500 bg-red-500/10";
          } else if (isSelected) {
            style = "border-emerald-500 bg-emerald-500/10";
          }
          return (
            <button
              key={prompt.id}
              type="button"
              disabled={showResult}
              data-testid={`prompt-${prompt.id}`}
              onClick={() => setSelected(prompt.id)}
              className={`rounded-xl border p-3 text-left text-sm text-zinc-200 ${style}`}
            >
              <span className="text-xs font-medium text-zinc-400">Prompt {prompt.label}</span>
              <p className="mt-1">{prompt.text}</p>
            </button>
          );
        })}
      </div>

      {showResult && (
        <Card className="space-y-2 border-zinc-700 bg-zinc-800/50 p-4" data-testid="prompt-result">
          <p className="text-xs font-medium text-sky-400">Explanation</p>
          <p className="text-sm text-zinc-300">{current.explanation}</p>
          {picked?.leaksSecrets && (
            <p className="text-sm text-red-300" data-testid="secret-fail">
              Failed: prompt mishandles sensitive network data classification.
            </p>
          )}
          {picked?.genericLlmTuning && (
            <p className="text-sm text-amber-300" data-testid="generic-llm-fail">
              Failed: generic LLM-tuning advice is outside official 5.2 network-ops scope.
            </p>
          )}
          {isMisconception && (
            <div
              className="rounded-lg border border-amber-500/30 bg-amber-500/10 p-3"
              data-testid="misconception-remediation"
            >
              <p className="text-xs font-medium text-amber-300">
                Misconception remediation
              </p>
              <p className="mt-1 text-sm text-zinc-300">
                Rewrite the ops question so it states data classification, output format,
                persona, and instructions. Reject unstructured chat and secret leaks.
              </p>
            </div>
          )}
        </Card>
      )}

      <Button
        className="w-full"
        disabled={!selected}
        data-testid="drill-next"
        onClick={handleNext}
      >
        {showResult
          ? index < session.length - 1
            ? "Next scenario"
            : "Finish"
          : "Check selection"}
      </Button>
    </div>
  );
}
