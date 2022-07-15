export interface Certification {
	area?: string;
	issuingBy?: {
		name: string;
		url: string;
	};
	issueDate?: {
		year: number;
		month: number;
	};
	expirationDate?: {
		year: number;
		month: number;
	};
}

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
