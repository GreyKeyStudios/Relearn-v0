import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  "data-testid"?: string;
}

export function Card({
  children,
  className = "",
  onClick,
  "data-testid": dataTestId,
}: CardProps) {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      onClick={onClick}
      data-testid={dataTestId}
      className={`relearn-card rounded-[var(--radius)] border border-border bg-surface p-4 text-left ${onClick ? "cursor-pointer transition-colors hover:border-primary/35 hover:bg-surface-raised" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
