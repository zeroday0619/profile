import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "champions.pokemon.com",
        pathname: "/favicons/**",
      },
    ],
  },
  reactStrictMode: true,
};

const config = async (phase: string): Promise<NextConfig> => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const { initOpenNextCloudflareForDev } = await import(
      "@opennextjs/cloudflare"
    );

    await initOpenNextCloudflareForDev();
  }

  return nextConfig;
};

export default config;
