import {
  fireEvent,
  getByLabelText as rootGetByLabelText,
  render,
} from '@testing-library/react'
import React from 'react'

import { Main } from '../Main'

describe('components (integration) - Main', () => {
  it('changes the document title to the corresponding key on key press', () => {
    const { getByLabelText } = render(<Main />)

    const appElement = getByLabelText('key-code-app')

    fireEvent.keyDown(appElement, {
      keyCode: 13,
    })

    expect(document.title).toBe('13 : enter')
  })

  it('changes the document title to an unknown key on an unknown key press', () => {
    const { getByLabelText } = render(<Main />)

    const appElement = getByLabelText('key-code-app')

    fireEvent.keyDown(appElement, {
      keyCode: 999,
    })

    expect(document.title).toBe('999 : unidentified')
  })

  it('resets view on key press and click of the button', () => {
    const { getByLabelText } = render(<Main />)

    const appElement = getByLabelText('key-code-app')

    expect(appElement.textContent).toMatch(/press a key/i)

    fireEvent.keyDown(appElement, {
      keyCode: 18,
    })

    expect(appElement.textContent).toMatch(/^\d/)
    expect(appElement.textContent).toMatch(/alt/i)
    expect(appElement.textContent).not.toMatch(/press a key/i)

    const keyCodeButtonElement = rootGetByLabelText(
      appElement,
      'key-code-button',
    )

    fireEvent.click(keyCodeButtonElement)

    expect(appElement.textContent).toMatch(/press a key/i)
  })
})
