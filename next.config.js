/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");
const nextConfig = {
  reactStrictMode: true,
};

module.exports = withPWA({
  pwa: {
    dest: "public",
    runtimeCaching,
    register: true,
    skipWaiting: true,
  },
});

module.exports = nextConfig;
