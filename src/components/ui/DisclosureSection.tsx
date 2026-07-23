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
  titleClassName = "text-zinc-300",
  className = "",
  defaultOpen = false,
}: DisclosureSectionProps) {
  return (
    <details
      className={`mb-4 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 ${className}`}
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
