import { defineNuxtConfig, type NuxtConfig } from 'nuxt';

const isDev = process.env.NODE_ENV === 'development';
const wakaTimeKey = process.env.WAKATIME_KEY;

const LANYARD_WEBSOCKET_URL = 'wss://api.lanyard.rest/socket';

const config: NuxtConfig = {
	modules: ['@pinia/nuxt', '@vueuse/nuxt'],

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
			wakaTimeKey
		},
		public: {
			discordId: '290131759159443457',
			lanyardWebsocketUrl: LANYARD_WEBSOCKET_URL,
			wakaTimeUser: 'leonard'
		}
	}
};

export default defineNuxtConfig(config);
