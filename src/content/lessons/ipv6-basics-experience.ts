import type { StudyTip, TopicExperience } from "@/content/types";

const IPV6_TYPES_TIP: StudyTip = {
  title: "IPv6 address types",
  body:
    "Global: 2000::/3 · Link-local: fe80::/10 · Unique local: fc00::/7 · Multicast: ff00::/8 · Loopback: ::1",
};

/** LES experience — IPv6 format, types, compression, NDP, SLAAC (Wave 1). */
export const IPV6_BASICS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "IPv6 — same job, bigger space.",
      body: "IPv6 does what IPv4 does: logical addresses so routers move packets between networks. The difference is size — 128 bits instead of 32 — so the Internet never runs out of addresses again.",
    },
    {
      id: "bridge-ipv4",
      type: "teach",
      tcpLayer: 2,
      headline: "You already know IPv4.",
      body: "Dotted decimal, subnets, private ranges, NAT at the router — that stack still runs the world. IPv6 runs alongside it on many networks. Same Layer 3 role; new format and new rules to recognize.",
      terms: [
        {
          id: "ipv4",
          label: "IPv4",
          tier: "basics",
          shortDefinition:
            "32-bit addresses — from the IPv4 addressing and subnetting lessons.",
        },
      ],
    },
    {
      id: "why-ipv6",
      type: "teach",
      tcpLayer: 2,
      headline: "Why IPv6 exists.",
      body: "IPv4 has only about 4 billion addresses. NAT and private ranges stretched that far — you saw why in IP ranges. IPv6 is the long-term replacement: a vastly larger pool so every device can have a real global address. IPv4 will eventually go away.",
      studyTip: {
        title: "Not a rip-and-replace",
        body: "Today most networks run dual-stack — IPv4 and IPv6 together during the transition. IPv4 is not disappearing overnight, but IPv6 is where the Internet is headed.",
      },
    },
    {
      id: "format-128",
      type: "teach",
      tcpLayer: 2,
      headline: "128 bits, eight hextets.",
      body: "An IPv6 address is 128 bits — four times longer than IPv4. It is written as eight groups of four hex digits separated by colons. Each group is one hextet (16 bits). Example: 2001:0db8:0000:0001:0000:0000:0000:0001.",
      terms: [
        {
          id: "hextet",
          label: "Hextet",
          tier: "basics",
          shortDefinition:
            "One 16-bit group in an IPv6 address — four hex digits between colons.",
          example: "0db8",
        },
      ],
    },
    {
      id: "prefix-length",
      type: "teach",
      tcpLayer: 2,
      headline: "Prefix length — /64.",
      body: "/64 means the first 64 bits are the network prefix and the last 64 bits identify the interface (host). Each hextet is 16 bits — so /64 is the first four hextets, not just the first one.",
      media: { kind: "ipv6-prefix", prefix: 64 },
      terms: [
        {
          id: "prefix",
          label: "Prefix length",
          tier: "basics",
          shortDefinition:
            "/64 on IPv6 — first 64 bits = network, last 64 bits = interface ID. Same idea as /24 on IPv4.",
        },
      ],
    },
    {
      id: "bits-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — address size",
      checkpointQuestionId: "ipv6-basics-q1",
    },
    {
      id: "hex-why",
      type: "teach",
      tcpLayer: 2,
      headline: "Why hexadecimal?",
      body: "Eight groups of 16 bits in decimal would be unreadable. Hex fits four bits per character — shorter to write and standard on exams. You do not need to convert hex to binary for CCNA basics; recognize the format.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "128 bits" },
          { icon: "server", label: "8 hextets" },
          { icon: "monitor", label: "2001:db8::1" },
        ],
      },
    },
    {
      id: "compression-rules",
      type: "teach",
      tcpLayer: 2,
      headline: "Two compression rules.",
      body: "Rule 1: drop all leading zeros in any hextet (0db8 → db8, 00AF → AF). Rule 2: replace one run of all-zero hextets with :: — only once per address. 2001:0db8:0000:0000:0000:0000:0000:0001 → 2001:db8::1.",
      terms: [
        {
          id: "double-colon",
          label: "::",
          tier: "basics",
          shortDefinition:
            "Compresses one contiguous sequence of all-zero hextets — allowed once per address.",
        },
      ],
    },
    {
      id: "leading-zeros-examples",
      type: "memory",
      tcpLayer: 2,
      headline: "Leading zeros — all of them.",
      body: "Every leading zero inside a hextet can go — not just the first one. 000A → A · 00AF → AF · 0000 → 0. Zeros in the middle of a hextet stay (A0F stays A0F).",
      media: { kind: "ipv6-leading-zeros" },
    },
    {
      id: "double-colon-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Trap: only one ::.",
      body: "2001::db8::1 is invalid — two double colons. Pick the longest zero run (or the one that makes the address shortest). Exam items often test valid vs invalid compression.",
    },
    {
      id: "compression-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — ::",
      checkpointQuestionId: "ipv6-basics-q4",
    },
    {
      id: "types-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Spot the prefix.",
      body: "Like IP ranges for IPv4, IPv6 questions ask what a prefix means — global Internet, link-local only, private-like, or multicast. Read the start of the address; the table at the end is your cheat sheet.",
    },
    {
      id: "ipv4-ipv6-compare",
      type: "memory",
      tcpLayer: 2,
      headline: "Same roles, new names.",
      body: "You already know IPv4 private vs public from IP ranges. IPv6 uses different prefixes for the same jobs — global unicast replaces public, unique local replaces private RFC 1918.",
      media: { kind: "ipv4-ipv6-compare" },
    },
    {
      id: "global-unicast",
      type: "teach",
      tcpLayer: 2,
      headline: "Global unicast — 2000::/3.",
      body: "Addresses starting in the 2000::/3 range are globally routable on the Internet — the IPv6 equivalent of a public IPv4 address. Most global unicast addresses you see begin with 2xxx or 3xxx.",
      terms: [
        {
          id: "global-unicast",
          label: "Global unicast",
          tier: "basics",
          shortDefinition: "2000::/3 — routable on the public Internet.",
        },
      ],
    },
    {
      id: "link-local",
      type: "teach",
      tcpLayer: 2,
      headline: "Link-local — fe80::/10.",
      body: "fe80::/10 never leaves the local link — like APIPA on IPv4, but every IPv6 interface gets one automatically. Used for neighbor discovery on the LAN. Not forwarded by routers to other networks.",
      terms: [
        {
          id: "link-local",
          label: "Link-local",
          tier: "basics",
          shortDefinition:
            "fe80::/10 — valid only on the same Ethernet segment; routers do not route it.",
        },
      ],
    },
    {
      id: "link-local-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — link-local",
      checkpointQuestionId: "ipv6-basics-q2",
    },
    {
      id: "unique-local",
      type: "memory",
      tcpLayer: 2,
      headline: "Unique local — fc00::/7.",
      body: "fc00::/7 is IPv6 private-like — internal only, not routed on the public Internet. From the compare table: IPv4 private RFC 1918 → IPv6 unique local. Many orgs still use NAT at the edge with IPv4 today.",
      terms: [
        {
          id: "unique-local",
          label: "Unique local",
          tier: "basics",
          shortDefinition: "fc00::/7 — private-like; not globally routable.",
        },
      ],
    },
    {
      id: "no-broadcast",
      type: "misconception",
      tcpLayer: 2,
      headline: "No IPv6 broadcast.",
      body: "IPv4 uses broadcast; IPv6 dropped it. One-to-many traffic uses multicast instead — addresses starting with ff (ff00::/8). You saw multicast on IPv4 (224.x); IPv6 multicast starts with ff.",
      terms: [
        {
          id: "multicast",
          label: "Multicast",
          tier: "basics",
          shortDefinition: "ff00::/8 — one-to-many; replaces broadcast in IPv6.",
        },
      ],
    },
    {
      id: "loopback",
      type: "memory",
      tcpLayer: 2,
      headline: "Loopback — ::1.",
      body: "::1 is IPv6 loopback — same idea as 127.0.0.1 on IPv4. Traffic to ::1 stays on your device to test the stack. :: means all zeros before the final 1.",
    },
    {
      id: "ndp-replaces-arp",
      type: "teach",
      tcpLayer: 2,
      headline: "NDP replaces ARP.",
      body: "IPv4 used ARP to map IP to MAC on the LAN — from your Ethernet lesson. IPv6 uses NDP (Neighbor Discovery Protocol) over ICMPv6 instead. Same job: find the MAC for the next hop on the local link.",
      terms: [
        {
          id: "ndp",
          label: "NDP",
          tier: "basics",
          shortDefinition:
            "Neighbor Discovery Protocol — IPv6 replaces ARP; uses ICMPv6 messages.",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Hardware address on the local link — NDP resolves IPv6 to MAC like ARP did in IPv4.",
        },
        {
          id: "icmpv6",
          label: "ICMPv6",
          tier: "basics",
          shortDefinition:
            "Internet Control Message Protocol version 6 — carries NDP and network diagnostics for IPv6.",
        },
        {
          id: "arp",
          label: "ARP",
          tier: "basics",
          shortDefinition:
            "Address Resolution Protocol — IPv4 LAN mapping; NDP replaces this in IPv6.",
        },
      ],
    },
    {
      id: "ndp-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — NDP",
      checkpointQuestionId: "ipv6-basics-q3",
    },
    {
      id: "slaac",
      type: "teach",
      tcpLayer: 2,
      headline: "SLAAC — auto addresses.",
      body: "SLAAC (Stateless Address Autoconfiguration) lets a host build its own IPv6 address from router advertisements — periodic messages from the router with the local network prefix. No DHCP required. DHCPv6 still exists for extra options.",
      terms: [
        {
          id: "slaac",
          label: "SLAAC",
          tier: "basics",
          shortDefinition:
            "Stateless Address Autoconfiguration — host self-assigns IPv6 from router advertisements.",
        },
        {
          id: "ra",
          label: "Router advertisement (RA)",
          tier: "basics",
          shortDefinition:
            "ICMPv6 message from a router telling hosts which network prefix to use — SLAAC listens for these.",
        },
        {
          id: "dhcpv6",
          label: "DHCPv6",
          tier: "later",
          shortDefinition:
            "Dynamic Host Configuration Protocol for IPv6 — optional; can assign addresses and options.",
        },
      ],
      laterLearn: ["EUI-64 interface ID from MAC address"],
    },
    {
      id: "slaac-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — SLAAC",
      checkpointQuestionId: "ipv6-basics-q5",
    },
    {
      id: "dual-stack",
      type: "memory",
      tcpLayer: 2,
      headline: "Dual-stack in the real world.",
      body: "Most production networks run IPv4 and IPv6 together — dual-stack. Your PC may have 192.168.1.x and a global IPv6 address at the same time. CCNA basics: know formats and types; deep config comes later.",
    },
    {
      id: "types-table",
      type: "memory",
      tcpLayer: 2,
      headline: "Your recall table.",
      body: "Read the prefix — same skill as IP ranges. Global = Internet · fe80 = this link only · fc00 = private-like · ff = multicast · ::1 = loopback.",
      studyTip: IPV6_TYPES_TIP,
      media: { kind: "ipv6-types-table" },
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "IPv6 basics covered.",
      body: "128-bit hex addresses, /64 prefix split, :: compression once, five types to spot, NDP instead of ARP, SLAAC for auto config. Try the compression drill if /64 or zero rules need reps. Wireless basics is next.",
    },
  ],
};
