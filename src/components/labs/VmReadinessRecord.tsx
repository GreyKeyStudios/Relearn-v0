"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import {
  emptyVmReadinessChecks,
  isVmReadinessComplete,
  VM_READINESS_ITEMS,
  VM_READINESS_STORAGE_KEY,
  type VmReadinessChecks,
} from "@/content/labs/vm-readiness";

const WHERE_LABEL = {
  host: "On the host PC",
  guest: "Inside the Linux guest",
  both: "Host + guest",
  concept: "Concept check",
} as const;

/**
 * Local checklist proving VM Lab Foundations readiness.
 * Stored in localStorage only — future unlock gate for appliance labs.
 */
export function VmReadinessRecord({ className = "" }: { className?: string }) {
  const [checks, setChecks] = useState<VmReadinessChecks>(emptyVmReadinessChecks);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(VM_READINESS_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as VmReadinessChecks;
        setChecks({ ...emptyVmReadinessChecks(), ...parsed });
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  const persist = useCallback((next: VmReadinessChecks) => {
    setChecks(next);
    try {
      window.localStorage.setItem(VM_READINESS_STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* quota / private mode */
    }
  }, []);

  const toggle = (id: string) => {
    persist({ ...checks, [id]: !checks[id] });
  };

  const complete = isVmReadinessComplete(checks);

  if (!hydrated) {
    return (
      <div className={`rounded-xl border border-border p-4 text-sm text-faint ${className}`}>
        Loading readiness record…
      </div>
    );
  }

  return (
    <section
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby="vm-readiness-heading"
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h2
          id="vm-readiness-heading"
          className="font-serif text-xl font-medium text-foreground"
        >
          VM Readiness Record
        </h2>
        <Badge variant={complete ? "success" : "warning"}>
          {complete ? "Ready" : "In progress"}
        </Badge>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">
        Check each item as you finish it. Saved on this device only. Later, a complete
        record can unlock appliance-backed scenario labs.
      </p>

      <ul className="space-y-3">
        {VM_READINESS_ITEMS.map((item) => {
          const checked = !!checks[item.id];
          return (
            <li key={item.id}>
              <label className="flex cursor-pointer gap-3 text-sm">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 shrink-0 rounded border-border"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                />
                <span>
                  <span className="text-foreground">{item.label}</span>
                  <span className="mt-0.5 block text-xs text-faint">
                    {WHERE_LABEL[item.where]}
                  </span>
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      {complete && (
        <p className="mt-4 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-3 py-2 text-sm text-emerald-100">
          Record complete. You are ready for disposable-guest labs and the next ethical
          hacking foundations path.{" "}
          <Link
            href="/career/ethical-hacking/journey/foundations"
            className="underline hover:text-white"
          >
            Continue HTTP → Missing Patch
          </Link>
          {" · "}
          <Link href="/labs/relearn-vm" className="underline hover:text-white">
            Lab VM plans
          </Link>
        </p>
      )}
    </section>
  );
}
