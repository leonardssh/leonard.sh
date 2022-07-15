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
		area: 'Licence Degree of Technology',
		start: {
			year: 2016,
			month: 9
		},
		end: {
			year: 2019,
			month: 7
		},
		description:
			"Initially, I entered technological studies to become a car mechanic. In my first year I'd a revelation about the possibilities of the web. I naturally continued on this path for the next three years, having a passion about vehicles, the subject matter being very easy to understand, it allowed me to learn and develop my skills in the area of web development."
	}
]);
