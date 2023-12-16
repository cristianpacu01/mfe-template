import React from 'react';
import ReactDOM from 'react-dom';
import SingleSpaReact from 'single-spa-react';
import App from './app';
import './index.css';

const reactLifeCycles = SingleSpaReact({
  React,
  ReactDOM,
  renderType: 'render',
  rootComponent: App,
});

export const { bootstrap, mount, unmount } = reactLifeCycles;
