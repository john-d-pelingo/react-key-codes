/* eslint-disable react/prefer-stateless-function, jsx-a11y/no-static-element-interactions */

import React from 'react';

import { KeyCode } from '../components';

import KEY_CODES from '../../core/constants';

class App extends React.Component {
    constructor(props) {
        super(props);

        if (process.env.NODE_ENV !== 'test') {
            // eslint-disable-next-line global-require
            const ReactGA = require('react-ga');

            ReactGA.initialize('UA-70753213-5');
            // This just needs to be called once since we have no routes in this case.
            ReactGA.pageview(window.location.pathname);
        }

        this.state = {
            newKeyCode: null,
            previousKeyCode: ''
        };

        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        this.appDOMNode.focus();
    }

    handleKeyDown(event) {
        // Keep the original synthetic event around.
        // See https://fb.me/react-event-pooling for more information.
        event.persist();

        this.setState(function (prevState) {
            return {
                newKeyCode: 'which' in event ? event.which : event.keyCode,
                // or event.which || event.keyCode || 0;
                previousKeyCode: prevState.newKeyCode
            };
        });
    }

    handleClick(event) {
        event.preventDefault();

        this.setState({
            newKeyCode: null,
            previousKeyCode: ''
        });
    }

    render() {
        const { newKeyCode } = this.state;

        const conditionallyRenderKeyCode = () => {
            return newKeyCode ?
                (<KeyCode keyCode={ newKeyCode } keyText={ KEY_CODES[newKeyCode] ? KEY_CODES[newKeyCode] : '' } handleClick={ this.handleClick } />)
                : (<span className="press-something">Press something in your keyboard</span>);
        };

        return (
            // tabindex="0" allows elements besides links and form elements to receive keyboard focus.
            // See http://webaim.org/techniques/keyboard/tabindex for more information.
            <div className="app" tabIndex="0" onKeyDown={ this.handleKeyDown } ref={ appDOMNode => { this.appDOMNode = appDOMNode; } }>
                { conditionallyRenderKeyCode() }
            </div>
        );
    }
}

export default App;
