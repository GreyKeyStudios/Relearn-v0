import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Badge } from "@/components/ui/Badge";
import { FOUNDATIONS_TO_MISSING_PATCH } from "@/content/career-paths/foundations-journey";

export default function FoundationsJourneyPage() {
  return (
    <div>
      <PageHeader
        title="Foundations → Missing Patch"
        subtitle="One continuous mini-curriculum: how the web and identity work, how logs and response connect, then a safe blue/red/blue scenario."
        eyebrow="Learner journey"
        backHref="/career/ethical-hacking"
      />

      <div className="mb-6 flex flex-wrap gap-2">
        <Badge variant="info">Knowledge DNA path</Badge>
        <Badge variant="default">Web walkthrough at the end</Badge>
      </div>

      <p className="mb-8 max-w-2xl text-sm text-muted-foreground">
        Complete each step in order when you can. Perspective blocks and Knowledge DNA on
        the lessons show why the next topic unlocks. Practical VM work stays in{" "}
        <Link href="/cert/vm-lab" className="text-sky-400 hover:text-sky-300">
          VM Lab Foundations
        </Link>
        ; this path is the conceptual + scenario chain.
      </p>

      <ol className="divide-y divide-hairline border-t border-hairline">
        {FOUNDATIONS_TO_MISSING_PATCH.map((step, index) => (
          <li key={step.id} className="py-5">
            <div className="flex flex-wrap items-baseline gap-2">
              <span className="text-xs text-faint">{index + 1}</span>
              <h2 className="font-serif text-lg font-medium text-foreground">
                {step.title}
              </h2>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{step.summary}</p>
            <Link
              href={step.href}
              className="mt-3 inline-flex min-h-11 items-center text-sm text-sky-400 hover:text-sky-300"
            >
              Open step {index + 1}
            </Link>
          </li>
        ))}
      </ol>

      <p className="mt-8 text-sm text-muted-foreground">
        After Missing Patch, review{" "}
        <Link href="/labs/relearn-vm" className="text-sky-400 hover:text-sky-300">
          ReLearn Lab VM
        </Link>{" "}
        plans — appliance packs stay planned until the OVA exists.
      </p>
    </div>
  );
}
