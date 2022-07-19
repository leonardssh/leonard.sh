<script lang="ts" setup>
import { useResumeStore } from '~/stores';

const { resume } = useResumeStore();
const [{ name, keywords }] = resume.skills.filter((skill) => skill.name.includes('Interests'));
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
