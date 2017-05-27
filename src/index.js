import React from 'react';
import ReactDOM from 'react-dom';

import { isMobile } from 'utils';

import App from 'app';
import { MobilePop } from 'components';

// Styles.
import 'scss/style.css';

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
