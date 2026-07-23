import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  backHref?: string;
  eyebrow?: string;
}

export function PageHeader({ title, subtitle, backHref, eyebrow }: PageHeaderProps) {
  return (
    <header className="mb-8">
      {backHref && (
        <Link
          href={backHref}
          className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </Link>
      )}
      {eyebrow && <p className="eyebrow mb-2">{eyebrow}</p>}
      <h1 className="text-balance font-serif text-3xl font-medium tracking-tight text-foreground">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
    </header>
  );
}
