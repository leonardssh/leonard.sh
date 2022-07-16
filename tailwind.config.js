const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./src/**/*.{ts,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
				karla: ['Karla', ...defaultTheme.fontFamily.sans],
				inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono],
				'dm-sans': ['DM Sans', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
