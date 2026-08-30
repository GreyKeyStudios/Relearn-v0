import { Suspense } from "react";
import { FoundationsIntegrationRoute } from "@/components/piano/PianoFoundationsRoute";

export default function FoundationsIntegrationPage() {
  return (
    <Suspense fallback={<p className="p-4 text-center text-sm text-faint">Loading lesson…</p>}>
      <FoundationsIntegrationRoute />
    </Suspense>
  );
}
