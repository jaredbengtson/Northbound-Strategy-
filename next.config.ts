import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Brand assets are edited directly in /public. Serving them without the
  // optimizer avoids stale generated copies while the design is evolving.
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
