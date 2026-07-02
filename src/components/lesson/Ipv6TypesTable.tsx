"use client";

import { IPV6_TYPES_TABLE_ROWS } from "@/lib/ipv6-visual";

export function Ipv6TypesTable() {
  return (
    <div
      className="overflow-x-auto rounded-lg border border-zinc-700/60"
      aria-label="IPv6 address types reference table"
    >
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-700/60 bg-zinc-900/80">
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Prefix
            </th>
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Purpose
            </th>
          </tr>
        </thead>
        <tbody>
          {IPV6_TYPES_TABLE_ROWS.map((row) => (
            <tr
              key={row.range}
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
