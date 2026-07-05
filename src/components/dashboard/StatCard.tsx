import { type ReactNode } from "react";

interface StatCardProps {
  label: string;
  value: string | number;
  icon?: ReactNode;
}

/**
 * Quiet, understated stat used in the dashboard footer strip. Big serif
 * numeral over a small-caps label — deliberately not a boxed "metric tile".
 */
export function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="flex flex-col gap-1 px-1 py-2 text-center">
      <span className="font-serif text-3xl font-medium leading-none text-foreground">
        {value}
      </span>
      <span className="eyebrow">{label}</span>
    </div>
  );
}
