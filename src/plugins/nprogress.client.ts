import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

export default defineNuxtPlugin(({ $router }) => {
	$router.beforeEach((_to, _from, next) => {
		nprogress.start();
		next();
	});

	$router.afterEach(() => {
		nprogress.done();
	});
});
