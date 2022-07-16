<script lang="ts" setup>
import { GroupMember } from '~/types/groups';

import { useTippy } from 'vue-tippy';
import { WakaTimeResponse } from '~/types/wakatime';

interface Props {
	language: GroupMember;
	wakatime: WakaTimeResponse['data']['languages'];
}

const { language, wakatime } = defineProps<Props>();
const languageRef = ref<Element | null>(null);
const languages = useWakaTimeLanguages();
const lang = useLanguageFromWakaTimeStats(wakatime, language.wakatime);

const isValidLanguage = computed(() => languages.includes(language.wakatime));

useTippy(languageRef, {
	followCursor: true,
	content: isValidLanguage.value && lang?.text ? `${lang?.text} past week` : null
});
</script>

<template>
	<span ref="languageRef" :class="{ 'border-b pb-[0.5px] border-dotted': isValidLanguage && lang?.minutes > 0 }">
		{{ language.name }}
	</span>
</template>
