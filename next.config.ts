import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No basePath needed for subdomain deployment (v2.juanjosemogat.art)
  
  // Optimizaciones de imágenes
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    unoptimized: false,
  },
  // Compresión
  compress: true,
  // Optimizaciones de producción
  poweredByHeader: false,
  // React strict mode
  reactStrictMode: true,
};

export default nextConfig;
