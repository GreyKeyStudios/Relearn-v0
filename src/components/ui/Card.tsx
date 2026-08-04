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
      className={`rounded-lg border border-border bg-surface p-4 text-left ${onClick ? "cursor-pointer transition-colors hover:border-hairline hover:bg-surface-raised" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
