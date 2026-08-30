import Link from "next/link";
import { ArrowRight, Check, Circle, Lock, Piano, Sparkles } from "lucide-react";

const nodes = [
  { label: "Keyboard pattern", state: "learning" },
  { label: "Intervals", state: "next" },
  { label: "Scales", state: "locked" },
  { label: "Chords", state: "locked" },
];

export function LearningSystemHero() {
  return (
    <section className="relearn-card draft-grid mb-6 overflow-hidden rounded-[var(--radius)] border border-border bg-surface p-5 md:p-6">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,.82fr)_minmax(520px,1.18fr)] xl:items-center">
        <div>
          <p className="eyebrow mb-3">Performance path · Piano Foundations</p>
          <h2 className="max-w-xl font-serif text-2xl font-medium leading-tight text-foreground md:text-3xl">
            Play the pattern. ReLearn listens.
          </h2>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
            Learn on screen or connect a MIDI keyboard. ReLearn verifies notes, order,
            timing, and control without pretending creativity has one correct answer.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <Link
              href="/learn/piano-foundations"
              className="inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#b9872c]"
            >
              <Piano className="h-4 w-4" />
              Start Piano Foundations
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/practice" className="text-sm font-medium text-accent hover:text-foreground">
              Open practice room
            </Link>
          </div>
        </div>

        <div>
          <div className="overflow-x-auto pb-2">
            <div className="flex min-w-[520px] items-center">
              {nodes.map((node, index) => (
                <div key={node.label} className="contents">
                  <div
                    className={`min-w-28 rounded-md border p-3 ${
                      node.state === "learning"
                        ? "border-primary/55 bg-primary/10"
                        : "border-hairline bg-surface-raised/80"
                    }`}
                  >
                    <div className="mb-2 flex items-center gap-2">
                      {node.state === "learning" ? (
                        <Sparkles className="h-4 w-4 text-primary" />
                      ) : node.state === "locked" ? (
                        <Lock className="h-4 w-4 text-faint" />
                      ) : (
                        <Circle className="h-4 w-4 text-accent" />
                      )}
                      <span className="text-[10px] uppercase tracking-wider text-faint">
                        {node.state}
                      </span>
                    </div>
                    <p className="text-sm text-foreground">{node.label}</p>
                  </div>
                  {index < nodes.length - 1 && <div className="h-px w-8 bg-border" />}
                </div>
              ))}
            </div>
          </div>
          <div className="mt-3 flex items-start gap-3 border-t border-hairline pt-4">
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            <p className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground">Best next move:</span> discover
              the keyboard pattern physically before adding notation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
