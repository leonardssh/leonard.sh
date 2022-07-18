import { Education } from '~/types/education';

export default defineEventHandler<Education[]>(() => [
	{
		area: 'Degree of Technology',
		start: {
			year: 2016,
			month: 9
		},
		end: {
			year: 2019,
			month: 7
		},
		description: 'This degree allowed me to learn the basics and build up my knowledge for web development.'
	}
]);
