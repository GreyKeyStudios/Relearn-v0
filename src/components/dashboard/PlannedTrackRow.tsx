import Link from "next/link";
import type { PlannedTrack } from "@/lib/planned-tracks";

interface PlannedTrackRowProps {
  track: PlannedTrack;
}

/** Catalog placeholder — overview link when href is set; otherwise not navigable. */
export function PlannedTrackRow({ track }: PlannedTrackRowProps) {
  const body = (
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
        {track.href && (
          <p className="mt-2 text-xs text-sky-400">View foundations overview</p>
        )}
      </div>
    </div>
  );

  if (track.href) {
    return (
      <Link
        href={track.href}
        className="block py-4 opacity-90 transition-opacity hover:opacity-100"
        aria-label={`${track.shortName} — coming soon, open overview`}
      >
        {body}
      </Link>
    );
  }

  return (
    <div
      className="py-4 opacity-80"
      aria-label={`${track.shortName} — coming soon, not yet available`}
    >
      {body}
    </div>
  );
}
