/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    domains: ["images.unsplash.com"],

    unoptimized: true, // If using images
  },
};

export default nextConfig;
