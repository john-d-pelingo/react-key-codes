import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'emotion';

import { App, MobilePop } from './components';
import { BASE_STYLES } from './constants';
import { isMobile } from './utils';
import registerServiceWorker from './registerServiceWorker';

// Global Styles
injectGlobal(BASE_STYLES);

const uAVO = navigator.userAgent || navigator.vendor || window.opera;

function conditionallyRenderApp() {
  return isMobile(uAVO) ? <MobilePop /> : <App />;
}

// TODO: JS Meta Keys (CMD of MacOS).
ReactDOM.render(conditionallyRenderApp(), document.getElementById('root'));

registerServiceWorker();
