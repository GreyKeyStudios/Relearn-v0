import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { ExternalToolGuideView } from "@/components/tools/ExternalToolGuideView";
import { getExternalToolGuide } from "@/content/external-tools/packet-tracer";
import { getCertification } from "@/lib/content-selectors";

interface ToolGuidePageProps {
  params: Promise<{ certId: string; toolId: string }>;
}

export default async function ToolGuidePage({ params }: ToolGuidePageProps) {
  const { certId, toolId } = await params;
  const cert = getCertification(certId);
  const guide = getExternalToolGuide(toolId);
  if (!cert || !guide) notFound();

  return (
    <div>
      <PageHeader
        title={guide.name}
        subtitle="External tool guide · always available"
        backHref={`/cert/${certId}`}
      />
      <ExternalToolGuideView guide={guide} certId={certId} />
    </div>
  );
}
