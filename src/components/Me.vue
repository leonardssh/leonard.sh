<script lang="ts" setup>
import { useTippy } from 'vue-tippy';

const meRef = ref(null);

useTippy(meRef, {
	followCursor: true,
	animation: false,
	content: 'Hey, this is me!'
});
</script>

<template>
	<div class="flex flex-col items-center justify-center my-12 lg:flex-row lg:justify-start">
		<div
			v-motion-roll-visible-left
			ref="meRef"
			class="relative m-auto lg:m-0 flex bg-[url('/images/me.png')] bg-cover bg-center bg-no-repeat rounded-full w-20 h-20 shadow-lg shadow-blue-300"
		>
			<div class="absolute bottom-0 right-0">
				<DiscordStatus />
			</div>
		</div>
		<div v-motion-slide-visible-bottom class="flex flex-col items-start justify-center ml-6">
			<h1 class="m-auto mt-6 text-3xl font-bold font-inter slide-top lg:m-0">Narcis B.</h1>
			<h2 class="m-auto text-lg font-medium font-inter text-slate-500 slide-top lg:m-0">Full Stack Web Developer</h2>
		</div>
	</div>
</template>
