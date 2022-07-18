<script lang="ts" setup>
interface Props {
	url: string;
}

const { url } = defineProps<Props>();
</script>

<template>
	<span @click="$openUrlInNewTab(url)" target="_blank" class="cursor-pointer border-b pb-[0.5px] border-dotted">
		<slot />
	</span>
</template>
