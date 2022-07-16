import { Language } from '~~/src/types/language';

const languages = new Map<number, Language[]>();

languages.set(1, [
	{
		name: 'HTML5',
		wakatime: 'HTML'
	},
	{
		name: 'CSS3',
		wakatime: 'CSS'
	}
]);

languages.set(2, [
	{
		name: 'JavaScript (ES6)',
		wakatime: 'JavaScript'
	},
	{
		name: 'TypeScript',
		wakatime: 'TypeScript'
	}
]);

languages.set(3, [
	{
		name: 'Node.js'
	}
]);

languages.set(4, [
	{
		name: 'Vue',
		wakatime: 'Vue.js'
	},
	{
		name: 'Nuxt'
	}
]);

languages.set(5, [
	{
		name: 'React'
	},
	{
		name: 'Next'
	}
]);

languages.set(6, [
	{
		name: 'Angular'
	},
	{
		name: 'RxJS'
	}
]);

languages.set(7, [
	{
		name: 'TailwindCSS'
	},
	{
		name: 'SASS',
		wakatime: 'SCSS'
	}
]);

languages.set(8, [
	{
		name: 'MySQL',
		wakatime: 'SQL'
	},
	{
		name: 'MongoDB'
	}
]);

languages.set(9, [
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
	languages: [...languages.values()]
}));
