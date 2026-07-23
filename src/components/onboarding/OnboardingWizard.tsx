"use client";

import { useState } from "react";
import type { StudyPlanPreferences } from "@/types/mastery";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import { getAllCertifications } from "@/lib/content-selectors";
import { coachingLevelLabel } from "@/lib/objective-support";
import { isActiveTrack } from "@/lib/track-status";
import { useProgressStore } from "@/stores/progress-store";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { GraduationCap } from "lucide-react";

const STEPS = ["cert", "schedule", "exam"] as const;
type Step = (typeof STEPS)[number];

export function OnboardingWizard() {
  const completeOnboarding = useProgressStore((s) => s.completeOnboarding);
  const certs = getAllCertifications().filter(
    (c) => isActiveTrack(c) && c.domains.some((d) => d.topics.length > 0)
  );

  const [step, setStep] = useState<Step>("cert");
  const [selectedCertId, setSelectedCertId] = useState<string>(certs[0]?.id ?? "");
  const [weeklyMinutes, setWeeklyMinutes] = useState(DEFAULT_STUDY_PLAN.weeklyMinutes);
  const [examDate, setExamDate] = useState<string>("");

  const stepIndex = STEPS.indexOf(step);
  const dailyMinutes = Math.round(weeklyMinutes / 7);

  function finish() {
    const prefs: StudyPlanPreferences = {
      examDate: examDate || null,
      weeklyMinutes,
      activeCertIds: selectedCertId ? [selectedCertId] : [],
      sessionMinutes: null,
    };
    completeOnboarding(prefs);
  }

  return (
    <div className="fixed inset-0 z-[60] flex flex-col bg-black/70 px-4 pt-4 pb-[calc(4.5rem+env(safe-area-inset-bottom))]">
      <Card className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col overflow-hidden p-0">
        <div className="shrink-0 border-b border-zinc-800 px-5 pb-4 pt-5">
          <div className="mb-4 flex items-center gap-2 text-sky-400">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold">Welcome to ReLearn</span>
          </div>

          <div className="flex gap-1">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${i <= stepIndex ? "bg-sky-500" : "bg-zinc-800"}`}
              />
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {step === "cert" && (
            <>
              <h2 className="text-lg font-semibold text-zinc-50">Which course are you studying?</h2>
              <p className="mt-1 text-sm text-zinc-400">
                We&apos;ll focus your study plan and recommendations on this track.
              </p>
              <div className="mt-4 flex flex-col gap-2">
                {certs.map((cert) => (
                  <button
                    key={cert.id}
                    type="button"
                    onClick={() => setSelectedCertId(cert.id)}
                    className={`rounded-lg border p-3 text-left transition-colors ${
                      selectedCertId === cert.id
                        ? "border-sky-500/50 bg-sky-500/10"
                        : "border-zinc-800 hover:border-zinc-700"
                    }`}
                  >
                    <p className="font-medium text-zinc-100">{cert.shortName}</p>
                    <p className="text-xs text-zinc-500">{coachingLevelLabel(cert.id, cert)}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === "schedule" && (
            <>
              <h2 className="text-lg font-semibold text-zinc-50">How much time per week?</h2>
              <p className="mt-1 text-sm text-zinc-400">
                About <span className="text-zinc-200">{dailyMinutes} min/day</span> at this pace.
              </p>
              <label className="mt-4 block text-xs text-zinc-400">
                Weekly study minutes ({weeklyMinutes})
                <input
                  type="range"
                  min={60}
                  max={600}
                  step={30}
                  value={weeklyMinutes}
                  onChange={(e) => setWeeklyMinutes(Number(e.target.value))}
                  className="mt-2 w-full"
                />
              </label>
            </>
          )}

          {step === "exam" && (
            <>
              <h2 className="text-lg font-semibold text-zinc-50">When is your exam?</h2>
              <p className="mt-1 text-sm text-zinc-400">
                {selectedCertId &&
                certs.find((c) => c.id === selectedCertId)?.vendor === "ReLearn"
                  ? "Optional for skills tracks — skip if you are not preparing for a vendor exam."
                  : "Optional — we'll show a countdown and pace guidance if you add a date."}
              </p>
              <label className="mt-4 block text-xs text-zinc-400">
                Exam date (optional)
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="mt-1 w-full rounded-lg border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-100"
                />
              </label>
            </>
          )}
        </div>

        <div className="shrink-0 border-t border-zinc-800 px-5 py-4">
          {step === "cert" && (
            <Button className="w-full" onClick={() => setStep("schedule")} disabled={!selectedCertId}>
              Continue
            </Button>
          )}

          {step === "schedule" && (
            <div className="flex gap-2">
              <Button className="flex-1" variant="secondary" onClick={() => setStep("cert")}>
                Back
              </Button>
              <Button className="flex-1" onClick={() => setStep("exam")}>
                Continue
              </Button>
            </div>
          )}

          {step === "exam" && (
            <div className="flex gap-2">
              <Button className="flex-1" variant="secondary" onClick={() => setStep("schedule")}>
                Back
              </Button>
              <Button className="flex-1" onClick={finish}>
                Start studying
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
