import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,

  i18n: {
    locales: ['pt', 'en', 'es', 'fr'],
    defaultLocale: 'pt',
  },
};

export default nextConfig;
