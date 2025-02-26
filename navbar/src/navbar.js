import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Navbar from './navbar.component';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Navbar,
	domElementGetter: (props) => props.domElementGetter(),
});

export const { bootstrap, mount, unmount } = lifecycles;
