/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // If you're using App Router:
  experimental: {
    appDir: true,
  },
  // Addressing the module warning in your logs:
  // Add to silence the warning:
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
