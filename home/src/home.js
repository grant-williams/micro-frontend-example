import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Home from './home.component';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Home,
	domElementGetter: (props) => props.domElementGetter(),
});

export const { bootstrap, mount, unmount } = lifecycles;
