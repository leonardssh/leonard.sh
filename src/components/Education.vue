<script lang="ts" setup>
import { Education } from '~/types/education';

const educationData = await $fetch<Education[]>('/api/education');
</script>

<template>
	<template v-if="Object.keys(educationData).length">
		<div class="mt-5">
			<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Education</div>
			<div class="grid grid-cols-1 gap-4">
				<div v-for="({ area, start, end, description }, key) in educationData" :key="key">
					<h4 class="text-lg font-medium font-inter">{{ area }}</h4>
					<h4 class="mb-2 text-sm font-medium text-slate-500 font-dm-sans">
						{{ $formatDate(start.month, start.year) }} - {{ end ? $formatDate(end.month, end.year) : 'Present' }}
					</h4>
					<p class="text-base font-normal text-slate-700 font-dm-sans">
						{{ description }}
					</p>
				</div>
			</div>
			<Divider />
		</div>
	</template>
</template>
