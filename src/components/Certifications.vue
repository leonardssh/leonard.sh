<script lang="ts" setup>
import { inject } from 'vue';
import type { Resume } from '~/types/resume';

const { certificates } = inject<Readonly<Resume>>('resume');
</script>

<template>
	<div class="mt-5" v-if="certificates.length">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Certificates</div>
		<div class="grid grid-cols-1 gap-4">
			<div v-for="({ name, url, date, issuer, summary, highlights }, key) in certificates" :key="key">
				<div class="flex flex-row items-baseline justify-start text-base font-inter">
					<p class="font-medium font-inter">{{ name }},</p>
					<a class="ml-1 font-normal text-slate-700" target="_blank" :href="url">{{ issuer }}</a>
				</div>
				<p class="text-sm font-medium text-slate-500 font-dm-sans">Issued {{ $formatDate(date.month, date.year) }}</p>
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
