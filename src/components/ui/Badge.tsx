import { type ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

const variants = {
  default: "border border-border bg-muted text-muted-foreground",
  success: "border border-accent/20 bg-accent/10 text-accent",
  warning: "border border-primary/25 bg-primary/10 text-[#8a631c]",
  info: "border border-fragile/20 bg-fragile/10 text-fragile",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
