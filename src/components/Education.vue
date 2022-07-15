<script lang="ts" setup>
const educationData = await $fetch('/api/education');
</script>

<template>
	<div class="mt-5">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Education</div>
		<div class="grid grid-cols-1 gap-4">
			<div v-for="({ area, start: { year: startYear }, end: { year: endYear }, description }, key) in educationData" :key="key">
				<h4 class="text-lg font-medium font-inter">{{ area }}</h4>
				<h4 class="pb-4 text-sm font-medium text-slate-500 font-dm-sans">{{ startYear }} - {{ endYear }}</h4>
				<p class="text-base font-normal text-slate-700 font-dm-sans">
					{{ description }}
				</p>
			</div>
		</div>
	</div>
	<hr class="mt-5" />
</template>
