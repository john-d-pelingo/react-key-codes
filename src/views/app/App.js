/* eslint-disable jsx-a11y/no-noninteractive-tabindex, jsx-a11y/no-static-element-interactions */

import React from 'react';

import { KeyCode } from 'views/components';

import KEY_CODES from 'core/constants';

class App extends React.Component {
  constructor(props) {
    super(props);

    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line global-require
      const ReactGA = require('react-ga');

      ReactGA.initialize('UA-70753213-5');
      // This just needs to be called once since we have no routes in this case.
      ReactGA.pageview(window.location.pathname);
    }

    this.state = {
      blurred: false,
      defaultDocumentTitle: 'React Key Codes',
      id: 'app',
      newKey: '',
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

  componentWillUpdate(nextProps, nextState) {
    if (nextState.newKeyCode && nextState.newKey) {
      document.title = `${ nextState.newKeyCode } : ${ nextState.newKey }`;
    } else {
      document.title = nextState.defaultDocumentTitle;
    }
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

    // document.title = this.state.defaultDocumentTitle;
    this.setState({
      newKeyCode: null,
      previousKeyCode: ''
    });
  }

  handleKeyDown(event) {
    // Keep the original synthetic event around.
    // See https://fb.me/react-event-pooling for more information.
    event.persist();

    if (!event.metaKey) {
      event.preventDefault();
    }

    const newKeyCode = (typeof event.which === 'number') ? event.which : event.keyCode;
    this.setState(function (prevState) {
      return {
        newKey: KEY_CODES[newKeyCode] ? KEY_CODES[newKeyCode] : event.key.toLowerCase(),
        newKeyCode,
        // or event.which || event.keyCode || 0;
        previousKeyCode: prevState.newKeyCode
      };
    });
  }

  render() {
    const { newKey, newKeyCode } = this.state;

    const conditionallyRenderKeyCode = () => {
      return newKeyCode ?
        (<KeyCode keyCode={ newKeyCode } keyText={ newKey } handleClick={ this.handleClick } />)
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
