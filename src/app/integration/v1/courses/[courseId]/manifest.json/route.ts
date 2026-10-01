import { CERTIFICATIONS } from "@/content/registry";
import { getCourseManifest } from "@/integration/course-manifest";

/** Interchange v1 course manifest per course — prerendered to static JSON files. */
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return CERTIFICATIONS.map((c) => ({ courseId: c.id }));
}

export async function GET(_req: Request, ctx: { params: Promise<{ courseId: string }> }) {
  const { courseId } = await ctx.params;
  const manifest = getCourseManifest(courseId);
  if (!manifest) return Response.json({ error: "unknown course" }, { status: 404 });
  return Response.json(manifest);
}
