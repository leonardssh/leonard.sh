<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';
import { type LanyardKV } from '~/types/lanyard';

const store = useLanyardStore();
const lanyard = useLanyard();

watch(lanyard, () => {
	store.setStatus(lanyard.value.discord_status ?? 'offline');
	store.setActivity(lanyard.value.activities.filter((activity) => activity.type === 0)[0] ?? null);
	store.setSpotify(lanyard.value.spotify ?? null);
	store.setKV(lanyard.value.kv ?? ({} as LanyardKV));
});
</script>

<template>
	<Side v-motion-slide-bottom :delay="900" layout="left">
		<Me />
		<Experience />
		<Education />
		<Certifications />
	</Side>

	<Side v-motion-slide-visible-right layout="right">
		<About />
		<Skills />
		<Languages />
		<Doing />
		<MadeWithTailwind />
	</Side>
</template>
