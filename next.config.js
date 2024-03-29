/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["http://localhost:1337", "localhost"],
  },
};

module.exports = nextConfig;
