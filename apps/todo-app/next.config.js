/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: ['@hyunwlee/ui'],
  eslint: {
    ignoreDuringBuilds: true,
  },
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
