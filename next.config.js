/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "croptheme.com",
      "i.ibb.co",
      "drive.google.com",
      "google.com",
      "giphy.com",
      "picsum.photos",
      "images.unsplash.com",
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm)$/,
      use: {
        loader: "file-loader",
        options: {
          publicPath: "/_next",
          outputPath: "static/videos/", // Change this output path as needed
          name: "[name].[ext]",
          esModule: false,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
