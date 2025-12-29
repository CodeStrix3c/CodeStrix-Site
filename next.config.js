/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com', 'ui-avatars.com'],
    unoptimized: true,
  },
  reactStrictMode: true,
}

module.exports = nextConfig

