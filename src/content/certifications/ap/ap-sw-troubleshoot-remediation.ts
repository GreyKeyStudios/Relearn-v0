/**
 * Core 2 Software Troubleshooting weak-area routing: objective → topic id.
 * Extended as A9 batches land.
 */
export const AP_SW_TROUBLESHOOT_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1202-3.1": "ap-ts-windows-os",
  "AP1202-3.2": "ap-ts-mobile-os",
  "AP1202-3.3": "ap-ts-mobile-security",
  "AP1202-3.4": "ap-ts-pc-security",
};

export function swTroubleshootTopicForObjective(objectiveId: string): string | undefined {
  return AP_SW_TROUBLESHOOT_OBJECTIVE_TOPIC[objectiveId];
}
