import React from 'react';
import ReactDOM from 'react-dom';

import MobilePop from './index';

describe('MobilePop Component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<MobilePop />, div);
    });

    it('should be selectable by class ".mobile-pop"', () => {
        expect(shallow(<MobilePop />).is('.mobile-pop')).toBe(true);
    });

    it('should mount in a full DOM', () => {
        expect(mount(<MobilePop />).find('.mobile-pop').length).toBe(1);
    });

    it('should render to static HTML', function() {
        expect(render(<MobilePop />).text()).toEqual('Hello! It seems like you are browsing this webpage without a keyboard or a mouse. Better luck next time!');
    });
});
