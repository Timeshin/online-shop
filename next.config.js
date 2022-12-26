/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  eslint: {
    dirs: ['src']
  },
  typescript: {
    tsconfigPath: './tsconfig.json'
  },
  reactStrictMode: false,
}

module.exports = nextConfig
