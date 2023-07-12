/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: { styledComponents: true },
  transpilePackages: ['@front-end-mentor/ui'],
};

module.exports = nextConfig;
