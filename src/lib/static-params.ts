import { CERTIFICATIONS } from "@/content/registry";
import { getExternalToolGuide } from "@/content/external-tools/packet-tracer";
import { getDomainQuestionBank } from "@/lib/content-selectors";

export function allCertParams() {
  return CERTIFICATIONS.map((cert) => ({ certId: cert.id }));
}

export function allTopicParams() {
  return CERTIFICATIONS.flatMap((cert) =>
    cert.domains.flatMap((domain) =>
      domain.topics.map((topic) => ({
        certId: cert.id,
        topicId: topic.id,
      }))
    )
  );
}

export function allAssignmentParams() {
  return CERTIFICATIONS.flatMap((cert) =>
    cert.domains.flatMap((domain) =>
      domain.topics.flatMap((topic) =>
        (topic.assignments ?? []).map((assignment) => ({
          certId: cert.id,
          assignmentId: assignment.id,
        }))
      )
    )
  );
}

export function allSimulatorParams() {
  const seen = new Set<string>();
  return CERTIFICATIONS.flatMap((cert) =>
    cert.domains.flatMap((domain) =>
      domain.topics.flatMap((topic) =>
        (topic.assignments ?? []).flatMap((assignment) => {
          if (!assignment.simulatorId) return [];
          const key = `${cert.id}:${assignment.simulatorId}`;
          if (seen.has(key)) return [];
          seen.add(key);
          return [{ certId: cert.id, simulatorId: assignment.simulatorId }];
        })
      )
    )
  );
}

export function allToolParams() {
  const seen = new Set<string>();
  return CERTIFICATIONS.flatMap((cert) =>
    cert.domains.flatMap((domain) =>
      domain.topics.flatMap((topic) =>
        (topic.externalResources ?? []).flatMap((resource) => {
          if (!getExternalToolGuide(resource.id)) return [];
          const key = `${cert.id}:${resource.id}`;
          if (seen.has(key)) return [];
          seen.add(key);
          return [{ certId: cert.id, toolId: resource.id }];
        })
      )
    )
  );
}

export function allDomainReviewParams() {
  return CERTIFICATIONS.flatMap((cert) =>
    cert.domains
      .filter((domain) => getDomainQuestionBank(cert.id, domain.id).length > 0)
      .map((domain) => ({
        certId: cert.id,
        domainId: domain.id,
      }))
  );
}
