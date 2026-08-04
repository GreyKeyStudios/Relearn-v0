import {
  buildFullGapReport,
  formatGapReportMarkdown,
} from "../src/lib/production/gap-report";
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

const report = buildFullGapReport();
const markdown = formatGapReportMarkdown(report);

console.log(markdown);

const outPath = join(
  process.cwd(),
  "docs/curriculum-production/gap-report-latest.md"
);
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, markdown, "utf8");
console.log(`\nWrote ${outPath}`);
