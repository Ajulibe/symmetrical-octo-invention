/** @type {import('next').NextConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true"
});

module.exports = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ["res.cloudinary.com", "tailwindcss.com"]
  }
});
