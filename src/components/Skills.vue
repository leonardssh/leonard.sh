<script lang="ts" setup>
import { type GroupMember } from '~/types/groups';
import { type WakaTimeResponse } from '~/types/wakatime';

const {
	public: { wakaTimeUser }
} = useRuntimeConfig();

const { data, pending } = useLazyFetch<WakaTimeResponse>(`/api/wakatime/${wakaTimeUser}`);

const [devSkills, personalSkill, interests] = await Promise.all([
	$fetch('/api/skills/development'),
	$fetch('/api/skills/personal'),
	$fetch('/api/interests')
]);

const skillsData = [devSkills, personalSkill, interests];
</script>

<template>
	<div class="flex flex-col justify-between pt-8 sm:flex-row lg:flex-col xl:flex-col 2xl:flex-row">
		<div v-for="({ title, skills }, key) in skillsData" :key="key" class="pb-5 text-base font-medium text-slate-400 font-inter">
			{{ title }}
			<template v-if="title.includes('Development Skills')">
				<template v-if="pending">
					<div class="flex items-center justify-center h-full">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							xmlns:xlink="http://www.w3.org/1999/xlink"
							aria-hidden="true"
							role="img"
							class="iconify iconify--ph animate-spin"
							width="32"
							height="32"
							preserveAspectRatio="xMidYMid meet"
							viewBox="0 0 256 256"
						>
							<path
								fill="currentColor"
								d="M140 32v32a12 12 0 0 1-24 0V32a12 12 0 0 1 24 0Zm84 84h-32a12 12 0 0 0 0 24h32a12 12 0 0 0 0-24Zm-42.3 48.8a12 12 0 0 0-16.9 16.9l22.6 22.7a12 12 0 0 0 8.5 3.5a12.2 12.2 0 0 0 8.5-3.5a12 12 0 0 0 0-17ZM128 180a12 12 0 0 0-12 12v32a12 12 0 0 0 24 0v-32a12 12 0 0 0-12-12Zm-53.7-15.2l-22.7 22.6a12 12 0 0 0 0 17a12.2 12.2 0 0 0 8.5 3.5a12 12 0 0 0 8.5-3.5l22.6-22.7a12 12 0 0 0-16.9-16.9ZM76 128a12 12 0 0 0-12-12H32a12 12 0 0 0 0 24h32a12 12 0 0 0 12-12Zm-7.4-76.4a12 12 0 1 0-17 17l22.7 22.6a12 12 0 0 0 16.9 0a11.9 11.9 0 0 0 0-16.9Z"
							></path>
						</svg>
					</div>
				</template>
				<template v-else>
					<ul class="text-sm font-medium text-white list-disc">
						<li v-for="(skill, key) of skills" :key="key" class="space-x-2">
							<template v-for="item of (skill as GroupMember[])">
								<WakaTimeLanguage :language="item" :wakatime="data" :pending="pending" />
							</template>
						</li>
					</ul>
				</template>
			</template>
			<template v-else>
				<ul class="text-sm font-medium text-white list-disc">
					<li v-for="(skill, key) of skills" :key="key" class="space-x-2">
						{{ skill }}
					</li>
				</ul>
			</template>
		</div>
	</div>
</template>

<style lang="scss" scoped>
li {
	background-image: url("data:image/svg+xml,%3Csvg width='12' height='1' viewBox='0 0 14 1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='0.5' x2='14' y2='0.5' stroke='#93c5fd'/%3E%3C/svg%3E%0A");
	background-position: 0px 0.8em;

	@apply my-2 list-none pl-5 bg-no-repeat;
}
</style>
