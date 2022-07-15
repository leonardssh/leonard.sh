import { GroupMember } from '~/types/groups';

const groups = new Map<number, GroupMember[]>();

groups.set(1, [
	{
		name: 'HTML5',
		wakatime: 'HTML'
	},
	{
		name: 'CSS3',
		wakatime: 'CSS'
	}
]);

groups.set(2, [
	{
		name: 'JavaScript (ES6)',
		wakatime: 'JavaScript'
	},
	{
		name: 'TypeScript',
		wakatime: 'TypeScript'
	}
]);

groups.set(3, [
	{
		name: 'Node.js'
	}
]);

groups.set(4, [
	{
		name: 'Vue',
		wakatime: 'Vue.js'
	},
	{
		name: 'Nuxt'
	}
]);

groups.set(5, [
	{
		name: 'React'
	},
	{
		name: 'Next'
	}
]);

groups.set(6, [
	{
		name: 'Angular'
	},
	{
		name: 'RxJS'
	}
]);

groups.set(7, [
	{
		name: 'TailwindCSS'
	},
	{
		name: 'SASS',
		wakatime: 'SCSS'
	}
]);

groups.set(8, [
	{
		name: 'MySQL',
		wakatime: 'SQL'
	},
	{
		name: 'MongoDB'
	}
]);

groups.set(9, [
	{
		name: 'GraphQL',
		wakatime: 'GraphQL'
	},
	{
		name: 'REST'
	}
]);

export default defineEventHandler(() => ({
	title: 'Development Skills',
	skills: [...groups.values()]
}));
