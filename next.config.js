/** @type {import('next').NextConfig} */
const nextConfig = {
  serverOptions: {
    port: 3001,
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "images.pexels.com",
      "images.remotePatterns",
    ],
  },
};

module.exports = nextConfig;
