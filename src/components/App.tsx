import { css } from 'emotion'
import React, { useEffect } from 'react'

import { pageTitle } from '../constants/webApp'
import { useKeyCode } from '../hooks/useKeyCode'
import { IKeyCodeState } from '../hooks/useKeyCode/types'
import { KeyCode } from './KeyCode'

const initialState: IKeyCodeState = {
  isBlurred: true,
  newKey: '',
  newKeyCode: null,
}

export const App: React.FC = () => {
  const {
    appElement,
    handleBlur,
    handleClick: handleKeyCodeClick,
    handleFocus,
    handleKeyDown: handleKeyCodeKeyDown,
    newKey,
    newKeyCode,
  } = useKeyCode<HTMLDivElement>(initialState)

  useEffect(() => {
    if (process.env.NODE_ENV !== 'test') {
      const ReactGA = require('react-ga')

      ReactGA.initialize('UA-70753213-5')
      // NOTE: This just needs to be called once since we have no routes in this case.
      ReactGA.pageview(window.location.pathname)
    }
  }, [])

  useEffect(() => {
    if (newKey && newKeyCode) {
      document.title = `${newKeyCode} : ${newKey}`
    }
  }, [newKey, newKeyCode])

  const handleClick = (event: React.MouseEvent<HTMLSpanElement>) => {
    event.preventDefault()
    handleKeyCodeClick()
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    // Keep the original synthetic event around.
    // See https://fb.me/react-event-pooling for more information.
    event.persist()

    if (!event.metaKey) {
      event.preventDefault()
    }

    handleKeyCodeKeyDown({
      key: event.key,
      which: event.which,
    })
  }

  return (
    // NOTE: tabindex="0" allows elements besides links and form elements to receive keyboard focus
    // NOTE: See http://webaim.org/techniques/keyboard/tabindex for more information
    <div
      className={appCss}
      tabIndex={0}
      // TODO: what does this do?
      onBlur={handleBlur}
      onFocus={handleFocus}
      // TODO: maybe attach to window
      onKeyDown={handleKeyDown}
      ref={appElement}
    >
      {newKeyCode ? (
        <KeyCode
          keyCode={Number(newKeyCode)}
          keyText={newKey}
          handleClick={event => {
            handleClick(event)
            document.title = pageTitle
          }}
        />
      ) : (
        <span className="press-something">
          Press something in your keyboard
        </span>
      )}
    </div>
  )
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
