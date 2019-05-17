import React from 'react'
import { render } from 'react-testing-library'

import MobilePop from '../mobile-pop'

describe('components - MobilePop', () => {
  it('mounts', () => {
    const { getByLabelText } = render(<MobilePop />)

    const mobilePopElement = getByLabelText('mobile-pop')

    expect(mobilePopElement).toMatchSnapshot()
  })
})
