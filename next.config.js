/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    outputFileTracingIncludes: {
      'api/heavy/utils': ['./heavyFunction.js'],
    },
  },
}

module.exports = nextConfig
