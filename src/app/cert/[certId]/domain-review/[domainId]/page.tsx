import { notFound } from "next/navigation";
import { getDomain, getDomainQuestionBank } from "@/lib/content-selectors";
import { DomainReviewClient } from "./DomainReviewClient";

interface DomainReviewPageProps {
  params: Promise<{ certId: string; domainId: string }>;
}

export default async function DomainReviewPage({ params }: DomainReviewPageProps) {
  const { certId, domainId } = await params;
  const resolved = getDomain(certId, domainId);
  if (!resolved) notFound();

  const { cert, domain } = resolved;
  const bankQuestions = getDomainQuestionBank(certId, domainId);
  if (bankQuestions.length === 0) notFound();

  return (
    <DomainReviewClient
      certId={certId}
      domainId={domainId}
      certShortName={cert.shortName}
      domainName={domain.name}
      bankQuestions={bankQuestions}
    />
  );
}
