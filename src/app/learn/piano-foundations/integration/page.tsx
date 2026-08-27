import { FoundationsIntegration } from "@/components/piano/FoundationsIntegration";

export default async function FoundationsIntegrationPage({ searchParams }: { searchParams: Promise<{ unit?: string; lesson?: string }> }) {
  const { unit, lesson } = await searchParams;
  return <FoundationsIntegration startUnitId={unit} startLessonId={lesson} />;
}
