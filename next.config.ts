/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'authjs.dev',
      },
    ],
  },
}

export default nextConfig
