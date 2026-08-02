"use client";

import { PageHeader } from "@/components/layout/PageHeader";
import { LabEnvironmentCard } from "@/components/labs/LabEnvironmentCard";
import { ScenarioWalkthrough } from "@/components/scenarios/ScenarioWalkthrough";
import { Badge } from "@/components/ui/Badge";
import { getLabScenario } from "@/content/labs/catalog";
import { MISSING_PATCH_SCENARIO } from "@/content/scenarios/missing-patch";

export default function MissingPatchScenarioPage() {
  const scenario = MISSING_PATCH_SCENARIO;
  const labEntry = getLabScenario("missing-patch");

  return (
    <div>
      <PageHeader
        title={scenario.title}
        subtitle={scenario.description}
        eyebrow="Demo scenario · Synthetic only"
        backHref="/career/ethical-hacking"
      />
      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="info">{scenario.difficulty}</Badge>
        <Badge variant="warning">No real exploits</Badge>
      </div>

      {labEntry && (
        <div className="mb-8">
          <h2 className="eyebrow mb-3">Lab environment</h2>
          <LabEnvironmentCard entry={labEntry} compact />
        </div>
      )}

      <ScenarioWalkthrough scenario={scenario} />
    </div>
  );
}
