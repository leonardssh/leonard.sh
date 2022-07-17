import { type TippyOptions, useTippy } from 'vue-tippy';

export const useTooltip = (opts?: TippyOptions) => {
	const elementRef = ref<HTMLElement>(null);

	const tippy = useTippy(elementRef, {
		followCursor: true,
		animation: false,
		hideOnClick: false,
		...opts
	});

	return { elementRef, tippy };
};
