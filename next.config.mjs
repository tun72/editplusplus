import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  // basePath: '/api',
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "neuroapi-store.s3.eu-central-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        port: "",
      },

      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },

      {
        protocol: "https",
        hostname: "cdn.picsart.io",
        port: "",
      },

      
    ],
  },
};

export default withNextIntl(nextConfig);
