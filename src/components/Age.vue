<script lang="ts" setup>
const BIRTH = new Date('2001-10-03T00:00:00Z');
const YEAR_IN_MS = 31556952000;

const age = useMemoize(() => Math.floor((Date.now() - BIRTH.getTime()) / YEAR_IN_MS));

const { elementRef: ageRef } = useTooltip({
	content: '3rd October 2001'
});
</script>

<template>
	<span ref="ageRef" class="cursor-pointer border-b pb-[0.5px] border-dotted"> {{ age() }} y.o </span>
</template>
