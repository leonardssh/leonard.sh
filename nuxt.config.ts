import { defineNuxtConfig, type NuxtConfig } from 'nuxt';

const isDev = process.env.NODE_ENV === 'development';

const config: NuxtConfig = {
	typescript: {
		shim: false,
		typeCheck: true
	},

	srcDir: 'src',
	target: 'static',

	/*
    Disabling server-side rendering on development mode because
    Vite module currently doesn't work when SSR is enabled. This
    might cause some issues and/or hydration errors but will be
    effective enough to help you develop easier.
  */
	ssr: !isDev,

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
