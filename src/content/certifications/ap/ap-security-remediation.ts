/**
 * Core 2 Security weak-area routing: objective → topic id.
 * Complete for AP1202-2.1–2.11 (A8l). Domain review misses route here — not to the review topic.
 */
export const AP_SECURITY_OBJECTIVE_TOPIC: Record<string, string> = {
  "AP1202-2.1": "ap-security-measures",
  "AP1202-2.2": "ap-windows-security",
  "AP1202-2.3": "ap-wireless-security",
  "AP1202-2.4": "ap-malware",
  "AP1202-2.5": "ap-social-engineering",
  "AP1202-2.6": "ap-malware-removal",
  "AP1202-2.7": "ap-hardening",
  "AP1202-2.8": "ap-mobile-security",
  "AP1202-2.9": "ap-data-destruction",
  "AP1202-2.10": "ap-soho-security",
  "AP1202-2.11": "ap-browser-security",
};

export function securityTopicForObjective(objectiveId: string): string | undefined {
  return AP_SECURITY_OBJECTIVE_TOPIC[objectiveId];
}
