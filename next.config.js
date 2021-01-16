//plugin for managing other next js plugins
const withPlugins = require("next-compose-plugins");
//image optimization
const withImages = require("next-optimized-images");

const nextConfig = {
  images: {
    domains: ["raw.githubusercontent.com"],
  },
};

module.exports = withPlugins([withImages], nextConfig);
