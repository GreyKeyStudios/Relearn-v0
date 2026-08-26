"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import type { NoteEvent } from "@/lib/interactive-learning/types";

export type MidiStatus = "idle" | "requesting" | "connected" | "no-device" | "unsupported" | "denied";

export function useMidiInput(onNote: (event: NoteEvent) => void) {
  const [status, setStatus] = useState<MidiStatus>("idle");
  const [inputCount, setInputCount] = useState(0);
  const accessRef = useRef<MIDIAccess | null>(null);
  const onNoteRef = useRef(onNote);

  useEffect(() => {
    onNoteRef.current = onNote;
  }, [onNote]);

  const bindInputs = useCallback((access: MIDIAccess) => {
    const inputs = Array.from(access.inputs.values()).filter((input) => input.state === "connected");
    setInputCount(inputs.length);
    setStatus(inputs.length > 0 ? "connected" : "no-device");
    for (const input of inputs) {
      input.onmidimessage = ({ data }: MIDIMessageEvent) => {
        if (!data || data.length < 3) return;
        const [command, note, velocity] = data;
        const type = (command & 0xf0) === 0x90 && velocity > 0 ? "note-on" : (command & 0xf0) === 0x80 || ((command & 0xf0) === 0x90 && velocity === 0) ? "note-off" : null;
        if (!type) return;
        onNoteRef.current({ note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity, type, timestamp: Date.now(), source: "midi" });
      };
    }
  }, []);

  const connect = useCallback(async () => {
    if (!("requestMIDIAccess" in navigator)) {
      setStatus("unsupported");
      return false;
    }
    setStatus("requesting");
    try {
      const access = await navigator.requestMIDIAccess();
      accessRef.current = access;
      access.onstatechange = () => bindInputs(access);
      bindInputs(access);
      return true;
    } catch {
      setStatus("denied");
      return false;
    }
  }, [bindInputs]);

  useEffect(() => () => {
    const access = accessRef.current;
    if (!access) return;
    access.onstatechange = null;
    for (const input of access.inputs.values()) input.onmidimessage = null;
  }, []);

  return { status, inputCount, connect };
}
