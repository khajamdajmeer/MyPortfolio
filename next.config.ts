import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Avatar and project images can be pasted in as external URLs from the admin panel.
    remotePatterns: [{ protocol: "https", hostname: "**" }],
  },
};

export default nextConfig;
