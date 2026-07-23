/** Sound Synthesis LES anchor — Source → Shape → Filter → Amp → Hear. */

const STAGES = [
  { id: 1 as const, label: "Source", hint: "Oscillator" },
  { id: 2 as const, label: "Shape", hint: "Waveform" },
  { id: 3 as const, label: "Filter", hint: "Subtract" },
  { id: 4 as const, label: "Amp", hint: "Envelope" },
  { id: 5 as const, label: "Hear", hint: "Ears + Wave Candy" },
];

interface SynthesisSignalPathDiagramProps {
  highlightStage?: 1 | 2 | 3 | 4 | 5;
  compact?: boolean;
}

export function SynthesisSignalPathDiagram({
  highlightStage,
  compact,
}: SynthesisSignalPathDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-800 bg-zinc-900/80 ${compact ? "px-2 py-2" : "px-3 py-3"}`}
      aria-label="Synthesis signal path"
    >
      <p className="mb-2 text-center text-[10px] font-medium uppercase tracking-wide text-zinc-500">
        Signal path
      </p>
      <div className="flex flex-wrap items-center justify-center gap-1">
        {STAGES.map((stage, i) => {
          const active = highlightStage === stage.id;
          const dimmed = highlightStage != null && !active;
          return (
            <div key={stage.id} className="flex items-center gap-1">
              <div
                className={`min-w-[3.25rem] rounded-lg border px-1.5 py-1 text-center transition-colors ${
                  active
                    ? "border-sky-500/60 bg-sky-500/15"
                    : dimmed
                      ? "border-zinc-800/80 bg-zinc-950/50 opacity-50"
                      : "border-zinc-700 bg-zinc-800/50"
                }`}
              >
                <p
                  className={`text-[10px] font-semibold ${active ? "text-sky-300" : "text-zinc-300"}`}
                >
                  {stage.label}
                </p>
                <p className="text-[8px] text-zinc-500">{stage.hint}</p>
              </div>
              {i < STAGES.length - 1 && (
                <span className="text-[10px] text-zinc-600" aria-hidden>
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
