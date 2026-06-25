import { notFound } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { AssignmentView } from "@/components/assignments/AssignmentView";
import { getAssignment } from "@/lib/content-selectors";

interface AssignmentPageProps {
  params: Promise<{ certId: string; assignmentId: string }>;
}

export default async function AssignmentPage({ params }: AssignmentPageProps) {
  const { certId, assignmentId } = await params;
  const resolved = getAssignment(certId, assignmentId);
  if (!resolved) notFound();

  const { cert, topic, assignment, externalResource } = resolved;
  const backTopicId = assignment.relatedTopicIds[0] ?? topic.id;

  return (
    <div>
      <PageHeader
        title={assignment.title}
        subtitle={`Assignment · ${cert.shortName}`}
        backHref={`/cert/${certId}/lesson/${backTopicId}`}
      />
      <AssignmentView
        certId={certId}
        certShortName={cert.shortName}
        topicName={topic.name}
        topicId={topic.id}
        assignment={assignment}
        externalResource={externalResource}
      />
    </div>
  );
}
