import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const ACL_RULE_ORDER_POOL: OrderDrillItem[] = [
  {
    id: "acl-1",
    prompt: "Order these extended ACL lines for best practice (most specific first, deny before permit any):",
    items: [
      "deny tcp any any eq 23",
      "permit ip 192.168.10.0 0.0.0.255 any",
      "permit ip any any",
    ],
    weakConcept: "ACL line ordering (specificity)",
    explanation: "Place explicit denies and subnet permits before the implicit or explicit permit any.",
  },
  {
    id: "acl-2",
    prompt: "Place ACL application steps in the correct order on a router interface:",
    items: [
      "Write ACL entries in global config",
      "Assign ACL to interface (in or out)",
      "Verify with show access-lists / show ip interface",
    ],
    weakConcept: "ACL application workflow",
    explanation: "Define the ACL first, apply to interface, then verify hits and direction.",
  },
  {
    id: "acl-3",
    prompt: "Order ACL evaluation logic (how the router processes numbered ACLs):",
    items: [
      "Compare packet to line 10",
      "If no match, compare to line 20",
      "If no match on any line, implicit deny",
    ],
    weakConcept: "Top-down ACL evaluation",
    explanation: "ACLs are evaluated sequentially; first match wins; implicit deny at end.",
  },
  {
    id: "acl-4",
    prompt: "Standard ACL best placement order (conceptual steps):",
    items: [
      "Identify source networks to permit/deny",
      "Place standard ACL close to destination",
      "Apply inbound on destination interface",
    ],
    weakConcept: "Standard ACL placement",
    explanation: "Standard ACLs filter on source only — apply near destination so paths stay flexible.",
  },
  {
    id: "acl-5",
    prompt: "Order these rules so HTTP from Sales is allowed but Telnet is blocked for everyone:",
    items: [
      "permit tcp 10.10.20.0 0.0.0.255 any eq 80",
      "deny tcp any any eq 23",
      "permit ip any any",
    ],
    weakConcept: "Extended ACL service filtering",
    explanation: "Specific permit for HTTP from Sales, deny Telnet, then general permit.",
  },
  {
    id: "acl-6",
    prompt: "Extended ACL placement workflow (correct order):",
    items: [
      "Define extended ACL with source, destination, protocol",
      "Apply as close to source as possible",
      "Verify traffic with show access-lists",
    ],
    weakConcept: "Extended ACL placement",
    explanation: "Extended ACLs filter on src/dst/proto — place near source to filter early.",
  },
  {
    id: "acl-7",
    prompt: "Order wildcard mask matching steps for 192.168.5.0/27:",
    items: [
      "Network: 192.168.5.0",
      "Wildcard: 0.0.0.31",
      "Matches hosts 192.168.5.0–192.168.5.31",
    ],
    weakConcept: "Wildcard mask construction",
    explanation: "/27 = 32 hosts; wildcard 0.0.0.31 inverts the /27 subnet mask.",
  },
  {
    id: "acl-8",
    prompt: "Named ACL configuration sequence:",
    items: [
      "ip access-list extended BLOCK-TELNET",
      "deny tcp any any eq 23",
      "permit ip any any",
    ],
    weakConcept: "Named extended ACL syntax",
    explanation: "Named ACLs use ip access-list type NAME then individual permit/deny lines.",
  },
];
