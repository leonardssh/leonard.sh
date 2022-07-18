<script lang="ts" setup>
import { type Certification } from '~/types/certification';

const certifications = await $fetch<Certification[]>('/api/certifications');
</script>

<template>
	<template v-if="Object.keys(certifications).length">
		<div class="mt-5">
			<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Certifications</div>
			<div class="grid grid-cols-1 gap-4">
				<div v-for="({ area, issuingBy, issueDate, expirationDate, summary, highlights }, key) in certifications" :key="key">
					<div class="flex flex-row items-baseline justify-start text-base font-inter">
						<p class="font-medium font-inter">{{ area }},</p>
						<a class="ml-1 font-normal text-slate-700" target="_blank" :href="issuingBy.url">{{ issuingBy.name }}</a>
					</div>
					<p class="text-sm font-medium text-slate-500 font-dm-sans">
						Issued {{ $formatDate(issueDate.month, issueDate.year) }} -
						{{ expirationDate ? $formatDate(expirationDate.month, expirationDate.year) : 'Present' }}
					</p>
					<p class="mt-2 text-base font-normal text-slate-700 font-dm-sans">
						{{ summary }}
					</p>
					<ul class="text-sm font-medium text-white list-disc font-inter">
						<li v-for="highlight of highlights" class="space-x-2 text-slate-600">
							{{ highlight }}
						</li>
					</ul>
				</div>
			</div>
		</div>
	</template>
</template>
