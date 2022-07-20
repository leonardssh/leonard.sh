<script lang="ts" setup>
import { inject } from 'vue';
import type { Resume } from '~/types/resume';

const { education } = inject<Readonly<Resume>>('resume');
</script>

<template>
	<div class="mt-5" v-if="education.length">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Education</div>
		<div class="grid grid-cols-1 gap-4">
			<div v-for="({ area, startDate, endDate, description }, key) in education" :key="key">
				<h4 class="text-lg font-medium font-inter">{{ area }}</h4>
				<h4 class="mb-2 text-sm font-medium text-slate-500 font-dm-sans">
					{{ startDate ? $formatDate(startDate.month, startDate.year) : 'Unknown' }} -
					{{ endDate ? $formatDate(endDate.month, endDate.year) : 'Present' }}
				</h4>
				<p class="text-base font-normal text-slate-700 font-dm-sans">
					{{ description }}
				</p>
			</div>
		</div>
		<Divider />
	</div>
</template>
