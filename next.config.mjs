import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin("./src/i18n/request.ts");

/** Unique per build so same-named public assets bust CDN/browser cache. */
const assetVersion =
  process.env.ASSET_VERSION ||
  process.env.VERCEL_GIT_COMMIT_SHA?.slice(0, 12) ||
  new Date().toISOString().replace(/\D/g, "").slice(0, 14);

process.env.NEXT_PUBLIC_ASSET_VERSION = assetVersion;

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export for hostings without Node.js (Hostinger, etc.)
  output: "export",
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_ASSET_VERSION: assetVersion,
  },
  images: {
    unoptimized: true,
    loader: "custom",
    loaderFile: "./src/lib/imageLoader.ts",
  },
};

console.log(`[paa] asset version: ${assetVersion}`);

export default withNextIntl(nextConfig);
