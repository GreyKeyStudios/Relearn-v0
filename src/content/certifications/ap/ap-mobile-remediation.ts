/**
 * Core 1 Mobile Devices weak-area routing: objective → topic id.
 */
export const AP_MOBILE_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1201-1.1": "ap-mobile-hardware",
  "AP1201-1.2": "ap-mobile-accessories",
  "AP1201-1.3": "ap-mobile-connectivity",
};

export function mobileTopicForObjective(
  objectiveId: string
): string | undefined {
  return AP_MOBILE_OBJECTIVE_TOPIC[objectiveId];
}
