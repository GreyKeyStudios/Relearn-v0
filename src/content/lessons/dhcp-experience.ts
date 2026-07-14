import type { TopicExperience } from "@/content/types";

/** LES experience — DHCP (Wave 4 / Domain 4 IP Services). */
export const DHCP_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 4,
      headline: "Hosts need an address automatically.",
      body: "Manually typing IP, mask, gateway, and DNS on every PC does not scale. DHCP hands out those settings so clients join the network without static config.",
      media: {
        kind: "icons",
        items: [
          { icon: "server", label: "DHCP server" },
          { icon: "monitor", label: "Client" },
        ],
      },
      terms: [
        {
          id: "dhcp",
          label: "DHCP",
          tier: "basics",
          shortDefinition:
            "Dynamic Host Configuration Protocol — automatically assigns IP settings to clients.",
        },
        {
          id: "lease",
          label: "Lease",
          tier: "basics",
          shortDefinition:
            "Timed grant of an IP address (and options) from the DHCP server to a client.",
        },
      ],
    },
    {
      id: "why-dhcp",
      type: "teach",
      tcpLayer: 4,
      headline: "Why DHCP exists.",
      body: "Without DHCP, every host needs a unique static IP that matches the subnet, plus a correct gateway and DNS list. One typo breaks reachability. DHCP pools addresses and options centrally.",
    },
    {
      id: "ports",
      type: "teach",
      tcpLayer: 4,
      headline: "UDP ports 67 and 68.",
      body: "DHCP rides UDP. The server listens on port 67; the client uses port 68. Remember the pair — exam questions love swapping them with DNS 53 or HTTP 80.",
      terms: [
        {
          id: "udp",
          label: "UDP",
          tier: "basics",
          shortDefinition:
            "Connectionless transport — DHCP uses it so Discover can broadcast without a TCP handshake.",
        },
        {
          id: "port-67",
          label: "Port 67",
          tier: "basics",
          shortDefinition: "DHCP server UDP port.",
        },
        {
          id: "port-68",
          label: "Port 68",
          tier: "basics",
          shortDefinition: "DHCP client UDP port.",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "Server 67 · Client 68 — not TCP, not port 53.",
      },
    },
    {
      id: "ports-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — DHCP ports",
      checkpointQuestionId: "dhcp-q1",
    },
    {
      id: "dora-order",
      type: "teach",
      tcpLayer: 4,
      headline: "DORA — four steps.",
      body: "Lease talk follows Discover → Offer → Request → Acknowledge. Memorize that order. Discover starts from the client looking for a server.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Discover" },
          { icon: "server", label: "Offer" },
          { icon: "monitor", label: "Request" },
          { icon: "server", label: "Ack" },
        ],
      },
      terms: [
        {
          id: "dora",
          label: "DORA",
          tier: "basics",
          shortDefinition:
            "Discover, Offer, Request, Acknowledge — the DHCP four-step lease exchange.",
        },
        {
          id: "discover",
          label: "Discover",
          tier: "basics",
          shortDefinition: "Client broadcast: “Is there a DHCP server on this network?”",
        },
        {
          id: "offer",
          label: "Offer",
          tier: "basics",
          shortDefinition: "Server proposes an IP address and options.",
        },
        {
          id: "request",
          label: "Request",
          tier: "basics",
          shortDefinition: "Client asks to use a chosen offer.",
        },
        {
          id: "ack",
          label: "Acknowledge",
          tier: "basics",
          shortDefinition: "Server confirms the lease — client may use the address.",
        },
      ],
    },
    {
      id: "dora-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — first message",
      checkpointQuestionId: "dhcp-q2",
    },
    {
      id: "scope-pool",
      type: "teach",
      tcpLayer: 4,
      headline: "Scope (pool) of addresses.",
      body: "A scope is the range of IPs the server may lease on a subnet, plus exclusions for static devices. The pool must match that LAN’s network and mask.",
      terms: [
        {
          id: "scope",
          label: "DHCP scope",
          tier: "basics",
          shortDefinition:
            "The assignable address range (and related options) for a subnet/pool.",
        },
        {
          id: "exclusion",
          label: "Exclusion",
          tier: "basics",
          shortDefinition:
            "Addresses removed from the pool so printers, servers, or gateways stay static.",
        },
      ],
    },
    {
      id: "scope-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — scope",
      checkpointQuestionId: "dhcp-q5",
    },
    {
      id: "options-gw-dns",
      type: "teach",
      tcpLayer: 4,
      headline: "Gateway and DNS options.",
      body: "Besides an IP and mask, DHCP commonly pushes the default gateway (router) and a list of DNS servers. Wrong options = can ping the LAN but not the Internet by name — or not at all.",
      terms: [
        {
          id: "default-gateway",
          label: "Default gateway",
          tier: "basics",
          shortDefinition:
            "Router IP on the subnet — typical DHCP option so hosts reach remote networks.",
          example: "Option 3",
        },
        {
          id: "dns-option",
          label: "DNS servers option",
          tier: "basics",
          shortDefinition:
            "List of resolver IPs DHCP gives clients so names can be looked up.",
          example: "Option 6",
        },
      ],
    },
    {
      id: "lease-time",
      type: "teach",
      tcpLayer: 4,
      headline: "Leases expire.",
      body: "A lease lasts a configured time. Clients renew before it ends. When DHCP is healthy, addresses recycle instead of staying forever on idle machines.",
      terms: [
        {
          id: "lease-time",
          label: "Lease time",
          tier: "basics",
          shortDefinition: "How long the client may keep the assigned address before renewing.",
        },
      ],
    },
    {
      id: "relay-why",
      type: "teach",
      tcpLayer: 4,
      headline: "Broadcasts stop at routers.",
      body: "DHCP Discover is a broadcast. Routers do not forward broadcasts to other subnets. A remote DHCP server never hears the client unless something relays that traffic.",
    },
    {
      id: "helper-address",
      type: "teach",
      tcpLayer: 4,
      headline: "ip helper-address (relay).",
      body: "On the client’s gateway interface, ip helper-address <server-ip> forwards DHCP/BootP to a central server as unicast. One server can then serve many VLANs.",
      terms: [
        {
          id: "dhcp-relay",
          label: "DHCP relay",
          tier: "basics",
          shortDefinition:
            "Router feature that forwards DHCP broadcasts to a server on another subnet.",
        },
        {
          id: "ip-helper",
          label: "ip helper-address",
          tier: "basics",
          shortDefinition:
            "Cisco interface command pointing at the remote DHCP server for relay.",
        },
      ],
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Client LAN" },
          { icon: "server", label: "Relay router" },
          { icon: "globe", label: "DHCP server" },
        ],
      },
    },
    {
      id: "helper-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — helper",
      checkpointQuestionId: "dhcp-q3",
    },
    {
      id: "apipa",
      type: "teach",
      tcpLayer: 4,
      headline: "APIPA when DHCP fails.",
      body: "If no server replies, Windows often self-assigns 169.254.x.x (APIPA). Local link only — no real gateway, usually no Internet. Treat it as a DHCP-reachability symptom.",
      terms: [
        {
          id: "apipa",
          label: "APIPA",
          tier: "basics",
          shortDefinition:
            "Automatic Private IP Addressing — 169.254.0.0/16 when a DHCP lease cannot be obtained.",
          example: "169.254.10.5",
        },
      ],
    },
    {
      id: "apipa-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — APIPA",
      checkpointQuestionId: "dhcp-q4",
    },
    {
      id: "not-dns",
      type: "misconception",
      tcpLayer: 4,
      headline: "DHCP is not name resolution.",
      body: "DHCP assigns addresses and options. DNS maps names to IPs. DHCP often tells the client which DNS servers to use — but it does not resolve www.example.com itself.",
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 4,
      headline: "What we defer.",
      body: "Deep DHCP snooping switch config, DHCPv6 message detail, and exotic option catalogs wait. Today: why DHCP, 67/68, DORA, scope, gateway/DNS options, lease, helper/relay, APIPA.",
      laterLearn: [
        "DHCP snooping trusted/untrusted deep config",
        "DHCPv6 message and option detail",
        "Reservation MAC-to-IP lab depth",
      ],
      terms: [
        {
          id: "dhcp-snooping",
          label: "DHCP snooping",
          tier: "later",
          shortDefinition:
            "Switch security feature that filters rogue DHCP offers — concept later; config deferred.",
          laterItems: ["Trusted vs untrusted ports", "Binding table"],
        },
        {
          id: "dhcpv6",
          label: "DHCPv6",
          tier: "later",
          shortDefinition: "IPv6 address/options assignment — separate from today’s DHCPv4 DORA.",
          laterItems: ["IA_NA / IA_PD", "Interaction with SLAAC"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 4,
      headline: "DHCP covered.",
      body: "You can explain why DHCP exists, UDP 67/68, DORA order, scope/pool, gateway and DNS options, leases, why helper-address is needed across routers, and APIPA 169.254 when DHCP fails.",
    },
  ],
};
