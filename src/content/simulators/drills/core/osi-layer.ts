import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const OSI_LAYER_POOL: OrderDrillItem[] = [
  {
    id: "osi-layers",
    prompt: "Order the OSI layers from Layer 7 (top) to Layer 1 (bottom).",
    items: [
      "Application (Layer 7)",
      "Presentation (Layer 6)",
      "Session (Layer 5)",
      "Transport (Layer 4)",
      "Network (Layer 3)",
      "Data Link (Layer 2)",
      "Physical (Layer 1)",
    ],
    weakConcept: "OSI layer order",
    explanation: "Mnemonic: All People Seem To Need Data Processing (top to bottom).",
  },
  {
    id: "osi-pdu",
    prompt: "Order these PDUs from highest layer to lowest.",
    items: ["Data", "Segment", "Packet", "Frame", "Bits"],
    weakConcept: "OSI PDU names",
    explanation: "Application data becomes segments (L4), packets (L3), frames (L2), bits (L1).",
  },
  {
    id: "osi-devices",
    prompt: "Order these by typical OSI layer operation (highest to lowest).",
    items: ["Gateway / Application proxy", "Router", "Switch", "Hub / Repeater"],
    weakConcept: "OSI device layers",
    explanation: "Gateways operate at L7; routers at L3; switches at L2; hubs at L1.",
  },
  {
    id: "osi-protocols",
    prompt: "Place protocols at their highest relevant OSI layer (top to bottom).",
    items: ["HTTP", "TCP", "IP", "Ethernet"],
    weakConcept: "Protocol-to-layer mapping",
    explanation: "HTTP is L7; TCP is L4; IP is L3; Ethernet is L2.",
  },
  {
    id: "osi-encap",
    prompt: "Order the encapsulation steps as data moves down the stack.",
    items: [
      "Add TCP header (segment)",
      "Add IP header (packet)",
      "Add Ethernet header/trailer (frame)",
      "Convert to bits on wire",
    ],
    weakConcept: "Encapsulation order",
  },
];
