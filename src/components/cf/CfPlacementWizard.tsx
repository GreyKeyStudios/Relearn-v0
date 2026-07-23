"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  scoreCfPlacement,
  type CfPlacementAnswers,
} from "@/lib/cf-placement";

const DEFAULT: CfPlacementAnswers = {
  canCreateFolder: false,
  wifiVsInternet: false,
  knowsCommonPorts: false,
  installedSoftware: false,
  usedTaskManager: false,
  workedWithTickets: false,
  intent: "unsure",
};

/**
 * Placement v0 — respectful diagnostic for Computer Fundamentals / A+ entry.
 * Does not persist yet; recommendation only.
 */
export function CfPlacementWizard() {
  const [answers, setAnswers] = useState<CfPlacementAnswers>(DEFAULT);
  const [submitted, setSubmitted] = useState(false);

  const result = useMemo(
    () => (submitted ? scoreCfPlacement(answers) : null),
    [submitted, answers]
  );

  function toggle<K extends keyof CfPlacementAnswers>(
    key: K,
    value: CfPlacementAnswers[K]
  ) {
    setAnswers((a) => ({ ...a, [key]: value }));
    setSubmitted(false);
  }

  return (
    <Card className="mb-6 border-zinc-800 bg-zinc-900/60 p-4">
      <h2 className="mb-1 font-serif text-lg text-zinc-100">Find your starting point</h2>
      <p className="mb-4 text-sm text-zinc-400">
        A few yes/no questions — not a test. Answers stay on this device and only
        shape a recommendation.
      </p>

      <ul className="mb-4 space-y-3 text-sm text-zinc-300">
        <YesNo
          label="Can you create a folder and find it again in File Explorer?"
          value={answers.canCreateFolder}
          onChange={(v) => toggle("canCreateFolder", v)}
        />
        <YesNo
          label="Do you know the difference between Wi-Fi and the Internet?"
          value={answers.wifiVsInternet}
          onChange={(v) => toggle("wifiVsInternet", v)}
        />
        <YesNo
          label="Can you recognize common ports (USB-C, HDMI, Ethernet) by sight?"
          value={answers.knowsCommonPorts}
          onChange={(v) => toggle("knowsCommonPorts", v)}
        />
        <YesNo
          label="Have you installed software on a Windows PC before?"
          value={answers.installedSoftware}
          onChange={(v) => toggle("installedSoftware", v)}
        />
        <YesNo
          label="Have you opened Task Manager before?"
          value={answers.usedTaskManager}
          onChange={(v) => toggle("usedTaskManager", v)}
        />
        <YesNo
          label="Have you worked with support tickets (written or read one)?"
          value={answers.workedWithTickets}
          onChange={(v) => toggle("workedWithTickets", v)}
        />
      </ul>

      <label className="mb-4 block text-sm text-zinc-300">
        What brings you here?
        <select
          className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-3 py-2 text-zinc-100"
          value={answers.intent}
          onChange={(e) =>
            toggle(
              "intent",
              e.target.value as CfPlacementAnswers["intent"]
            )
          }
        >
          <option value="unsure">Not sure yet</option>
          <option value="confidence">Personal confidence with computers</option>
          <option value="job">Job / help-desk readiness</option>
          <option value="aplus">Studying for CompTIA A+</option>
        </select>
      </label>

      <Button type="button" onClick={() => setSubmitted(true)}>
        Get recommendation
      </Button>

      {result && (
        <div className="mt-4 rounded-lg border border-sky-900/50 bg-sky-950/30 p-3 text-sm text-zinc-200">
          <p className="mb-2 font-medium text-sky-300">Recommendation</p>
          <p className="mb-3 leading-relaxed">{result.recommendation}</p>
          {result.path === "begin-aplus-with-refreshers" ? (
            <div className="flex flex-wrap gap-2">
              <Link
                href="/cert/a-plus"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Open CompTIA A+ (coming soon)
              </Link>
              <Link
                href="/cert/computer-fundamentals"
                className="text-sky-400 underline-offset-2 hover:underline"
              >
                Keep Computer Fundamentals handy
              </Link>
            </div>
          ) : result.path === "skip-to-files" ? (
            <Link
              href="/cert/computer-fundamentals/lesson/cf-file-explorer-basics"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Start at Files and Folders
            </Link>
          ) : (
            <Link
              href="/cert/computer-fundamentals/lesson/cf-what-is-a-computer"
              className="text-sky-400 underline-offset-2 hover:underline"
            >
              Start Computer Orientation
            </Link>
          )}
        </div>
      )}
    </Card>
  );
}

function YesNo({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <li className="flex flex-col gap-1.5 sm:flex-row sm:items-center sm:justify-between">
      <span className="pr-2">{label}</span>
      <div className="flex shrink-0 gap-2">
        <button
          type="button"
          className={`rounded-md px-3 py-1 text-xs ${
            value
              ? "bg-sky-600 text-white"
              : "border border-zinc-700 text-zinc-400"
          }`}
          onClick={() => onChange(true)}
        >
          Yes
        </button>
        <button
          type="button"
          className={`rounded-md px-3 py-1 text-xs ${
            !value
              ? "bg-zinc-700 text-white"
              : "border border-zinc-700 text-zinc-400"
          }`}
          onClick={() => onChange(false)}
        >
          No
        </button>
      </div>
    </li>
  );
}
