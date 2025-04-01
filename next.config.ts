import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      "hebbkx1anhila5yf.public.blob.vercel-storage.com",
      "res.cloudinary.com",
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742311461/spectral-spark-neon-luster-photo_960396-222562_peprmj.jpg",
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394194/e74bb5c8efaa066cc9db6f6d82d22634_b4cfgs.jpg",
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394285/R.434fa0dd0eeaaf615cfc5b89079012dc_tawbpc.jpg",
      "https://res.cloudinary.com/druohnmyv/image/upload/v1742394340/AdobeStock_230366692_iybwdu.jpg",
    ],
  },
};

export default nextConfig;
