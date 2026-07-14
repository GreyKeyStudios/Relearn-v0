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
  switching: [
    {
      id: "ethernet-l2",
      title: "Ethernet",
      tip: "Switches forward Ethernet frames by MAC. Flooding, learning, and access vs trunk all sit on top of that Layer 2 picture.",
      topicId: "ethernet",
    },
    {
      id: "collision-vs-broadcast",
      title: "Collision vs broadcast domains",
      tip: "Each switch port is typically its own collision domain; a VLAN is still one broadcast domain until you segment further.",
    },
  ],
  vlans: [
    {
      id: "switching",
      title: "Switching",
      tip: "VLANs ride on switch MAC forwarding. Unknown unicasts still flood — but only inside their VLAN.",
      topicId: "switching",
    },
    {
      id: "l2-vs-l3",
      title: "Why Layer 3 between VLANs?",
      tip: "Separate VLANs = separate broadcast domains. Hosts in different VLANs need a router/SVI to talk — Layer 2 alone cannot bridge them.",
    },
  ],
  trunking: [
    {
      id: "vlans",
      title: "VLANs",
      tip: "Trunks carry many VLANs on one link with 802.1Q tags. Access ports carry one VLAN to end hosts.",
      topicId: "vlans",
    },
    {
      id: "native-vlan",
      title: "Native VLAN intuition",
      tip: "Untagged frames on a trunk are treated as the native VLAN — both ends must agree or traffic lands wrong.",
    },
  ],
  stp: [
    {
      id: "switching-loops",
      title: "Switching",
      tip: "STP exists because redundant switch links without it create Layer 2 loops and broadcast storms.",
      topicId: "switching",
    },
    {
      id: "portfast-edge",
      title: "PortFast rule of thumb",
      tip: "PortFast for host/access edges — not for trunks to other switches — so you speed up PCs without risking loops.",
    },
  ],
  "routing-fundamentals": [
    {
      id: "l2-vs-l3",
      title: "Switching vs routing",
      tip: "Switches forward by MAC inside a broadcast domain. Routers forward by destination IP between networks.",
      topicId: "switching",
    },
    {
      id: "longest-prefix",
      title: "Longest prefix match",
      tip: "More specific routes win: /24 beats /16 beats 0.0.0.0/0. Metric and AD only break ties among equal prefixes.",
    },
  ],
  "static-routes": [
    {
      id: "routing-fundamentals",
      title: "Routing Fundamentals",
      tip: "Statics are manually installed routes. Know AD and longest-prefix first — then floating defaults make sense.",
      topicId: "routing-fundamentals",
    },
    {
      id: "floating-ad",
      title: "Floating static idea",
      tip: "Raise AD above the primary route so the backup stays idle until the primary fails.",
    },
  ],
  "ospf-basics": [
    {
      id: "routing-fundamentals",
      title: "Routing Fundamentals",
      tip: "OSPF is dynamic link-state routing — still chooses paths with longest prefix + best cost after AD.",
      topicId: "routing-fundamentals",
    },
    {
      id: "static-routes",
      title: "Static Routes",
      tip: "Contrast: statics are hand-built; OSPF floods topology and runs SPF. Area 0 is the backbone hub.",
      topicId: "static-routes",
    },
  ],
  nat: [
    {
      id: "private-vs-public",
      title: "IPv4 Addressing",
      tip: "NAT exists because RFC 1918 private space is not globally routable — you translate to scarce public IPs.",
      topicId: "ipv4-addressing",
    },
    {
      id: "pat-vs-static",
      title: "PAT vs static NAT",
      tip: "PAT/overload = many→one using ports. Static NAT = fixed one→one for servers that need a stable public face.",
    },
  ],
  dhcp: [
    {
      id: "dora",
      title: "DORA sequence",
      tip: "Discover → Offer → Request → Acknowledge. First message is always Discover from the client.",
    },
    {
      id: "ip-ranges",
      title: "IP Ranges",
      tip: "DHCP failure often shows up as 169.254.x.x (APIPA) — not a healthy RFC 1918 lease.",
      topicId: "ip-ranges",
    },
  ],
  dns: [
    {
      id: "a-vs-aaaa",
      title: "A vs AAAA",
      tip: "A = hostname → IPv4. AAAA = hostname → IPv6. CNAME aliases a name to another name.",
    },
    {
      id: "port-53",
      title: "Port 53",
      tip: "Queries are usually UDP/53; large answers and zone transfers use TCP/53. Don't confuse with HTTP 80/443.",
    },
  ],
  acls: [
    {
      id: "routing-fundamentals",
      title: "Routing Fundamentals",
      tip: "ACLs sit on interfaces and filter IP traffic — knowing how packets get routed makes ACL placement click.",
      topicId: "routing-fundamentals",
    },
    {
      id: "std-vs-ext",
      title: "Standard vs extended",
      tip: "Standard = source IP only. Extended = source, destination, protocol, ports. Implicit deny at the bottom.",
    },
  ],
  "network-security": [
    {
      id: "cia",
      title: "CIA triad",
      tip: "Confidentiality, Integrity, Availability — the three goals everything else (auth, crypto, ACLs) supports.",
    },
    {
      id: "wireless-basics",
      title: "Wireless Basics",
      tip: "WPA3 is the wireless encryption piece of defense-in-depth; port security/802.1X cover the wired edge.",
      topicId: "wireless-basics",
    },
  ],
  "automation-basics": [
    {
      id: "planes",
      title: "Control vs data plane",
      tip: "Control plane = decisions (routing/SDN controller). Data plane = forwarding. SDN separates them.",
    },
    {
      id: "api-json",
      title: "APIs speak JSON",
      tip: "REST APIs usually carry JSON over HTTP — not Ethernet frames or STP BPDUs.",
    },
  ],
};

export function getPrerequisiteRefreshers(
  topicId: string
): PrerequisiteRefresherItem[] {
  return BY_TOPIC[topicId] ?? [];
}
