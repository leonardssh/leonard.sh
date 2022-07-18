<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

const store = useLanyardStore();
const { public: config } = useRuntimeConfig();
const { elementRef: locationRef } = useTooltip({
	content: 'Open in Google Maps'
});

const location = computed(() => store.kv.location ?? config.location);
</script>

<template>
	<div class="font-inter">
		<h4 class="pt-10 pb-2 text-base font-medium text-slate-400">About</h4>
		<div class="space-y-5">
			<p>
				My name is <Link url="https://en.wikipedia.org/wiki/Narcissus_(mythology)">Narcis</Link> and I'm a full-stack developer who relocated
				recently to The Netherlands. I'm looking for new challenges in my career therefore I'm currently looking for hire.
			</p>
			<p>
				I'm well versed in the art of web development. I can manage to do front-end and back-end with relative ease from the point of
				conceptualization to the point of delivery.
			</p>
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
