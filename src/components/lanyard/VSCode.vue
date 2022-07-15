<script lang="ts" setup>
import { DiscordActivity } from '~/types/lanyard';

interface Props {
	data: DiscordActivity;
}

const { $getElapsedTime, $getDiscordAssetUrl } = useNuxtApp();
const { data } = defineProps<Props>();

let intervalUpdate: NodeJS.Timer | null = null;

const elapsedTime = ref($getElapsedTime(new Date(data.timestamps.start).getTime()));

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
	<div class="w-full px-3 py-2 text-white rounded-md cursor-pointer font-karla hover:bg-white/10">
		<h5 class="mb-1 font-semibold">Doing something</h5>
		<div class="flex flex-row items-center">
			<div class="relative h-12" v-if="data.assets">
				<img class="w-12 h-12 border rounded-xl border-white/10" :src="$getDiscordAssetUrl(data.assets.large_image, data.application_id)" />
				<img
					class="absolute -bottom-1 -right-1 w-5 h-5 rounded-[50%]"
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
