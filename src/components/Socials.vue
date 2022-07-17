<script lang="ts" setup>
interface Social {
	name: string;
	url: string;
}

const socials: Social[] = [
	{
		name: 'github',
		url: 'https://github.com/leonardssh'
	},
	{
		name: 'twitter',
		url: 'https://twitter.com/leonardssh22'
	},
	{
		name: 'instagram',
		url: 'https://www.instagram.com/leonardssh22/'
	},
	{
		name: 'linkedin',
		url: 'https://www.linkedin.com/in/leonardssh/'
	}
];
</script>

<template>
	<div class="flex items-end justify-center mt-5 space-x-2 text-3xl cursor-pointer lg:text-2xl lg:m-0 text-slate-500">
		<template v-for="(social, key) in socials" :key="key">
			<nuxt-icon class="transition-all duration-200 hover:text-slate-700" :name="social.name" @click="$openUrlInNewTab(social.url)" />
		</template>
	</div>
</template>
