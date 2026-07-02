"use client";

import { IPV6_LEADING_ZERO_EXAMPLES } from "@/lib/ipv6-visual";

export function Ipv6LeadingZeroStrip() {
  return (
    <div
      className="rounded-lg border border-zinc-700/60 bg-zinc-900/50 p-3"
      aria-label="IPv6 leading zero compression examples"
    >
      <p className="mb-2 text-[10px] font-semibold uppercase tracking-wide text-zinc-500">
        Drop all leading zeros in each hextet
      </p>
      <div className="flex flex-wrap gap-2">
        {IPV6_LEADING_ZERO_EXAMPLES.map((ex) => (
          <div
            key={ex.before}
            className="flex items-center gap-1.5 rounded-md border border-zinc-700/50 bg-zinc-950/60 px-2 py-1"
          >
            <span className="font-mono text-xs text-zinc-500">{ex.before}</span>
            <span className="text-zinc-600">→</span>
            <span className="font-mono text-xs font-medium text-zinc-200">{ex.after}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
