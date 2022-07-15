import { WakaTimeLanguage, WakaTimeResponse } from '~/types/wakatime';

export function useLanguageFromWakaTimeStats(stats: WakaTimeResponse, language: string): WakaTimeLanguage | null {
	return stats.data.languages.find((lang) => lang.name === language);
}
