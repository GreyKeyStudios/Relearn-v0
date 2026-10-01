import { readFile } from "node:fs/promises";
import { test, expect } from "@playwright/test";
import {
  resolveProgressAgainstManifest,
  validateCourseCatalog,
  validateCourseManifest,
  validateLearnerRecord,
  type CourseManifest,
  type LearnerRecord,
} from "../src/integration/contract";
import { answerQuizQuestions, gotoHydrated } from "./helpers/seed";

/**
 * Interchange v1 end to end: published course data → real learner interaction
 * in the app → exported learner record that resolves against the manifest.
 */
test.describe("ReLearn interchange v1", () => {
  test("catalog and CCNA manifest are valid interchange documents", async ({ request }) => {
    const catalog = await (await request.get("/integration/v1/catalog.json")).json();
    expect(validateCourseCatalog(catalog).errors).toEqual([]);
    const manifest = await (await request.get("/integration/v1/courses/ccna/manifest.json")).json();
    expect(validateCourseManifest(manifest).errors).toEqual([]);
  });

  test("a quiz taken in the app appears in the exported learner record", async ({ page, request }) => {
    const manifest = (await (
      await request.get("/integration/v1/courses/ccna/manifest.json")
    ).json()) as CourseManifest;

    await gotoHydrated(page, "/cert/ccna/quiz/osi-model");
    await answerQuizQuestions(page, 12);

    await gotoHydrated(page, "/progress");
    const downloadPromise = page.waitForEvent("download");
    await page.getByTestId("export-learner-record").click();
    const download = await downloadPromise;
    const record = JSON.parse(await readFile((await download.path())!, "utf8")) as LearnerRecord;

    expect(validateLearnerRecord(record).errors).toEqual([]);
    expect(record.provenance).toBe("device");
    expect(record.trust).toBe("learner-controlled");
    const ccna = record.courses.find((c) => c.courseId === "ccna");
    expect(ccna?.assessments.some((a) => a.activityId === "ccna:osi-model#quiz")).toBe(true);

    const resolved = resolveProgressAgainstManifest(manifest, record);
    expect(resolved?.unknownRefs).toEqual([]);
  });
});
