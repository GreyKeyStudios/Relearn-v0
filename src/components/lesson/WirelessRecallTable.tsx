"use client";

import { WIRELESS_RECALL_TABLE_ROWS } from "@/lib/wireless-visual";

export function WirelessRecallTable() {
  return (
    <div
      className="overflow-x-auto rounded-lg border border-zinc-700/60"
      aria-label="Wireless fundamentals reference table"
    >
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-700/60 bg-zinc-900/80">
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Item
            </th>
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {WIRELESS_RECALL_TABLE_ROWS.map((row) => (
            <tr
              key={row.item}
              className="border-b border-zinc-800/80 last:border-b-0"
            >
              <td className="px-3 py-2 font-mono text-xs text-zinc-200">{row.item}</td>
              <td className="px-3 py-2 text-zinc-300">{row.purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
