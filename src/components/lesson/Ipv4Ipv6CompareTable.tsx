"use client";

import { IPV4_IPV6_COMPARE_ROWS } from "@/lib/ipv6-visual";

export function Ipv4Ipv6CompareTable() {
  return (
    <div
      className="overflow-x-auto rounded-lg border border-zinc-700/60"
      aria-label="IPv4 and IPv6 address role comparison"
    >
      <table className="w-full min-w-[280px] border-collapse text-sm">
        <thead>
          <tr className="border-b border-zinc-700/60 bg-zinc-900/80">
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              IPv4
            </th>
            <th className="px-3 py-2 text-left text-xs font-semibold uppercase tracking-wide text-zinc-400">
              IPv6
            </th>
          </tr>
        </thead>
        <tbody>
          {IPV4_IPV6_COMPARE_ROWS.map((row) => (
            <tr
              key={row.ipv4}
              className="border-b border-zinc-800/80 last:border-b-0"
            >
              <td className="px-3 py-2 text-xs text-zinc-300">{row.ipv4}</td>
              <td className="px-3 py-2 font-mono text-xs leading-relaxed text-zinc-200">
                {row.ipv6}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
