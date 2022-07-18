import { Experience } from '~/types/experience';

export default defineEventHandler<Experience[]>(() => [
	{
		company: 'Liberty Multiplayer',
		position: 'Developer',
		website: 'https://github.com/liberty-mp',
		location: 'Github',
		start: {
			year: 2022,
			month: 5
		},
		summary: 'A small project related to a game server for Grand Theft Auto.',
		highlights: [
			'UI rework (more dynamic and optimized approach for angular application)',
			'Helped with moving the backend to TypeScript',
			'Develop a new building process (using Rollup & SWC)'
		]
	},
	{
		company: 'InversifyJS',
		position: 'Maintainer',
		website: 'https://github.com/inversify/InversifyJS',
		location: 'Github',
		start: {
			year: 2021,
			month: 3
		},
		summary: 'A powerful and lightweight inversion of control container for JavaScript & Node.js apps powered by TypeScript.',
		highlights: ['Helped develop and maintain the library', 'Helped with the documentation', 'Helped resolve Issues and Pull Requests']
	},
	{
		company: 'RYSE Multiplayer',
		position: 'Developer',
		website: 'https://github.com/rysemultiplayer',
		location: 'Github',
		start: {
			year: 2020,
			month: 6
		},
		end: {
			year: 2022,
			month: 5
		},
		summary: "I've used the following tech stack to build up a small project on the side to gain more knowledge:",
		highlights: ['TypeScript', 'Inversify (Dependency Injection)', 'Prisma (Database)', 'NodeJS', 'ExpressJS', 'GitHub Actions']
	}
]);
