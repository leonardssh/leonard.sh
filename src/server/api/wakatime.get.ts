import { WakaTimeLanguage, WakaTimeResponse } from '~/types/wakatime';
import { InMemoryCache } from '~/helpers';

const cache = new InMemoryCache<WakaTimeLanguage[]>();

const getWakaTimeDataFromAPI = async (user: string, token: string): Promise<WakaTimeResponse> => {
	const response = await fetch(`https://wakatime.com/api/v1/users/${user}/stats/last_7_days?token=${token}`);
	const data = await response.json();
	return data;
};

const getWakaTimeData = async (user: string, token: string, skipCache?: boolean): Promise<WakaTimeLanguage[]> => {
	if (cache.get('wakatime') && !cache.expired('wakatime') && !skipCache) {
		return cache.get('wakatime');
	}

	const {
		data: { languages }
	} = await getWakaTimeDataFromAPI(user, token);

	cache.set('wakatime', languages);

	return languages;
};

export default defineEventHandler(() => {
	const {
		app,
		public: { devMode, wakaTimeUser }
	} = useRuntimeConfig();

	return getWakaTimeData(wakaTimeUser, app.wakaTimeKey, devMode);
});
