"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PageHeader } from "@/components/layout/PageHeader";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  applyDemoSeed,
  getActiveDemoProfileId,
  resetLearner,
  writeDemoSeedToStorage,
} from "@/lib/demo/apply-demo-seed";
import {
  DEMO_PROFILE_META,
  isDemoProfileId,
  type DemoProfileId,
} from "@/lib/demo/types";

interface DevConsoleProps {
  initialProfile?: string;
}

export function DevConsole({ initialProfile }: DevConsoleProps) {
  const router = useRouter();
  const [active, setActive] = useState<DemoProfileId | null>(null);
  const [seededOnce, setSeededOnce] = useState(false);

  useEffect(() => {
    setActive(getActiveDemoProfileId());
  }, []);

  useEffect(() => {
    if (seededOnce) return;
    if (!initialProfile || !isDemoProfileId(initialProfile)) return;
    setSeededOnce(true);
    writeDemoSeedToStorage(initialProfile);
    router.replace("/");
    window.location.href = "/";
  }, [initialProfile, router, seededOnce]);

  return (
    <div data-testid="dev-console">
      <PageHeader
        title="Dev Console"
        subtitle="Demo learner profiles — development / ENABLE_DEV_TOOLS only"
        backHref="/"
      />

      <Card className="mb-6 p-4">
        <p className="text-xs text-zinc-500">Active seed</p>
        <p className="mt-1 font-medium text-zinc-100" data-testid="dev-active-profile">
          {active ?? "none"}
        </p>
      </Card>

      <section className="mb-6">
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Load profile
        </h2>
        <div className="flex flex-col gap-2">
          {DEMO_PROFILE_META.map((profile) => (
            <Card key={profile.id} className="p-3">
              <p className="font-medium text-zinc-100">{profile.label}</p>
              <p className="mt-1 text-xs text-zinc-500">{profile.description}</p>
              <Button
                className="mt-3 w-full"
                data-testid={`dev-load-${profile.id}`}
                onClick={() => applyDemoSeed(profile.id)}
              >
                Load {profile.id}
              </Button>
            </Card>
          ))}
        </div>
      </section>

      <section className="mb-6">
        <Button
          variant="secondary"
          className="w-full"
          data-testid="dev-reset"
          onClick={() => resetLearner()}
        >
          Reset learner
        </Button>
      </section>

      <section>
        <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-zinc-400">
          Navigate
        </h2>
        <div className="flex flex-col gap-2">
          <Link href="/">
            <Button variant="ghost" className="w-full">
              Dashboard
            </Button>
          </Link>
          <Link href="/cert/ccna">
            <Button variant="ghost" className="w-full">
              CCNA
            </Button>
          </Link>
          <Link href="/review/session">
            <Button variant="ghost" className="w-full">
              Review session
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
