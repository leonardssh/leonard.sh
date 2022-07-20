export interface Profile {
	network: string;
	username: string;
	url: string;
}

export interface Basics {
	name: string;
	label: string;
	summary: string;
	url: string;
	email: string;
	image: string;
	location: {
		address: string;
		postalCode: string;
		city: string;
		countryCode: string;
		region: string;
	};
	phone: string;
	profiles: Profile[];
}

export interface Skill {
	keywords: {
		name: string;
		level?: string;
		wakatime?: string;
		group?: number;
	};
	level?: string;
	name: string;
}

export interface IDate {
	year: number;
	month: number;
}

export interface Work {
	name: string;
	position: string;
	url: string;
	location: string;
	startDate: IDate;
	endDate: IDate;
	summary: string;
	highlights: string[];
}

export interface Education {
	area: string;
	startDate: IDate;
	endDate: IDate;
	description: string;
}

export interface Certification {
	name: string;
	date: IDate;
	issuer: string;
	url: string;
	summary: string;
	highlights: string[];
}

export interface Language {
	language: string;
	fluency: string;
}

export interface Resume {
	basics: Basics;
	skills: Skill[];
	work: Work[];
	education: Education[];
	certificates: Certification[];
	languages: Language[];
}
