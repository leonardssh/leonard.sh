import { defineStore, acceptHMRUpdate } from 'pinia';

import type { DiscordActivity, DiscordSpotify, DiscordStatus, LanyardKV } from '~/types/lanyard';

export const useLanyardStore = defineStore('lanyard', {
	state: () => ({ status: 'offline', activity: null, spotify: null, kv: {} as LanyardKV }),
	actions: {
		setStatus(status: DiscordStatus) {
			this.status = status;
		},
		setActivity(activity: DiscordActivity) {
			this.activity = activity;
		},
		setSpotify(spotify: DiscordSpotify) {
			this.spotify = spotify;
		},
		setKV(kv: LanyardKV) {
			this.kv = kv;
		}
	}
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useLanyardStore, import.meta.hot));
}
