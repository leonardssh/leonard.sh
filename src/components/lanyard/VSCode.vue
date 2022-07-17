<script lang="ts" setup>
import { DiscordActivity } from '~/types/lanyard';

interface Props {
	data: DiscordActivity;
}

const { data } = defineProps<Props>();

const { $getElapsedTime, $getDiscordAssetUrl } = useNuxtApp();
const { elementRef: vscodeRef } = useTooltip({
	content: 'Go to Lanyard github repository'
});

const elapsedTime = ref($getElapsedTime(new Date(data.timestamps.start).getTime()));

let intervalUpdate: NodeJS.Timer | null = null;

tryOnMounted(() => {
	if (intervalUpdate !== null) {
		clearInterval(intervalUpdate);
		intervalUpdate = null;
	}

	intervalUpdate = setInterval(() => {
		const date = new Date(data.timestamps.start).getTime();
		elapsedTime.value = $getElapsedTime(date);
	}, 1_000);
});

tryOnUnmounted(() => {
	if (intervalUpdate !== null) {
		clearInterval(intervalUpdate);
		intervalUpdate = null;
	}
});
</script>

<template>
	<div ref="vscodeRef" class="w-[calc(100%+2rem)] text-white rounded-xl cursor-pointer overflow-auto font-karla">
		<h5 class="mb-1 font-semibold">Doing something</h5>
		<div class="flex flex-row items-center">
			<div class="relative h-16" v-if="data.assets">
				<img
					class="w-16 h-16 border shadow-sm rounded-xl border-white/10 shadow-black/50"
					:src="$getDiscordAssetUrl(data.assets.large_image, data.application_id)"
				/>
				<img
					class="absolute -bottom-1 -right-1 w-5 h-5 rounded-[50%] border border-white/10"
					:src="$getDiscordAssetUrl(data.assets.small_image, data.application_id)"
				/>
			</div>
			<div class="ml-4">
				<h5 class="m-0 text-base font-semibold text-white">{{ data.name }}</h5>
				<p v-if="data.details" class="m-0 text-sm text-white/80">{{ data.details }}</p>
				<p v-if="data.state" class="m-0 text-sm text-white/80">{{ data.state }}</p>
				<p
					v-if="data.timestamps && data.timestamps.start"
					class="m-0 overflow-hidden text-sm text-white/80 whitespace-nowrap overflow-ellipsis"
				>
					{{ elapsedTime }} elapsed
				</p>
			</div>
		</div>
	</div>
</template>
