import type { OrderDrillItem } from "@/components/simulators/SimulatorRegistry";

export const DHCP_DORA_POOL: OrderDrillItem[] = [
  {
    id: "dora-1",
    prompt: "Order the four DHCP message types in a successful lease (DORA):",
    items: ["Discover", "Offer", "Request", "Acknowledge"],
    weakConcept: "DHCP DORA sequence",
    explanation: "Client broadcasts Discover; server Offers; client Requests; server Acknowledges.",
  },
  {
    id: "dora-2",
    prompt: "Order DHCP relay (helper address) flow from client on remote subnet:",
    items: [
      "Client broadcasts DHCP Discover",
      "Router forwards unicast to DHCP server (giaddr set)",
      "Server replies Offer to relay agent",
      "Relay forwards Offer to client subnet",
    ],
    weakConcept: "DHCP relay / ip helper-address",
    explanation: "Broadcast Discover is converted to unicast toward the server with gateway IP inserted.",
  },
  {
    id: "dora-3",
    prompt: "Order steps when renewing an existing lease (client already has IP):",
    items: [
      "Client sends DHCP Request (for same IP)",
      "Server sends DHCP Ack (extends lease)",
    ],
    weakConcept: "DHCP renewal",
    explanation: "Renewal skips Discover/Offer when the client still holds a valid lease.",
  },
  {
    id: "dora-4",
    prompt: "Order typical DHCP server pool configuration steps:",
    items: [
      "Exclude reserved/gateway addresses",
      "Define IP pool and default gateway option",
      "Define DNS servers option",
      "Activate on interface or global service",
    ],
    weakConcept: "DHCP pool setup",
    explanation: "Exclude first, define network options, then enable the service.",
  },
  {
    id: "dora-5",
    prompt: "Order messages when two servers respond and client selects one:",
    items: [
      "Multiple servers send DHCP Offer",
      "Client sends DHCP Request choosing one server",
      "Chosen server sends DHCP Ack",
    ],
    weakConcept: "Multi-server DHCP selection",
    explanation: "Client picks one Offer and broadcasts Request to claim that lease.",
  },
  {
    id: "dora-6",
    prompt: "Order DHCP lease expiration behavior:",
    items: [
      "T1 timer (50%): unicast renewal to granting server",
      "T2 timer (87.5%): broadcast renewal to any server",
      "Lease expires: client stops using address and re-DORA",
    ],
    weakConcept: "DHCP lease timers",
    explanation: "Renew early at T1; rebroadcast at T2; full DORA after expiry.",
  },
  {
    id: "dora-7",
    prompt: "Order fields a DHCP Ack typically provides:",
    items: [
      "Assigned IP address (yiaddr)",
      "Subnet mask (option 1)",
      "Default gateway (option 3)",
      "DNS servers (option 6)",
      "Lease time (option 51)",
    ],
    weakConcept: "DHCP options in Ack",
    explanation: "Ack carries the leased IP plus critical options for full host configuration.",
  },
];
