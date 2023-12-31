/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true'

let assetPrefix = ''
let basePath = '/'

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, '')

  assetPrefix = `/${repo}/`
  basePath = `/${repo}`
}

const nextConfig = {
  reactStrictMode: true,
  assetPrefix,
  basePath,
  env: {
    BUILDER_API_KEY: 'ffbb056c7c114e4080317099b533d26f',
    BUILDER_MODEL: 'page',
    BUILDER_PRIVATE_API_KEY: 'bpk-af32352e9dd34e44822b3b49293f5c4d',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.builder.io',
      },
    ],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    })

    return config
  },
}

const withBunldleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = withBunldleAnalyzer(nextConfig)
