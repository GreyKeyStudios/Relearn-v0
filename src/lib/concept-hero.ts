import type { Certification, Topic } from "@/content/types";
import type { CoachRecommendation, CoachRecommendationType } from "@/lib/coach-recommendation";
import type { ProgressState } from "@/types/progress";
import { getTopic, flattenTopics } from "@/lib/content-selectors";

/**
 * The "concept hero" reframes the coach's next step as an idea to understand,
 * not a task to complete. The concept is the star; the course is context.
 *
 * Design philosophy: ReLearn celebrates understanding first — progress is just
 * the record of that understanding. So the front door leads with curiosity.
 */
export interface ConceptHero {
  type: CoachRecommendationType;
  /** The idea itself — e.g. "Subnetting", "Ethernet & MAC addressing" */
  conceptName: string;
  /** One-sentence curiosity hook (the topic's mental model / lightbulb moment) */
  hook?: string;
  /** Emotional lead-in framing, e.g. "Today you'll understand" */
  lead: string;
  /** Course context — never the star, always the setting */
  certName: string;
  href: string;
  ctaLabel: string;
  estimatedMinutes: number;
  score?: number;
  /** The continuity thread — what understanding this builds on */
  lastLearned?: { conceptName: string; hook?: string; when: string };
}

/** Pull the best one-sentence hook for a topic. */
function topicHook(topic: Topic): string | undefined {
  if (topic.lightbulbMoment) return topic.lightbulbMoment;
  const hero = topic.lesson.experience?.screens.find((s) => s.type === "hero");
  return hero?.body ?? hero?.headline;
}

/** Resolve the Topic a recommendation points at, if any. */
function resolveTopic(
  rec: CoachRecommendation,
  certs: Certification[]
): Topic | undefined {
  const lessonMatch = rec.href.match(/\/cert\/([^/]+)\/lesson\/([^/?#]+)/);
  if (lessonMatch) {
    const resolved = getTopic(lessonMatch[1], lessonMatch[2]);
    if (resolved) return resolved.topic;
  }
  // Fall back to matching the recommendation label to a topic name in the cert.
  const cert = certs.find((c) => c.id === rec.certId);
  if (cert) {
    return flattenTopics(cert).find((t) => t.name === rec.label);
  }
  return undefined;
}

/** Human-friendly relative time for the continuity thread. */
function relativeWhen(iso: string): string {
  const then = new Date(iso);
  const now = new Date();
  const startOfDay = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
  const days = Math.round((startOfDay(now) - startOfDay(then)) / 86_400_000);
  if (days <= 0) return "Earlier today";
  if (days === 1) return "Yesterday";
  if (days < 7) return "A few days ago";
  return "Last time";
}

/** Find the most recently completed lesson and describe it as understanding. */
function getLastLearned(
  state: ProgressState,
  certs: Certification[]
): ConceptHero["lastLearned"] {
  const last = state.recentActivity.find((a) => a.type === "lesson_complete");
  if (!last) return undefined;
  const topicId = last.topicKey.split(":").slice(1).join(":");
  const resolved = getTopic(last.certId, topicId);
  const topic = resolved?.topic ?? flattenTopics(
    certs.find((c) => c.id === last.certId) ?? { domains: [] } as unknown as Certification
  ).find((t) => t.name === last.label);
  return {
    conceptName: topic?.name ?? last.label,
    hook: topic ? topicHook(topic) : undefined,
    when: relativeWhen(last.timestamp),
  };
}

const LEAD_BY_TYPE: Record<CoachRecommendationType, string> = {
  curriculum: "Today you'll understand",
  weak: "Let's make sense of",
  objective: "Today you'll master",
  review: "Bring back to memory",
};

const CTA_BY_TYPE: Record<CoachRecommendationType, string> = {
  curriculum: "Continue",
  weak: "Revisit this",
  objective: "Practice this",
  review: "Begin review",
};

/**
 * Build the concept hero from the coach's recommendation. Returns null when
 * there's no recommendation (caller shows a gentle "choose a track" state).
 */
export function getConceptHero(
  state: ProgressState,
  certs: Certification[],
  rec: CoachRecommendation | null
): ConceptHero | null {
  if (!rec) return null;
  const topic = resolveTopic(rec, certs);
  const conceptName = topic?.name ?? rec.label;
  // Only show a hook when it's a genuine idea (the topic's mental model), not a
  // generic "next practice" restatement of the concept name.
  const rawHook = topic ? topicHook(topic) : undefined;
  const hook =
    rawHook && rawHook.toLowerCase() !== conceptName.toLowerCase()
      ? rawHook
      : undefined;
  return {
    type: rec.type,
    conceptName,
    hook,
    lead: LEAD_BY_TYPE[rec.type],
    certName: rec.certName,
    href: rec.href,
    ctaLabel: CTA_BY_TYPE[rec.type],
    estimatedMinutes: rec.estimatedMinutes,
    score: rec.score,
    lastLearned: getLastLearned(state, certs),
  };
}
