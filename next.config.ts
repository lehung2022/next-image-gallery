import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.dantocking.com",
      },
      {
        protocol: "https",
        hostname: "www.nobuwiki.org",
      },
    ],
  },
  experimental: {
    optimizePackageImports: ["react", "next"], // Giảm unused JS
  },
  productionBrowserSourceMaps: false,
};

export default nextConfig;
