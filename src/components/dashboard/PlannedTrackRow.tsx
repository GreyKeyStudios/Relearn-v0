import type { PlannedTrack } from "@/lib/planned-tracks";

interface PlannedTrackRowProps {
  track: PlannedTrack;
}

/** Catalog placeholder — visible but not navigable until content ships. */
export function PlannedTrackRow({ track }: PlannedTrackRowProps) {
  return (
    <div
      className="py-4 opacity-80"
      aria-label={`${track.shortName} — coming soon, not yet available`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2">
            <h3 className="truncate font-serif text-lg font-medium text-muted-foreground">
              {track.shortName}
            </h3>
            <span className="eyebrow shrink-0">Coming soon</span>
          </div>
          <p className="mt-0.5 truncate text-xs text-faint">{track.kindLabel}</p>
          <p className="mt-2 text-xs text-faint">{track.tagline}</p>
        </div>
      </div>
    </div>
  );
}
