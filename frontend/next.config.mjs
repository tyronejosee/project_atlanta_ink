/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1:8100',
        // port: '8100',
        // pathname: '/media/artists/**',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      // TODO: Remove this
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
