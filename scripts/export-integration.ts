/**
 * Write interchange v1 documents to disk for consumers that vendor a snapshot
 * (e.g. the Bridge Academy site). Usage:
 *
 *   npm run integration:export -- --out ../bridge-academy/lib/relearn/snapshot [--course ccna] [--sample-record]
 *
 * --sample-record also writes sample-learner-record.json, built from a fixed
 * demo progress state (provenance "demo") — never real learner data.
 */
import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";
import { CERTIFICATIONS } from "../src/content/registry";
import { buildCourseCatalog, getCourseManifest } from "../src/integration/course-manifest";
import { validateCourseCatalog, validateCourseManifest, validateLearnerRecord } from "../src/integration/contract";
import { buildLearnerRecord } from "../src/integration/learner-record";
import { sampleCcnaProgressState } from "../src/integration/verify-integration";

const args = process.argv.slice(2);
const outIdx = args.indexOf("--out");
const out = resolve(outIdx >= 0 ? args[outIdx + 1] : "integration-export");
const courseIds = args.flatMap((a, i) => (args[i - 1] === "--course" ? [a] : []));
const ids = courseIds.length ? courseIds : CERTIFICATIONS.map((c) => c.id);

const write = (path: string, data: unknown) => {
  mkdirSync(join(path, ".."), { recursive: true });
  writeFileSync(path, JSON.stringify(data, null, 2) + "\n");
  console.log(`wrote ${path}`);
};

const catalog = buildCourseCatalog();
const cv = validateCourseCatalog(catalog);
if (!cv.ok) throw new Error(`catalog invalid: ${cv.errors.join("; ")}`);
write(join(out, "catalog.json"), catalog);

for (const id of ids) {
  const manifest = getCourseManifest(id);
  if (!manifest) throw new Error(`unknown course ${id}`);
  const v = validateCourseManifest(manifest);
  if (!v.ok) throw new Error(`manifest ${id} invalid: ${v.errors.join("; ")}`);
  write(join(out, "courses", id, "manifest.json"), manifest);
}

if (args.includes("--sample-record")) {
  const record = buildLearnerRecord(sampleCcnaProgressState(), {
    exportedAt: "2026-10-01T12:00:00.000Z",
    provenance: "demo",
  });
  const v = validateLearnerRecord(record);
  if (!v.ok) throw new Error(`sample record invalid: ${v.errors.join("; ")}`);
  write(join(out, "sample-learner-record.json"), record);
}
