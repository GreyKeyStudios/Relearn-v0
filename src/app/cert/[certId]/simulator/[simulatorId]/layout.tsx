import { allSimulatorParams } from "@/lib/static-params";

export function generateStaticParams() {
  return allSimulatorParams();
}

export default function SimulatorLayout({ children }: { children: React.ReactNode }) {
  return children;
}
