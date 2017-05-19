/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */

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
            blurred: false,
            id: 'app',
            newKeyCode: null,
            previousKeyCode: ''
        };

        // this._setStateBlurred = this._setStateBlurred.bind(this);
        this.handleBlur = this.handleBlur.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
    }

    componentDidMount() {
        this._setStateBlurred(false);
    }

    componentDidUpdate() {
        if (this.state.blurred === true) {
            this._setStateBlurred(false);
        }
    }

    _setStateBlurred(blurred = false) {
        this.appDOMNode.focus();
        return this.setState(function () {
            return {
                blurred
            };
        });
    }

    handleBlur() {
        this.setState(function () {
            return {
                blurred: true
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
            <div className="app" id={ this.state.id } tabIndex="0" onBlur={ this.handleBlur } onKeyDown={ this.handleKeyDown } ref={ appDOMNode => { this.appDOMNode = appDOMNode; } }>
                { conditionallyRenderKeyCode() }
            </div>
        );
    }
}

export default App;
