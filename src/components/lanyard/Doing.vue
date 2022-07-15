<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

import Spotify from '../lanyard/Spotify.vue';
import VSCode from '../lanyard/VSCode.vue';

const store = useLanyardStore();
</script>

<template>
	<div class="flex flex-col items-start justify-center w-full">
		<VSCode v-if="store.activity" :data="store.activity" />
		<Spotify v-if="store.spotify" :data="store.spotify" />
	</div>
</template>

<style lang="scss" scoped></style>
