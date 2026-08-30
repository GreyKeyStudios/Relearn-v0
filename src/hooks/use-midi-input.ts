"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { midiNoteToName, midiNoteToPitchClass } from "@/lib/interactive-learning/notes";
import type { NoteEvent } from "@/lib/interactive-learning/types";

export type MidiStatus = "idle" | "requesting" | "connected" | "no-device" | "unsupported" | "denied";

type MidiSnapshot = { status: MidiStatus; inputCount: number };

let access: MIDIAccess | null = null;
let snapshot: MidiSnapshot = { status: "idle", inputCount: 0 };
let connectionRequest: Promise<boolean> | null = null;
const stateListeners = new Set<(value: MidiSnapshot) => void>();
const noteListeners = new Set<(event: NoteEvent) => void>();

function publish(next: MidiSnapshot) {
  snapshot = next;
  stateListeners.forEach((listener) => listener(snapshot));
}

function bindInputs(midiAccess: MIDIAccess) {
  const inputs = Array.from(midiAccess.inputs.values()).filter((input) => input.state === "connected");
  publish({ status: inputs.length > 0 ? "connected" : "no-device", inputCount: inputs.length });
  for (const input of inputs) {
    input.onmidimessage = ({ data }: MIDIMessageEvent) => {
      if (!data || data.length < 3) return;
      const [command, note, velocity] = data;
      const type = (command & 0xf0) === 0x90 && velocity > 0 ? "note-on" : (command & 0xf0) === 0x80 || ((command & 0xf0) === 0x90 && velocity === 0) ? "note-off" : null;
      if (!type) return;
      const event: NoteEvent = { note, noteName: midiNoteToName(note), pitchClass: midiNoteToPitchClass(note), velocity, type, timestamp: Date.now(), source: "midi" };
      noteListeners.forEach((listener) => listener(event));
    };
  }
}

async function connectMidi() {
  if (access) {
    bindInputs(access);
    return snapshot.status === "connected";
  }
  if (connectionRequest) return connectionRequest;
  if (!("requestMIDIAccess" in navigator)) {
    publish({ status: "unsupported", inputCount: 0 });
    return false;
  }
  publish({ status: "requesting", inputCount: 0 });
  connectionRequest = navigator.requestMIDIAccess().then((midiAccess) => {
    access = midiAccess;
    access.onstatechange = () => bindInputs(midiAccess);
    bindInputs(midiAccess);
    return snapshot.status === "connected";
  }).catch(() => {
    publish({ status: "denied", inputCount: 0 });
    return false;
  }).finally(() => {
    connectionRequest = null;
  });
  return connectionRequest;
}

export function useMidiInput(onNote: (event: NoteEvent) => void) {
  const [localSnapshot, setLocalSnapshot] = useState(snapshot);
  const onNoteRef = useRef(onNote);

  useEffect(() => {
    onNoteRef.current = onNote;
  }, [onNote]);

  useEffect(() => {
    const stateListener = (value: MidiSnapshot) => setLocalSnapshot(value);
    const noteListener = (event: NoteEvent) => onNoteRef.current(event);
    stateListeners.add(stateListener);
    noteListeners.add(noteListener);
    return () => {
      stateListeners.delete(stateListener);
      noteListeners.delete(noteListener);
    };
  }, []);

  const connect = useCallback(() => connectMidi(), []);
  return { status: localSnapshot.status, inputCount: localSnapshot.inputCount, connect };
}
