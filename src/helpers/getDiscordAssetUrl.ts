const getExternalAsset = (link: string) => {
	return link.replace(/mp:external\/([^\/]*)\/(http[s])/g, '$2:/');
};

export const getDiscordAssetUrl = (image: string, appId: string) =>
	image.startsWith('mp:external') ? getExternalAsset(image) : `https://cdn.discordapp.com/app-assets/${appId}/${image}`;
