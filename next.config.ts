import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomfox.ca",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
