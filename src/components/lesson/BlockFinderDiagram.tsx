"use client";

import { useMemo, useState } from "react";
import {
  findSliceForHost,
  hostOctetFromIp,
  networkPrefixFromIp,
  pickCandidateSlices,
  sliceColorClass,
  slicesForPrefix,
} from "@/lib/subnet-visual";

type BlockFinderMode = "gray" | "interactive" | "revealed";

interface BlockFinderDiagramProps {
  ip: string;
  prefix: number;
  mode?: BlockFinderMode;
  animate?: boolean;
}

export function BlockFinderDiagram({
  ip,
  prefix,
  mode = "interactive",
  animate = true,
}: BlockFinderDiagramProps) {
  const hostOctet = hostOctetFromIp(ip);
  const netPrefix = networkPrefixFromIp(ip);
  const slices = useMemo(() => slicesForPrefix(prefix), [prefix]);
  const correctSlice = useMemo(
    () => findSliceForHost(hostOctet, prefix),
    [hostOctet, prefix]
  );
  const pickSlices = useMemo(
    () =>
      correctSlice
        ? pickCandidateSlices(slices, correctSlice)
        : slices,
    [slices, correctSlice]
  );

  const [pickedIndex, setPickedIndex] = useState<number | null>(
    mode === "revealed" ? (correctSlice?.index ?? null) : null
  );
  const [wrongIndex, setWrongIndex] = useState<number | null>(null);

  const enterClass = animate ? "experience-media-enter" : "";
  const resolved = pickedIndex !== null;
  const isCorrect = pickedIndex === correctSlice?.index;

  function handlePick(index: number) {
    if (mode !== "interactive" || resolved) return;
    if (index === correctSlice?.index) {
      setPickedIndex(index);
      setWrongIndex(null);
    } else {
      setWrongIndex(index);
      window.setTimeout(() => setWrongIndex(null), 600);
    }
  }

  const showSlices = mode !== "gray";
  const highlightIndex =
    mode === "revealed" ? correctSlice?.index : pickedIndex ?? undefined;

  return (
    <div className={`space-y-3 ${enterClass}`}>
      <div className="rounded-lg border border-zinc-700/80 bg-zinc-900/50 px-3 py-2.5 text-center font-mono text-base">
        <span className="text-zinc-500">{netPrefix}.</span>
        <span className="font-semibold text-sky-400">{hostOctet}</span>
        <span className="text-zinc-500">/{prefix}</span>
      </div>

      {mode === "gray" && (
        <p className="text-center text-xs text-zinc-400">
          Gray out <span className="text-zinc-500">{netPrefix}.x</span> — the last octet
          is only 0–255. Find which block of 0–255 contains{" "}
          <span className="font-semibold text-sky-400">.{hostOctet}</span>
        </p>
      )}

      {showSlices && (
        <>
          <div className="relative">
            <div className="flex h-10 w-full overflow-hidden rounded-lg border border-zinc-600/80">
              {slices.map((slice) => {
                const active = highlightIndex === slice.index;
                const wrong = wrongIndex === slice.index;
                return (
                  <div
                    key={slice.index}
                    style={{ width: `${((slice.end - slice.start + 1) / 256) * 100}%` }}
                    className={`relative min-w-0 border-r border-zinc-700/80 last:border-r-0 ${sliceColorClass(slice.index)} ${
                      active ? "ring-2 ring-sky-400 ring-inset" : ""
                    } ${wrong ? "bg-red-500/30" : ""}`}
                  >
                    {hostOctet >= slice.start && hostOctet <= slice.end && (
                      <div
                        className="absolute bottom-0 top-0 w-0.5 bg-sky-400"
                        style={{
                          left: `${((hostOctet - slice.start) / (slice.end - slice.start + 1)) * 100}%`,
                        }}
                        aria-hidden
                      />
                    )}
                  </div>
                );
              })}
            </div>
            <div className="mt-1 flex justify-between text-[10px] text-zinc-500">
              <span>0</span>
              <span className="text-sky-400">.{hostOctet}</span>
              <span>255</span>
            </div>
          </div>

          {mode === "interactive" && !resolved && (
            <div className="grid grid-cols-2 gap-2">
              {pickSlices.map((slice) => (
                <button
                  key={slice.index}
                  type="button"
                  onClick={() => handlePick(slice.index)}
                  className={`rounded-lg border px-2 py-2 text-xs font-medium transition-colors ${sliceColorClass(slice.index)} hover:brightness-110 ${
                    wrongIndex === slice.index ? "border-red-500 bg-red-500/20" : "border-zinc-600"
                  }`}
                >
                  {slice.start}–{slice.end}
                </button>
              ))}
            </div>
          )}

          {(mode === "revealed" || (mode === "interactive" && resolved)) && correctSlice && (
            <div
              className={`rounded-lg border px-3 py-2 text-sm ${
                isCorrect || mode === "revealed"
                  ? "border-emerald-600/50 bg-emerald-950/30 text-emerald-100"
                  : "border-red-600/50 bg-red-950/30 text-red-100"
              }`}
            >
              <p className="font-medium">
                {correctSlice.start}–{correctSlice.end}
              </p>
              <p className="mt-1 text-xs opacity-90">
                Network .{correctSlice.start} · Broadcast .{correctSlice.end} · Hosts .
                {correctSlice.start + 1}–.{correctSlice.end - 1}
              </p>
            </div>
          )}

          {mode === "interactive" && !resolved && (
            <p className="text-center text-xs text-zinc-500">
              Which slice contains .{hostOctet}?
            </p>
          )}
        </>
      )}
    </div>
  );
}
