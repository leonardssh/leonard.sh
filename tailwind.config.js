const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	darkMode: 'class',
	content: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				inter: ['Inter', ...defaultTheme.fontFamily.sans],
				karla: ['Karla', ...defaultTheme.fontFamily.sans],
				inconsolata: ['Inconsolata', ...defaultTheme.fontFamily.mono]
			}
		}
	},
	variants: {
		extend: {}
	},
	plugins: []
};
