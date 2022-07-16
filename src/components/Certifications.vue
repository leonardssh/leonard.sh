<script lang="ts" setup>
const certifications = await $fetch('/api/certifications');
</script>

<template>
	<div class="mt-5">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Licenses & Certifications</div>
		<div class="grid grid-cols-1 gap-4">
			<div v-for="({ area, issuingBy, issueDate, expirationDate }, key) in certifications" :key="key">
				<h4 class="text-lg font-medium font-inter">{{ area }}</h4>
				<a class="pb-4 text-sm font-medium text-slate-700 font-dm-sans" target="_blank" :href="issuingBy.url">{{ issuingBy.name }}</a>
				<p class="text-sm font-normal text-slate-500 font-dm-sans">
					Issued {{ new Date(`${issueDate.month}-1-${issueDate.year}`).toLocaleString('en-US', { month: 'short', year: 'numeric' }) }} -
					{{ expirationDate ? expirationDate.month + ' ' + expirationDate.year : 'Present' }}
				</p>
			</div>
		</div>
	</div>
</template>
