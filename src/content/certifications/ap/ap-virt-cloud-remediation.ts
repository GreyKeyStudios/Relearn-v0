/**
 * Core 1 Virtualization & Cloud weak-area routing: objective → topic id.
 */
export const AP_VIRT_CLOUD_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1201-4.1": "ap-cloud-concepts",
  "AP1201-4.2": "ap-virtualization",
};

export function virtCloudTopicForObjective(
  objectiveId: string
): string | undefined {
  return AP_VIRT_CLOUD_OBJECTIVE_TOPIC[objectiveId];
}
