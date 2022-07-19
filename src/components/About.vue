<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';
import { useResumeStore } from '~/stores';

const { kv } = useLanyardStore();
const {
	resume: { basics }
} = useResumeStore();

const { public: config } = useRuntimeConfig();

const { elementRef: locationRef } = useTooltip({
	content: 'Open in Google Maps'
});

const location = computed(() => kv.location ?? config.location);
</script>

<template>
	<div class="font-inter">
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
