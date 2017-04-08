/* eslint-disable react/prefer-stateless-function */

import React, { Component } from 'react';
import ReactGA from 'react-ga';

import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);

        ReactGA.initialize('UA-70753213-5');
        // This just needs to be called once since we have no routes in this case.
        ReactGA.pageview(window.location.pathname);
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
            </div>
        );
    }
}

export default App;
