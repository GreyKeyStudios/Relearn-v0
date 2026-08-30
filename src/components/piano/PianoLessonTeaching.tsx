"use client";

import { useRef, useState } from "react";
import { Check, Play, Volume2 } from "lucide-react";
import { PIANO_LESSON_TEACHING } from "@/content/piano-lesson-teaching";
import { midiNoteToName } from "@/lib/interactive-learning/notes";
import { Button } from "@/components/ui/Button";

export function PianoLessonTeaching({ lessonId }: { lessonId: string }) {
  const content = PIANO_LESSON_TEACHING[lessonId];
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef<AudioContext | null>(null);
  if (!content) return null;

  const listen = async () => {
    if (!content.listenNotes || playing) return;
    const context = audioRef.current ?? new AudioContext();
    audioRef.current = context;
    if (context.state === "suspended") await context.resume();
    setPlaying(true);
    let cursor = context.currentTime + 0.06;
    content.listenNotes.forEach((note, index) => {
      const durationMs = content.listenDurationsMs?.[index] ?? 430;
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.type = "triangle";
      oscillator.frequency.value = 440 * 2 ** ((note - 69) / 12);
      gain.gain.setValueAtTime(0.0001, cursor);
      gain.gain.exponentialRampToValueAtTime(index === 0 ? 0.17 : 0.12, cursor + 0.018);
      gain.gain.exponentialRampToValueAtTime(0.0001, cursor + Math.min(durationMs / 1000 * 0.76, 0.62));
      oscillator.connect(gain).connect(context.destination);
      oscillator.start(cursor);
      oscillator.stop(cursor + Math.min(durationMs / 1000 * 0.8, 0.66));
      cursor += durationMs / 1000;
    });
    window.setTimeout(() => setPlaying(false), Math.max(300, (cursor - context.currentTime) * 1000));
  };

  return <section className="mt-6 space-y-5 rounded-2xl border border-hairline bg-surface p-5 md:p-6">
    <div><p className="eyebrow">Learn the idea</p><p className="mt-3 max-w-3xl text-base leading-7 text-foreground">{content.explanation}</p></div>
    {content.listenNotes ? <div className="rounded-xl border border-primary/25 bg-primary/5 p-4"><div className="flex flex-wrap items-center justify-between gap-3"><div><p className="text-sm font-medium text-foreground">Listen before you play</p><p className="mt-1 text-xs text-faint">{content.listenNotes.map(midiNoteToName).join(" · ")}</p></div><Button variant="secondary" onClick={() => void listen()} disabled={playing}>{playing ? <Volume2 className="h-4 w-4 animate-pulse" /> : <Play className="h-4 w-4" />}{playing ? "Playing…" : content.listenLabel ?? "Hear the example"}</Button></div></div> : null}
    <div><p className="text-sm font-medium text-foreground">Do this now</p><ol className="mt-3 grid gap-2">{content.steps.map((step, index) => <li key={step} className="flex gap-3 rounded-xl bg-background/45 p-3 text-sm leading-6 text-muted-foreground"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 text-xs text-primary">{index + 1}</span><span>{step}</span></li>)}</ol></div>
    {content.physicalCheck ? <div className="rounded-xl border border-accent/25 bg-accent/5 p-4"><p className="text-sm font-medium text-foreground">Comfort check</p><ul className="mt-2 grid gap-2 sm:grid-cols-2">{content.physicalCheck.map((item) => <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-accent" />{item}</li>)}</ul></div> : null}
    {content.notice ? <div className="rounded-xl bg-background/55 p-4"><p className="eyebrow">Listen and notice</p><p className="mt-2 text-sm leading-6 text-muted-foreground">{content.notice}</p></div> : null}
  </section>;
}
