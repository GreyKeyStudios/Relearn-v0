"use client";

import type { ExperienceMediaDef } from "@/content/types";
import { BlockFinderDiagram } from "@/components/lesson/BlockFinderDiagram";
import { IpRangesRecallTable } from "@/components/lesson/IpRangesRecallTable";
import { WifiChannelDialDiagram } from "@/components/lesson/WifiChannelDialDiagram";
import { WirelessRecallTable } from "@/components/lesson/WirelessRecallTable";
import { Ipv4Ipv6CompareTable } from "@/components/lesson/Ipv4Ipv6CompareTable";
import { Ipv6LeadingZeroStrip } from "@/components/lesson/Ipv6LeadingZeroStrip";
import { Ipv6PrefixDiagram } from "@/components/lesson/Ipv6PrefixDiagram";
import { Ipv6TypesTable } from "@/components/lesson/Ipv6TypesTable";
import { SubnetPieDiagram } from "@/components/lesson/SubnetPieDiagram";
import { ExperienceAudioPlayer } from "@/components/lesson/ExperienceAudioPlayer";
import { ExperienceAudioAb } from "@/components/lesson/ExperienceAudioAb";
import {
  Activity,
  ArrowDown,
  Cable,
  Folder,
  Globe,
  HardDrive,
  Keyboard,
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
  activity: Activity,
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
  folder: Folder,
  layers: Layers,
  keyboard: Keyboard,
  "hard-drive": HardDrive,
  harddrive: HardDrive,
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

  if (media.kind === "subnet-pie") {
    return (
      <SubnetPieDiagram
        prefix={media.prefix ?? 24}
        interactive={media.interactive ?? false}
        maxPrefix={media.maxPrefix ?? 27}
        animate={animate}
      />
    );
  }

  if (media.kind === "block-finder") {
    return (
      <BlockFinderDiagram
        ip={media.ip}
        prefix={media.prefix}
        mode={media.mode ?? "interactive"}
        animate={animate}
      />
    );
  }

  if (media.kind === "ip-ranges-table") {
    return (
      <div className={enterClass}>
        <IpRangesRecallTable />
      </div>
    );
  }

  if (media.kind === "ipv6-types-table") {
    return (
      <div className={enterClass}>
        <Ipv6TypesTable />
      </div>
    );
  }

  if (media.kind === "ipv6-prefix") {
    return (
      <Ipv6PrefixDiagram prefix={media.prefix ?? 64} animate={animate} />
    );
  }

  if (media.kind === "ipv4-ipv6-compare") {
    return (
      <div className={enterClass}>
        <Ipv4Ipv6CompareTable />
      </div>
    );
  }

  if (media.kind === "ipv6-leading-zeros") {
    return (
      <div className={enterClass}>
        <Ipv6LeadingZeroStrip />
      </div>
    );
  }

  if (media.kind === "wireless-recall-table") {
    return (
      <div className={enterClass}>
        <WirelessRecallTable />
      </div>
    );
  }

  if (media.kind === "wifi-channel-dial") {
    return (
      <WifiChannelDialDiagram
        showOverlap={media.showOverlap ?? true}
        animate={animate}
      />
    );
  }

  if (media.kind === "audio") {
    return (
      <div className={enterClass}>
        <ExperienceAudioPlayer media={media} animate={animate} />
      </div>
    );
  }

  if (media.kind === "audio-ab") {
    return (
      <div className={enterClass}>
        <ExperienceAudioAb media={media} animate={animate} />
      </div>
    );
  }

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
