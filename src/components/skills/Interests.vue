<script lang="ts" setup>
const interests = await $fetch<{ title: string; skills: string[] }>('/api/interests');
</script>

<template>
	<SkillsContainer>
		<template #title>{{ interests.title }}</template>
		<template #list>
			<li v-for="(skill, key) of interests.skills" :key="key" class="space-x-2">
				{{ skill }}
			</li>
		</template>
	</SkillsContainer>
</template>
