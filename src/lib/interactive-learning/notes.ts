const NOTE_NAMES = ["C", "C♯", "D", "D♯", "E", "F", "F♯", "G", "G♯", "A", "A♯", "B"];

export function midiNoteToPitchClass(note: number): number {
  return ((note % 12) + 12) % 12;
}

export function midiNoteToName(note: number): string {
  const pitchClass = midiNoteToPitchClass(note);
  const octave = Math.floor(note / 12) - 1;
  return `${NOTE_NAMES[pitchClass]}${octave}`;
}

export function isBlackKey(note: number): boolean {
  return [1, 3, 6, 8, 10].includes(midiNoteToPitchClass(note));
}
