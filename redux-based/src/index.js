
// Grzegorz B. Zaleski, 30th of June - 13 of July, Warsaw 2021

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createEpicMiddleware } from 'redux-observable';
import { Provider } from 'react-redux';
import { compose, createStore, applyMiddleware } from 'redux';
import { rootEpic } from './epics';
import createReducer from './reducer';

// Enabling Redux Devtools for observing state.
const DEBUG = true

// Global state intruments.
const reducer = createReducer()
const epicMiddleware = createEpicMiddleware()
const middleware = applyMiddleware(epicMiddleware)

let composeEnhancers, store

if (DEBUG) 
{
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    store = createStore(reducer, undefined, composeEnhancers(middleware))
} 
else 
{
    composeEnhancers = compose
    store = createStore(reducer, undefined, composeEnhancers(middleware))
}

epicMiddleware.run(rootEpic);

const root = document.getElementById('root')
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    root)