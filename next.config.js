/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      'app/api/heavy/utils': ['./**'],
    },
  },
}

module.exports = nextConfig
