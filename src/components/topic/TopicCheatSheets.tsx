"use client";

import type { ExperienceMediaDef, Topic } from "@/content/types";
import { ExperienceMedia } from "@/components/lesson/ExperienceMedia";
import { Card } from "@/components/ui/Card";

type CheatSheetItem = {
  id: string;
  title: string;
  media: ExperienceMediaDef;
};

const TITLE_BY_KIND: Partial<Record<ExperienceMediaDef["kind"], string>> = {
  "ip-ranges-table": "IPv4 Special Ranges — Recall Table",
  "ipv6-types-table": "IPv6 Address Types — Recall Table",
  "ipv6-prefix": "IPv6 Prefix Split — /64 Diagram",
  "ipv4-ipv6-compare": "IPv4 vs IPv6 — Comparison Table",
  "ipv6-leading-zeros": "IPv6 Leading Zeros — Compression Examples",
  "wireless-recall-table": "Wireless Basics — Recall Table",
  "wifi-channel-dial": "2.4 GHz Channels — Dial Diagram",
  "subnet-pie": "Subnetting — Subnet Pie",
  "block-finder": "Subnetting — Block Finder",
};

function mediaKey(media: ExperienceMediaDef): string {
  switch (media.kind) {
    case "ipv6-prefix":
      return `${media.kind}:${media.prefix ?? ""}`;
    case "wifi-channel-dial":
      return `${media.kind}:${media.showOverlap ?? ""}`;
    case "block-finder":
      return `${media.kind}:${media.ip}:${media.prefix}:${media.mode ?? ""}`;
    case "subnet-pie":
      return `${media.kind}:${media.prefix ?? ""}:${media.interactive ?? ""}:${media.maxPrefix ?? ""}`;
    default:
      return media.kind;
  }
}

function toCheatSheet(media: ExperienceMediaDef): CheatSheetItem | null {
  if (media.kind === "icons" || media.kind === "flow") return null;
  const title = TITLE_BY_KIND[media.kind] ?? "Diagram";
  return { id: mediaKey(media), title, media };
}

export function TopicCheatSheets({ topic }: { topic: Topic }) {
  const screens = topic.lesson.experience?.screens ?? [];
  const seen = new Set<string>();
  const items: CheatSheetItem[] = [];

  for (const screen of screens) {
    if (!screen.media) continue;
    const item = toCheatSheet(screen.media);
    if (!item) continue;
    if (seen.has(item.id)) continue;
    seen.add(item.id);
    items.push(item);
  }

  if (items.length === 0) return null;

  return (
    <details className="mb-6 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4">
      <summary className="cursor-pointer select-none text-sm font-semibold uppercase tracking-wide text-sky-400">
        Cheat sheets &amp; diagrams
      </summary>
      <p className="mt-2 text-xs text-zinc-500">
        Quick reference for the visuals used in the lesson — no re-swiping needed.
      </p>

      <div className="mt-4 flex flex-col gap-3">
        {items.map((item) => (
          <Card key={item.id} className="border-zinc-800 bg-zinc-950/40 p-4">
            <p className="mb-3 text-sm font-medium text-zinc-200">{item.title}</p>
            <ExperienceMedia media={item.media} animate={false} />
          </Card>
        ))}
      </div>
    </details>
  );
}

