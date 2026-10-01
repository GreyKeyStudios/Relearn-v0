/** PowerShell II automation lifecycle anchor — every topic sits on one of these stages. */

const STAGES = [
  { id: 1, label: "Design", hint: "Params & contract" },
  { id: 2, label: "Input", hint: "Validate data" },
  { id: 3, label: "Execute", hint: "Run safely" },
  { id: 4, label: "Verify", hint: "Prove it worked" },
  { id: 5, label: "Report", hint: "Log & hand off" },
] as const;

interface PowerShellAutomationDiagramProps {
  highlightStage?: 1 | 2 | 3 | 4 | 5;
  compact?: boolean;
}

export function PowerShellAutomationDiagram({
  highlightStage,
  compact,
}: PowerShellAutomationDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 ${compact ? "px-2 py-2" : "px-3 py-3"}`}
      aria-label="PowerShell automation lifecycle"
    >
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        Automation lifecycle
      </p>
      <div className="flex items-center justify-between gap-1">
        {STAGES.map((stage, i) => {
          const active = highlightStage === stage.id;
          const dimmed = highlightStage != null && !active;
          return (
            <div key={stage.id} className="flex min-w-0 flex-1 items-center gap-1">
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
                  {stage.label}
                </p>
                <p className="truncate text-[9px] text-zinc-500">{stage.hint}</p>
              </div>
              {i < STAGES.length - 1 && (
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
