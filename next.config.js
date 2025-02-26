/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  // Remove the appDir option - it's no longer needed in Next.js 14
  // as App Router is the default
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
