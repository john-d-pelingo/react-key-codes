import React from 'react'

import App from '../app'

describe.skip(`${App.name} Component`, () => {
  it('should with correct styles', () => {
    const snap = mount(<App />)
    const snapJson = enzymeToJson(snap)

    expect(snapJson).toMatchSnapshot()
  })

  it('should render without crashing', () => {
    const wrapper = mount(<App />)

    expect(wrapper.find('span').text()).toBe('Press something in your keyboard')

    wrapper.setState({
      newKeyCode: 13,
      newKey: 'enter',
    })

    expect(wrapper.find('.key-code-code').text()).toBe('13')
    expect(wrapper.find('.key-code-text').text()).toBe('enter')
  })

  it('should display the new valid key code when a valid key is pressed', () => {
    const wrapper = mount(<App />)
    wrapper.simulate('keyDown', { key: '7', which: 55 })

    expect(wrapper.find('.key-code-code').text()).toBe('55')
    expect(wrapper.find('.key-code-text').text()).toBe('7')
  })

  it('should display a valid key code when a valid key is pressed', () => {
    const wrapper = mount(<App />)
    wrapper.simulate('keyDown', {
      key: 'the-random',
      keyCode: 9001,
      metaKey: true,
      which: 'bot',
    })

    expect(wrapper.find('.key-code-code').text()).toBe('9001')
    expect(wrapper.find('.key-code-text').text()).toBe('the-random')
  })

  it('should display the default screen when the keycode button is clicked', () => {
    const wrapper = mount(<App />)
    wrapper.setState({
      newKeyCode: 97,
      newKey: 'numpad 1',
    })
    wrapper.find('.key-code-text').simulate('click')

    expect(wrapper.text()).toBe('Press something in your keyboard')
  })

  it('should set the blur state to true and immediately to false on component blur', () => {
    const wrapper = mount(<App />)
    wrapper.simulate('blur')

    expect(wrapper.state().blurred).toBe(false)
  })
})
