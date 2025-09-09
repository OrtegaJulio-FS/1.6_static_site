import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/1.6_static_site",
  images: { unoptimized: true },
};

export default nextConfig;
