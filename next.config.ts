/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ik.imagekit.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "imagekit.io", // ✅ Add this
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;

