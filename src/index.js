import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/app';

// Base styles.
import './views/styles/index.css';

// Main App styles.
import './views/styles/app/App.css';

// Components styles.
import './views/styles/components/KeyCode.css';

// TODO: JS Meta Keys (CMD of MacOS).
ReactDOM.render(
    <App />,
    document.getElementById('root')
);
