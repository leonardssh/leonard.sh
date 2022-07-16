<script lang="ts" setup>
import { type Language } from '~/types/language';
import { type WakaTimeLanguage } from '~/types/wakatime';

const {
	public: { wakaTimeUser }
} = useRuntimeConfig();

const { data: wakatime, pending } = useLazyFetch<WakaTimeLanguage[]>(`/api/wakatime/${wakaTimeUser}`, { key: 'wakatime' });
const development = await $fetch<{ title: string; languages: Language[][] }>('/api/skills/development');
</script>

<template>
	<SkillsContainer>
		<template #title>{{ development.title }}</template>
		<template #list>
			<li v-for="(language, key) of development.languages" :key="key" class="space-x-2">
				<template v-if="pending">
					<div class="flex space-x-2 animate-pulse">
						<div class="py-1 space-y-6" :style="{ width: `${language.map((skill) => skill.name).join('').length * 7.5}px` }">
							<div class="h-3 rounded bg-slate-700"></div>
						</div>
					</div>
				</template>
				<template v-else>
					<template v-for="lang of language">
						<LanguageStats :language="lang" :wakatime="wakatime" />
					</template>
				</template>
			</li>
		</template>
	</SkillsContainer>
</template>
