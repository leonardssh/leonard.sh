export interface Education {
	institution?: string;
	area?: string;
	studyType?: string;
	start?: {
		year: number;
		month: number;
	};
	end?: {
		year: number;
		month: number;
	};
	description?: string;
}

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
