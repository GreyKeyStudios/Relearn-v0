import Link from "next/link";
import { LabAvailabilityBadge } from "@/components/labs/LabAvailabilityBadge";
import { LabRoleList } from "@/components/labs/LabRoleList";
import type { LabScenarioCatalogEntry } from "@/content/labs/types";

interface LabEnvironmentCardProps {
  entry: LabScenarioCatalogEntry;
  className?: string;
  /** Compact panel for embedding on a scenario page */
  compact?: boolean;
}

export function LabEnvironmentCard({
  entry,
  className = "",
  compact = false,
}: LabEnvironmentCardProps) {
  const roles = entry.vmDelivery.roleLogins ?? [];

  return (
    <article
      className={`rounded-xl border border-border bg-surface-raised/40 p-4 sm:p-5 ${className}`}
      aria-labelledby={`lab-env-${entry.id}`}
    >
      <div className="mb-2 flex flex-wrap items-center gap-2">
        <h3
          id={`lab-env-${entry.id}`}
          className="font-serif text-lg font-medium text-foreground"
        >
          {entry.title}
        </h3>
        <LabAvailabilityBadge availability={entry.availability} />
      </div>
      <p className="text-sm text-muted-foreground">{entry.summary}</p>

      <dl className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div>
          <dt className="text-xs text-faint">Current experience</dt>
          <dd className="text-foreground">
            {entry.currentDelivery === "web-walkthrough"
              ? "Web walkthrough"
              : entry.currentDelivery === "build-yourself"
                ? "Build-it-yourself"
                : entry.currentDelivery === "relearn-vm"
                  ? "ReLearn Lab VM (planned)"
                  : "External lab"}
          </dd>
        </div>
        <div>
          <dt className="text-xs text-faint">VM lab</dt>
          <dd>
            <LabAvailabilityBadge availability={entry.vmDelivery.availability} />
          </dd>
        </div>
        {compact && (
          <>
            <div>
              <dt className="text-xs text-faint">Future environment</dt>
              <dd className="text-foreground">ReLearn Lab VM</dd>
            </div>
            <div>
              <dt className="text-xs text-faint">Appliance requirement</dt>
              <dd className="text-foreground">Not yet released</dd>
            </div>
            <div>
              <dt className="text-xs text-faint">Scenario-pack status</dt>
              <dd>
                <LabAvailabilityBadge availability={entry.vmDelivery.availability} />
              </dd>
            </div>
          </>
        )}
      </dl>

      {!compact && entry.skills.length > 0 && (
        <div className="mt-4">
          <h4 className="eyebrow mb-2">Skills</h4>
          <ul className="flex flex-wrap gap-2">
            {entry.skills.map((skill) => (
              <li
                key={skill}
                className="rounded-md border border-border px-2 py-1 text-xs text-muted-foreground"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      )}

      {roles.length > 0 && (
        <div className="mt-4">
          <h4 className="eyebrow mb-2">
            {compact ? "Planned roles" : "Roles"}
          </h4>
          <LabRoleList roles={roles} />
        </div>
      )}

      <div className="mt-4 flex flex-wrap gap-3 text-sm">
        {entry.href && entry.currentDelivery === "web-walkthrough" && (
          <Link
            href={entry.href}
            className="text-sky-400 hover:text-sky-300"
          >
            Open web walkthrough
          </Link>
        )}
        <Link href="/labs/relearn-vm" className="text-muted-foreground hover:text-foreground">
          ReLearn Lab VM overview
        </Link>
      </div>
    </article>
  );
}
