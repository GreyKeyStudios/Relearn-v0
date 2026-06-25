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
      className={`rounded-2xl border border-zinc-800 bg-zinc-900 p-4 text-left ${onClick ? "cursor-pointer transition-colors hover:border-zinc-700 hover:bg-zinc-800/80" : ""} ${className}`}
    >
      {children}
    </Component>
  );
}
