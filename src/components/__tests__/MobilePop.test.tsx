import { render } from '@testing-library/react'
import React from 'react'

import { MobilePop } from '../MobilePop'

describe('components - MobilePop', () => {
  it('mounts', () => {
    const { getByLabelText } = render(<MobilePop />)

    const mobilePopElement = getByLabelText('mobile-pop')

    expect(mobilePopElement).toMatchSnapshot()
  })
})
