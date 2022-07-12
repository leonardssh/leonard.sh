import { defineNuxtModule, logger } from '@nuxt/kit';
import { resolve } from 'path';
import { copyFileSync, existsSync } from 'fs';

const FILES = {
	HEADER: '_headers',
	REDIRECTS: '_redirects',
	TOML: 'netlify.toml'
};

const FILE_NAMES = Object.values(FILES);

export default defineNuxtModule({
	meta: {
		name: 'netlify-files',
		configKey: 'netlifyFiles',
		compatibility: {
			nuxt: '^3.0.0'
		}
	},
	async setup({ filesDirectory }, nuxt) {
		nuxt.hook('build:done', () => {
			copyExistingNetlifyFiles(FILE_NAMES);
		});

		const copyExistingNetlifyFiles = (filesToCopy: string[]) => {
			filesToCopy.forEach((name) => {
				const origin = resolve(filesDirectory, name);
				const destination = resolve(nuxt.options.rootDir, nuxt.options.buildDir, name);
				const isAvailable = existsSync(origin);

				if (!isAvailable) {
					logger.warn(`No \`${name}\` file found in '${filesDirectory}' .`);
					return;
				}

				logger.info(`Copying ${name} to ${destination}`);
				copyFileSync(origin, destination);
			});
		};
	}
});
