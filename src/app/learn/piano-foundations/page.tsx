import { PianoFoundationsExperience } from "@/components/piano/PianoFoundationsExperience";

export default async function PianoFoundationsPage({ searchParams }: { searchParams: Promise<{ unit?: string; lesson?: string }> }) {
  const { unit, lesson } = await searchParams;
  return <PianoFoundationsExperience startUnitId={unit} startLessonId={lesson} />;
}
