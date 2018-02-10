
import {applyMiddleware, createStore, compose} from 'redux';
// import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
import reducer from './reducers';

// const middleware = applyMiddleware(promise(), thunk/* , createLogger()*/);
const composeEnhancers = typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose,
    enhancer = composeEnhancers(
        applyMiddleware(promise(), thunk/* , createLogger()*/)
    );

let store =  createStore(reducer, enhancer); // createStore(reducer, composeEnhancers(middleware))
export default store;