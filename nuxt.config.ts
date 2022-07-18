import { defineNuxtConfig, type NuxtConfig } from 'nuxt';

const isDev = process.env.NODE_ENV === 'development';

const { WAKATIME_KEY, GITHUB_ACCESS_TOKEN } = process.env;

const LANYARD_WEBSOCKET_URL = 'wss://api.lanyard.rest/socket';
const GITHUB_API_URL = 'https://api.github.com';

const config: NuxtConfig = {
	modules: ['@pinia/nuxt', '@vueuse/nuxt', '@vueuse/motion/nuxt', 'nuxt-icons'],

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

	css: ['~/assets/css/fonts.css', '~/assets/css/tailwind.css', '~/assets/css/global.css', '~/assets/css/tooltip.css'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {}
				}
			}
		}
	},

	runtimeConfig: {
		app: {
			wakaTimeKey: WAKATIME_KEY,
			githubAccessToken: GITHUB_ACCESS_TOKEN
		},
		public: {
			discordId: '290131759159443457',
			lanyardWebsocketUrl: LANYARD_WEBSOCKET_URL,
			githubApiUrl: GITHUB_API_URL,
			wakaTimeUser: 'leonard',
			location: 'Rotterdam — South Holland, The Netherlands',
			devMode: isDev
		}
	}
};

export default defineNuxtConfig(config);
