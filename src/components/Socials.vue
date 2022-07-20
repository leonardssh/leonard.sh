<script lang="ts" setup>
import { inject } from 'vue';
import type { Resume } from '~/types/resume';

const {
	basics: { profiles }
} = inject<Resume>('resume');
</script>

<template>
	<div class="flex items-end justify-center mt-5 space-x-3 text-3xl cursor-pointer lg:text-2xl lg:m-0 text-slate-500">
		<template v-for="(social, key) in profiles" :key="key">
			<a v-if="social.network !== 'Portfolio'" :href="social.url" target="_blank" class="transition-all duration-200 hover:text-slate-700">
				<nuxt-icon :name="social.network" />
			</a>
		</template>
	</div>
</template>
