"use client";

import type { ExperienceMediaDef } from "@/content/types";
import {
  ArrowDown,
  Cable,
  Globe,
  Layers,
  Monitor,
  Network,
  Radio,
  Router,
  Server,
  Wifi,
  type LucideIcon,
} from "lucide-react";

const ICON_MAP: Record<string, LucideIcon> = {
  cable: Cable,
  monitor: Monitor,
  computer: Monitor,
  switch: Network,
  network: Network,
  router: Router,
  server: Server,
  wifi: Wifi,
  radio: Radio,
  globe: Globe,
  layers: Layers,
};

function MediaIcon({ name, label }: { name: string; label: string }) {
  const Icon = ICON_MAP[name.toLowerCase()] ?? Layers;
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-zinc-600/60 bg-zinc-800/60">
        <Icon className="h-6 w-6 text-sky-400" aria-hidden />
      </div>
      <span className="max-w-[72px] text-center text-xs text-zinc-400">{label}</span>
    </div>
  );
}

interface ExperienceMediaProps {
  media: ExperienceMediaDef;
  animate?: boolean;
}

export function ExperienceMedia({ media, animate = true }: ExperienceMediaProps) {
  const enterClass = animate ? "experience-media-enter" : "";

  if (media.kind === "flow") {
    return (
      <div className={`flex flex-col items-center gap-1 py-2 ${enterClass}`}>
        {media.items.map((item, i) => (
          <div key={`${item.icon}-${i}`} className="flex flex-col items-center">
            <MediaIcon name={item.icon} label={item.label} />
            {i < media.items.length - 1 && (
              <ArrowDown className="my-1 h-4 w-4 text-zinc-600" aria-hidden />
            )}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap justify-center gap-4 py-2 ${enterClass}`}>
      {media.items.map((item, i) => (
        <MediaIcon key={`${item.icon}-${i}`} name={item.icon} label={item.label} />
      ))}
    </div>
  );
}
