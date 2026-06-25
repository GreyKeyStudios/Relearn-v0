import type { CaseStudyDefinition } from "@/content/types";

export const CCNA_CASE_STUDIES: CaseStudyDefinition[] = [
  {
    id: "ccna-case-internet-down",
    title: "Users Can't Reach the Internet",
    certId: "ccna",
    topicIds: ["routing-fundamentals", "dhcp"],
    estimatedMinutes: 15,
    startNodeId: "start",
    successNodeIds: ["fixed-gw"],
    nodes: {
      start: {
        id: "start",
        prompt:
          "A user reports they cannot browse the web but can ping 8.8.8.8. What is your first troubleshooting step?",
        evidence:
          "Symptoms: No web pages load in browser. ping 8.8.8.8 succeeds. ping google.com fails.",
        choices: [
          {
            id: "check-dns",
            label: "Verify DNS resolution",
            nextNodeId: "dns-check",
            isOptimal: true,
          },
          {
            id: "replace-cable",
            label: "Replace the Ethernet cable",
            nextNodeId: "wrong-cable",
            weakConcept: "Layer 1 vs application-layer troubleshooting",
          },
          {
            id: "reboot-pc",
            label: "Reboot the PC immediately",
            nextNodeId: "wrong-reboot",
            weakConcept: "Structured troubleshooting methodology",
          },
        ],
      },
      "dns-check": {
        id: "dns-check",
        prompt: "nslookup google.com fails. ipconfig shows DNS 0.0.0.0. What next?",
        evidence: "DHCP server should assign DNS 192.168.1.1. Router interface Gi0/0 is up.",
        choices: [
          {
            id: "check-dhcp",
            label: "Verify DHCP pool includes DNS option",
            nextNodeId: "dhcp-fix",
            isOptimal: true,
          },
          {
            id: "check-ospf",
            label: "Check OSPF neighbor adjacency",
            nextNodeId: "wrong-ospf",
            weakConcept: "DNS vs routing — IP ping works so L3 path exists",
          },
        ],
      },
      "dhcp-fix": {
        id: "dhcp-fix",
        prompt:
          "Router DHCP pool was missing dns-server 192.168.1.1. After fix and ipconfig /renew, browsing works. Root cause?",
        choices: [
          {
            id: "missing-dns",
            label: "DHCP pool missing DNS server option",
            nextNodeId: "fixed-gw",
            isOptimal: true,
          },
          {
            id: "acl-block",
            label: "ACL blocking HTTP traffic",
            nextNodeId: "wrong-acl",
            weakConcept: "ICMP worked; issue was name resolution not filtering",
          },
        ],
      },
      "fixed-gw": {
        id: "fixed-gw",
        prompt: "Case resolved. The DHCP pool did not advertise a DNS server.",
        choices: [],
      },
      "wrong-cable": {
        id: "wrong-cable",
        prompt: "Cable swap did not help — ping to 8.8.8.8 still works. Try a more relevant step.",
        choices: [
          {
            id: "back-dns",
            label: "Return to DNS verification",
            nextNodeId: "dns-check",
            isOptimal: true,
          },
        ],
      },
      "wrong-reboot": {
        id: "wrong-reboot",
        prompt: "After reboot, same symptoms. ping 8.8.8.8 works; names fail.",
        choices: [
          {
            id: "back-start",
            label: "Start structured troubleshooting",
            nextNodeId: "dns-check",
            isOptimal: true,
          },
        ],
      },
      "wrong-ospf": {
        id: "wrong-ospf",
        prompt: "OSPF neighbors are Full. Internet ping works — routing is fine.",
        choices: [
          {
            id: "back-dhcp",
            label: "Check DHCP DNS option",
            nextNodeId: "dhcp-fix",
            isOptimal: true,
          },
        ],
      },
      "wrong-acl": {
        id: "wrong-acl",
        prompt: "ACLs permit DNS and HTTP. The real issue was DHCP configuration.",
        choices: [
          {
            id: "accept-dns",
            label: "Acknowledge missing DNS in DHCP pool",
            nextNodeId: "fixed-gw",
            isOptimal: true,
          },
        ],
      },
    },
  },
  {
    id: "ccna-case-vlan",
    title: "VLAN Misconfiguration",
    certId: "ccna",
    topicIds: ["vlans", "trunking"],
    estimatedMinutes: 15,
    startNodeId: "start",
    successNodeIds: ["resolved"],
    nodes: {
      start: {
        id: "start",
        prompt: "PC-A (VLAN 10) cannot ping PC-B (VLAN 20) on the same switch. Both are in the same IP subnet. First action?",
        evidence:
          "SW1:\n  interface Gi0/1 — switchport mode access, switchport access vlan 10\n  interface Gi0/2 — switchport mode access, switchport access vlan 20\nPC-A: 192.168.1.10/24, PC-B: 192.168.1.20/24",
        choices: [
          {
            id: "check-vlan",
            label: "Verify VLAN assignment on access ports",
            nextNodeId: "vlan-ok",
            isOptimal: true,
          },
          {
            id: "check-dns",
            label: "Check DNS settings",
            nextNodeId: "wrong-dns",
            weakConcept: "L2 segmentation — not a DNS issue",
          },
        ],
      },
      "vlan-ok": {
        id: "vlan-ok",
        prompt: "VLAN assignments are correct. PCs are in different VLANs but same subnet — what's wrong?",
        evidence: "No router or SVI exists for inter-VLAN routing.",
        choices: [
          {
            id: "need-l3",
            label: "Different VLANs need L3 gateway (router or SVI) per subnet",
            nextNodeId: "design-fix",
            isOptimal: true,
          },
          {
            id: "merge-vlan",
            label: "Put both PCs in VLAN 1",
            nextNodeId: "resolved",
            isOptimal: true,
          },
        ],
      },
      "design-fix": {
        id: "design-fix",
        prompt: "Either use one VLAN per subnet with a router-on-a-stick, or separate subnets per VLAN.",
        choices: [
          {
            id: "done",
            label: "Document the VLAN/subnet design fix",
            nextNodeId: "resolved",
            isOptimal: true,
          },
        ],
      },
      resolved: {
        id: "resolved",
        prompt: "Root cause: VLANs isolate L2 domains — same IP subnet across VLANs without L3 breaks communication.",
        choices: [],
      },
      "wrong-dns": {
        id: "wrong-dns",
        prompt: "This is a ping between IPs — DNS is not involved.",
        choices: [
          {
            id: "retry",
            label: "Check VLAN configuration",
            nextNodeId: "vlan-ok",
            isOptimal: true,
          },
        ],
      },
    },
  },
  {
    id: "ccna-case-ospf",
    title: "OSPF Neighbor Failure",
    certId: "ccna",
    topicIds: ["ospf-basics"],
    estimatedMinutes: 15,
    startNodeId: "start",
    successNodeIds: ["resolved"],
    nodes: {
      start: {
        id: "start",
        prompt: "R1 and R2 are connected but OSPF neighbors won't form. First check?",
        evidence:
          "R1 Gi0/0: 10.1.1.1/30, area 0\nR2 Gi0/0: 10.1.1.2/30, area 1\nshow ip ospf neighbor — empty on both",
        choices: [
          {
            id: "check-area",
            label: "Verify both interfaces are in the same OSPF area",
            nextNodeId: "area-mismatch",
            isOptimal: true,
          },
          {
            id: "check-cable",
            label: "Replace the serial cable",
            nextNodeId: "wrong-cable",
            weakConcept: "Interfaces are up/up — physical is fine",
          },
        ],
      },
      "area-mismatch": {
        id: "area-mismatch",
        prompt: "R2 is in area 1; R1 is in area 0 on the link. Fix?",
        choices: [
          {
            id: "fix-area",
            label: "Place both interfaces in area 0",
            nextNodeId: "resolved",
            isOptimal: true,
          },
          {
            id: "add-static",
            label: "Add static routes instead",
            nextNodeId: "wrong-static",
            weakConcept: "Fix the OSPF design — don't bypass without cause",
          },
        ],
      },
      resolved: {
        id: "resolved",
        prompt: "Neighbors formed after matching area 0 on both sides. Area mismatch prevents adjacency.",
        choices: [],
      },
      "wrong-cable": {
        id: "wrong-cable",
        prompt: "Interfaces show up/up. Layer 1 is not the issue.",
        choices: [
          {
            id: "back",
            label: "Check OSPF area IDs",
            nextNodeId: "area-mismatch",
            isOptimal: true,
          },
        ],
      },
      "wrong-static": {
        id: "wrong-static",
        prompt: "OSPF area mismatch was the root cause — fix areas first.",
        choices: [
          {
            id: "fix",
            label: "Correct OSPF area configuration",
            nextNodeId: "resolved",
            isOptimal: true,
          },
        ],
      },
    },
  },
  {
    id: "ccna-case-acl",
    title: "ACL Blocking Traffic",
    certId: "ccna",
    topicIds: ["acls"],
    estimatedMinutes: 12,
    startNodeId: "start",
    successNodeIds: ["resolved"],
    nodes: {
      start: {
        id: "start",
        prompt: "Server 192.168.10.50 is unreachable from PC 192.168.10.10. An ACL was recently added. What first?",
        evidence:
          "R1 inbound ACL on Gi0/1:\n  10 permit tcp any host 192.168.10.50 eq 443\n  20 deny ip any any",
        choices: [
          {
            id: "analyze-acl",
            label: "Analyze ACL order and implicit deny",
            nextNodeId: "acl-order",
            isOptimal: true,
          },
          {
            id: "ping-router",
            label: "Ping the router loopback",
            nextNodeId: "wrong-ping",
            weakConcept: "Focus on the ACL change — likely cause",
          },
        ],
      },
      "acl-order": {
        id: "acl-order",
        prompt: "PC needs ICMP for testing and may need other ports. ACL only permits HTTPS then denies all IP.",
        choices: [
          {
            id: "fix-acl",
            label: "Add permit entries before deny, or remove overly broad deny",
            nextNodeId: "resolved",
            isOptimal: true,
          },
        ],
      },
      resolved: {
        id: "resolved",
        prompt: "Standard/extended ACL order matters — specific permits must come before deny ip any any.",
        choices: [],
      },
      "wrong-ping": {
        id: "wrong-ping",
        prompt: "Router responds to ping. The ACL on the interface is filtering server traffic.",
        choices: [
          {
            id: "back-acl",
            label: "Review ACL entries",
            nextNodeId: "acl-order",
            isOptimal: true,
          },
        ],
      },
    },
  },
];
