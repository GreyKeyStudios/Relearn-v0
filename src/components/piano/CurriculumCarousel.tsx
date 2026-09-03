"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * A horizontally paged reader for reference content that would otherwise be a
 * very long scroll. Each child becomes one full-width panel.
 *
 * Native scroll-snap does the paging, so the browser keeps its own momentum,
 * trackpad, touch and find-in-page behaviour — nothing is scroll-jacked. The
 * buttons, dots and arrow keys are conveniences layered on top of that.
 */
export function CurriculumCarousel({ labels, children }: { labels: string[]; children: ReactNode[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const panelRefs = useRef<(HTMLElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const count = labels.length;

  // The panel covering the middle of the viewport is the one being read.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (!visible) return;
        const index = panelRefs.current.indexOf(visible.target as HTMLElement);
        if (index >= 0) setActive(index);
      },
      { root: track, threshold: [0.5, 0.75] },
    );
    panelRefs.current.forEach((panel) => panel && observer.observe(panel));
    return () => observer.disconnect();
  }, [count]);

  const goTo = useCallback((index: number) => {
    const clamped = Math.max(0, Math.min(count - 1, index));
    const target = panelRefs.current[clamped];
    const track = trackRef.current;
    if (!target || !track) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    // Scroll the track itself rather than scrollIntoView, which would also scroll
    // the page when a panel sits partly outside the viewport.
    track.scrollTo({
      left: track.scrollLeft + (target.getBoundingClientRect().left - track.getBoundingClientRect().left),
      behavior: reduced ? "auto" : "smooth",
    });
    setActive(clamped);
  }, [count]);

  // Deep links keep working: #unit-notes opens on that panel.
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return;
    const index = panelRefs.current.findIndex((panel) => panel?.id === id);
    if (index >= 0) panelRefs.current[index]?.scrollIntoView({ block: "nearest", inline: "start" });
  }, []);

  const onKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "ArrowRight") { event.preventDefault(); goTo(active + 1); }
    if (event.key === "ArrowLeft") { event.preventDefault(); goTo(active - 1); }
    if (event.key === "Home") { event.preventDefault(); goTo(0); }
    if (event.key === "End") { event.preventDefault(); goTo(count - 1); }
  };

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        role="group"
        aria-roledescription="carousel"
        aria-label="Curriculum units"
        className="flex min-h-0 flex-1 snap-x snap-mandatory gap-5 overflow-x-auto overflow-y-hidden rounded-2xl outline-none [-ms-overflow-style:none] [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-primary/40 [&::-webkit-scrollbar]:hidden"
      >
        {children.map((panel, index) => (
          <section
            key={labels[index]}
            id={`panel-${labels[index].toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
            ref={(node) => { panelRefs.current[index] = node; }}
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${count}: ${labels[index]}`}
            className="flex min-w-full shrink-0 snap-start flex-col overflow-y-auto"
          >
            {/* The entrance animation lives on an inner wrapper: a transform on the
                snap child itself makes the snap engine recompute mid-scroll and
                yanks the carousel back to where it started. */}
            <div className={`min-h-0 flex-1 transition-[opacity,transform] duration-500 ease-out motion-reduce:transition-none ${index === active ? "translate-y-0 opacity-100" : "translate-y-1 opacity-40"}`}>
              {panel}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-3 flex shrink-0 items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => goTo(active - 1)}
          disabled={active === 0}
          aria-label="Previous unit"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-hairline px-3 text-sm text-faint transition-colors hover:text-foreground disabled:opacity-30 disabled:hover:text-faint"
        >
          <ChevronLeft className="h-4 w-4" /> <span className="hidden sm:inline">Previous</span>
        </button>

        <div className="flex min-w-0 flex-col items-center gap-1.5">
          <p className="truncate text-xs text-faint" aria-live="polite">{active + 1} / {count} · {labels[active]}</p>
          <div className="flex flex-wrap justify-center gap-1.5">
            {labels.map((label, index) => (
              <button
                key={label}
                type="button"
                onClick={() => goTo(index)}
                aria-label={`Go to ${label}`}
                aria-current={index === active}
                className={`h-1.5 rounded-full transition-all ${index === active ? "w-6 bg-primary" : "w-1.5 bg-hairline hover:bg-faint"}`}
              />
            ))}
          </div>
        </div>

        <button
          type="button"
          onClick={() => goTo(active + 1)}
          disabled={active === count - 1}
          aria-label="Next unit"
          className="inline-flex min-h-10 items-center gap-1.5 rounded-lg border border-hairline px-3 text-sm text-faint transition-colors hover:text-foreground disabled:opacity-30 disabled:hover:text-faint"
        >
          <span className="hidden sm:inline">Next</span> <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
