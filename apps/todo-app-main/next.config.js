/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  transpilePackages: ['@front-end-mentor/ui'],
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
