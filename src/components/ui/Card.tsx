import { type ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}

export function Card({ children, className = "", onClick }: CardProps) {
  const Component = onClick ? "button" : "div";
  return (
    <Component
      onClick={onClick}
      className={`rounded-lg border border-border bg-surface p-4 text-left ${onClick ? "cursor-pointer transition-colors hover:border-hairline hover:bg-surface-raised" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
