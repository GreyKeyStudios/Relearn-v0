const RETRY_KEY_PREFIX = "bridge-quiz-retry";

export function storeQuizRetryIds(certId: string, topicId: string, questionIds: string[]): void {
  if (typeof window === "undefined") return;
  sessionStorage.setItem(
    `${RETRY_KEY_PREFIX}:${certId}:${topicId}`,
    JSON.stringify(questionIds)
  );
}

export function consumeQuizRetryIds(certId: string, topicId: string): string[] | null {
  if (typeof window === "undefined") return null;
  const key = `${RETRY_KEY_PREFIX}:${certId}:${topicId}`;
  const raw = sessionStorage.getItem(key);
  if (!raw) return null;
  sessionStorage.removeItem(key);
  try {
    const ids = JSON.parse(raw) as string[];
    return Array.isArray(ids) && ids.length > 0 ? ids : null;
  } catch {
    return null;
  }
}

export function quizRetryHref(certId: string, topicId: string): string {
  return `/cert/${certId}/quiz/${topicId}?retry=missed`;
}
