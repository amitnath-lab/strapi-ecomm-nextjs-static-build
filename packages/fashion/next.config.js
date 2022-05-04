const { withPlugins } = require("next-compose-plugins");

const nextConfig = {
  env: {
    STRAPI_URL: "http://localhost:1337",
    VENDURE_URL: "http://localhost:3100"
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  }
};

module.exports = nextConfig;
