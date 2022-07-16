<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

import Spotify from './lanyard/Spotify.vue';
import VSCode from './lanyard/VSCode.vue';

const store = useLanyardStore();
</script>

<template>
	<div class="flex flex-col w-fit sm:w-full lg:w-fit xl:w-fit 2xl:w-full sm:flex-row lg:flex-col xl:flex-col 2xl:flex-row">
		<VSCode
			v-if="store.activity"
			:data="store.activity"
			class="p-2 transition-all duration-200 hover:bg-white/5"
			@click="$openUrlInNewTab('https://github.com/phineas/lanyard')"
		/>
		<Spotify
			v-if="store.spotify"
			:data="store.spotify"
			class="p-2 transition-all duration-200 hover:bg-white/5"
			@click="$openUrlInNewTab($getSpotifySongUrl(store.spotify.track_id))"
		/>
	</div>
</template>
