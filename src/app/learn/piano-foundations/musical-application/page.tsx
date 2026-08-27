import { FoundationsMusicalUnits } from "@/components/piano/FoundationsMusicalUnits";
export default async function Page({ searchParams }: { searchParams: Promise<{ unit?: string; lesson?: string }> }) {
  const { unit, lesson } = await searchParams;
  return <FoundationsMusicalUnits startUnitId={unit} startLessonId={lesson} />;
}
