import type { Certification, ExperienceScreen, Topic } from "@/content/types";
import { CERTIFICATIONS } from "@/content/registry";

export interface ExperienceWarning {
  certId: string;
  topicId: string;
  message: string;
}

const HEADLINE_MAX = 80;
const BODY_MAX = 280;
const TEACH_TYPES = new Set(["hero", "teach", "flow", "analogy", "memory", "misconception"]);

/** Jargon that should have a terms[] entry when used in teach card body (LES-5 / LES-11). */
const JARGON_PATTERNS: { pattern: RegExp; termId: string }[] = [
  { pattern: /\bframe(s)?\b/i, termId: "frame" },
  { pattern: /\bMAC\b/i, termId: "mac" },
  { pattern: /\bTCP\b/i, termId: "tcp" },
  { pattern: /\bUDP\b/i, termId: "udp" },
  { pattern: /\bTLS\b/i, termId: "tls" },
  { pattern: /\bPDU\b/i, termId: "pdu" },
  { pattern: /\bICMP\b/i, termId: "icmp" },
  { pattern: /\bNIC\b/i, termId: "nic" },
];

function topicIdSet(cert: Certification): Set<string> {
  const ids = new Set<string>();
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      ids.add(topic.id);
    }
  }
  return ids;
}

function hasPriorTeachForLayer(
  screens: ExperienceScreen[],
  index: number,
  layer: number,
  field: "osiLayer" | "tcpLayer"
): boolean {
  for (let i = index - 1; i >= 0 && i >= index - 8; i--) {
    const s = screens[i];
    if (s[field] === layer && TEACH_TYPES.has(s.type)) return true;
  }
  return false;
}

function verifyTopicExperience(
  certId: string,
  topic: Topic,
  quizIds: Set<string>,
  validTopicIds: Set<string>
): ExperienceWarning[] {
  const warnings: ExperienceWarning[] = [];
  const exp = topic.lesson.experience;
  if (!exp) return warnings;

  if (!exp.anchor?.type) {
    warnings.push({
      certId,
      topicId: topic.id,
      message: "experience missing anchor (LES-0)",
    });
  }

  const screens = exp.screens ?? [];
  if (screens.length === 0) {
    warnings.push({
      certId,
      topicId: topic.id,
      message: "experience.screens is empty",
    });
    return warnings;
  }

  let hasMemory = false;
  const introducedTermIds = new Set<string>();

  for (let i = 0; i < screens.length; i++) {
    const screen = screens[i];

    for (const term of screen.terms ?? []) {
      introducedTermIds.add(term.id);
    }

    if (screen.headline.length > HEADLINE_MAX) {
      warnings.push({
        certId,
        topicId: topic.id,
        message: `screen ${screen.id} headline exceeds ${HEADLINE_MAX} chars (LES-3)`,
      });
    }

    if (screen.body && screen.body.length > BODY_MAX) {
      warnings.push({
        certId,
        topicId: topic.id,
        message: `screen ${screen.id} body exceeds ${BODY_MAX} chars (LES-3)`,
      });
    }

    if (screen.type === "memory") hasMemory = true;

    const checkpointIds =
      screen.checkpointQuestionIds ??
      (screen.checkpointQuestionId ? [screen.checkpointQuestionId] : []);

    for (const checkpointId of checkpointIds) {
      if (!quizIds.has(checkpointId)) {
        warnings.push({
          certId,
          topicId: topic.id,
          message: `screen ${screen.id} checkpoint not in quiz[]: ${checkpointId}`,
        });
      }
    }

    if (checkpointIds.length > 0) {
      if (screen.osiLayer != null && !hasPriorTeachForLayer(screens, i, screen.osiLayer, "osiLayer")) {
        warnings.push({
          certId,
          topicId: topic.id,
          message: `screen ${screen.id} checkpoint before OSI layer ${screen.osiLayer} taught (LES-8)`,
        });
      }

      if (screen.tcpLayer != null && !hasPriorTeachForLayer(screens, i, screen.tcpLayer, "tcpLayer")) {
        warnings.push({
          certId,
          topicId: topic.id,
          message: `screen ${screen.id} checkpoint before TCP/IP layer ${screen.tcpLayer} taught (LES-8)`,
        });
      }
    }

    if (screen.deferredTerms) {
      const screenIds = new Set(screens.map((s) => s.id));
      for (const d of screen.deferredTerms) {
        if (!screenIds.has(d.teachInStepId)) {
          warnings.push({
            certId,
            topicId: topic.id,
            message: `screen ${screen.id} deferredTerm ${d.term} references missing screen ${d.teachInStepId}`,
          });
        }
        if (screen.body?.includes(d.term)) {
          warnings.push({
            certId,
            topicId: topic.id,
            message: `screen ${screen.id} uses deferred term "${d.term}" in body (LES-5)`,
          });
        }
      }
    }

    if (screen.terms) {
      for (const term of screen.terms) {
        if (term.laterTopicId && !validTopicIds.has(term.laterTopicId)) {
          warnings.push({
            certId,
            topicId: topic.id,
            message: `screen ${screen.id} term ${term.id} invalid laterTopicId: ${term.laterTopicId}`,
          });
        }
      }
    }

    if (screen.body && TEACH_TYPES.has(screen.type)) {
      const termIds = new Set((screen.terms ?? []).map((t) => t.id));
      const termLabels = new Set(
        (screen.terms ?? []).map((t) => t.label.toLowerCase())
      );
      for (const { pattern, termId } of JARGON_PATTERNS) {
        if (!pattern.test(screen.body)) continue;
        if (termIds.has(termId) || introducedTermIds.has(termId)) continue;
        const labelMatch = [...termLabels].some((l) => pattern.test(l));
        if (labelMatch) continue;
        warnings.push({
          certId,
          topicId: topic.id,
          message: `screen ${screen.id} uses "${termId}" jargon without terms[] entry (LES-11)`,
        });
      }
    }
  }

  if (topic.id === "osi-model" && !hasMemory) {
    warnings.push({
      certId,
      topicId: topic.id,
      message: "OSI experience missing memory screen (LES-6)",
    });
  }

  if (topic.id === "tcp-ip-model" && !hasMemory) {
    warnings.push({
      certId,
      topicId: topic.id,
      message: "TCP/IP experience missing memory screen (LES-6)",
    });
  }

  return warnings;
}

export function verifyExperienceWarnings(certFilter?: string): ExperienceWarning[] {
  const warnings: ExperienceWarning[] = [];

  for (const cert of CERTIFICATIONS) {
    if (certFilter && cert.id !== certFilter) continue;

    const validTopicIds = topicIdSet(cert);

    for (const domain of cert.domains) {
      for (const topic of domain.topics) {
        const quizIds = new Set(topic.quiz.map((q) => q.id));

        for (const prereq of topic.prerequisites ?? []) {
          if (!validTopicIds.has(prereq)) {
            warnings.push({
              certId: cert.id,
              topicId: topic.id,
              message: `Invalid prerequisite topic id: ${prereq}`,
            });
          }
        }

        warnings.push(...verifyTopicExperience(cert.id, topic, quizIds, validTopicIds));
      }
    }
  }

  return warnings;
}

export function verifyCcnaExperienceWarnings(): ExperienceWarning[] {
  return verifyExperienceWarnings("ccna");
}
