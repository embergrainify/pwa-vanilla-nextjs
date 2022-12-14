/** @type {import('next').NextConfig} */

// const basePath = process.env.NODE_ENV === 'production' ? '/pwa-vanilla-nextjs' : '';
const basePath = '/pwa-vanilla-nextjs';

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    basePath: basePath,
  },
  basePath: basePath,
  images: {
    unoptimized: true,
  },
  optimizeFonts: false,
}

module.exports = nextConfig;