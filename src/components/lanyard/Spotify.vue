<script lang="ts" setup>
import { DiscordSpotify } from '~/types/lanyard';

interface Props {
	data: DiscordSpotify;
}

const { data } = defineProps<Props>();
</script>

<template>
	<div
		class="w-full px-3 py-2 text-white rounded-md cursor-pointer font-karla hover:bg-white/10"
		@click="$openUrlInNewTab($getSpotifySongUrl(data.track_id))"
	>
		<h5 class="mb-1 font-semibold">Listening to Spotify</h5>
		<div class="flex flex-row items-center">
			<div class="relative h-12">
				<img class="w-12 h-12 rounded-xl" :src="data.album_art_url" />
				<img class="absolute -bottom-1 -right-1 w-5 h-5 rounded-[50%] bg-black" src="/images/spotify-logo.svg" />
			</div>
			<div class="ml-4">
				<h5 class="m-0 text-base font-semibold text-white">{{ data.song }}</h5>
				<p class="m-0 text-sm text-white/80">{{ data.artist }}</p>
			</div>
		</div>
	</div>
</template>
