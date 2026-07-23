/** Computer Fundamentals LES anchor — You → Apps → OS → Hardware. */

const LAYERS = [
  { id: 4 as const, label: "You", hint: "Goals & actions" },
  { id: 3 as const, label: "Apps", hint: "Programs you use" },
  { id: 2 as const, label: "OS", hint: "Windows 11" },
  { id: 1 as const, label: "Hardware", hint: "Physical parts" },
];

interface ComputerStackDiagramProps {
  highlightLayer?: 1 | 2 | 3 | 4;
  compact?: boolean;
}

export function ComputerStackDiagram({
  highlightLayer,
  compact,
}: ComputerStackDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 ${compact ? "px-2 py-2" : "px-3 py-3"}`}
      aria-label="Computer stack"
    >
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        Computer stack
      </p>
      <div className="flex flex-col gap-1">
        {LAYERS.map((layer) => {
          const active = highlightLayer === layer.id;
          const dimmed = highlightLayer != null && !active;
          return (
            <div
              key={layer.id}
              className={`rounded-lg border px-2 py-1.5 text-center transition-colors ${
                active
                  ? "border-sky-500/60 bg-sky-500/15"
                  : dimmed
                    ? "border-zinc-800/80 bg-zinc-950/50 opacity-50"
                    : "border-zinc-700 bg-zinc-800/50"
              }`}
            >
              <p
                className={`text-[11px] font-semibold ${active ? "text-sky-300" : "text-zinc-300"}`}
              >
                {layer.label}
              </p>
              <p className="text-[9px] text-zinc-500">{layer.hint}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
