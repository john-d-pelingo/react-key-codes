import React from 'react';
import ReactDOM from 'react-dom';

import App from './index';

describe('App Main Container', () => {
    let defaultState;

    beforeEach(() => {
        defaultState = {
            blurred: true,
            id: 'app',
            newKeyCode: null,
            previousKeyCode: ''
        };
    });

    describe('Default suite', () => {
        it('renders without crashing', () => {
            const div = document.createElement('div');
            ReactDOM.render(<App />, div);
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
            expect(render(<App />).text()).toEqual('Press something in your keyboard');
        });
    });

    describe('Default state', () => {
        it('should have blurred set to false when mounted', () => {
            expect(mount(<App />).state()).toEqual({ ...defaultState, blurred: false });
        });
    });

    describe('New state', () => {
        it('shouldn\'t render "Press something in your keyboard" with keyCode provided', () => {
            const newState = {
                ...defaultState,
                blurred: false,
                newKeyCode: 188
            };

            expect(shallow(<App />).setState(newState).text()).toContain('KeyCode');
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

        it('#keyDown: should remove default message when a key is pressed', () => {
            const wrapper = mount(<App />);

            expect(wrapper.find('.press-something')).toHaveLength(1);
            wrapper.find('.app').simulate('keyDown', { keyCode: 9, which: 9 });
            expect(wrapper.find('.press-something')).toHaveLength(0);
        });
    });
});
