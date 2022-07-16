<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';
import { useTippy } from 'vue-tippy';

const store = useLanyardStore();
const { public: config } = useRuntimeConfig();
const locationRef = ref(null);

useTippy(locationRef, {
	followCursor: true,
	animation: false,
	content: 'Open in Google Maps'
});

const location = computed(() => store.kv.location ?? config.location);
</script>

<template>
	<div>
		<h4 class="pt-10 pb-2 text-base font-medium text-slate-400 font-inter">About</h4>
		<p class="font-inter">
			Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
			minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
		</p>
		<a
			ref="locationRef"
			:href="`https://www.google.com/maps/search/${encodeURIComponent(location)}`"
			target="_blank"
			rel="noreferrer"
			class="flex gap-2 mt-5 transition-all duration-200 hover:text-slate-300 text-slate-400"
		>
			<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
				<path
					stroke-linecap="round"
					stroke-linejoin="round"
					d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
				></path>
				<path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
			</svg>
			<span class="font-inter">{{ location }}</span>
		</a>
	</div>
</template>
