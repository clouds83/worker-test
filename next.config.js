/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  outputFileTracingIncludes: {
    'app/api/heavy/utils': ['./heavyFunction.js'],
  },
}

module.exports = nextConfig
