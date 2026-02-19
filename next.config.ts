import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
    // Optimize images
    images: {
        quality: 100,
        formats: ['image/avif', 'image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        minimumCacheTTL: 31536000, // 1 year
    },
    // Reduce unused JavaScript by targeting modern browsers
    experimental: {
        optimizePackageImports: ['next-intl'],
    },
};

export default withNextIntl(nextConfig);

