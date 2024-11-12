/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: '127.0.0.1:8100',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      }
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)', // Apply headers to all routes
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY', // Prevents any embedding in an iframe
          },
          {
            key: 'Content-Security-Policy',
            value: "frame-ancestors 'none';", // CSP to block external iframes
          },
        ],
      },
    ];
  },
};

export default nextConfig;
