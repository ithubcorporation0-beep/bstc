import type { NextConfig } from "next";

const isCloudflare = Boolean(process.env.CF_PAGES || process.env.CLOUDFLARE);

const nextConfig: NextConfig = {
  ...(isCloudflare ? { output: "standalone" } : {}),
  reactStrictMode: true,
  images: {
    unoptimized: isCloudflare,
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
