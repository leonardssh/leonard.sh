import { Ref } from 'vue';
import { useWebSocket } from '@vueuse/core';
import { LanyardData } from '~/types/lanyard';

export const useLanyard = (): Ref<LanyardData> => {
	const {
		public: { discordId, lanyardWebsocketUrl }
	} = useRuntimeConfig();
	const activity = ref<LanyardData | null>(null);

	const onConnected = (ws: WebSocket) => {
		ws.send(
			JSON.stringify({
				op: 2,
				d: {
					subscribe_to_id: discordId
				}
			})
		);
	};

	const onMessage = (_ws: WebSocket, message: MessageEvent) => {
		const { t, d } = JSON.parse(message.data) as {
			t: 'INIT_STATE' | 'PRESENCE_UPDATE';
			d: LanyardData;
		};

		if (t === 'INIT_STATE' || t === 'PRESENCE_UPDATE') {
			activity.value = d || ({} as LanyardData);
		}
	};

	if (process.client) {
		useWebSocket(lanyardWebsocketUrl, {
			heartbeat: {
				interval: 30 * 1_000,
				message: JSON.stringify({ op: 3 })
			},
			onConnected,
			onMessage
		});
	}

	return activity;
};
