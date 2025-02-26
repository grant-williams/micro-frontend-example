import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Products from './products.component';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Products,
	domElementGetter: (props) => props.domElementGetter(),
});

export const { bootstrap, mount, unmount } = lifecycles;
