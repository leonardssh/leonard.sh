<script lang="ts" setup>
import { provide } from 'vue';
import head from '~/constants/head';

import type { Resume } from './types/resume';

useHead(head);

const lanyard = useLanyard();
provide('lanyard', readonly(lanyard));

const resume = await $fetch<Resume>('/api/resume');
provide('resume', readonly(resume));
</script>

<template>
	<div v-if="lanyard && resume" class="flex flex-col overflow-hidden lg:flex-row bg-effect">
		<NuxtPage />
	</div>
</template>

<style lang="scss">
.bg-effect {
	background: rgba(0, 0, 0, 0) radial-gradient(64.9% 34.2308% at 0% 0%, rgba(147, 196, 253, 0.275) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0%
		0%;
}
</style>
