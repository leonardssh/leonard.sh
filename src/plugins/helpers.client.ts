import { discordStatusName, formatDate, getDiscordAssetUrl, getElapsedTime, getSpotifySongUrl, openUrlInNewTab } from '~/helpers';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			getElapsedTime,
			getSpotifySongUrl,
			openUrlInNewTab,
			getDiscordAssetUrl,
			discordStatusName,
			formatDate
		}
	};
});
