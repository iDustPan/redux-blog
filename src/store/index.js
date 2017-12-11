
import { createStore, applyMiddleware } from 'redux';
import  RootReducer  from '../reducers/index';
import { createLogger } from 'redux-logger';
import promise from 'redux-promise';

const Store = createStore(RootReducer, {}, applyMiddleware(promise, createLogger()));
export default Store;
