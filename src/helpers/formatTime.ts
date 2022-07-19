export const formatTime = (totalSeconds: number) => {
	totalSeconds = Math.round(totalSeconds);

	const hours = Math.floor(totalSeconds / 3600);
	const minutes = Math.floor((totalSeconds % 3600) / 60);
	const seconds = totalSeconds - hours * 3600 - minutes * 60;

	// If there are "hours" and "minutes" in the time, we don't want to show the "seconds" as well.
	// The "hours" and "minutes" will be enough to indicate the time.
	// Output: 1 hrs 2 mins | 2 mins 3 secs | 10 secs
	return [`${hours} hrs`, `${minutes} mins`, `${seconds} secs`]
		.filter((item) => item[0] !== '0')
		.slice(0, 2)
		.join(' ');
};
