<script lang="ts" setup>
import { inject, type Ref } from 'vue';
import type { Resume } from '~/types/resume';
import { LanyardData } from '../types/lanyard';

const { basics } = inject<Readonly<Resume>>('resume');
const lanyard = inject<Readonly<Ref<LanyardData>>>('lanyard');

const { public: config } = useRuntimeConfig();

const { elementRef: locationRef } = useTooltip({
	content: 'Open in Google Maps'
});

const location = computed(() => unref(lanyard).kv.location ?? config.location);
</script>

<template>
	<div class="font-inter" v-if="basics">
		<h4 class="pt-10 pb-2 text-base font-medium text-slate-400">About</h4>
		<div class="space-y-5">
			<template v-for="summary of basics.summary.split('\n\n')">
				<p>{{ summary }}</p>
			</template>
		</div>
		<a
			ref="locationRef"
			:href="`https://www.google.com/maps/search/${encodeURIComponent(location)}`"
			target="_blank"
			rel="noreferrer"
			class="flex gap-2 mt-5 transition-all duration-200 hover:text-slate-300 text-slate-400"
		>
			<nuxt-icon name="map-pin" class="text-2xl"></nuxt-icon>
			{{ location }}
		</a>
	</div>
</template>
