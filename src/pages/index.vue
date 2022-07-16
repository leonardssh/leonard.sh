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
	<LeftSide>
		<Me />
		<Experience />
		<Education />
		<Certifications />
	</LeftSide>

	<RightSide>
		<About />
		<Skills />
		<Doing />
		<MadeWithTailwind />
	</RightSide>
</template>
