import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const ETHERNET_DEVICE_POOL: OrderDrillItem[] = [
  {
    id: "eth-devices-l1",
    prompt: "Order these devices from lowest OSI layer to highest.",
    items: ["Repeater", "Hub", "Switch", "Router"],
    weakConcept: "Device OSI layer order",
    explanation: "Repeater and hub at Layer 1; switch at Layer 2; router at Layer 3.",
  },
  {
    id: "eth-devices-layer",
    prompt: "Which layer does each device primarily operate at? Match top to bottom: L3, L2, L1.",
    items: ["Router (default gateway)", "Switch", "Hub"],
    weakConcept: "Device-to-layer mapping",
    explanation: "Router = Layer 3 routing; switch = Layer 2 frames; hub = Layer 1 repeat.",
  },
  {
    id: "eth-hub-switch",
    prompt: "Place the device with a shared collision domain first, then the one that forwards by MAC.",
    items: ["Hub", "Switch"],
    weakConcept: "Hub vs switch behavior",
    explanation: "Hubs flood to all ports; switches forward using MAC address tables.",
  },
];
