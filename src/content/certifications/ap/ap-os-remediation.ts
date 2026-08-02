/**
 * Core 2 Operating Systems weak-area routing: objective → topic id.
 * Extended as A7 batches land.
 */
export const AP_OS_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1202-1.1": "ap-os-types",
  "AP1202-1.2": "ap-os-install",
  "AP1202-1.3": "ap-windows-editions",
  "AP1202-1.4": "ap-windows-tools",
  "AP1202-1.5": "ap-windows-cli",
  "AP1202-1.6": "ap-windows-settings",
  "AP1202-1.7": "ap-windows-networking",
  "AP1202-1.8": "ap-macos-tools",
  "AP1202-1.9": "ap-linux-client",
  "AP1202-1.10": "ap-app-install",
  "AP1202-1.11": "ap-cloud-productivity",
};

export function osTopicForObjective(objectiveId: string): string | undefined {
  return AP_OS_OBJECTIVE_TOPIC[objectiveId];
}
