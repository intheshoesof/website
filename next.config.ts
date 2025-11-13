import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async redirects() {
    return [{source: "/h1", destination: "/heroes/haile-selassie", permanent: true },
      {source: "/h2", destination: "/heroes/george-washington-carver", permanent: true },
      {source: "/h3", destination: "/heroes/lewis-howard-latimer", permanent: true },
      {source: "/h4", destination: "/heroes/chevalier-de-saint-georges", permanent: true },

    ];
  },
};

export default nextConfig;

















