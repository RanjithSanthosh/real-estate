import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    // ✅ Skip build if there are TypeScript errors
    ignoreBuildErrors: true,
  },

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.youtube.com',
        port: '',
        pathname: '/**', // Changed from '/' to '/**'
      },
      {
        protocol: "https",
        hostname: "picsum.photos",
        pathname: '/**', // Added pathname
      },
      {
        protocol: "https",
        hostname: "flagcdn.com",
        pathname: '/**', // Added pathname
      },
      {
        protocol: "https",
        hostname: "i.imgur.com",
        pathname: '/**', // Added pathname
      },
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**", // Changed to allow all paths
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "",
        pathname: "/**", // Changed to allow all paths
      },
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: '/**', // Added pathname
      },
      // REMOVED DUPLICATE images.unsplash.com entry
      
      // PRISMIC AND POSTIMAGE PATTERNS
      {
        protocol: 'https',
        hostname: 'images.prismic.io',
        port: '',
        pathname: '/**', // Changed to allow all paths
      },
      {
        protocol: 'https',
        hostname: 'i.postimg.cc',
        port: '',
        pathname: '/**', // Changed to allow all paths
      },
      {
        protocol: 'https',
        hostname: 'homekonnectcms.cdn.prismic.io',
        port: '',
        pathname: '/**', // Changed to allow all paths
      },
      {
        protocol: 'https',
        hostname: '**.prismic.io', // Use wildcard for all subdomains
        port: '',
        pathname: '/**',
      },
    ],
  },

  // This is the new part for handling SVGs
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;