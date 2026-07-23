"use client";

import { useMemo, useState } from "react";
import type { ExperienceAudioAbMediaDef } from "@/content/types";

interface ExperienceAudioAbProps {
  media: ExperienceAudioAbMediaDef;
  animate?: boolean;
}

export function ExperienceAudioAb({
  media,
  animate = true,
}: ExperienceAudioAbProps) {
  const clips = media.clips ?? [];
  const [predicted, setPredicted] = useState(!media.predictPrompt);
  const [activeId, setActiveId] = useState(clips[0]?.id ?? "");
  const [failed, setFailed] = useState(false);
  const enterClass = animate ? "experience-media-enter" : "";

  const active = useMemo(
    () => clips.find((c) => c.id === activeId) ?? clips[0],
    [clips, activeId]
  );

  if (clips.length === 0) {
    return (
      <p className={`text-center text-sm text-zinc-500 ${enterClass}`}>
        Demo audio not available yet.
      </p>
    );
  }

  return (
    <div
      className={`rounded-xl border border-zinc-700/80 bg-zinc-900/80 px-3 py-3 ${enterClass}`}
    >
      {media.predictPrompt && !predicted && (
        <div className="mb-3 space-y-3">
          <p className="text-sm leading-relaxed text-zinc-300">
            {media.predictPrompt}
          </p>
          <button
            type="button"
            onClick={() => setPredicted(true)}
            className="min-h-11 w-full rounded-xl border border-sky-500/40 bg-sky-500/10 px-3 py-2 text-sm font-medium text-sky-300 hover:bg-sky-500/20"
          >
            I made my prediction — show clips
          </button>
        </div>
      )}

      {predicted && (
        <>
          <div className="mb-3 flex flex-wrap justify-center gap-2">
            {clips.map((clip) => {
              const selected = clip.id === active?.id;
              return (
                <button
                  key={clip.id}
                  type="button"
                  onClick={() => {
                    setActiveId(clip.id);
                    setFailed(false);
                  }}
                  className={`min-h-10 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                    selected
                      ? "border-sky-500/60 bg-sky-500/15 text-sky-300"
                      : "border-zinc-700 bg-zinc-800/60 text-zinc-400 hover:border-zinc-600"
                  }`}
                >
                  {clip.label}
                </button>
              );
            })}
          </div>

          {failed || !active ? (
            <p className="text-center text-sm text-zinc-500">
              Demo audio not available yet. Follow the FL Studio steps in the
              lesson.
            </p>
          ) : (
            <audio
              key={active.src}
              controls
              preload="none"
              src={active.src}
              className="w-full"
              onError={() => setFailed(true)}
            >
              Your browser does not support audio playback.
            </audio>
          )}

          {media.plugin && (
            <p className="mt-2 text-center text-[10px] text-zinc-500">
              Plugin: {media.plugin}
              {media.loudnessMatched ? " · loudness-matched" : ""}
            </p>
          )}
        </>
      )}
    </div>
  );
}
