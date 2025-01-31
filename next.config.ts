import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "www.fxmweb.com" },
      { protocol: "https", hostname: "edhype.com" },
      { protocol: "https", hostname: "s3.amazonaws.com" },
      { protocol: "https", hostname: "cdnblog.picsart.com" },
      { protocol: "https", hostname: "www.shutterstock.com" },
    ],
  },
};

export default nextConfig;

