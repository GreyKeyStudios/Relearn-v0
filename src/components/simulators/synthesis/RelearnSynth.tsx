"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { CheckCircle2, Circle, Pause, Play, Redo2, RotateCcw, SlidersHorizontal, Undo2, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import type { SimulatorComponentProps } from "@/content/simulators/registry";
import { getSynthChallenge } from "@/content/simulators/synthesis/challenges";
import { SynthKeyboard } from "./SynthKeyboard";
import { SynthPatchTransfer } from "./SynthPatchTransfer";
import {
  DEFAULT_PATCH_SLOTS,
  gradeSynthChallenge,
  parsePatchSlots,
  type PatchCriterion,
  type SynthPatch,
  type SynthPatchSlots,
  type SynthWaveform,
} from "@/lib/relearn-synth";
import { EMPTY_SYNTH_HISTORY, recordSynthChange, redoSynthChange, undoSynthChange } from "@/lib/synth-history";

interface AudioGraph {
  context: AudioContext;
  oscillator: OscillatorNode;
  filter: BiquadFilterNode;
  envelope: GainNode;
  master: GainNode;
  analyser: AnalyserNode;
  lfo: OscillatorNode;
  lfoGain: GainNode;
}

function setAudioParam(parameter: AudioParam, value: number, context: AudioContext) {
  parameter.setTargetAtTime(value, context.currentTime, 0.01);
}

function configureLfo(graph: AudioGraph, patch: SynthPatch) {
  setAudioParam(graph.lfo.frequency, patch.lfoRate, graph.context);
  graph.lfoGain.disconnect();
  if (!patch.lfoEnabled || patch.lfoDepth === 0) {
    graph.lfoGain.gain.setValueAtTime(0, graph.context.currentTime);
    return;
  }
  if (patch.lfoTarget === "filter") {
    const safeFilterDepth = Math.min(patch.cutoff * 0.8, 3000) * patch.lfoDepth;
    graph.lfoGain.gain.setValueAtTime(safeFilterDepth, graph.context.currentTime);
    graph.lfoGain.connect(graph.filter.frequency);
  } else {
    graph.lfoGain.gain.setValueAtTime(100 * patch.lfoDepth, graph.context.currentTime);
    graph.lfoGain.connect(graph.oscillator.detune);
  }
}

function RangeControl({ id, label, value, min, max, step, display, criterion, criteriaVisible, disabled, onChange }: {
  id: string;
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  display: string;
  criterion?: PatchCriterion;
  criteriaVisible: boolean;
  disabled: boolean;
  onChange: (value: number) => void;
}) {
  const targetId = `${id}-target`;
  const stateClass = !criterion
    ? "border-border"
    : !criteriaVisible
      ? "border-sky-500/50"
      : criterion.passed
        ? "border-emerald-500/70"
        : "border-amber-500/70";
  return (
    <div className={`rounded-lg border bg-surface-raised p-3 ${stateClass} ${disabled ? "opacity-70" : ""}`} data-challenge-parameter={criterion?.parameter}>
      <div className="mb-2 flex items-center justify-between gap-3">
        <label htmlFor={id} className="text-sm font-medium text-foreground">{label}</label>
        <output htmlFor={id} className="font-mono text-xs text-sky-400">{display}</output>
      </div>
      <input id={id} type="range" min={min} max={max} step={step} value={value} disabled={disabled} aria-describedby={criterion ? targetId : undefined} onChange={(event) => onChange(Number(event.target.value))} className="min-h-11 w-full accent-emerald-500" />
      {criterion ? (
        <p id={targetId} className={`mt-1 text-xs ${criteriaVisible && !criterion.passed ? "text-amber-400" : "text-sky-400"}`}>
          {criteriaVisible ? criterion.feedback : `Target: ${criterion.label}`}
        </p>
      ) : null}
    </div>
  );
}

export function RelearnSynth({ onComplete, assignmentId }: SimulatorComponentProps) {
  const challenge = getSynthChallenge(assignmentId);
  const defaultSlots = useMemo<SynthPatchSlots>(() => ({
    version: 2,
    activeSlot: "A",
    A: challenge.starterPatch,
    B: challenge.comparisonPatch,
  }), [challenge]);
  const storageKey = `relearn:synth:patches:v2:${challenge.id}`;
  const legacyStorageKey = `relearn:synth:patches:v1:${challenge.id}`;
  const [slots, setSlots] = useState<SynthPatchSlots>(DEFAULT_PATCH_SLOTS);
  const [audioState, setAudioState] = useState<"off" | "ready" | "playing" | "error">("off");
  const [message, setMessage] = useState("Audio is off. Start it when you are ready; your browser requires this click.");
  const [criteriaVisible, setCriteriaVisible] = useState(false);
  const [hasAuditioned, setHasAuditioned] = useState(false);
  const [activeNote, setActiveNote] = useState<string | null>(null);
  const [history, setHistory] = useState(EMPTY_SYNTH_HISTORY);
  const [showAllPanels, setShowAllPanels] = useState(false);
  const graphRef = useRef<AudioGraph | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);
  const storageLoadedRef = useRef(false);
  const patch = slots[slots.activeSlot];
  const criteria = gradeSynthChallenge(patch, challenge);
  const isReference = slots.activeSlot === "B";
  const panelVisible = (panel: (typeof challenge.visiblePanels)[number]) =>
    showAllPanels || challenge.visiblePanels.includes(panel);
  const criterionFor = (parameter: keyof SynthPatch) =>
    criteria.find((criterion) => criterion.parameter === parameter);

  useEffect(() => {
    let active = true;
    queueMicrotask(() => {
      if (!active) return;
      const saved = window.localStorage.getItem(storageKey) ??
        window.localStorage.getItem(legacyStorageKey);
      setSlots(parsePatchSlots(saved, defaultSlots));
      storageLoadedRef.current = true;
    });
    return () => {
      active = false;
    };
  }, [defaultSlots, legacyStorageKey, storageKey]);

  useEffect(() => {
    if (!storageLoadedRef.current) return;
    window.localStorage.setItem(storageKey, JSON.stringify(slots));
  }, [slots, storageKey]);

  const stopDrawing = useCallback(() => {
    if (animationRef.current !== null) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  const drawAnalyser = useCallback(() => {
    const graph = graphRef.current;
    const canvas = canvasRef.current;
    if (!graph || !canvas) return;
    const context2d = canvas.getContext("2d");
    if (!context2d) return;
    const width = canvas.width;
    const height = canvas.height;
    const waveform = new Uint8Array(graph.analyser.fftSize);
    const spectrum = new Uint8Array(graph.analyser.frequencyBinCount);

    const draw = () => {
      graph.analyser.getByteTimeDomainData(waveform);
      graph.analyser.getByteFrequencyData(spectrum);
      context2d.clearRect(0, 0, width, height);
      context2d.fillStyle = "#09090b";
      context2d.fillRect(0, 0, width, height);
      context2d.strokeStyle = "#34d399";
      context2d.lineWidth = 2;
      context2d.beginPath();
      waveform.forEach((sample, index) => {
        const x = (index / (waveform.length - 1)) * width;
        const y = (sample / 255) * (height * 0.48);
        if (index === 0) context2d.moveTo(x, y);
        else context2d.lineTo(x, y);
      });
      context2d.stroke();
      const bins = Math.min(96, spectrum.length);
      const barWidth = width / bins;
      context2d.fillStyle = "#38bdf8";
      for (let index = 0; index < bins; index += 1) {
        const barHeight = (spectrum[index] / 255) * height * 0.46;
        context2d.fillRect(index * barWidth, height - barHeight, Math.max(1, barWidth - 1), barHeight);
      }
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        animationRef.current = requestAnimationFrame(draw);
      }
    };
    stopDrawing();
    draw();
  }, [stopDrawing]);

  const silence = useCallback((releaseSeconds = 0.03) => {
    const graph = graphRef.current;
    if (!graph) return;
    const now = graph.context.currentTime;
    graph.envelope.gain.cancelScheduledValues(now);
    graph.envelope.gain.setTargetAtTime(0, now, Math.max(0.005, releaseSeconds / 4));
    setAudioState("ready");
  }, []);

  useEffect(() => {
    const graph = graphRef.current;
    if (!graph) return;
    graph.oscillator.type = patch.waveform;
    setAudioParam(graph.oscillator.frequency, patch.frequency, graph.context);
    setAudioParam(graph.filter.frequency, patch.cutoff, graph.context);
    setAudioParam(graph.filter.Q, patch.resonance, graph.context);
    setAudioParam(graph.master.gain, patch.masterGain, graph.context);
    configureLfo(graph, patch);
  }, [patch]);

  useEffect(() => () => {
    stopDrawing();
    const graph = graphRef.current;
    graphRef.current = null;
    if (graph) void graph.context.close();
  }, [stopDrawing]);

  async function startAudio() {
    try {
      if (graphRef.current) {
        await graphRef.current.context.resume();
        setAudioState("ready");
        setMessage("Audio ready. Hold Play note to hear the active patch.");
        return;
      }
      const context = new AudioContext({ latencyHint: "interactive" });
      const oscillator = context.createOscillator();
      const filter = context.createBiquadFilter();
      const envelope = context.createGain();
      const master = context.createGain();
      const limiter = context.createDynamicsCompressor();
      const analyser = context.createAnalyser();
      const lfo = context.createOscillator();
      const lfoGain = context.createGain();
      oscillator.type = patch.waveform;
      oscillator.frequency.value = patch.frequency;
      filter.type = "lowpass";
      filter.frequency.value = patch.cutoff;
      filter.Q.value = patch.resonance;
      envelope.gain.value = 0;
      master.gain.value = patch.masterGain;
      limiter.threshold.value = -12;
      limiter.knee.value = 6;
      limiter.ratio.value = 12;
      limiter.attack.value = 0.003;
      limiter.release.value = 0.15;
      analyser.fftSize = 1024;
      lfo.type = "sine";
      lfo.frequency.value = patch.lfoRate;
      lfoGain.gain.value = 0;
      oscillator.connect(filter).connect(envelope).connect(master).connect(limiter).connect(analyser).connect(context.destination);
      lfo.connect(lfoGain);
      oscillator.start();
      lfo.start();
      graphRef.current = { context, oscillator, filter, envelope, master, analyser, lfo, lfoGain };
      configureLfo(graphRef.current, patch);
      await context.resume();
      setAudioState("ready");
      setMessage("Audio ready. Hold Play note to hear the active patch.");
      drawAnalyser();
    } catch {
      setAudioState("error");
      setMessage("Audio could not start. Check browser audio permission and your selected output device, then try again.");
    }
  }

  function playNote(frequency = patch.frequency, noteLabel = "Patch pitch") {
    const graph = graphRef.current;
    if (!graph) {
      setMessage("Start audio first, then hold Play note.");
      return;
    }
    const now = graph.context.currentTime;
    graph.oscillator.frequency.setTargetAtTime(frequency, now, 0.005);
    graph.envelope.gain.cancelScheduledValues(now);
    graph.envelope.gain.setValueAtTime(Math.max(0.0001, graph.envelope.gain.value), now);
    graph.envelope.gain.linearRampToValueAtTime(1, now + patch.attack);
    graph.envelope.gain.linearRampToValueAtTime(patch.sustain, now + patch.attack + patch.decay);
    setAudioState("playing");
    setHasAuditioned(true);
    setActiveNote(noteLabel);
    setMessage(`Playing ${noteLabel} on patch ${slots.activeSlot}. Release the button to hear the release stage.`);
  }

  function releaseNote() {
    silence(patch.release);
    setActiveNote(null);
    const graph = graphRef.current;
    if (graph) setAudioParam(graph.oscillator.frequency, patch.frequency, graph.context);
  }

  function updatePatch<K extends keyof SynthPatch>(key: K, value: SynthPatch[K]) {
    if (isReference || patch[key] === value) return;
    setHistory((current) => recordSynthChange(current, patch));
    setSlots((current) => ({ ...current, [current.activeSlot]: { ...current[current.activeSlot], [key]: value } }));
    setCriteriaVisible(false);
  }

  function chooseSlot(activeSlot: "A" | "B") {
    silence();
    setSlots((current) => ({ ...current, activeSlot }));
    setCriteriaVisible(false);
  }

  function resetPatch() {
    if (isReference) return;
    silence();
    setHistory((current) => recordSynthChange(current, patch));
    setSlots((current) => ({ ...current, [current.activeSlot]: { ...challenge.starterPatch } }));
    setCriteriaVisible(false);
    setMessage(`Patch ${slots.activeSlot} reset to the safe Init state.`);
  }

  function undoWorkspaceChange() {
    if (isReference) return;
    const result = undoSynthChange(history, patch);
    if (!result.patch) return;
    silence();
    setSlots((current) => ({ ...current, A: result.patch! }));
    setHistory(result.history);
    setCriteriaVisible(false);
    setMessage("Undid the latest workspace A parameter change.");
  }

  function redoWorkspaceChange() {
    if (isReference) return;
    const result = redoSynthChange(history, patch);
    if (!result.patch) return;
    silence();
    setSlots((current) => ({ ...current, A: result.patch! }));
    setHistory(result.history);
    setCriteriaVisible(false);
    setMessage("Redid the next workspace A parameter change.");
  }

  function importWorkspacePatch(importedPatch: SynthPatch) {
    if (isReference) return;
    silence();
    setHistory((current) => recordSynthChange(current, patch));
    setSlots((current) => ({ ...current, A: importedPatch, activeSlot: "A" }));
    setCriteriaVisible(false);
    setMessage("Imported a validated patch into workspace A.");
  }

  function checkPatch() {
    setCriteriaVisible(true);
    const score = criteria.filter((criterion) => criterion.passed).length;
    if (slots.activeSlot === "B") {
      setMessage("Patch B is the guided comparison. Listen and inspect it, then rebuild the target in workspace A.");
      return;
    }
    setMessage(score === criteria.length ? "Objective target met in workspace A. Listen once more, then complete the exercise." : `${score} of ${criteria.length} target traits are set. Adjust one failed parameter at a time.`);
  }

  function completeExercise() {
    onComplete({
      score: criteria.filter((criterion) => criterion.passed).length,
      total: criteria.length,
      weakConcepts: criteria.filter((criterion) => !criterion.passed).map((criterion) => criterion.weakConcept),
      completed: true,
    });
  }

  return (
    <div className="flex flex-col gap-4" data-testid="relearn-synth">
      <Card className="border-emerald-900/60 bg-emerald-950/15">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-emerald-400">Safe audio</p>
            <p className="mt-1 text-sm text-muted-foreground" role="status" aria-live="polite">{message}</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button type="button" variant="secondary" onClick={startAudio}>
              {audioState === "off" || audioState === "error" ? <Volume2 className="mr-2 h-4 w-4" /> : <CheckCircle2 className="mr-2 h-4 w-4" />}
              {audioState === "off" || audioState === "error" ? "Start audio" : "Audio ready"}
            </Button>
            <Button type="button" variant="danger" onClick={() => silence(0.01)} aria-label="Panic: mute the synth immediately"><VolumeX className="mr-2 h-4 w-4" /> Panic</Button>
          </div>
        </div>
      </Card>

      <Card>
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div><h3 className="font-semibold text-foreground">Patch comparison</h3><p className="text-sm text-muted-foreground">{challenge.compareLabel}. Change one parameter at a time and compare.</p></div>
          <div className="flex gap-2" role="group" aria-label="Select patch slot">
            {(["A", "B"] as const).map((slot) => <Button key={slot} type="button" variant={slots.activeSlot === slot ? "primary" : "secondary"} aria-pressed={slots.activeSlot === slot} onClick={() => chooseSlot(slot)}>Patch {slot}</Button>)}
          </div>
        </div>
        {isReference ? <p className="mb-3 text-sm text-sky-400">Guided B is read-only. Hear and inspect it, then rebuild the idea in A.</p> : null}
        <div className="grid gap-2 sm:grid-cols-5" aria-label="Signal path">
          {[["1", "Source", patch.waveform === "sawtooth" ? "saw" : patch.waveform], ["2", "Pitch", `${Math.round(patch.frequency)} Hz`], ["3", "Filter", `${Math.round(patch.cutoff)} Hz`], ["4", "Amp", `S ${Math.round(patch.sustain * 100)}%`], ["5", "Hear", `${Math.round(patch.masterGain * 100)}% safe gain`]].map(([step, label, value]) => <div key={step} className="rounded-lg border border-border bg-surface-raised p-3"><p className="text-xs text-muted-foreground">{step}. {label}</p><p className="mt-1 font-mono text-sm text-foreground">{value}</p></div>)}
        </div>
      </Card>

      <Card className="border-sky-900/50 bg-sky-950/10">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div><p className="text-xs font-semibold uppercase tracking-wide text-sky-400">Lesson focus</p><p className="mt-1 text-sm text-muted-foreground">This lesson shows {challenge.visiblePanels.join(", ")}. Hidden panels keep their authored values.</p></div>
          <Button type="button" variant="secondary" onClick={() => setShowAllPanels((current) => !current)}><SlidersHorizontal className="mr-2 h-4 w-4" /> {showAllPanels ? "Return to lesson focus" : "Show all controls"}</Button>
        </div>
      </Card>

      <Card>
        <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
          <div><h3 className="font-semibold text-foreground">Hear and see</h3><p className="text-sm text-muted-foreground">Top: waveform. Bottom: spectrum. Lower your system volume before long listening.</p></div>
          <Button type="button" onPointerDown={() => playNote()} onPointerUp={releaseNote} onPointerCancel={releaseNote} onKeyDown={(event) => { if ((event.key === " " || event.key === "Enter") && !event.repeat) { event.preventDefault(); playNote(); } }} onKeyUp={(event) => { if (event.key === " " || event.key === "Enter") releaseNote(); }}>
            {audioState === "playing" ? <Pause className="mr-2 h-4 w-4" /> : <Play className="mr-2 h-4 w-4" />} Hold to play note
          </Button>
        </div>
        <canvas ref={canvasRef} width={900} height={260} role="img" aria-label="Live oscilloscope above a frequency spectrum" className="h-52 w-full rounded-lg border border-border bg-zinc-950" />
        <SynthKeyboard activeNote={activeNote} onPress={playNote} onRelease={releaseNote} />
      </Card>

      {panelVisible("oscillator") || panelVisible("filter") ? <div className="grid gap-4 lg:grid-cols-2">
        {panelVisible("oscillator") ? (
        <Card>
          <h3 className="mb-3 font-semibold text-foreground">Oscillator and output</h3>
          <fieldset className={`mb-3 rounded-lg border p-3 ${criterionFor("waveform") ? !criteriaVisible ? "border-sky-500/50" : criterionFor("waveform")?.passed ? "border-emerald-500/70" : "border-amber-500/70" : "border-border"}`} data-challenge-parameter={criterionFor("waveform")?.parameter}><legend className="px-1 text-sm font-medium text-foreground">Waveform</legend><div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(["sine", "triangle", "sawtooth", "square"] as SynthWaveform[]).map((waveform) => <button key={waveform} type="button" disabled={isReference} aria-pressed={patch.waveform === waveform} onClick={() => updatePatch("waveform", waveform)} className={`min-h-11 rounded-md border px-3 text-sm capitalize disabled:opacity-60 ${patch.waveform === waveform ? "border-emerald-500 bg-emerald-500/10 text-emerald-300" : "border-border bg-surface-raised text-muted-foreground"}`}>{waveform === "sawtooth" ? "Saw" : waveform}</button>)}
          </div>{criterionFor("waveform") ? <p className={`mt-2 text-xs ${criteriaVisible && !criterionFor("waveform")?.passed ? "text-amber-400" : "text-sky-400"}`}>{criteriaVisible ? criterionFor("waveform")?.feedback : `Target: ${criterionFor("waveform")?.label}`}</p> : null}</fieldset>
          <div className="grid gap-3"><RangeControl id="synth-frequency" label="Pitch frequency" value={patch.frequency} min={55} max={880} step={1} display={`${Math.round(patch.frequency)} Hz`} criterion={criterionFor("frequency")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("frequency", value)} /><RangeControl id="synth-gain" label="Safe master gain" value={patch.masterGain} min={0} max={0.25} step={0.01} display={`${Math.round(patch.masterGain * 100)}%`} criterion={criterionFor("masterGain")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("masterGain", value)} /></div>
        </Card>
        ) : null}
        {panelVisible("filter") ? <Card><h3 className="mb-3 font-semibold text-foreground">Low-pass filter</h3><div className="grid gap-3"><RangeControl id="synth-cutoff" label="Cutoff" value={patch.cutoff} min={120} max={12000} step={10} display={`${Math.round(patch.cutoff)} Hz`} criterion={criterionFor("cutoff")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("cutoff", value)} /><RangeControl id="synth-resonance" label="Resonance" value={patch.resonance} min={0.1} max={15} step={0.1} display={`${patch.resonance.toFixed(1)} Q`} criterion={criterionFor("resonance")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("resonance", value)} /></div></Card> : null}
      </div> : null}

      {panelVisible("envelope") ? <Card><h3 className="mb-1 font-semibold text-foreground">Amplifier envelope</h3><p className="mb-3 text-sm text-muted-foreground">Attack and decay shape the beginning. Sustain is a level, not a time. Release starts after note-off.</p><div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4"><RangeControl id="synth-attack" label="Attack" value={patch.attack} min={0.005} max={2} step={0.005} display={`${Math.round(patch.attack * 1000)} ms`} criterion={criterionFor("attack")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("attack", value)} /><RangeControl id="synth-decay" label="Decay" value={patch.decay} min={0.02} max={2} step={0.01} display={`${Math.round(patch.decay * 1000)} ms`} criterion={criterionFor("decay")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("decay", value)} /><RangeControl id="synth-sustain" label="Sustain" value={patch.sustain} min={0} max={1} step={0.01} display={`${Math.round(patch.sustain * 100)}%`} criterion={criterionFor("sustain")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("sustain", value)} /><RangeControl id="synth-release" label="Release" value={patch.release} min={0.02} max={3} step={0.01} display={`${Math.round(patch.release * 1000)} ms`} criterion={criterionFor("release")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("release", value)} /></div></Card> : null}

      {panelVisible("modulation") ? <Card>
        <div className="mb-3 flex flex-wrap items-start justify-between gap-3"><div><h3 className="font-semibold text-foreground">LFO modulation</h3><p className="mt-1 text-sm text-muted-foreground">An LFO moves one parameter repeatedly. Filter creates a wah-like motion; pitch creates vibrato.</p></div><Button type="button" disabled={isReference} variant={patch.lfoEnabled ? "primary" : "secondary"} aria-pressed={patch.lfoEnabled} onClick={() => updatePatch("lfoEnabled", !patch.lfoEnabled)}>LFO {patch.lfoEnabled ? "on" : "off"}</Button></div>
        <fieldset className="mb-3"><legend className="mb-2 text-sm font-medium text-foreground">Modulation target</legend><div className="grid grid-cols-2 gap-2" role="group" aria-label="LFO modulation target">{(["filter", "pitch"] as const).map((target) => <button key={target} type="button" disabled={isReference} aria-pressed={patch.lfoTarget === target} onClick={() => updatePatch("lfoTarget", target)} className={`min-h-11 rounded-md border px-3 text-sm capitalize disabled:opacity-60 ${patch.lfoTarget === target ? "border-emerald-500 bg-emerald-500/10 text-emerald-300" : "border-border bg-surface-raised text-muted-foreground"}`}>{target === "filter" ? "Filter cutoff" : "Pitch"}</button>)}</div></fieldset>
        <div className="grid gap-3 sm:grid-cols-2"><RangeControl id="synth-lfo-rate" label="LFO rate" value={patch.lfoRate} min={0.1} max={20} step={0.1} display={`${patch.lfoRate.toFixed(1)} Hz`} criterion={criterionFor("lfoRate")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("lfoRate", value)} /><RangeControl id="synth-lfo-depth" label="LFO depth" value={patch.lfoDepth} min={0} max={1} step={0.01} display={`${Math.round(patch.lfoDepth * 100)}%`} criterion={criterionFor("lfoDepth")} criteriaVisible={criteriaVisible} disabled={isReference} onChange={(value) => updatePatch("lfoDepth", value)} /></div>
        <p className="mt-3 text-xs text-muted-foreground">Depth is safety-scaled: filter motion stays within 80% of the base cutoff; pitch motion is capped at one semitone.</p>
      </Card> : null}

      <Card>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between"><div><p className="text-xs font-semibold uppercase tracking-wide text-sky-400">Lesson-defined objective</p><h3 className="mt-1 font-semibold text-foreground">{challenge.title}</h3><p className="mt-1 text-sm text-muted-foreground">{challenge.brief}</p></div><div className="flex flex-col gap-2 sm:flex-row"><Button type="button" variant="secondary" onClick={undoWorkspaceChange} disabled={isReference || history.past.length === 0}><Undo2 className="mr-2 h-4 w-4" /> Undo A</Button><Button type="button" variant="secondary" onClick={redoWorkspaceChange} disabled={isReference || history.future.length === 0}><Redo2 className="mr-2 h-4 w-4" /> Redo A</Button><Button type="button" variant="secondary" onClick={resetPatch} disabled={isReference}><RotateCcw className="mr-2 h-4 w-4" /> Reset A</Button></div></div>
        <ul className="mt-4 space-y-2" aria-live="polite">{criteria.map((criterion) => <li key={criterion.id} className="flex items-start gap-2 text-sm text-foreground">{criteriaVisible && criterion.passed ? <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" aria-hidden="true" /> : <Circle className={`mt-0.5 h-4 w-4 shrink-0 ${criteriaVisible ? "text-amber-400" : "text-muted-foreground"}`} aria-hidden="true" />}<span><span className="font-medium">{criterion.label}{criteriaVisible ? ` — ${criterion.passed ? "met" : "adjust this"}` : ""}</span>{criteriaVisible ? <span className={`block text-xs ${criterion.passed ? "text-emerald-400" : "text-amber-400"}`}>{criterion.feedback}</span> : null}</span></li>)}</ul>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row"><Button type="button" onClick={checkPatch}>Check objective settings</Button><Button type="button" variant="secondary" onClick={completeExercise} disabled={slots.activeSlot !== "A" || !criteriaVisible || !hasAuditioned || criteria.some((criterion) => !criterion.passed)}>Complete exercise</Button></div>
        {slots.activeSlot === "B" && criteriaVisible ? <p className="mt-2 text-sm text-sky-400">B is a guided reference. Switch to workspace A and rebuild what you heard.</p> : null}
        {!hasAuditioned && criteriaVisible ? <p className="mt-2 text-sm text-amber-400">Start audio and hold Play note once before completing. Hearing is part of the exercise.</p> : null}
      </Card>

      <SynthPatchTransfer patch={patch} readOnly={isReference} onImport={importWorkspacePatch} />
    </div>
  );
}
