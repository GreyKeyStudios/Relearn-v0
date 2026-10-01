"use client";

import { useState } from "react";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { buildLearnerRecord } from "@/integration/learner-record";
import { useProgressStore } from "@/stores/progress-store";

/**
 * Learner-initiated export of progress + evidence in the ReLearn interchange
 * v1 format. Nothing is uploaded; the file is generated on this device.
 */
export function ExportLearnerRecordCard() {
  const state = useProgressStore((s) => s);
  const [summary, setSummary] = useState<string | null>(null);

  function handleExport() {
    const record = buildLearnerRecord(state);
    const blob = new Blob([JSON.stringify(record, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `relearn-learner-record-${record.exportedAt.slice(0, 10)}.json`;
    a.click();
    URL.revokeObjectURL(url);
    const evidence = record.courses.reduce((n, c) => n + c.evidence.length, 0);
    setSummary(
      record.courses.length === 0
        ? "Exported an empty record — no course progress yet."
        : `Exported ${record.courses.length} course record(s) with ${evidence} evidence item(s).`
    );
  }

  return (
    <Card>
      <h2 className="mb-1 text-sm font-semibold text-foreground">Export learning record</h2>
      <p className="mb-4 text-xs text-muted-foreground">
        Download your lesson completions, quiz and practice results, and mastery as a
        ReLearn interchange file. It stays on your device until you choose to share it.
      </p>
      <Button variant="secondary" onClick={handleExport} data-testid="export-learner-record">
        Download record (.json)
      </Button>
      {summary && (
        <p className="mt-3 text-xs text-muted-foreground" role="status">
          {summary}
        </p>
      )}
    </Card>
  );
}
