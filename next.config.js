/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    APP_VERSION: process.env.APP_VERSION
  },
  cleanDistDir: false,
  generateBuildId: () => process.env.APP_VERSION,
}

module.exports = nextConfig;