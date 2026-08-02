"use client";

const KEYBOARD_NOTES = [
  { name: "C3", frequency: 130.81 },
  { name: "D3", frequency: 146.83 },
  { name: "E3", frequency: 164.81 },
  { name: "F3", frequency: 174.61 },
  { name: "G3", frequency: 196 },
  { name: "A3", frequency: 220 },
  { name: "B3", frequency: 246.94 },
  { name: "C4", frequency: 261.63 },
] as const;

interface SynthKeyboardProps {
  activeNote: string | null;
  onPress: (frequency: number, label: string) => void;
  onRelease: () => void;
}

export function SynthKeyboard({ activeNote, onPress, onRelease }: SynthKeyboardProps) {
  return (
    <div className="mt-3">
      <div className="mb-2 flex items-center justify-between gap-3">
        <p className="text-sm font-medium text-foreground">Playable notes</p>
        <p className="text-xs text-sky-400" role="status">
          {activeNote ? `Active note: ${activeNote}` : "No note held"}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-2 sm:grid-cols-8" role="group" aria-label="One-octave synth keyboard">
        {KEYBOARD_NOTES.map((note) => (
          <button
            key={note.name}
            type="button"
            aria-label={`Play ${note.name}`}
            aria-pressed={activeNote === note.name}
            onPointerDown={() => onPress(note.frequency, note.name)}
            onPointerUp={onRelease}
            onPointerCancel={onRelease}
            onBlur={() => {
              if (activeNote === note.name) onRelease();
            }}
            onKeyDown={(event) => {
              if ((event.key === " " || event.key === "Enter") && !event.repeat) {
                event.preventDefault();
                onPress(note.frequency, note.name);
              }
            }}
            onKeyUp={(event) => {
              if (event.key === " " || event.key === "Enter") onRelease();
            }}
            className={`min-h-14 rounded-md border text-sm font-medium ${
              activeNote === note.name
                ? "border-emerald-400 bg-emerald-500/20 text-emerald-200"
                : "border-border bg-zinc-100 text-zinc-900 hover:bg-white"
            }`}
          >
            {note.name}
          </button>
        ))}
      </div>
    </div>
  );
}
