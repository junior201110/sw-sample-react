import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import counterReducer from './reducers/CounterReducer';
import swEpisodesReducer from './reducers/EpisodesReducer';
import './index.css';
import App from './App';

const store = createStore(
    combineReducers({
        counter: counterReducer,
        sw: swEpisodesReducer
    }),
    applyMiddleware(thunk)
);


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root'));
