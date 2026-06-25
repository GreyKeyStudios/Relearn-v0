export function topicKey(certId: string, topicId: string): string {
  return `${certId}:${topicId}`;
}

export function parseTopicKey(key: string): { certId: string; topicId: string } {
  const [certId, ...rest] = key.split(":");
  return { certId, topicId: rest.join(":") };
}

export function activityId(): string {
  return `act-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function assignmentKey(certId: string, assignmentId: string): string {
  return `${certId}:${assignmentId}`;
}

export function domainReviewKey(certId: string, domainId: string): string {
  return `${certId}:domain-review:${domainId}`;
}

export function topicBankKey(certId: string, topicId: string): string {
  return `${certId}:question-bank:${topicId}`;
}

/** Resolve cert/topic for mastery updates from attempt keys */
export function parseMasteryTopicKey(
  key: string
): { certId: string; topicId: string } | null {
  if (key.includes(":domain-review:") || key.startsWith("adaptive-review:")) {
    return null;
  }
  if (key.includes(":question-bank:")) {
    const [certId, marker, ...rest] = key.split(":");
    if (marker === "question-bank") {
      return { certId, topicId: rest.join(":") };
    }
  }
  return parseTopicKey(key);
}
