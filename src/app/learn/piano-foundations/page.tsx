import { Suspense } from "react";
import { PianoFoundationsExperienceRoute } from "@/components/piano/PianoFoundationsRoute";

export default function PianoFoundationsPage() {
  return (
    <Suspense fallback={<p className="p-4 text-center text-sm text-faint">Loading piano lesson…</p>}>
      <PianoFoundationsExperienceRoute />
    </Suspense>
  );
}
