import withNextIntl from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '',
  assetPrefix: '',
  images: {
    unoptimized: true,
  },
}

export default withNextIntl()(nextConfig)
