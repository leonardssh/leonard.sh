import nprogress from 'nprogress';
import 'nprogress/nprogress.css';

nprogress.configure({ showSpinner: false });

export default defineNuxtPlugin(({ $router }) => {
	$router.beforeEach((_to, _from, next) => {
		nprogress.start();
		next();
	});

	$router.afterEach(() => {
		nprogress.done();
	});
});
