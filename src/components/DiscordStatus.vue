<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

const store = useLanyardStore();

const colorObject = {
	idle: 'bg-yellow-400',
	online: 'bg-green-400',
	dnd: 'bg-red-400',
	offline: 'bg-slate-400'
};

const color = computed(() => colorObject[store.status]);
</script>

<template>
	<div class="inline-block w-5 h-5 rounded-full animate-pulse" :class="color"></div>
</template>
