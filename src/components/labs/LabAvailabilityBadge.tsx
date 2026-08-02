import { Badge } from "@/components/ui/Badge";
import type { LabAvailability } from "@/content/labs/types";

const LABELS: Record<LabAvailability, string> = {
  available: "Available",
  planned: "Planned",
  locked: "Locked",
  deprecated: "Deprecated",
};

const VARIANTS: Record<
  LabAvailability,
  "default" | "success" | "warning" | "info"
> = {
  available: "success",
  planned: "warning",
  locked: "default",
  deprecated: "default",
};

interface LabAvailabilityBadgeProps {
  availability: LabAvailability;
  className?: string;
}

export function LabAvailabilityBadge({
  availability,
  className = "",
}: LabAvailabilityBadgeProps) {
  return (
    <Badge variant={VARIANTS[availability]} className={className}>
      {LABELS[availability]}
    </Badge>
  );
}
