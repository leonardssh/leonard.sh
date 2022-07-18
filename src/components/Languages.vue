<script lang="ts" setup>
const languages = [
	{
		lang: 'Romanian',
		level: 'Native speaker'
	},
	{
		lang: 'English',
		level: 'Intermediate'
	},
	{
		lang: 'Spanish',
		level: 'Intermediate'
	}
];
</script>

<template>
	<div class="font-inter font-sm">
		<h4 class="mb-2 text-base font-medium text-slate-400">Languages</h4>
		<template v-for="({ lang, level }, key) of languages" :key="key">
			<div class="inline-block">
				<span class="text-sm font-medium">{{ lang }}</span>
				<span class="ml-1 text-sm">({{ level }}){{ key < languages.length - 1 ? ',&nbsp;' : '' }}</span>
			</div>
		</template>
	</div>
</template>
