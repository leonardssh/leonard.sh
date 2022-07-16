<template>
	<div class="pb-5 text-base font-medium text-slate-400 font-inter">
		<slot name="title" />
		<ul class="text-sm font-medium text-white list-disc">
			<slot name="list" />
		</ul>
	</div>
</template>

<style lang="scss">
li {
	background-image: url("data:image/svg+xml,%3Csvg width='12' height='1' viewBox='0 0 14 1' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cline y1='0.5' x2='14' y2='0.5' stroke='%2393c5fd'/%3E%3C/svg%3E%0A");
	background-position: 0px 0.8em;

	@apply my-2 list-none pl-5 bg-no-repeat;
}
</style>
