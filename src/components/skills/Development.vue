<script lang="ts" setup>
import { useResumeStore } from '~/stores';

import type { WakaTimeLanguage } from '~/types/wakatime';
import { Skill } from '~/types/resume';

const {
	public: { wakaTimeUser }
} = useRuntimeConfig();

const { resume } = useResumeStore();

const [[frontEnd], [backEnd]] = [
	resume.skills.filter((skill) => skill.name.includes('Front-End')),
	resume.skills.filter((skill) => skill.name.includes('Back-End'))
];

const skills = [...Object.values(frontEnd.keywords), ...Object.values(backEnd.keywords)] as unknown as Skill['keywords'][];

const uniqueGroups = [...new Set(skills.map((skill) => skill.group))];
const groupedSkills = uniqueGroups.map((group) => {
	return {
		group,
		skills: skills.filter((skill) => skill.group === group)
	};
});

const { data: wakatime, pending } = useLazyFetch<WakaTimeLanguage[]>(`/api/wakatime/${wakaTimeUser}`, { key: 'wakatime' });
</script>

<template>
	<div class="pb-5 text-base font-medium text-slate-400 font-inter">
		Tech Stack
		<ul class="text-sm font-medium text-white list-disc">
			<li v-for="({ skills }, key) of groupedSkills" :key="key" class="space-x-2">
				<template v-if="pending">
					<div class="flex space-x-2 animate-pulse">
						<div class="py-1 space-y-6" :style="{ width: `${skills.map((skill) => skill.name).join(' ').length * 8}px` }">
							<div class="h-3 rounded bg-slate-700"></div>
						</div>
					</div>
				</template>

				<template v-else>
					<template v-for="language of skills">
						<span class="font-light text-[#93c5fd] font-inter first:hidden">/</span>
						<LanguageStats :language="language" :wakatime="wakatime" />
					</template>
				</template>
			</li>
		</ul>
	</div>
</template>
