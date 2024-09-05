/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['http://127.0.0.1:8100', 'localhost', 'images.unsplash.com'],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '8100',
        pathname: '/media/artists/**',
      },
    ],
  },
};

export default nextConfig;
