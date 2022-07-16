<script lang="ts" setup>
import { type GroupMember } from '~/types/groups';
import { type WakaTimeLanguage } from '~/types/wakatime';

const {
	public: { wakaTimeUser }
} = useRuntimeConfig();

const { data: wakatime, pending } = useLazyFetch<WakaTimeLanguage[]>(`/api/wakatime/${wakaTimeUser}`, { key: 'wakatime' });
const development = await $fetch<{ title: string; skills: GroupMember[][] }>('/api/skills/development');
</script>

<template>
	<SkillsContainer>
		<template #title>{{ development.title }}</template>
		<template #list>
			<li v-for="(skills, key) of development.skills" :key="key" class="space-x-2">
				<template v-if="pending">
					<div class="flex space-x-2 animate-pulse">
						<div class="py-1 space-y-6" :style="{ width: `${skills.map((skill) => skill.name).join('').length * 7.5}px` }">
							<div class="h-3 rounded bg-slate-700"></div>
						</div>
					</div>
				</template>
				<template v-else>
					<template v-for="skill of skills">
						<LanguageStats :language="skill" :wakatime="wakatime" />
					</template>
				</template>
			</li>
		</template>
	</SkillsContainer>
</template>
