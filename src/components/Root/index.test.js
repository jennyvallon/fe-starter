import React from 'react';
import Root from './index';

test('Render the Root component', () => {
    const component = shallow(
        <Root/>
    );
    expect(component).toMatchSnapshot();
});
