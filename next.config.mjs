/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: '/api',
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "neuroapi-store.s3.eu-central-1.amazonaws.com",
            },
        ],
    },
};

export default nextConfig;
