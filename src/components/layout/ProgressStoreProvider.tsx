"use client";

import { type ReactNode } from "react";
import { useStoreHydration } from "@/hooks/use-store-hydration";

interface ProgressStoreProviderProps {
  children: ReactNode;
}

export function ProgressStoreProvider({ children }: ProgressStoreProviderProps) {
  const hydrated = useStoreHydration();

  if (!hydrated) {
    return (
      <div className="flex flex-1 items-center justify-center py-20">
        <p className="text-sm text-zinc-500">Loading progress…</p>
      </div>
    );
  }

  return children;
}
