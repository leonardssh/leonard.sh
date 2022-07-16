<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

const store = useLanyardStore();
const lanyard = useLanyard();

watch(lanyard, () => {
	store.setStatus(lanyard.value.discord_status ?? 'offline');
	store.setActivity(lanyard.value.activities.filter((activity) => activity.type === 0)[0] ?? null);
	store.setSpotify(lanyard.value.spotify ?? null);
});
</script>

<template>
	<Side layout="left">
		<Me />
		<Experience />
		<Education />
		<Certifications />
	</Side>

	<Side layout="right">
		<About />
		<Skills />
		<Doing />
		<MadeWithTailwind />
	</Side>
</template>
