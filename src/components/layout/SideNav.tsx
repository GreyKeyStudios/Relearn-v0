"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  BookOpen,
  Compass,
  Dumbbell,
  FlaskConical,
  Network,
  RotateCcw,
} from "lucide-react";

const items = [
  { href: "/", label: "Focus", icon: Compass },
  { href: "/certifications", label: "Library", icon: BookOpen },
  { href: "/practice", label: "Practice", icon: Dumbbell },
  { href: "/review", label: "Review", icon: RotateCcw },
  { href: "/labs/relearn-vm", label: "Labs", icon: FlaskConical },
  { href: "/progress", label: "Progress", icon: BarChart3 },
  { href: "/career/ethical-hacking", label: "Career paths", icon: Network },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  if (href === "/certifications") {
    return pathname.startsWith("/certifications") || pathname.startsWith("/cert/") || pathname.startsWith("/learn/");
  }
  return pathname.startsWith(href);
}

export function SideNav() {
  const pathname = usePathname();

  return (
    <aside className="fixed inset-y-0 left-0 z-40 hidden w-60 border-r border-border bg-surface/90 px-4 py-7 backdrop-blur lg:flex lg:flex-col">
      <Link href="/" className="mb-10 flex items-center gap-3 px-2" aria-label="ReLearn focus">
        <span className="relative grid h-8 w-8 rotate-45 place-items-center rounded-[5px] border-2 border-primary">
          <span className="h-3 w-3 rounded-full border-2 border-primary" />
        </span>
        <span className="font-serif text-xl font-medium tracking-tight">ReLearn</span>
      </Link>

      <nav className="space-y-1" aria-label="Primary navigation">
        {items.map(({ href, label, icon: Icon }) => {
          const active = isActive(pathname, href);
          return (
            <Link
              key={href}
              href={href}
              className={`relative flex min-h-11 items-center gap-3 rounded-lg px-3 text-sm transition-colors ${
                active
                  ? "bg-muted text-foreground"
                  : "text-muted-foreground hover:bg-muted/65 hover:text-foreground"
              }`}
            >
              {active && <span className="absolute -left-4 h-7 w-0.5 bg-primary" />}
              <Icon className={`h-[18px] w-[18px] ${active ? "text-primary" : "text-faint"}`} />
              <span>{label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="mt-auto border-t border-hairline px-2 pt-5">
        <p className="eyebrow text-[10px]">Warm Knowledge Studio</p>
        <p className="mt-2 text-xs leading-relaxed text-faint">
          Learn, practice, prove, retain.
        </p>
      </div>
    </aside>
  );
}
