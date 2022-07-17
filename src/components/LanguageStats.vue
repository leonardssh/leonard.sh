<script lang="ts" setup>
import { useTippy } from 'vue-tippy';

import { WakaTimeLanguage } from '~/types/wakatime';
import { Language } from '~/types/language';

interface Props {
	language: Language;
	wakatime: WakaTimeLanguage[];
}

const { language, wakatime } = defineProps<Props>();
const languageRef = ref<Element | null>(null);
const languages = useWakaTimeLanguages();
const lang = useLanguageFromWakaTimeStats(wakatime, language.wakatime);

const isValidLanguage = computed(() => languages.includes(language.wakatime) && lang && lang.text && lang.total_seconds > 15);

useTippy(languageRef, {
	followCursor: true,
	animation: false,
	content: unref(isValidLanguage) ? `${lang.text} past week` : null
});
</script>

<template>
	<span ref="languageRef" :class="{ 'border-b pb-[0.5px] border-dotted': isValidLanguage }">
		{{ language.name }}
	</span>
</template>
