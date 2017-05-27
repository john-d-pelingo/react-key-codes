import React from 'react';
import ReactDOM from 'react-dom';

import { isMobile } from 'core/utils';

import App from 'views/app';
import { MobilePop } from 'views/components';

// Styles
import 'views/scss/style.css';

import registerServiceWorker from './registerServiceWorker';

const uAVO = navigator.userAgent || navigator.vendor || window.opera;

function conditionallyRenderApp() {
  return isMobile(uAVO) ? (<MobilePop />) : (<App />);
}

// TODO: JS Meta Keys (CMD of MacOS).
ReactDOM.render(
  conditionallyRenderApp(),
  document.getElementById('root')
);

registerServiceWorker();
