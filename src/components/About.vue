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
				My name is
				<Link url="https://en.wikipedia.org/wiki/Narcissus_(mythology)">Narcis</Link>, known as
				<Link url="https://en.wikipedia.org/wiki/Leonard">Leonard</Link>
				everywhere, and I'm an <Age /> full-stack web developer based in The Netherlands, currently pursuing full-stack web development to
				create stunning user experiences on the front-end, and scalable and secure infrastructure on the backend.
			</p>
			<p>
				Thanks to my strategic and technical skills, I can manage web projects from A to Z. At ease from the conceptualization to the
				technical details of a website, I'm a real Swiss army knife who knows the web like the back of his hand.
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
