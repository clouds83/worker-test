const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingIncludes: {
  //     'api/heavy/utils': ['./heavyFunction.js'],
  //   },
  // },
  webpack: (config) => {
    config.resolve.alias['@utils'] = 'app/api/heavy/utils'
    return config
  },
}

module.exports = nextConfig
