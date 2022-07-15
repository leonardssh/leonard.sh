import { defineStore, acceptHMRUpdate } from 'pinia';
import { DiscordActivity, DiscordSpotify, DiscordStatus } from '~/types/lanyard';

export const useLanyardStore = defineStore('counter', {
	state: () => ({ status: 'offline', activity: null, spotify: null }),
	actions: {
		setStatus(status: DiscordStatus) {
			this.status = status;
		},
		setActivity(activity: DiscordActivity) {
			this.activity = activity;
		},
		setSpotify(spotify: DiscordSpotify) {
			this.spotify = spotify;
		}
	}
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useLanyardStore, import.meta.hot));
}
