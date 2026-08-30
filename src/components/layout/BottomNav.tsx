"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { BookOpen, Compass, BarChart3, RotateCcw, Dumbbell } from "lucide-react";

const tabs = [
  { href: "/", label: "Focus", icon: Compass },
  { href: "/certifications", label: "Library", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: Dumbbell },
  { href: "/review", label: "Review", icon: RotateCcw },
  { href: "/progress", label: "Progress", icon: BarChart3 },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-border bg-surface/95 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-lg items-center justify-around px-2 pb-[env(safe-area-inset-bottom)] pt-2">
        {tabs.map(({ href, label, icon: Icon }) => {
          const active =
            href === "/"
              ? pathname === "/"
              : href === "/certifications"
                ? pathname.startsWith("/certifications") || pathname.startsWith("/cert/") || pathname.startsWith("/learn/")
                : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`flex min-h-12 min-w-16 flex-col items-center justify-center gap-1 rounded-lg px-3 py-1 text-xs transition-colors ${
                active ? "bg-primary/10 text-primary" : "text-faint hover:text-foreground"
              }`}
            >
              <Icon className="h-5 w-5" />
              <span>{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
