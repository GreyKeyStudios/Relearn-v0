import fs from "node:fs";
import path from "node:path";
import type { Page } from "@playwright/test";
import {
  LEARNER_PERSONA,
  type CheckpointId,
  type EvidenceCheckpoint,
  type EvidenceManifest,
} from "../../scripts/audit-judge/types";

const VIEWPORT = "390x844" as const;
const MAX_VISIBLE_CHARS = 4000;

export function evidenceDir(topicId: string): string {
  return path.join(process.cwd(), "reports", "ccna-evidence", topicId);
}

function cleanVisibleText(raw: string): string {
  return raw.replace(/\s+/g, " ").trim().slice(0, MAX_VISIBLE_CHARS);
}

export async function collectPageMeta(page: Page): Promise<{
  url: string;
  visibleText: string;
  buttons: string[];
}> {
  const url = page.url();
  const visibleText = cleanVisibleText(
    await page.locator("main").innerText().catch(() => page.locator("body").innerText())
  );

  const buttons = await page.evaluate(() => {
    const nodes = Array.from(
      document.querySelectorAll("main button, main a, button, a")
    ) as HTMLElement[];
    const labels: string[] = [];
    for (const el of nodes) {
      const t = (el.innerText || el.getAttribute("aria-label") || "").replace(/\s+/g, " ").trim();
      if (t && t.length < 80 && !labels.includes(t)) labels.push(t);
      if (labels.length >= 20) break;
    }
    return labels;
  });

  return { url, visibleText, buttons };
}

export class EvidenceSession {
  readonly topicId: string;
  readonly topicTitle: string;
  readonly domainName: string;
  private captured = new Set<CheckpointId>();
  private checkpoints: EvidenceCheckpoint[] = [];
  private index = 0;
  private lastAction = "opened lesson";
  private dir: string;

  constructor(opts: { topicId: string; topicTitle: string; domainName: string }) {
    this.topicId = opts.topicId;
    this.topicTitle = opts.topicTitle;
    this.domainName = opts.domainName;
    this.dir = evidenceDir(opts.topicId);
    fs.rmSync(this.dir, { recursive: true, force: true });
    fs.mkdirSync(this.dir, { recursive: true });
  }

  setPreviousAction(action: string) {
    this.lastAction = action;
  }

  has(checkpoint: CheckpointId): boolean {
    return this.captured.has(checkpoint);
  }

  async capture(
    page: Page,
    checkpoint: CheckpointId,
    stepNumber: number
  ): Promise<EvidenceCheckpoint | null> {
    if (this.captured.has(checkpoint)) return null;
    this.captured.add(checkpoint);
    this.index += 1;
    const nn = String(this.index).padStart(2, "0");
    const screenshotRelPath = `${nn}-${checkpoint}.png`;
    const screenshotAbs = path.join(this.dir, screenshotRelPath);

    await page.screenshot({ path: screenshotAbs, fullPage: true });
    const meta = await collectPageMeta(page);

    const bundle: EvidenceCheckpoint = {
      topicId: this.topicId,
      topicTitle: this.topicTitle,
      domainName: this.domainName,
      checkpoint,
      stepNumber,
      totalWalkSteps: 0,
      viewport: VIEWPORT,
      url: meta.url,
      learnerPersona: LEARNER_PERSONA,
      previousAction: this.lastAction,
      visibleText: meta.visibleText,
      buttons: meta.buttons,
      screenshotRelPath,
    };

    fs.writeFileSync(
      path.join(this.dir, `${nn}-${checkpoint}.json`),
      JSON.stringify(bundle, null, 2),
      "utf8"
    );
    this.checkpoints.push(bundle);
    return bundle;
  }

  finalize(totalWalkSteps: number, expected: CheckpointId[]): EvidenceManifest {
    for (const c of this.checkpoints) {
      c.totalWalkSteps = totalWalkSteps;
    }
    // Rewrite JSON files with final totalWalkSteps
    for (const c of this.checkpoints) {
      const match = c.screenshotRelPath.replace(/\.png$/, ".json");
      fs.writeFileSync(path.join(this.dir, match), JSON.stringify(c, null, 2), "utf8");
    }

    const missingCheckpoints = expected.filter((id) => !this.captured.has(id));
    const manifest: EvidenceManifest = {
      topicId: this.topicId,
      topicTitle: this.topicTitle,
      domainName: this.domainName,
      capturedAt: new Date().toISOString(),
      totalWalkSteps,
      checkpoints: this.checkpoints,
      missingCheckpoints,
    };
    fs.writeFileSync(
      path.join(this.dir, "manifest.json"),
      JSON.stringify(manifest, null, 2),
      "utf8"
    );
    return manifest;
  }
}
