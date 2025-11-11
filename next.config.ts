import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{ source: "/h1", destination: "/heroes/haile-selassie", permanent: true }];
  },
};

export default nextConfig;

















