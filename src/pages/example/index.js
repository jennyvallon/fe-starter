import React, {Component} from 'react';
import './index.css';
import {connect} from 'react-redux';
import {load} from './redux/actions';
import get from 'lodash/get';

export class ExamplePage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src='https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to poot</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>the is butternut</code> and save to reload.
                </p>
            </div>
        );
    }
}

export function mapActionsToProps(dispatch) {
    return {
        load: function () {
            return dispatch(load());
        }
    };
}


export function mapStateToProps(state) {
    return {
        examplePageState: get(state, 'examplePage', {})
    };
}

export default connect(mapStateToProps, mapActionsToProps)(ExamplePage);