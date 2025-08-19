import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "bookingenginecdn.hostaway.com",
      },
      {
        protocol: "https",
        hostname: "demo1.angelostone.ca",
      },
    ],
  }
};

export default nextConfig;
