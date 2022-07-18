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
	summary?: string;
	highlights?: string[];
}
