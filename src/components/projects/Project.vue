<script lang="ts" setup>
import { IProject } from '~/types/project';

interface Props {
	project: IProject;
}

const languageColor = {
	TypeScript: '#3178c6',
	Vue: '#41b883'
};

const { project } = defineProps<Props>();
</script>

<template>
	<div class="relative flex flex-col w-full p-4 text-lg text-black border rounded-lg min-h-fit font-inter border-slate-200">
		<a :href="project.html_url" target="_blank" class="text-sm font-medium text-blue-400 cursor-pointer hover:underline">
			{{ project.name }}
		</a>
		<p class="flex-auto mt-2 mb-0 text-sm">{{ project.description }}</p>
		<div class="flex flex-row items-center justify-start mt-2 space-x-3 text-sm">
			<div v-if="project.language">
				<span
					:style="{ 'background-color': languageColor[project.language] }"
					class="relative inline-block w-3 h-3 rounded-full top-[1px]"
				></span>
				{{ project.language }}
			</div>
			<div class="inline-block font-medium cursor-pointer hover:text-blue-400" @click="$openUrlInNewTab(project.stargazers_url)">
				<nuxt-icon class="inline-block overflow-visible text-sm top-[1px] relative align-text-bottom" name="github-star"></nuxt-icon>
				{{ project.stargazers_count }}
			</div>
			<div class="inline-block font-medium cursor-pointer hover:text-blue-400" @click="$openUrlInNewTab(project.forks_url)">
				<nuxt-icon class="inline-block overflow-visible text-sm top-[1px] relative align-text-bottom" name="github-fork"></nuxt-icon>
				{{ project.forks_count }}
			</div>
		</div>
	</div>
</template>
