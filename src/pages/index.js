import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import TestPage from './example/index';

export default () => (
    <Router>
        <Switch>
            {/* <Route path='/' exact component={TestPage}/> */}
            {/* match location and history props are passes in the below implementation */}
            <Route path='/' exact render={(props) => <TestPage {...props}/>}/>
        </Switch>
    </Router>
);