import { CERTIFICATIONS } from "@/content/registry";
import { getExternalToolGuideIds } from "@/content/external-tools/packet-tracer";
import { SIMULATORS } from "@/content/simulators/registry";
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
  return CERTIFICATIONS.flatMap((cert) =>
    SIMULATORS.map((sim) => ({
      certId: cert.id,
      simulatorId: sim.id,
    }))
  );
}

export function allToolParams() {
  const toolIds = getExternalToolGuideIds();
  return CERTIFICATIONS.flatMap((cert) =>
    toolIds.map((toolId) => ({
      certId: cert.id,
      toolId,
    }))
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
