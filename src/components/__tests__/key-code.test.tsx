import React from 'react'

import KeyCode from '../key-code'

describe.skip(`${KeyCode.name} Component`, () => {
  it('should with correct styles', () => {
    const defaultProps = {
      keyCode: null,
      keyText: '',
      handleClick: () => {},
    }

    const snap = mount(<KeyCode {...defaultProps} />)
    const snapJson = enzymeToJson(snap)

    expect(snapJson).toMatchSnapshot()
  })
})
