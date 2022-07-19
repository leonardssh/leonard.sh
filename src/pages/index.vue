<script lang="ts" setup>
import { useLanyardStore, useResumeStore } from '~/stores';

import type { LanyardKV } from '~/types/lanyard';
import type { Resume } from '~/types/resume';

const lanyardStore = useLanyardStore();
const resumeStore = useResumeStore();

const lanyard = useLanyard();

const resume = await $fetch<Resume>('/api/resume');
resumeStore.setResume(resume);

watch(lanyard, () => {
	lanyardStore.setStatus(lanyard.value.discord_status ?? 'offline');
	lanyardStore.setActivity(lanyard.value.activities.filter((activity) => activity.type === 0)[0] ?? null);
	lanyardStore.setSpotify(lanyard.value.spotify ?? null);
	lanyardStore.setKV(lanyard.value.kv ?? ({} as LanyardKV));
});
</script>

<template>
	<Side v-motion-slide-bottom :delay="1000" layout="left">
		<Me />
		<!-- <Projects /> -->
		<Experience />
		<Education />
		<Certifications />
	</Side>

	<Side v-motion-slide-right :delay="250" layout="right">
		<About />
		<Skills />
		<Languages />
		<!-- <Doing /> -->
		<MadeWithTailwind />
	</Side>
</template>
