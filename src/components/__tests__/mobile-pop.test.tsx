import React from 'react'
import { render } from 'react-testing-library'

import MobilePop from '../MobilePop'

describe('components - MobilePop', () => {
  it('mounts', () => {
    const { getByLabelText } = render(<MobilePop />)

    const mobilePopElement = getByLabelText('mobile-pop')

    expect(mobilePopElement).toMatchSnapshot()
  })
})
