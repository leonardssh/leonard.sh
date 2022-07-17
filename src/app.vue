<template>
	<div class="flex flex-col overflow-hidden lg:flex-row bg-effect">
		<NuxtPage />
	</div>
</template>

<script lang="ts" setup>
useHead({
	htmlAttrs: {
		class: "bg-[url('/images/left-bg.jpg')]"
	}
});
</script>

<style lang="scss">
.bg-effect {
	background: rgba(0, 0, 0, 0) radial-gradient(64.9% 34.2308% at 0% 0%, rgba(147, 196, 253, 0.275) 0%, rgba(255, 255, 255, 0) 100%) repeat scroll 0%
		0%;
}
</style>
