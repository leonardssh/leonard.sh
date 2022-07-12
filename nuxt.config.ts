import { defineNuxtConfig, type NuxtConfig } from 'nuxt';

const config: NuxtConfig = {
	modules: [['./src/modules/netlify-files', { filesDirectory: '.' }]],

	srcDir: 'src',
	target: 'static',

	css: ['~/assets/css/fonts.css', '~/assets/css/tailwind.css'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {}
				}
			}
		}
	}
};

export default defineNuxtConfig(config);
