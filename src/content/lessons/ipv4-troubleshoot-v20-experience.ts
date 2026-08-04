import type { TopicExperience } from "@/content/types";

/** LES — CCNA v2.0 1.3 Troubleshoot IPv4 addressing (public and private). */
export const IPV4_TROUBLESHOOT_V20_EXPERIENCE: TopicExperience = {
  anchor: { type: "tcp-ip-stack" },
  screens: [
    {
      id: "intro",
      type: "hero",
      tcpLayer: 3,
      headline: "Troubleshoot — don't just calculate.",
      body: "CCNA v2.0 objective 1.3 asks you to troubleshoot IPv4 configuration, assignment, and subnetting for public and private space. A subnet math win is not enough if the host still cannot talk.",
      media: {
        kind: "icons",
        items: [
          { icon: "monitor", label: "Host evidence" },
          { icon: "server", label: "Gateway" },
        ],
      },
      terms: [
        {
          id: "troubleshoot-ipv4",
          label: "Troubleshoot (v2.0 1.3)",
          tier: "basics",
          shortDefinition:
            "Diagnose IPv4 configuration, assignment, and subnetting faults — public and private.",
        },
      ],
    },
    {
      id: "verb",
      type: "teach",
      tcpLayer: 3,
      headline: "Official verb: Troubleshoot.",
      body: "Earlier CCNA wording often said configure and verify IPv4 addressing. v2.0 1.3 elevates the skill to troubleshoot — you read host/device evidence and name the fault class before changing configs.",
      studyTip: {
        title: "Exam tip",
        body: "Do not invent BGP or STP as answers for an IPv4 addressing ticket.",
      },
    },
    {
      id: "public-private",
      type: "teach",
      tcpLayer: 3,
      headline: "Public vs private is context — not 'broken.'",
      body: "RFC 1918 private ranges (10/8, 172.16–31/12, 192.168/16) are valid on internal LANs. Public addresses belong on Internet-facing segments. Troubleshooting asks whether the address class matches the segment design.",
      terms: [
        {
          id: "rfc1918",
          label: "RFC 1918 private",
          tier: "basics",
          shortDefinition:
            "Non-Internet-routable IPv4 ranges used inside enterprises; fine on LANs, need NAT at the edge for Internet.",
        },
      ],
    },
    {
      id: "public-private-check",
      type: "checkpoint",
      tcpLayer: 3,
      headline: "Quick check — private context",
      checkpointQuestionId: "ipv4-tv20-q2",
    },
    {
      id: "assignment",
      type: "teach",
      tcpLayer: 3,
      headline: "Assignment faults: mask, gateway, duplicate.",
      body: "Compare configured IP, mask, and gateway to the designed subnet. A gateway outside the host's subnet is an assignment/subnetting fault. Duplicate addresses show up as conflicts or flapping ARP. Fix addressing before blaming routing protocols.",
    },
    {
      id: "worked",
      type: "teach",
      tcpLayer: 3,
      headline: "Worked example — gateway outside /24.",
      body: "Host 192.168.10.50/24 with gateway 192.168.11.1 on a private LAN: compute that .11.1 is outside the /24. Root cause = subnet/gateway mismatch. Reject 'private addresses are illegal.'",
      studyTip: {
        title: "Evidence ladder",
        body: "Read ipconfig → design note → interface state before picking a root cause.",
      },
    },
    {
      id: "assignment-check",
      type: "checkpoint",
      tcpLayer: 3,
      headline: "Quick check — assignment fault",
      checkpointQuestionId: "ipv4-tv20-q1",
    },
    {
      id: "misconception",
      type: "misconception",
      tcpLayer: 3,
      headline: "Misconception: private means unusable.",
      body: "Learners sometimes mark 10.x / 172.16–31.x / 192.168.x as inherently misconfigured. Correction: private ranges are valid on internal networks. Diagnose assignment/subnetting first; use NAT at the edge when Internet reachability is required.",
    },
    {
      id: "remediation",
      type: "teach",
      tcpLayer: 3,
      headline: "Remediation — public vs private triage.",
      body: "Given three hosts (healthy private LAN, mis-subnetted private, public WAN with wrong next-hop), identify which faults are addressing/subnetting versus expected private use. Random OSPF/STP answers are guessing — not understanding.",
    },
    {
      id: "summary",
      type: "summary",
      tcpLayer: 3,
      headline: "You can troubleshoot v2.0 1.3 tickets.",
      body: "Troubleshoot IPv4 configuration, assignment, and subnetting for public and private space. Use observable evidence. Never treat private addressing as automatically broken.",
    },
  ],
};
