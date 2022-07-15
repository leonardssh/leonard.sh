export default defineEventHandler(async ({ context }) => {
	const { user } = context.params;
	const { app } = useRuntimeConfig();

	return fetch(`https://wakatime.com/api/v1/users/${user}/stats/last_7_days?token=${app.wakaTimeKey}`).then((res) => res.json());
});
