/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      'api/heavy/utils': ['./**'],
    },
  },
}

module.exports = nextConfig
