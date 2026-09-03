import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { ApplianceCompatibilityCard } from "@/components/labs/ApplianceCompatibilityCard";
import { LabArchitectureTree } from "@/components/labs/LabArchitectureTree";
import { LabAvailabilityBadge } from "@/components/labs/LabAvailabilityBadge";
import { LabContainmentNotice } from "@/components/labs/LabContainmentNotice";
import { LabEnvironmentCard } from "@/components/labs/LabEnvironmentCard";
import { LabSetupSteps } from "@/components/labs/LabSetupSteps";
import {
  getLabScenarioCatalog,
  RELEARN_APPLIANCE_INFO,
} from "@/content/labs/catalog";

const AVAILABLE_NOW = [
  "VM Lab Foundations track (install VirtualBox · Linux guest · snapshots)",
  "Knowledge prerequisites and Knowledge DNA",
  "Ethical Hacking career-path structure",
  "The Missing Patch web walkthrough",
  "Scenario scoring architecture",
  "Auth / DNS / permissions perspective blocks on live lessons",
];

const PLANNED = [
  "Downloadable ReLearn Lab VM appliance",
  "Scenario-pack installer",
  "Multiple scenario and role logins",
  "Environment health checks",
  "Reset and restore tools",
  "Evidence export",
  "ReLearn result verification",
];

export default function RelearnLabVmPage() {
  const catalog = getLabScenarioCatalog();

  return (
    <div>
      <PageHeader
        title="ReLearn Lab VM"
        subtitle="One reusable, contained virtual lab for ReLearn scenarios."
        eyebrow="Lab environment · Planned"
        backHref="/certifications"
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="warning">Planned</Badge>
        <Badge variant="default">No download yet</Badge>
      </div>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Learners build their first VM manually in the VM Lab Foundations course, then
        may use this appliance for later scenario-based courses. The appliance itself
        is <strong className="font-medium text-foreground">not released</strong> —
        there is no download in this build.
      </p>

      <section className="mb-10 grid gap-6 border-t border-hairline pt-6 md:grid-cols-2">
        <div>
          <h2 className="eyebrow mb-3">Available now</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {AVAILABLE_NOW.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="eyebrow mb-3">Planned</h2>
          <ul className="list-disc space-y-2 pl-5 text-sm text-muted-foreground">
            {PLANNED.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3 text-xs text-faint">
            Planned items are not downloadable or installable in the app today.
          </p>
        </div>
      </section>

      {/* Reference detail is collapsed by default: this page is a status summary
          first, and every section below was pushing the page past seven screens. */}
      <details className="mb-4 border-t border-hairline pt-4">
        <summary className="eyebrow cursor-pointer list-none py-1 hover:text-foreground">How it will work ›</summary>
        <div className="mt-4"><LabSetupSteps /></div>
      </details>

      <details className="mb-4 border-t border-hairline pt-4">
        <summary className="eyebrow cursor-pointer list-none py-1 hover:text-foreground">Architecture ›</summary>
        <div className="mt-4"><LabArchitectureTree /></div>
      </details>

      <details className="mb-4 border-t border-hairline pt-4">
        <summary className="eyebrow cursor-pointer list-none py-1 hover:text-foreground">Containment ›</summary>
        <div className="mt-4"><LabContainmentNotice /></div>
      </details>

      <details className="mb-4 border-t border-hairline pt-4">
        <summary className="eyebrow cursor-pointer list-none py-1 hover:text-foreground">Appliance compatibility ›</summary>
        <div className="mt-4"><ApplianceCompatibilityCard info={RELEARN_APPLIANCE_INFO} /></div>
      </details>

      <details className="mb-4 border-t border-hairline pt-4" open>
        <summary className="eyebrow cursor-pointer list-none py-1 hover:text-foreground">Scenario catalog ›</summary>
        <p className="mb-4 mt-3 text-sm text-muted-foreground">
          Web walkthroughs can ship before the appliance. VM packs stay labeled{" "}
          <LabAvailabilityBadge availability="planned" /> until an OVA exists.
        </p>
        <div className="grid gap-4">
          {catalog.map((entry) => (
            <LabEnvironmentCard key={entry.id} entry={entry} />
          ))}
        </div>
      </details>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-3">Related</h2>
        <ul className="space-y-2 text-sm">
          <li>
            <Link
              href="/career/ethical-hacking"
              className="text-accent hover:text-foreground"
            >
              Ethical Hacking career path
            </Link>
          </li>
          <li>
            <Link
              href="/career/ethical-hacking/scenarios/missing-patch"
              className="text-accent hover:text-foreground"
            >
              The Missing Patch walkthrough
            </Link>
          </li>
          <li>
            <Link href="/cert/vm-lab" className="text-accent hover:text-foreground">
              VM Lab Foundations (build-it-yourself)
            </Link>
          </li>
          <li>
            <Link href="/certifications" className="text-muted-foreground hover:text-foreground">
              Course library
            </Link>
          </li>
        </ul>
      </section>
    </div>
  );
}
