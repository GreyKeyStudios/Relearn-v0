/** OSI stack visual — highlight one layer or show full model. */

const LAYERS = [
  { num: 7, name: "Application", short: "Apps & user services" },
  { num: 6, name: "Presentation", short: "Format & encryption" },
  { num: 5, name: "Session", short: "Conversation control" },
  { num: 4, name: "Transport", short: "End-to-end delivery" },
  { num: 3, name: "Network", short: "IP & routing" },
  { num: 2, name: "Data Link", short: "MAC & local delivery" },
  { num: 1, name: "Physical", short: "Bits on the wire" },
] as const;

interface OsiStackDiagramProps {
  /** 1–7 highlights one layer; omit for equal emphasis on all layers */
  highlightLayer?: number;
  /** Compact layout for pinned anchor region */
  compact?: boolean;
  className?: string;
}

export function OsiStackDiagram({
  highlightLayer,
  compact = false,
  className = "",
}: OsiStackDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-700/80 bg-zinc-900/60 ${
        compact ? "p-2" : "p-3"
      } ${className}`}
      aria-label="OSI model seven layer stack"
    >
      {!compact && (
        <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Layer 7 — top (you)
        </p>
      )}
      <div className={`flex flex-col ${compact ? "gap-0.5" : "gap-1"}`}>
        {LAYERS.map((layer) => {
          const active = highlightLayer === layer.num;
          const dim = highlightLayer != null && !active;
          return (
            <div
              key={layer.num}
              className={`flex items-center gap-2 rounded-lg border px-2 transition-all duration-300 motion-reduce:transition-none ${
                compact ? "py-1" : "px-3 py-2"
              } ${
                active
                  ? "border-sky-500/70 bg-sky-950/50 ring-1 ring-sky-500/40 shadow-[0_0_12px_rgba(14,165,233,0.15)]"
                  : dim
                    ? "border-zinc-800/60 bg-zinc-950/40 opacity-45"
                    : "border-zinc-700/50 bg-zinc-800/30"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-md font-bold transition-colors duration-300 motion-reduce:transition-none ${
                  compact ? "h-5 w-5 text-[10px]" : "h-7 w-7 text-xs"
                } ${active ? "bg-sky-600 text-white" : "bg-zinc-700 text-zinc-300"}`}
              >
                {layer.num}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`font-semibold transition-colors duration-300 motion-reduce:transition-none ${
                    compact ? "text-xs" : "text-sm"
                  } ${active ? "text-sky-100" : "text-zinc-200"}`}
                >
                  {layer.name}
                </p>
                {!compact && (
                  <p className="truncate text-xs text-zinc-500">{layer.short}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>
      {!compact && (
        <p className="mt-2 text-center text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Layer 1 — bottom (wire)
        </p>
      )}
    </div>
  );
}
