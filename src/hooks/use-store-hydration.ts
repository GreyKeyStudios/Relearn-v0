"use client";

import { useEffect, useState } from "react";
import { migrateV1ToV2IfNeeded } from "@/lib/progress-migrate";
import { useProgressStore } from "@/stores/progress-store";

export function useStoreHydration(): boolean {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    migrateV1ToV2IfNeeded();

    const persist = useProgressStore.persist;
    if (!persist) {
      setHydrated(true);
      return;
    }

    if (persist.hasHydrated()) {
      setHydrated(true);
      return;
    }

    const unsub = persist.onFinishHydration(() => setHydrated(true));
    void persist.rehydrate();
    return unsub;
  }, []);

  return hydrated;
}
