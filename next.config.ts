import type { NextConfig } from "next";

/** Static export for GitHub Pages, Cloudflare Pages, and local preview builds. */
const isStaticExport =
  process.env.STATIC_EXPORT === "1" || process.env.CF_PAGES === "1";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  ...(isStaticExport
    ? {
        output: "export" as const,
        trailingSlash: true,
        images: { unoptimized: true },
      }
    : {}),
  ...(basePath
    ? {
        basePath,
        assetPrefix: basePath,
      }
    : {}),
};

export default nextConfig;
