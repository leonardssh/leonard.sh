import { type Certification } from '~/types/certification';

export default defineEventHandler<Certification[]>(() => [
	{
		area: 'Administrador de Servidores y Paginas Web',
		issuingBy: {
			name: 'Formacion Universitaria',
			url: 'https://formacionuniversitaria.com/'
		},
		issueDate: {
			year: 2020,
			month: 8
		}
	}
]);
