const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'standalone',
  // experimental: {
  //   outputFileTracingIncludes: {
  //     'api/heavy/utils': ['./heavyFunction.js'],
  //   },
  // },
  // webpack: (config) => {
  //   config.resolve.alias['@utils'] = 'app/api/heavy/utils'
  //   return config
  // },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.module.rules.push({
        test: /\.worker\.js$/,
        use: { loader: 'worker-loader' },
      })
    }
    return config
  },
}

module.exports = nextConfig
