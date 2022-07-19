<script lang="ts" setup>
import { useResumeStore } from '~/stores';

const {
	resume: { basics }
} = useResumeStore();

const { elementRef: meRef } = useTooltip({
	content: 'Hey, this is me!'
});
</script>

<template>
	<div class="flex flex-col items-center justify-center my-12 lg:flex-row lg:justify-start">
		<div
			v-motion-slide-left
			:delay="1250"
			ref="meRef"
			class="relative m-0 lg:m-0 flex bg-[url('/images/me.png')] bg-cover bg-center bg-no-repeat rounded-full w-20 h-20 shadow-lg shadow-blue-300"
		>
			<div class="absolute bottom-0 right-0">
				<DiscordStatus />
			</div>
		</div>
		<div v-motion-slide-bottom class="flex flex-col items-center justify-between w-[calc(100%-5rem)] m-0 lg:ml-6 xl:ml-6 2xl:ml-6 lg:flex-row">
			<div class="flex flex-col items-start justify-center">
				<h1 class="m-auto mt-6 text-3xl font-bold font-inter slide-top lg:m-0">{{ basics.name }}</h1>
				<h2 class="m-auto text-lg font-medium text-center font-inter text-slate-500 slide-top lg:m-0">{{ basics.label }}</h2>
			</div>
			<Socials v-motion-slide-right :delay="1250" />
		</div>
	</div>
</template>
