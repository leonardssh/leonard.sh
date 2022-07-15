export interface WakaTimeLanguage {
	decimal: string;
	digital: string;
	hours: number;
	minutes: number;
	name: string;
	percent: number;
	text: string;
	total_seconds: number;
}

export type WakaTimeResponse = { data: { languages: WakaTimeLanguage[] } };
