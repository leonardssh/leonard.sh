import { WakaTimeLanguage } from '~/types/wakatime';

export function useLanguageFromWakaTimeStats(languages: WakaTimeLanguage[], language: string): WakaTimeLanguage | null {
	return languages && languages.find((lang) => lang.name === language);
}
