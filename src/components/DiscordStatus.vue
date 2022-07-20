<script lang="ts" setup>
import { inject, Ref } from 'vue';
import { LanyardData } from '../types/lanyard';

const lanyard = inject<Readonly<Ref<LanyardData>>>('lanyard');

const colorObject = {
	idle: 'bg-yellow-400',
	online: 'bg-green-400',
	dnd: 'bg-red-400',
	offline: 'bg-slate-400'
};

const color = computed(() => colorObject[unref(lanyard).discord_status]);
</script>

<template>
	<div class="inline-block w-5 h-5 rounded-full animate-pulse" :class="color"></div>
</template>
