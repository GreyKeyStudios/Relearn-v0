import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const OSI_LAYER_POOL: OrderDrillItem[] = [
  {
    id: "osi-layers",
    prompt: "Order the OSI layers from Layer 7 (top) to Layer 1 (bottom).",
    items: [
      "Application",
      "Presentation",
      "Session",
      "Transport",
      "Network",
      "Data Link",
      "Physical",
    ],
    weakConcept: "OSI layer order",
    explanation: "Mnemonic: All People Seem To Need Data Processing (top to bottom).",
  },
  {
    id: "osi-layers-up",
    prompt: "Order the OSI layers from the wire up (Layer 1 to Layer 7).",
    items: [
      "Physical",
      "Data Link",
      "Network",
      "Transport",
      "Session",
      "Presentation",
      "Application",
    ],
    weakConcept: "OSI layer order (bottom up)",
    explanation:
      "Mnemonic: Please Do Not Throw Sausage Pizza Away — Physical at the wire, Application at the top.",
  },
  {
    id: "osi-pdu",
    prompt: "Order these PDUs from highest layer to lowest.",
    items: ["Data", "Segment", "Packet", "Frame", "Bits"],
    weakConcept: "OSI PDU names",
    explanation: "Application data becomes segments (L4), packets (L3), frames (L2), bits (L1).",
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
    explanation:
      "Going down: Transport wraps first (segment), then Network (packet), then Data Link (frame), then Physical (bits).",
  },
];
