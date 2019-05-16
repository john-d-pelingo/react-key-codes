import React from 'react';
import { css } from 'emotion';

import { KEY_CODES, PAGE_TITLE } from '../constants';

import KeyCode from './key-code';

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
  }

  state = {
    blurred: false,
    newKey: '',
    newKeyCode: null
  };

  componentDidMount() {
    // Focus the DOM element
    this.appDOMNode.focus();
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextState.newKeyCode && nextState.newKey) {
      document.title = `${nextState.newKeyCode} : ${nextState.newKey}`;
    }
  }

  componentDidUpdate() {
    if (this.state.blurred === true) {
      this.setState({
        blurred: false
      });
    }
  }

  handleBlur = () => {
    this.setState({
      blurred: true
    });
  };

  handleClick = event => {
    event.preventDefault();

    this.setState(
      {
        newKeyCode: null
      },
      () => {
        document.title = PAGE_TITLE;
      }
    );
  };

  handleKeyDown = event => {
    // Keep the original synthetic event around.
    // See https://fb.me/react-event-pooling for more information.
    event.persist();

    if (!event.metaKey) {
      event.preventDefault();
    }

    const newKeyCode =
      typeof event.which === 'number' ? event.which : event.keyCode;

    this.setState({
      newKey: KEY_CODES[newKeyCode]
        ? KEY_CODES[newKeyCode]
        : event.key.toLowerCase(),
      newKeyCode
      // or event.which || event.keyCode || 0;
    });
  };

  render() {
    const { newKey, newKeyCode } = this.state;

    return (
      // tabindex="0" allows elements besides links and form elements to receive keyboard focus
      // See http://webaim.org/techniques/keyboard/tabindex for more information
      <div
        className={app}
        tabIndex="0"
        onBlur={this.handleBlur}
        onKeyDown={this.handleKeyDown}
        ref={appDOMNode => {
          this.appDOMNode = appDOMNode;
        }}
      >
        {newKeyCode ? (
          <KeyCode
            keyCode={newKeyCode}
            keyText={newKey}
            handleClick={this.handleClick}
          />
        ) : (
          <span className="press-something">
            Press something in your keyboard
          </span>
        )}
      </div>
    );
  }
}

// -------
// STYLING
// -------

const app = css`
  display: table;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  .press-something {
    display: table-cell;
    font-size: 50px;
    line-height: 55px;
    vertical-align: middle;
  }
`;

export default App;
