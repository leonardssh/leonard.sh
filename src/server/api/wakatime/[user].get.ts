import { WakaTimeLanguage, WakaTimeResponse } from '~/types/wakatime';

const CACHE_FOR = 1_000 * 60 * 30; // cache for 30 minutes

let cache: WakaTimeResponse = {} as WakaTimeResponse;
let cacheTime = Number(new Date());

const getWakaTimeDataFromAPI = async (user: string, token: string): Promise<WakaTimeResponse> => {
	const response = await fetch(`https://wakatime.com/api/v1/users/${user}/stats/last_7_days?token=${token}`);
	const data = await response.json();
	return data;
};

const getWakaTimeData = async (user: string, token: string, skipCache?: boolean): Promise<WakaTimeLanguage[]> => {
	// Skip cache if development mode is enabled
	if (skipCache) {
		const response = await getWakaTimeDataFromAPI(user, token);
		return response['data']['languages'];
	}

	const currentTime = Number(new Date());

	// initial cache setup
	if (!Object.keys(cache).length) {
		cache = await getWakaTimeDataFromAPI(user, token);
		cacheTime = currentTime + CACHE_FOR;
	}

	if (currentTime > cacheTime) {
		cache = await getWakaTimeDataFromAPI(user, token);
		cacheTime = currentTime + CACHE_FOR;
	}

	return cache['data']['languages'];
};

export default defineEventHandler(async ({ context }) => {
	const { user } = context.params;
	const {
		app,
		public: { devMode }
	} = useRuntimeConfig();

	return getWakaTimeData(user, app.wakaTimeKey, devMode);
});
