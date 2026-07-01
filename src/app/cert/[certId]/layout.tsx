import { allCertParams } from "@/lib/static-params";

export function generateStaticParams() {
  return allCertParams();
}

export default function CertLayout({ children }: { children: React.ReactNode }) {
  return children;
}
