"use client";

import { useSearchParams } from "next/navigation";
import { FoundationsIntegration } from "./FoundationsIntegration";
import { FoundationsMusicalUnits } from "./FoundationsMusicalUnits";
import { PianoFoundationsCourse } from "./PianoFoundationsCourse";
import { PianoFoundationsExperience } from "./PianoFoundationsExperience";

export function PianoFoundationsExperienceRoute() {
  const searchParams = useSearchParams();

  return (
    <PianoFoundationsExperience
      startUnitId={searchParams.get("unit") ?? undefined}
      startLessonId={searchParams.get("lesson") ?? undefined}
    />
  );
}

export function PianoFoundationsCourseRoute() {
  const searchParams = useSearchParams();

  return <PianoFoundationsCourse initialLessonId={searchParams.get("lesson") ?? undefined} />;
}

export function FoundationsIntegrationRoute() {
  const searchParams = useSearchParams();

  return (
    <FoundationsIntegration
      startUnitId={searchParams.get("unit") ?? undefined}
      startLessonId={searchParams.get("lesson") ?? undefined}
    />
  );
}

export function FoundationsMusicalUnitsRoute() {
  const searchParams = useSearchParams();

  return (
    <FoundationsMusicalUnits
      startUnitId={searchParams.get("unit") ?? undefined}
      startLessonId={searchParams.get("lesson") ?? undefined}
    />
  );
}
