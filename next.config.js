/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      'api/heavy': ['./**'],
    },
  },
}

module.exports = nextConfig
