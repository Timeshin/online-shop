/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
	images: {
		domains: ['fakestoreapi.com']
	},
	eslint: {
		dirs: ['src']
	},
	typescript: {
		tsconfigPath: './tsconfig.json'
	},
	reactStrictMode: false,
	experimental: {
		appDir: true
	}
}

module.exports = nextConfig
