/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
    ],
  },
  // This ensures the site is deployed at the root of sonya.github.io
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
}

export default nextConfig;

