import type { TopicExperience } from "@/content/types";

/** LES experience — ACLs (Wave 5 / Domain 5 Security Fundamentals). */
export const ACLS_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro-why",
      type: "hero",
      tcpLayer: 2,
      headline: "Not every packet should pass.",
      body: "Routers and Layer 3 switches can filter traffic with Access Control Lists. ACLs decide permit or deny by matching packet fields — so you control who reaches what.",
      media: {
        kind: "icons",
        items: [
          { icon: "shield", label: "ACL filter" },
          { icon: "server", label: "Router" },
        ],
      },
      terms: [
        {
          id: "acl",
          label: "ACL",
          tier: "basics",
          shortDefinition:
            "Access Control List — ordered rules that permit or deny traffic based on match criteria.",
        },
      ],
    },
    {
      id: "why-acls",
      type: "teach",
      tcpLayer: 2,
      headline: "Why ACLs exist.",
      body: "Without filtering, any reachable host can attempt any service. ACLs enforce policy: block Telnet, allow HTTPS to a server, restrict a subnet. They are the classic Cisco traffic-control tool.",
    },
    {
      id: "standard-vs-extended",
      type: "teach",
      tcpLayer: 2,
      headline: "Standard vs extended.",
      body: "Standard ACLs match source IP only. Extended ACLs match source and destination IP, protocol, and ports. Pick extended when you care about “who talks to whom on which service.”",
      terms: [
        {
          id: "standard-acl",
          label: "Standard ACL",
          tier: "basics",
          shortDefinition: "Filters on source IP address only (numbered 1–99, 1300–1999).",
        },
        {
          id: "extended-acl",
          label: "Extended ACL",
          tier: "basics",
          shortDefinition:
            "Filters on source, destination, protocol, and ports (numbered 100–199, 2000–2699).",
        },
      ],
    },
    {
      id: "standard-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — standard ACL",
      checkpointQuestionId: "acls-q1",
    },
    {
      id: "top-down",
      type: "teach",
      tcpLayer: 2,
      headline: "Top-down, first match wins.",
      body: "The device reads ACE lines from top to bottom. The first line that matches the packet decides permit or deny. Later lines are not checked for that packet — order is policy.",
      terms: [
        {
          id: "ace",
          label: "ACE",
          tier: "basics",
          shortDefinition:
            "Access Control Entry — one permit/deny line inside an ACL.",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "A permit any any above a deny makes that deny unreachable.",
      },
    },
    {
      id: "first-match-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — first match",
      checkpointQuestionId: "acls-q5",
    },
    {
      id: "implicit-deny",
      type: "teach",
      tcpLayer: 2,
      headline: "Implicit deny at the end.",
      body: "Every ACL ends with an invisible deny all. Traffic that matches no ACE is dropped. If you want leftover traffic to pass, you must add an explicit permit.",
      terms: [
        {
          id: "implicit-deny",
          label: "Implicit deny",
          tier: "basics",
          shortDefinition:
            "Hidden final rule: deny any traffic that matched no earlier ACE.",
        },
      ],
    },
    {
      id: "implicit-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — end of ACL",
      checkpointQuestionId: "acls-q2",
    },
    {
      id: "wildcard-mask",
      type: "teach",
      tcpLayer: 2,
      headline: "Wildcard mask: 0 match, 1 ignore.",
      body: "ACL wildcards are not subnet masks. Bit 0 means that address bit must match; bit 1 means don’t care. Example: 0.0.0.255 matches any host in the last octet.",
      terms: [
        {
          id: "wildcard-mask",
          label: "Wildcard mask",
          tier: "basics",
          shortDefinition:
            "ACL match mask — 0 = must match that bit, 1 = ignore that bit.",
          example: "0.0.0.255",
        },
      ],
      studyTip: {
        title: "Exam tip",
        body: "Inverse of subnet thinking — do not paste a /24 mask as a wildcard.",
      },
    },
    {
      id: "wildcard-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — wildcard 0",
      checkpointQuestionId: "acls-q3",
    },
    {
      id: "placement",
      type: "teach",
      tcpLayer: 2,
      headline: "Where to place ACLs.",
      body: "Best practice: put extended ACLs close to the source (kill bad traffic early). Put standard ACLs (source-only) closer to the destination so you do not block too broadly along the path.",
      media: {
        kind: "flow",
        items: [
          { icon: "monitor", label: "Source" },
          { icon: "shield", label: "Extended ACL" },
          { icon: "server", label: "Dest / std ACL" },
        ],
      },
    },
    {
      id: "placement-check",
      type: "checkpoint",
      tcpLayer: 2,
      headline: "Quick check — extended placement",
      checkpointQuestionId: "acls-q4",
    },
    {
      id: "named-vs-numbered",
      type: "teach",
      tcpLayer: 2,
      headline: "Named vs numbered — light.",
      body: "Numbered ACLs use ranges (1–99 standard, 100–199 extended). Named ACLs use readable names, remarks, and easier edits. Same matching rules — names are for humans.",
      terms: [
        {
          id: "named-acl",
          label: "Named ACL",
          tier: "basics",
          shortDefinition:
            "ACL identified by a name instead of only a number — easier to read and maintain.",
        },
      ],
      laterLearn: ["Deep IPv6 ACL catalog and ipv6 access-list labs"],
    },
    {
      id: "access-group",
      type: "teach",
      tcpLayer: 2,
      headline: "Apply with access-group.",
      body: "An ACL does nothing until bound to an interface. Use ip access-group <name|number> in or out. Direction is relative to the interface: traffic entering (in) or leaving (out).",
      terms: [
        {
          id: "access-group",
          label: "ip access-group",
          tier: "basics",
          shortDefinition:
            "Interface command that applies an ACL inbound or outbound.",
        },
      ],
    },
    {
      id: "order-trap",
      type: "misconception",
      tcpLayer: 2,
      headline: "Broad permit first = dead denies.",
      body: "If you put permit ip any any near the top, every specific deny below it never runs. Write specific permits and denies first; remember the implicit deny still closes the list.",
    },
    {
      id: "not-subnet-mask",
      type: "misconception",
      tcpLayer: 2,
      headline: "Wildcard ≠ subnet mask.",
      body: "A /24 subnet mask is 255.255.255.0. The matching ACL wildcard for that idea is often 0.0.0.255. Copying the subnet mask into an ACE is a classic exam trap.",
    },
    {
      id: "defer-depth",
      type: "teach",
      tcpLayer: 2,
      headline: "What we defer.",
      body: "Deep IPv6 ACL catalogs, reflexive ACLs, and time-based ACLs wait. Today: why ACLs, standard vs extended, first-match, implicit deny, wildcards, placement, named light, access-group.",
      laterLearn: [
        "IPv6 ACL deep catalog and labs",
        "Reflexive / dynamic ACLs",
        "Time-based ACL schedules",
      ],
      terms: [
        {
          id: "ipv6-acl",
          label: "IPv6 ACL",
          tier: "later",
          shortDefinition:
            "Filters IPv6 traffic with similar first-match logic — depth deferred.",
          laterItems: ["ipv6 access-list syntax", "IPv6-specific match options"],
        },
        {
          id: "reflexive-acl",
          label: "Reflexive ACL",
          tier: "later",
          shortDefinition:
            "Session-aware ACL that opens return paths temporarily — deferred.",
          laterItems: ["reflect / evaluate", "Compared to stateful firewall"],
        },
      ],
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 2,
      headline: "ACLs covered.",
      body: "You can explain why ACLs exist, standard vs extended, top-down first-match, implicit deny, wildcard 0/1, placement (std near dest, extended near source), named light, and access-group in/out.",
    },
  ],
};
