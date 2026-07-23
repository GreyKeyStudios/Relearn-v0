"use client";

import {
  WIFI_24_CHANNEL_DIAL,
  wifiChannelLeft,
  wifiDialTotalWidth,
} from "@/lib/wireless-visual";

interface WifiChannelDialDiagramProps {
  animate?: boolean;
  /** Show channel 3 overlapping 1 and 6 */
  showOverlap?: boolean;
}

function channelStyle(channel: number, total: number) {
  const { channelWidth } = WIFI_24_CHANNEL_DIAL;
  return {
    left: `${(wifiChannelLeft(channel) / total) * 100}%`,
    width: `${(channelWidth / total) * 100}%`,
  };
}

export function WifiChannelDialDiagram({
  animate = true,
  showOverlap = true,
}: WifiChannelDialDiagramProps) {
  const enterClass = animate ? "experience-media-enter" : "";
  const total = wifiDialTotalWidth();
  const { nonOverlapping, overlapExample } = WIFI_24_CHANNEL_DIAL;

  return (
    <div
      className={`space-y-3 ${enterClass}`}
      aria-label="2.4 GHz Wi-Fi channel dial showing 20 MHz wide channels"
    >
      <div className="flex items-center justify-between text-[10px] text-zinc-500">
        <span>2.4 GHz band</span>
        <span className="font-mono">20 MHz wide · 5 MHz spacing</span>
      </div>

      {/* Dial track — channel numbers align to 5 MHz spacing on the scale */}
      <div className="relative h-16 rounded-lg border border-zinc-700/60 bg-zinc-950/80 px-2 py-2">
        <div className="relative mx-1 mt-1 h-1 rounded-full bg-gradient-to-r from-zinc-700 via-zinc-600 to-zinc-700" />

        <div className="relative mx-1 mt-3 h-8">
          {showOverlap && (
            <div
              className="wifi-channel-bar absolute top-0 h-full rounded-md border border-amber-500/40 bg-amber-500/15"
              style={{
                ...channelStyle(overlapExample, total),
                animationDelay: animate ? "400ms" : undefined,
              }}
              title={`Channel ${overlapExample} overlaps neighbors`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-amber-300/90">
                Ch {overlapExample}
              </span>
            </div>
          )}

          {nonOverlapping.map((ch, i) => (
            <div
              key={ch}
              className="wifi-channel-bar absolute top-0 h-full rounded-md border border-sky-500/50 bg-sky-500/20"
              style={{
                ...channelStyle(ch, total),
                animationDelay: animate ? `${i * 180}ms` : undefined,
              }}
              title={`Channel ${ch}`}
            >
              <span className="absolute inset-0 flex items-center justify-center text-[10px] font-semibold text-sky-200">
                Ch {ch}
              </span>
            </div>
          ))}
        </div>
      </div>

      <p className="text-center text-[11px] leading-relaxed text-zinc-400">
        {showOverlap ? (
          <>
            <span className="text-sky-300">1, 6, 11</span> — no overlap ·{" "}
            <span className="text-amber-300">Ch {overlapExample}</span> bleeds into neighbors
          </>
        ) : (
          <>Channel numbers are labels — each bar is ~20 MHz on the dial.</>
        )}
      </p>
    </div>
  );
}
