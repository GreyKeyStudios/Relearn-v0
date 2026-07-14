import { notFound } from "next/navigation";
import { DevConsole } from "./DevConsole";

function isDevToolsEnabled(): boolean {
  return (
    process.env.NODE_ENV === "development" ||
    process.env.ENABLE_DEV_TOOLS === "true"
  );
}

interface DevPageProps {
  searchParams: Promise<{ profile?: string }>;
}

export default async function DevPage({ searchParams }: DevPageProps) {
  if (!isDevToolsEnabled()) notFound();

  const { profile } = await searchParams;

  return <DevConsole initialProfile={profile} />;
}
