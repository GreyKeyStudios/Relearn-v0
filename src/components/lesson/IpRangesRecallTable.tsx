"use client";

import { IP_RANGES_TABLE_ROWS } from "@/lib/ip-ranges-visual";

export function IpRangesRecallTable() {
  return (
    <div
      className="overflow-x-auto rounded-lg border border-zinc-700/60"
      aria-label="Special IPv4 ranges reference table"
    >
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-700/60 bg-zinc-900/80">
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Range
            </th>
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {IP_RANGES_TABLE_ROWS.map((row) => (
            <tr
              key={row.purpose}
              className="border-b border-zinc-800/80 last:border-b-0"
            >
              <td className="px-3 py-2 font-mono text-xs leading-relaxed text-zinc-200">
                {row.range}
              </td>
              <td className="px-3 py-2 text-zinc-300">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
