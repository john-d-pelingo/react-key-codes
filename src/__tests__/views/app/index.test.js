import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount/* , render*/ } from 'enzyme';

import App from '../../../views/app';

describe('App', () => {
    let appComponent;

    beforeEach(() => {
        appComponent = React.createElement(App);
    });

    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        // expect(shallow(appComponent).contains(<div className="App"></div>)).toBe(true);
    });

    it('should be selectable by class "app"', function() {
        expect(shallow(appComponent).is('.app')).toBe(true);
    });

    it('should mount in a full DOM', function() {
        expect(mount(appComponent).find('.app').length).toBe(1);
    });
});
