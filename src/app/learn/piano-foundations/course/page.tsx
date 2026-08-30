import { Suspense } from "react";
import { PianoFoundationsCourseRoute } from "@/components/piano/PianoFoundationsRoute";

export default function PianoFoundationsCoursePage() {
  return (
    <Suspense fallback={<p className="p-4 text-center text-sm text-faint">Loading course…</p>}>
      <PianoFoundationsCourseRoute />
    </Suspense>
  );
}
