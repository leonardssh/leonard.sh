<script lang="ts" setup>
interface Props {
	layout: 'right' | 'left';
}

const { layout } = defineProps<Props>();
</script>

<template>
	<div
		:class="{
			'container mx-auto lg:w-[50%] w-[100%] px-14 2xl:px-10 pb-20 lg:pb-10': layout === 'left',
			'bg-[url(/images/right-bg.jpg)] bg-cover bg-[#101926] text-white px-14 lg:px-18 lg:w-[40%] w-[100%] pb-10': layout === 'right'
		}"
	>
		<slot />
	</div>
</template>
