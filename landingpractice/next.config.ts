import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["images.unsplash.com", "media.istockphoto.com", "plus.unsplash.com", "media1.giphy.com"],
    // Itt add meg az engedélyezett domain-t
  },
};

module.exports = nextConfig;

export default nextConfig;
