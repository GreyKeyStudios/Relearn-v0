/** TCP/IP four-layer stack — highlight one layer or show full model. */

const LAYERS = [
  { num: 4, name: "Application", short: "HTTP, DNS, apps" },
  { num: 3, name: "Transport", short: "TCP & UDP, ports" },
  { num: 2, name: "Internet", short: "IP & routing" },
  { num: 1, name: "Network Access", short: "Ethernet & Physical" },
] as const;

interface TcpIpStackDiagramProps {
  /** 4=Application (top) through 1=Network Access (bottom) */
  highlightLayer?: number;
  compact?: boolean;
  className?: string;
}

export function TcpIpStackDiagram({
  highlightLayer,
  compact = false,
  className = "",
}: TcpIpStackDiagramProps) {
  return (
    <div
      className={`rounded-xl border border-zinc-700/80 bg-zinc-900/60 ${
        compact ? "p-2" : "p-3"
      } ${className}`}
      aria-label="TCP/IP model four layer stack"
    >
      {!compact && (
        <p className="mb-2 text-center text-[10px] font-semibold uppercase tracking-widest text-zinc-500">
          Application — top (you)
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
                  ? "border-violet-500/70 bg-violet-950/50 ring-1 ring-violet-500/40 shadow-[0_0_12px_rgba(139,92,246,0.15)]"
                  : dim
                    ? "border-zinc-800/60 bg-zinc-950/40 opacity-45"
                    : "border-zinc-700/50 bg-zinc-800/30"
              }`}
            >
              <span
                className={`flex shrink-0 items-center justify-center rounded-md font-bold transition-colors duration-300 motion-reduce:transition-none ${
                  compact ? "h-5 w-5 text-[10px]" : "h-7 w-7 text-xs"
                } ${active ? "bg-violet-600 text-white" : "bg-zinc-700 text-zinc-300"}`}
              >
                {layer.num}
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`font-semibold transition-colors duration-300 motion-reduce:transition-none ${
                    compact ? "text-xs" : "text-sm"
                  } ${active ? "text-violet-100" : "text-zinc-200"}`}
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
          Network Access — bottom (wire)
        </p>
      )}
    </div>
  );
}
