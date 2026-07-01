"use client";

import { SUBNET_BLOCK_TABLE_ROWS } from "@/lib/subnet-visual";

interface SubnetBlockTableStripProps {
  /** Highlight prefix row when on a related card */
  highlightPrefix?: number;
}

export function SubnetBlockTableStrip({ highlightPrefix }: SubnetBlockTableStripProps) {
  return (
    <div
      className="sticky top-0 z-10 -mx-1 rounded-lg border border-zinc-700/60 bg-zinc-950/95 px-2 py-2 backdrop-blur-sm"
      aria-label="Block size reference table"
    >
      <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
        Block table
      </p>
      <div className="flex gap-1 overflow-x-auto pb-0.5 scrollbar-thin">
        {SUBNET_BLOCK_TABLE_ROWS.map((row) => {
          const active = highlightPrefix === row.prefix;
          return (
            <div
              key={row.prefix}
              className={`shrink-0 rounded-md border px-2 py-1 text-center ${
                active
                  ? "border-sky-500/60 bg-sky-500/10"
                  : "border-zinc-700/50 bg-zinc-900/80"
              }`}
            >
              <p className={`text-[10px] font-semibold ${active ? "text-sky-300" : "text-zinc-300"}`}>
                /{row.prefix}
              </p>
              <p className={`text-xs font-medium ${active ? "text-sky-200" : "text-zinc-100"}`}>
                {row.total}
              </p>
              <p className="text-[9px] text-zinc-500">{row.usable} usable</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
