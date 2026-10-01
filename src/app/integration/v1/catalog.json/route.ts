import { buildCourseCatalog } from "@/integration/course-manifest";

/** Interchange v1 course catalog — prerendered to a static JSON file. */
export const dynamic = "force-static";

export function GET() {
  return Response.json(buildCourseCatalog());
}
