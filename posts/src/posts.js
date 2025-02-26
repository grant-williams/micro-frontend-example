import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Posts from './posts.component';

const lifecycles = singleSpaReact({
	React,
	ReactDOM,
	rootComponent: Posts,
	domElementGetter: (props) => props.domElementGetter(),
});

export const { bootstrap, mount, unmount } = lifecycles;
