/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ibb.co",
      },
    ],
  },
};

export default nextConfig;
