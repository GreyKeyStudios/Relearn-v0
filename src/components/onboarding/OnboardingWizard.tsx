"use client";

import { useState } from "react";
import Link from "next/link";
import type { StudyPlanPreferences } from "@/types/mastery";
import { DEFAULT_STUDY_PLAN } from "@/types/mastery";
import { getAllCertifications } from "@/lib/content-selectors";
import { coachingLevelLabel } from "@/lib/objective-support";
import { isActiveTrack } from "@/lib/track-status";
import { useProgressStore } from "@/stores/progress-store";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ArrowRight, GraduationCap, Piano } from "lucide-react";

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
    <div className="fixed inset-0 z-[60] flex flex-col bg-foreground/25 px-4 pt-4 pb-[calc(4.5rem+env(safe-area-inset-bottom))] backdrop-blur-sm">
      <Card className="mx-auto flex min-h-0 w-full max-w-lg flex-1 flex-col overflow-hidden p-0">
        <div className="shrink-0 border-b border-hairline px-5 pb-4 pt-5">
          <div className="mb-4 flex items-center gap-2 text-accent">
            <GraduationCap className="h-5 w-5" />
            <span className="text-sm font-semibold">Welcome to ReLearn</span>
          </div>

          <div className="flex gap-1">
            {STEPS.map((s, i) => (
              <div
                key={s}
                className={`h-1 flex-1 rounded-full ${i <= stepIndex ? "bg-primary" : "bg-border"}`}
              />
            ))}
          </div>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
          {step === "cert" && (
            <>
              <Link href="/learn/piano-foundations" className="mb-5 flex items-center justify-between gap-4 rounded-md border border-primary/35 bg-primary/10 p-4 text-left transition-colors hover:border-primary/60">
                <span className="flex items-center gap-3"><span className="rounded-md bg-primary/15 p-2 text-primary"><Piano className="h-5 w-5" /></span><span><span className="block font-medium text-foreground">New to piano?</span><span className="block text-xs text-muted-foreground">Connect a MIDI keyboard and play your first pattern.</span></span></span>
                <ArrowRight className="h-4 w-4 shrink-0 text-primary" />
              </Link>
              <h2 className="font-serif text-xl font-medium text-foreground">Or choose a study track</h2>
              <p className="mt-1 text-sm text-muted-foreground">
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
                        ? "border-primary/60 bg-primary/10"
                        : "border-border bg-surface-raised hover:border-primary/35"
                    }`}
                  >
                    <p className="font-medium text-foreground">{cert.shortName}</p>
                    <p className="text-xs text-faint">{coachingLevelLabel(cert.id, cert)}</p>
                  </button>
                ))}
              </div>
            </>
          )}

          {step === "schedule" && (
            <>
              <h2 className="font-serif text-xl font-medium text-foreground">How much time per week?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                About <span className="text-foreground">{dailyMinutes} min/day</span> at this pace.
              </p>
              <label className="mt-4 block text-xs text-muted-foreground">
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
              <h2 className="font-serif text-xl font-medium text-foreground">When is your exam?</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                {selectedCertId &&
                certs.find((c) => c.id === selectedCertId)?.vendor === "ReLearn"
                  ? "Optional for skills tracks — skip if you are not preparing for a vendor exam."
                  : "Optional — we'll show a countdown and pace guidance if you add a date."}
              </p>
              <label className="mt-4 block text-xs text-muted-foreground">
                Exam date (optional)
                <input
                  type="date"
                  value={examDate}
                  onChange={(e) => setExamDate(e.target.value)}
                  className="mt-1 w-full rounded-md border border-border bg-surface-raised px-3 py-2 text-sm text-foreground"
                />
              </label>
            </>
          )}
        </div>

        <div className="shrink-0 border-t border-hairline px-5 py-4">
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
