import { IProject } from '~/types/project';
import { InMemoryCache } from '~/helpers/InMemoryCache';
import { PROJECTS } from '~/constants';

const getRepository = async ([owner, name]: [string, string], token: string): Promise<IProject> => {
	const response = await fetch(`https://api.github.com/repos/${owner}/${name}`, {
		method: 'GET',
		headers: { Authorization: `Bearer ${token}` }
	});
	const data = await response.json();
	return data;
};

const cache = new InMemoryCache<IProject[]>();

export default defineEventHandler(async () => {
	if (cache.get('projects') && !cache.expired('projects')) {
		return cache.get('projects');
	}

	const { app } = useRuntimeConfig();

	const response = await Promise.all(
		PROJECTS.map(async (project) => {
			const [owner, name] = project.split('/');
			const data = await getRepository([owner, name], app.githubAccessToken);
			return data;
		})
	);

	const projects = response
		.map(({ name, full_name, description, forks_count, stargazers_count, html_url, language }) => ({
			name,
			full_name,
			description,
			forks_count,
			forks_url: `${html_url}/network/members`,
			stargazers_count,
			stargazers_url: `${html_url}/stargazers`,
			html_url,
			language
		}))
		.sort((a, b) => b.stargazers_count - a.stargazers_count);

	cache.set('projects', projects);
	return projects;
});
