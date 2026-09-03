import { Monitor, UserRound } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export default function SettingsPage() {
  return (
    <div className="mx-auto max-w-3xl pb-16">
      <PageHeader
        title="Settings"
        subtitle="Preferences for this device. Nothing here is shared or synced yet."
        eyebrow="Settings"
      />

      <section className="rounded-2xl border border-hairline bg-surface p-5 md:p-6">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div className="min-w-0">
            <h2 className="font-serif text-xl">Appearance</h2>
            <p className="mt-1 max-w-md text-sm leading-relaxed text-muted-foreground">
              Light is the Warm Knowledge Studio palette. Dark is the warm graphite
              palette, carrying the same meanings: gold for what is active, teal for
              what is proven, lavender for what needs review.
            </p>
          </div>
          <div className="w-40 shrink-0">
            <ThemeToggle />
          </div>
        </div>
        <p className="mt-4 flex items-center gap-2 border-t border-hairline pt-4 text-xs text-faint">
          <Monitor className="h-3.5 w-3.5 shrink-0" />
          On System, ReLearn follows your operating system and changes with it.
        </p>
      </section>

      <section className="mt-5 rounded-2xl border border-dashed border-hairline p-5 md:p-6">
        <div className="flex items-start gap-3">
          <UserRound className="mt-0.5 h-5 w-5 shrink-0 text-faint" />
          <div>
            <h2 className="font-serif text-xl">Account</h2>
            <p className="mt-1 max-w-lg text-sm leading-relaxed text-muted-foreground">
              There are no accounts yet. Your progress, course checkpoints, and theme
              live in this browser only — clearing site data resets them, and nothing
              follows you to another device.
            </p>
            <p className="mt-3 max-w-lg text-sm leading-relaxed text-faint">
              Sign-in and synced progress are planned. Until then ReLearn will not
              imply that your work is backed up anywhere.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
