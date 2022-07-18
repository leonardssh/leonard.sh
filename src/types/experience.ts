export interface Experience {
	company: string;
	position: string;
	website: string;
	location: string;
	start: {
		year: number;
		month: number;
	};
	end?: {
		year: number;
		month: number;
	};
	summary?: string;
	highlights?: string[];
}
