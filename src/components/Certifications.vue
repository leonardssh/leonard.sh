<script lang="ts" setup>
import { type Certification } from '~/types/certification';

const certifications = await $fetch<Certification[]>('/api/certifications');

const shortDate = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
const formatDate = (month: number, year: number) => {
	return `${shortDate[month - 1]} ${year}`;
};
</script>

<template>
	<template v-if="Object.keys(certifications).length">
		<div class="mt-5">
			<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Licenses & Certifications</div>
			<div class="grid grid-cols-1 gap-4">
				<div v-for="({ area, issuingBy, issueDate, expirationDate }, key) in certifications" :key="key">
					<h4 class="text-lg font-medium font-inter">{{ area }}</h4>
					<a class="pb-4 text-sm font-medium text-slate-700 font-dm-sans" target="_blank" :href="issuingBy.url">{{ issuingBy.name }}</a>
					<p class="text-sm font-normal text-slate-500 font-dm-sans">
						Issued {{ formatDate(issueDate.month, issueDate.year) }} -
						{{ expirationDate ? formatDate(expirationDate.month, expirationDate.year) : 'Present' }}
					</p>
				</div>
			</div>
		</div>
	</template>
</template>
