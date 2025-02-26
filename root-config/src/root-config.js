import { registerApplication, start } from 'single-spa';
import { bootstrap, mount, unmount } from './root-layout';

// Register the root layout application first
registerApplication({
	name: '@example/root-layout',
	app: { bootstrap, mount, unmount },
	activeWhen: ['/'],
});

const domElementGetter = (id) => {
	return () => {
		let el = document.getElementById(id);
		if (!el) {
			el = document.createElement('div');
			el.id = id;
			document.body.appendChild(el);
		}
		return el;
	};
};

// Register other applications with a domElementGetter function
registerApplication({
	name: '@example/navbar',
	app: () => System.import('navbar'),
	activeWhen: ['/'],
	customProps: { domElementGetter: domElementGetter('navbar') },
});

registerApplication({
	name: '@example/home',
	app: () => System.import('home'),
	activeWhen: (location) => location.pathname === '/',
	customProps: { domElementGetter: domElementGetter('main-content') },
});

registerApplication({
	name: '@example/products',
	app: () => System.import('products'),
	activeWhen: ['/products'],
	customProps: { domElementGetter: domElementGetter('main-content') },
});

registerApplication({
	name: '@example/posts',
	app: () => System.import('posts'),
	activeWhen: ['/posts'],
	customProps: { domElementGetter: domElementGetter('main-content') },
});

start();