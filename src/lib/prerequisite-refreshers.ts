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
  "tcp-ip-model": [
    {
      id: "osi-layers",
      title: "OSI Model",
      tip: "TCP/IP collapses OSI into 4 layers. Knowing OSI Layer 3 vs 4 makes the mapping stick.",
      topicId: "osi-model",
    },
    {
      id: "ports-vs-ip",
      title: "Ports vs IP addresses",
      tip: "IP addresses identify hosts (Internet layer). Port numbers identify applications (Transport). Don't mix them.",
    },
  ],
  ethernet: [
    {
      id: "osi-l2",
      title: "OSI Data Link",
      tip: "Ethernet lives at Layer 2 — frames and MAC addresses, not IP routing.",
      topicId: "osi-model",
    },
    {
      id: "tcp-ip-network-access",
      title: "TCP/IP Network Access",
      tip: "Network Access = OSI Layers 1–2. That's where Ethernet frames live.",
      topicId: "tcp-ip-model",
    },
  ],
  "ipv4-addressing": [
    {
      id: "network-vs-host",
      title: "Network vs host bits",
      tip: "The prefix (/24) locks network bits; the remaining bits identify hosts. Subnetting builds on this split.",
    },
    {
      id: "ethernet-local",
      title: "Ethernet",
      tip: "Off-LAN traffic uses the gateway's MAC in the frame — IP decides 'which network,' Ethernet delivers on this LAN.",
      topicId: "ethernet",
    },
  ],
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
  "ip-ranges": [
    {
      id: "private-vs-special",
      title: "Private vs special ranges",
      tip: "RFC 1918 private ≠ APIPA (169.254) ≠ loopback (127) ≠ multicast (224). Each has a different job.",
    },
    {
      id: "ipv4-addressing",
      title: "IPv4 Addressing",
      tip: "If private vs public still feels fuzzy, skim IPv4 Addressing first.",
      topicId: "ipv4-addressing",
    },
  ],
  "ipv6-basics": [
    {
      id: "ipv4-contrast",
      title: "IPv4 Addressing",
      tip: "IPv6 is 128 bits (not 32), uses hextets (not octets), and has no broadcast — multicast + NDP instead of ARP.",
      topicId: "ipv4-addressing",
    },
    {
      id: "link-local",
      title: "Link-local intuition",
      tip: "fe80::/10 stays on the local link — like a dedicated 'this segment only' address every IPv6 interface gets.",
    },
  ],
  "wireless-basics": [
    {
      id: "ssid-vs-bssid",
      title: "SSID vs BSSID",
      tip: "SSID = network name you join. BSSID = the specific AP radio's MAC. Roaming often keeps the SSID while changing BSSID.",
    },
    {
      id: "ethernet",
      title: "Ethernet",
      tip: "An AP bridges wireless clients onto the wired LAN — Ethernet skills still matter on the far side of the radio.",
      topicId: "ethernet",
    },
  ],
};

export function getPrerequisiteRefreshers(
  topicId: string
): PrerequisiteRefresherItem[] {
  return BY_TOPIC[topicId] ?? [];
}
