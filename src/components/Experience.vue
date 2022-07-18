<script lang="ts" setup>
import { Experience } from '~/types/experience';

const experiences = await $fetch<Experience[]>('/api/experience');
</script>

<template>
	<div class="mt-5" v-if="Object.keys(experiences).length">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Experience</div>
		<div class="grid grid-cols-1 gap-4">
			<div v-for="({ company, position, start, end, website, highlights, summary }, key) in experiences" :key="key">
				<div class="flex flex-row items-baseline justify-start text-base font-inter">
					<p class="font-medium border-b border-dashed cursor-pointer border-black/50 font-inter" @click="$openUrlInNewTab(website)">
						{{ company }},
					</p>
					<p class="ml-1 font-normal text-slate-700">{{ position }}</p>
				</div>
				<h4 class="text-sm font-medium text-slate-500 font-dm-sans">
					{{ $formatDate(start.month, start.year) }} - {{ end ? $formatDate(end.month, end.year) : 'Present' }}
				</h4>
				<p v-if="summary" class="mt-2 text-base font-normal text-slate-700 font-inter">
					{{ summary }}
				</p>
				<ul v-if="highlights" class="text-sm font-medium text-white list-disc font-inter">
					<li v-for="highlight of highlights" class="space-x-2 text-slate-600">
						{{ highlight }}
					</li>
				</ul>
			</div>
		</div>
		<Divider />
	</div>
</template>
