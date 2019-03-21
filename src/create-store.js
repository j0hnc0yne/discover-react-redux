import { createStore, applyMiddleware, combineReducers } from 'redux';
import { reducer as demosReducer } from './demos/demos-reducer';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const reducer = combineReducers({
  demos: demosReducer
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

const getValue = state => state.demos.value;

export { store, getValue };
