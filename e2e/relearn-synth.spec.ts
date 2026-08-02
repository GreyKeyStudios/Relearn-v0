import { expect, test } from "@playwright/test";
import { gotoHydrated, seedProfile } from "./helpers/seed";

test.describe("ReLearn Synth teaching instrument", () => {
  const mutedPluckUrl =
    "/cert/sound-synthesis/simulator/relearn-synth-subtractive?topicId=ss-m1-signal-path&assignmentId=ss-sim-muted-saw-pluck";
  const resonantSawUrl =
    "/cert/sound-synthesis/simulator/relearn-synth-subtractive?topicId=ss-m1-filter-resonance&assignmentId=ss-sim-resonant-dark-saw";
  const slowPadUrl =
    "/cert/sound-synthesis/simulator/relearn-synth-subtractive?topicId=ss-m1-adsr-envelope&assignmentId=ss-sim-slow-pad-envelope";

  test.beforeEach(async ({ page }) => {
    await seedProfile(page, "new-learner");
    await gotoHydrated(page, mutedPluckUrl);
  });

  test("opens with safe audio off and exposes accessible learning controls", async ({ page }) => {
    await expect(page.getByTestId("relearn-synth")).toBeVisible();
    await expect(page.getByRole("button", { name: "Start audio" })).toBeVisible();
    await expect(page.getByRole("button", { name: /Panic/ })).toBeVisible();
    await expect(page.getByRole("img", { name: /oscilloscope.*spectrum/i })).toBeVisible();
    await expect(page.getByLabel("Cutoff")).toBeVisible();
    await expect(page.getByLabel("Sustain")).toBeVisible();
    await expect(page.getByRole("button", { name: "Patch A" })).toHaveAttribute("aria-pressed", "true");
  });

  test("compares deterministic patches and completes the objective target", async ({ page }) => {
    await page.getByRole("button", { name: "Patch B" }).click();
    await expect(page.getByRole("button", { name: "Patch B" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByLabel("Cutoff")).toBeDisabled();
    await expect(page.getByRole("button", { name: "Export A" })).toBeDisabled();
    await page.getByRole("button", { name: "Check objective settings" }).click();
    await expect(page.getByText(/B is a guided reference/)).toBeVisible();
    await expect(page.getByRole("button", { name: "Complete exercise" })).toBeDisabled();

    await page.getByRole("button", { name: "Patch A" }).click();
    await page.getByLabel("Cutoff").fill("900");
    await page.getByLabel("Sustain").fill("0.25");
    await page.getByRole("button", { name: "Start audio" }).click();
    const playButton = page.getByRole("button", { name: "Hold to play note" });
    await playButton.dispatchEvent("pointerdown");
    await playButton.dispatchEvent("pointerup");
    await page.getByRole("button", { name: "Check objective settings" }).click();
    await expect(page.getByText("Source is a saw wave — met")).toBeVisible();
    await expect(page.getByRole("button", { name: "Complete exercise" })).toBeEnabled();
    await page.getByRole("button", { name: "Complete exercise" }).click();
    await expect(page.getByText("Session complete")).toBeVisible();
    await expect(page.getByText("5 / 5")).toBeVisible();
  });

  test("persists learner patch state locally", async ({ page }) => {
    await page.getByLabel("Cutoff").fill("700");
    await page.reload();
    await expect(page.getByRole("button", { name: "Patch A" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByLabel("Cutoff")).toHaveValue("700");
  });

  test("fits a phone viewport with usable controls", async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await expect(page.getByTestId("relearn-synth")).toBeVisible();
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
    expect(overflow).toBeLessThanOrEqual(0);

    for (const name of ["Start audio", "Hold to play note", "Check objective settings"]) {
      const box = await page.getByRole("button", { name }).boundingBox();
      expect(box?.height ?? 0).toBeGreaterThanOrEqual(40);
    }
    const cutoffBox = await page.getByLabel("Cutoff").boundingBox();
    expect(cutoffBox?.height ?? 0).toBeGreaterThanOrEqual(40);
  });

  test("loads filter-lesson targets and gives parameter-specific coaching", async ({ page }) => {
    await gotoHydrated(page, resonantSawUrl);
    await expect(page.getByRole("heading", { name: "Resonant dark saw" })).toBeVisible();
    await expect(page.getByText("Target: Cutoff is 700–1,500 Hz")).toBeVisible();
    await expect(page.getByText("Target: Resonance is 7–11 Q")).toBeVisible();

    await page.getByRole("button", { name: "Check objective settings" }).click();
    await expect(page.locator("#synth-cutoff-target")).toContainText("Lower Cutoff toward 1,500 Hz");
    await expect(page.locator("#synth-resonance-target")).toContainText("Raise Resonance toward 7 Q");
    await expect(page.locator('[data-challenge-parameter="cutoff"]')).toHaveClass(/border-amber-500/);
    await expect(page.locator('[data-challenge-parameter="resonance"]')).toHaveClass(/border-amber-500/);
  });

  test("uses separate persisted state and scoring for the filter lesson", async ({ page }) => {
    await page.getByLabel("Cutoff").fill("700");

    await gotoHydrated(page, resonantSawUrl);
    await page.getByRole("button", { name: "Patch B" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("1100");
    await expect(page.getByLabel("Resonance")).toHaveValue("9");

    await page.getByRole("button", { name: "Patch A" }).click();
    await page.getByLabel("Cutoff").fill("1100");
    await page.getByLabel("Resonance").fill("9");
    await page.getByRole("button", { name: "Start audio" }).click();
    const playButton = page.getByRole("button", { name: "Hold to play note" });
    await playButton.dispatchEvent("pointerdown");
    await playButton.dispatchEvent("pointerup");
    await page.getByRole("button", { name: "Check objective settings" }).click();
    await expect(page.getByRole("button", { name: "Complete exercise" })).toBeEnabled();
    await page.getByRole("button", { name: "Complete exercise" }).click();
    await expect(page.getByText("3 / 3")).toBeVisible();
  });

  test("plays an accessible note keyboard and releases cleanly", async ({ page }) => {
    await page.getByRole("button", { name: "Start audio" }).click();
    const c3 = page.getByRole("button", { name: "Play C3" });
    await expect(c3).toHaveAttribute("aria-pressed", "false");
    await c3.dispatchEvent("pointerdown");
    await expect(c3).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByText("Active note: C3")).toBeVisible();
    await c3.dispatchEvent("pointerup");
    await expect(c3).toHaveAttribute("aria-pressed", "false");
    await expect(page.getByText("No note held")).toBeVisible();
  });

  test("configures and persists LFO modulation", async ({ page }) => {
    await page.getByRole("button", { name: "Show all controls" }).click();
    await page.getByRole("button", { name: "Start audio" }).click();
    const lfoToggle = page.getByRole("button", { name: "LFO off" });
    await expect(lfoToggle).toHaveAttribute("aria-pressed", "false");
    await lfoToggle.click();
    await page.getByRole("button", { name: "Pitch" }).click();
    await page.getByLabel("LFO rate").fill("5");
    await page.getByLabel("LFO depth").fill("0.5");
    const a3 = page.getByRole("button", { name: "Play A3" });
    await a3.dispatchEvent("pointerdown");
    await expect(page.getByText("Active note: A3")).toBeVisible();
    await a3.dispatchEvent("pointerup");
    await page.reload();
    await page.getByRole("button", { name: "Show all controls" }).click();
    await expect(page.getByRole("button", { name: "LFO on" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByRole("button", { name: "Pitch" })).toHaveAttribute("aria-pressed", "true");
    await expect(page.getByLabel("LFO rate")).toHaveValue("5");
    await expect(page.getByLabel("LFO depth")).toHaveValue("0.5");
  });

  test("migrates a version 1 saved patch without losing learner settings", async ({ page }) => {
    await page.evaluate(() => {
      const legacyPatch = {
        waveform: "square",
        frequency: 330,
        masterGain: 0.12,
        cutoff: 1400,
        resonance: 4,
        attack: 0.04,
        decay: 0.3,
        sustain: 0.5,
        release: 0.3,
      };
      localStorage.removeItem("relearn:synth:patches:v2:muted-saw-pluck");
      localStorage.setItem(
        "relearn:synth:patches:v1:muted-saw-pluck",
        JSON.stringify({ version: 1, activeSlot: "A", A: legacyPatch, B: legacyPatch })
      );
    });
    await page.reload();
    await expect(page.getByLabel("Cutoff")).toHaveValue("1400");
    await expect(page.getByRole("button", { name: "Square" })).toHaveAttribute("aria-pressed", "true");
    await page.getByRole("button", { name: "Show all controls" }).click();
    await expect(page.getByRole("button", { name: "LFO off" })).toBeVisible();
    await expect(page.getByLabel("LFO rate")).toHaveValue("2");
    await expect.poll(async () => page.evaluate(() => {
      const saved = localStorage.getItem("relearn:synth:patches:v2:muted-saw-pluck");
      return saved ? JSON.parse(saved).version : null;
    })).toBe(2);
  });

  test("uses the reusable challenge layer for an ADSR pad", async ({ page }) => {
    await gotoHydrated(page, slowPadUrl);
    await expect(page.getByRole("heading", { name: "Slow pad envelope" })).toBeVisible();
    await expect(page.getByText("Target: Attack is 500–1,200 ms")).toBeVisible();
    await expect(page.getByText("Target: Release is 800–1,800 ms")).toBeVisible();

    await page.getByLabel("Attack").fill("0.8");
    await page.getByLabel("Decay").fill("0.6");
    await page.getByLabel("Sustain").fill("0.72");
    await page.getByLabel("Release").fill("1.2");
    await page.getByRole("button", { name: "Start audio" }).click();
    const c3 = page.getByRole("button", { name: "Play C3" });
    await c3.dispatchEvent("pointerdown");
    await c3.dispatchEvent("pointerup");
    await page.getByRole("button", { name: "Check objective settings" }).click();
    await expect(page.getByRole("button", { name: "Complete exercise" })).toBeEnabled();
    await page.getByRole("button", { name: "Complete exercise" }).click();
    await expect(page.getByText("4 / 4")).toBeVisible();
  });

  test("uses lesson focus and reveals out-of-scope panels only on request", async ({ page }) => {
    await gotoHydrated(page, resonantSawUrl);
    await expect(page.getByRole("heading", { name: "Low-pass filter" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "Amplifier envelope" })).toHaveCount(0);
    await expect(page.getByRole("heading", { name: "LFO modulation" })).toHaveCount(0);

    await page.getByRole("button", { name: "Show all controls" }).click();
    await expect(page.getByRole("heading", { name: "Amplifier envelope" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "LFO modulation" })).toBeVisible();
    await page.getByRole("button", { name: "Return to lesson focus" }).click();
    await expect(page.getByRole("heading", { name: "LFO modulation" })).toHaveCount(0);
  });

  test("undoes and redoes workspace changes without modifying guided B", async ({ page }) => {
    await expect(page.getByRole("button", { name: "Undo A" })).toBeDisabled();
    await expect(page.getByRole("button", { name: "Redo A" })).toBeDisabled();
    await page.getByLabel("Cutoff").fill("900");
    await expect(page.getByRole("button", { name: "Undo A" })).toBeEnabled();
    await page.getByRole("button", { name: "Undo A" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("8000");
    await expect(page.getByRole("button", { name: "Redo A" })).toBeEnabled();
    await page.getByRole("button", { name: "Redo A" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("900");
    await page.getByRole("button", { name: "Undo A" }).click();
    await page.getByLabel("Resonance").fill("4");
    await expect(page.getByRole("button", { name: "Redo A" })).toBeDisabled();

    await page.getByRole("button", { name: "Patch B" }).click();
    await expect(page.getByRole("button", { name: "Undo A" })).toBeDisabled();
    await expect(page.getByRole("button", { name: "Redo A" })).toBeDisabled();
    await expect(page.getByLabel("Cutoff")).toBeDisabled();
  });

  test("downloads and safely loads a portable patch file", async ({ page }) => {
    const downloadPromise = page.waitForEvent("download");
    await page.getByRole("button", { name: "Download file" }).click();
    const download = await downloadPromise;
    expect(download.suggestedFilename()).toBe("relearn-synth-patch.relearn-synth.json");

    const patch = JSON.stringify({
      format: "relearn-synth-patch",
      version: 2,
      patch: {
        waveform: "square", frequency: 220, masterGain: 0.16, cutoff: 1250,
        resonance: 3, attack: 0.02, decay: 0.2, sustain: 0.7, release: 0.25,
        lfoEnabled: false, lfoTarget: "filter", lfoRate: 2, lfoDepth: 0.25,
      },
    });
    await page.locator("#synth-patch-file").setInputFiles({
      name: "lesson-patch.relearn-synth.json", mimeType: "application/json", buffer: Buffer.from(patch),
    });
    await expect(page.getByText("Valid patch file loaded for review.")).toBeVisible();
    await page.getByRole("button", { name: "Import to A" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("1250");

    await page.locator("#synth-patch-file").setInputFiles({
      name: "unsafe.relearn-synth.json", mimeType: "application/json", buffer: Buffer.from("not json"),
    });
    await expect(page.getByText("The patch text is not valid JSON.")).toBeVisible();
    await expect(page.getByLabel("Cutoff")).toHaveValue("1250");
  });

  test("exports, validates, imports, and can undo a patch", async ({ page }) => {
    const patchText = page.getByLabel("ReLearn Synth patch JSON");
    await page.getByRole("button", { name: "Export A" }).click();
    await expect(patchText).toContainText('"format": "relearn-synth-patch"');
    await page.getByLabel("Cutoff").fill("700");
    await page.getByRole("button", { name: "Import to A" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("8000");
    await page.getByRole("button", { name: "Undo A" }).click();
    await expect(page.getByLabel("Cutoff")).toHaveValue("700");

    await patchText.fill("not json");
    await page.getByRole("button", { name: "Import to A" }).click();
    await expect(page.getByText("The patch text is not valid JSON.")).toBeVisible();

    await patchText.fill(JSON.stringify({
      format: "relearn-synth-patch",
      version: 2,
      patch: { cutoff: 999999 },
    }));
    await page.getByRole("button", { name: "Import to A" }).click();
    await expect(page.getByText("The patch contains missing or out-of-range parameters.")).toBeVisible();
    await expect(page.getByLabel("Cutoff")).toHaveValue("700");
  });
});
