"use client";

import { isBlackKey, midiNoteToName } from "@/lib/interactive-learning/notes";

/**
 * labelMode controls printed key names:
 * - "naturals"  every white key is named (orientation and teaching screens)
 * - "landmarks" only C is named, plus the Middle C badge (default)
 * - "none"      nothing is named until a key is played, so landmark-finding
 *               exercises cannot be solved by reading the answer off the keys
 */
export type KeyboardLabelMode = "naturals" | "landmarks" | "none";

export function VirtualKeyboard({ activeNotes, onPlay, onRelease, startNote = 48, endNote = 72, visibleNotes, emphasizedNotes, labelMode = "landmarks", showCaption = true }: { activeNotes: Set<number>; onPlay?: (note: number) => void; onRelease?: (note: number) => void; startNote?: number; endNote?: number; visibleNotes?: Set<number>; emphasizedNotes?: Set<number>; labelMode?: KeyboardLabelMode; showCaption?: boolean }) {
  const notes = Array.from({ length: endNote - startNote + 1 }, (_, index) => startNote + index);
  const whiteNotes = notes.filter((note) => !isBlackKey(note));
  const blackNotes = notes.filter((note) => isBlackKey(note));
  const isVisible = (note: number) => !visibleNotes || visibleNotes.has(note);
  const blackKeyPosition = (note: number) => (whiteNotes.filter((whiteNote) => whiteNote < note).length / whiteNotes.length) * 100;
  const noteLetter = (note: number) => midiNoteToName(note).replace(/[0-9]/g, "");
  // In "none" mode a name appears only as feedback for a key the learner just played.
  const keyLabel = (note: number, active: boolean, emphasized: boolean) => {
    if (labelMode === "none") return active ? noteLetter(note) : "";
    if (note === 60) return <span className="flex flex-col items-center leading-tight"><span>C</span><span className="mt-1 text-[8px] font-semibold uppercase tracking-wide">Middle C</span></span>;
    return labelMode === "naturals" || noteLetter(note) === "C" || active || emphasized ? noteLetter(note) : "";
  };
  return (
    <div className="w-full max-w-full overflow-x-auto pb-2">
      <div className="relative min-w-[456px] rounded-xl border-4 border-[#171614] bg-[#171614] shadow-[0_14px_28px_rgba(0,0,0,0.35)]" role="group" aria-label="Playable on-screen piano keyboard">
        <div className="flex h-32 overflow-hidden rounded-lg bg-[#fdfcf8] [@media(min-height:820px)]:h-40 [@media(min-height:960px)]:h-48">
          {whiteNotes.map((note) => {
          const active = activeNotes.has(note);
          const emphasized = emphasizedNotes?.has(note);
          return (
            <button
              key={note}
              type="button"
              onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); onPlay?.(note); }}
              onPointerUp={() => onRelease?.(note)}
              onPointerCancel={() => onRelease?.(note)}
              onMouseUp={() => onRelease?.(note)}
              className={`relative flex min-w-7 flex-1 items-end justify-center border-r border-[#b8b1a7] pb-2 text-[10px] sm:min-w-9 transition-all duration-500 last:border-r-0 ${!isVisible(note) ? "opacity-10" : active ? "bg-accent text-accent-foreground" : emphasized ? "z-[1] bg-gradient-to-b from-[#fffefa] to-[#e7e1d7] text-[#514c46] shadow-[inset_0_0_0_3px_var(--accent)]" : "bg-gradient-to-b from-[#fffefa] to-[#e7e1d7] text-[#69645d] hover:from-white hover:to-[#f1ece4]"}`}
              aria-label={`Play ${midiNoteToName(note)}`}
            >
              {keyLabel(note, active, Boolean(emphasized))}
            </button>
          );
          })}
        </div>
        {blackNotes.map((note) => {
          const active = activeNotes.has(note);
          const emphasized = emphasizedNotes?.has(note);
          return <button key={note} type="button" onPointerDown={(event) => { event.currentTarget.setPointerCapture(event.pointerId); onPlay?.(note); }} onPointerUp={() => onRelease?.(note)} onPointerCancel={() => onRelease?.(note)} onMouseUp={() => onRelease?.(note)} aria-label={`Play ${midiNoteToName(note)}`} className={`absolute top-0 z-10 h-[62%] w-[4.25%] -translate-x-1/2 rounded-b-md border shadow-[0_5px_5px_rgba(0,0,0,0.45)] transition-all duration-500 ${!isVisible(note) ? "pointer-events-none scale-y-0 opacity-0" : active ? "border-accent bg-accent text-accent-foreground" : emphasized ? "border-accent bg-gradient-to-r from-[#11100f] via-[#34312d] to-[#11100f] ring-2 ring-accent ring-offset-2 ring-offset-[#171614]" : "border-black bg-gradient-to-r from-[#11100f] via-[#34312d] to-[#11100f] hover:via-[#494540]"}`} style={{ left: `${blackKeyPosition(note)}%`, transformOrigin: "top" }}><span className="sr-only">{midiNoteToName(note)}</span></button>;
        })}
      </div>
      {showCaption && <p className="mt-2 text-center text-xs text-faint">Click or tap any key to play. A MIDI keyboard is optional.</p>}
    </div>
  );
}
