import React from 'react';
import ReactDOM from 'react-dom';

import App from '../app';

describe('App Main Container', () => {
  let defaultState;

  beforeEach(() => {
    defaultState = {
      blurred: true,
      defaultDocumentTitle: 'React Key Codes',
      id: 'app',
      newKey: '',
      newKeyCode: null,
      previousKeyCode: ''
    };
  });

  describe.skip('Default suite', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<App />, div);
    });

    it('should render without throwing an error', function() {
      expect(
        shallow(<App />).contains(
          <span className="press-something">
            Press something in your keyboard
          </span>
        )
      ).toBe(true);
    });

    it('should be selectable by class ".app"', () => {
      expect(shallow(<App />).is('.app')).toBe(true);
    });

    it('should mount in a full DOM', () => {
      const wrapper = mount(<App />);

      expect(wrapper.find('.app').length).toBe(1);
      expect(wrapper.find('.key-code')).toHaveLength(0);
    });

    it('should render "Press something in your keyboard" with no keyCode provided', () => {
      expect(render(<App />).text()).toEqual(
        'Press something in your keyboard'
      );
    });
  });

  describe('Default state', () => {
    it('should have blurred set to false when mounted', () => {
      expect(mount(<App />).state()).toEqual({
        ...defaultState,
        blurred: false
      });
    });
  });

  describe('New state', () => {
    it('shouldn\'t render "Press something in your keyboard" with keyCode provided', () => {
      const newState = {
        ...defaultState,
        blurred: false,
        newKeyCode: 188
      };

      expect(
        shallow(<App />)
          .setState(newState)
          .text()
      ).toContain('KeyCode');
    });
  });

  describe('Simulation', () => {
    it('#blur: should have blurred set to false after a blur event occurs', () => {
      const wrapper = mount(<App />);
      const newState = { ...defaultState, blurred: false };

      expect(mount(<App />).state()).toEqual(newState);
      wrapper.find('.app').simulate('blur');
      expect(mount(<App />).state()).toEqual(newState);
    });

    it('#click: should show the default message when the key character is clicked', () => {
      const wrapper = mount(<App />);
      const newState = {
        ...defaultState,
        newKey: 'Tab',
        newKeyCode: 9,
        blurred: false
      };

      expect(wrapper.setState(newState).find('.press-something')).toHaveLength(
        0
      );
      wrapper.find('.app .key-code-text').simulate('click');
      expect(wrapper.find('.press-something')).toHaveLength(1);
    });

    it('#keyDown: should remove default message when a key is pressed', () => {
      describe('tab key', () => {
        const wrapper = mount(<App />);

        expect(wrapper.find('.press-something')).toHaveLength(1);
        wrapper.find('.app').simulate('keyDown', {
          key: 'Tab',
          keyCode: 9,
          metaKey: true,
          which: 9
        });
        expect(wrapper.find('.press-something')).toHaveLength(0);
      });

      describe('0 key', () => {
        describe('which', () => {
          const wrapper = mount(<App />);

          expect(wrapper.find('.press-something')).toHaveLength(1);
          wrapper
            .find('.app')
            .simulate('keyDown', { key: '0', metaKey: false, which: 48 });
          expect(wrapper.find('.press-something')).toHaveLength(0);
        });

        describe('keyCode', () => {
          const wrapper = mount(<App />);

          expect(wrapper.find('.press-something')).toHaveLength(1);
          wrapper
            .find('.app')
            .simulate('keyDown', { key: '0', keyCode: 48, metaKey: false });
          expect(wrapper.find('.press-something')).toHaveLength(0);
        });
      });

      describe('f19', () => {
        describe('which', () => {
          const wrapper = mount(<App />);

          expect(wrapper.find('.press-something')).toHaveLength(1);
          wrapper.find('.app').simulate('keyDown', {
            key: 'F13',
            keyCode: 130,
            metaKey: false,
            which: 130
          });
          expect(wrapper.find('.press-something')).toHaveLength(0);
        });
      });
    });
  });
});
