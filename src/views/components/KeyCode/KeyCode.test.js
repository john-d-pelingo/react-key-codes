import React from 'react';
import ReactDOM from 'react-dom';

import KEY_CODES from '../../../core/constants';

import KeyCode from './index';

describe('KeyCode Component', () => {
    let defaultProps;

    beforeEach(() => {
        defaultProps = {
            keyCode: null,
            keyText: '',
            handleClick: () => {}
        };
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<KeyCode { ...defaultProps } />, div);
    });

    it('should be selectable by class ".key-code"', () => {
        expect(shallow(<KeyCode { ...defaultProps } />).is('.key-code')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<KeyCode { ...defaultProps } />).find('.key-code').length).toBe(1);
    });

    describe('Rendering Static HTML', () => {
        it('should render "What key code is that?" when no keyCode or keyText is provided', () => {
            expect(render(<KeyCode { ...defaultProps } />).text()).toEqual('What key code is that?');
        });

        function shouldRender(keyCode, keyText) {
            it('should render ' + keyText + ' with the keyCode "' + keyCode + '"', () => {
                const newProps = {
                    ...defaultProps,
                    keyCode,
                    keyText
                };
                expect(render(<KeyCode { ...newProps } />).text()).toEqual(keyCode + '' + keyText);
            });
        }

        const keyCodesKeys = Object.keys(KEY_CODES);
        for (let ii = 0; ii < keyCodesKeys.length; ii++) {
            shouldRender(parseInt(keyCodesKeys[ii], 10), KEY_CODES[keyCodesKeys[ii]]);
        }
    });
});
