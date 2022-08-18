/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_VERSION: process.env.APP_VERSION
  },
  cleanDistDir: false,
  generateBuildId: () => process.env.APP_VERSION,
  i18n: {
    locales: ['aus', 'nz'],
    defaultLocale: 'aus',
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'aus',
      },
      {
        domain: 'nz.localhost',
        defaultLocale: 'nz',
      },
    ],
  },
}

module.exports = nextConfig;