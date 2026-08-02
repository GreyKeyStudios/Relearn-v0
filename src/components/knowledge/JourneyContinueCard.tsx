import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface JourneyNextStep {
  title: string;
  href: string;
  reason: string;
}

interface JourneyContinueCardProps {
  next: JourneyNextStep;
  className?: string;
}

/** Continues a cross-topic mini-curriculum after perspectives / Knowledge DNA. */
export function JourneyContinueCard({
  next,
  className = "",
}: JourneyContinueCardProps) {
  return (
    <aside
      className={`rounded-xl border border-sky-900/40 bg-sky-950/20 p-4 ${className}`}
      aria-label="Continue the learning path"
    >
      <p className="eyebrow text-sky-300">Continue the path</p>
      <p className="mt-2 text-sm text-muted-foreground">{next.reason}</p>
      <Link
        href={next.href}
        className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-medium text-sky-400 hover:text-sky-300"
      >
        {next.title}
        <ArrowRight className="h-4 w-4" aria-hidden />
      </Link>
    </aside>
  );
}
