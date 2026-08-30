"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { VirtualKeyboard } from "./VirtualKeyboard";
import { isBlackKey } from "@/lib/interactive-learning/notes";

const WHITE_ONE_OCTAVE = new Set([60, 62, 64, 65, 67, 69, 71, 72]);
const FULL_ONE_OCTAVE = new Set(Array.from({ length: 13 }, (_, index) => 60 + index));
const THREE_OCTAVES = new Set(Array.from({ length: 25 }, (_, index) => 48 + index));
const CONCERT_NOTES = Array.from({ length: 88 }, (_, index) => 21 + index);
const CONCERT_WHITE_KEYS = CONCERT_NOTES.filter((note) => !isBlackKey(note));
const CONCERT_BLACK_KEYS = CONCERT_NOTES.filter((note) => isBlackKey(note));

function ConcertPianoPreview() {
  return (
    <div className="mb-5">
      <div className="relative h-24 overflow-hidden rounded-xl border-4 border-zinc-950 bg-zinc-950 shadow-[0_12px_24px_rgba(0,0,0,0.3)]" aria-label="Miniature 88-key concert piano">
        <div className="flex h-full rounded-lg bg-white">
          {CONCERT_WHITE_KEYS.map((note) => <span key={note} className="flex-1 border-r border-zinc-300 bg-gradient-to-b from-white to-zinc-100 last:border-r-0" />)}
        </div>
        {CONCERT_BLACK_KEYS.map((note) => {
          const whiteBefore = CONCERT_WHITE_KEYS.filter((whiteNote) => whiteNote < note).length;
          return <span key={note} className="absolute top-0 h-[62%] w-[1.15%] -translate-x-1/2 rounded-b-sm bg-gradient-to-r from-zinc-950 via-zinc-800 to-zinc-950 shadow-[0_3px_3px_rgba(0,0,0,0.45)]" style={{ left: `${(whiteBefore / CONCERT_WHITE_KEYS.length) * 100}%` }} />;
        })}
      </div>
      <div className="mt-3 flex items-center justify-center gap-3 text-center text-xs text-faint"><span>88 keys</span><span aria-hidden>·</span><span>52 white</span><span aria-hidden>·</span><span>36 black</span><span aria-hidden>·</span><span>a little over 7 octaves</span></div>
    </div>
  );
}

const STAGES = [
  { eyebrow: "One key", title: "This is a white key.", body: "Piano keys come in two colors. Start with the larger white keys—the surface your fingers land on first.", visible: new Set([62]), emphasized: new Set([62]), start: 60, end: 72 },
  { eyebrow: "The natural notes", subtitle: "The white keys", title: "Now meet the rest of the white keys.", body: "There are seven different white-key notes in this pattern. The eighth white key begins the pattern again.", visible: WHITE_ONE_OCTAVE, emphasized: WHITE_ONE_OCTAVE, start: 60, end: 72, labels: true },
  { eyebrow: "A second color", title: "This is a black key.", body: "Black keys sit above and between some white keys. They will become landmarks before they become note names.", visible: new Set([...WHITE_ONE_OCTAVE, 61]), emphasized: new Set([61]), start: 60, end: 72 },
  { eyebrow: "One complete octave", title: "Five black keys complete the pattern.", body: "Notice their grouping: two black keys, then three black keys. That 2–3 shape is the keyboard’s repeating visual map.", visible: FULL_ONE_OCTAVE, emphasized: new Set([61, 63, 66, 68, 70]), start: 60, end: 72 },
  { eyebrow: "Your first landmark", title: "This white key is C.", body: "C is our first landmark. It isn’t more musical than the other notes, but it is easy to find: look for two black keys, then move one key left. Starting on C also lets us build our first scale using only white keys.", visible: FULL_ONE_OCTAVE, emphasized: new Set([60]), start: 60, end: 72, labels: true },
  { eyebrow: "The key of C", title: "C D E F G A B are the natural notes.", body: "Play only the white keys from C to the next C and you have the natural notes of the C major scale. We will build that scale soon.", visible: FULL_ONE_OCTAVE, emphasized: WHITE_ONE_OCTAVE, start: 60, end: 72, labels: true },
  { eyebrow: "Zoom out", title: "The same octave appears higher and lower.", body: "We expanded the view, but the rule did not change: groups of two and three black keys, with C just left of each group of two.", visible: THREE_OCTAVES, emphasized: new Set([48, 60, 72]), start: 48, end: 72, labels: true },
  { eyebrow: "The full instrument", title: "A concert piano has 88 keys.", body: "That spans a little more than seven octaves. It looks enormous, but it is the same twelve-note pattern repeated from low to high.", visible: THREE_OCTAVES, emphasized: new Set([48, 60, 72]), start: 48, end: 72 },
] as const;

export function PianoPatternIntro({ stage, onNext, onReplay }: { stage: number; onNext: () => void; onReplay: () => void }) {
  const current = STAGES[stage];
  const last = stage === STAGES.length - 1;
  return (
    <section className="rounded-2xl border border-primary/30 bg-[radial-gradient(circle_at_top_right,color-mix(in_oklab,var(--primary)_12%,transparent),transparent_45%)] p-5 md:p-7">
      <div key={stage} className="experience-enter">
        <div className="mb-6 flex items-start justify-between gap-4"><div><p className="eyebrow mb-2">{current.eyebrow} · {stage + 1} of {STAGES.length}</p>{"subtitle" in current && <p className="mb-2 text-sm font-medium text-accent">{current.subtitle}</p>}<h2 className="font-serif text-3xl leading-tight">{current.title}</h2><p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{current.body}</p></div><span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-hairline text-sm text-primary">{stage + 1}</span></div>
        {last && <ConcertPianoPreview />}
        {stage === 0 ? <div className="mx-auto flex w-32 justify-center rounded-xl border-4 border-zinc-950 bg-zinc-950 p-0 shadow-[0_14px_28px_rgba(0,0,0,0.35)]"><div className="flex h-52 w-28 items-end justify-center rounded-b-lg border border-zinc-300 bg-gradient-to-b from-white to-zinc-100 pb-4 text-xs text-zinc-500">white key</div></div> : <VirtualKeyboard activeNotes={new Set()} startNote={current.start} endNote={current.end} visibleNotes={current.visible} emphasizedNotes={current.emphasized} labelNaturals={"labels" in current && current.labels} />}
        <div className="mt-5 flex flex-wrap items-center justify-between gap-3"><button type="button" onClick={onReplay} className="inline-flex items-center gap-2 text-sm text-faint hover:text-foreground"><RotateCcw className="h-4 w-4" /> Replay from one key</button><Button onClick={onNext}>{last ? "Now find the pattern yourself" : "Reveal the next idea"}<ArrowRight className="ml-2 h-4 w-4" /></Button></div>
      </div>
    </section>
  );
}

export const PIANO_PATTERN_INTRO_STAGE_COUNT = STAGES.length;
