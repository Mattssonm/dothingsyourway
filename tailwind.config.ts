/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
		"./node_modules/flowbite-react/**/*.js",
	],
	theme: {
		extend: {
			fontFamily: {
				sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
				display: ["var(--font-display)", ...defaultTheme.fontFamily.sans],
			},
		},
		colors: {
			transparent: "transparent",
			current: "currentColor",
			"bright-white": "hsla(0, 0%, 100%, 1.0)",
			background: "hsla(0, 0%, 95%, 1.0)",
			black: "hsla(0, 0%, 10%, 1.0)",
			"primary-darkest": "hsla(195, 40%, 9%, 1.0)",
			"primary-dark": "hsla(195, 40%, 15%, 1.0)",
			primary: "hsla(195, 35%, 25%, 1.0)",
			"primary-light": "hsla(195, 15%, 65%, 1.0)",
			"text-dark": "hsla(195, 40%, 8%, 1.0)",
			"text-light": "hsla(195, 0%, 90%, 1.0)",
			secondary: "hsla(14, 60%, 45%, 1.0)",
			"secondary-dark": "hsla(14, 60%, 35%, 1.0)",
			"secondary-darkest": "hsla(14, 30%, 20%, 1.0)",
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [require("flowbite/plugin"), require("@tailwindcss/aspect-ratio")],
};

export type Color =
	| "transparent"
	| "current"
	| "white"
	| "black"
	| "primary"
	| "primary-dark"
	| "primary-darkest"
	| "primary-light"
	| "text-dark"
	| "text-light"
	| "secondary"
	| "secondary-dark";
