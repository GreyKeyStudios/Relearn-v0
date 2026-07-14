/**
 * Optional pre-lesson refresher tips keyed by topicId.
 * Keep tips ~30–60 seconds of reading; link to other topics when useful.
 * Expand map as CCNA (and other) topics get judgment-driven refreshers.
 */

export type PrerequisiteRefresherItem = {
  id: string;
  title: string;
  tip: string;
  /** Optional lesson to open for a deeper refresh */
  topicId?: string;
};

const BY_TOPIC: Record<string, PrerequisiteRefresherItem[]> = {
  subnetting: [
    {
      id: "powers-of-two",
      title: "Powers of two",
      tip: "Block sizes jump like 2, 4, 8, 16, 32, 64, 128. Memorize 2^4=16, 2^5=32, 2^6=64 — subnet math leans on these.",
    },
    {
      id: "host-bits",
      title: "Host bits from the prefix",
      tip: "Host bits = 32 − prefix. /26 → 6 host bits → 2^6 = 64 addresses in each block.",
    },
    {
      id: "ipv4-addressing",
      title: "IPv4 Addressing",
      tip: "Need the network vs host split and CIDR basics? Skim the IPv4 lesson lightbulb, then return.",
      topicId: "ipv4-addressing",
    },
  ],
};

export function getPrerequisiteRefreshers(
  topicId: string
): PrerequisiteRefresherItem[] {
  return BY_TOPIC[topicId] ?? [];
}
