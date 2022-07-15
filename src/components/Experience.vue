<script lang="ts" setup>
const experienceData = await $fetch('/api/experience');
</script>

<template>
	<div class="mt-5">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Experience</div>
		<div class="grid grid-cols-1 gap-4">soonTM</div>
	</div>
	<hr class="mt-5" />
</template>
