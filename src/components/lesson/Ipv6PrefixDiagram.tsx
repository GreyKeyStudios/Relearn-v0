"use client";

import { IPV6_PREFIX_EXAMPLE } from "@/lib/ipv6-visual";

interface Ipv6PrefixDiagramProps {
  prefix?: number;
  animate?: boolean;
}

export function Ipv6PrefixDiagram({
  prefix = IPV6_PREFIX_EXAMPLE.prefix,
  animate = true,
}: Ipv6PrefixDiagramProps) {
  const enterClass = animate ? "experience-media-enter" : "";
  const { networkHextets, hostHextets } = IPV6_PREFIX_EXAMPLE;

  return (
    <div className={`space-y-2 ${enterClass}`} aria-label="IPv6 prefix length diagram">
      <p className="text-center font-mono text-xs leading-relaxed text-zinc-300">
        {networkHextets.join(":")}
        <span className="text-zinc-600">:</span>
        {hostHextets.join(":")}
      </p>
      <div className="flex gap-1 overflow-x-auto pb-0.5">
        <div className="min-w-0 flex-[4] rounded-lg border border-sky-500/50 bg-sky-500/10 px-2 py-2 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-sky-400">
            Network · /{prefix}
          </p>
          <p className="mt-1 font-mono text-[11px] text-sky-200">
            {networkHextets.join(":")}
          </p>
          <p className="mt-0.5 text-[10px] text-sky-300/80">First 4 hextets · 64 bits</p>
        </div>
        <div className="min-w-0 flex-[4] rounded-lg border border-zinc-600/50 bg-zinc-800/40 px-2 py-2 text-center">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-zinc-400">
            Interface (host)
          </p>
          <p className="mt-1 font-mono text-[11px] text-zinc-300">
            {hostHextets.join(":")}
          </p>
          <p className="mt-0.5 text-[10px] text-zinc-500">Last 4 hextets · 64 bits</p>
        </div>
      </div>
      <p className="text-center text-[11px] text-zinc-500">
        /{prefix} = first {prefix} bits are the network — not “the first hextet.”
      </p>
    </div>
  );
}
