import type {
  Assignment,
  Certification,
  Domain,
  ExternalResource,
  QuizQuestion,
  Topic,
} from "@/content/types";
import { CERTIFICATIONS, getCertification } from "@/content/registry";
import { getCcnaObjective, getCcnaObjectiveShortLabel } from "@/content/objectives/ccna";

export { getCertification };

export function getAllCertifications(): Certification[] {
  return CERTIFICATIONS;
}

export function getTopic(
  certId: string,
  topicId: string
): { cert: Certification; domain: Domain; topic: Topic } | undefined {
  const cert = getCertification(certId);
  if (!cert) return undefined;

  for (const domain of cert.domains) {
    const topic = domain.topics.find((t) => t.id === topicId);
    if (topic) return { cert, domain, topic };
  }
  return undefined;
}

export function getAssignment(
  certId: string,
  assignmentId: string
):
  | {
      cert: Certification;
      domain: Domain;
      topic: Topic;
      assignment: Assignment;
      externalResource?: ExternalResource;
    }
  | undefined {
  const cert = getCertification(certId);
  if (!cert) return undefined;

  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const assignment = topic.assignments?.find((a) => a.id === assignmentId);
      if (assignment) {
        const externalResource = assignment.externalResourceId
          ? topic.externalResources?.find((r) => r.id === assignment.externalResourceId)
          : undefined;
        return { cert, domain, topic, assignment, externalResource };
      }
    }
  }
  return undefined;
}

export function getAssignmentsForTopic(
  certId: string,
  topicId: string
): Assignment[] {
  const resolved = getTopic(certId, topicId);
  return resolved?.topic.assignments ?? [];
}

export function flattenTopics(cert: Certification): Topic[] {
  return cert.domains.flatMap((d) => d.topics);
}

export function getTotalTopicCount(cert: Certification): number {
  return flattenTopics(cert).length;
}

export function getTopicByKey(
  key: string
): { cert: Certification; domain: Domain; topic: Topic } | undefined {
  const [certId, ...rest] = key.split(":");
  return getTopic(certId, rest.join(":"));
}

export function getDomain(
  certId: string,
  domainId: string
): { cert: Certification; domain: Domain } | undefined {
  const cert = getCertification(certId);
  if (!cert) return undefined;
  const domain = cert.domains.find((d) => d.id === domainId);
  if (!domain) return undefined;
  return { cert, domain };
}

export function getDomainQuestionBank(
  certId: string,
  domainId: string
): QuizQuestion[] {
  const resolved = getDomain(certId, domainId);
  if (!resolved) return [];
  return resolved.domain.topics.flatMap((t) => t.questionBank ?? []);
}

export function getObjectiveLabel(certId: string, objectiveId: string): string {
  if (certId === "ccna") {
    return getCcnaObjectiveShortLabel(objectiveId);
  }
  return objectiveId;
}

export function getObjectiveText(certId: string, objectiveId: string): string {
  if (certId === "ccna") {
    return getCcnaObjective(objectiveId)?.text ?? objectiveId;
  }
  return objectiveId;
}
