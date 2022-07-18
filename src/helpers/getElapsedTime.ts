export const getElapsedTime = (timestamp: number) => {
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
