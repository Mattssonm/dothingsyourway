/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
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
			"primary-dark": "hsla(195, 40%, 15%, 1.0)",
			"text-dark": "hsla(195, 40%, 8%, 1.0)",
			"text-light": "hsla(195, 0%, 90%, 1.0)",
			secondary: "hsla(14, 60%, 45%, 1.0)",
			"secondary-dark": "hsla(14, 60%, 35%, 1.0)",
		},
	},
	plugins: [],
};
