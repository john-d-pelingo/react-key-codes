import React from 'react'

import MobilePop from '../mobile-pop'

describe.skip(`${MobilePop.name} Component`, () => {
  it('should with correct styles', () => {
    const snap = mount(<MobilePop />)
    const snapJson = enzymeToJson(snap)

    expect(snapJson).toMatchSnapshot()
  })
})
