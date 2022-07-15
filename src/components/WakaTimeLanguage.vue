<script lang="ts" setup>
import { GroupMember } from '~/types/groups';

import { useTippy } from 'vue-tippy';
import { WakaTimeResponse } from '~/types/wakatime';

interface Props {
	language: GroupMember;
	wakatime: WakaTimeResponse;
}

const props = defineProps<Props>();
const languageRef = ref<Element | null>(null);
const languages = useWakaTimeLanguages();
const lang = useLanguageFromWakaTimeStats(props.wakatime, props.language.wakatime);

let languageRender = null;

if (languages.includes(props.language.wakatime) && lang?.minutes > 0) {
	languageRender = h('span', { class: 'border-b pb-[0.5px] border-dotted' }, props.language.name);
} else {
	languageRender = h('span', props.language.name);
}

useTippy(languageRef, {
	followCursor: true,
	content: languages.includes(props.language.wakatime) ? `${lang?.hours ?? 0}h ${lang?.minutes ?? 0}m past week` : null
});
</script>

<template>
	<languageRender ref="languageRef" />
</template>
