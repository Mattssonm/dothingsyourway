/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "automatehero.io",
				port: "",
				pathname: "/api/path/**",
			},
		],
	},
};

module.exports = nextConfig;
