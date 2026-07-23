"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TrackCard } from "@/components/dashboard/TrackCard";
import { PlannedTrackRow } from "@/components/dashboard/PlannedTrackRow";
import { getAllCertifications } from "@/lib/content-selectors";
import { filterPlannedTracks } from "@/lib/planned-tracks";
import { groupTracksByStatus } from "@/lib/track-status";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return getAllCertifications().filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.shortName.toLowerCase().includes(q) ||
        c.vendor.toLowerCase().includes(q)
    );
  }, [query]);

  const plannedCatalog = useMemo(() => filterPlannedTracks(query), [query]);
  const { active, early, planned: plannedCerts } = groupTracksByStatus(filtered);

  const nothingMatches =
    active.length === 0 &&
    early.length === 0 &&
    plannedCerts.length === 0 &&
    plannedCatalog.length === 0;

  return (
    <div>
      <PageHeader
        title="Course library"
        subtitle="Live tracks, early access previews, and what's landing next"
      />

      <input
        type="search"
        placeholder="Search tracks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-8 w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-foreground placeholder:text-faint focus:border-primary focus:outline-none"
      />

      {active.length > 0 && (
        <section className="mb-10 border-t border-hairline pt-6">
          <div className="mb-1 flex items-baseline justify-between">
            <h2 className="eyebrow">Available now</h2>
            <span className="text-xs text-faint">{active.length} tracks</span>
          </div>
          <div className="divide-y divide-hairline">
            {active.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {early.length > 0 && (
        <section className="mb-10 border-t border-hairline pt-6">
          <div className="mb-1 flex items-baseline justify-between">
            <h2 className="eyebrow">Early access</h2>
            <span className="text-xs text-faint">{early.length} tracks</span>
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Question banks and flashcards are live. Guided lessons are still being built out.
          </p>
          <div className="divide-y divide-hairline">
            {early.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {(plannedCerts.length > 0 || plannedCatalog.length > 0) && (
        <section className="mb-10 border-t border-hairline pt-6">
          <div className="mb-1 flex items-baseline justify-between">
            <h2 className="eyebrow">Coming soon</h2>
            <span className="text-xs text-faint">
              {plannedCerts.length + plannedCatalog.length} planned
            </span>
          </div>
          <p className="mb-3 text-xs text-muted-foreground">
            Architecture ready — not marketed as studyable until content maturity allows.
          </p>
          <div className="divide-y divide-hairline">
            {plannedCerts.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
            {plannedCatalog.map((track) => (
              <PlannedTrackRow key={track.id} track={track} />
            ))}
          </div>
        </section>
      )}

      {nothingMatches && (
        <p className="text-sm text-muted-foreground">No tracks match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
