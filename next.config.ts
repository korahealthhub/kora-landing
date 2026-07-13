import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: '/siteoficial',
  assetPrefix: '/siteoficial',
};

export default nextConfig;
