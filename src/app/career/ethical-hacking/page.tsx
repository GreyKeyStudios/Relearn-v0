"use client";

import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { KnowledgeDna } from "@/components/knowledge/KnowledgeDna";
import { PerspectiveToggle } from "@/components/lesson/PerspectiveToggle";
import { Badge } from "@/components/ui/Badge";
import { ETHICAL_HACKING_CAREER_PATH } from "@/content/career-paths/ethical-hacking";
import { getKnowledgeNodes } from "@/content/knowledge/nodes";
import { DEMO_AUTHENTICATION_PERSPECTIVES } from "@/content/perspectives/demo-authentication";
import { buildKnowledgeDnaView } from "@/lib/knowledge-graph";
import { useProgressStore } from "@/stores/progress-store";

const PHASE_LAB_NOTES: Record<string, string> = {
  "eh-phase-1":
    "Foundations may use manual VM-building courses (build-it-yourself) before any appliance.",
  "eh-phase-2":
    "Ethical Hacking Core introduces contained scenario labs on the future ReLearn Lab VM.",
  "eh-phase-3":
    "Red Team phases may reuse the same appliance with a red-operator (or similar) role login.",
  "eh-phase-4":
    "Blue Team phases reuse the same environment with analyst / admin role logins.",
  "eh-phase-5":
    "Purple Team phases switch roles in the same lab to map attacks to controls.",
  "eh-phase-6":
    "The Career Simulator may combine multiple scenario packs and role handoffs on one appliance.",
};

export default function EthicalHackingCareerPage() {
  const path = ETHICAL_HACKING_CAREER_PATH;
  const progressState = useProgressStore((s) => s);
  const nodes = getKnowledgeNodes();
  const dna = buildKnowledgeDnaView(
    nodes,
    path.featuredKnowledgeNodeId,
    progressState
  );

  return (
    <div>
      <PageHeader
        title={path.name}
        subtitle={path.overview}
        eyebrow="Career path · Coming soon"
        backHref="/certifications"
      />

      <div className="mb-8 flex flex-wrap gap-2">
        <Badge variant="warning">Planned</Badge>
        <Badge variant="default">Safe simulations only</Badge>
      </div>

      <p className="mb-4 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        {path.tagline}. Foundations reuse CCNA, Network+, Linux+, PowerShell, Security+,
        CySA+, and Computer Fundamentals. Offensive content stays conceptual and
        sandboxed — see the architecture doc in the repo.
      </p>

      <p className="mb-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        Labs remain locked until prerequisites and the required appliance version are
        satisfied. The appliance is not released yet — use web walkthroughs for now.{" "}
        <Link href="/labs/relearn-vm" className="text-accent hover:text-foreground">
          ReLearn Lab VM overview
        </Link>
      </p>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-4">Phases</h2>
        <ol className="divide-y divide-hairline">
          {path.phases.map((phase, index) => (
            <li key={phase.id} className="py-4">
              <div className="flex flex-wrap items-baseline gap-2">
                <span className="text-xs text-faint">{index + 1}</span>
                <h3 className="font-serif text-lg font-medium text-foreground">
                  {phase.title}
                </h3>
                <Badge variant="default">{phase.status}</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{phase.summary}</p>
              {PHASE_LAB_NOTES[phase.id] && (
                <p className="mt-2 text-xs text-faint">{PHASE_LAB_NOTES[phase.id]}</p>
              )}
            </li>
          ))}
        </ol>
      </section>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-4">Continuous mini-curriculum</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          HTTP/HTTPS → Authentication → Log Analysis → Incident Response → The Missing
          Patch — one path with Knowledge DNA handoffs.
        </p>
        <Link
          href="/career/ethical-hacking/journey/foundations"
          className="inline-flex min-h-12 items-center rounded-md border border-border px-4 py-2 text-sm text-accent hover:border-accent/50 hover:text-foreground"
        >
          Open foundations journey
        </Link>
      </section>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-4">Try the demo scenario</h2>
        <p className="mb-3 text-sm text-muted-foreground">
          The Missing Patch is a harmless blue → red → blue walkthrough with synthetic
          logs and predefined safe actions — no exploit payloads. A future scenario pack
          will target the ReLearn Lab VM.
        </p>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/career/ethical-hacking/scenarios/missing-patch"
            className="inline-flex min-h-12 items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
          >
            Open The Missing Patch
          </Link>
          <Link
            href="/cert/vm-lab"
            className="inline-flex min-h-12 items-center rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            VM Lab Foundations
          </Link>
          <Link
            href="/labs/relearn-vm"
            className="inline-flex min-h-12 items-center rounded-md border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
          >
            Lab VM plans
          </Link>
        </div>
      </section>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-4">Knowledge DNA sample</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Cross-Site Scripting as a graph of required knowledge, red/blue follow-ups,
          and locked labs. Completion uses your existing track mastery.
        </p>
        {dna ? (
          <KnowledgeDna view={dna} />
        ) : (
          <p className="text-sm text-faint">Featured node unavailable.</p>
        )}
      </section>

      <section className="mb-10 border-t border-hairline pt-6">
        <h2 className="eyebrow mb-4">Perspective toggle sample</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Same authentication concept — Neutral, Red, Blue, and Purple educational
          blocks (conceptual only).
        </p>
        <PerspectiveToggle perspectiveSet={DEMO_AUTHENTICATION_PERSPECTIVES} />
      </section>
    </div>
  );
}
