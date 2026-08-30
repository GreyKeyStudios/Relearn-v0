import { PianoFoundationsCourse } from "@/components/piano/PianoFoundationsCourse";

export default async function PianoFoundationsCoursePage({ searchParams }: { searchParams: Promise<{ lesson?: string }> }) {
  const { lesson } = await searchParams;
  return <PianoFoundationsCourse initialLessonId={lesson} />;
}
