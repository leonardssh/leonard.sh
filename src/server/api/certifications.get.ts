import { type Certification } from '~/types/certification';

export default defineEventHandler<Certification[]>(() => [
	{
		area: 'Web Administrator',
		issuingBy: {
			name: 'Formacion Universitaria, Spain',
			url: 'https://formacionuniversitaria.com/'
		},
		issueDate: {
			year: 2020,
			month: 8
		},
		summary: 'At the end of this course I obtained a certificate which represented my accomplishment in learning the following:',
		highlights: ['Web Design (HTML, CSS)', 'Page Administration', 'JavaScript & PHP']
	}
]);
