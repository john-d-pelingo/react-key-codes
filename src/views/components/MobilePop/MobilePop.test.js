import React from 'react';
import ReactDOM from 'react-dom';

import MobilePop from './MobilePop';

describe('MobilePop Component', () => {
  describe('Default suite', () => {
    it('should render without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(<MobilePop />, div);
    });

    it('should render without throwing an error', () => {
      expect(shallow(<MobilePop />).contains(
        <div className="mobile-pop">
          <span className="hello-it-seems">
            Hello! <br />It seems like you are browsing this webpage without a keyboard or a mouse. <br />Better luck next time!
          </span>
        </div>
      )).toBe(true);
    });

    it('should be selectable by class ".mobile-pop"', () => {
      expect(shallow(<MobilePop />).is('.mobile-pop')).toBe(true);
    });

    it('should mount in a full DOM', () => {
      expect(mount(<MobilePop />).find('.mobile-pop').length).toBe(1);
    });

    it('should render to static HTML', () => {
      expect(render(
        <MobilePop />).text()
      ).toBe('Hello! It seems like you are browsing this webpage without a keyboard or a mouse. Better luck next time!');
    });
  });
});
