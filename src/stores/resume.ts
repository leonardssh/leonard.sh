import { defineStore, acceptHMRUpdate } from 'pinia';

import type { Resume } from '~/types/resume';

export const useResumeStore = defineStore('resume', {
	state: () => ({ resume: {} as Resume }),
	actions: {
		setResume(resume: Resume) {
			this.resume = resume;
		}
	}
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(useResumeStore, import.meta.hot));
}
