// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore No type definitions
import VueTippy from 'vue-tippy';

export default defineNuxtPlugin(({ vueApp }) => {
	vueApp.use(VueTippy);
});
