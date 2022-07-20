<script lang="ts" setup>
import type { WakaTimeLanguage } from '~/types/wakatime';
import type { Skill } from '~/types/resume';
import { formatTime } from '~/helpers';

interface Props {
	language: Skill['keywords'];
	wakatime: WakaTimeLanguage[];
}

const { language, wakatime } = defineProps<Props>();
const languages = useWakaTimeLanguages();
const lang = useLanguageFromWakaTimeStats(wakatime, language.wakatime);

const isValidLanguage = computed(() => languages.includes(language.wakatime) && lang && lang.total_seconds > 15);

const { elementRef: languageRef } = useTooltip({
	content: unref(isValidLanguage) ? `${formatTime(lang.total_seconds)} past week` : null
});
</script>

<template>
	<span ref="languageRef" :class="{ 'border-b pb-[0.5px] border-dotted': isValidLanguage }">
		{{ language.name }}
	</span>
</template>
