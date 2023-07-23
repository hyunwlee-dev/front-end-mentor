/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  transpilePackages: ['@hyunwlee/ui'],
  distDir: 'build',
  output: 'export',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
