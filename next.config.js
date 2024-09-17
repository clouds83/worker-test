/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    outputFileTracingIncludes: {
      'app/api/heavy': ['./**'],
    },
  },
}

module.exports = nextConfig
