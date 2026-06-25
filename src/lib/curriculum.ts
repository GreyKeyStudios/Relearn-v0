import type { Assignment, Certification } from "@/content/types";
import { assignmentKey, topicKey } from "@/lib/ids";
import type { ProgressState } from "@/types/progress";

export type CurriculumStepType = "lesson" | "assignment";

export interface CurriculumStep {
  certId: string;
  topicId: string;
  topicKey: string;
  topicName: string;
  certName: string;
  reason: string;
  stepType: CurriculumStepType;
  href: string;
  assignment?: Assignment;
  assignmentTitle?: string;
}

const PRACTICE_TYPES: Assignment["type"][] = ["simulator", "external-lab", "case-study"];

export function isPracticeAssignment(assignment: Assignment): boolean {
  return PRACTICE_TYPES.includes(assignment.type);
}

export function getOrderedPracticeAssignments(assignments: Assignment[] | undefined): Assignment[] {
  return [...(assignments ?? [])]
    .filter(isPracticeAssignment)
    .sort((a, b) => a.order - b.order);
}

export function getAssignmentHref(certId: string, assignmentId: string): string {
  return `/cert/${certId}/assignment/${assignmentId}`;
}

export function getNextCurriculumStep(
  cert: Certification,
  state: ProgressState
): CurriculumStep | null {
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const key = topicKey(cert.id, topic.id);
      if (!state.completedLessons[key]) {
        return {
          certId: cert.id,
          topicId: topic.id,
          topicKey: key,
          topicName: topic.name,
          certName: cert.shortName,
          reason: "Next lesson in order",
          stepType: "lesson",
          href: `/cert/${cert.id}/lesson/${topic.id}`,
        };
      }

      for (const assignment of getOrderedPracticeAssignments(topic.assignments)) {
        const aKey = assignmentKey(cert.id, assignment.id);
        if (!state.completedAssignments[aKey]) {
          return {
            certId: cert.id,
            topicId: topic.id,
            topicKey: key,
            topicName: topic.name,
            certName: cert.shortName,
            reason: `Next practice: ${assignment.title}`,
            stepType: "assignment",
            assignment,
            assignmentTitle: assignment.title,
            href: getAssignmentHref(cert.id, assignment.id),
          };
        }
      }
    }
  }
  return null;
}

export function countCurriculumSteps(cert: Certification): number {
  let total = 0;
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      total += 1;
      total += getOrderedPracticeAssignments(topic.assignments).length;
    }
  }
  return total;
}

export function countCompletedCurriculumSteps(
  cert: Certification,
  state: ProgressState
): number {
  let done = 0;
  for (const domain of cert.domains) {
    for (const topic of domain.topics) {
      const key = topicKey(cert.id, topic.id);
      if (state.completedLessons[key]) done += 1;
      for (const assignment of getOrderedPracticeAssignments(topic.assignments)) {
        if (state.completedAssignments[assignmentKey(cert.id, assignment.id)]) {
          done += 1;
        }
      }
    }
  }
  return done;
}

/** Next step for a weak topic: incomplete assignment first, else lesson review. */
export function curriculumStepForTopic(
  cert: Certification,
  topicId: string,
  state: ProgressState,
  reason: string
): CurriculumStep {
  const key = topicKey(cert.id, topicId);
  const topic = cert.domains.flatMap((d) => d.topics).find((t) => t.id === topicId);
  const topicName = topic?.name ?? topicId;

  for (const assignment of getOrderedPracticeAssignments(topic?.assignments)) {
    const aKey = assignmentKey(cert.id, assignment.id);
    if (!state.completedAssignments[aKey]) {
      return {
        certId: cert.id,
        topicId,
        topicKey: key,
        topicName,
        certName: cert.shortName,
        reason,
        stepType: "assignment",
        assignment,
        assignmentTitle: assignment.title,
        href: getAssignmentHref(cert.id, assignment.id),
      };
    }
  }

  return {
    certId: cert.id,
    topicId,
    topicKey: key,
    topicName,
    certName: cert.shortName,
    reason,
    stepType: "lesson",
    href: `/cert/${cert.id}/lesson/${topicId}`,
  };
}
