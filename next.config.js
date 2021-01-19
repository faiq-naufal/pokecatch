//plugin for managing other next js plugins
const withPlugins = require("next-compose-plugins");
//image optimization
const withImages = require("next-optimized-images");
//PWA plugin
const withPWA = require("next-pwa");
const runtimeCaching = require("next-pwa/cache");

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = withPlugins(
  [
    withImages,
    [
      withPWA,
      {
        pwa: {
          disable: process.env.NODE_ENV === "development",
          dest: "public",
          runtimeCaching,
        },
      },
    ],
  ],
  nextConfig
);
