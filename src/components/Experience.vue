<script lang="ts" setup>
const experienceData = await $fetch<Record<any, any>>('/api/experience');
</script>

<template>
	<template v-if="Object.keys(experienceData).length">
		<div class="mt-5">
			<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Experience & Projects</div>
			<div class="grid grid-cols-1 gap-4">soonTM</div>
		</div>
		<Divider />
	</template>
</template>
