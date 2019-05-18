import React from 'react'
import { render } from 'react-testing-library'

import { KeyCode } from '../KeyCode'

describe('components - KeyCode', () => {
  it('displays the key code and its value', () => {
    const { getByLabelText } = render(
      <KeyCode keyCode={101} keyText="numpad 5" />,
    )

    const keyCodeNumberElement = getByLabelText('key-code-number')
    const keyCodeButtonElement = getByLabelText('key-code-button')

    expect(keyCodeNumberElement.textContent).toBe('101')
    expect(keyCodeButtonElement.textContent).toBe('numpad 5')
  })

  it('displays that the key code is unknown', () => {
    const { getByLabelText } = render(<KeyCode keyCode={88} />)

    const keyCodeNumberElement = getByLabelText('key-code-number')
    const keyCodeButtonElement = getByLabelText('key-code-button')

    expect(keyCodeNumberElement.textContent).toBe('88')
    expect(keyCodeButtonElement.textContent).toBe('What key code is that?')
  })
})
