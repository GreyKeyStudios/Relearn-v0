"use client";

import { useState } from "react";
import type { ExperienceAudioMediaDef } from "@/content/types";

interface ExperienceAudioPlayerProps {
  media: ExperienceAudioMediaDef;
  animate?: boolean;
}

export function ExperienceAudioPlayer({
  media,
  animate = true,
}: ExperienceAudioPlayerProps) {
  const [failed, setFailed] = useState(false);
  const enterClass = animate ? "experience-media-enter" : "";

  return (
    <div
      className={`rounded-xl border border-zinc-700/80 bg-zinc-900/80 px-3 py-3 ${enterClass}`}
    >
      {(media.label || media.caption) && (
        <p className="mb-2 text-center text-xs font-medium text-zinc-300">
          {media.label ?? media.caption}
        </p>
      )}
      {failed ? (
        <p className="text-center text-sm text-zinc-500">
          Demo audio not available yet. Follow the FL Studio steps in the lesson.
        </p>
      ) : (
        <audio
          controls
          preload="none"
          src={media.src}
          className="w-full"
          onError={() => setFailed(true)}
        >
          Your browser does not support audio playback.
        </audio>
      )}
      {media.plugin && (
        <p className="mt-2 text-center text-[10px] text-zinc-500">
          Plugin: {media.plugin}
          {media.stage ? ` · ${media.stage}` : ""}
        </p>
      )}
    </div>
  );
}
