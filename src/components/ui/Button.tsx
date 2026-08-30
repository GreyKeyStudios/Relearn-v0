import { type ButtonHTMLAttributes, type ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "danger";
  children: ReactNode;
}

const variants = {
  primary:
    "border border-[#ae7f27] bg-primary text-primary-foreground shadow-[0_1px_1px_rgb(66_45_8_/_0.12)] hover:bg-[#b9872c] active:bg-[#a97927]",
  secondary:
    "bg-surface-raised text-foreground hover:border-primary/40 hover:bg-muted border border-border",
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
      className={`inline-flex min-h-11 items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition-all disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
