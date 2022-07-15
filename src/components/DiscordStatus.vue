<script lang="ts" setup>
import { useLanyardStore } from '~/stores/lanyard';

const store = useLanyardStore();

const color = computed(() => {
	switch (store.status) {
		case 'idle':
			return 'bg-yellow-400';
		case 'online':
			return 'bg-green-400';
		case 'dnd':
			return 'bg-red-400';
		case 'offline':
			return 'bg-slate-400';
	}
});
</script>

<template>
	<div class="inline-block w-5 h-5 rounded-full animate-pulse" :class="color"></div>
</template>
