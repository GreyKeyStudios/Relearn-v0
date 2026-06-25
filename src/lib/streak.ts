function todayString(): string {
  return new Date().toISOString().slice(0, 10);
}

function yesterdayString(): string {
  const d = new Date();
  d.setDate(d.getDate() - 1);
  return d.toISOString().slice(0, 10);
}

export function computeStreakUpdate(
  lastStudyDate: string | null,
  currentStreak: number
): { streak: number; lastStudyDate: string } {
  const today = todayString();
  if (lastStudyDate === today) {
    return { streak: currentStreak, lastStudyDate: today };
  }
  if (lastStudyDate === yesterdayString()) {
    return { streak: currentStreak + 1, lastStudyDate: today };
  }
  return { streak: 1, lastStudyDate: today };
}
