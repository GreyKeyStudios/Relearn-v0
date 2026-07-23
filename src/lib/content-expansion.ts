import type { Certification, Topic } from "@/content/types";
import { CERTIFICATIONS } from "@/content/registry";

export type ContentExpansionLevel = "minimal" | "standard" | "full";

/** Anchor topics per cert — must meet full CES */
export const CERT_ANCHOR_TOPICS: Record<string, Set<string>> = {
  ccna: new Set([
    "subnetting",
    "vlans",
    "acls",
    "ospf-basics",
    "network-security",
  ]),
  "security-plus": new Set([
    "cryptography-basics",
    "firewalls",
    "incident-response",
    "identity-access-management",
  ]),
  "network-plus": new Set([
    "subnetting",
    "troubleshooting-methodology",
    "routing",
    "wireless-networking",
  ]),
  "cysa-plus": new Set(["siem-basics", "incident-response", "detection-rules"]),
  "aws-cloud-practitioner": new Set(["iam", "vpc", "well-architected-framework"]),
  "azure-fundamentals": new Set([
    "role-based-access-control",
    "compliance-basics",
    "virtual-machines",
  ]),
  "linux-plus": new Set(["permissions", "system-services", "package-management"]),
  "itil-foundation": new Set([
    "incident-management",
    "service-value-system",
    "guiding-principles",
  ]),
};

export function getContentExpansionLevel(topic: Topic): ContentExpansionLevel {
  const hasBasics =
    topic.lesson.content.length > 0 &&
    topic.keyFacts.length > 0 &&
    topic.quiz.length > 0 &&
    topic.flashcards.length > 0;

  if (!hasBasics) return "minimal";

  const hasStandard =
    (topic.objectives?.length ?? 0) > 0 &&
    (topic.commonMistakes?.length ?? 0) >= 3 &&
    ((topic.examTraps?.length ?? 0) >= 3 ||
      (topic.realWorldTraps?.length ?? 0) >= 3);

  if (!hasStandard) return "minimal";

  const hasFull =
    !!topic.guidedExample?.steps?.length &&
    !!topic.realWorldScenario &&
    topic.estimatedStudyMinutes != null &&
    !!topic.difficulty &&
    (topic.questionBank?.length ?? 0) >= 8;

  return hasFull ? "full" : "standard";
}

export interface CesVerificationWarning {
  certId: string;
  topicId: string;
  message: string;
}

export function verifyCertCesWarnings(cert: Certification): CesVerificationWarning[] {
  const warnings: CesVerificationWarning[] = [];
  const anchors = CERT_ANCHOR_TOPICS[cert.id] ?? new Set<string>();

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const isAnchor = anchors.has(topic.id);
      const level = getContentExpansionLevel(topic);

      if (isAnchor && level !== "full") {
        warnings.push({
          certId: cert.id,
          topicId: topic.id,
          message: `Anchor topic expected full CES, got "${level}"`,
        });
      }

      if (!isAnchor) {
        if ((topic.commonMistakes?.length ?? 0) < 3) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            message: "Missing commonMistakes (need 3+)",
          });
        }
        if (
          (topic.examTraps?.length ?? 0) < 3 &&
          (topic.realWorldTraps?.length ?? 0) < 3
        ) {
          warnings.push({
            certId: cert.id,
            topicId: topic.id,
            message: "Missing examTraps or realWorldTraps (need 3+)",
          });
        }
      }

      if ((topic.objectives?.length ?? 0) === 0) {
        warnings.push({
          certId: cert.id,
          topicId: topic.id,
          message: "Missing objectives",
        });
      }
    }
  }

  return warnings;
}

export function verifyCcnaCesWarnings(): CesVerificationWarning[] {
  const ccna = CERTIFICATIONS.find((c) => c.id === "ccna");
  return ccna ? verifyCertCesWarnings(ccna) : [];
}

export function verifyAllCesWarnings(): CesVerificationWarning[] {
  return CERTIFICATIONS.flatMap(verifyCertCesWarnings);
}
