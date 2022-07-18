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
