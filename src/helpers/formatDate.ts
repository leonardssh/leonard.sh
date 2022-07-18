const shortDate = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const formatDate = (month: number, year: number) => {
	return `${shortDate[month - 1]} ${year}`;
};
