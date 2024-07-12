/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "i.ibb.co.com"
            }
        ]
    }
};

export default nextConfig;
