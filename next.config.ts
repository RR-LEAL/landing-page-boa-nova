import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', 
  basePath: '/landing-page-boa-nova',
  images: {
    unoptimized: true
  },
};

export default nextConfig;
