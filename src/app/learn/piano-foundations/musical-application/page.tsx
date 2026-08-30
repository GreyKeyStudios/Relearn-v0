import { Suspense } from "react";
import { FoundationsMusicalUnitsRoute } from "@/components/piano/PianoFoundationsRoute";

export default function Page() {
  return (
    <Suspense fallback={<p className="p-4 text-center text-sm text-faint">Loading lesson…</p>}>
      <FoundationsMusicalUnitsRoute />
    </Suspense>
  );
}
