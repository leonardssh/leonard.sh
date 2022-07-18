import { formatDate } from '~/helpers/formatDate';

export default defineNuxtPlugin(() => {
	return {
		provide: {
			formatDate
		}
	};
});
