"use client";

import { useState } from "react";
import { blockSizeFromPrefix, sliceColorClass, slicesForPrefix } from "@/lib/subnet-visual";
import { Button } from "@/components/ui/Button";

type PiePrefix = 24 | 25 | 26 | 27 | 28 | 29 | 30;

interface SubnetPieDiagramProps {
  prefix?: PiePrefix;
  interactive?: boolean;
  maxPrefix?: PiePrefix;
  animate?: boolean;
}

export function SubnetPieDiagram({
  prefix: initialPrefix = 24,
  interactive = false,
  maxPrefix = 30,
  animate = true,
}: SubnetPieDiagramProps) {
  const [prefix, setPrefix] = useState<PiePrefix>(initialPrefix);
  const slices = slicesForPrefix(prefix);
  const blockSize = blockSizeFromPrefix(prefix);
  const enterClass = animate ? "experience-media-enter" : "";
  const showSliceLabels = slices.length <= 8;

  function sliceAgain() {
    if (prefix < maxPrefix) setPrefix((p) => (p + 1) as PiePrefix);
  }

  function reset() {
    setPrefix(initialPrefix);
  }

  return (
    <div className={`space-y-3 ${enterClass}`}>
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div>
          <p className="text-sm font-semibold text-zinc-100">/{prefix}</p>
          <p className="text-xs text-zinc-400">
            {slices.length} slice{slices.length === 1 ? "" : "s"} · {blockSize} addresses each ·
            256 total
          </p>
        </div>
        {interactive && (
          <div className="flex gap-2">
            <Button
              type="button"
              variant="secondary"
              className="h-8 px-3 text-xs"
              disabled={prefix >= maxPrefix}
              onClick={sliceAgain}
            >
              Slice again
            </Button>
            {prefix > initialPrefix && (
              <Button
                type="button"
                variant="ghost"
                className="h-8 px-2 text-xs text-zinc-400"
                onClick={reset}
              >
                Reset
              </Button>
            )}
          </div>
        )}
      </div>

      <div className="relative">
        <div className="flex h-12 w-full overflow-hidden rounded-lg border border-zinc-600/80">
          {slices.map((slice) => (
            <div
              key={slice.index}
              style={{ width: `${((slice.end - slice.start + 1) / 256) * 100}%` }}
              className={`flex min-w-0 items-center justify-center border-r border-zinc-700/80 last:border-r-0 ${sliceColorClass(slice.index)}`}
              title={`${slice.start}–${slice.end}`}
            >
              {showSliceLabels && slices.length <= 4 && (
                <span className="truncate px-0.5 text-[10px] font-medium text-zinc-200">
                  {slice.start}–{slice.end}
                </span>
              )}
            </div>
          ))}
        </div>
        <div className="mt-1 flex justify-between text-[10px] text-zinc-500">
          <span>0</span>
          <span>255</span>
        </div>
      </div>

      {showSliceLabels && (
        <div className="flex flex-wrap gap-1.5">
          {slices.map((slice) => (
            <span
              key={slice.index}
              className={`rounded-md border px-1.5 py-0.5 text-[10px] text-zinc-300 ${sliceColorClass(slice.index)}`}
            >
              {slice.start}–{slice.end}
            </span>
          ))}
        </div>
      )}

      {!showSliceLabels && (
        <p className="text-center text-xs text-zinc-500">
          {slices.length} equal slices — hover the bar to see each range
        </p>
      )}

      {interactive && prefix < maxPrefix && (
        <p className="text-center text-xs text-zinc-500">
          Tap Slice again — each +1 on the slash cuts the pie in half (up to /30)
        </p>
      )}
    </div>
  );
}
