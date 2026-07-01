"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useProgressStore } from "@/stores/progress-store";

export function ResetProgressCard() {
  const resetProgress = useProgressStore((s) => s.resetProgress);
  const [confirming, setConfirming] = useState(false);

  function handleReset() {
    resetProgress();
    window.location.href = "/";
  }

  return (
    <Card className="border-amber-900/40">
      <h2 className="mb-1 text-sm font-semibold text-zinc-200">Start over</h2>
      <p className="mb-4 text-xs text-zinc-500">
        Clears lessons, quizzes, streaks, study plan, and onboarding — like opening
        the app for the first time.
      </p>
      {!confirming ? (
        <Button variant="danger" onClick={() => setConfirming(true)}>
          Reset all progress
        </Button>
      ) : (
        <div className="flex flex-col gap-2 sm:flex-row">
          <Button variant="danger" onClick={handleReset}>
            Yes, reset everything
          </Button>
          <Button variant="secondary" onClick={() => setConfirming(false)}>
            Cancel
          </Button>
        </div>
      )}
    </Card>
  );
}
