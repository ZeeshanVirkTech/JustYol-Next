/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  poweredByHeader: false,
  transpilePackages: ['mui-tel-input'],
};

export default nextConfig;
