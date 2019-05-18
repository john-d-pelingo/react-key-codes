import { css } from 'emotion'
import React from 'react'

import { keyCodes } from '../constants/keyCodes'
import { pageTitle } from '../constants/webApp'
import { KeyCode } from './KeyCode'

interface IAppState {
  blurred: boolean
  newKey: string
  newKeyCode: null | string
}

// TODO: use function component with hooks
export class App extends React.Component<{}, IAppState> {
  private appDomNode = React.createRef<HTMLDivElement>()

  constructor(props: {}) {
    super(props)

    /* istanbul ignore next */
    if (process.env.NODE_ENV !== 'test') {
      // eslint-disable-next-line global-require
      const ReactGA = require('react-ga')

      ReactGA.initialize('UA-70753213-5')
      // This just needs to be called once since we have no routes in this case.
      ReactGA.pageview(window.location.pathname)
    }
  }

  state = {
    blurred: false,
    newKey: '',
    newKeyCode: null,
  }

  componentDidMount() {
    // Focus the DOM element
    if (this.appDomNode.current) {
      this.appDomNode.current.focus()
    }
  }

  componentWillUpdate(_: Unused, nextState: IAppState) {
    if (nextState.newKeyCode && nextState.newKey) {
      document.title = `${nextState.newKeyCode} : ${nextState.newKey}`
    }
  }

  componentDidUpdate() {
    if (this.state.blurred) {
      this.setState({
        blurred: false,
      })
    }
  }

  handleBlur = () => {
    this.setState({
      blurred: true,
    })
  }

  handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()

    this.setState(
      {
        newKeyCode: null,
      },
      () => {
        document.title = pageTitle
      },
    )
  }

  handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Keep the original synthetic event around.
    // See https://fb.me/react-event-pooling for more information.
    event.persist()

    if (!event.metaKey) {
      event.preventDefault()
    }

    const newKeyCode =
      typeof event.which === 'number' ? event.which : event.keyCode

    this.setState({
      newKey: keyCodes[newKeyCode]
        ? keyCodes[newKeyCode]
        : event.key.toLowerCase(),
      newKeyCode: String(newKeyCode),
      // or event.which || event.keyCode || 0;
    })
  }

  render() {
    const { newKey, newKeyCode } = this.state

    return (
      // tabindex="0" allows elements besides links and form elements to receive keyboard focus
      // See http://webaim.org/techniques/keyboard/tabindex for more information
      <div
        className={appCss}
        tabIndex={0}
        // TODO: what does this do?
        onBlur={this.handleBlur}
        // TODO: maybe attach to window
        onKeyDown={this.handleKeyDown}
        ref={this.appDomNode}
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
    )
  }
}

// -------
// STYLING
// -------

const appCss = css`
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
`
