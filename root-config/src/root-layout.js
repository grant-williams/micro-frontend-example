import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';

const RootLayout = () => (
	<div>
		<header id='navbar'></header>
		<main id='main-content'></main>
	</div>
);

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: RootLayout,
	errorBoundary(err, info, props) {
		console.error('Error rendering root layout:', err, info);
		return <div>Error rendering root layout</div>;
	},
});

export const { bootstrap, mount, unmount } = lifecycles;
