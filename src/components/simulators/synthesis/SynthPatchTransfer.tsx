"use client";

import { useRef, useState } from "react";
import { Clipboard, Download, FileUp, Upload } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  parseSynthPatchExport,
  serializeSynthPatch,
  type SynthPatch,
} from "@/lib/relearn-synth";

interface SynthPatchTransferProps {
  patch: SynthPatch;
  readOnly: boolean;
  onImport: (patch: SynthPatch) => void;
}

export function SynthPatchTransfer({ patch, readOnly, onImport }: SynthPatchTransferProps) {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [message, setMessage] = useState(
    "Export workspace A as readable JSON, or paste a trusted ReLearn Synth v2 patch."
  );
  const [error, setError] = useState(false);

  function exportPatch() {
    setText(serializeSynthPatch(patch));
    setError(false);
    setMessage("Patch exported to the text box. Copy it somewhere safe.");
  }

  function downloadPatch() {
    const output = serializeSynthPatch(patch);
    const url = URL.createObjectURL(new Blob([output], { type: "application/json" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "relearn-synth-patch.relearn-synth.json";
    link.click();
    URL.revokeObjectURL(url);
    setText(output);
    setError(false);
    setMessage("Patch file downloaded. Keep it with your project notes or share it with another ReLearn learner.");
  }

  async function loadPatchFile(file: File | undefined) {
    if (!file) return;
    if (file.size > 20_000) {
      setError(true);
      setMessage("That patch file is unexpectedly large. ReLearn patch files are under 20 KB.");
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }
    const output = await file.text();
    const result = parseSynthPatchExport(output);
    setText(output);
    setError(!result.ok);
    setMessage(result.ok
      ? "Valid patch file loaded for review. Choose Import to A when you are ready."
      : result.error);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }

  async function copyPatch() {
    const output = text || serializeSynthPatch(patch);
    setText(output);
    try {
      await navigator.clipboard.writeText(output);
      setError(false);
      setMessage("Patch copied to the clipboard.");
    } catch {
      setError(true);
      setMessage("Clipboard access was unavailable. Select and copy the text manually.");
    }
  }

  function importPatch() {
    const result = parseSynthPatchExport(text);
    if (!result.ok) {
      setError(true);
      setMessage(result.error);
      return;
    }
    onImport(result.patch);
    setError(false);
    setMessage("Patch loaded into workspace A. Undo is available if you want to go back.");
  }

  return (
    <Card>
      <div className="mb-3">
        <h3 className="font-semibold text-foreground">Patch transfer</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Text export is portable and inspectable. It contains parameters only—never executable code.
        </p>
      </div>
      <label htmlFor="synth-patch-text" className="text-sm font-medium text-foreground">
        ReLearn Synth patch JSON
      </label>
      <textarea
        id="synth-patch-text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        rows={7}
        spellCheck={false}
        className="mt-2 w-full rounded-md border border-border bg-zinc-950 p-3 font-mono text-xs text-zinc-200"
        placeholder='{"format":"relearn-synth-patch", ...}'
      />
      <p className={`mt-2 text-sm ${error ? "text-amber-400" : "text-sky-400"}`} role="status" aria-live="polite">
        {message}
      </p>
      <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
        <Button type="button" variant="secondary" onClick={exportPatch} disabled={readOnly}>
          <Download className="mr-2 h-4 w-4" /> Export A
        </Button>
        <Button type="button" variant="secondary" onClick={downloadPatch} disabled={readOnly}>
          <Download className="mr-2 h-4 w-4" /> Download file
        </Button>
        <Button type="button" variant="secondary" onClick={copyPatch} disabled={readOnly}>
          <Clipboard className="mr-2 h-4 w-4" /> Copy
        </Button>
        <input ref={fileInputRef} id="synth-patch-file" type="file" accept=".json,.relearn-synth.json,application/json" className="sr-only" disabled={readOnly} onChange={(event) => void loadPatchFile(event.target.files?.[0])} />
        <Button type="button" variant="secondary" onClick={() => fileInputRef.current?.click()} disabled={readOnly}>
          <FileUp className="mr-2 h-4 w-4" /> Load file
        </Button>
        <Button type="button" onClick={importPatch} disabled={readOnly || !text.trim()}>
          <Upload className="mr-2 h-4 w-4" /> Import to A
        </Button>
      </div>
      {readOnly ? (
        <p className="mt-2 text-xs text-sky-400">Switch to workspace A to export or import. Guided B stays protected.</p>
      ) : null}
    </Card>
  );
}
