/* eslint-disable react/prefer-stateless-function */

import React from 'react';
import ReactGA from 'react-ga';

import KeyCode from '../components';
import '../styles/app/App.css';

import KEY_CODES from '../../core/constants';

class App extends React.Component {
    constructor(props) {
        super(props);

        if (process.env.NODE_ENV !== 'test') {
            ReactGA.initialize('UA-70753213-5');
            // This just needs to be called once since we have no routes in this case.
            ReactGA.pageview(window.location.pathname);
        }

        this.state = {
            newKeyCode: null,
            previousKeyCode: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentWillMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    handleKeyDown(event) {
        this.setState(function (prevState) {
            return {
                newKeyCode: 'which' in event ? event.which : event.keyCode,
                // or event.which || event.keyCode || 0;
                previousKeyCode: prevState.newKeyCode
            };
        });
    }

    render() {
        const { newKeyCode } = this.state;

        const conditionallyRenderKeyCode = () => {
            return newKeyCode ?
                (<KeyCode keyCode={ newKeyCode } keyText={ KEY_CODES[newKeyCode] ? KEY_CODES[newKeyCode] : '' } />)
                : (<span className="press-something">Press something in your keyboard</span>);
        };

        return (
            <div className="App">
                { conditionallyRenderKeyCode() }
            </div>
        );
    }
}

export default App;
