/**
 * Hardware-domain weak-area routing: exam objective → topic id.
 * Used by domain review explanations and A+ objective coaching labels.
 */
export const AP_HARDWARE_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1201-3.1": "ap-displays",
  "AP1201-3.2": "ap-cables-connectors",
  "AP1201-3.3": "ap-ram",
  "AP1201-3.4": "ap-storage",
  "AP1201-3.5": "ap-mb-cpu-cards",
  "AP1201-3.6": "ap-power-supplies",
  "AP1201-3.7": "ap-printers-setup",
  "AP1201-3.8": "ap-printer-maintenance",
};

export function hardwareTopicForObjective(objectiveId: string): string | undefined {
  return AP_HARDWARE_OBJECTIVE_TOPIC[objectiveId];
}
