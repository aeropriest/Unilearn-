/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: { ignoreDuringBuilds: true },
  typescript: { ignoreBuildErrors: true },
  images: {
    domains: ['blob.v0.dev'], // hostnames only
    formats: ['image/webp', 'image/avif'],
    unoptimized: true,
  },
  async generateBuildId() {
    return 'build-' + Date.now();
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,

  // Expose only what you need on the client:
  env: {
    NEXT_APP_FRONTEND_BASE_URL: process.env.NEXT_APP_FRONTEND_BASE_URL,
  },
};

export default nextConfig;
