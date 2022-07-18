<script lang="ts" setup>
import { type IProject } from '~/types/project';

import Project from './Project.vue';
import Skeleton from './Skeleton.vue';

const { data: projects, pending } = useLazyFetch<IProject[]>(`/api/projects`, { key: 'projects' });
const projectsCount = await $fetch<number>('/api/projects/count');
</script>

<template>
	<div class="mt-5">
		<div class="pb-5 text-lg font-normal text-slate-500 font-dm-sans">Projects</div>
		<div class="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-1 xl:grid-cols-2 lg:gap-4">
			<template v-if="pending" v-for="(project, key) of projectsCount" :key="key">
				<Skeleton :count="projectsCount" />
			</template>

			<template v-if="!pending" v-for="(project, key) of projects" :key="key">
				<Project :project="project" />
			</template>
		</div>
		<Divider />
	</div>
</template>
