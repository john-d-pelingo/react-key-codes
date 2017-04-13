import React from 'react';
import ReactDOM from 'react-dom';

import App from './views/app';

// Base styles.
import './views/styles/index.css';

// Main App CSS.
import './views/styles/app/App.css';

// Components CSS.
import './views/styles/components/KeyCode.css';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
