import { type Resume } from '~/types/resume';
import { InMemoryCache } from '~/helpers';

const cache = new InMemoryCache<Resume>();
const gist = 'leonardssh/d72297eb48abfad33e70e1313cd35614';

const getResumeDataFromAPI = async (): Promise<Resume> => {
	const response = await fetch(`https://gist.githubusercontent.com/${gist}/raw/resume.json`, { cache: 'no-cache' });
	const data = response.json();
	return data;
};

const getResumeData = async (): Promise<Resume> => {
	const response = await getResumeDataFromAPI();
	return response;
};

export default defineEventHandler<Resume>(async () => {
	if (cache.get('resume') && !cache.expired('resume')) {
		return cache.get('resume');
	}

	const response = await getResumeData();
	cache.set('resume', response);

	return response;
});
