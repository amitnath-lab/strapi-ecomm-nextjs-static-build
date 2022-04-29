const withImages = require("next-images");
const { withPlugins } = require("next-compose-plugins");

const nextConfig = {
  env: {
    API_URL: "https://multikart-graphql-dun.vercel.app/server.js",
    STRAPI_URL: "http://localhost:1337",
    VENDURE_URL: "http://localhost:3100",
    MEDIA_URL_PREFIX: "/api/media/assets"
    //MEDIA_URL_PREFIX: "/assets"
  },
  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  images: {
    disableStaticImages: true
  }
};

module.exports = withPlugins([withImages], nextConfig);
