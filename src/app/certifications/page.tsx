"use client";

import { useState } from "react";
import { PageHeader } from "@/components/layout/PageHeader";
import { CertProgressCard } from "@/components/dashboard/CertProgressCard";
import { getAllCertifications } from "@/lib/content-selectors";

export default function CertificationsPage() {
  const [query, setQuery] = useState("");
  const certs = getAllCertifications().filter(
    (c) =>
      c.name.toLowerCase().includes(query.toLowerCase()) ||
      c.shortName.toLowerCase().includes(query.toLowerCase()) ||
      c.vendor.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div>
      <PageHeader title="Certifications" subtitle="Cert prep and job skill tracks" />
      <input
        type="search"
        placeholder="Search certifications..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-6 w-full rounded-xl border border-zinc-800 bg-zinc-900 px-4 py-3 text-sm text-zinc-100 placeholder:text-zinc-500 focus:border-emerald-500 focus:outline-none"
      />
      <div className="flex flex-col gap-3">
        {certs.map((cert) => (
          <CertProgressCard key={cert.id} cert={cert} />
        ))}
      </div>
    </div>
  );
}
