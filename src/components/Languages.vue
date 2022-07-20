<script lang="ts" setup>
import { inject } from 'vue';
import type { Resume } from '~/types/resume';

const { languages } = inject<Readonly<Resume>>('resume');
</script>

<template>
	<div class="font-inter font-sm" v-if="languages.length">
		<h4 class="mb-2 text-base font-medium text-slate-400">Languages</h4>
		<template v-for="({ language, fluency }, key) of languages" :key="key">
			<div class="inline-block">
				<span class="text-sm font-medium">{{ language }}</span>
				<span class="ml-1 text-sm">({{ fluency }}){{ key < languages.length - 1 ? ',&nbsp;' : '' }}</span>
			</div>
		</template>
	</div>
</template>
