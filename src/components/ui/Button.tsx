import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
}

const variants = {
  primary:
    "bg-primary text-primary-foreground hover:opacity-90 active:opacity-80",
  secondary:
    "bg-surface-raised text-foreground hover:bg-muted border border-border",
  ghost: "bg-transparent text-muted-foreground hover:bg-surface-raised",
  danger: "bg-primary/90 text-primary-foreground hover:bg-primary",
};

export function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`inline-flex min-h-12 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
