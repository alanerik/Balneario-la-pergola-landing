/** @type {import('tailwindcss').Config} */

import defaultTheme from "tailwindcss/defaultTheme";
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xs: "320px",
				...defaultTheme.screens,
				"3xl": "1650px",
			},
			
		},
	},
	plugins: [],
};
