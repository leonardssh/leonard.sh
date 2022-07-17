<script lang="ts" setup>
import { DiscordSpotify } from '~/types/lanyard';

interface Props {
	data: DiscordSpotify;
}

const { data } = defineProps<Props>();

const { elementRef: spotifyRef } = useTooltip({
	content: 'Open current song in Spotify'
});
</script>

<template>
	<div ref="spotifyRef" class="w-[calc(100%+2rem)] text-white rounded-xl cursor-pointer overflow-auto font-karla">
		<h5 class="mb-1 font-semibold">Listening to Spotify</h5>
		<div class="flex flex-row items-center">
			<div class="relative h-16">
				<img class="w-16 h-16 border shadow-sm rounded-xl border-white/10 shadow-black/50" :src="data.album_art_url" />
				<img class="absolute -bottom-1 -right-1 w-5 h-5 rounded-[50%] border border-white/10 bg-black" src="/images/spotify-logo.svg" />
			</div>
			<div class="ml-4">
				<h5 class="m-0 text-base font-semibold text-white">{{ data.song }}</h5>
				<p class="m-0 text-sm text-white/80">{{ data.artist }}</p>
			</div>
		</div>
	</div>
</template>
