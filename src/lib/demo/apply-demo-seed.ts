import {
  clearAllLearnerStorage,
  PROGRESS_STORAGE_V2_KEY,
} from "@/lib/progress-migrate";
import {
  getDemoPersistedState,
  serializeDemoSeed,
} from "@/lib/demo/demo-profiles";
import {
  DEMO_ACTIVE_PROFILE_KEY,
  type DemoProfileId,
  isDemoProfileId,
} from "@/lib/demo/types";

export { serializeDemoSeed, getDemoPersistedState };

/** Write a profile into localStorage (Zustand persist shape). Call before rehydrate/reload. */
export function writeDemoSeedToStorage(profileId: DemoProfileId): void {
  if (typeof window === "undefined") return;
  localStorage.setItem(PROGRESS_STORAGE_V2_KEY, serializeDemoSeed(profileId));
  sessionStorage.setItem(DEMO_ACTIVE_PROFILE_KEY, profileId);
}

/** Apply seed and hard-reload so the store rehydrates cleanly. */
export function applyDemoSeed(profileId: DemoProfileId): void {
  writeDemoSeedToStorage(profileId);
  window.location.reload();
}

/** Wipe progress + clear active profile marker, then reload. */
export function resetLearner(): void {
  if (typeof window === "undefined") return;
  clearAllLearnerStorage();
  sessionStorage.removeItem(DEMO_ACTIVE_PROFILE_KEY);
  window.location.reload();
}

export function getActiveDemoProfileId(): DemoProfileId | null {
  if (typeof window === "undefined") return null;
  const raw = sessionStorage.getItem(DEMO_ACTIVE_PROFILE_KEY);
  if (!raw || !isDemoProfileId(raw)) return null;
  return raw;
}
