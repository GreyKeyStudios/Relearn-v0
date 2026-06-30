import type { TopicExperience } from "@/content/types";

/** LES experience — IPv4 fundamentals, Internet layer anchor (Wave 1). */
export const IPV4_ADDRESSING_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Logical names for every network.",
      body: "Ethernet delivers frames locally using MAC addresses. IPv4 gives each device a logical address so routers can move packets between networks — including across the Internet.",
      terms: [
        {
          id: "ip",
          label: "IPv4 address",
          tier: "basics",
          shortDefinition:
            "A 32-bit logical address routers use to forward packets — written as four decimal numbers.",
          example: "192.168.1.10",
        },
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address for local frame delivery — from the Ethernet lesson.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Layer 2 container that carries IP packets as payload on a LAN.",
        },
      ],
    },
    {
      id: "intro-bridge",
      type: "teach",
      tcpLayer: 2,
      headline: "IPv4 builds on Ethernet.",
      body: "In the Ethernet lesson, IP packets rode inside frame payloads and remote traffic used your router's MAC. This lesson teaches the IPv4 addresses inside those packets — and what every host must be configured with.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address for local delivery — you studied this in Ethernet.",
        },
        {
          id: "frame",
          label: "Frame",
          tier: "basics",
          shortDefinition:
            "Ethernet wraps IP packets in frames for each local hop.",
        },
        {
          id: "gateway",
          label: "Default gateway",
          tier: "basics",
          shortDefinition:
            "Your router's IP on the LAN — the next hop for traffic leaving your subnet.",
        },
      ],
    },
    {
      id: "ip-what",
      type: "teach",
      tcpLayer: 2,
      headline: "What is an IPv4 address?",
      body: "An IPv4 address is a 32-bit logical identifier for a host or interface on an IP network. Routers read destination IP addresses to choose paths between networks — unlike MAC addresses, which only work locally.",
      terms: [
        {
          id: "ip",
          label: "IPv4 address",
          tier: "basics",
          shortDefinition:
            "Logical Layer 3 address — assigned by an admin or DHCP, not burned into the NIC.",
          example: "192.168.1.10",
        },
      ],
    },
    {
      id: "ip-why-dotted",
      type: "teach",
      tcpLayer: 2,
      headline: "Why dotted decimal?",
      body: "Computers store IPv4 as 32 binary digits — hard for humans to read or type. Dotted decimal splits those bits into four groups of eight and writes each group as a decimal number. Easier to read, easier to configure.",
      media: {
        kind: "icons",
        items: [
          { icon: "layers", label: "32 binary bits" },
          { icon: "server", label: "4 octets" },
          { icon: "monitor", label: "192.168.1.10" },
        ],
      },
    },
    {
      id: "ip-format",
      type: "teach",
      tcpLayer: 2,
      headline: "Dotted decimal format.",
      body: "IPv4 is written as four decimal numbers separated by dots. Each number is called an octet. Example: 192.168.1.10 has four octets. You will learn why each octet only goes up to 255 when you study binary.",
      media: {
        kind: "flow",
        items: [
          { icon: "server", label: "192" },
          { icon: "server", label: "168" },
          { icon: "server", label: "1" },
          { icon: "server", label: "10" },
        ],
      },
      terms: [
        {
          id: "octet",
          label: "Octet",
          tier: "basics",
          shortDefinition:
            "One of the four numbers in a dotted-decimal IPv4 address — e.g. 192, 168, 1, and 10.",
        },
      ],
      laterLearn: ["Why octets range 0–255", "Binary conversion"],
    },
    {
      id: "ip-bits",
      type: "teach",
      tcpLayer: 2,
      headline: "32 bits total.",
      body: "An IPv4 address is 32 bits total. Those bits are grouped into four octets for dotted decimal. Subnetting will use binary; for now, practice reading addresses like 192.168.1.10.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "8 bits (1 octet)" },
          { icon: "layers", label: "16 bits (2 octets)" },
          { icon: "layers", label: "24 bits (3 octets)" },
          { icon: "layers", label: "32 bits (4 octets)" },
        ],
      },
      laterLearn: ["Binary conversion", "Subnet calculations"],
    },
    {
      id: "ip-bits-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — IPv4 size",
      checkpointQuestionId: "ipv4-addressing-q2",
    },
    {
      id: "valid-ip",
      type: "misconception",
      tcpLayer: 2,
      headline: "What makes an IP valid?",
      body: "A valid IPv4 address has exactly four octets, each from 0 to 255. 10.0.5.8 is valid. 192.168.1.256 is not — 256 exceeds one octet. 192.168.1 has only three octets. 300.1.1.1 is also invalid.",
      terms: [
        {
          id: "valid-ip",
          label: "Valid format",
          tier: "basics",
          shortDefinition:
            "Four octets, each 0–255. Format rules are separate from whether an address is private, public, or reserved.",
        },
      ],
    },
    {
      id: "valid-ip-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — valid address",
      checkpointQuestionId: "ipv4-addressing-q7",
    },
    {
      id: "ip-vs-mac",
      type: "misconception",
      tcpLayer: 2,
      headline: "IP address is not a MAC address.",
      body: "A MAC address is burned into the NIC for local delivery. An IPv4 address is logical — it can be changed, is assigned per network, and routers use it to route packets beyond your LAN.",
      media: {
        kind: "icons",
        items: [
          { icon: "network", label: "MAC = local" },
          { icon: "router", label: "IP = routed" },
        ],
      },
      terms: [
        {
          id: "nic",
          label: "NIC",
          tier: "basics",
          shortDefinition:
            "Network Interface Card — the hardware port where the burned-in MAC address lives.",
        },
      ],
    },
    {
      id: "packet-in-frame",
      type: "teach",
      tcpLayer: 2,
      headline: "Packets inside frames.",
      body: "At Layer 3, data is called a packet. The packet rides inside an Ethernet frame's payload. The frame's MAC addresses handle the local hop; the packet's IP addresses name the source and destination hosts end to end.",
      media: {
        kind: "flow",
        items: [
          { icon: "layers", label: "Ethernet frame" },
          { icon: "router", label: "IP packet inside" },
          { icon: "globe", label: "Dest IP end to end" },
        ],
      },
      terms: [
        {
          id: "packet",
          label: "Packet",
          tier: "basics",
          shortDefinition:
            "Layer 3 PDU — contains source and destination IP addresses for routing between networks.",
        },
      ],
    },
    {
      id: "subnet-what",
      type: "teach",
      tcpLayer: 2,
      headline: "What is a subnet?",
      body: "A subnet is a group of devices that share the same network portion of an IP address. Devices on the same subnet can talk directly. Different subnets need a router between them — that is why subnetting matters later.",
      terms: [
        {
          id: "subnet",
          label: "Subnet",
          tier: "basics",
          shortDefinition:
            "A subdivision of an IP network — hosts with matching network portions belong to the same subnet.",
        },
      ],
    },
    {
      id: "mask-intro",
      type: "teach",
      tcpLayer: 2,
      headline: "Network and host portions.",
      body: "Every IPv4 address splits into two parts: the network portion (which subnet) and the host portion (which device on that subnet). The subnet mask marks where that boundary falls.",
      terms: [
        {
          id: "mask",
          label: "Subnet mask",
          tier: "basics",
          shortDefinition:
            "Shows which part of an IP is the network vs the host — written as 255.255.255.0 or /24.",
        },
      ],
      laterLearn: ["Network and broadcast addresses", "Binary AND with mask"],
    },
    {
      id: "mask-example",
      type: "teach",
      tcpLayer: 2,
      headline: "Read it together.",
      body: "In 192.168.1.10/24, the subnet is 192.168.1.x — the shared network portion. The .10 is the host portion — this specific device. Subnetting will teach how to calculate that from the mask.",
    },
    {
      id: "mask-slash24",
      type: "teach",
      tcpLayer: 2,
      headline: "A common mask: /24.",
      body: "A /24 prefix means the first 24 bits are the network portion and the last 8 bits are for hosts. On a /24, one subnet can hold up to 256 host values in the last octet.",
      terms: [
        {
          id: "cidr",
          label: "/24 (CIDR)",
          tier: "basics",
          shortDefinition:
            "CIDR prefix notation — /24 means 24 network bits and 8 host bits.",
        },
      ],
    },
    {
      id: "mask-why-255",
      type: "teach",
      tcpLayer: 2,
      headline: "Why 255.255.255.0?",
      body: "For a /24, the first three octets are network bits. In the mask, an octet used entirely for the network is written as 255. The last octet is all host bits, written as 0. That gives 255.255.255.0. Subnetting shows the binary math.",
      studyTip: {
        title: "Memory hook",
        body: "/24 → three octets locked as network (255.255.255) + one octet for hosts (.0 in the mask).",
      },
    },
    {
      id: "mask-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — /24 mask",
      checkpointQuestionId: "ipv4-addressing-q4",
    },
    {
      id: "public-private",
      type: "teach",
      tcpLayer: 2,
      headline: "Public vs private networks.",
      body: "Public IP addresses are globally unique and routable on the Internet. Private addresses (like 10.0.5.8 or 192.168.x.x) are valid addresses used only inside local networks — private is not the same as invalid.",
      terms: [
        {
          id: "public",
          label: "Public IP",
          tier: "basics",
          shortDefinition:
            "Globally unique and routable on the Internet — usually assigned by your ISP.",
        },
        {
          id: "private",
          label: "Private IP",
          tier: "basics",
          shortDefinition:
            "Used only inside a local network — not forwarded across the public Internet.",
        },
      ],
    },
    {
      id: "nat-teach",
      type: "teach",
      tcpLayer: 2,
      headline: "What is NAT?",
      body: "NAT (Network Address Translation) runs on your router. It lets many devices with private addresses share one public IP address when they access the Internet. The router translates private addresses to public ones at the border.",
      terms: [
        {
          id: "nat",
          label: "NAT",
          tier: "basics",
          shortDefinition:
            "Network Address Translation — rewrites private IPs to a public IP so internal devices can reach the Internet.",
        },
      ],
      laterLearn: ["NAT overload (PAT)", "Static vs dynamic NAT"],
    },
    {
      id: "private-why",
      type: "teach",
      tcpLayer: 2,
      headline: "Why private addresses exist.",
      body: "Not every device needs its own public address. RFC 1918 is the Internet standard that lists three private IPv4 ranges for internal use. Homes and offices reuse those addresses because NAT on the router shares one public IP.",
      terms: [
        {
          id: "rfc",
          label: "RFC 1918",
          tier: "basics",
          shortDefinition:
            "RFC = Request for Comments, an Internet standards document. RFC 1918 defines the private IPv4 ranges.",
        },
        {
          id: "private",
          label: "Private IP",
          tier: "basics",
          shortDefinition:
            "Addresses from RFC 1918 ranges — used inside an organization, not routed on the public Internet.",
        },
      ],
      laterLearn: ["Class A/B/C history"],
    },
    {
      id: "private-ranges",
      type: "memory",
      tcpLayer: 2,
      headline: "Three private ranges to know.",
      studyTip: {
        title: "RFC 1918 private ranges",
        body: "RFC = Internet standards document. These three ranges are private: 10.0.0.0/8 · 172.16.0.0/12 · 192.168.0.0/16.",
      },
      terms: [
        {
          id: "private",
          label: "Private ranges",
          tier: "basics",
          shortDefinition:
            "10.0.0.0/8 (large), 172.16.0.0/12 (medium), 192.168.0.0/16 (home/small office).",
        },
      ],
    },
    {
      id: "private-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — private IP",
      checkpointQuestionId: "ipv4-addressing-q1",
    },
    {
      id: "gateway-what",
      type: "teach",
      tcpLayer: 2,
      headline: "What is a default gateway?",
      body: "The default gateway is the router's IPv4 address on your subnet. When your PC needs to reach a remote network, it sends the packet to the gateway — the router takes it from there.",
      terms: [
        {
          id: "gateway",
          label: "Default gateway",
          tier: "basics",
          shortDefinition:
            "Router IP on your local subnet — the next hop for traffic that is not on your LAN.",
          example: "192.168.1.1",
        },
      ],
    },
    {
      id: "gateway-ethernet",
      type: "teach",
      tcpLayer: 2,
      headline: "How IP and Ethernet work together.",
      body: "You want to reach google.com. Your PC puts Google's IP in the packet. Google is not on your LAN, so the frame cannot use Google's MAC address. The frame goes to your router instead. ARP finds the router's MAC for you.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Packet → Google IP" },
          { icon: "router", label: "Frame → router MAC" },
          { icon: "network", label: "ARP finds MAC" },
        ],
      },
      terms: [
        {
          id: "arp",
          label: "ARP",
          tier: "basics",
          shortDefinition:
            "Maps the gateway's IP address to its MAC address on your LAN — from the Ethernet lesson.",
        },
      ],
    },
    {
      id: "gateway-same-subnet",
      type: "teach",
      tcpLayer: 2,
      headline: "Gateway must be local.",
      body: "The default gateway must be an IP address on the same subnet as your PC. If it were on a different network, your PC could not reach it without another router in between.",
      studyTip: {
        title: "Exam tip",
        body: "A host cannot use a default gateway outside its own subnet — the gateway must be locally reachable.",
      },
    },
    {
      id: "gateway-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — default gateway",
      checkpointQuestionId: "ipv4-addressing-q6",
    },
    {
      id: "loopback",
      type: "teach",
      tcpLayer: 2,
      headline: "Loopback — 127.0.0.1.",
      body: "127.0.0.1 is the IPv4 loopback address. Traffic you send here loops back into the same device — it never leaves your PC. Ping 127.0.0.1 to test your TCP/IP stack on that device alone.",
      studyTip: {
        title: "Ping trick",
        body: "Ping works but websites do not? Loopback OK means your stack is fine — look at the cable, switch, or gateway next.",
      },
      terms: [
        {
          id: "loopback",
          label: "Loopback",
          tier: "basics",
          shortDefinition:
            "127.0.0.0/8 — traffic loops back into the same device. 127.0.0.1 is the address you will use most.",
        },
        {
          id: "ping",
          label: "Ping",
          tier: "basics",
          shortDefinition:
            "ICMP echo test — ping 127.0.0.1 checks the local stack without using the physical network.",
        },
        {
          id: "tcp",
          label: "TCP/IP stack",
          tier: "basics",
          shortDefinition:
            "The protocol suite on your device — loopback tests it without leaving the device.",
        },
      ],
    },
    {
      id: "loopback-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — loopback",
      checkpointQuestionId: "ipv4-addressing-q3",
    },
    {
      id: "apipa",
      type: "teach",
      tcpLayer: 2,
      headline: "APIPA — when DHCP fails.",
      body: "If DHCP fails, Windows may self-assign 169.254.x.x (APIPA). You are cut off from your normal network — no gateway, usually no Internet. You may reach other APIPA devices on the same link only. Fix: restore DHCP or set a static IP.",
      terms: [
        {
          id: "apipa",
          label: "APIPA",
          tier: "basics",
          shortDefinition:
            "169.254.0.0/16 — self-assigned when DHCP fails. Link-local only, not routable.",
        },
        {
          id: "dhcp",
          label: "DHCP",
          tier: "later",
          shortDefinition:
            "Dynamic Host Configuration Protocol — automatically assigns IP, mask, and gateway.",
          laterTopicId: "dhcp",
          laterTopicLabel: "DHCP",
          laterItems: ["DHCP troubleshooting", "Renew and release", "DHCP server setup"],
        },
      ],
      laterLearn: ["DHCP troubleshooting", "Static IP configuration"],
    },
    {
      id: "apipa-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — APIPA",
      checkpointQuestionId: "ipv4-addressing-q5",
    },
    {
      id: "host-needs",
      type: "teach",
      tcpLayer: 2,
      headline: "What every host needs.",
      body: "To communicate beyond the local subnet, a host needs three things: a unique IPv4 address on its subnet, a matching subnet mask, and a default gateway on that same subnet.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "IP address" },
          { icon: "layers", label: "Subnet mask" },
          { icon: "router", label: "Default gateway" },
        ],
      },
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "IPv4 fundamentals covered.",
      body: "You can now explain IPv4 format, MAC vs IP, subnet masks, private ranges, default gateway, loopback, and APIPA. Next: subnetting — dividing networks with masks and prefixes.",
    },
  ],
};
