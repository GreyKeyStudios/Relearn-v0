import { expect, test } from "@playwright/test";

test("first-run experience offers Piano Foundations", async ({ page }) => {
  await page.goto("/");
  const pianoEntry = page.getByRole("link", { name: /New to piano/i });
  await expect(pianoEntry).toBeVisible();
  await pianoEntry.click();
  await expect(page).toHaveURL(/\/learn\/piano-foundations$/);
});

test("virtual keyboard completes the first octave-discovery lesson", async ({ page }) => {
  const consoleErrors: string[] = [];
  page.on("console", (message) => {
    if (message.type() === "error") consoleErrors.push(message.text());
  });

  await page.goto("/learn/piano-foundations");
  await expect(page.getByRole("heading", { name: "Learn the pattern by playing it." })).toBeVisible();
  await expect(page.locator("[data-nextjs-dialog]")).toHaveCount(0);
  await expect(page.getByText("white key", { exact: true })).toHaveCount(1);
  await expect(page.getByRole("group", { name: "Playable on-screen piano keyboard" })).toHaveCount(0);

  for (let stage = 0; stage < 7; stage += 1) {
    await page.getByRole("button", { name: "Reveal the next idea" }).click();
  }
  await page.getByRole("button", { name: "Now find the pattern yourself" }).click();
  await expect(page.getByRole("heading", { name: "Do you have a MIDI keyboard?" })).toBeVisible();
  await page.getByRole("button", { name: /No—play on screen/i }).click();

  await page.getByRole("button", { name: "Play C3" }).click();
  await expect(page.getByText(/keyboard and ReLearn are talking/i)).toBeVisible();
  await expect(page.getByText(/Find a C/i)).toBeVisible();

  await page.getByRole("button", { name: "Play C4" }).click();
  await expect(page.getByText(/Find another C/i)).toBeVisible();

  await page.getByRole("button", { name: "Play C5" }).click();
  await expect(page.getByText("C repeats every twelve notes.")).toBeVisible();
  await page.getByRole("button", { name: "Continue to Twelve Notes" }).click();
  await expect(page.getByRole("heading", { name: "Find C again." })).toBeVisible();
  for (const note of ["C4", "D4", "B3", "F4", "C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5", "C♯4"]) {
    await page.getByRole("button", { name: `Play ${note}` }).click();
  }
  await expect(page.getByRole("heading", { name: "Small, relaxed movements come first." })).toBeVisible();
  for (const note of ["C4", "D4", "E4", "F4", "G4"]) await page.getByRole("button", { name: `Play ${note}` }).click();
  await expect(page.getByRole("heading", { name: "Music moves through time." })).toBeVisible();
  await page.getByRole("button", { name: "Continue without timing verification" }).click();
  await expect(page.getByRole("heading", { name: "The keyboard is no longer an unknown object." })).toBeVisible();

  const eventNames = await page.evaluate(() => {
    const events = JSON.parse(localStorage.getItem("relearn-learning-events-v1") ?? "[]") as Array<{ name: string }>;
    return events.map((event) => event.name);
  });
  expect(eventNames).toContain("lesson_completed");
  expect(consoleErrors).toEqual([]);
});

test("Practice works independently with on-screen input", async ({ page }) => {
  await page.goto("/practice");
  await expect(page.getByRole("heading", { name: "Train what needs repetition." })).toBeVisible();
  await page.getByRole("button", { name: "Play C4" }).click();
  await expect(page.getByText(/C landmark navigation complete/i)).toBeVisible();
  const storedEvidence = await page.evaluate(() => JSON.parse(localStorage.getItem("bridge-study-progress-v2") ?? "{}"));
  expect(storedEvidence.state.competencyEvidence["piano.note-navigation.c"].successfulAttempts).toBe(1);
  await page.getByRole("button", { name: /C major ascending/i }).click();
  for (const note of ["C4", "D4", "E4", "F4", "G4", "A4", "B4", "C5"]) await page.getByRole("button", { name: `Play ${note}` }).click();
  await expect(page.getByText(/C major ascending complete/i)).toBeVisible();

  await page.getByRole("button", { name: /Steady pulse/i }).click();
  for (let beat = 0; beat < 4; beat += 1) {
    await page.getByRole("button", { name: "Play C4" }).click();
    if (beat < 3) await page.waitForTimeout(500);
  }
  await expect(page.getByText(/Steady pulse complete/i)).toBeVisible();

  await page.getByRole("button", { name: /Controlled note duration/i }).click();
  const middleC = page.getByRole("button", { name: "Play C4" });
  await middleC.click();
  await page.waitForTimeout(1900);
  await page.getByRole("button", { name: "Release held note" }).click();
  await expect(page.getByText(/Controlled note duration complete/i)).toBeVisible();
});

test("first arpeggio lesson teaches and verifies both directions", async ({ page }) => {
  await page.goto("/learn/piano-academy/developing-1/arpeggio");
  await expect(page.getByRole("heading", { name: "Your first arpeggio." })).toBeVisible();
  await page.getByRole("button", { name: "Explore the motion" }).click();
  for (const note of ["C4", "E4", "G4", "C5", "C5", "G4", "E4", "C4"]) await page.getByRole("button", { name: `Play ${note}` }).click();
  await expect(page.getByRole("heading", { name: "You played an arpeggio in both directions." })).toBeVisible();
});

test("musical application connects scales, melody, and chords", async ({ page }) => {
  await page.goto("/learn/piano-foundations/musical-application");
  await page.getByRole("button", { name: "Build the scale" }).click();
  for (const note of ["C4","D4","E4","F4","G4","A4","B4","C5","C5","B4","A4","G4","F4","E4","D4","C4","C4","E4","G4","E4","D4","C4","C4","E4","G4","F4","A4","C5"]) await page.getByRole("button", { name: `Play ${note}` }).click();
  await expect(page.getByRole("heading", { name: "Scale, melody, and harmony are connected." })).toBeVisible();
});

test("continuous Foundations course saves and restores its lesson checkpoint", async ({ page }) => {
  await page.goto("/learn/piano-foundations/course");
  await expect(page.getByRole("heading", { name: "From first key to first piece." })).toBeVisible();
  await expect(page.getByRole("heading", { name: "This Is a White Key" })).toBeVisible();
  await page.getByRole("button", { name: "Mark complete and continue" }).click();
  await expect(page.getByRole("heading", { name: "The White Keys" })).toBeVisible();
  await page.reload();
  await expect(page.getByRole("heading", { name: "The White Keys" })).toBeVisible();
  await expect(page.getByText("1 of 64 lessons")).toBeVisible();
  await page.getByText("Learn the Notes", { exact: true }).click();
  await page.getByRole("button", { name: /Find Every C/ }).click();
  await expect(page.getByRole("heading", { name: "Find Every C" })).toBeVisible();
  await expect(page.getByRole("link", { name: "Open playable activity" })).toHaveAttribute("href", "/learn/piano-foundations");
});

test("Foundations integration reaches a complete musical sketch", async ({ page }) => {
  await page.goto("/learn/piano-foundations/integration");
  await expect(page.getByRole("heading", { name: "Make the pieces work together." })).toBeVisible();
  const notes = [
    "C4","E4","G4","F4","A4","C5","G4","B4","D5","C4","E4","G4",
    "C3","F3","G3","C3",
    "C4","D4","E4","G4","E4","D4","C4",
  ];
  for (const note of notes) await page.getByRole("button", { name: `Play ${note}` }).click();
  await page.getByRole("button", { name: "Play C softly" }).click();
  await page.getByRole("button", { name: "Play C strongly" }).click();
  const piece = ["C3","C4","E4","G4","F3","C4","F4","A4","G3","B3","D4","G4","C3","C4","E4","G4","C5"];
  for (const note of piece) await page.getByRole("button", { name: `Play ${note}` }).click();
  await expect(page.getByRole("heading", { name: "You finished a complete musical sketch." })).toBeVisible();
});
