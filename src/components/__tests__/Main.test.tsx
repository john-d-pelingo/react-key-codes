import React from 'react'
import { render } from 'react-testing-library'

import { Main } from '../Main'

describe('components - Main', () => {
  it('mounts', () => {
    const { getByText } = render(<Main />)

    const element = getByText(/press a key/i)

    expect(element).toMatchSnapshot()
  })
})
