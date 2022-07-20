<script lang="ts" setup>
import { inject } from 'vue';
import type { WakaTimeLanguage } from '~/types/wakatime';
import type { Resume, Skill } from '~/types/resume';

const resume = inject<Readonly<Resume>>('resume');

const [frontEnd, backEnd] = [
	resume.skills.filter((skill) => skill.name.includes('Front-End'))[0].keywords,
	resume.skills.filter((skill) => skill.name.includes('Back-End'))[0].keywords
];

const skills = [...Object.values(frontEnd!), ...Object.values(backEnd!)] as unknown as Skill['keywords'][];

const uniqueGroups = [...new Set(skills.map((skill) => skill.group))];
const groupedSkills = uniqueGroups.map((group) => {
	return {
		group,
		skills: skills.filter((skill) => skill.group === group)
	};
});

const { data: wakatime, pending } = useLazyFetch<WakaTimeLanguage[]>(`/api/wakatime`, { key: 'wakatime' });
</script>

<template>
	<div class="pb-5 text-base font-medium text-slate-400 font-inter">
		Skillset
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
