const getElapsedTime = (timestamp: number) => {
	const startTime = timestamp;
	const endTime = Number(new Date());
	let difference = (endTime - startTime) / 1000;

	// we only calculate them, but we don't display them.
	// this fixes a bug in the Discord API that does not send the correct timestamp to presence.
	const daysDifference = Math.floor(difference / 60 / 60 / 24);
	difference -= daysDifference * 60 * 60 * 24;

	const hoursDifference = Math.floor(difference / 60 / 60);
	difference -= hoursDifference * 60 * 60;

	const minutesDifference = Math.floor(difference / 60);
	difference -= minutesDifference * 60;

	const secondsDifference = Math.floor(difference);

	return `${hoursDifference >= 1 ? `${`0${hoursDifference}`.slice(-2)}:` : ''}${`0${minutesDifference}`.slice(-2)}:${`0${secondsDifference}`.slice(
		-2
	)}`;
};

const getSpotifySongUrl = (trackId: string) => {
	return `https://open.spotify.com/track/${trackId}`;
};

const openUrlInNewTab = (url: string) => {
	window.open(url);
};

const discordStatusName = (status: string): string =>
	({
		online: 'Online',
		dnd: 'Do Not Disturb',
		idle: 'Idle',
		offline: 'Offline'
	}[status]);

const getExternalAsset = (link: string) => {
	return link.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/');
};

const getDiscordAssetUrl = (image: string, appId: string) =>
	image.startsWith('mp:external') ? getExternalAsset(image) : `https://cdn.discordapp.com/app-assets/${appId}/${image}`;

export default defineNuxtPlugin(() => {
	return {
		provide: {
			getElapsedTime,
			getSpotifySongUrl,
			openUrlInNewTab,
			getDiscordAssetUrl,
			getExternalAsset,
			discordStatusName
		}
	};
});
