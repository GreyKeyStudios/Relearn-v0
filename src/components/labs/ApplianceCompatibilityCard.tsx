import { Badge } from "@/components/ui/Badge";
import { LabAvailabilityBadge } from "@/components/labs/LabAvailabilityBadge";
import type { RelearnApplianceInfo } from "@/content/labs/types";

interface ApplianceCompatibilityCardProps {
  info: RelearnApplianceInfo;
  className?: string;
}

export function ApplianceCompatibilityCard({
  info,
  className = "",
}: ApplianceCompatibilityCardProps) {
  return (
    <div
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby="appliance-compat-heading"
    >
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <h3
          id="appliance-compat-heading"
          className="font-serif text-lg font-medium text-foreground"
        >
          Appliance compatibility
        </h3>
        <Badge variant="warning">Not released</Badge>
      </div>
      <p className="mb-4 text-sm text-muted-foreground">{info.notes}</p>
      <dl className="grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs text-faint">Appliance status</dt>
          <dd className="text-foreground">Not released</dd>
        </div>
        <div>
          <dt className="text-xs text-faint">Planned version</dt>
          <dd className="text-foreground">{info.plannedVersion}</dd>
        </div>
        <div>
          <dt className="text-xs text-faint">Primary format</dt>
          <dd className="text-foreground">{info.primaryFormat}</dd>
        </div>
        <div>
          <dt className="text-xs text-faint">Advanced option</dt>
          <dd className="text-foreground">{info.advancedOption}</dd>
        </div>
        <div>
          <dt className="text-xs text-faint">OS direction</dt>
          <dd className="text-foreground">{info.osDirection}</dd>
        </div>
        <div>
          <dt className="text-xs text-faint">Scenario packs</dt>
          <dd>
            <LabAvailabilityBadge availability={info.scenarioPacksStatus} />
          </dd>
        </div>
        <div>
          <dt className="text-xs text-faint">Checksums & release notes</dt>
          <dd>
            <LabAvailabilityBadge availability={info.checksumsStatus} />
          </dd>
        </div>
      </dl>
      {/* Intentionally no download button — appliance not released */}
    </div>
  );
}
