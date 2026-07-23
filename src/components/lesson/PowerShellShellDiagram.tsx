/** PowerShell workflow anchor — Module 1 pipeline (Path A). */

const STEPS = [
  { id: 1, label: "Open", hint: "Launch shell" },
  { id: 2, label: "Command", hint: "Verb-Noun" },
  { id: 3, label: "Output", hint: "Objects" },
  { id: 4, label: "Pipe", hint: "Chain & automate" },
] as const;

interface PowerShellShellDiagramProps {
  highlightStep?: 1 | 2 | 3 | 4;
  compact?: boolean;
}

export function PowerShellShellDiagram({
  highlightStep,
  compact,
}: PowerShellShellDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 ${compact ? "px-2 py-2" : "px-3 py-3"}`}
      aria-label="PowerShell workflow"
    >
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        PowerShell workflow
      </p>
      <div className="flex items-center justify-between gap-1">
        {STEPS.map((step, i) => {
          const active = highlightStep === step.id;
          const dimmed = highlightStep != null && !active;
          return (
            <div key={step.id} className="flex min-w-0 flex-1 items-center gap-1">
              <div
                className={`min-w-0 flex-1 rounded-lg border px-1.5 py-1.5 text-center transition-colors ${
                  active
                    ? "border-sky-500/60 bg-sky-500/15"
                    : dimmed
                      ? "border-zinc-800/80 bg-zinc-950/50 opacity-50"
                      : "border-zinc-700 bg-zinc-800/50"
                }`}
              >
                <p
                  className={`truncate text-[10px] font-semibold ${active ? "text-sky-300" : "text-zinc-300"}`}
                >
                  {step.label}
                </p>
                <p className="truncate text-[9px] text-zinc-500">{step.hint}</p>
              </div>
              {i < STEPS.length - 1 && (
                <span className="shrink-0 text-[10px] text-zinc-600" aria-hidden>
                  →
                </span>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
