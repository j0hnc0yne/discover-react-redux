import { createStore, applyMiddleware } from 'redux';
import { reducer } from './redux/redux-demo';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger)));

export { store };
