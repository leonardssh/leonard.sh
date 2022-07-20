<script lang="ts" setup>
import { inject } from 'vue';
import type { Resume } from '~/types/resume';

const { skills } = inject<Readonly<Resume>>('resume');
const [{ name, keywords }] = skills.filter((skill) => skill.name.includes('Interests'));
</script>

<template>
	<SkillsContainer>
		<template #title>{{ name }}</template>
		<template #list>
			<li v-for="(keyword, key) of keywords" :key="key" class="space-x-2">
				{{ (keyword as any).name }}
			</li>
		</template>
	</SkillsContainer>
</template>
