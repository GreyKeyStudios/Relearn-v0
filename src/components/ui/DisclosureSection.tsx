import type { ReactNode } from "react";

interface DisclosureSectionProps {
  title: string;
  children: ReactNode;
  /** Optional accent class for the summary label (e.g. text-emerald-400) */
  titleClassName?: string;
  className?: string;
  defaultOpen?: boolean;
}

/**
 * Collapsed-by-default disclosure matching cheat-sheet accessibility (<details>/<summary>).
 */
export function DisclosureSection({
  title,
  children,
  titleClassName = "text-foreground",
  className = "",
  defaultOpen = false,
}: DisclosureSectionProps) {
  return (
    <details
      className={`relearn-card mb-4 rounded-[var(--radius)] border border-border bg-surface p-4 ${className}`}
      {...(defaultOpen ? { open: true } : {})}
    >
      <summary
        className={`cursor-pointer select-none text-sm font-semibold uppercase tracking-wide ${titleClassName}`}
      >
        {title}
      </summary>
      <div className="mt-3">{children}</div>
    </details>
  );
}
