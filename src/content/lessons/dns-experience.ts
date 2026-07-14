import type { TopicExperience } from "@/content/types";

/** LES experience — DNS (Wave 4 / Domain 4 IP Services). */
export const DNS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 4,
      headline: "People use names. Networks use numbers.",
      body: "Remembering 93.184.216.34 for every site fails. DNS translates hostnames like www.example.com into IP addresses so applications can connect.",
      media: {
        kind: "icons",
        items: [
          { icon: "globe", label: "Name" },
          { icon: "server", label: "IP address" },
        ],
      },
      terms: [
        {
          id: "dns",
          label: "DNS",
          tier: "basics",
          shortDefinition:
            "Domain Name System — hierarchical service that maps names to records (often IP addresses).",
        },
        {
          id: "hostname",
          label: "Hostname",
          tier: "basics",
          shortDefinition: "Human-readable name for a host or service, resolved via DNS.",
          example: "www.example.com",
        },
      ],
    },
    {
      id: "why-dns",
      type: "teach",
      tcpLayer: 4,
      headline: "Why names matter on the exam.",
      body: "If ping by IP works but browsing by name fails, think DNS. Connectivity to the network path can be fine while name resolution is broken.",
    },
    {
      id: "hierarchy-light",
      type: "teach",
      tcpLayer: 4,
      headline: "Hierarchy — light tour.",
      body: "DNS is a tree: root, then TLDs like .com, then the organization’s zone. You do not need to draw the whole tree — know answers come from servers authoritative for each piece.",
      terms: [
        {
          id: "zone",
          label: "Zone",
          tier: "basics",
          shortDefinition: "Portion of the DNS namespace a set of servers is responsible for.",
        },
        {
          id: "tld",
          label: "TLD",
          tier: "basics",
          shortDefinition: "Top-level domain — .com, .net, .org, country codes, and so on.",
        },
      ],
      laterLearn: ["Root hint and referral walkthrough labs"],
    },
    {
      id: "a-record",
      type: "teach",
      tcpLayer: 4,
      headline: "A record — name to IPv4.",
      body: "An A record maps a hostname to an IPv4 address. This is the classic “where is the web server?” answer for IPv4 clients.",
      terms: [
        {
          id: "a-record",
          label: "A record",
          tier: "basics",
          shortDefinition: "Maps a hostname to an IPv4 address.",
          example: "www → 203.0.113.10",
        },
      ],
    },
    {
      id: "a-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — A record",
      checkpointQuestionId: "dns-q1",
    },
    {
      id: "aaaa-record",
      type: "teach",
      tcpLayer: 4,
      headline: "AAAA — name to IPv6.",
      body: "AAAA (quad-A) maps a hostname to an IPv6 address. Same job as A, different address family — do not confuse with CNAME or PTR.",
      terms: [
        {
          id: "aaaa",
          label: "AAAA record",
          tier: "basics",
          shortDefinition: "Maps a hostname to an IPv6 address.",
        },
      ],
    },
    {
      id: "cname-record",
      type: "teach",
      tcpLayer: 4,
      headline: "CNAME — alias to another name.",
      body: "CNAME points one name at another hostname (alias → canonical). Useful for www pointing at the apex name. It is not an address by itself.",
      terms: [
        {
          id: "cname",
          label: "CNAME",
          tier: "basics",
          shortDefinition: "Alias record — one hostname pointing to another name.",
          example: "www → example.com",
        },
      ],
    },
    {
      id: "cname-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — CNAME",
      checkpointQuestionId: "dns-q3",
    },
    {
      id: "mx-record",
      type: "teach",
      tcpLayer: 4,
      headline: "MX — where mail goes.",
      body: "MX (mail exchange) records name the servers that accept email for a domain, with priority values. Not an A/AAAA swap — mail routing uses MX first.",
      terms: [
        {
          id: "mx",
          label: "MX record",
          tier: "basics",
          shortDefinition: "Names mail servers for a domain, with preference/priority.",
        },
      ],
    },
    {
      id: "ptr-record",
      type: "teach",
      tcpLayer: 4,
      headline: "PTR — reverse lookup.",
      body: "PTR maps an IP address back to a hostname (reverse DNS). Common in mail reputation checks. Forward is name→IP; reverse is IP→name.",
      terms: [
        {
          id: "ptr",
          label: "PTR record",
          tier: "basics",
          shortDefinition: "Reverse DNS — IP address to hostname.",
        },
      ],
    },
    {
      id: "ptr-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — PTR",
      checkpointQuestionId: "dns-q5",
    },
    {
      id: "port-53",
      type: "teach",
      tcpLayer: 4,
      headline: "Port 53 — UDP and TCP.",
      body: "DNS uses port 53. Everyday queries are usually UDP. TCP steps in for large replies and zone transfers. Do not pick “TCP only” without that context.",
      terms: [
        {
          id: "port-53",
          label: "Port 53",
          tier: "basics",
          shortDefinition: "Well-known DNS port — commonly UDP for queries; TCP when needed.",
        },
        {
          id: "udp",
          label: "UDP",
          tier: "basics",
          shortDefinition: "Usual transport for small DNS queries and answers.",
        },
        {
          id: "tcp",
          label: "TCP",
          tier: "basics",
          shortDefinition: "Used for large DNS responses and zone transfers.",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "53 = DNS. UDP common; TCP for large/zone.",
      },
    },
    {
      id: "port-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — DNS port",
      checkpointQuestionId: "dns-q2",
    },
    {
      id: "ttl-cache",
      type: "teach",
      tcpLayer: 4,
      headline: "TTL and caching.",
      body: "Each answer carries a TTL (seconds). Resolvers cache until it expires. Stale cache can make a “fixed” record still fail until the old answer times out.",
      terms: [
        {
          id: "ttl",
          label: "DNS TTL",
          tier: "basics",
          shortDefinition:
            "Time To Live on a DNS record — how long caches may reuse the answer.",
        },
        {
          id: "cache",
          label: "DNS cache",
          tier: "basics",
          shortDefinition: "Stored answers on resolvers or clients to avoid repeat queries.",
        },
      ],
    },
    {
      id: "ttl-check",
      type: "checkpoint",
      tcpLayer: 4,
      headline: "Quick check — TTL",
      checkpointQuestionId: "dns-q4",
    },
    {
      id: "recursive-auth",
      type: "teach",
      tcpLayer: 4,
      headline: "Recursive vs authoritative — light.",
      body: "Your configured resolver often works recursively: it chases answers for you. An authoritative server owns the zone and answers from its real records. Know the roles — not a full query-trace lab.",
      terms: [
        {
          id: "recursive",
          label: "Recursive resolver",
          tier: "basics",
          shortDefinition:
            "Looks up the full answer on behalf of the client, following referrals as needed.",
        },
        {
          id: "authoritative",
          label: "Authoritative server",
          tier: "basics",
          shortDefinition: "Holds the definitive records for zones it is responsible for.",
        },
      ],
      laterLearn: ["Iterative referral walkthrough with dig"],
    },
    {
      id: "dhcp-hands-dns",
      type: "teach",
      tcpLayer: 4,
      headline: "DHCP often hands out DNS.",
      body: "Clients usually learn their DNS server list from DHCP (option 6), not by magic. Wrong DNS option or unreachable resolver looks like “the Internet is down” when only names fail.",
      terms: [
        {
          id: "dhcp",
          label: "DHCP",
          tier: "basics",
          shortDefinition:
            "Often provides the DNS server IPs clients use — separate from DNS itself.",
        },
      ],
    },
    {
      id: "not-arp",
      type: "misconception",
      tcpLayer: 4,
      headline: "DNS does not resolve MAC addresses.",
      body: "DNS maps names ↔ IP (and related records). ARP (IPv4) and Neighbor Discovery (IPv6) map IP ↔ MAC on the local link. Different jobs.",
      terms: [
        {
          id: "mac",
          label: "MAC address",
          tier: "basics",
          shortDefinition:
            "Layer 2 hardware address — resolved by ARP/ND on the link, not by DNS.",
        },
        {
          id: "arp",
          label: "ARP",
          tier: "basics",
          shortDefinition: "IPv4 mechanism that maps an IP address to a MAC on the local link.",
        },
      ],
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 4,
      headline: "What we defer.",
      body: "DNSSEC signing, split-horizon / views design, and dig mastery labs wait. Today: why names, light hierarchy, A/AAAA/CNAME/MX/PTR, port 53, TTL/cache, recursive vs authoritative, DHCP DNS list.",
      laterLearn: [
        "DNSSEC validation",
        "Split-horizon / internal vs external views",
        "dig / nslookup mastery labs",
      ],
      terms: [
        {
          id: "dnssec",
          label: "DNSSEC",
          tier: "later",
          shortDefinition: "Cryptographic signing of DNS data — awareness later, not today’s drill.",
          laterItems: ["RRSIG / DS chain", "Validation failure symptoms"],
        },
        {
          id: "split-horizon",
          label: "Split-horizon DNS",
          tier: "later",
          shortDefinition:
            "Different answers inside vs outside a network — deferred design topic.",
          laterItems: ["Views", "Internal vs public zones"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 4,
      headline: "DNS covered.",
      body: "You can explain why names matter, light hierarchy, A vs AAAA vs CNAME vs MX vs PTR, port 53 (UDP common / TCP when large), TTL caching, recursive vs authoritative at a glance, and that DHCP often supplies the DNS server list.",
    },
  ],
};
