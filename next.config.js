/** @type {import('next').NextConfig} */
module.exports = {
	reactStrictMode: true,
	staticPageGenerationTimeout: 1000,
	optimizeFonts: false,

	// images
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
				pathname: "/*",
			},
		],
	},
};
