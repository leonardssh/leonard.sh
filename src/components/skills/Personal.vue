<script lang="ts" setup>
const personal = await $fetch<{ title: string; skills: string[] }>('/api/skills/personal');
</script>

<template>
	<SkillsContainer>
		<template #title>{{ personal.title }}</template>
		<template #list>
			<li v-for="(skill, key) of personal.skills" :key="key" class="space-x-2">
				{{ skill }}
			</li>
		</template>
	</SkillsContainer>
</template>
