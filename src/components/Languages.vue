<script lang="ts" setup>
import { useResumeStore } from '~/stores';

const {
	resume: { languages }
} = useResumeStore();
</script>

<template>
	<div class="font-inter font-sm">
		<h4 class="mb-2 text-base font-medium text-slate-400">Languages</h4>
		<template v-for="({ language, fluency }, key) of languages" :key="key">
			<div class="inline-block">
				<span class="text-sm font-medium">{{ language }}</span>
				<span class="ml-1 text-sm">({{ fluency }}){{ key < languages.length - 1 ? ',&nbsp;' : '' }}</span>
			</div>
		</template>
	</div>
</template>
