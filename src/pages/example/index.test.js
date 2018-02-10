import React from 'react';
import {ExamplePage} from './index';

test('Render the Root component', () => {
    const component = shallow(
        <ExamplePage/>
    );
    expect(component).toMatchSnapshot();
});