/**
 * Core 1 Hardware & Network Troubleshooting weak-area routing.
 * Extended as A5b/A5c land.
 */
export const AP_TROUBLESHOOT_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1201-5.1": "ap-ts-power-mb-ram-cpu",
  "AP1201-5.2": "ap-ts-storage-raid",
  "AP1201-5.3": "ap-ts-display",
  "AP1201-5.4": "ap-ts-mobile",
  "AP1201-5.5": "ap-ts-network",
  "AP1201-5.6": "ap-ts-printer",
};

export function troubleshootTopicForObjective(
  objectiveId: string
): string | undefined {
  return AP_TROUBLESHOOT_OBJECTIVE_TOPIC[objectiveId];
}
