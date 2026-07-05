"use client";

import { useMemo, useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { TrackCard } from "@/components/dashboard/TrackCard";
import { getAllCertifications } from "@/lib/content-selectors";
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

  const { active, early } = groupTracksByStatus(filtered);

  return (
    <div>
      <PageHeader
        title="Course library"
        subtitle="One flagship experience today, with more tracks landing over time"
      />

      <input
        type="search"
        placeholder="Search tracks..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
      />

      {active.length > 0 && (
        <section className="mb-8">
          <div className="mb-3 flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              Available now
            </h2>
            <span className="text-xs text-zinc-600">{active.length} tracks</span>
          </div>
          <div className="flex flex-col gap-3">
            {active.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {early.length > 0 && (
        <section className="mb-6">
          <div className="mb-1 flex items-baseline justify-between">
            <h2 className="text-xs font-semibold uppercase tracking-wide text-zinc-400">
              In development
            </h2>
            <span className="text-xs text-zinc-600">{early.length} tracks</span>
          </div>
          <p className="mb-3 text-xs text-zinc-500">
            Question banks and flashcards are live. Guided lessons are being built out.
          </p>
          <div className="flex flex-col gap-3">
            {early.map((cert) => (
              <TrackCard key={cert.id} cert={cert} />
            ))}
          </div>
        </section>
      )}

      {active.length === 0 && early.length === 0 && (
        <p className="text-sm text-zinc-500">No tracks match &ldquo;{query}&rdquo;.</p>
      )}
    </div>
  );
}
