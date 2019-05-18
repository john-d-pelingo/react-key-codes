import React from 'react'
import { render } from 'react-testing-library'

import { KeyCode } from '../KeyCode'

describe('components - KeyCode', () => {
  it('displays the key code and its value', () => {
    const { getByLabelText } = render(
      <KeyCode keyCode={101} keyText="numpad 5" />,
    )

    const keyCodeElement = getByLabelText('key-code')
    const keyCodeCodeElement = getByLabelText('key-code-code')

    expect(keyCodeElement.textContent).toBe('101')
    expect(keyCodeCodeElement.textContent).toBe('numpad 5')
  })

  it('displays that the key code is unknown', () => {
    const { getByLabelText } = render(<KeyCode keyCode={88} />)

    const keyCodeElement = getByLabelText('key-code')
    const keyCodeCodeElement = getByLabelText('key-code-code')

    expect(keyCodeElement.textContent).toBe('88')
    expect(keyCodeCodeElement.textContent).toBe('What key code is that?')
  })
})
