/**
 * Core 1 Networking weak-area routing: objective → topic id.
 * Extended as A2b/A2c land.
 */
export const AP_NETWORKING_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1201-2.1": "ap-ports-protocols",
  "AP1201-2.2": "ap-wireless-tech",
  "AP1201-2.3": "ap-network-services",
  "AP1201-2.4": "ap-network-config",
  "AP1201-2.5": "ap-network-devices",
  "AP1201-2.6": "ap-soho-networks",
  "AP1201-2.7": "ap-network-types",
  "AP1201-2.8": "ap-network-tools",
};

export function networkingTopicForObjective(
  objectiveId: string
): string | undefined {
  return AP_NETWORKING_OBJECTIVE_TOPIC[objectiveId];
}
