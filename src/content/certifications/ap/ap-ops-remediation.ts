/** Core 2 Operational Procedures weak-area routing: objective → teaching topic. */
export const AP_OPS_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1202-4.1": "ap-documentation-ticketing",
  "AP1202-4.2": "ap-change-management",
  "AP1202-4.3": "ap-backup-recovery",
  "AP1202-4.4": "ap-safety",
  "AP1202-4.5": "ap-environment",
  "AP1202-4.6": "ap-privacy-licensing",
  "AP1202-4.7": "ap-communication",
  "AP1202-4.8": "ap-scripting-basics",
  "AP1202-4.9": "ap-remote-access",
  "AP1202-4.10": "ap-ai-basics",
};

export function opsTopicForObjective(objectiveId: string): string | undefined {
  return AP_OPS_OBJECTIVE_TOPIC[objectiveId];
}
