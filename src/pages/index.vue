<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

const lanyard = useLanyard();
const store = useLanyardStore();

watch(lanyard, () => {
	store.setStatus(lanyard.value.discord_status ?? 'offline');
	store.setActivity(lanyard.value.activities.filter((activity) => activity.type === 0)[0] ?? null);
	store.setSpotify(lanyard.value.spotify ?? null);
});
</script>

<template>
	<div class="container mx-auto lg:w-[50%] w-[100%] px-14 2xl:px-10 pb-20 lg:pb-10">
		<LazyMe />
		<LazyExperience />
		<LazyEducation />
		<LazyCertifications />
	</div>
	<div class="bg-[url(/images/right-bg.jpg)] bg-cover bg-[#101926] text-white px-14 lg:px-18 lg:w-[40%] w-[100%] pb-10">
		<LazyAbout />
		<LazySkills />
		<LazyLanyardDoing />
		<LazyMadeWithTailwind />
	</div>
</template>
