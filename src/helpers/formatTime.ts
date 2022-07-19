// https://stackoverflow.com/a/34270811
export const formatTime = (seconds: number) => {
	const levels: [number, string][] = [
		[Math.floor(seconds / 31536000), 'years'],
		[Math.floor((seconds % 31536000) / 86400), 'days'],
		[Math.floor(((seconds % 31536000) % 86400) / 3600), 'hrs'],
		[Math.floor((((seconds % 31536000) % 86400) % 3600) / 60), 'mins'],
		[Math.floor(((seconds % 31536000) % 86400) % 3600) % 60, 'secs']
	];

	const humanTime = [];

	for (let i = 0, max = levels.length; i !== max; ++i) {
		if (levels[i][0] === 0) {
			continue;
		}

		humanTime.push(`${levels[i][0]} ${levels[i][0] === 1 ? levels[i][1].substring(0, levels[i][1].length - 1) : levels[i][1]}`);
	}

	// If there are "hours" and "minutes" in the time, we don't want to show the "seconds" as well.
	// The "hours" and "minutes" will be enough to indicate the time.
	// Output: 1 hrs 2 mins | 2 mins 3 secs | 10 secs
	return humanTime.length > 2 ? humanTime.slice(0, 2).join(' ') : humanTime.join(' ');
};
